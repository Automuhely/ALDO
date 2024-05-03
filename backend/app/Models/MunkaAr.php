<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MunkaAr extends Model
{
    protected $fillable = [
        'id',
        'megnevezes',
        'ara'
    ];

    public $appends = "megnevezes";

    public function getMegnevezesAttribute()
    {
        return $this->megnevezes();
    }

    public function megnevezes()
    {
        return $this->belongsTo(MunkaAr::class, 'megnevezes');
    }

    public static $megnevezesek = [
        'Motorolaj cseréje',
        'Fékolaj cseréje',
        'Légtömegmérő cseréje',
        'Féktárcsa csere',
        'Futómű beállítás',
        'Kipufogórendszer javítás',
        'Lökhárító festés',
        'Hűtőfolyadék cseréje',
        'Fékfolyadék csere',
        'Vízpumpa cseréje',
        'Hűtőventillátor cseréje',
        'Generátor javítása',
        'Indítómotor javítása',
        'Fékcső cseréje',
        'Fékbetét csere',
        'Légfilter csere',
        'Üzemanyagszűrő csere',
        'Kormánymű javítása',
        'Szélvédőcsere',
        'Fékrendszer javítása',
    ];
}
