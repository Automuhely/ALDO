<?php

namespace App\Http\Controllers;

use App\Models\Auto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AutoController extends Controller
{
    public function index()
    {
        return Auto::all();
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

    // adott ügyfél autóinak kilistázása
    public function autoja($user)
    {
        return DB::table('autos')
            ->where('ugyfel', $user)
            ->get();
    }
}
