<?php

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
            $table->foreignId('munkavezeto')->references('id')->on('users');
            $table->string('altalanosLeiras');
            $table->date('elvitel_ido')->nullable();
            $table->tinyInteger('statusz');
            $table->foreignId('uzembentarto')->references('id')->on('users');
            // frontenden lévő mappában található útvonal, amint létrejön a munkalap pdf
            $table->string('szamlasorszam')->nullable()->default(null);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('munkalaps');
    }
};
