import { ReactElement } from "react";

export { default } from './Backdrop';

export interface IBackdropProps{
    component?:any; 
    children?:ReactElement|any; 
    center?:boolean;//表示元素是否居中
    visible:boolean;//表示是否隐藏
    prefixCls?:string;//类名前缀
    componentName?:string;//组件名称
    transparent?:boolean;//是否透明
    onClick?:any;//点击背景板
}
 