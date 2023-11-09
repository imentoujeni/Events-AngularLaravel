<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/session', function () {
    return view('session');

});
Route::get('/aff', function () {
    return view('aff');

});


Route::group(['middleware' => 'cors'], function () {
    // your routes here...
    Route::get('/', 'App\Http\Controllers\ClientController@index')->name('client.login');
Route::get('/inscription', 'App\Http\Controllers\ClientController@create')->name('client.inscription');
Route::get('/ajoutClient', 'App\Http\Controllers\ClientController@store');
Route::get('/Authentification', 'App\Http\Controllers\ClientController@login');
Route::get('affiche', 'App\Http\Controllers\ControllerS@afficher');
Route::get('/afficherevent', 'App\Http\Controllers\EventController@index');
Route::get('/Ajouterevent', 'App\Http\Controllers\EventController@create');
Route::post('/Ajoutevent', 'App\Http\Controllers\EventController@store');
//event
Route::get('/updateevent', 'App\Http\Controllers\EventController@update');
Route::get('/editevent', 'App\Http\Controllers\EventController@edit');
Route::get('/getEventsByStatus', 'App\Http\Controllers\EventController@getEventsByStatus');
//reservation
Route::get('/Ajouterreservation', 'App\Http\Controllers\ReservationController@create');
Route::get('/Ajoutreservation', 'App\Http\Controllers\ReservationController@store');
Route::get('/afficherreservation', 'App\Http\Controllers\ReservationController@index');
//showEvents / connected user
Route::get('/showEvents', 'App\Http\Controllers\ClientController@showEvents');
//reclamation add and show
Route::get('/Ajouterreclamation', 'App\Http\Controllers\ReclamationController@create');
Route::get('/Ajoutreclamation', 'App\Http\Controllers\ReclamationController@store');
Route::get('/afficherreclamation', 'App\Http\Controllers\ReclamationController@index');
Route::get('/supprimerreclamation', 'App\Http\Controllers\ReclamationController@destroy');
//image
Route::get('/image/{path}',  'App\Http\Controllers\EventController@getphoto');
Route::post('/imagetest','App\Http\Controllers\EventController@photoStore');
});

Route::get('/create', 'App\Http\Controllers\AdminController@create');
Route::get('/AjouterAdmin', 'App\Http\Controllers\AdminController@store');
Route::get('/ListeAdmin', 'App\Http\Controllers\AdminController@show');
Route::get('/SupprimerAdmin', 'App\Http\Controllers\AdminController@delete');

Route::get('/deleteAdmin', function () {
    return view('Supprimer_Admin');
});
Route::get("delete","App\Http\Controllers\AdminController@destroy");

Route::get('/UpdateAdmin', function () {
    return view('update_Admin');
});
Route::get("update","App\Http\Controllers\AdminController@update");