<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResearchUsers extends Model
{
    use HasFactory;
    protected $fillable = [
        'research_id',
        'name',
        'agency',
        'branch',
        'research_position',
        'percen_responsibility',
        "created_at",
        "updated_at"
    ];


}
