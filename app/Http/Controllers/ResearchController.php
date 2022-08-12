<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Researchs;
use App\Models\ResearchFundings;
use App\Models\ResearchPresentations;
use App\Models\ResearchPublications;
use App\Models\ResearchBenefits;

class ResearchController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchAll()
    {
        $research = Researchs::where([
            ['created_by', '=', auth()->user()->id],
            ['is_deleted', '=', 0]
        ])->get();

        if ($research) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $research
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function fetchById($id)
    {
        $research = Researchs::find($id);
        $research_funding = ResearchFundings::where('research_id', '=', $id)->get();
        $research_presentations = ResearchPresentations::where('research_id', '=', $id)->get();
        $research_publications = ResearchPublications::where('research_id', '=', $id)->get();
        $research_benefits = ResearchBenefits::where('research_id', '=', $id)->get();

        if ($research && $research->created_by == auth()->user()->id) {
            $research['research_fundings'] = $research_funding;
            $research['research_presentations'] = $research_presentations;
            $research['research_publications'] = $research_publications;
            $research['research_benefits'] = $research_benefits;
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $research
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function save(Request $request)
    {
        $research = new Researchs($request->all());
        $research->created_by = auth()->user()->id;
        $research->save();

        $research->update(
            [
                'research_papers_path' =>  $this->uploadFile($request->file('research_papers_path'), $research->id)['name'] ?? null,
                'research_reference_path' => $this->uploadFile($request->file('research_reference_path'), $research->id)['name'] ?? null,
            ]
        );

        if ($request->research_fundings) {
            foreach (json_decode($request->research_fundings) as $funding) {
                $research_funding = new ResearchFundings;
                $research_funding->research_id = $research->id;
                $research_funding->type = $funding->type;
                $research_funding->other_type = $funding->other_type;
                $research_funding->source_capital = $funding->source_capital;
                $research_funding->capital_level = $funding->capital_level;
                $research_funding->year = $funding->year;
                $research_funding->date1 = $funding->date1;
                $research_funding->date2 = $funding->date2;
                $research_funding->amount = $funding->amount;
                $research_funding->description = $funding->description;
                $research_funding->delivery_date = $funding->delivery_date;
                $research_funding->save();
            }
        }

        if ($request->research_presentations) {
            foreach (json_decode($request->research_presentations) as $presentations) {
                $research_presentations = new ResearchPresentations;
                $research_presentations->research_id = $research->id;
                $research_presentations->research_presentation_date = $presentations->research_presentation_date;
                $research_presentations->presentation_style = $presentations->presentation_style;
                $research_presentations->academic_work = $presentations->academic_work;
                $research_presentations->academic_name = $presentations->academic_name;
                $research_presentations->place_presentation = $presentations->place_presentation;
                $research_presentations->presentation_level = $presentations->presentation_level;
                $research_presentations->organization_name = $presentations->organization_name;
                $research_presentations->save();
            }
        }

        if ($request->research_publications) {
            foreach (json_decode($request->research_publications) as $publications) {
                $research_publications = new ResearchPublications;
                $research_publications->research_id = $research->id;
                $research_publications->reference = $publications->reference;
                $research_publications->presentation_level = $publications->presentation_level;
                $research_publications->title_th = $publications->title_th;
                $research_publications->title_en = $publications->title_en;
                $research_publications->publication_date = $publications->publication_date;
                $research_publications->no = $publications->no;
                $research_publications->page_number = $publications->page_number;
                $research_publications->printing_website = $publications->printing_website;
                $research_publications->save();
            }
        }

        if ($request->research_benefits) {
            foreach (json_decode($request->research_benefits) as $benefits) {
                $research_benefits = new ResearchBenefits;
                $research_benefits->research_id = $research->id;
                $research_benefits->date_reference = $benefits->date_reference;
                $research_benefits->research_name_reference = $benefits->research_name_reference;
                $research_benefits->research_name = $benefits->research_name;
                $research_benefits->url = $benefits->url;
                $research_benefits->reference = $benefits->reference;
                $research_benefits->save();
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $research->id
        ], 200);
    }

    public function edit($id, Request $request)
    {
        $research = Researchs::find($id);
        $research->title_name_th = $request->title_name_th;
        $research->abstract_name_th = $request->abstract_name_th;
        $research->keyword_name_th = $request->keyword_name_th;
        $research->title_name_en = $request->title_name_en;
        $research->abstract_name_en = $request->abstract_name_en;
        $research->keyword_name_en = $request->keyword_name_en;
        $research->ref_code_nr = $request->ref_code_nr;
        $research->ref_code_university = $request->ref_code_university;
        $research->research_period = $request->research_period;
        $research->research_model = $request->research_model;
        $research->research_type = $request->research_type;
        $research->research_branch = $request->research_branch;
        $research->research_branch_main = $request->research_branch_main;
        $research->research_activities = $request->research_activities;
        $research->road_map = $request->road_map;
        $research->research_status = $request->research_status;
        $research->research_project_type = $request->research_project_type;
        $research->research_nature = $request->research_nature;
        $research->research_main_name = $request->research_main_name;
        $research->research_main_address = $request->research_main_address;
        $research->research_main_position = $request->research_main_position;
        $research->research_main_responsible = $request->research_main_responsible;
        $research->research_second_name = $request->research_second_name;
        $research->research_second_address = $request->research_second_address;
        $research->research_second_position = $request->research_second_position;
        $research->research_second_responsible = $request->research_second_responsible;
        $research->research_consultant = $request->research_consultant;
        $research->research_operation = $request->research_operation;
        $research->research_objective = $request->research_objective;
        $research->research_benefit = $request->research_benefit;
        $research->research_achievements = $request->research_achievements;
        $research->research_area = $request->research_area;
        $research->research_other = $request->research_other;
        $research->research_papers_path = $this->updateFile($request->file('research_papers_path'), $research->research_papers_path,  $id)['name'] ?? null;
        $research->research_reference_path = $this->updateFile($request->file('research_reference_path'), $research->research_reference_path, $id)['name'] ?? null;
        $research->research_reference = $request->research_reference;
        $research->updated_at = $request->updated_at;
        $research->update();

        if ($request->research_fundings) {
            ResearchFundings::where('research_id', $research->id)->delete();
            $ResearchIdDelete = ResearchFundings::all()->pluck('id', 'id');
            foreach (json_decode($request->research_fundings) as $funding) {
                $ResearchFundingWhere = [
                    'id' => $funding->id ?? 0,
                ];
                $ResearchFundingData = [
                    "research_id" => $research->id,
                    'type' => $funding->type,
                    'other_type' => $funding->other_type,
                    'source_capital' => $funding->source_capital,
                    'capital_level' => $funding->capital_level,
                    'year' => $funding->year,
                    'date1' => $funding->date1,
                    'date2' => $funding->date2,
                    'amount' => $funding->amount,
                    'description' => $funding->description,
                    'delivery_date' => $funding->delivery_date,
                ];
                $createdOrUpdated = ResearchFundings::updateOrCreate($ResearchFundingWhere, $ResearchFundingData);
                if (!empty($ResearchIdDelete[$createdOrUpdated->id])) {
                    unset($ResearchIdDelete[$createdOrUpdated->id]);
                }
            }
            if (count($ResearchIdDelete)) {
                ResearchFundings::whereIn('id', $ResearchIdDelete)->where('research_id', $research->id)->delete();
            }
        }

        if ($request->research_benefits) {
            $ResearchIdDelete = ResearchBenefits::all()->pluck('id', 'id');
            foreach (json_decode($request->research_benefits) as $benefit) {
                $ResearchBenefitWhere = [
                    'id' => $benefit->id ?? 0,
                ];
                $ResearchBenefitData = [
                    "research_id" => $research->id,
                    "date_reference" => $benefit->date_reference,
                    "research_name_reference" => $benefit->research_name_reference,
                    "research_name" => $benefit->research_name,
                    "url" => $benefit->url,
                    "reference" => $benefit->reference,
                ];
                $createdOrUpdated = ResearchBenefits::updateOrCreate($ResearchBenefitWhere, $ResearchBenefitData);
                if (!empty($ResearchIdDelete[$createdOrUpdated->id])) {
                    unset($ResearchIdDelete[$createdOrUpdated->id]);
                }
            }
            if (count($ResearchIdDelete)) {
                ResearchBenefits::whereIn('id', $ResearchIdDelete)->where('research_id', $research->id)->delete();
            }
        }

        if ($request->research_presentations) {            
            $ResearchIdDelete = ResearchPresentations::all()->pluck('id', 'id');
            foreach (json_decode($request->research_presentations) as $presentation) {
                $ResearchPresentationsWhere = [
                    'id' => $presentation->id ?? 0,
                ];
                $ResearchPresentationsData = [
                    "research_id" => $research->id,
                    'research_presentation_date' => $presentation->research_presentation_date,
                    'presentation_style' => $presentation->presentation_style,
                    'academic_work' => $presentation->academic_work,
                    'academic_name' => $presentation->academic_name,
                    'place_presentation' => $presentation->place_presentation,
                    'presentation_level' => $presentation->presentation_level,
                    'organization_name' => $presentation->organization_name,
                ];
                $createdOrUpdated = ResearchPresentations::updateOrCreate($ResearchPresentationsWhere, $ResearchPresentationsData);
                if (!empty($ResearchIdDelete[$createdOrUpdated->id])) {
                    unset($ResearchIdDelete[$createdOrUpdated->id]);
                }
            }
            if (count($ResearchIdDelete)) {
                ResearchPresentations::whereIn('id', $ResearchIdDelete)->where('research_id', $research->id)->delete();
            }
        }

        if ($request->research_publications) {
            $ResearchIdDelete = ResearchPublications::all()->pluck('id', 'id');
            foreach (json_decode($request->research_publications) as $publications) {
                $ResearchPublicationsWhere = [
                    'id' => $presentation->id ?? 0,
                ];
                $ResearchPublicationsData = [
                    "research_id" => $research->id,
                    'reference' => $publications->reference,
                    'presentation_level' => $publications->presentation_level,
                    'title_en' => $publications->title_en,
                    'title_th' => $publications->title_th,
                    'publication_date' => $publications->publication_date,
                    'no' => $publications->no,
                    'page_number' => $publications->page_number,
                    'printing_website' => $publications->printing_website,
                ];
                $createdOrUpdated = ResearchPublications::updateOrCreate($ResearchPublicationsWhere, $ResearchPublicationsData);
                if (!empty($ResearchIdDelete[$createdOrUpdated->id])) {
                    unset($ResearchIdDelete[$createdOrUpdated->id]);
                }
            }
            if (count($ResearchIdDelete)) {
                ResearchPublications::whereIn('id', $ResearchIdDelete)->where('research_id', $research->id)->delete();
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $research->id
        ], 200);
    }

    public function delete($id)
    {
        $research = Researchs::find($id);
        if ($research) {
            $research->update(
                [
                    'is_deleted' => 1
                ]
            );
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  null
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'File not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function uploadFile($request, $id)
    {
        if ($request && $request->getSize() != 0) {
            $filename = $request->getClientOriginalName();
            $path = $request->storeAs('public/files/' . $id . '/', $filename);
            $response = [
                'path' => $path,
                'name' => $filename
            ];
            return $response;
        }
        return null;
    }

    public function updateFile($request, $oldFilename, $id)
    {
        if ($request && $request->getSize() != 0) {
            $filename = $request->getClientOriginalName();
            $path = $request->storeAs('public/files/' . $id . '/', $filename);
            $response = [
                'path' => $path,
                'name' => $filename
            ];
            return $response;
        } else if ($request && $request->getSize() == 0) {
            $response = [
                'name' => $oldFilename
            ];
            return $response;
        }
        return null;
    }
}
