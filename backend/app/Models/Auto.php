<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auto extends Model
{
    use HasFactory;

    protected $fillable = [
        'alvazszam',
        'becenev',
        'rendszam',
        'marka',
        'motorkod',
        'evjarat',
        'ugyfel',
        'hitelesitett'
    ];
    protected $hidden = ["created_at", "updated_at"];

    protected $appends = ['ugyfelnev'];

    public static function getAutoMarkak()
    {
        $autoMarkak = [
            'Alfa Romeo', 'Aston Martin', 'Audi', 'BMW', 'Bugatti', 'Cadillac', 'Chevrolet', 'Chrysler', 'Citroen', 'Dacia', 'Dodge',
            'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jaguar', 'Jeep', 'Kia', 'Lada', 'Land Rover', 'Lexus', 'Maserati', 'Mazda', 'Mercedes',
            'Mini Cooper', 'Mitsubishi', 'Nissan', 'Opel', 'Peugeot', 'Porsche', 'Seat', 'Skoda', 'Smart', 'Subaru', 'Suzuki', 'Tesla',
            'Toyota', 'Volkswagen', 'Volvo',
        ];

        return $autoMarkak;
    }

    public function getUgyfelnevAttribute()
    {
        // az ügyfél mező alapján, a másik táblából a nevét kérdezem le
        return User::find($this->ugyfel)->name;
    }
}
