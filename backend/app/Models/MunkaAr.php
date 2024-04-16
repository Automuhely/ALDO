<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MunkaAr extends Model
{
    protected $fillable = [
        'megnevezes',
        'ara'
    ];
    public function megnevezes(){
        return $this->belongsTo(MunkaAr::class,'megnevezes');
    }
    
}
