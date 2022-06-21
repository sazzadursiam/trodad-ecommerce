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
        'subCategoryId',
        'image',
        'shortDescription',
        'description',
    ];

    public function ProductAttrs()
    {
        return $this->hasMany(ProductAttr::class, 'productId');
    }

    public function ProductCategory()
    {
        return $this->belongsTo(Category::class, 'categoryId');
    }
    public function ProductSubCategory()
    {
        return $this->belongsTo(Category::class, 'subCategoryId');
    }

    public function ProductBrand()
    {
        return $this->belongsTo(Brand::class, 'brandId');
    }
    public function ordersdetails()
    {
        return $this->belongsToMany(OrderDetails::class);
    }
}
