<?php

namespace App\Http\Controllers;

use App\Models\Reclamation;
use Illuminate\Http\Request;
use Response ;

class ReclamationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Reclamation::all();
        return $data ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Ajout_Reclamation');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $E =new Reclamation();
        $E -> nom=$request->nom;
        $E ->prenom=$request->prenom;
        $E ->sujet=$request->sujet;
        $E ->message=$request->message;
        

      
        $E->save();
        return Response::json(200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reclamation  $Reclamation
     * @return \Illuminate\Http\Response
     */
    public function show()
    {$Reclamation=Reclamation::all();
        return view('liste_Reclamations',compact('Reclamation'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reclamation  $Reclamation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reclamation $Reclamation)
    {
        //
    }

    /**
     * Upprenom the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reclamation  $Reclamation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reclamation $Reclamation)
    {
        $E = Reclamation::find($request->id);
    
        $E -> nom=$request->nom;
        $E ->prenom=$request->prenom;
        $E ->message=$request->message;
        $E ->sujet=$request->sujet;
        
        $E->save();
        echo ("visite Upprenom");

    } 

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reclamation  $Reclamation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Reclamation::where ('id' , $request->id)->delete();
        return Response::json(200);
    }

    
}
