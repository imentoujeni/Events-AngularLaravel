<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Response;
class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Reservation::all();
        return $data ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Ajout_Reservation');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $E =new Reservation();
        $E -> nom=$request->nom;
        $E ->idevent=$request->idevent;
        $E ->nbre_personne=$request->nbre_personne;
        $E ->telephone=$request->telephone;
        

      
        $E->save();
        return Response::json(200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reservation  $Reservation
     * @return \Illuminate\Http\Response
     */
    public function show()
    {$Reservation=Reservation::all();
        return view('liste_Reservations',compact('Reservation'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reservation  $Reservation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reservation $Reservation)
    {
        //
    }

    /**
     * Upidevent the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $Reservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reservation $Reservation)
    {
        $E = Reservation::find($request->id);
    
        $E -> nom=$request->nom;
        $E ->idevent=$request->idevent;
        $E ->nbre_personne=$request->nbre_personne;
        $E ->telephone=$request->telephone;
        
        $E->save();
        echo ("visite Upidevent");

    } 

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $Reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $Reservation)
    {
        Reservation::where ('id' , $Reservation->id)->delete();
        echo ("Reservation Supprimer");
    }
}
