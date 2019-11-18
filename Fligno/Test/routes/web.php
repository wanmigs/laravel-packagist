<?php
Route::get('sample/test', function(){
    return view('Test::welcome');
});

Route::resource('sample', 'TestController');
