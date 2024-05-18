<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class List_Materi extends Model
{
    use HasFactory;

    public function Month_Materi()
    {
        return $this->belongsTo(Month_Materi::class);
    }

    public function getRouteKeyName(): string
    {
        return 'kode_materi';
    }
}
