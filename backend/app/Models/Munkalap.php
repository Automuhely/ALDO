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
    public static $altalanosLeirasok = [
        "Behozta az autóját, mert dörmögött",
        "Az ügyfél elmondása szerint az autó kopog",
        "Az ügyfél általános átvizsgálásra hozta be",
        "Az ügyfél szerint a fék 'csúszik'",
    ];
     // Az autóhoz tartozó kapcsolat definiálása
     public function auto()
     {
         return $this->belongsTo(Auto::class, 'auto_id');
     }
 
     // Az ügyfélhez tartozó kapcsolat definiálása
     public function ugyfel()
     {
         return $this->belongsTo(User::class, 'ugyfel_id');
     }

     public function szerelo(){
        return $this->belongsTo(User::class, "szerelo");
     }
}
