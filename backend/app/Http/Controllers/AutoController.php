<?php

namespace App\Http\Controllers;

use App\Models\Auto;
use App\Validation\AutoValidation;
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
}
