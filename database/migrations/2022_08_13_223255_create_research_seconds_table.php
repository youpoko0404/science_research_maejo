<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchSecondsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_seconds', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('research_id')->unsigned();
            $table->string('research_second_name')->nullable()->default(null);
            $table->string('research_second_group')->nullable()->default(null);
            $table->string('research_second_branch')->nullable()->default(null);
            $table->string('research_second_position')->nullable()->default(null);
            $table->string('research_second_responsible')->nullable()->default(null);
            $table->timestamps();

            $table->foreign('research_id')->references('id')->on('researchs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research_seconds');
    }
}
