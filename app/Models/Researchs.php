<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Researchs extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'research_name',
        'university_code',
        'research_period',
        'research_format',
        'research_type',
        'research_branch',
        'related_activities',
        'road_map',
        'research_status',
        'research_project_type',
        'research_nature',
        'part_3',
        'part_4',
        'part_5',
        'part_6',
        'part_7',
        'part_8',
        'part_9',
        'part_11',
        'ref_file',
        'is_deleted',
        'created_by',
        "created_at",
        "updated_at"
    ];
}
