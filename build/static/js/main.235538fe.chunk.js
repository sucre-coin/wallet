(this.webpackJsonpballet=this.webpackJsonpballet||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(11),r=n.n(s),j=(n(24),n(13)),a=n(19),l="findTransaction",d=function(e){return{type:l,data:e}},o=[{type:"receive",time:1622335598806,amount:"0.03940246",from:"123123123",to:"123123123",hash:"123123123",status:!0,state:""},{type:"sent",time:1622335598806,amount:"0.03940246",from:"123123123",to:"123123123",hash:"123123123",status:!0,state:""}],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case l:if(!c)return[];var i=new RegExp("^".concat(c),"i");return e.filter((function(e){return i.test(e.title)}));default:return e}},b=Object(a.a)({transactions:h}),u=Object(a.b)(b),O=(n.p,n(28),n(16)),x=n(3),f=(n(29),n(30),n(1)),v=function(e){var t=e.children,n=e.onClick;return Object(f.jsx)("div",{className:"button",onClick:n,children:t})},m=function(e){e.children;var t=Object(x.f)(),n=function(e){t.push(e)};return Object(f.jsxs)("div",{className:"splash-screen",children:[Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("h1",{children:"SUCRE"})}),Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("h2",{children:"S"})}),Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)("div",{children:Object(f.jsx)(v,{onClick:function(){n("/my-wallet")},children:"My Wallet"})}),Object(f.jsx)("div",{children:Object(f.jsx)(v,{onClick:function(){n("/generator")},children:"Create Wallet"})}),Object(f.jsx)("div",{children:Object(f.jsx)(v,{onClick:n("/import"),children:"Import"})})]}),Object(f.jsx)("div",{className:"footer",children:Object(f.jsx)("span",{children:"DIGITAL SMART WALLET"})})]})},p=n(8),N=(n(34),function(){return Object(f.jsxs)("div",{className:"menu-container",children:[Object(f.jsx)("div",{className:"option",children:Object(f.jsx)(p.c,{})}),Object(f.jsx)("div",{className:"option",children:Object(f.jsx)(p.b,{})}),Object(f.jsx)("div",{className:"option",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)("div",{className:"option",children:Object(f.jsx)(p.f,{})})]})}),g=(n(35),function(e){var t=e.children;return Object(f.jsx)("div",{className:"background-container",children:t})}),y=function(e){var t=e.children;return Object(f.jsx)("div",{className:"content-container",children:t})},C=(n(36),function(){return Object(f.jsx)("hr",{className:"divider"})}),k=(n(37),n(38),function(){return Object(f.jsxs)("div",{className:"transaction",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(p.e,{})," ",Object(f.jsx)(p.d,{})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:"receive"}),Object(f.jsx)("div",{children:"000000000000"})]}),Object(f.jsx)("div",{children:"time"})]})]})}),T={findTransaction:d},w=Object(j.b)((function(e){return{transactions:e.transactions}}),T)((function(e){var t=e.transactions;return Object(f.jsx)("div",{className:"transaction-container",children:t.map((function(e){return Object(f.jsx)(k,{transaction:e})}))})})),I=function(){return Object(f.jsxs)(g,{children:[Object(f.jsxs)(y,{children:[Object(f.jsx)("h1",{children:"Activity"}),Object(f.jsx)(C,{}),Object(f.jsx)(w,{})]}),Object(f.jsx)(N,{})]})};var L=function(){return Object(f.jsx)(j.a,{store:u,children:Object(f.jsx)(O.a,{children:Object(f.jsxs)(x.c,{children:[Object(f.jsx)(x.a,{path:"/my-wallet",children:Object(f.jsx)(I,{})}),Object(f.jsx)(x.a,{path:"/splash",children:Object(f.jsx)("h1",{children:"splash"})}),Object(f.jsx)(x.a,{path:"/generator",children:Object(f.jsx)("h1",{children:"generator"})}),Object(f.jsx)(x.a,{path:"/",children:Object(f.jsx)(m,{})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.235538fe.chunk.js.map