<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all());
    }

    public function show($id)
    {
        return response()->json(User::find($id));
    }

    public function store(Request $request)
    {
        (new User())->fill($request->all())->save();
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255', 'regex:/^([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\-]*)(\s([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\-]*))*$/'],
            'cim' => ['required', 'string', 'regex:/^[A-Za-z0-9\s\.,\/\-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]{1,255}$/'],
            'telefon' => ['required', 'string', 'regex:/^06\d{1}(\d{7}|\d{8})$/'],
            'szulido' => ['required', 'date'],
            'adoazonosito' => ['required_without:adoszam', 'regex:/^\d{10}$/'],
            'adoszam' => ['nullable', 'regex:/^\d{8}-\d{1}-\d{1}|\d{8}-\d{1}$/'],
        ], [
            'name.required' => 'A név megadása kötelező.',
            'cim.required' => 'A cím megadása kötelező.',
            'telefon.required' => 'A telefonszám megadása kötelező.',
            'szulido.required' => 'A születési idő megadása kötelező.',
            'adoazonosito.required_without' => 'Az adóazonosító megadása kötelező, ha az adószám nincs megadva.',
            'adoszam.required_without' => 'Az adószám megadása kötelező, ha az adóazonosító nincs megadva.',
            'name.regex' => 'Helytelen formátum',
            'cim.regex' => 'Helytelen formátum',
            'telefon.regex' => 'Helytelen formátum',
            'szulido.date' => 'Helytelen formátum',
            'adoazonosito.regex' => 'Helytelen formátum',
            'adoszam.regex' => 'Helytelen formátum',
        ]);

        User::findOrFail($id)->update($request->all());
    }
    public function destroy($id)
    {
        User::findOrFail($id)->delete();
    }
    public function vezmunk($id)
    {
        return DB::table('munkalaps')
            ->where("munkavezeto", $id)
            ->get();
    }


    public function szerlmunk($id)

    {
        return DB::table('munkalaps as m')
            ->join("munkalap_tetels as mt", "m.munkalapszam", "=", "mt.munkalapszam")
            ->where('mt.szerelo', $id)
            ->groupBy("mt.munkalapszam", "mt.szerelo", "m.auto", "m.ugyfel", "m.munkavezeto", "mt.munka_kezd_ido", "mt.munka_vegz_ido", "m.created_at", "m.updated_at")
            ->select(
                "mt.munkalapszam",
                "mt.szerelo",
                "m.auto",
                "m.ugyfel",
                "m.munkavezeto",
                "m.created_at as letrehozva",
                "m.updated_at as modositva"
            )
            ->get();
    }
}
