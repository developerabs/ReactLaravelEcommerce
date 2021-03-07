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
}
