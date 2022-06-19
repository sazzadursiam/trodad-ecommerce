<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddToCart extends Model
{
    use HasFactory;
    public function Products()
    {
        return $this->belongsTo(Product::class, 'productId');
    }
}
