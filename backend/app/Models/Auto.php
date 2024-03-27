<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auto extends Model
{
    use HasFactory;

    protected $primaryKey = 'alvazszam';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'marka',
        'motorkod',
        'evjarat',
        'ugyfel',
    ];

    protected $appends = ['ugyfelnev'];

    public function getUgyfelnevAttribute()
    {
        // az ügyfél mező alapján, a másik táblából a nevét kérdezem le
        return User::find($this->ugyfel)->nev;
    }

    protected $hidden = ["created_at", "updated_at"];
}
