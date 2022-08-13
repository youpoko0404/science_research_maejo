<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ResearchUsers;

class Researchs extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'title_name_th',
        'abstract_name_th',
        'keyword_name_th',
        'title_name_en',
        'abstract_name_en',
        'keyword_name_en',
        'ref_code_nr',
        'ref_code_university',
        'research_period_start',
        'research_period_end',
        'research_model',
        'research_type',
        'research_branch',
        'research_activities',
        'road_map',
        'research_status',
        'research_project_type',
        'research_nature',
        'research_main_name',
        'research_main_group',
        'research_main_branch',
        'research_main_position',
        'research_main_responsible',
        'research_consultant',
        'research_operation',
        'research_objective',
        'research_benefit',
        'research_achievements',
        'research_area',
        'research_other',
        'research_papers_path',
        'research_reference_path',
        'research_reference',
        'is_deleted',
        'created_by',
        "created_at",
        "updated_at"
    ];
}
