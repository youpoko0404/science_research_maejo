<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResearchPresentations extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'research_presentation_date',
        'presentation_style',
        'academic_work',
        'academic_name',
        'place_presentation',
        'presentation_level',
        'organization_name',
        "created_at",
        "updated_at"
    ];
}
