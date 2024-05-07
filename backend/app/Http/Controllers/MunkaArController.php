<?php

namespace App\Http\Controllers;

use App\Models\MunkaAr;
use Illuminate\Http\Request;

class MunkaArController extends Controller
{
    public function index()
    {
        return response()->json(MunkaAr::all());
    }

    public function show($id)
    {
        return response()->json(MunkaAr::find($id));
    }

    public function store(Request $request)
    {
        $munkaAr = new MunkaAr();
        $munkaAr->megnevezes = $request->megnevezes;
        $munkaAr->ara = $request->ara;
        $munkaAr->save();
    }

    public function update(Request $request, $id)
    {
        MunkaAr::findorFail($id)->fill($request->all())->save();
    }

    public function destroy($id)
    {
        MunkaAr::findOrFail($id)->delete();
    }

    public function getMunkaMegnevezesek(){
        return MunkaAr::all()->getMegnevezesAttribute();
    }

}
