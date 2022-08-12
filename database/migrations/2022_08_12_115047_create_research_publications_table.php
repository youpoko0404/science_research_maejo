<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchPublicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_publications', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->string('reference')->nullable()->default(null);
            $table->string('presentation_level')->nullable()->default(null);
            $table->string('title_en')->nullable()->default(null);
            $table->string('title_th')->nullable()->default(null);
            $table->string('publication_date')->nullable()->default(null);
            $table->string('no')->nullable()->default(null);
            $table->string('page_number')->default(false);
            $table->string('printing_website')->default(false);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research_publications');
    }
}
