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
        $user = Auth::user();
        return DB::table('munkalaps as m')
            ->join('users as u', 'u.id', 'm.ugyfel')
            ->select('munkalapszam', 'auto', 'statusz', 'm.created_at as letrehozva', 'm.updated_at as modosult', 'szamlasorszam')
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
            ->where("statusz" , "=","0")
            ->get();
    }

    public function folyamatmunka()
    {
        return DB::table('munkalaps as m')
            ->where("statusz" , "=","1")
            ->get();
    }

    public function befejezettmunka()
    {
        return DB::table('munkalaps as m')
            ->where("statusz" , "=","2")
            ->get();
    }

    
}
