(this["webpackJsonpform-web-ferias"]=this["webpackJsonpform-web-ferias"]||[]).push([[0],{181:function(e,a,t){},257:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(43),r=t.n(o),c=(t(181),t(6)),s=t(262),d=t(258),l=t(259),u=t(168),j=t(133),b=(t(92),t(7));function m(){var e=Object(n.useState)([{name:"fullname",value:""},{name:"registry",value:""},{name:"subsidiary",value:""},{name:"office",value:""},{name:"boss",value:""},{name:"who",value:""}]),a=Object(c.a)(e,2),t=a[0],i=(a[1],s.a.useForm()),o=Object(c.a)(i,1)[0];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Identifica\xe7\xe3o do Solicitante"}),Object(b.jsxs)(s.a,{name:"formIdentify",labelCol:{span:10},wrapperCol:{span:12},labelAlign:"left",fields:t,form:o,onFieldsChange:function(e,a){},children:[Object(b.jsxs)(d.a,{gutter:50,children:[Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:"fullname",label:"Nome Solicitante",children:Object(b.jsx)(u.a,{})})}),Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:"registry",label:"Matr\xedcula",children:Object(b.jsx)(u.a,{readOnly:!0})})})]}),Object(b.jsxs)(d.a,{gutter:50,children:[Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:"office",label:"Cargo Solicitante",children:Object(b.jsx)(u.a,{readOnly:!0})})}),Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:"subsidiary",label:"Filial",children:Object(b.jsx)(u.a,{readOnly:!0})})})]}),Object(b.jsxs)(d.a,{gutter:50,children:[Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:"boss",label:"Superior Imediato",children:Object(b.jsx)(u.a,{readOnly:!0})})}),Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:"who",label:"Solicita\xe7\xe3o de F\xe9rias",labelAlign:"left",children:Object(b.jsxs)(j.a.Group,{defaultValue:"ownVacation",buttonStyle:"solid",onChange:function(e){o.setFieldsValue({who:e.target.value}),o.submit()},children:[Object(b.jsx)(j.a.Button,{value:"ownVacation",children:"Pr\xf3pria"}),Object(b.jsx)(j.a.Button,{value:"employeeVacation",style:{marginLeft:"20px"},children:"Colaborador"})]})})})]})]})]})})}var h=t(104),y=t(85);function g(){var e=Object(n.useState)([{name:["registryEmployee"],value:""},{name:["positionemployee"],value:""},{name:["subsidiaryEmployee"],value:""},{name:["bossEmployee"],value:""},{name:["custCenter"],value:""}]),a=Object(c.a)(e,2),t=a[0],i=a[1],o=h.a.Option;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Informa\xe7\xf5es do Colaborador"}),Object(b.jsxs)(s.a,{name:"formEmployee",labelCol:{span:10},wrapperCol:{span:12},labelAlign:"left",fields:t,onFieldsChange:function(e,a){i(a)},children:[Object(b.jsxs)(d.a,{gutter:20,children:[Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:["nameEmployee"],label:"Colaborador",rules:[{required:!0},{message:"Obrigat\xf3rio selecionar o colaborador."}],children:Object(b.jsx)(y.a,{title:"Selecione o nome do colaborador",children:Object(b.jsxs)(h.a,{allowClear:!0,showSearch:!0,placeholder:"Selecione Colaborador",optionFilterProp:"children",filterOption:function(e,a){return(null===a||void 0===a?void 0:a.children.toLowerCase().indexOf(e.toLocaleLowerCase()))>=0},children:[Object(b.jsx)(o,{value:"Adriana Concei\xe7\xe3o",children:"Adriana Concei\xe7\xe3o"}),Object(b.jsx)(o,{value:"Roberto Mattos",children:"Roberto Mattos"}),Object(b.jsx)(o,{value:"Maria Eduarda Freitas",children:"Maria Eduarda Freitas"}),Object(b.jsx)(o,{value:"Tadeu Carvalho",children:"Tadeu Carvalho"})]})})})}),Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:["registryEmployee"],label:"Matr\xedcula",children:Object(b.jsx)(u.a,{readOnly:!0})})})]}),Object(b.jsxs)(d.a,{gutter:20,children:[Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:["positionemployee"],label:"Cargo Colaborador",children:Object(b.jsx)(u.a,{readOnly:!0})})}),Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:["subsidiaryEmployee"],label:"Filial",children:Object(b.jsx)(u.a,{readOnly:!0})})})]}),Object(b.jsxs)(d.a,{gutter:20,children:[Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{name:["bossEmployee"],label:"Superior Imediato",children:Object(b.jsx)(u.a,{readOnly:!0})})}),Object(b.jsx)(l.a,{span:12,children:Object(b.jsx)(s.a.Item,{})})]})]})]})})}var f=t(1),v=t(260),O=t(265);function V(){var e=Object(n.useState)([{name:"who",value:""},{name:"tableInfo",value:{}}]),a=Object(c.a)(e,2),t=(a[0],a[1]),i=Object(n.useState)({hasData:!0,rowSelection:void 0}),o=Object(c.a)(i,2),r=o[0],d=(o[1],[{title:"Situa\xe7\xe3o",dataIndex:"status",key:"key"},{title:"Data Inicio",dataIndex:"dateIn",key:"key"},{title:"Data Fim",dataIndex:"dateEnd",key:"key"},{title:"Dias",dataIndex:"day",key:"key"},{title:"13 Sal\xe1rio",dataIndex:"salary13",key:"key"},{title:"abono",dataIndex:"allowence",key:"key"},{title:"Parcelas",dataIndex:"part",key:"key"},{title:"A\xe7\xe3o",key:"action",render:function(e){return"Definido"===e.status||"Aberto"===e.status?Object(b.jsx)("a",{children:Object(b.jsx)(O.a,{})}):Object(b.jsx)("a",{})}}]),l=s.a.useForm(),u=Object(c.a)(l,1)[0];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Informa\xe7\xf5es de F\xe9rias"}),Object(b.jsxs)(s.a,{name:"formInfoVacation",labelAlign:"left",form:u,onFieldsChange:function(e,a){t(a),console.log(a)},children:[Object(b.jsx)(s.a.Item,{name:"tableInfo"}),Object(b.jsx)(v.a,Object(f.a)(Object(f.a)({},r),{},{pagination:!1,dataSource:[{key:1,status:"Definido",dateIn:"",dateEnd:"",day:"30",salary13:"",allowence:"",part:"3",children:[{key:11,part:"1",dateIn:"04/07/2022",dateEnd:"19/07/2022",salary13:"Sim",allowence:"",day:"15"},{key:12,part:"2",dateIn:"01/08/2022",dateEnd:"11/08/2022",day:"10"},{key:13,part:"3",dateIn:"06/09/2022",dateEnd:"11/09/2022",salary13:"",allowence:"Sim",day:"5"}]},{key:1,status:"Aberto",dateIn:"",dateEnd:"",day:"30",salary13:"",allowence:"",part:""}],columns:d,onRow:function(e,a){return{onClick:function(t){return function(e,a){console.log(a),console.log(e),console.log(e.part),u.setFieldsValue({tableInfo:e}),u.submit()}(e,a)}}}}))]})]})})}var x=t(170),p=t(261),w=t(263),D=t(264),F=t(266);function I(e){var a=Object(n.useState)([{name:"periodEnd",value:""},{name:"unexcused",value:""},{name:"vacationDays",value:""},{name:"dateBeginVacation01",value:""},{name:"daysVacation01",value:""},{name:"dateEndVacation01",value:""},{name:"datePgto01",value:""},{name:"dateBeginVacation02",value:""},{name:"daysVacation02",value:""},{name:"dateEndVacation02",value:""},{name:"datePgto02",value:""},{name:"dateBeginVacation03",value:""},{name:"daysVacation03",value:""},{name:"dateEndVacation03",value:""},{name:"datePgto03",value:""},{name:"abono",value:0},{name:"dtsal",value:""}]),t=Object(c.a)(a,2),i=t[0],o=t[1],r=Object(n.useState)({enaRow01:!0,enaRow02:!0}),m=Object(c.a)(r,2),h=m[0],g=m[1],f=Object(n.useState)(0),v=Object(c.a)(f,2),O=(v[0],v[1]),V=s.a.useForm(),I=Object(c.a)(V,1)[0],P=I.getFieldValue("vacationDays"),E="Informar a data de in\xedcio das f\xe9rias. Somente ser\xe1 permitido data de inicio ap\xf3s 60 dias da data de requisi\xe7\xe3o. ",k="Se parcelado, o n\xfamero de dias n\xe3o poder\xe1 ser menor que 5 e uma das parcelas deve ser de 14 dias",B=function(e){x.a.open({message:"Aten\xe7\xe3o Erro no preenchimento",description:e,icon:Object(b.jsx)(F.a,{style:{color:"#FF0000"}}),style:{background:"#bfcff7"},duration:5})},S=function(e,a){var t=new Date(e);return t.setDate(t.getDate()+a),console.log(t.toLocaleDateString("en-GB")),t.toLocaleDateString("en-GB")},C=function(e){var a=new Date(e).getDay(),t=new Date(e),n=1===a?5:2===a?6:3===a?7:4===a?8:5===a?2:6===a?3:0;return t.setDate(t.getDate()-n),console.log(a),t.toLocaleDateString("en-GB")},A=function(e,a,t){var n=I.getFieldValue(e),i=Date.parse(n._d),o=new Date(i),r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=I.getFieldValue(a);if(r.setDate(r.getDate()+parseInt(s)),c<=r){if(c.getMonth()===r.getMonth()&&c.getDate()<r.getDate()){B("Data n\xe3o pode ser inferior ou igual a data da primeira parcela. ")}else if(c.getMonth()<r.getMonth()){B("M\xeas n\xe3o pode ser inferior ao m\xeas da primeira parcela. Favor corrigir.")}return!1}return!0};function M(e,a){if(""===e)return!1;var t=e._d.getDay();if(0===t){B("Dia de inicio da f\xe9rias cai no domingo. Data n\xe3o permitida. Favor corrigir")}else if(6===t){B("Dia de inicio da f\xe9rias cai no s\xe1bado. Data n\xe3o permitida. Favor corrigir")}if(e){var n=new Date(e._d),i=new Date,o=Math.abs(n.getTime()-i.getTime());if(Math.ceil(o/864e5)<60){return B("N\xe3o \xe9 permitido escolher data abaixo de 60 dias ap\xf3s a data de requisi\xe7\xe3o. Por favor verifique o preenchimento"),!1}return"dateBeginVacation02"===a?A("dateBeginVacation01","daysVacation01",n):"dateBeginVacation03"!==a||A("dateBeginVacation02","daysVacation02",n)}}var Y=function(a,t){var n=0,i=I.getFieldValue("daysVacation01"),o=I.getFieldValue("daysVacation02");if(e.set({show01:!0,show02:!0}),"daysVacation01"===t){if(n=P-a,(a>=14||n>=14)&&a<=P-5&&a>=5)return g({enaRow01:!1,enaRow02:!0}),n;(o<5||void 0===o||n<5)&&g({enaRow01:!0,enaRow02:!0})}else"daysVacation02"===t?(n=P-i-a)<5?g({enaRow01:!1,enaRow02:!0}):(a>=14||14===n||a>=5&&a<=P-i-5)&&g({enaRow01:!1,enaRow02:!1}):g({enaRow01:!0,enaRow02:!0});return n};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Sele\xe7\xe3o de F\xe9rias"}),Object(b.jsxs)(s.a,{name:"formVacation",labelAlign:"left",fields:i,form:I,onFieldsChange:function(e,a){o(a),console.log(i)},children:[Object(b.jsx)(l.a,{span:20,children:Object(b.jsxs)(d.a,{justify:"space-around",children:[Object(b.jsx)(s.a.Item,{label:"Fim do Per\xedodo Aquisitivo",name:"periodEnd",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})}),Object(b.jsx)(s.a.Item,{name:"unexcused",label:"Faltas n\xe3o justificadas",rules:[function(e){var a=e.setFieldsValue;return{validator:function(e,t){a(t<=5?{vacationDays:30,daysVacation01:30}:t>5&&t<=14?{vacationDays:24,daysVacation01:24}:t>14&&t<=23?{vacationDays:18,daysVacation01:18}:t>23&&t<=32?{vacationDays:12,daysVacation01:12}:{vacationDays:0,daysVacation01:0})}}}],children:Object(b.jsx)(u.a,{style:{width:"60px"}})}),Object(b.jsx)(s.a.Item,{name:"vacationDays",label:"Dias Aquisitivos de F\xe9rias",labelAlign:"right",children:Object(b.jsx)(u.a,{style:{width:"60px"},readOnly:!0})})]})}),Object(b.jsxs)(d.a,{children:[Object(b.jsxs)(l.a,{span:20,children:[Object(b.jsxs)(d.a,{justify:"space-around",children:[Object(b.jsx)(y.a,{placement:"top",title:E,children:Object(b.jsx)(s.a.Item,{label:"Data In\xedcio",name:"dateBeginVacation01",rules:[{required:!0,message:"Obrigat\xf3rio informar a data de inicio das f\xe9rias."},function(e){var a=e.getFieldValue,t=e.setFieldsValue;return{validator:function(e,n){var i=M(n,"dateBeginVacation01"),o="",r=C(n._d);if(console.log(i),i){var c=a("daysVacation01");return c&&(o=S(Date.parse(n._d),c)),console.log(o),console.log(n._d),t({dateEndVacation01:o,datePgto01:r}),Promise.resolve(t({dateEndVacation01:o,datePgto01:r}))}return Promise.reject(new Error("Data negada. Favor digitar uma data correta"))}}}],children:Object(b.jsx)(p.a,{style:{width:"120px"},allowClear:!0,format:"DD/MM/YYYY"})})}),Object(b.jsx)(y.a,{placement:"top",title:k,children:Object(b.jsx)(s.a.Item,{label:"Qto Dias",name:"daysVacation01",rules:[{required:!0,message:"Favor informar o n\xfamero de dias de f\xe9rias."},function(e){var a=e.getFieldValue,t=e.setFieldsValue,n=e.setFields;return{validator:function(e,i){var o=a("dateBeginVacation01"),r=M(o,"dateBeginVacation01"),c=a("vacationDays");if(0===o.length)return n([{name:"daysVacation01",value:c}]),Promise.reject(new Error("Favor primeiro selecionar a data de inicio das f\xe9rias corretamente."));if(c<19){return B("Numero de dias de f\xe9rias insuficientes para parcelar f\xe9rias. Valor ser\xe1 em cota \xfanica "),t({daysVacation01:c}),Promise.reject(new Error("N\xe3o \xe9 permitido parcelar"))}if(!r)return Promise.reject(new Error("Data est\xe1 invalida. Favor corrigir"));if(i<c&&i>c-2){var s=S(Date.parse(o._d),c-5),d=Y(c-5,"daysVacation01");t({daysVacation01:c-5,dateEndVacation01:s,datePgto01:"",daysVacation02:d,dateEndVacation02:"",dateBeginVacation02:"",datePgto02:"",daysVacation03:"",dateEndVacation03:"",dateBeginVacation03:"",datePgto03:""})}else{if(a("daysVacation02")<6&&a("daysVacation01")>=a("vacationDays")-10&&5===a("daysVacation03"))return console.log("Erro: Se P2 e P3 igual 5 n\xe3o permite que P1 aceite incrementar at\xe9 30 "),Promise.reject(new Error("M\xe1ximo valor permitido"));if(a("daysVacation02")<=5&&a("daysVacation01")>c-6){var l=S(Date.parse(o._d),c);t({daysVacation01:c,dateEndVacation01:l,datePgto01:"",daysVacation02:"",dateEndVacation02:"",dateBeginVacation02:"",datePgto02:""}),Y(i,"daysVacation01")}else{var u=S(Date.parse(o._d),i);if(""===a("dateBeginVacation02")&&""===a("daysVacation02")){var j=Y(i,"daysVacation01");t({dateEndVacation01:u,datePgto01:"",daysVacation02:j,dateEndVacation02:"",dateBeginVacation02:"",datePgto02:"",daysVacation03:"",dateEndVacation03:"",dateBeginVacation03:"",datePgto03:""})}else if(""!==a("daysVacation02")){var b=a("dateBeginVacation02"),m=c-a("daysVacation01")-a("daysVacation03");if(""!==b){var h=S(Date.parse(b._d),i);if(""!==a("daysVacation03")){var y=a("daysVacation03"),g=""!==a("dateBeginVacation03")?a("dateBeginVacation03"):"";if(""!==g){var f=S(Date.parse(g._d),y);t({dateEndVacation01:u,datePgto01:"",daysVacation02:m,dateEndVacation02:h,dateBeginVacation02:b,datePgto02:"",daysVacation03:y,dateEndVacation03:f,dateBeginVacation03:g,datePgto03:""})}else t({dateEndVacation01:u,datePgto01:"",daysVacation02:m,dateEndVacation02:h,dateBeginVacation02:b,datePgto02:"",daysVacation03:y,dateEndVacation03:"",dateBeginVacation03:"",datePgto03:""}),Y(m,"daysVacation02")}else""===a("daysVacation03")&&t({dateEndVacation01:u,datePgto01:"",daysVacation02:m,dateEndVacation02:h,dateBeginVacation02:b,datePgto02:"",daysVacation03:"",dateEndVacation03:"",dateBeginVacation03:"",datePgto03:""})}else{var v=Y(i,"daysVacation01");t({dateEndVacation01:u,datePgto01:"",daysVacation02:v,dateEndVacation02:"",datePgto02:"",dateBeginVacation02:"",daysVacation03:"",dateEndVacation03:"",datePgto03:"",dateBeginVacation03:""})}return Promise.resolve()}}}}}}],children:Object(b.jsx)(w.a,{min:5,max:I.getFieldValue("daysVacation02")<6&&5===I.getFieldValue("daysVacation03")?I.getFieldValue("vacationDays")-I.getFieldValue("daysVacation02")-I.getFieldValue("daysVacation03"):I.getFieldValue("vacationDays"),style:{width:"60px"}})})}),Object(b.jsx)(s.a.Item,{label:"Data Fim",name:"dateEndVacation01",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})}),Object(b.jsx)(s.a.Item,{label:"Data Pgto",name:"datePgto01",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})})]}),Object(b.jsx)("div",{hidden:!(!h.enaRow01||!e.ena.show01),children:Object(b.jsxs)(d.a,{justify:"space-around",children:[Object(b.jsx)(y.a,{placement:"top",title:E,children:Object(b.jsx)(s.a.Item,{label:"Data In\xedcio",name:"dateBeginVacation02",rules:[{required:!0,message:"Obrigat\xf3rio informar a data de inicio das f\xe9rias."},function(e){var a=e.getFieldValue,t=e.setFieldsValue;return{validator:function(e,n){var i=M(n,"dateBeginVacation02"),o="",r=C(n._d);if(a("daysVacation01")<14&&a("daysVacation02")<14&&a("daysVacation03")<14){return B("Uma das parcela tem que maior ou igual a 14 dias. Favor corrigir "),Promise.reject(new Error("Parcelas n\xe3o permitidas"))}if(i){var c=a("daysVacation02");return c&&(o=S(Date.parse(n._d),c)),t({dateEndVacation02:o,datePgto02:r}),Promise.resolve(t({dateEndVacation02:o,datePgto02:r}))}return Promise.reject(new Error("Data negada. Favor digitar uma data correta"))}}}],children:Object(b.jsx)(p.a,{style:{width:"120px"},allowClear:!0,format:"DD/MM/YYYY"})})}),Object(b.jsx)(y.a,{placement:"top",title:k,children:Object(b.jsx)(s.a.Item,{label:"Qto Dias",name:"daysVacation02",rules:[{required:!0,message:"Favor informar o n\xfamero de dias de f\xe9rias."},function(e){var a=e.getFieldValue,t=e.setFieldsValue,n=e.setFields;return{validator:function(e,o){var r=a("dateBeginVacation02"),c=M(r,"dateBeginVacation02"),s=a("vacationDays");if(s<25){return B("Numero de dias de f\xe9rias insuficientes para parcelar as f\xe9rias em 3 vezes. "),t({daysVacation02:s-a("daysVacation01")}),Promise.reject(new Error("N\xe3o \xe9 permitido parcelar"))}if(!r._d)return Promise.reject(new Error("Favor primeiro selecionar a data de inicio das f\xe9rias corretamente."));if(!c)return Promise.reject(new Error("Data est\xe1 invalida. Favor corrigir"));if(o<=s-a("daysVacation01")&&o>=s-a("daysVacation01")-2){var d=S(Date.parse(r._d),o-4);n([{name:"daysVacation02",value:o-4},{name:"dateEndVacation02",value:d},{name:"dateBeginVacation03",value:""},{name:"daysVacation03",value:5},{name:"dateEndVacation03",value:""}]),Y(o-4,"daysVacation02")}else{if(!(a("daysVacation03")<6&&a("daysVacation02")>s-a("daysVacation01")-5)){if(a("daysVacation02")<6&&a("daysVacation03")<6)return Promise.reject();var l=Y(o,"daysVacation02"),u=S(Date.parse(r._d),o);if(""===i[8].value)t({dateEndVacation02:u,datePgto02:"",daysVacation03:l,dateEndVacation03:"",dateBeguinVacation03:"",datePgto03:""});else{var j=S(Date.parse(i[8].value._d),l);t({dateEndVacation02:u,datePgto02:"",daysVacation03:l,dateEndVacation03:j,datePgto03:""})}return Promise.resolve()}var b=a("vacationDays")-a("daysVacation01"),m=S(Date.parse(r._d),b);t({daysVacation02:b,dateEndVacation02:m,datePgto02:"",daysVacation03:"",dateEndVacation03:"",dateBeguinVacation03:"",datePgto03:""}),Y(b,"daysVacation02")}}}}],children:Object(b.jsx)(w.a,{min:5,max:I.getFieldValue("vacationDays")-I.getFieldValue("daysVacation01"),style:{width:"60px"}})})}),Object(b.jsx)(s.a.Item,{label:"Data Fim",name:"dateEndVacation02",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})}),Object(b.jsx)(s.a.Item,{label:"Data Pgto",name:"datePgto02",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})})]})}),Object(b.jsx)("div",{hidden:!(!h.enaRow02||!e.ena.show02),children:Object(b.jsxs)(d.a,{justify:"space-around",children:[Object(b.jsx)(y.a,{placement:"top",title:E,children:Object(b.jsx)(s.a.Item,{label:"Data In\xedcio",name:"dateBeginVacation03",rules:[{required:!0,message:"Obrigat\xf3rio informar a data de inicio das f\xe9rias."},function(e){var a=e.getFieldValue,t=e.setFieldsValue;return{validator:function(e,n){var i=M(n,"dateBeginVacation03"),o="",r=C(n._d);if(a("daysVacation01")<14&&a("daysVacation02")<14&&a("daysVacation03")<14){return B("Uma das parcela tem que maior ou igual a 14 dias. Favor corrigir "),Promise.reject(new Error("Parcelas n\xe3o permitidas"))}if(i){var c=a("daysVacation03");return c&&(o=S(Date.parse(n._d),c)),t({dateEndVacation03:o,datePgto03:r}),Promise.resolve(t({dateEndVacation03:o,datePgto03:r}))}return Promise.reject(new Error("Data negada. Favor digitar uma data correta"))}}}],children:Object(b.jsx)(p.a,{style:{width:"120px"},allowClear:!0,format:"DD/MM/YYYY"})})}),Object(b.jsx)(s.a.Item,{label:"Qto Dias",name:"daysVacation03",children:Object(b.jsx)(w.a,{style:{width:"60px"},readOnly:!0})}),Object(b.jsx)(s.a.Item,{label:"Data Fim",name:"dateEndVacation03",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})}),Object(b.jsx)(s.a.Item,{label:"Data Pgto",name:"datePgto03",children:Object(b.jsx)(u.a,{style:{width:"120px"},readOnly:!0})})]})})]}),Object(b.jsx)(l.a,{span:4,children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(s.a.Item,{name:"abono",style:{marginTop:"-55px"},rules:[function(e){var a=e.getFieldValue,t=e.setFieldsValue;return{validator:function(e,n){if(console.log(n),0!==n){var i=a("vacationDays")/3*2;t({vacationDays:i,daysVacation01:i})}else if(0===n){var o=a("vacationDays")/2*3;t({vacationDays:o,daysVacation01:o})}}}}],children:Object(b.jsx)(j.a.Group,{onChange:function(e){console.log(e),O(e.target.value)},children:Object(b.jsxs)(D.b,{direction:"vertical",size:35,style:{display:"flex",marginTop:"-55px"},children:[Object(b.jsx)(j.a,{value:0,checked:!0,children:"N\xe3o"}),Object(b.jsx)(j.a,{value:1,children:"Abono"}),Object(b.jsx)("div",{hidden:!(!h.enaRow01||!e.ena.show01),children:Object(b.jsx)(j.a,{value:2,children:"Abono"})}),Object(b.jsx)("span",{hidden:!(!h.enaRow02||!e.ena.show02),children:Object(b.jsx)(j.a,{value:3,children:"Abono"})})]})})}),Object(b.jsx)(s.a.Item,{name:"dtsal",style:{marginTop:"-55px"},children:Object(b.jsx)(j.a.Group,{children:Object(b.jsxs)(D.b,{direction:"vertical",size:35,style:{display:"flex",marginTop:"-55px"},children:[Object(b.jsx)(j.a,{value:0,checked:!0,children:"N\xe3o"}),Object(b.jsx)(j.a,{value:1,children:"13 Sal"}),Object(b.jsx)("span",{hidden:!(!h.enaRow01||!e.ena.show01),children:Object(b.jsx)(j.a,{value:2,children:"13 Sal"})}),Object(b.jsx)("span",{hidden:!(!h.enaRow02||!e.ena.show02),children:Object(b.jsx)(j.a,{value:3,children:"13 Sal"})})]})})})]})})]})]})]})})}var P=t(9),E=t(59);var k=function(){var e=Object(n.useState)([{name:"approver",value:""}]),a=Object(c.a)(e,2),t=a[0],i=(a[1],Object(n.useState)([{key:"",usu:"",dateTime:"",role:"",description:""}])),o=Object(c.a)(i,2),r=o[0],j=o[1],m=Object(n.useState)(0),h=Object(c.a)(m,2),g=h[0],f=h[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Observa\xe7\xf5es"}),Object(b.jsxs)(s.a,{fields:t,onFieldsChange:function(e,a){},onFinish:function(e){var a=new Date,t={key:g.toString(),usu:e.approver,dateTime:a.toLocaleString("en-GB",{timeZone:"UTC"}),role:"",description:e.descriptionApp};f((function(e){return e+1})),j((function(e){return[t].concat(Object(P.a)(e))}))},children:[Object(b.jsxs)(d.a,{gutter:20,children:[Object(b.jsx)(l.a,{span:20,children:Object(b.jsx)(s.a.Item,{name:"approver",label:"Aprovador",labelAlign:"left",labelCol:{span:4},wrapperCol:{span:10},children:Object(b.jsx)(u.a,{style:{marginLeft:"25px"}})})}),Object(b.jsx)(l.a,{span:4,children:Object(b.jsx)(s.a.Item,{labelAlign:"right",children:Object(b.jsx)(E.a,{block:!0,type:"primary",htmlType:"submit",children:"Gravar"})})})]}),Object(b.jsx)(y.a,{title:"Campo opcional para acrescentar observa\xe7\xf5es. Ap\xf3s digitar pressionar tecla 'Gravar'.",children:Object(b.jsx)(s.a.Item,{name:"descriptionApp",label:"Observa\xe7\xf5es",labelAlign:"left",labelCol:{span:4},children:Object(b.jsx)(u.a.TextArea,{showCount:!0,maxLength:150})})}),Object(b.jsx)(s.a.Item,{label:"Hist\xf3rico",labelAlign:"left",children:Object(b.jsx)(v.a,{dataSource:r,columns:[{title:"Nome",dataIndex:"usu",key:"key",width:"20%"},{title:"Cargo",dataIndex:"office",key:"key",width:"20%"},{title:"Data/Hora",dataIndex:"dateTime",key:"key",width:"20%"},{title:"Papel",dataIndex:"paper",key:"key",width:"20%"},{title:"Observa\xe7\xf5es",dataIndex:"description",key:"key",width:"20%"}]})})]})]})})},B=t(47),S=t.n(B);function C(){var e=Object(n.useState)({show01:!0,show02:!0}),a=Object(c.a)(e,2),t=a[0],i=a[1],o=Object(n.useState)(!0),r=Object(c.a)(o,2),d=r[0],l=r[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)(s.a.Provider,{onFormFinish:function(e,a){var t=a.values,n=a.forms;console.log(e),console.log(t),console.log(t.who),console.log(n),"formIdentify"===e&&"employeeVacation"===t.who?l(!1):l(!0)},children:[Object(b.jsx)(m,{}),Object(b.jsx)("span",{hidden:d,children:Object(b.jsx)(g,{})})]}),Object(b.jsxs)(s.a.Provider,{onFormFinish:function(e,a){var t=a.values,n=a.forms;console.log(e),console.log(t),console.log(n);var o=n.formVacation;if("Definido"===t.tableInfo.status)for(var r=0;r<t.tableInfo.part;r++)o.setFields([{name:"dateBeginVacation0"+(r+1),value:S()(t.tableInfo.children[r].dateIn,"DD/MM/YYYY")},{name:"daysVacation0"+(r+1),value:t.tableInfo.children[r].day},{name:"dateEndVacation0"+(r+1),value:t.tableInfo.children[r].dateEnd}]);else"Aberto"===t.tableInfo.status&&o.setFields([{name:"vacationDays",value:t.tableInfo.day},{name:"daysVacation01",value:t.tableInfo.day},{name:"abono",value:0}]);o.setFields([{name:"dateBeginVacation01",value:S()(t.tableInfo.children[0].dateIn,"DD/MM/YYYY")},{name:"daysVacation01",value:t.tableInfo.children[0].day},{name:"dateEndVacation01",value:t.tableInfo.children[0].dateEnd},{name:"dateBeginVacation02",value:S()(t.tableInfo.children[1].dateIn,"DD/MM/YYYY")},{name:"daysVacation02",value:t.tableInfo.children[1].day},{name:"dateEndVacation02",value:t.tableInfo.children[1].dateEnd},{name:"dateBeginVacation03",value:S()(t.tableInfo.children[2].dateIn,"DD/MM/YYYY")},{name:"daysVacation03",value:t.tableInfo.children[2].day},{name:"dateEndVacation03",value:t.tableInfo.children[2].dateEnd},{name:"vacationDays",value:t.tableInfo.day}]),"2"===t.tableInfo.part?i({show01:!1,show02:!0}):"3"===t.tableInfo.part&&i({show01:!1,show02:!1})},children:[Object(b.jsx)(V,{}),Object(b.jsx)(I,{ena:t,set:i})]}),Object(b.jsx)(k,{})]})})}var A,M=t(166),Y=t(16),q=t(19),_=t(167),R=function e(){Object(Y.a)(this,e),this.id="",this.username="",this.subject="",this.email="",this.fullname="",this.locale="",this.tenantName="",this.tenantLocale="",this.token=""},T=function(){function e(){var a=this;Object(Y.a)(this,e),this.workflow=void 0,this.errorFunction=void 0,this.submitFunction=void 0,this.workflow=Object(_.workflowCockpit)({init:function(e,t){a.workflow=t},onSubmit:function(e,t){return a.workflow=t,a.submitFunction?a.submitFunction(e,t):{}},onError:function(e,t){a.workflow=t,a.errorFunction&&a.errorFunction(e,t)}})}return Object(q.a)(e,[{key:"onError",value:function(e){this.errorFunction=e}},{key:"onSubmit",value:function(e){this.submitFunction=e}},{key:"abortSubmit",value:function(){throw new Error("A\xe7\xe3o cancelada.")}},{key:"requestPlatformDataAndVariables",value:function(){return Promise.all([this.requestPlatformData(),this.requestProcessVariables()]).then((function(e){return e.reduce((function(e,a){return Object.assign(e,a)}),{})}))}},{key:"requestPlatformData",value:function(){return this.workflow.getPlatformData().then((function(a){return a||e.EMPTY_PLATFORM_DATA}))}},{key:"requestUserData",value:function(){return this.workflow.getUserData().then((function(e){if(e){var a=Object.assign(new R,e);return a.username.indexOf("@")>=0&&(a.username=a.username.split("@")[0]),a}return new R}))}},{key:"requestProcessVariables",value:function(){var e=this;return this.workflow.getInfoFromProcessVariables().then((function(a){return a?e.parsePendencyData(a):{}}))}},{key:"getToken",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=sessionStorage.getItem("senior-token");return e?"Bearer ".concat(a):a}},{key:"getUser",value:function(){return JSON.parse(sessionStorage.getItem("userData"))}},{key:"parsePendencyData",value:function(e){var a,t={},n=Object(M.a)(e);try{for(n.s();!(a=n.n()).done;){var i=a.value;"Integer"===i.type||"Double"===i.type||"Float"===i.type?t[i.key]=parseFloat(i.value):t[i.key]=i.value}}catch(o){n.e(o)}finally{n.f()}return t}}]),e}();T.EMPTY_PLATFORM_DATA={odataUrl:"",serviceUrl:"",token:void 0};var L=new T,N=L.requestUserData(),U=L.requestPlatformData().then((function(e){return e.serviceUrl})),G=L.requestProcessVariables(),z=L.requestPlatformData().then((function(e){return e.token}));N.then((function(e){A=e.fullname,console.log(A),console.log(typeof A)})),console.log("Dados Usu\xe1rio 04: "),console.log(N),console.log(U),console.log(G),console.log(z),console.log(A);var J=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(C,{})})};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root"))},92:function(e,a,t){}},[[257,1,2]]]);
//# sourceMappingURL=main.5f743850.chunk.js.map