<?php

namespace App\Http\Controllers;

use App\Models\Munkalap;
use App\Models\User;
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
            ->where("statusz", "=", "0")
            ->get();
    }

    public function folyamatmunka()
    {
        return DB::table('munkalaps as m')
            ->where("statusz", "=", "1")
            ->get();
    }

    public function befejezettmunka()
    {
        return DB::table('munkalaps as m')
            ->where("statusz", "=", "2")
            ->get();
    }
}
