<?php

namespace App\Http\Controllers;

use App\Models\Feladat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
        try {
            Feladat::findOrFail($id)->delete();
            return response()->json(['message' => 'Sikeres törlés'], 200);
        } catch (\Exception $e) {
            Log::error('Hiba történt a törlés közben: ' . $e->getMessage());
            return response()->json(['message' => 'Hiba történt a törlés közben'], 500);
        }
    }
    

    public function getMunkaMegnevezesek(){
        return Feladat::all()->getMegnevezesAttribute();
    }

}
