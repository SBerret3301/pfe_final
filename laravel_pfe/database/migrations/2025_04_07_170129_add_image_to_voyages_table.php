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
        Schema::table('voyages', function (Blueprint $table) {
            $table->string('image')->nullable(); // nullable باش ما تكونش obligatoire
        });
    }
    
    public function down(): void
    {
        Schema::table('voyages', function (Blueprint $table) {
            $table->dropColumn('image');
        });
    }
    
};
