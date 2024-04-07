<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Munkalap extends Model
{
    use HasFactory;

    protected $primaryKey = 'munkalapszam';
    const STATUS_EL_SEM_KEZDETT = 0;
    const STATUS_FOLYAMATBAN = 1;
    const STATUS_BEFEJEZETT = 2;

    protected $fillable = [
        'szamlaszam',
        'auto',
        'ugyfel',
        'munkavezeto',
        'altalanosLeiras',
        'elvitel_ido',
        'uzembentarto',
        'statusz',
    ];

    
}
