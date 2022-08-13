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
        Parameter::query()->truncate();

        $branch_main_group = [
            [
                'group_name' => "branch_main_group",
                'value' => "bachelor_degree_branch_group",
                'value_ref' => "ปริญญาตรี",
                'sort_order' => "1",
                'remark' => ""
            ],
            [
                'group_name' => "branch_main_group",
                'value' => "master_degree_branch_group",
                'value_ref' => "ปริญญาโท",
                'sort_order' => "2",
                'remark' => ""
            ],
            [
                'group_name' => "branch_main_group",
                'value' => "doctor_degree_branch_group",
                'value_ref' => "ปริญญาเอก",
                'sort_order' => "3",
                'remark' => ""
            ],
        ];

        // branch_main_group
        foreach ($branch_main_group as $row) {
            Parameter::create($row);
        }

        $branch_group = [
            [
                'group_name' => "branch_group",
                'value' => "bachelor_materials",
                'value_ref' => "ปริญญาตรี สาขาวิชาวัสดุศาสตร์",
                'sort_order' => "1",
                'remark' => "#CC99CC"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_biotechnology",
                'value_ref' => "ปริญญาตรี สาขาวิชาเทคโนโลยีชีวภาพ",
                'sort_order' => "2",
                'remark' => "#CC0000"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_mathematics",
                'value_ref' => "ปริญญาตรี สาขาวิชาคณิตศาสตร์",
                'sort_order' => "3",
                'remark' => "#FF99CC"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_computer_science",
                'value_ref' => "ปริญญาตรี สาขาวิชาวิทยาการคอมพิวเตอร์",
                'sort_order' => "4",
                'remark' => "#66CCFF"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_physics",
                'value_ref' => "ปริญญาตรี สาขาวิชาฟิสิกส์ประยุกต์",
                'sort_order' => "5",
                'remark' => "#3366CC"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_chemistry",
                'value_ref' => "ปริญญาตรี สาขาวิชาเคมี",
                'sort_order' => "6",
                'remark' => "#CCCCCC"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_industrial_chemistry_and_textile_technology",
                'value_ref' => "ปริญญาตรี สาขาวิชาเคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ",
                'sort_order' => "7",
                'remark' => "#339966"
            ],
            [
                'group_name' => "branch_group",
                'value' => "bachelor_statistics",
                'value_ref' => "ปริญญาตรี สาขาวิชาสถิติ",
                'sort_order' => "8",
                'remark' => "#FFCC66"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_bachelor_information_technology",
                'value_ref' => "ปริญญาตรี สาขาวิชาเทคโนโลยีสารสนเทศ",
                'sort_order' => "9",
                'remark' => "#66CC66"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_applied_chemistry",
                'value_ref' => "ปริญญาโท สาขาวิชาเคมีประยุกต์",
                'sort_order' => "10",
                'remark' => "#FF9966"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_department_of_science",
                'value_ref' => "ปริญญาโท สาขาวิชาวิทยาศาสตร์และเทคโนโลยีนาโน",
                'sort_order' => "11",
                'remark' => "#FF9999"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_biotechnology",
                'value_ref' => "ปริญญาโท สาขาวิชาเทคโนโลยีชีวะภาพ",
                'sort_order' => "12",
                'remark' => "#99CC66"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_department_of_environmental",
                'value_ref' => "ปริญญาโท สาขาวิชาเทคโนโลยีสิ่งแวดล้อม",
                'sort_order' => "13",
                'remark' => "#669966"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_department_of_genetics",
                'value_ref' => "ปริญญาโท สาขาวิชาพันธุศาสตร์",
                'sort_order' => "14",
                'remark' => "#336699"
            ],
            [
                'group_name' => "branch_group",
                'value' => "master_digital_technology",
                'value_ref' => "ปริญญาโท สาขาวิชานวัตกรรมเทคโนโลยีดิจิตอล",
                'sort_order' => "15",
                'remark' => "#3399CC"
            ],
            [
                'group_name' => "branch_group",
                'value' => "doctor_biotechnology",
                'value_ref' => "ปริญญาเอก สาขาวิชาเทคโนโลยีชีวภาพ",
                'sort_order' => "16",
                'remark' => "#669900"
            ],
            [
                'group_name' => "branch_group",
                'value' => "doctor_department_of_genetics",
                'value_ref' => "ปริญญา เอกสาขาวิชาพันธุศาสตร์",
                'sort_order' => "17",
                'remark' => "#006699"
            ],
            [
                'group_name' => "branch_group",
                'value' => "doctor_applied_chemistry",
                'value_ref' => "ปริญญา เอกสาขาวิชาเคมีประยุกต์",
                'sort_order' => "18",
                'remark' => "#FF9900"
            ],
        ];

        // branch_group
        foreach ($branch_group as $row) {
            Parameter::create($row);
        }

        $research_other_group = [
            [
                'group_name' => "research_other_group",
                'value' => "research_main",
                'value_ref' => "งานวิจัยหลัก",
                'sort_order' => "1",
                'remark' => ""
            ],
            [
                'group_name' => "research_other_group",
                'value' => "research_sub",
                'value_ref' => "งานวิจัยย่อย",
                'sort_order' => "2",
                'remark' => ""
            ],
        ];

        // research_other_group
        foreach ($research_other_group as $row) {
            Parameter::create($row);
        }

        $funding_type_group = [
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
        ];

        // funding_type_group
        foreach ($funding_type_group as $row) {
            Parameter::create($row);
        }

        $external_institution_budget_group = [
            [
                'group_name' => "external_institution_budget_group",
                'value' => "national_level",
                'value_ref' => "งานวิจัยระดับชาติ",
                'sort_order' => "1",
            ],
            [
                'group_name' => "external_institution_budget_group",
                'value' => "local_level",
                'value_ref' => "งานวิจัยระดับท้องถิ่น",
                'sort_order' => "2",
            ],
            [
                'group_name' => "external_institution_budget_group",
                'value' => "international_level",
                'value_ref' => "งานวิจัยระดับนานาชาติ",
                'sort_order' => "3",
            ],
            [
                'group_name' => "external_institution_budget_group",
                'value' => "private_company",
                'value_ref' => "บริษัทเอกชน",
                'sort_order' => "4",
            ],
            [
                'group_name' => "external_institution_budget_group",
                'value' => "agency",
                'value_ref' => "หน่วยงานให้ทุนวิจัย",
                'sort_order' => "5",
            ],
            [
                'group_name' => "external_institution_budget_group",
                'value' => "other",
                'value_ref' => "อื่นๆ",
                'sort_order' => "6",
            ],
        ];

        // external_institution_budget_group
        foreach ($external_institution_budget_group as $row) {
            Parameter::create($row);
        }

        $institutional_budget_group = [
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
        ];

        // institutional_budget_group
        foreach ($institutional_budget_group as $row) {
            Parameter::create($row);
        }

        $personal_budget_group = [
            [
                'group_name' => "personal_budget_group",
                'value' => "research_budget_private",
                'value_ref' => "ส่วนตัวของผู้วิจัย",
                'sort_order' => "1",
            ]
        ];

        // personal_budget_group
        foreach ($personal_budget_group as $row) {
            Parameter::create($row);
        }

        $funding_level_group = [
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
                'sort_order' => "4",
            ],
        ];

        // institutional_budget_group
        foreach ($funding_level_group as $row) {
            Parameter::create($row);
        }

        $presentations_type_group = [
            [
                'group_name' => "presentations_type_group",
                'value' => "describe",
                'value_ref' => "การบรรยาย",
                'sort_order' => "1",
            ],
            [
                'group_name' => "presentations_type_group",
                'value' => "poster",
                'value_ref' => "โปสเตอร์",
                'sort_order' => "2",
            ]
        ];

        // presentations_type_group
        foreach ($presentations_type_group as $row) {
            Parameter::create($row);
        }

        $presentations_academic_type_group = [
            [
                'group_name' => "presentations_academic_type_group",
                'value' => "academic_conference",
                'value_ref' => "การประชุมทางวิชาการ",
                'sort_order' => "1",
            ]
        ];

        // presentations_academic_type_group
        foreach ($presentations_academic_type_group as $row) {
            Parameter::create($row);
        }

        $presentation_level_group = [
            [
                'group_name' => "presentation_level_group",
                'value' => "department_level",
                'value_ref' => "ระดับกรม",
                'sort_order' => "1",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "ministry_level",
                'value_ref' => "ระดับกระทรวง",
                'sort_order' => "2",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "international_cooperation_level",
                'value_ref' => "ระดับความร่วมมือระหว่างประเทศ",
                'sort_order' => "3",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "provincial_level",
                'value_ref' => "ระดับจังหวัด",
                'sort_order' => "4",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "national",
                'value_ref' => "ระดับชาติ",
                'sort_order' => "5",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "local_level",
                'value_ref' => "ระดับท้องถิ่น",
                'sort_order' => "6",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "international_level",
                'value_ref' => "ระดับนานาชาติ",
                'sort_order' => "7",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "asia_region",
                'value_ref' => "ระดับภูมิภาคเอเชีย",
                'sort_order' => "8",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "department_level",
                'value_ref' => "ระดับหน่วยงาน",
                'sort_order' => "9",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "public_organization",
                'value_ref' => "องค์กรมหาชน",
                'sort_order' => "10",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "private_organization",
                'value_ref' => "องค์กรเอกชน",
                'sort_order' => "11",
            ],
            [
                'group_name' => "presentation_level_group",
                'value' => "other",
                'value_ref' => "อื่นๆ",
                'sort_order' => "12",
            ],
        ];

        // presentation_level_group
        foreach ($presentation_level_group as $row) {
            Parameter::create($row);
        }

    }
}
