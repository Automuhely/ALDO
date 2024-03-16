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
        Schema::create('munkalap_tetels', function (Blueprint $table) {
            // $table->string('sorszam');
            $table->primary(['feladat_id', 'munkalapszam']);
            $table->foreignId('feladat_id')->references('id')->on('feladats');
            $table->foreignId('munkalapszam')->references('munkalapszam')->on('munkalaps');
            $table->foreignId('szerelo')->references('id')->on('users');
            $table->string('leiras');
            $table->string('alkatresz');
            $table->string('alk_marka');
            $table->tinyInteger('mennyiseg');
            $table->integer('alkatresz_ar');
            $table->date('alk_rend_ido');
            $table->date('alk_beerk_ido');
            $table->date('munka_kezd_ido');
            $table->date('munka_vegz_ido');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('munkalap_tetels');
    }
};
