(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(4),i=r.n(s),o=(r(9),r(2)),d=(r(10),r(11),r(12),r(0));var a=function(){return Object(d.jsx)("nav",{className:"banner",children:Object(d.jsx)("h3",{children:"Beauty Products"})})};r(14),r(15);var u=function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("p",{children:"\xa9 2021 All right reserved "}),Object(d.jsx)("p",{children:" Privacy . Terms . SiteMap . Company Details"}),Object(d.jsx)("p",{})]})};function j(){var e,t=Object(c.useState)([{}]),r=Object(o.a)(t,2),n=r[0],s=r[1];Object(c.useEffect)((function(){fetch("/preds").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]);return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)(a,{}),Object(d.jsx)("p",{children:"Here are the  10 products recommended based on user ratings. The products are in  with the item purchased by a particular  customer based on items rated by other customers  who bought the same product say the product with the product id '1304624498' and outputs other products recommendation in Correlation with other products other users rated"}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{children:" Here are the 10 products represented by  their  id's..."}),"undefined"===typeof n.predictions?Object(d.jsx)("p",{children:"Loading ..."}):null===(e=n.predictions)||void 0===e?void 0:e.map((function(e,t){return Object(d.jsxs)("h6",{id:"list",children:["product   ",t+"=>",": ",e]},t)})),Object(d.jsx)(u,{})]})}var h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2);t[0],t[1];return Object(d.jsx)("div",{children:Object(d.jsx)(j,{})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.093f157e.chunk.js.map