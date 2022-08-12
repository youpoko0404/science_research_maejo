<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('researchs', function (Blueprint $table) {
            $table->id();
            $table->longText('title_name_th');
            $table->longText('abstract_name_th');
            $table->longText('keyword_name_th');
            $table->longText('title_name_en');
            $table->longText('abstract_name_en');
            $table->longText('keyword_name_en');
            $table->string('ref_code_nr')->nullable()->default(null);
            $table->string('ref_code_university')->nullable()->default(null);
            $table->longText('research_period')->nullable()->default(null);
            $table->longText('research_model')->nullable()->default(null);
            $table->longText('research_type')->nullable()->default(null);
            $table->longText('research_branch')->nullable()->default(null);
            $table->longText('research_activities')->nullable()->default(null);
            $table->longText('road_map')->nullable()->default(null);
            $table->longText('research_status')->nullable()->default(null);
            $table->longText('research_project_type')->nullable()->default(null);
            $table->longText('research_nature')->nullable()->default(null);
            $table->longText('research_main_name')->nullable()->default(null);
            $table->longText('research_main_address')->nullable()->default(null);
            $table->longText('research_main_position')->nullable()->default(null);
            $table->longText('research_main_responsible')->nullable()->default(null);
            $table->longText('research_second_name')->nullable()->default(null);
            $table->longText('research_second_address')->nullable()->default(null);
            $table->longText('research_second_position')->nullable()->default(null);
            $table->longText('research_second_responsible')->nullable()->default(null);
            $table->longText('research_consultant')->nullable()->default(null);
            $table->longText('research_operation')->nullable()->default(null);
            $table->longText('research_objective')->nullable()->default(null);
            $table->longText('research_benefit')->nullable()->default(null);
            $table->longText('research_achievements')->nullable()->default(null);
            $table->longText('research_area')->nullable()->default(null);
            $table->longText('research_other')->nullable()->default(null);
            $table->string('research_papers_path')->nullable()->default(null);
            $table->string('research_reference_path')->nullable()->default(null);
            $table->boolean('is_deleted')->default(false);
            $table->integer('created_by');
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
        Schema::dropIfExists('researchs');
    }
}
