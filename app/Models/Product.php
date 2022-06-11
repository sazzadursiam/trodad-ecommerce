<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'brandId',
        'categoryId',
        'image',
        'shortDescription',
        'description',
    ];

    public function ProductAttrs()
    {
        return $this->hasMany(ProductAttr::class, 'productId');
    }
}
