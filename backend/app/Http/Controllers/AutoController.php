<?php

namespace App\Http\Controllers;

use App\Models\Auto;
use Illuminate\Http\Request;

class AutoController extends Controller
{
    public function index()
    {
        return response()->json(Auto::all());
    }

    public function show($id)
    {
        return response()->json(Auto::find($id));
    }

    public function store(Request $request)
    {
        (new Auto())->fill($request->all())->save();
    }

    public function update(Request $request, $id)
    {
        Auto::findorFail($id)->fill($request->all())->save();
    }
    
    public function destroy($id)
    {
        Auto::findOrFail($id)->delete();
    }
}
