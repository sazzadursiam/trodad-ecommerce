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
        Schema::create('product_attrs', function (Blueprint $table) {
            $table->id();
            $table->integer('productId');
            $table->string('sku')->unique();
            $table->integer('quantity')->nullable();
            $table->integer('packSize');
            $table->double('unitPrice');
            $table->double('price');
            $table->double('oldPrice');
            $table->string('flagText')->nullable();
            $table->tinyInteger('isNew')->default(0);
            $table->tinyInteger('isNewPrice')->default(0);
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
        Schema::dropIfExists('product_attrs');
    }
};
