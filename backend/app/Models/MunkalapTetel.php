<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MunkalapTetel extends Model
{
    use HasFactory;

    protected function setKeysForSaveQuery($query)
    {
        $query
        // sorszám
            ->where('feladat_id', '=', $this->getAttribute('id'))
            ->where('munkalapszam', '=', $this->getAttribute('munkalapszam'));
        return $query;
    }

    protected $fillable = [
       // 'sorszam',
        'munkalapszam',
        'szerelo',
       // 'feladat_id',
        'leiras',
        'alkatresz',
        'alk_megnevezes',
        'alk_marka',
        'mennyiseg',
        'alkatresz_ar',
        'alk_rend_ido',
        'alk_beerk_ido',
        'munka_kezd_ido',
        'munka_vegz_ido',
    ];
}
