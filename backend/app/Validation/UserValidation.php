<?php

namespace App\Validation;

use App\Models\User;

class UserValidation
{
    public static function rulesForModify($id)
    {
        return [

            'name' => ['required', 'string', 'max:255', 'regex:/^([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\-]*)(\s([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\-]*))*$/'],
            'cim' => ['required', 'string', 'regex:/^[A-Za-z0-9\s\.,\/\-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]{1,255}$/', 'unique:users'],
            'telefon' => ['required', 'string', 'regex:/^06\d{1}(\d{7}|\d{8})$/', function ($attribute, $value, $fail) use ($id) {
                if ($value !== null && User::where('telefon', $value)->where('id', '!=', $id)->exists()) {
                    $fail(__('validation.unique', ['attribute' => $attribute]));
                }
            }]
        ];
    }

    public static function messagesForModify()
    {
        return  [
            'required' => 'A(z) :attribute mező kitöltése kötelező.',
            'required_without' => 'A(z) :attribute mező kötelező, ha a(z) :values mező nincs megadva.',
            'regex' => 'A(z) :attribute helytelen formátumú',
            'min.string' => 'A jelszónak legalább 8 betű hosszúságúnak kell lennie',
            'telefon.regex' => 'Helytelen formátum. Tipp: 06-tal keződik. Kötőjelek, írásjelek, szóközök nélkül.',
        ];
    }




    public static function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255', 'regex:/^([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\-]*)(\s([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\-]*))*$/'],
            'password' => ['required', 'confirmed', 'string', 'min:8', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'cim' => ['required', 'string', 'regex:/^[A-Za-z0-9\s\.,\/\-áéíóöőúüűÁÉÍÓÖŐÚÜŰ]{1,255}$/', 'unique:users'],
            'telefon' => ['required', 'string', 'regex:/^06\d{1}(\d{7}|\d{8})$/', 'unique:users'],
            'szulido' => ['required', 'date'],
            'adoazonosito' => ['nullable', 'required_without_all:adoszam', 'regex:/^\d{10}$/'],
            'adoszam' => ['nullable', 'required_without_all:adoazonosito', 'regex:/^\d{8}\-\d{1}\-\d{1}|\d{8}\-\d{1}$/'],

        ];
    }

    public static function attributes()
    {
        return [
            'name' => 'név',
            'password' => 'jelszó',
            'cim' => 'cím',
            'telefon' => 'telefonszám',
            'szulido' => 'születési idő',
            'adoazonosito' => 'adóazonosító',
            'adoszam' => 'adószám'
        ];
    }

    public static function messages()
    {
        return [
            'accepted' => ':Attribute mezőt el kell fogadni.',
            'accepted_if' => ':Attribute mezőt csak akkor kell elfogadni, ha :other :value értéket tartalmaz.',
            'active_url' => ':Attribute mezőnek érvényes URL-nek kell lennie.',
            'after' => ':Attribute mezőnek későbbi dátumnak kell lennie, mint :date.',
            'after_or_equal' => ':Attribute mezőnek azonosnak vagy későbbi dátumnak kell lennie, mint :date.',
            'alpha' => ':Attribute mező csak betűket tartalmazhat.',
            'alpha_dash' => ':Attribute mező csak betűket, számokat, kötőjeleket és aláhúzásjeleket tartalmazhat.',
            'alpha_num' => ':Attribute mező csak betűket és számokat tartalmazhat.',
            'array' => ':Attribute mezőnek tömbnek kell lennie.',
            'ascii' => ':Attribute mező csak egyszerű betűket és számokat tartalmazhat.',
            'before' => ':Attribute mezőnek korábbi dátumnak kell lennie, mint :date.',
            'before_or_equal' => ':Attribute mezőnek azonosnak vagy korábbi dátumnak kell lennie, mint :date.',
            'between' => [
                'array' => ':Attribute mezőnek :min és :max elem között kell lennie.',
                'file' => ':Attribute mező mérete :min és :max kilobájt között kell legyen.',
                'numeric' => ':Attribute mező értéke :min és :max között kell legyen.',
                'string' => ':Attribute mező hossza :min és :max karakter között kell legyen.',
            ],
            'boolean' => ':Attribute mező csak igaz vagy hamis lehet.',
            'can' => ':Attribute mező érvénytelen értéket tartalmaz.',
            'confirmed' => ':Attribute mező megerősítése nem egyezik.',
            'current_password' => 'A jelszó helytelen.',
            'date' => ':Attribute mezőnek érvényes dátumnak kell lennie.',
            'date_equals' => ':Attribute mezőnek azonos dátumnak kell lennie, mint :date.',
            'date_format' => ':Attribute mezőnek meg kell egyeznie a következő formátummal: :format.',
            'decimal' => ':Attribute mezőnek :decimal tizedesjegyűnek kell lennie.',
            'declined' => ':Attribute mezőt el kell utasítani.',
            'declined_if' => ':Attribute mezőt csak akkor kell elutasítani, ha :other :value értéket tartalmaz.',
            'different' => ':Attribute mező és :other különbözőnek kell lennie.',
            'digits' => ':Attribute mezőnek :digits számjegyből kell állnia.',
            'digits_between' => ':Attribute mezőnek :min és :max számjegy között kell lennie.',
            'dimensions' => ':Attribute mezőnek érvénytelen képméretei vannak.',
            'distinct' => ':Attribute mező értékének egyedinek kell lennie.',
            'doesnt_end_with' => ':Attribute mező nem végződhet az alábbiakkal: :values.',
            'doesnt_start_with' => ':Attribute mező nem kezdődhet az alábbiakkal: :values.',
            'email' => ':Attribute mezőnek érvényes email címnek kell lennie.',
            'ends_with' => ':Attribute mezőnek az alábbiakkal kell végződnie: :values.',
            'enum' => 'A kiválasztott :attribute érvénytelen.',
            'exists' => 'A kiválasztott :attribute érvénytelen.',
            'extensions' => ':Attribute mező csak az alábbi kiterjesztések egyikével lehet: :values.',
            'file' => ':Attribute mezőnek fájlnak kell lennie.',
            'filled' => ':Attribute mezőnek értéket kell tartalmaznia.',
            'gt' => [
                'array' => ':Attribute mezőnek több mint :value elemből kell állnia.',
                'file' => ':Attribute mező mérete nagyobb kell legyen, mint :value kilobájt.',
                'numeric' => ':Attribute mező értéke nagyobb kell legyen, mint :value.',
                'string' => ':Attribute mező hossza nagyobb kell legyen, mint :value karakter.',
            ],
            'gte' => [
                'array' => ':Attribute mezőnek :value elemet vagy többet kell tartalmaznia.',
                'file' => ':Attribute mező mérete nagyobb vagy egyenlő kell legyen :value kilobájttal.',
                'numeric' => ':Attribute mező értéke nagyobb vagy egyenlő kell legyen :value.',
                'string' => ':Attribute mező hossza nagyobb vagy egyenlő kell legyen :value karakter.',
            ],
            'hex_color' => ':Attribute mezőnek érvényes hexadecimális színeknek kell lennie.',
            'image' => ':Attribute mezőnek képnek kell lennie.',
            'in' => 'A kiválasztott :attribute érvénytelen.',
            'in_array' => ':Attribute mező értéke nem létezik :other-ben.',
            'integer' => ':Attribute mezőnek egész számnak kell lennie.',
            'ip' => ':Attribute mezőnek érvényes IP címnek kell lennie.',
            'ipv4' => ':Attribute mezőnek érvényes IPv4 címnek kell lennie.',
            'ipv6' => ':Attribute mezőnek érvényes IPv6 címnek kell lennie.',
            'json' => ':Attribute mezőnek érvényes JSON karakterláncnak kell lennie.',
            'list' => ':Attribute mezőnek listának kell lennie.',
            'lowercase' => ':Attribute mezőnek kisbetűsnek kell lennie.',
            'lt' => [
                'array' => ':Attribute mezőnek kevesebb, mint :value elemből kell állnia.',
                'file' => ':Attribute mező mérete kisebb kell legyen, mint :value kilobájt.',
                'numeric' => ':Attribute mező értéke kisebb kell legyen, mint :value.',
                'string' => ':Attribute mező hossza kisebb kell legyen, mint :value karakter.',
            ],
            'lte' => [
                'array' => ':Attribute mezőnek nem lehet több, mint :value eleme.',
                'file' => ':Attribute mező mérete kisebb vagy egyenlő kell legyen :value kilobájttal.',
                'numeric' => ':Attribute mező értéke kisebb vagy egyenlő kell legyen :value.',
                'string' => ':Attribute mező hossza kisebb vagy egyenlő kell legyen :value karakter.',
            ],
            'mac_address' => ':Attribute mezőnek érvényes MAC címnek kell lennie.',
            'max' => [
                'array' => ':Attribute mezőnek nem lehet több, mint :max eleme.',
                'file' => ':Attribute mező mérete nem lehet nagyobb, mint :max kilobájt.',
                'numeric' => ':Attribute mező értéke nem lehet nagyobb, mint :max.',
                'string' => ':Attribute mező hossza nem lehet nagyobb, mint :max karakter.',
            ],
            'max_digits' => ':Attribute mezőnek nem lehet több, mint :max számjegye.',
            'mimes' => ':Attribute mezőnek a következő típusú fájlok lehetnek: :values.',
            'mimetypes' => ':Attribute mezőnek a következő típusú fájlok lehetnek: :values.',
            'min' => [
                'array' => ':Attribute mezőnek legalább :min eleme kell legyen.',
                'file' => ':Attribute mező mérete legalább :min kilobájt kell legyen.',
                'numeric' => ':Attribute mező értéke legalább :min kell legyen.',
                'string' => ':Attribute mező hossza legalább :min karakter kell legyen.',
            ],
            'min_digits' => ':Attribute mezőnek legalább :min számjegye kell legyen.',
            'missing' => ':Attribute mezőnek hiányoznia kell.',
            'missing_if' => ':Attribute mezőnek hiányoznia kell, ha :other :value értéket tartalmaz.',
            'missing_unless' => ':Attribute mezőnek hiányoznia kell, kivéve ha :other :value értéket tartalmaz.',
            'missing_with' => ':Attribute mezőnek hiányoznia kell, ha :values jelen van.',
            'missing_with_all' => ':Attribute mezőnek hiányoznia kell, ha :values jelen vannak.',
            'multiple_of' => ':Attribute mezőnek :value többszörösének kell lennie.',
            'not_in' => 'A kiválasztott :attribute érvénytelen.',
            'not_regex' => ':Attribute mező formátuma érvénytelen.',
            'numeric' => ':Attribute mezőnek számnak kell lennie.',
            'password' => [
                'letters' => ':Attribute mezőnek legalább egy betűt kell tartalmaznia.',
                'mixed' => ':Attribute mezőnek legalább egy nagybetűt és egy kisbetűt kell tartalmaznia.',
                'numbers' => ':Attribute mezőnek legalább egy számot kell tartalmaznia.',
                'symbols' => ':Attribute mezőnek legalább egy szimbólumot kell tartalmaznia.',
                'uncompromised' => 'A megadott :attribute szerepelt egy adatvédelmi sérülésben. Kérjük, válasszon másikat.',
            ],
            'present' => ':Attribute mezőnek jelen kell lennie.',
            'present_if' => ':Attribute mezőnek jelen kell lennie, ha :other :value értéket tartalmaz.',
            'present_unless' => ':Attribute mezőnek jelen kell lennie, hacsak :other :value értéket nem tartalmaz.',
            'present_with' => ':Attribute mezőnek jelen kell lennie, ha :values jelen van.',
            'present_with_all' => ':Attribute mezőnek jelen kell lennie, ha :values jelen vannak.',
            'prohibited' => ':Attribute mező tilos.',
            'prohibited_if' => ':Attribute mező tilos, ha :other :value értéket tartalmaz.',
            'prohibited_unless' => ':Attribute mező tilos, hacsak :other :values-ban nincs.',
            'prohibits' => ':Attribute mező megakadályozza, hogy :other jelen legyen.',
            'regex' => ':Attribute mező formátuma érvénytelen.',
            'required' => ':Attribute mező kötelező.',
            'required_array_keys' => ':Attribute mezőnek tartalmaznia kell a következő bejegyzéseket: :values.',
            'required_if' => ':Attribute mező kötelező, ha :other :value értéket tartalmaz.',
            'required_if_accepted' => ':Attribute mező kötelező, ha :other elfogadva van.',
            'required_unless' => ':Attribute mező kötelező, hacsak :other :values-ban nem van.',
            'required_with' => ':Attribute mező kötelező, ha :values jelen van.',
            'required_with_all' => ':Attribute mező kötelező, ha :values jelen vannak.',
            'required_without' => ':Attribute mező kötelező, ha :values nincs jelen.',
            'required_without_all' => ':Attribute mező kötelező, ha egyik :values sincs jelen.',
            'same' => ':Attribute mezőnek megegyeznie kell a(z) :other mezővel.',
            'size' => [
                'array' => ':Attribute mezőnek :size elemet kell tartalmaznia.',
                'file' => ':Attribute mezőnek :size kilobájtnak kell lennie.',
                'numeric' => ':Attribute mezőnek :size-nek kell lennie.',
                'string' => ':Attribute mezőnek :size karakter hosszúnak kell lennie.',
            ],
            'starts_with' => ':Attribute mezőnek az alábbiakkal kell kezdődnie: :values.',
            'string' => ':Attribute mezőnek karakterláncnak kell lennie.',
            'timezone' => ':Attribute mezőnek érvényes időzónának kell lennie.',
            'unique' => ':Attribute már foglalt.',
            'uploaded' => ':Attribute feltöltése sikertelen.',
            'uppercase' => ':Attribute mezőnek nagybetűsnek kell lennie.',
            'url' => ':Attribute mezőnek érvényes URL-nek kell lennie.',
            'ulid' => ':Attribute mezőnek érvényes ULID-nak kell lennie.',
            'uuid' => ':Attribute mezőnek érvényes UUID-nek kell lennie.',

            'telefon.regex' => 'Helytelen formátum. Tipp: 06-tal keződik. Kötőjelek, írásjelek, szóközök nélkül.',
            'adoazonosito.regex' => 'Helytelen formátum. Tipp: 10 számjegyű, kötőjelek nélkül.',
            'adoszam.regex' => 'Helytelen formátun. Tipp: 10 számjegyű, kötőjelek nélkül.'
        ];
    }
}
