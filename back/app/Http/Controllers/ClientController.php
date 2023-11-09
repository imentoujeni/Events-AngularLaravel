<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Response;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Login_Client');
    }
    //////anseeeeeeeeeeh lmawdhou3 aaml haja okhra
    public function showEvents()
    {
        // Récupérer l'ID du client connecté
        $client_id = Auth::id();
    
        // Récupérer tous les événements associés à ce client
        $events = \App\Models\Event::where('client_id', $client_id)->get();
    
        // Passer les événements à la vue pour l'affichage
        return view('events.index', compact('events'));
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Inscription_Client');

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $nom=$request->nom;
       $prenom=$request->prenom;
       $adr=$request->adresse;
       $dt_naiss=$request->date_naisance;
       $mail=$request->email;
       $mdp=$request->mdp;
       $Client=new Client();
       $Client->nom=$nom;
       $Client->prenom=$prenom;
       $Client->adresse=$adr;
       $Client->date_naissance=$dt_naiss;
       $Client->email=$mail;
       $Client->mdp=$mdp;
      $Client->save();
      return Response::json(200);
    }

    function login(Request $r){    
       //bobo
        $obj = new \stdClass(); ;
       
        if( $r->email === 'admin' && $r->mdp === 'admin'){
            $obj->session = "0";
            return Response::json($obj,200);
        } 
        else  {

            $etud = Client::all()->where('email', $r->email)->where('mdp', $r->mdp);
            $cetud = $etud->count();

            if ($cetud > 0 ) {
                $obj->session = "1";
                $obj->data = $etud;
               return Response::json($obj,200);
            } else {
                return Response::json("login failed",404); 
                }
        }
      
     
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $Client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $Client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $Client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $Client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $Client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client $Client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $Client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $Client)
    {
        //
    }
}
