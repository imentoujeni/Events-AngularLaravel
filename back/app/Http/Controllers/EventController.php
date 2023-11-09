<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Response;


class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Event::all();
        return $data ;
    }
   
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('ajouterevent');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    // $this->validate($request, [
    //     'photo' => 'required|photo|mimes:jpg,png,jpeg,gif,svg|max:2048',
    // ]);
    $photo_path = $request->file('file')->store('photos', 'public');
    $data = json_decode($request->input('event'),true);
   // dd($request->photo);
   $event= new Event();
  $event->nom= $data['nom'];
  $event->prix= $data['prix'] ;
  $event->proprietere=$data['proprietere'] ;
  $event->date=$data['date'];
  $event->lieu=$data['lieu'] ;
  $event->nbrereservation=$data['nbrereservation'];
  $event->nbreplaces=$data['nbreplaces'];
  $event->photo=$photo_path ;
  $event->etat=$data['etat'];
  $event->save();
  
// $E->photo =$request->photo;
  /*  $file = $request->file($request->photo);
    $destinationPath = 'public/photos';
    $file->move($destinationPath,$request->photo);/*/

 
    return Response::json($event,200);
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $Event
     * @return \Illuminate\Http\Response
     */
    public function show()
    {$Event=Event::all();
        return view('liste_Events',compact('Event'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $Event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $Event)
    {
        return view('updateevent');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $Event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $Event)
    {
        $E = Event::find($request->id);
    
        //$E -> nom=$request->nom;
     //  $E ->prix=$request->prix;
     //   $E ->proprietere=$request->proprietere;
     //   $E ->date=$request->date;
    //    $E ->lieu=$request->lieu;
     //   $E ->photo=$request->photo;
        $E ->etat=$request->etat;

        $E->save();
         return Response::json(200);

    }
  
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $Event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $Event)
    {
        Event::where ('id' , $Event->id)->delete();
        echo ("Event Supprimer");
    }

    public function getEventsByStatus()
{
    $events = Event::where('etat', '=', 1)->get();
    return response()->json($events);
}

public function photoStore(Request $request)
    {
        $this->validate($request, [
            'photo' => 'required|photo|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);
        $photo_path = $request->file('photo')->store('photo', 'public');

        $data = Photo::create([
            'photo' => $photo_path,
        ]);

        return response($data, Response::HTTP_CREATED);
    }

public function getphoto($path)
{
    $fullPath = storage_path('/app/public/images/'.$path );
    
    if (!file_exists($fullPath)) {
   return response()->json(['error' => 'photo not found.'], 404);
    }
    
    $file = file_get_contents($fullPath);
    
   return response($file, 200)->header('Content-Type', 'photo/jpg');

}
}
