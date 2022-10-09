<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserExpertise extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        "citizenId",
        "titlePositionShort",
        "firstName",
        "lastName",
        "sectionId",
        "section",
        "divisionId",
        "division",
        "facultyId",
        "faculty",
        "personExpId",
        "expTypeId",
        "expType",
        "expAcadPosition",
        "expGroupFieldId",
        "expGroupField",
        "expGroupField_EN",
        "expMainFieldId",
        "expMainField",
        "expMainField_EN",
        "expSubFieldId",
        "expSubField",
        "expSubField_EN",
        "expDetail",
        "isResearch",
        "isService",
        "isAward",
        "isExperience",
        "isInterest",
        "created_at",
        "updated_at"
    ];
}
