<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JournalPost extends Model
{
    use HasFactory;
    public function journalCategories()
    {
        return $this->belongsTo(JournalCategory::class, 'categoryId');
    }
}
