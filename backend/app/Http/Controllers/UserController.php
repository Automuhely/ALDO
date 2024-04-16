<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all());
    }

    public function show($id)
    {
        return response()->json(User::find($id));
    }

    public function store(Request $request)
    {
        (new User())->fill($request->all())->save();
    }

    public function update(Request $request, $id)
    {
        User::findorFail($id)->fill($request->all())->save();
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();
    }
    public function vezmunk($id)
    {
        return DB::table('munkalaps')
            ->where("munkavezeto", $id)
            ->get();
    }

    public function vezszerelok()
    {
        return DB::table('users as u')
            ->where('u.szerepkor', '=', 'vezetoszerelo')
            ->select('u.name')
            ->get();
    }


    public function szerlmunk($id)

    {
        
        return DB::table('munkalaps as m')
            ->join("munkalap_tetels as mt", "m.munkalapszam", "=", "mt.munkalapszam")
            ->where('mt.szerelo', $id)
            ->groupBy("mt.munkalapszam", "mt.szerelo", "m.auto", "m.ugyfel", "m.munkavezeto", "mt.munka_kezd_ido", "mt.munka_vegz_ido", "m.created_at", "m.updated_at")
            ->select(
                "mt.munkalapszam",
                "mt.szerelo",
                "m.auto",
                "m.ugyfel",
                "m.munkavezeto",
                "m.created_at as letrehozva",
                "m.updated_at as modositva"
            )
            ->get();
    }

    
    
}
