<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Munkalap extends Model
{
    use HasFactory;

    protected $primary = 'munkalapszam';

    protected $fillabe = [
        'auto',
        'ugyfel',
        'munkavezeto',
        'leiras',
        'elvitel_ido',
        'uzembentarto'
    ];
}
