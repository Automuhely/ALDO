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

    public function getUgyfelnevAttribute()
    {
        // az ügyfél mező alapján, a másik táblából a nevét kérdezem le
        return User::find($this->ugyfel)->name;
    }
}
