<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            /* Hibaüzenetek megjelenítéséhez */
            'cim' => ['required', 'string', 'regex:/^[A-Za-z0-9\s\.,\/\-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]{1,255}$/'],
            'telefon' => ['required', 'string', 'regex:/^06\d{1}(\d{7}|\d{8})$/', 'unique'],
            'szulido' => ['required', 'date'],
            'adoazonosito' => ['required_without:adoszam', 'regex:/^[0-9]{10}$/'],
            'adoszam' => ['required_without:adoazonosito', 'regex:/^((\d{8})-\d{1}-\d{1})|(\d{8}-\d{1})$/'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'cim' => $request->cim,
            'telefon' => $request->telefon,
            'szulido' => $request->szulido,
            'szerepkor' => 'ugyfel',
            'adoazonosito' => $request->adoazonosito,
            'adoszam' => $request->adoszam,
            
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
