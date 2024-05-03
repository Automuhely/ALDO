<?php

use App\Models\Feladat;
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
        Schema::create('feladats', function (Blueprint $table) {
            $table->id();
            $table->string('megnevezes', 50);
            $table->integer('ara');
            $table->timestamps();
        });
        Feladat::create([  'megnevezes' => 'Motorolaj cseréje', 'ara' => 5000]);
        Feladat::create([  'megnevezes' => 'Fékolaj cseréje', 'ara' => 6000]);
        Feladat::create([  'megnevezes' => 'Légtömegmérő cseréje', 'ara' => 7000]);
        Feladat::create([  'megnevezes' => 'Féktárcsa csere', 'ara' => 10000]);
        Feladat::create([  'megnevezes' => 'Futómű beállítás', 'ara' => 8000]);
        Feladat::create([  'megnevezes' => 'Kipufogórendszer javítás', 'ara' => 5500]);
        Feladat::create([  'megnevezes' => 'Lökhárító festés', 'ara' => 20000]);
        Feladat::create([  'megnevezes' => 'Kerékcsere és kiegyensúlyozás', 'ara' => 4000]);
        Feladat::create([  'megnevezes' => 'Fékbetét csere', 'ara' => 8000]);
        Feladat::create([  'megnevezes' => 'Féktárcsa és fékbetét csere', 'ara' => 12000]);
        Feladat::create([  'megnevezes' => 'Légfilter csere', 'ara' => 3000]);
        Feladat::create([  'megnevezes' => 'Üzemanyagszűrő csere', 'ara' => 2500]);
        Feladat::create([  'megnevezes' => 'Szívó és töltőcső cseréje', 'ara' => 6000]);
        Feladat::create([  'megnevezes' => 'Hűtőfolyadék cseréje', 'ara' => 4000]);
        Feladat::create([  'megnevezes' => 'Fékfolyadék csere', 'ara' => 3500]);
        Feladat::create([  'megnevezes' => 'Vízpumpa cseréje', 'ara' => 7000]);
        Feladat::create([  'megnevezes' => 'Hűtőventillátor cseréje', 'ara' => 8000]);
        Feladat::create([  'megnevezes' => 'Generátor javítása', 'ara' => 6500]);
        Feladat::create([  'megnevezes' => 'Indítómotor javítása', 'ara' => 7000]);
        Feladat::create([  'megnevezes' => 'Fékcső cseréje', 'ara' => 4500]);
        Feladat::create([  'megnevezes' => 'Futómű felfüggesztés javítása', 'ara' => 8500]);
        Feladat::create([  'megnevezes' => 'Kormánymű javítása', 'ara' => 7500]);
        Feladat::create([  'megnevezes' => 'Kuplung és nyomócsapágy cseréje', 'ara' => 11000]);
        Feladat::create([  'megnevezes' => 'Szélvédőcsere', 'ara' => 15000]);
        Feladat::create([  'megnevezes' => 'Fékrendszer javítása', 'ara' => 9000]);
        

    // foreach ($munkak as $munka) {
    //     DB::table('munkaars')->insert($munka);
    // }
    }

    public function down(): void
    {
        Schema::dropIfExists('munka_ars');
    }
};
