<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResearchBenefits extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        "research_id",
        "date_reference",
        "research_name_reference",
        "research_name",
        "url",
        "reference",
        "created_at",
        "updated_at"
    ];
}
