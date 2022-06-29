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
            $table->string('research_name');
            $table->string('university_code')->nullable()->default(null);
            $table->string('research_period')->nullable()->default(null);
            $table->string('research_format')->nullable()->default(null);
            $table->string('research_type')->nullable()->default(null);
            $table->string('research_branch')->nullable()->default(null);
            $table->string('related_activities')->nullable()->default(null);
            $table->string('road_map')->nullable()->default(null);
            $table->string('research_status')->nullable()->default(null);
            $table->string('research_project_type')->nullable()->default(null);
            $table->string('research_nature')->nullable()->default(null);
            $table->string('part_3')->nullable()->default(null);
            $table->string('part_4')->nullable()->default(null);
            $table->string('part_5')->nullable()->default(null);
            $table->string('part_6')->nullable()->default(null);
            $table->string('part_7')->nullable()->default(null);
            $table->string('part_8')->nullable()->default(null);
            $table->string('part_9')->nullable()->default(null);
            $table->string('part_11')->nullable()->default(null);
            $table->string('ref_file')->nullable()->default(null);
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
