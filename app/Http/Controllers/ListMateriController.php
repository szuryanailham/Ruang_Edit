<?php

namespace App\Http\Controllers;

use App\Models\List_Materi;
use App\Http\Requests\StoreList_MateriRequest;
use App\Http\Requests\UpdateList_MateriRequest;
use App\Http\Resources\ListMateriResource;
use Inertia\Inertia;


class ListMateriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(List_Materi $list_Materi)
    {
        $Detailmateri = List_Materi::where('kode_materi',$list_Materi->kode_materi)->get();
        $DetailMateriResource = ListMateriResource::collection($Detailmateri)->resolve();
        return Inertia::render('Dashboard/DetailMateri', [
            'title' => "Detail Materi",
            'Detail_materi' => $DetailMateriResource
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreList_MateriRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(List_Materi $list_Materi)
    {
        //
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(List_Materi $list_Materi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateList_MateriRequest $request, List_Materi $list_Materi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(List_Materi $list_Materi)
    {
        //
    }
}
