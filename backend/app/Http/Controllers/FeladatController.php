<?php

namespace App\Http\Controllers;

use App\Models\Feladat;
use Illuminate\Http\Request;

class FeladatController extends Controller
{
    public function index()
    {
        return response()->json(Feladat::all());
    }

    public function show($id)
    {
        return response()->json(Feladat::find($id));
    }

    public function store(Request $request)
    {
        $fel = new Feladat();
        $fel->megnevezes = $request->megnevezes;
        $fel->ara = $request->ara;
        $fel->save();
    }

    public function update(Request $request, $id)
    {
        Feladat::findorFail($id)->fill($request->all())->save();
    }

    public function destroy($id)
    {
        Feladat::findOrFail($id)->delete();
    }

    public function getMunkaMegnevezesek(){
        return Feladat::all()->getMegnevezesAttribute();
    }

}
