import{d as e,c as t,a as n,T as l,t as a,F as i,r as o,b as s,w as d,v as r,e as h,p,f as u,g as c,o as m,h as y,i as v}from"./vendor.f339b24e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const s=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),a(d)},onload(){n(self[t].moduleMap[o]),a(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");var g={isLeapYear:e=>(e>1342?[1,5,9,13,17,22,26,30]:[1,5,9,13,17,21,26,30]).includes(e%33),getLastDayOfMonth({year:e,month:t}){const n=e;return t>=1&&t<=6?31:t>=7&&t<12||this.isLeapYear(n)?30:29},getGregorian(e){let t=e.year;const n=e.month,l=e.date;let a;t>979?(a=1600,t-=979):a=621;let i=365*t+8*parseInt(t/33)+parseInt((t%33+3)/4)+78+l+(n<7?31*(n-1):30*(n-7)+186);a+=400*parseInt(i/146097),i%=146097,i>36524&&(a+=100*parseInt(--i/36524),i%=36524,i>=365&&i++),a+=4*parseInt(i/1461),i%=1461,i>365&&(a+=parseInt((i-1)/365),i=(i-1)%365);let o=i+1;const s=[0,31,a%4==0&&a%100!=0||a%400==0?29:28,31,30,31,30,31,31,30,31,30,31];let d;for(d=0;d<13;d++){const e=s[d];if(o<=e)break;o-=e}const r=new Date(a,d-1,o,1,0,0,0);return{gregorian:r,weekday:[1,2,3,4,5,6,0][r.getDay()]}},getJalali(e){let t=e.getFullYear();const n=e.getMonth()+1,l=e.getDate();let a;t>1600?(a=979,t-=1600):(a=0,t-=621);const i=n>2?t+1:t;let o=365*t+parseInt((i+3)/4)-parseInt((i+99)/100)+parseInt((i+399)/400)-80+l+[0,31,59,90,120,151,181,212,243,273,304,334][n-1];a+=33*parseInt(o/12053),o%=12053,a+=4*parseInt(o/1461),o%=1461,o>365&&(a+=parseInt((o-1)/365),o=(o-1)%365);const s=o<186?1+parseInt(o/31):7+parseInt((o-186)/30),d=1+(o<186?o%31:(o-186)%30);e=new Date;const r={};return r.year=a,r.month=s,r.date=d,r.gDate=e,r},now(){return this.getJalali(new Date)},nextMonth({year:e,month:t}){const n=t%12+1;return{year:parseInt(t/12)+e,month:n}},prevMonth:({year:e,month:t})=>({year:e+(1===t?-1:0),month:(12+(t-2)%12)%12+1}),getMeta(e){e.date=1;const t=this.nextMonth({year:e.year,month:e.month});t.date=1;const n=this.getGregorian(t),l=(this.getGregorian(e).weekday+6)%7,a=(n.weekday+6)%7;return{currLD:this.getLastDayOfMonth(e),prevLWD:l,prevLD:this.getLastDayOfMonth(this.prevMonth(e)),currLWD:a}}};const M=e({props:{date:{type:Object},lang:{type:String},type:{type:String},debugSelector:{type:Boolean,default:!1},colorTheme:{type:String},preSelectedModel:{type:Object},holidayMap:{type:Object},disabledMap:{type:Object},events:{type:Array},forwardLimit:{type:Object},backwardLimit:{type:Object},selectable:{type:Object}},setup:(e,t)=>({dmHandle:e=>{t.emit("datemodel",e),t.emit("update:modelValue",e)},toolkit:g}),data:()=>({toolkit:{},inpday:null,Settings:{Jalali:{monthNames:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],WD:["ش","ی","د","س","چ","پ","ج"],setup:[0,1,2,3,4,5,6],persianNumeric:["٠","۱","۲","۳","۴","۵","۶","۷","۸","۹"]},Greg:{WD:["Su","Mo","Tu","We","Th","Fr","Sa"],setup:[0,1,2,3,4,5,6]}},prevMap:[1,2,3,4,5,6,0],nextMap:[6,5,4,3,2,1,0],month:{},inputType:null,dateModel:{},selectedDateModel:{},selectedDateMap:{},eventsMap:{},isSelectableMap:{},animationIn:"",animationDirection:"",changeKey:.1,dateselected:{}}),computed:{theme(){const e={Bg400:"dp-bg-yellow-400",Text500:"dp-text-yellow-500",Ring400:"dp-ring-yellow-400",DCHover:"days-curr-yellow"};let t=e;return"yellow"!==this.colorTheme&&"Yellow"!==this.colorTheme||(t=e),"pink"!==this.colorTheme&&"Pink"!==this.colorTheme||(t={Bg400:"dp-bg-pink-400",Text500:"dp-text-pink-500",Ring400:"dp-ring-pink-400",DCHover:"days-curr-pink"}),t},now(){if("Jalali"===this.locale)return this.toolkit.now();{const e=new Date;return{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}}},prevCounter(){return this.prevMap[(this.thisMonth.prev.LWDM-this.thisMonth.settings[0]+7)%7]},nextCounter(){return this.nextMap[(this.thisMonth.current.LWDM-this.thisMonth.settings[0]+7)%7]},thisMonth(){let e,t,n,l;if("Jalali"===this.locale){const e=this.toolkit.getMeta(this.month);l={prev:{LD:e.prevLD,LWDM:e.prevLWD},current:{month:this.month.month,monthSTD:this.month.month,LD:e.currLD,LWDM:e.currLWD,year:this.month.year,monthName:this.Settings.Jalali.monthNames[this.month.month-1]},settings:this.Settings[this.locale].setup}}else e=this.month,t=new Date(e.year,e.month+1,0),n=new Date(e.year,e.month,0),l={prev:{LD:n.getDate(),LWDM:n.getDay()},current:{month:t.getMonth(),monthSTD:t.getMonth()+1,LD:t.getDate(),LWDM:t.getDay(),year:t.getFullYear(),monthName:t.toLocaleString("default",{month:"long"})},settings:this.Settings[this.locale].setup};return l},locale(){return"Jalali"===this.lang?"Jalali":"Greg"}},watch:{dateModel(){this.dmHandle(this.dateModel)},dateselected(){this.handleDateSelected(this.dateselected)},month(){this.changeKey=Math.random()}},created(){this.month=this.now},mounted(){var e;this.month=this.now,this.inputType=(null==(e=this.preSelectedModel)?void 0:e.type)||this.type||"single",this.dateModel=this.preSelectedModel||{},this.calcSelected(),this.calcMapEvents(),this.calcMapSelectable()},methods:{dPickHandle(e){this.inpday=parseInt(e.target.textContent)},NextMonth(){this.animationDirection="Jalali"===this.locale?"direction-prev":"direction-next",this.month=this.toolkit.nextMonth(this.month)},PrevMonth(){this.animationDirection="Jalali"===this.locale?"direction-next":"direction-prev",this.month=this.toolkit.prevMonth(this.month)},normalizeDate:e=>({year:Number.parseInt(null==e?void 0:e.year),month:Number.parseInt(null==e?void 0:e.month),date:Number.parseInt(null==e?void 0:e.date)}),handleDateSelected(e){var t,n,l,a,i,o;const s=this.normalizeDate(e);if(null==(l=null==(n=null==(t=this.selectedDateMap)?void 0:t[null==s?void 0:s.year])?void 0:n[null==s?void 0:s.month])?void 0:l[null==s?void 0:s.date]){const t=this.dateModel.dates.filter((t=>!((null==(t=this.normalizeDate(t))?void 0:t.year)===(null==s?void 0:s.year)&&(null==t?void 0:t.month)===(null==s?void 0:s.month)&&(null==t?void 0:t.date)===(null==s?void 0:s.date))||e.all));this.dateModel.dates=t}else switch(this.inputType){case"single":this.dateModel={type:"single",dates:[s]};break;case"range":this.dateModel&&(this.dateModel.type="range"),1===(null==(i=null==(a=this.dateModel)?void 0:a.dates)?void 0:i.length)?this.dateModel.dates.push(s):this.dateModel.dates=[s];break;case"multiple":this.dateModel.dates||(this.dateModel={type:"multiple",dates:[]}),(null==(o=this.dateModel)?void 0:o.dates)&&this.dateModel.dates.push(s)}this.calcSelected()},isHoliday(e){var t,n,l;const a=this.thisMonth;return!!(null==(l=null==(n=null==(t=this.holidayMap)?void 0:t[a.current.year])?void 0:n[a.current.monthSTD])?void 0:l[e])||(a.prev.LWDM+e+1)%7==0&&"Jalali"===this.locale},calcSelected(){var e,t,n;const l=this.dateModel;if(null==l?void 0:l.dates){const a={};for(let i=0;i<l.dates.length;i++){const o=l.dates[i].year,s=l.dates[i].month,d=l.dates[i].date;a[o]||(a[o]={}),(null==(e=a[o])?void 0:e[s])||(a[o][s]={}),(null==(n=null==(t=a.year)?void 0:t.month)?void 0:n.date)||(a[o][s][d]=!0)}this.selectedDateMap=a}},calcMapEvents(){var e,t,n;const l=this.events;if(l){const a={};for(let i=0;i<l.length;i++){const o=l[i].year,s=l[i].month,d=l[i].date,r=l[i].count,h=l[i].color;a[o]||(a[o]={}),(null==(e=a[o])?void 0:e[s])||(a[o][s]={}),(null==(n=null==(t=a.year)?void 0:t.month)?void 0:n.date)||(a[o][s][d]={}),a[o][s][d]={count:r,color:h}}this.eventsMap=a}},calcMapSelectable(){var e,t,n,l,a,i,o;const s=this.selectable;if(s){const d={};for(let r=0;r<(null==(e=s.dates)?void 0:e.length);r++){const e=null==(t=s.dates)?void 0:t[r].year,h=null==(n=s.dates)?void 0:n[r].month,p=null==(l=s.dates)?void 0:l[r].date;d[e]||(d[e]={}),(null==(a=d[e])?void 0:a[h])||(d[e][h]={}),(null==(o=null==(i=d.year)?void 0:i.month)?void 0:o.date)||(d[e][h][p]=!0)}this.isSelectableMap=d}},isSelectable(e){var t,n,l,a;const i=this.thisMonth;return"multiple"!==(null==(t=this.selectable)?void 0:t.type)||!!(null==(a=null==(l=null==(n=this.isSelectableMap)?void 0:n[i.current.year])?void 0:l[i.current.monthSTD])?void 0:a[e])},isEvent(e){var t,n,l;const a=this.thisMonth;return!!(null==(l=null==(n=null==(t=this.eventsMap)?void 0:t[a.current.year])?void 0:n[a.current.monthSTD])?void 0:l[e])},isSelected(e){var t,n,l;const a=this.thisMonth;return!!(null==(l=null==(n=null==(t=this.selectedDateMap)?void 0:t[a.current.year])?void 0:n[a.current.monthSTD])?void 0:l[e])},isDisabled(e){var t,n,l;const a=this.thisMonth;return!!(null==(l=null==(n=null==(t=this.disabledMap)?void 0:t[a.current.year])?void 0:n[a.current.monthSTD])?void 0:l[e])},isInrange(e){var t,n,l,a,i,o;if("range"===(null==(t=this.dateModel)?void 0:t.type)&&2===(null==(n=this.dateModel)?void 0:n.dates.length)){const t=this.thisMonth,n=new Date(t.current.year,t.current.monthSTD,e),s=this.normalizeDate(null==(a=null==(l=this.dateModel)?void 0:l.dates)?void 0:a[0]),d=this.normalizeDate(null==(o=null==(i=this.dateModel)?void 0:i.dates)?void 0:o[1]);let r=new Date(s.year,s.month,s.date),h=new Date(d.year,d.month,d.date);if(h<r){const e=r;r=h,h=e}return{value:r<n&&n<h,isFirstDay:+r==+n,isLastDay:+h==+n}}return{value:!1,isFirstDay:!1,isLastDay:!1}},inp(e){this.inpday=parseInt(e.target.value);const t=this.inpday?this.inpday:1,n=this.thisMonth.current.monthSTD;return this.dateselected={year:this.thisMonth.current.year,month:n,date:t},this.thisMonth.current.year+"/"+n+"/"+t},handleInputtypeChange(){this.dateModel={type:this.inputType,dates:[]},this.calcSelected()},getEventCount(e){var t,n,l,a;const i=this.thisMonth;return null==(a=null==(l=null==(n=null==(t=this.eventsMap)?void 0:t[i.current.year])?void 0:n[i.current.monthSTD])?void 0:l[e])?void 0:a.count},getEventColor(e){var t,n,l,a;const i=this.thisMonth;return null==(a=null==(l=null==(n=null==(t=this.eventsMap)?void 0:t[i.current.year])?void 0:n[i.current.monthSTD])?void 0:l[e])?void 0:a.color},getPersianNumeric(e){let t="";if("number"==typeof e){const n=this.Settings.Jalali.persianNumeric;t=e.toString();for(let e=0;e<t.length;e++){let l=Number.parseInt(t[e]);l=n[l],t=t.slice(0,e)+l+t.slice(e+1)}}return t},addMonth(){for(let e=1;e<=this.thisMonth.current.LD;e++)this.isSelectable(e)&&this.handleDateSelected({year:this.month.year,month:this.thisMonth.current.monthSTD,date:e,all:!0})},gotoToday(){this.month=this.now},isForwardLimit(){const e=this.forwardLimit,t=this.toolkit.nextMonth(this.month);if(e){if(t.year>e.year)return!1;if(t.year===e.year&&t.month>e.month)return!1}return!0},isBackwardLimit(){const e=this.backwardLimit,t=this.toolkit.prevMonth(this.month);if(e){if(t.year<e.year)return!1;if(t.year===e.year&&t.month<e.month)return!1}return!0},isToday(e){const t=new Date,n=this.toolkit.getJalali(t);return n.year===this.thisMonth.current.year&&n.month===this.thisMonth.current.monthSTD&&n.date===e||t.getFullYear()===this.thisMonth.current.year&&t.getMonth()+1===this.thisMonth.current.monthSTD&&t.getDate()===e}}}),D=h();p("data-v-6bbb7a6e");const f={class:"datepicker"},w=n("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),b=n("path",{class:"fill-current dp-text-white",d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"},null,-1),x={class:"dp-h-full dp-w-auto flex justify-center"},L={class:"dp-text-norm items-center flex dp-text-gray-800 dp-text-sm dp-font-bold"},S=n("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),k=n("path",{class:"fill-current dp-text-white",d:"M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"},null,-1),T={class:"inrow dp-py-2 dp-border-b dp-border-dashed"},I={class:"dp-sii"},C={class:"flex flex-wrap dp-my-3 dp-mx-3"},J={key:0,class:"flex w-full dp-rounded dp-my-3 dp-bg-white dp-p-3 flex justify-around"},j=u(" single "),N=u(" multiple "),B=u(" range ");c();const F=D(((e,h,p,u,c,y)=>(m(),t("div",{class:"wraper",onDateselected:h[12]||(h[12]=(...t)=>e.handleDateSelected&&e.handleDateSelected(...t))},[n("div",f,[n("div",{dir:"Jalali"===e.locale?"rtl":"ltr",class:["dp-header",[(e.locale,""),e.animationDirection]]},[n("button",{class:["dp-bg-white dp-rounded-md dp-text-white dp-w-6 dp-h-6 justify-center flex dp-focus:outline-none",[e.isBackwardLimit()?e.theme.Bg400:"dp-bg-gray-400"]],"v-show":e.isBackwardLimit(),disabled:!e.isBackwardLimit(),onClick:h[1]||(h[1]=(...t)=>e.PrevMonth&&e.PrevMonth(...t))},[(m(),t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:["dp-h-full dp-w-5 dp-text-sm dp-pointer-events-none",{flipH:"Jalali"===e.locale}]},[w,b],2))],10,["v-show","disabled"]),n(l,{name:"fade"},{default:D((()=>[(m(),t("div",{key:e.changeKey,class:"dp-absolute dp-top-1/3 dp-left-1/2 dp--translate-x-1/2 dp-transform"},[n("div",x,[n("span",L,a(e.thisMonth.current.monthName)+" "+a("Jalali"===e.locale?e.getPersianNumeric(e.thisMonth.current.year):e.thisMonth.current.year),1)])]))])),_:1}),n("button",{class:["dp-bg-white dp-rounded-md dp-text-white dp-w-6 dp-h-6 justify-center flex dp-focus:outline-none",[e.isForwardLimit()?e.theme.Bg400:"dp-bg-gray-400"]],"v-show":e.isForwardLimit(),disabled:!e.isForwardLimit(),onClick:h[2]||(h[2]=(...t)=>e.NextMonth&&e.NextMonth(...t))},[(m(),t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:["dp-h-full dp-w-5 dp-text-sm dp-pointer-events-none dp-focus:outline-none",{flipH:"Jalali"===e.locale}]},[S,k],2))],10,["v-show","disabled"])],10,["dir"]),n("div",{class:["calander",{rtl:"Jalali"===e.locale}]},[n("div",T,[(m(!0),t(i,null,o(e.Settings[e.locale].WD,(n=>(m(),t("div",{key:n,class:"days dp-text-base dp-font-medium "+e.theme.Text500},a(n),3)))),128))]),n("div",{class:["dp-main",e.animationDirection]},[n(l,{name:"slideX",class:e.animationDirection},{default:D((()=>[(m(),t("div",{key:e.changeKey,class:"inrow dp-main-inner"},[(m(!0),t(i,null,o(e.prevCounter,(n=>(m(),t("div",{key:n+"prev",class:"dp-text-gray-300 days dp-font-bold dp-h-8",style:{}},a("Jalali"===e.locale?e.getPersianNumeric(e.thisMonth.prev.LD-e.prevCounter+n):e.thisMonth.prev.LD-e.prevCounter+n),1)))),128)),(m(!0),t(i,null,o(e.thisMonth.current.LD,(l=>(m(),t("button",{key:l+"c",class:["days dp-bt-m dp-font-medium dp-h-8 cursor-pointer group dp-relative",[e.isHoliday(l)?"dp-text-red-400":"",e.isDisabled(l)||!e.isSelectable(l)?"dp-text-gray-300":"dp-text-gray-900 "+e.theme.DCHover]],style:{},disabled:e.isDisabled(l)||!e.isSelectable(l),value:l,onClick:h[3]||(h[3]=(...t)=>e.inp&&e.inp(...t))},[n("span",{class:["flex dp-si dp-rounded items-center justify-center group-hover:dp-bg-transparent group-dp-focus:dp-bg-transparent dp-bg-opacity-70 justify-center items-center dp-w-7 dp-h-7 dp-pointer-events-none",[!e.isSelected(l)||e.isInrange(l).isFirstDay||e.isInrange(l).isLastDay?"":"dp-text-white day-selected  "+e.theme.Bg400,e.isInrange(l).value?"dp-w-full dp-text-white not-round "+e.theme.Bg400:"",e.isInrange(l).isFirstDay&&"Jalali"===e.locale?"rounded-r-force dp-w-full dp-text-white "+e.theme.Bg400:"",e.isInrange(l).isLastDay&&"Jalali"===e.locale?"rounded-l-force dp-w-full dp-text-white "+e.theme.Bg400:"",e.isInrange(l).isFirstDay&&"Greg"===e.locale?"rounded-l-force dp-w-full dp-text-white "+e.theme.Bg400:"",e.isInrange(l).isLastDay&&"Greg"===e.locale?"rounded-r-force dp-w-full dp-text-white "+e.theme.Bg400:"",e.isToday(l)&&!e.isSelected(l)?"ring-2 "+e.theme.Ring400:""]],value:l},[n("span",I,a("Jalali"===e.locale?e.getPersianNumeric(l):l),1)],10,["value"]),e.isEvent(l)?(m(),t("div",{key:0,class:["dp-absolute flex justify-center items-center dp-font-mono dp-w-3 dp-h-3 dp-rounded-full dp-left-1/2 dp--bottom-1 text-xxs dp-text-white dp-transform -translate-x-1/2 dp-pointer-events-none",["dp-bg-"+e.getEventColor(l)+"-400"]]},null,2)):s("",!0)],10,["disabled","value"])))),128)),(m(!0),t(i,null,o(e.nextCounter,(n=>(m(),t("div",{key:n+"next",class:"dp-text-gray-300 days dp-font-bold dp-h-8",style:{}},a("Jalali"===e.locale?e.getPersianNumeric(n):n),1)))),128))]))])),_:1},8,["class"])],2),n("div",C,[n("button",{class:"dp-bg-green-400 dp-text-white dp-p-2 dp-rounded-xl dp-font-bold dp-text-sm dp-mx-1 outline-none dp-focus:outline-none",onClick:h[4]||(h[4]=(...t)=>e.gotoToday&&e.gotoToday(...t))},a("Jalali"===e.locale?"امروز":"Today"),1),"multiple"===e.dateModel.type?(m(),t("button",{key:0,class:"dp-bg-red-400 dp-text-white dp-p-2 dp-rounded-xl dp-font-bold dp-text-sm dp-mx-1 outline-none dp-focus:outline-none",onClick:h[5]||(h[5]=(...t)=>e.addMonth&&e.addMonth(...t))},a("Jalali"===e.locale?"انتخاب ماه":"select This Month"),1)):s("",!0)])],2)]),e.debugSelector?(m(),t("div",J,[n("label",null,[d(n("input",{id:"single","onUpdate:modelValue":h[6]||(h[6]=t=>e.inputType=t),class:"m-2",type:"radio",name:"selectortype"+e.lang,value:"single",onChange:h[7]||(h[7]=(...t)=>e.handleInputtypeChange&&e.handleInputtypeChange(...t))},null,40,["name"]),[[r,e.inputType]]),j]),n("label",null,[d(n("input",{id:"multiple","onUpdate:modelValue":h[8]||(h[8]=t=>e.inputType=t),class:"m-2",type:"radio",name:"selectortype"+e.lang,value:"multiple",onChange:h[9]||(h[9]=(...t)=>e.handleInputtypeChange&&e.handleInputtypeChange(...t))},null,40,["name"]),[[r,e.inputType]]),N]),n("label",null,[d(n("input",{id:"range","onUpdate:modelValue":h[10]||(h[10]=t=>e.inputType=t),class:"m-2",type:"radio",name:"selectortype"+e.lang,value:"range",onChange:h[11]||(h[11]=(...t)=>e.handleInputtypeChange&&e.handleInputtypeChange(...t))},null,40,["name"]),[[r,e.inputType]]),B])])):s("",!0)],32))));M.render=F,M.__scopeId="data-v-6bbb7a6e";p("data-v-11d2d714");const H={id:"app"},W={class:"mx-4"},O={class:"container"},P={class:"mx-4"},U={class:"container"};c();const V={expose:[],setup(e){const l=y({}),a=y({}),i=e=>{console.log(e)},o=e=>{console.log(e)};return(e,s)=>(m(),t("div",H,[n("div",W,[n("div",O,[n(M,{lang:"Greg",type:"single",colorTheme:"pink",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a.value=e),onDatemodel:o,"debug-selector":!0},null,8,["modelValue"])])]),n("div",P,[n("div",U,[n(M,{lang:"Jalali",type:"single",colorTheme:"yellow",modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=e=>l.value=e),onDatemodel:i,"debug-selector":!0},null,8,["modelValue"])])])]))},__scopeId:"data-v-11d2d714"};v(V).mount("#app");
