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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('customerId');
            $table->string('name', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('country', 255)->nullable();
            $table->string('streetAddress', 255)->nullable();
            $table->string('apartmentAddress', 255)->nullable();
            $table->string('city', 255)->nullable();
            $table->string('district', 255)->nullable();
            $table->string('postCode', 255)->nullable();
            $table->string('phone', 255)->nullable();
            $table->integer('orderStatus')->default(0)->comment('0: Placed');
            $table->string('paymentType', 100)->nullable();
            $table->string('paymentStatus', 100)->nullable();
            $table->double('totalAmount')->default(0);
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
        Schema::dropIfExists('orders');
    }
};
