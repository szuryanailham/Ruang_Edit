<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Month_Materi;

class MonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bulan = [
            ['id' => 1, 'nama_bulan' => 'Januari'],
            ['id' => 2, 'nama_bulan' => 'Februari'],
            ['id' => 3, 'nama_bulan' => 'Maret'],
            ['id' => 4, 'nama_bulan' => 'April'],
            ['id' => 5, 'nama_bulan' => 'Mei'],
            ['id' => 6, 'nama_bulan' => 'Juni'],
            ['id' => 7, 'nama_bulan' => 'Juli'],
            ['id' => 8, 'nama_bulan' => 'Agustus'],
            ['id' => 9, 'nama_bulan' => 'September'],
            ['id' => 10, 'nama_bulan' => 'Oktober'],
            ['id' => 11, 'nama_bulan' => 'November'],
            ['id' => 12, 'nama_bulan' => 'Desember'],
        ];
        
        Month_Materi::insert($bulan);
    }
}
