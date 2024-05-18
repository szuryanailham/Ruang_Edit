<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Month_Materi extends Model
{
    use HasFactory;

    public function materis()
    {
        return $this->hasMany(List_Materi::class);
    }
    public function getRouteKeyName(): string
{
    return 'nama_bulan';
}
}
