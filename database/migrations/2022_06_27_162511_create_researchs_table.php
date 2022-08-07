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
            $table->longText('research_name_th');
            $table->longText('research_name_en');
            $table->string('research_code')->unique()->nullable()->default(null);
            $table->longText('university_code')->nullable()->default(null);
            $table->longText('research_period')->nullable()->default(null);
            $table->longText('research_format')->nullable()->default(null);
            $table->longText('research_type')->nullable()->default(null);
            $table->longText('research_branch')->nullable()->default(null);
            $table->longText('related_activities')->nullable()->default(null);
            $table->longText('road_map')->nullable()->default(null);
            $table->longText('research_status')->nullable()->default(null);
            $table->longText('research_project_type')->nullable()->default(null);
            $table->longText('research_nature')->nullable()->default(null);
            $table->longText('part_3')->nullable()->default(null);
            $table->longText('part_4')->nullable()->default(null);
            $table->longText('part_5')->nullable()->default(null);
            $table->longText('part_6')->nullable()->default(null);
            $table->longText('part_7')->nullable()->default(null);
            $table->longText('part_8')->nullable()->default(null);
            $table->longText('part_9')->nullable()->default(null);
            $table->longText('part_11')->nullable()->default(null);
            $table->longText('ref_file')->nullable()->default(null);
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
