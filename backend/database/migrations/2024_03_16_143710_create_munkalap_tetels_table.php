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
            $table->foreignId('feladat_id')->references('id')->on('feladats')->onDelete('cascade');

            $table->foreignId('munkalapszam')->references('munkalapszam')->on('munkalaps');
            $table->foreignId('szerelo')->references('id')->on('users');
            $table->string('leiras', 100);
            $table->string('alkatresz', 50)->nullable()->default(null);
            $table->string('alk_marka', 20)->nullable()->default(null);
            $table->tinyInteger('mennyiseg')->nullable()->default(null);
            $table->integer('alkatresz_ar')->nullable()->default(null);
            $table->date('alk_rend_ido')->nullable()->default(null);
            $table->date('alk_beerk_ido')->nullable()->default(null);
            $table->date('munka_kezd_ido')->nullable()->default('2024-01-01');
            $table->date('munka_vegz_ido')->nullable()->default(null);
            $table->boolean('statusz')->nullable()->default(null);
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
