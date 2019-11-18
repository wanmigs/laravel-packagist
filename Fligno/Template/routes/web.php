<?php
Route::get('Template', function(){
    return view('Template::welcome');
});

Route::resource('test', 'TestController');
