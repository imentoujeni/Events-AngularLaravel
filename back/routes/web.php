<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/session', function () {
    return view('session');

});
Route::get('/aff', function () {
    return view('aff');

});
Route::get('/', 'App\Http\Controllers\ClientController@index')->name('client.login');
Route::get('/inscription', 'App\Http\Controllers\ClientController@create')->name('client.inscription');
Route::get('/ajoutClient', 'App\Http\Controllers\ClientController@store');
Route::get('/Authentification', 'App\Http\Controllers\ClientController@login');
Route::get('affiche', 'App\Http\Controllers\ControllerS@afficher');
Route::get('/image/{path}',  'App\Http\Controllers\EventController@getphoto');
Route::post('/imagetest','App\Http\Controllers\EventController@photoStore');

Route::get('/showEvents', 'App\Http\Controllers\ClientController@showEvents');

Route::get('/create', 'App\Http\Controllers\AdminController@create');
Route::get('/Ajouterevent', 'App\Http\Controllers\EventController@create');
Route::get('/Ajoutevent', 'App\Http\Controllers\EventController@store');
Route::get('/ListeAdmin', 'App\Http\Controllers\AdminController@show');
Route::get('/SupprimerAdmin', 'App\Http\Controllers\AdminController@delete');
Route::get('/afficherevent', 'App\Http\Controllers\EventController@index');
Route::get('/afficherreservation', 'App\Http\Controllers\ReservationController@index');
Route::get('/updateevent', 'App\Http\Controllers\EventController@update');
Route::get('/editevent', 'App\Http\Controllers\EventController@edit');

Route::get('/Ajouterreservation', 'App\Http\Controllers\ReservationController@create');
Route::get('/Ajoutreservation', 'App\Http\Controllers\ReservationController@store');
Route::get('/Ajouterreclamation', 'App\Http\Controllers\ReclamationController@create');
Route::get('/Ajoutreclamation', 'App\Http\Controllers\ReclamationController@store');
Route::get('/afficherreclamation', 'App\Http\Controllers\ReclamationController@index');
Route::get('/supprimerreclamation', 'App\Http\Controllers\ReclamationController@destroy');
Route::get('/deleteAdmin', function () {
    return view('Supprimer_Admin');
});
Route::get("delete","App\Http\Controllers\AdminController@destroy");

Route::get('/UpdateAdmin', function () {
    return view('update_Admin');
});
Route::get("update","App\Http\Controllers\AdminController@update");