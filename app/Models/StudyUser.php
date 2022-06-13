<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'level',
        'educational',
        'university',
        "created_at",
        "updated_at"
    ];
}
