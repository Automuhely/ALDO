<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('/token', function () {
    return request()->session()->token();
});




require __DIR__.'/auth.php';
