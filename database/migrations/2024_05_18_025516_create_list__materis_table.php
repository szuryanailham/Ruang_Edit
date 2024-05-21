<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('list__materis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('KD_bulan');
            $table->string('kode_materi')->unique();
            $table->string('judul');
            $table->text('deskripsi');
            $table->string('kode_youtube');
            $table->string('author');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('list__materis');
    }
};
