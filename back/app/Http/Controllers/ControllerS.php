<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session ;
class ControllerS extends Controller
{
    function afficher (Request $request ){
        $nom=$request -> nom ;
        Session::put('nom',$nom);
        return(view('aff'));
    }
}
