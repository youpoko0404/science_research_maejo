<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpertiseUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_expertises', function (Blueprint $table) {
            $table->id();
            $table->longText("citizen_id")->nullable()->default(null);
            $table->longText("title_position_short")->nullable()->default(null);
            $table->longText("first_name")->nullable()->default(null);
            $table->longText("last_name")->nullable()->default(null);
            $table->longText("section_id")->nullable()->default(null);
            $table->longText("section")->nullable()->default(null);
            $table->longText("division_id")->nullable()->default(null);
            $table->longText("division")->nullable()->default(null);
            $table->longText("faculty_id")->nullable()->default(null);
            $table->longText("faculty")->nullable()->default(null);
            $table->integer("person_exp_id")->nullable()->default(null);
            $table->integer("exp_type_id")->nullable()->default(null);
            $table->longText("exp_type")->nullable()->default(null);
            $table->longText("exp_acad_position")->nullable()->default(null);
            $table->longText("exp_group_field_id")->nullable()->default(null);
            $table->longText("exp_group_field")->nullable()->default(null);
            $table->longText("exp_group_field_en")->nullable()->default(null);
            $table->longText("exp_main_field_id")->nullable()->default(null);
            $table->longText("exp_main_field")->nullable()->default(null);
            $table->longText("exp_main_field_en")->nullable()->default(null);
            $table->longText("exp_sub_field_id")->nullable()->default(null);
            $table->longText("exp_sub_field")->nullable()->default(null);
            $table->longText("exp_sub_field_en")->nullable()->default(null);
            $table->longText("exp_detail")->nullable()->default(null);
            $table->boolean("is_research")->nullable()->default(null);
            $table->boolean("is_service")->nullable()->default(null);
            $table->boolean("is_award")->nullable()->default(null);
            $table->boolean("is_experience")->nullable()->default(null);
            $table->boolean("is_interest")->nullable()->default(null);
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
        Schema::dropIfExists('user_expertises');
    }
}
