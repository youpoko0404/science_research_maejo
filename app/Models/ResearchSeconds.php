<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ResearchUsers;

class ResearchSeconds extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'research_id',
        'research_second_name',
        'research_second_group',
        'research_second_branch',
        'research_second_position',
        'research_second_responsible',
        "created_at",
        "updated_at"
    ];
}
