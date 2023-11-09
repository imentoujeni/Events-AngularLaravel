<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prix');
            $table->string('proprietere');
            $table->string('date');
            $table->string('lieu');
            $table->string('photo'); // Utilisez le type de champ 'binary' pour stocker les images
            $table->string('etat');
            $table->string('nbrereservation');
            $table->string('nbreplaces');

            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event');
    }
}
