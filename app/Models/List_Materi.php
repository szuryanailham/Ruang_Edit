<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class List_Materi extends Model
{
    use HasFactory;
    // protected $table = 'list_materi';
    protected $guarded = ["id"];

    public function Month_Materi()
    {
        return $this->belongsTo(Month_Materi::class);
    }

    public function getRouteKeyName(): string
    {
        return 'kode_materi';
    }
}
