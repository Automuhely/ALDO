<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Validation\UserValidation;
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

        $rules = UserValidation::rules();
        $attributes = UserValidation::attributes();
        $messages = UserValidation::messages();

        $validatedData = $request->validate($rules, $messages, $attributes);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($request->password),
            'cim' => $validatedData['cim'],
            'telefon' => $validatedData['telefon'],
            'szulido' => $validatedData['szulido'],
            'szerepkor' => 'ugyfel',
            'adoazonosito' => $validatedData['adoazonosito'],
            'adoszam' => $validatedData['adoszam'],
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
