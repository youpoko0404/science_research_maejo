<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExpertise extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        "created_at",
        "updated_at",
        "is_deleted",
        'type',
    ];
}
