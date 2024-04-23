<?php

namespace App\Http\Controllers;

use App\Models\Munkalap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MunkalapController extends Controller
{
    public function index()
    {
        return response()->json(Munkalap::all());
    }


    public function show($id)
    {
        return response()->json(Munkalap::find($id));
    }

    public function store(Request $request)
    {
        (new Munkalap())->fill($request->all())->save();
    }

    public function update(Request $request, $id)
    {
        Munkalap::findorFail($id)->fill($request->all())->save();
    }

    public function destroy($id)
    {
        Munkalap::findOrFail($id)->delete();
    }

    public function szamlaim()
    {
        // bejelentkezett felhasználó összes eddigi munkalapja
        // + munkavezető nevének kiírása
        $user = Auth::user();
        return DB::table('autos as a')
            ->join('munkalaps as m', 'm.auto', 'a.id')
            ->join('users as u', 'u.id', 'm.ugyfel')
            ->join('users as mv', 'mv.id', 'm.munkavezeto')
            ->select('a.*', 'm.*', 'u.name as ugyfel_nev', 'mv.name as munkavezeto_nev')
            ->where('m.ugyfel', $user->id)
            ->get();
    }

    public function autoim()
    {
        // Bejelentkezett felhasználó autóinak db száma
        $user = Auth::user();
        return
            DB::table('autos')
            ->select()
            ->where('ugyfel', $user->id)
            ->get();
    }

    public function autoimCount()
    {
        // Bejelentkezett felhasználó autóinak db száma
        $user = Auth::user();
        return
            DB::table('autos')
            ->select()
            ->where('ugyfel', $user->id)
            ->count();
    }

    public function legfrissebb()
    {
        /* 
        aktuális autónak a legutoljára létrehozott munkalapjának
    
            státusza
            dátuma
            alvázszáma
            munkalapszáma       
                  
        */

        $user = Auth::user();

        $autos = DB::table('autos')
            ->where('ugyfel', 6)
            ->pluck('alvazszam');

        $result = DB::table('munkalaps as m')
            ->whereIn('auto', $autos)
            ->select('ugyfel', 'munkalapszam', 'auto as alvazszam', 'statusz', 'created_at as letrehozva')
            ->orderBy('created_at', 'desc')
            ->get();
        return $result;
    }

    public function ugyfel($user)
    {
        // adott ügyfélnek kiállított összes munkalap
        return DB::table('munkalaps')
            ->where('ugyfel', $user)
            ->get();
    }

    public function elnemkezdetmunka()
    {
        return DB::table('munkalaps as m')
            ->join('users as u', 'u.id', '=', 'm.ugyfel')
            ->join('autos as a', 'a.id', '=', 'm.auto')
            ->join('munka_ars as ma', 'ma.id', '=', 'm.altalanosLeiras')
            ->select('m.munkalapszam', 'a.marka', 'a.rendszam', 'u.name', 'm.munkavezeto', 'ma.megnevezes', 'm.elvitel_ido', 'm.szamlaszam')
            ->where('m.statusz', '=', '0')
            ->get();
    }

    public function folyamatmunka()
    {
        return DB::table('munkalaps as m')
            ->join('users as u', 'u.id', '=', 'm.ugyfel')
            ->join('autos as a', 'a.id', '=', 'm.auto')
            ->join('munka_ars as ma', 'ma.id', '=', 'm.altalanosLeiras')
            ->select('m.munkalapszam', 'a.marka', 'a.rendszam', 'u.name', 'm.munkavezeto', 'ma.megnevezes', 'm.elvitel_ido', 'm.szamlaszam')
            ->where('m.statusz', '=', '1')
            ->get();
    }

    public function befejezettmunka()
    {

        return DB::table('munkalaps as m')
            ->join('users as u', 'u.id', '=', 'm.ugyfel')
            ->join('autos as a', 'a.id', '=', 'm.auto')
            ->join('munka_ars as ma', 'ma.id', '=', 'm.altalanosLeiras')
            ->select('m.munkalapszam', 'a.marka', 'a.rendszam', 'u.name', 'm.munkavezeto', 'ma.megnevezes', 'm.elvitel_ido', 'm.szamlaszam')
            ->where('m.statusz', '=', '2')
            ->get();
    }

    public function folyamatmunkapost(Request $request)
{
    try {
        $munkalapszam = $request->input('munkalapszam');

        $munkalap = Munkalap::where('munkalapszam', $munkalapszam)->first();
        // Ellenőrizzük, hogy létezik-e a munkalap
        if ($munkalap) {
            $munkalap->statusz = 1; 
            $munkalap->save();
            return response()->json(['message' => 'Státusz sikeresen megváltoztatva'], 200);
        } else {
            // Ha a munkalap nem létezik, akkor hibát küldünk vissza
            return response()->json(['error' => 'A megadott munkalapszám nem található'], 404);
        }
    } catch (\Exception $e) {
        // Ha hiba történik, akkor azt elküldjük JSON formában a frontend felé
        return response()->json(['error' => $e->getMessage()], 500);
    }
}


public function befejezettmunkapost(Request $request)
{
    try {
    $munkalapszam = $request->input('munkalapszam');

    $munkalap = Munkalap::where('munkalapszam', $munkalapszam)->first();
    // Ellenőrizzük, hogy létezik-e a munkalap
    if ($munkalap) {
        $munkalap->statusz = 2; 
        $munkalap->save();
        return response()->json(['message' => 'Státusz sikeresen megváltoztatva'], 200);
    } else {
        // Ha a munkalap nem létezik, akkor hibát küldünk vissza
        return response()->json(['error' => 'A megadott munkalapszám nem található'], 404);
    }
} catch (\Exception $e) {
    // Ha hiba történik, akkor azt elküldjük JSON formában a frontend felé
    return response()->json(['error' => $e->getMessage()], 500);
}
}

   
}
