<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResearchFundings extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'type',
        'other_type',
        'source_capital',
        'capital_level',
        'year',
        'date1',
        'date2',
        'amount',
        'description',
        'delivery_date',
        "created_at",
        "updated_at"
    ];
}
