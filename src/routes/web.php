<?php


Route::group(['namespace' => 'Xguard\ClientPortal\Http\Controllers',], function () {
    Route::group(['prefix' => 'partners',], function () {
        Route::get('/login', 'AppControllerController@login');
        Route::get('/register', 'AppControllerController@register');
    });
});

Route::group(['middleware' => ['client_portal_role_check']], function () {
    Route::group(['namespace' => 'Xguard\ClientPortal\Http\Controllers',], function () {
        Route::group(['prefix' => 'partners'], function () {

            Route::fallback('AppController@getIndex');

            Route::get('/', 'AppController@getIndex');
        });
    });
});
