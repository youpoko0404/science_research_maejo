<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResearchPublications extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'research_id',
        'reference',
        'presentation_level',
        'title_en',
        'title_th',
        'publication_date',
        'no',
        'page_number',
        'printing_website',
        "created_at",
        "updated_at"
    ];
}
