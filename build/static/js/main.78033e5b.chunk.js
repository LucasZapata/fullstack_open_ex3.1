(this["webpackJsonpexcercise_2.6"]=this["webpackJsonpexcercise_2.6"]||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(14),c=t.n(r),o=t(3),a=t(1),i=t(4),u=t.n(i),s="/api/persons",l=function(){return u.a.get(s).then((function(e){return e.data}))},d=function(e){return u.a.post(s,e).then((function(e){return e.data}))},b=function(e,n){return u.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return u.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},f=t(0),m=function(e){var n=e.entries,t=e.filter,r=e.deleteEntry;return Object(f.jsx)("ul",{children:function(){var e=n;return""!==t&&(e=n.filter((function(e){return e.name.toLowerCase()===t}))),e}().map((function(e){return Object(f.jsxs)("li",{children:[e.name," ",e.number," ",Object(f.jsx)("button",{onClick:function(){return r(e.id,e.name)},children:"DELETE"})]},e.id)}))})},h=function(e){var n=e.onSubmit,t=e.newName,r=e.onTextChange,c=e.newNumber,o=e.onNumberChange;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:r})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:c,onChange:o})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.FilterTerm,t=e.onFilterChange,r=e.SetFilter;return Object(f.jsxs)("form",{onSubmit:r,children:[Object(f.jsx)("div",{children:Object(f.jsx)("input",{value:n,onChange:t})}),Object(f.jsx)("button",{type:"submit",children:"Search"})]})},g=function(e){var n=e.message,t=e.style;return null===n?null:Object(f.jsx)("div",{className:"error",style:t,children:n})},x=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),u=i[0],s=i[1],x=Object(a.useState)(""),p=Object(o.a)(x,2),v=p[0],S=p[1],y=Object(a.useState)(""),w=Object(o.a)(y,2),C=w[0],T=w[1],E=Object(a.useState)(""),N=Object(o.a)(E,2),k=N[0],F=N[1],D=Object(a.useState)(null),L=Object(o.a)(D,2),z=L[0],I=L[1],J=Object(a.useState)(null),R=Object(o.a)(J,2),_=R[0],B=R[1];Object(a.useEffect)((function(){l().then((function(e){return r(e)}))}),[]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(O,{FilterTerm:C,onFilterChange:function(e){return T(e.target.value)},SetFilter:function(e){e.preventDefault(),F(C.toLowerCase())}}),Object(f.jsx)(g,{message:_,style:{color:"red",background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,fontSize:20}}),Object(f.jsx)(g,{message:z,style:{color:"green",background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,fontSize:20}}),Object(f.jsx)(h,{newName:u,newNumber:v,onTextChange:function(e){return s(e.target.value)},onNumberChange:function(e){return S(e.target.value)},onSubmit:function(e){e.preventDefault();var n={name:u,number:v},c=t.find((function(e){return e.name===u}));if(console.log(c),void 0===c)d(n).then((function(e){r(t.concat(e)),I("".concat(e.name," added to database")),setTimeout((function(){I(null)}),5e3)})).catch((function(e){console.log("aaa",e.response),"ValidationError"===e.response.data.name&&(console.log("aaaa",e.response.data.message),B(e.response.data.message))}));else if(c.number!==n.number){if(window.confirm("Change number for ".concat(u,"?")))b(c.id,n).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),I("".concat(e.name," edited")),setTimeout((function(){I(null)}),5e3)}))}else window.alert("".concat(u,", number ").concat(v,", is already added to phonebook.")),I("".concat(u," already present")),setTimeout((function(){I(null)}),5e3)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(m,{entries:t,filter:k,deleteEntry:function(e,n){if(window.confirm("Delete entry ".concat(n,"?")))j(e).then(r(t.filter((function(n){return n.id!==e})))).catch((function(e){B("Information of ".concat(n," not present in server")),setTimeout((function(){B(null)}),5e3)}))}})]})};c.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.78033e5b.chunk.js.map