<?php
Route::get('blog', function () {
    return view('Blog::welcome');
});

Route::resource('blog/test', 'TestController');
