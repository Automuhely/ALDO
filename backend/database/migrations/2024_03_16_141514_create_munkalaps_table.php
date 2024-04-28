<?php

use App\Models\Munkalap;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('munkalaps', function (Blueprint $table) {
            $table->id('munkalapszam');
            $table->foreignId('auto')->references('id')->on('autos');
            $table->foreignId('ugyfel')->references('id')->on('users');
            $table->foreignId('munkavezeto')->references('id')->on('users')->where('szerepkor', 'szerelo');
            $table->string('altalanosLeiras', 100)->references('megnevezes')->on('munka_ars');
            //$table->string('altalanosLeiras');
            $table->date('elvitel_ido')->nullable();
            $table->tinyInteger('statusz');
            $table->foreignId('uzembentarto')->references('id')->on('users');
            $table->string('szamlaszam', 30);
            $table->timestamps();
        });

        Munkalap::create([
            'auto' => 1,
            'ugyfel' => 1,
            'munkavezeto' => 2,
            'altalanosLeiras' => "Általános szervíz, átvizsgálás...",
            'statusz' => 1,
            'uzembentarto' => 1,
            'szamlaszam' => "1234568",
        ]);
        Munkalap::create([
            'auto' => 2,
            'ugyfel' => 1,
            'munkavezeto' => 2,
            'altalanosLeiras' => "Kerékcsere, nyomásellenőrzés",
            'statusz' => 1,
            'uzembentarto' => 1,
            'szamlaszam' => "1234567",
        ]);
        Munkalap::create([
            'auto' => 2,
            'ugyfel' => 1,
            'munkavezeto' => 2,
            'altalanosLeiras' => "Fóliázás, olajcsere",
            'statusz' => 1,
            'uzembentarto' => 1,
            'szamlaszam' => "12345613",
        ]);
    }

    public function down(): void
    {
        Schema::dropIfExists('munkalaps');
    }
};
