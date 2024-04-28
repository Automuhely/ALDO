<?php

use App\Http\Controllers\AutoController;
use App\Http\Controllers\FeladatController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\MunkaArController;
use App\Http\Controllers\MunkalapController;
use App\Http\Controllers\MunkalapTetelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('cors')->group(function () {
    Route::post('/emailkuld', [MailController::class, 'store']);
});


/*  _____________________________________________________________________________________________________________________________________________________________USER_________ */
Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('/autos', [AutoController::class, 'store']);
    Route::put('/users/{user}', [UserController::class, 'update']);
    Route::get('/szamlaim', [MunkalapController::class, 'szamlaim']);        // bejelentkezett felh. számlái
    Route::get('/autoim', [AutoController::class, 'autoim']);               // autói
    Route::get('/legfrissebb', [AutoController::class, 'legfrissebb']);    // összes autóinak legfrissebb munkalapja, avagy státusza
    Route::get('/autoim-db', [AutoController::class, 'autoimCount']);     // autó db száma

    /*  ______________________________________________________________________________________________________________________________________________________SZERELŐ__________ */
    Route::middleware(['szerelo'])->group(function () {
        Route::get('/ugyfel-tortenet/{azon}', [MunkalapController::class, 'ugyfel']);        // adott ügyfélnek kiállított összes munkalap
        Route::get('/folyamatmunka', [MunkalapController::class, 'folyamatmunka']);         // munkalapok státuszok szerinti lekérése
        Route::get('/befejezettmunka', [MunkalapController::class, 'befejezettmunka']);
        Route::get('/elnemkezdetmunka', [MunkalapController::class, 'elnemkezdetmunka']);

        Route::get('/szerelomunkak/{szerelo}', [UserController::class, 'szerlmunk']);       // adott szerelő munkái
        Route::post('/folyamatmunkapost', [MunkalapController::class, 'folyamatmunkapost']);
        Route::post('/befejezettmunkapost', [MunkalapController::class, 'befejezettmunkapost']);
        Route::get('/vezszerelok', [UserController::class, 'vezszerelok']);

        /* .................................................................................... */
        Route::put('/autos/{auto}', [AutoController::class, 'update']);
        Route::get('/autos/{auto}', [AutoController::class, 'show']);
        Route::get('/munkalaps/{munkalap}', [MunkalapController::class, 'show']);
        Route::get('/munkalaptetels/{munkalaptetel}', [MunkalapTetelController::class, 'show']);
        Route::get('/feladats/{feladat}', [FeladatController::class, 'show']);
        /* .................................................................................... */

        Route::get('/users', [UserController::class, 'index']);
        Route::get('/autos', [AutoController::class, 'index']);
        Route::get('/munkalaps', [MunkalapController::class, 'index']);
        Route::get('/munkalaptetels', [MunkalapTetelController::class, 'index']);
        Route::get('/feladats', [FeladatController::class, 'index']);
        Route::get('/users/{user}', [UserController::class, 'show']);   // adott ügyfél adatainak megtekintése
        Route::post('/users', [UserController::class, 'store']);        // ha nem regisztrálásról van szó, hanem manuálisan felvinni egy ügyfelet...

        // munkával kapcsolatos műveletek elvégzése... munkalapfelvitel, módosítás, új tétel felvitele
        Route::put('/munkalaps/{munkalap}', [MunkalapController::class, 'update']);
        Route::put('/munkalaptetels/{munkalaptetel}', [MunkalapTetelController::class, 'update']);
        Route::put('/feladats/{feladat}', [FeladatController::class, 'update']);
        Route::post('/munkalaps', [MunkalapController::class, 'store']);
        Route::post('/munkalaptetels', [MunkalapTetelController::class, 'store']);
        Route::post('/feladats', [FeladatController::class, 'store']);

        /*  _____________________________________________________________________________________________________________________________________________VEZETŐSZERELŐ__________ */
        Route::middleware(['vezetoszerelo'])->group(function () {

            // árakat csak a vezetőszerelő tud módosítani
            Route::post('/arak', [MunkaArController::class, 'store']);
            Route::put('/arak/{elem}', [MunkaArController::class, 'update']);
            Route::delete('/arak/{elem}', [MunkaArController::class, 'destroy']);

            // törléshez vezetőszerelő engedélyre van szükség
            Route::delete('/users/{user}', [UserController::class, 'destroy']);
            Route::delete('/autos/{auto}', [AutoController::class, 'destroy']);
            Route::delete('/feladats/{feladat}', [FeladatController::class, 'destroy']);
            Route::delete('/munkalaps/{munkalap}', [MunkalapController::class, 'destroy']);
            Route::delete('/munkalaptetels/{munkalaptetel}', [MunkalapTetelController::class, 'destroy']);
        });
    });
});

Route::post('/emailkuld', [MailController::class, 'store']);
// Route::post('/send_mail', [MailController::class]);

Route::get('/arak/{arak}', [MunkaArController::class, 'show']);
Route::get('/arak', [MunkaArController::class, 'index']);
Route::get('/auto-markak', [AutoController::class, 'autoMarkak']);
