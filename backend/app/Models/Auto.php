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
    ];
    protected $hidden = ["created_at", "updated_at"];
    
    protected $appends = ['ugyfelnev'];

    public function getUgyfelnevAttribute()
    {
        // az ügyfél mező alapján, a másik táblából a nevét kérdezem le
        return $this->ugyfel()->first()->name;
    }

    // Az autóhoz tartozó kapcsolat definiálása
    public function ugyfel()
    {
        return $this->belongsTo(User::class, 'ugyfel_id');
    }

    public function megnevezes(){
        return $this->belongsTo(MunkaAr::class,'megnevezes');
    }
}
