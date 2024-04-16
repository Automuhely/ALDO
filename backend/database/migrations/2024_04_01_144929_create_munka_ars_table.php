<?php

use App\Models\MunkaAr;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('munka_ars', function (Blueprint $table) {
            $table->id();
            $table->string('megnevezes');
            $table->integer('ara');
            $table->timestamps();
        });
        MunkaAr::create([  'megnevezes' => 'Motorolaj cseréje', 'ara' => 5000]);
        MunkaAr::create([  'megnevezes' => 'Fékolaj cseréje', 'ara' => 6000]);
        MunkaAr::create([  'megnevezes' => 'Légtömegmérő cseréje', 'ara' => 7000]);
        MunkaAr::create([  'megnevezes' => 'Féktárcsa csere', 'ara' => 10000]);
        MunkaAr::create([  'megnevezes' => 'Futómű beállítás', 'ara' => 8000]);
        MunkaAr::create([  'megnevezes' => 'Kipufogórendszer javítás', 'ara' => 5500]);
        MunkaAr::create([  'megnevezes' => 'Lökhárító festés', 'ara' => 20000]);
        MunkaAr::create([  'megnevezes' => 'Kerékcsere és kiegyensúlyozás', 'ara' => 4000]);
        MunkaAr::create([  'megnevezes' => 'Fékbetét csere', 'ara' => 8000]);
        MunkaAr::create([  'megnevezes' => 'Féktárcsa és fékbetét csere', 'ara' => 12000]);
        MunkaAr::create([  'megnevezes' => 'Légfilter csere', 'ara' => 3000]);
        MunkaAr::create([  'megnevezes' => 'Üzemanyagszűrő csere', 'ara' => 2500]);
        MunkaAr::create([  'megnevezes' => 'Szívó és töltőcső cseréje', 'ara' => 6000]);
        MunkaAr::create([  'megnevezes' => 'Hűtőfolyadék cseréje', 'ara' => 4000]);
        MunkaAr::create([  'megnevezes' => 'Fékfolyadék csere', 'ara' => 3500]);
        MunkaAr::create([  'megnevezes' => 'Vízpumpa cseréje', 'ara' => 7000]);
        MunkaAr::create([  'megnevezes' => 'Hűtőventillátor cseréje', 'ara' => 8000]);
        MunkaAr::create([  'megnevezes' => 'Generátor javítása', 'ara' => 6500]);
        MunkaAr::create([  'megnevezes' => 'Indítómotor javítása', 'ara' => 7000]);
        MunkaAr::create([  'megnevezes' => 'Fékcső cseréje', 'ara' => 4500]);
        MunkaAr::create([  'megnevezes' => 'Futómű felfüggesztés javítása', 'ara' => 8500]);
        MunkaAr::create([  'megnevezes' => 'Kormánymű javítása', 'ara' => 7500]);
        MunkaAr::create([  'megnevezes' => 'Kuplung és nyomócsapágy cseréje', 'ara' => 11000]);
        MunkaAr::create([  'megnevezes' => 'Szélvédőcsere', 'ara' => 15000]);
        MunkaAr::create([  'megnevezes' => 'Fékrendszer javítása', 'ara' => 9000]);
        

    // foreach ($munkak as $munka) {
    //     DB::table('munkaars')->insert($munka);
    // }
    }

    public function down(): void
    {
        Schema::dropIfExists('munka_ars');
    }
};
