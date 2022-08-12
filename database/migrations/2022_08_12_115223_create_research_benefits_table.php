<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchBenefitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_benefits', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('research_id')->unsigned();
            $table->string('date_reference')->nullable()->default(null);
            $table->string('research_name_reference')->nullable()->default(null);
            $table->string('research_name')->nullable()->default(null);
            $table->string('url')->nullable()->default(null);
            $table->string('reference')->nullable()->default(null);
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
        Schema::dropIfExists('research_benefits');
    }
}
