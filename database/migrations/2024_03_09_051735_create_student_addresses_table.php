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
        Schema::create('student_addresses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('student_id');
            $table->string('state');
            $table->string('district');
            $table->string('city');
            $table->string('vsm')->nullable()->comment('village/sector/mohalla');;
            $table->string('house_no')->nullable();
            $table->string('area_location')->nullable();
            $table->string('pin_code');
            $table->tinyInteger('is_current');
            $table->integer('created_by');
            $table->integer('updated_by');
            $table->softDeletes();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_addresses');
    }
};
