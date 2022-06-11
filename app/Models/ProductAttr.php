<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttr extends Model
{
    use HasFactory;
    protected $fillable = [
        'productId',
        'sku',
        'quantity',
        'packSize',
        'unitPrice',
        'price',
        'oldPrice',
        'flagText',
        'isNew',
        'isNewPrice',
    ];

    // public function product()
    // {
    //     return $this->belongsTo(Product::class, 'productId');
    // }
}
