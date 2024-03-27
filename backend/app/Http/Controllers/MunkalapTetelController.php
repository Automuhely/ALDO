<?php

namespace App\Http\Controllers;

use App\Models\MunkalapTetel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MunkalapTetelController extends Controller
{
    public function index()
    {
        return response()->json(MunkalapTetel::all());
    }

    public function show($id)
    {
        return response()->json(MunkalapTetel::find($id));
    }

    public function store(Request $request)
    {
        (new MunkalapTetel())->fill($request->all())->save();
    }

    public function update(Request $request, $id)
    {
        MunkalapTetel::findorFail($id)->fill($request->all())->save();
    }
    
    public function destroy($id)
    {
        MunkalapTetel::findOrFail($id)->delete();
    }

    
}
