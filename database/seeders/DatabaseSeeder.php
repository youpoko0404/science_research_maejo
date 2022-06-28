<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use App\Models\Parameter;

use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call('Database\Seeders\ParametersTableSeeder');
        $this->command->info('Parameters table seeded!');
    }
}

class ParametersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('Parameters')->truncate();
        $rows = [
            [
                'group_name' => "research_consultant",
                'value' => "inside",
                'value_ref' => "ภายใน",
                'sort_order' => "1",
            ],
            [
                'group_name' => "research_consultant",
                'value' => "outside",
                'value_ref' => "ภายนอน",
                'sort_order' => "2",
            ],

            [
                'group_name' => "branch_group",
                'value' => "materials",
                'value_ref' => "สาขาวิชาวัสดุศาสตร์",
                'sort_order' => "1",
                'remark' => "rgba(255, 99, 132, 0.2)"
            ],
            [
                'group_name' => "branch_group",
                'value' => "biotechnology",
                'value_ref' => "สาขาวิชาเทคโนโลยีชีวภาพ",
                'sort_order' => "2",
                'remark' => "rgba(255, 99, 132, 0.2)"

            ],
            [
                'group_name' => "branch_group",
                'value' => "mathematics",
                'value_ref' => "สาขาวิชาคณิตศาสตร์",
                'sort_order' => "3",
                'remark' => "rgba(255, 99, 132, 0.2)"

            ],
            [
                'group_name' => "branch_group",
                'value' => "computer_science",
                'value_ref' => "สาขาวิชาวิทยาการคอมพิวเตอร์",
                'sort_order' => "4",
                'remark' => "rgba(255, 99, 132, 0.2)"

            ],
            [
                'group_name' => "branch_group",
                'value' => "physics",
                'value_ref' => "สาขาวิชาฟิสิกส์ประยุกต์",
                'sort_order' => "5",
                'remark' => "rgba(255, 99, 132, 0.2)"
            ],
            [
                'group_name' => "branch_group",
                'value' => "chemistry",
                'value_ref' => "สาขาวิชาเคมี",
                'sort_order' => "6",
                'remark' => "rgba(255, 99, 132, 0.2)"
            ],
            [
                'group_name' => "branch_group",
                'value' => "industrial_chemistry_and_textile_technology",
                'value_ref' => "สาขาวิชาเคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ",
                'sort_order' => "7",
                'remark' => ""
            ],
            [
                'group_name' => "branch_group",
                'value' => "statistics",
                'value_ref' => "สาขาวิชาสถิติ",
                'sort_order' => "8",
                'remark' => ""
            ],
            [
                'group_name' => "branch_group",
                'value' => "information_technology",
                'value_ref' => "สาขาวิชาเทคโนโลยีสารสนเทศ",
                'sort_order' => "9",
                'remark' => ""
            ],

            [
                'group_name' => "funding_type_group",
                'value' => "external_institution_budget_group",
                'value_ref' => "งบประมาณภายนอกสถาบัน",
                'sort_order' => "1",
            ],
            [
                'group_name' => "funding_type_group",
                'value' => "institutional_budget_group",
                'value_ref' => "งบประมาณภายในสถาบัน",
                'sort_order' => "2",
            ],
            [
                'group_name' => "funding_type_group",
                'value' => "personal_budget_group",
                'value_ref' => "ทุนส่วนตัว",
                'sort_order' => "3",
            ],
            [
                'group_name' => "funding_type_group",
                'value' => "other",
                'value_ref' => "อื่นๆ",
                'sort_order' => "4",
            ],

            [
                'group_name' => "institutional_budget_group",
                'value' => "research_budget",
                'value_ref' => "กองทุนวิจัย มหาวิทยาลัยแม่โจ้",
                'sort_order' => "1",
            ],
            [
                'group_name' => "institutional_budget_group",
                'value' => "university_budget",
                'value_ref' => "งบภายในมหาวิทยาลัยแม่โจ้",
                'sort_order' => "2",
            ],
            [
                'group_name' => "institutional_budget_group",
                'value' => "agency_budget",
                'value_ref' => "งบภายในหน่วยงาน",
                'sort_order' => "3",
            ],

            [
                'group_name' => "funding_level_group",
                'value' => "faculty_office_level",
                'value_ref' => "ระดับคณะ/สำนักงาน",
                'sort_order' => "1",
            ],
            [
                'group_name' => "funding_level_group",
                'value' => "university_level",
                'value_ref' => "ระดับมหาวิทยาลัย",
                'sort_order' => "2",
            ],
            [
                'group_name' => "funding_level_group",
                'value' => "national_level",
                'value_ref' => "ระดับชาติ",
                'sort_order' => "3",
            ],
            [
                'group_name' => "funding_level_group",
                'value' => "international_level",
                'value_ref' => "ระดับนานาชาติ",
                'sort_order' => "4",
            ],
            [
                'group_name' => "funding_level_group",
                'value' => "other",
                'value_ref' => "อื่นๆ",
                'sort_order' => "5",
            ],


        ];

        foreach ($rows as $row) {
            Parameter::create($row);
        }
    }
}
