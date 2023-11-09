<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Admin::all();
        return $data ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('Ajout_Admin');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $E =new Admin();
        $E -> nom=$request->nom;
        $E ->prenom=$request->prenom;
        $E -> $mail=$request->email;
        $E ->$mdp=$request->mdp;
        $E->save();
        echo ("Admin Ajouté avec succé");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $Admin
     * @return \Illuminate\Http\Response
     */
    public function show()
    {$Admin=Admin::all();
        return view('liste_Admins',compact('Admin'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $Admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $Admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin  $Admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin $Admin)
    {
        $E = Admin::find($request->id);
    
        $E->nom=$request->nom;
        $E->prenom=$request->prenom;
        $mail=$request->email;
        $mdp=$request->mdp;
        $E->save();
        echo ("visite Update");
    } 

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  $Admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $Admin)
    {
        Admin::where ('id' , $Admin->id)->delete();
        echo ("Admin Supprimer");
    }
}

