<?php


Route::group([
    'namespace' => 'Fligno\Template\Http\Controllers',
    'middleware' => ['web']
], function() {
    return view('welcome');
});
