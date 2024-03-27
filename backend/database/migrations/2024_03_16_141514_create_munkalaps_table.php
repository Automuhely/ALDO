<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('munkalaps', function (Blueprint $table) {
            $table->id('munkalapszam');
            $table->string('auto');
            $table->foreign('auto')->references('alvazszam')->on('autos');
            $table->foreignId('ugyfel')->references('id')->on('users');
            $table->foreignId('munkavezeto')->references('id')->on('users');
            $table->string('leiras');
            $table->date('elvitel_ido')->nullable();
            $table->boolean('statusz');
            $table->foreignId('uzembentarto')->references('id')->on('users');
            // frontenden lévő mappában található útvonal, amint létrejön a munkalap pdf
            $table->string('fajl_utvonala')->default('nincs');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('munkalaps');
    }
};
