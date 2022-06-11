<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('brandName', 255);
            $table->string('slug', 255);
            $table->string('brandImage', 255)->nullable();
            $table->longText('shortDesc')->nullable();
            $table->tinyInteger('status')->default(1)->comment('0: Not showin, 1: showing in brands page and menu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brands');
    }
};
