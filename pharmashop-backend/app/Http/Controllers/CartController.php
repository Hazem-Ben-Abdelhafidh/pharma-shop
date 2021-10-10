<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function store()
    {
        $attributes = request()->validate([
            'user_id' => 'required',
            'product_id' => 'required',
        ]);
        $boughtProduct = Cart::create($attributes);
        return $boughtProduct;
    }
    public function getProducts($id)
    {
        $products = DB::table('carts')
        ->join('products', 'carts.product_id', '=', 'products.id')
        ->where('carts.user_id', $id)
        ->select('products.*')
        ->get();
        return $products;
    }
    public function delete($id){
        $result= Cart::where('id',$id)->delete();
        if($result){
            return 'yeees';
        }
    }
}
