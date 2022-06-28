<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('research_id')->unsigned();
            $table->string('name')->nullable()->default(null);
            $table->string('agency')->nullable()->default(null);
            $table->string('branch')->nullable()->default(null);
            $table->string('research_position')->nullable()->default(null);
            $table->integer('percen_responsibility')->nullable()->default(null);
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
        Schema::dropIfExists('research_users');
    }
}
