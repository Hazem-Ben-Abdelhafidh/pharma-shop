<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use App\Models\Product;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Product::factory(15)->create();



        $image=['https://images.unsplash.com/photo-1603775020644-eb8decd79994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        'https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        'https://images.unsplash.com/photo-1601582037073-b36af0b8ea81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'];

        $description=['Discover the best products for Parapharmacy of your face on our online store: Moisturizing Cream, Anti-aging, Make-up, Face Mask, Corrector ... We have selected for you a wide choice of care items for the different types of skin (sensitive skin, atopic skin, oily skin, dry skin, etc.)',
                       'Discover the best hair care products. We offer a wide choice of Shampoos, Conditioners, masks and styling products, Anti-hair loss care, Hair care .. We offer a selection of selective brands such as Phyto, René Furterer, Klorane, Bioxsine, phytéal .. .' ,
                       'At the heart of our daily concerns, we must take good care of our health and avoid stress and unhealthy diet. Take care of you and offer you food supplements and dietetic care for major brands: vitabiotics, adrien wonon, vitonic
                       Think natural, think Pharma-shop!'];

        $Face=Category::create([
            'name'=> 'Face',
            'image'=> $image[0],
            'description'=> $description[0],
        ]);

        $Hair=Category::create([
            'name'=> 'Hair',
            'image'=> $image[1],
            'description'=> $description[1],
        ]);

        $Face=Category::create([
            'name'=> 'Food Supplements',
            'image'=> $image[2],
            'description'=> $description[2],
        ]);
    }
}
