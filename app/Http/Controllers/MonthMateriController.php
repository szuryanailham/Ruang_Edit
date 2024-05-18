<?php

namespace App\Http\Controllers;
// CALLING MODEL
use App\Models\Month_Materi;
use App\Models\List_Materi;
// RESOUCE
use App\Http\Resources\ListMateriResource;

use Inertia\Inertia;
use App\Http\Requests\StoreMonth_MateriRequest;
use App\Http\Requests\UpdateMonth_MateriRequest;

class MonthMateriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Welcome', [
            'title' => "List Materi perbulan",
            'Months' => Month_Materi::all(),
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
    public function store(StoreMonth_MateriRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Month_Materi $month_Materi)
    {
        $materi = List_Materi::where('KD_bulan', $month_Materi->id)->get();
        $materiResource = ListMateriResource::collection($materi)->resolve();
        return Inertia::render('Dashboard/ListMateri', [
            'title' => "daftar materi ". $month_Materi->nama_bulan,
            'materi' => $materiResource,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Month_Materi $month_Materi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMonth_MateriRequest $request, Month_Materi $month_Materi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Month_Materi $month_Materi)
    {
        //
    }
}
