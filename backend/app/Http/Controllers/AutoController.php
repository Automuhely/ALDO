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
        $validaltAuto = $request->validate([
            'rendszam' => ['required', 'unique:autos', 'regex:/^(?=.*[a-zA-Z]{3,})(?=.*[0-9]{3,}).{6,10}$/'],
            'marka' => 'required',
            'alvazszam' => ['required', 'unique:autos', 'regex:/^[A-HJ-NPR-Z0-9]{17}$/'],
            'motorkod' => ['required', 'unique:autos', 'regex:/^[A-Za-z0-9]{3,6}$/'],
            'evjarat' => 'required|digits:4',
        ], [
            'rendszam.unique' => 'A rendszám már foglalt.',
            'alvazszam.unique' => 'Az alvázszám már foglalt.',
            'motorkod.unique' => 'A motorkód már foglalt.',
            'rendszam.regex' => 'Helytelen formátum',
            'alvazszam.regex' => 'Helytelen formátum',
            'motorkod.regex' => 'Helytelen formátum',
            'evjarat.digits' => 'Helytelen formátum.',
            'marka.required' => 'Válaszd ki a márkáját'
        ]);

        $auto = Auto::create($validaltAuto);
        if (!empty($auto)) {
            return response()->json($auto, 201);
        } else {
            return response()->json(['error' => 'Nincsenek adatok'], 404);
        }
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
            ->join('users', 'autos.ugyfel', '=', 'users.id')
            ->select('autos.*', 'users.name as ugyfelnev')
            ->where('ugyfel', $user)
            ->get();
    }
}
