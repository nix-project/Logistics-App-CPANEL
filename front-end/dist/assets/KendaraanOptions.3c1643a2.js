import{b as l,c as d,d as i,a as u}from"./vendor.398990a8.js";import{S as c}from"./react-select.esm.7f4a8503.js";import{r as f}from"./user-action.bb4c92f9.js";import{r as p}from"./kendaraan-action.0f762952.js";const k=({onChange:r=null,value:m=null,disabled:s=!1,clearable:n=!0})=>{const t=l(),o=d(e=>e.users.list).filter(e=>(e==null?void 0:e.role)==="driver").map(e=>({value:e.id,label:e.fullName})),a=e=>{r({target:{name:"driver",value:e.value}})};return i.exports.useEffect(()=>{t(f())},[]),u(c,{onChange:a,type:"text",id:"driver",name:"driver",className:"mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",placeholder:"Choose Driver",options:o,isDisabled:s,isClearable:n,defaultValue:!0})},x=({onChange:r=null,value:m=null,disabled:s=!1})=>{const n=l(),t=d(a=>a.kendaraans.list).map(a=>({value:a.id,label:a.kendaraan})),o=a=>{r({target:{name:"kendaraan",value:a.value}})};return i.exports.useEffect(()=>{n(p())},[]),u(c,{onChange:o,type:"text",id:"kendaraan",name:"kendaraan",className:"mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",placeholder:"Choose Kendaraan",options:t,isDisabled:s})};export{k as D,x as K};
