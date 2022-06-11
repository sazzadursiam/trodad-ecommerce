<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'shortDesc',
        'parrentCatId',
        'status',
    ];
    public function subCategory()
    {
        return $this->hasMany(Category::class, 'parrentCatId');
    }
    public function parentCategory()
    {
        return $this->belongsTo(Category::class, 'parrentCatId');
    }
}
