import{U as i}from"./UserInput.2939a133.js";import{m as c,n as u}from"./app.52e9742a.js";const l="ontouchend"in document,h={bind:function(t,s){let a=500,e=s.value;if($A.isJson(s.value)&&(a=s.value.delay||500,e=s.value.callback),typeof e!="function")throw"callback must be a function";if(t.__longpressContextmenu__=r=>{r.preventDefault(),r.stopPropagation(),e(r,t)},t.addEventListener("contextmenu",t.__longpressContextmenu__),!l)return;let n=null,o=!1;t.__longpressStart__=r=>{r.type==="click"&&r.button!==0||(o=!1,n===null&&(n=setTimeout(()=>{o=!0,e(r.touches[0],t)},a)))},t.__longpressCancel__=r=>{n!==null&&(clearTimeout(n),n=null)},t.__longpressClick__=r=>{o&&(r.preventDefault(),r.stopPropagation()),t.__longpressCancel__(r)},t.addEventListener("touchstart",t.__longpressStart__),t.addEventListener("click",t.__longpressClick__),t.addEventListener("touchmove",t.__longpressCancel__),t.addEventListener("touchend",t.__longpressCancel__),t.addEventListener("touchcancel",t.__longpressCancel__)},unbind(t){t.removeEventListener("contextmenu",t.__longpressContextmenu__),delete t.__longpressContextmenu__,l&&(t.removeEventListener("touchstart",t.__longpressStart__),t.removeEventListener("click",t.__longpressClick__),t.removeEventListener("touchmove",t.__longpressCancel__),t.removeEventListener("touchend",t.__longpressCancel__),t.removeEventListener("touchcancel",t.__longpressCancel__),delete t.__longpressStart__,delete t.__longpressClick__,delete t.__longpressCancel__)}};var p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Form",{ref:"forwardForm",attrs:{model:t.value,"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{prop:"dialogids",label:t.$L("\u6700\u8FD1\u804A\u5929")}},[a("Select",{staticClass:"dialog-wrapper-dialogids",attrs:{placeholder:t.$L("\u9009\u62E9\u8F6C\u53D1\u6700\u8FD1\u804A\u5929"),"multiple-max":20,multiple:"",filterable:"","transfer-class-name":"dialog-wrapper-forward"},model:{value:t.value.dialogids,callback:function(e){t.$set(t.value,"dialogids",e)},expression:"value.dialogids"}},[a("div",{staticClass:"forward-drop-prepend",attrs:{slot:"drop-prepend"},slot:"drop-prepend"},[t._v(t._s(t.$L("\u6700\u591A\u53EA\u80FD\u9009\u62E920\u4E2A")))]),t._l(t.dialogList,function(e,n){return a("Option",{key:n,attrs:{value:e.id,"key-value":e.name,label:e.name}},[a("div",{staticClass:"forward-option"},[a("div",{staticClass:"forward-avatar"},[e.type=="group"?[e.group_type=="department"?a("i",{staticClass:"taskfont icon-avatar department"},[t._v("\uE75C")]):e.group_type=="project"?a("i",{staticClass:"taskfont icon-avatar project"},[t._v("\uE6F9")]):e.group_type=="task"?a("i",{staticClass:"taskfont icon-avatar task"},[t._v("\uE6F4")]):a("Icon",{staticClass:"icon-avatar",attrs:{type:"ios-people"}})]:e.dialog_user?a("div",{staticClass:"user-avatar"},[a("UserAvatar",{attrs:{userid:e.dialog_user.userid,size:26}})],1):a("Icon",{staticClass:"icon-avatar",attrs:{type:"md-person"}})],2),a("div",{staticClass:"forward-name"},[t._v(t._s(e.name))])])])})],2)],1),a("FormItem",{attrs:{prop:"userids",label:t.$L("\u6307\u5B9A\u6210\u5458")}},[a("UserInput",{attrs:{"multiple-max":20,placeholder:`(${t.$L("\u6216")}) ${t.$L("\u9009\u62E9\u8F6C\u53D1\u6307\u5B9A\u6210\u5458")}`},model:{value:t.value.userids,callback:function(e){t.$set(t.value,"userids",e)},expression:"value.userids"}})],1)],1)},d=[];const v={name:"DialogSelect",components:{UserInput:i},props:{value:{type:Object,default:()=>({})}},computed:{...c(["cacheDialogs"]),dialogList(){return this.cacheDialogs.filter(t=>!(t.name===void 0||t.dialog_delete===1)).sort((t,s)=>t.top_at||s.top_at?$A.Date(s.top_at)-$A.Date(t.top_at):t.todo_num>0||s.todo_num>0?s.todo_num-t.todo_num:$A.Date(s.last_at)-$A.Date(t.last_at))}}},_={};var m=u(v,p,d,!1,f,null,null,null);function f(t){for(let s in _)this[s]=_[s]}var L=function(){return m.exports}();export{L as D,h as l};
