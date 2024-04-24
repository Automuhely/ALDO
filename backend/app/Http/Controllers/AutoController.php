<?php

namespace App\Http\Controllers;

use App\Models\Auto;
use App\Validation\AutoValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $rules = AutoValidation::rules();
        $attributes = AutoValidation::attributes();
        $messages = AutoValidation::messages();

        $validatedData = $request->validate($rules, $messages, $attributes);

        $auto = Auto::create($validatedData);
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

    public function autoMarkak()
    {
        return response()->json(Auto::getAutoMarkak());
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

    public function autoim()
    {
        // Bejelentkezett felhasználó autóinak db száma
        $user = Auth::user();
        return
            DB::table('autos')
            ->select()
            ->where('ugyfel', $user->id)
            ->get();
    }

    public function autoimCount()
    {
        // Bejelentkezett felhasználó autóinak db száma
        $user = Auth::user();
        return
            DB::table('autos')
            ->select()
            ->where('ugyfel', $user->id)
            ->count();
    }

    public function legfrissebb()
    {
        /* 
        aktuális autónak a legutoljára létrehozott munkalapjának
            státusza
            dátuma
            alvázszáma
            munkalapszáma                  
        */

        $user = Auth::user();

        $autos = DB::table('autos')
            ->where('ugyfel', $user)
            ->pluck('alvazszam');

        $result = DB::table('munkalaps as m')
            ->whereIn('auto', $autos)
            ->select('ugyfel', 'munkalapszam', 'auto as alvazszam', 'statusz', 'created_at as letrehozva')
            ->orderBy('created_at', 'desc')
            ->get();
        return $result;
    }
}
