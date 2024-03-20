<?php

namespace App\Http\Controllers;

use App\Models\Munkalap;
use Illuminate\Http\Request;

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
}
