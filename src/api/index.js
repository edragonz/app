//当前这个模块：API进行统一管理
import requests from './requests'
import mockRequests from './mockAjax'
//三级联动接口
// /api/product/getBaseCategoryList  get  无参数


export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqBannerList = ()=>mockRequests.get('/banner');
export const reqFloorList =()=>mockRequests.get('/floor')


export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})
