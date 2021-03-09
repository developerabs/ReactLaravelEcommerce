<?php

namespace App\Http\Controllers;
use App\Models\ProductListModel;

use Illuminate\Http\Request;

class ProductListController extends Controller
{
    public function ProductListByRemark(Request $request)
    {
        $remark = $request->remark;
        $ProductList = ProductListModel::Where('remark',$remark)->get();
        return $ProductList;
    }
    public function ProductListByCategory(Request $request)
    {
       $Category = $request->Category;
       $ProductList = ProductListModel::Where('category',$Category)->get();
       return $ProductList;
    }
    public function ProductListBySubCategory(Request $request)
    {
       $Category = $request->Category;
       $SubCategory = $request->SubCategory;
       $ProductList = ProductListModel::Where('category',$Category)->Where('category',$Category)->get();
       return $ProductList;
    }
}
