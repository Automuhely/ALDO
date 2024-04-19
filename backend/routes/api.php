<?php

use App\Http\Controllers\AutoController;
use App\Http\Controllers\FeladatController;
use App\Http\Controllers\MunkaArController;
use App\Http\Controllers\MunkalapController;
use App\Http\Controllers\MunkalapTetelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use MailController as GlobalMailController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('cors')->group(function () {
    Route::post('/send_mail', [GlobalMailController::class, 'store']);

});


Route::apiResource('/users', UserController::class);
Route::apiResource('/arak', MunkaArController::class);
Route::apiResource('/autos', AutoController::class);
Route::apiResource('/feladats', FeladatController::class);
Route::apiResource('/munkalaps', MunkalapController::class);
Route::apiResource('/munkalaptetels', MunkalapTetelController::class);



/*                              user                             */
//bejelentkezett felh. számlái
Route::get('/szamlaim', [MunkalapController::class, 'szamlaim']);
//autóinak száma
Route::get('/autoim', [MunkalapController::class, 'autoim']);
//összes autóinak legfrissebb munkalapja, avagy státusza
Route::get('/legfrissebb', [MunkalapController::class, 'legfrissebb']);



/*                              szerelő                           */
// autói listázása
Route::get('/autoja/{ugyfel}', [AutoController::class, 'autoja']);
// ügyfélnek kiállított munkalapok
Route::get('/ugyfel-tortenet/{azon}', [MunkalapController::class, 'ugyfel']);

// 
Route::get('/szerelomunkak/{szerelo}', [UserController::class, 'szerlmunk']);
Route::get('/vezszerelok',[UserController::class,'vezszerelok']);
Route::get('/folyamatmunka', [MunkalapController::class, 'folyamatmunka']);
Route::get('/folyamatmunka', [MunkalapController::class, 'folyamatmunka']);
Route::get('/befejezettmunka', [MunkalapController::class, 'befejezettmunka']);
Route::get('/elnemkezdetmunka', [MunkalapController::class, 'elnemkezdetmunka']);
Route::post('/folyamatmunkapost', [MunkalapController::class, 'folyamatmunkapost']);
Route::post('/befejezettmunka', [MunkalapController::class, 'befejezettmunka']);
