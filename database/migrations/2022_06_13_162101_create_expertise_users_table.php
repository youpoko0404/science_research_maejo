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
            $table->longText("citizenId")->nullable()->default(null);
            $table->longText("titlePositionShort")->nullable()->default(null);
            $table->longText("firstName")->nullable()->default(null);
            $table->longText("lastName")->nullable()->default(null);
            $table->longText("sectionId")->nullable()->default(null);
            $table->longText("section")->nullable()->default(null);
            $table->longText("divisionId")->nullable()->default(null);
            $table->longText("division")->nullable()->default(null);
            $table->longText("facultyId")->nullable()->default(null);
            $table->longText("faculty")->nullable()->default(null);
            $table->integer("personExpId")->nullable()->default(null);
            $table->integer("expTypeId")->nullable()->default(null);
            $table->longText("expType")->nullable()->default(null);
            $table->longText("expAcadPosition")->nullable()->default(null);
            $table->longText("expGroupFieldId")->nullable()->default(null);
            $table->longText("expGroupField")->nullable()->default(null);
            $table->longText("expGroupField_EN")->nullable()->default(null);
            $table->longText("expMainFieldId")->nullable()->default(null);
            $table->longText("expMainField")->nullable()->default(null);
            $table->longText("expMainField_EN")->nullable()->default(null);
            $table->longText("expSubFieldId")->nullable()->default(null);
            $table->longText("expSubField")->nullable()->default(null);
            $table->longText("expSubField_EN")->nullable()->default(null);
            $table->longText("expDetail")->nullable()->default(null);
            $table->boolean("isResearch")->nullable()->default(null);
            $table->boolean("isService")->nullable()->default(null);
            $table->boolean("isAward")->nullable()->default(null);
            $table->boolean("isExperience")->nullable()->default(null);
            $table->boolean("isInterest")->nullable()->default(null);
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
