<?php

use App\Http\Controllers\AutoController;
use App\Http\Controllers\FeladatController;
use App\Http\Controllers\MunkalapController;
use App\Http\Controllers\MunkalapTetelController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/users', UserController::class);
Route::apiResource('/autos', AutoController::class);
Route::apiResource('/feladats', FeladatController::class);
Route::apiResource('/munkalaps', MunkalapController::class);
Route::apiResource('/munkalaptetels', MunkalapTetelController::class);
