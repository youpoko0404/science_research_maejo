<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchFundingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_fundings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->string('type');
            $table->string('other_type')->nullable()->default(null);
            $table->string('source_capital');
            $table->string('capital_level');
            $table->string('year')->nullable()->default(null);
            $table->string('date1')->nullable()->default(null);
            $table->string('date2')->nullable()->default(null);
            $table->string('amount')->nullable()->default(null);
            $table->string('description')->nullable()->default(null);
            $table->string('delivery_date')->nullable()->default(null);
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
        Schema::dropIfExists('research_fundings');
    }
}
