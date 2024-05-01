<?php

namespace App\Validation;

use Illuminate\Validation\Rule;

class AutoValidation
{
    public static function rules()
    {
        return
            [
                'becenev' => ['nullable', 'String', Rule::unique('autos')->where('ugyfel', auth()->id()), 'max:255'],
                'rendszam' => ['required', 'unique:autos', 'regex:/^(?=.*[a-zA-Z]{3,})(?=.*[0-9]{3,}).{6,10}$/'],
                'ugyfel' => 'required',
                'marka' => 'required',
                'alvazszam' => ['required', 'unique:autos', 'regex:/^[A-HJ-NPR-Z0-9]{17}$/'],
                'motorkod' => ['required', 'unique:autos', 'regex:/^[A-Za-z0-9]{3,6}$/'],
                'evjarat' => 'required|digits:4',
            ];
    }

    public static function attributes()
    {
        return
            [
                'rendszam' => 'rendszám',
                'becenev' => 'becenév',
                'alvazszam' => 'alvázszám',
                'motorkod' => 'motorkód',
                'evjarat' => 'évjárat',
                'marka' => 'márka'
            ];
    }

    public static function messages()
    {
        return
            [
                'rendszam.regex' => 'Helytelen formátum. Tipp: 6-10 karakter, min: 3 szám és betű. Kötőjelek, írásjelek nélkül.',
                'alvazszam.regex' => 'Helytelen formátum. Tipp: 17 karakter. Kötőjelek, írásjelek nélkül.',
                'motorkod.regex' => 'Helytelen formátum. Tipp: 3-6 karakter hosszúságú.',
                'evjarat.digits' => 'Helytelen formátum. Pl: 2000, 1940',
                'becenev.unique' => 'Már van ilyen nevű autód.'
            ];
    }
}
