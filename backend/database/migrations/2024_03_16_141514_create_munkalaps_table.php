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
            $table->foreignId('auto')->references('alvazszam')->on('autos');
            $table->foreignId('ugyfel')->references('id')->on('users');
            $table->foreignId('munkavezeto')->references('id')->on('users');
            $table->string('leiras');
            $table->string('elvitel_ido');
            $table->foreignId('uzembentarto')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('munkalaps');
    }
};