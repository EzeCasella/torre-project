(this["webpackJsonptorre-project"]=this["webpackJsonptorre-project"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),s=n(15),o=n.n(s),j=(n(25),n.p,n(26),n(18)),a=n(2);var u=function(){return Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h1",{children:"Opportunities Feed"}),Object(c.jsx)("div",{className:"Green-bar"})]})},p=n(9);var d=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("div",{children:Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(n)},method:"get",children:Object(c.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){i(e.target.value)},value:n})})})};var l=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{className:"App-body",children:Object(c.jsx)(d,{})})]})},b=n(16),h="https://",O=function e(){Object(b.a)(this,e)};O.get=function(e){return fetch(h+e,{method:"POST"}).then((function(e){return e.json()}))},O.getOpportunities=function(){return fetch("https://search.torre.co/opportunities/_search/?offset=0&size=9",{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e.results}))};var x=O,f=n(17),v=n.n(f);var m=function(e){var t=e.opportunity.type.replace("-"," "),n=v()(e.opportunity.deadline).format("MM/DD/YYYY");return Object(c.jsxs)("div",{className:"Opportunity-card",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"flex-row",children:[Object(c.jsx)("img",{className:"Organization-img",src:e.opportunity.organizations[0].picture,alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:e.opportunity.objective})}),Object(c.jsxs)("p",{className:"mt-5",children:["@ ",e.opportunity.organizations[0].name]})]})]}),Object(c.jsx)("span",{className:"Opportunity-type-tag",children:t})]}),Object(c.jsxs)("div",{className:"flex-row",children:[e.opportunity.deadline&&Object(c.jsx)("p",{children:Object(c.jsxs)("b",{children:["Until ",n]})}),Object(c.jsx)("div",{})]})]},e.opportunity.id)};var g=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){x.getOpportunities().then((function(e){i(e)}))}),[]),Object(c.jsxs)("div",{className:"App-body",children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{className:"Opportunities-container",children:n.map((function(e){return Object(c.jsx)(m,{opportunity:e},e.id)}))})]})};var y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(a.c,{children:[Object(c.jsx)(a.a,{exact:!0,path:"/",children:Object(c.jsx)(g,{})}),Object(c.jsx)(a.a,{path:"/search",children:Object(c.jsx)(l,{})})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.7b9f3312.chunk.js.map