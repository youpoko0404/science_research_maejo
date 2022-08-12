<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchPresentationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_presentations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->string('research_presentation_date')->nullable()->default(null);
            $table->string('presentation_style')->nullable()->default(null);
            $table->string('academic_work')->nullable()->default(null);
            $table->string('academic_name')->nullable()->default(null);
            $table->string('place_presentation')->nullable()->default(null);
            $table->string('presentation_level')->nullable()->default(null);
            $table->string('organization_name')->nullable()->default(null);
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
        Schema::dropIfExists('research_presentations');
    }
}
