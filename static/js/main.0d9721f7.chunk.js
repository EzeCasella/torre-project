(this["webpackJsonptorre-project"]=this["webpackJsonptorre-project"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c.n(r),s=c(15),a=c.n(s),o=(c(25),c.p,c(26),c(18)),l=c(2);var u=function(){return Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("h1",{children:"Opportunities Feed"}),Object(n.jsx)("div",{className:"Green-bar"})]})},p=c(8);var b=c(16),j="https://",d=function e(){Object(b.a)(this,e)};d.get=function(e){return fetch(j+e,{method:"POST"}).then((function(e){return e.json()}))},d.getOpportunities=function(e){var t=e?9*e:0;return fetch("".concat("https://search.torre.co/","opportunities/_search/?offset=").concat(t,"&size=").concat(9),{method:"POST"}).then((function(e){return e.json()})).then((function(e){return{opportunities:e.results,totalPages:Math.floor(e.total/9)}}))};var m=d,O=c(17),f=c.n(O);var h=c.p+"static/media/default-profile-picture.440c7fc4.png";var v=function(e){return Object(n.jsx)("div",{className:"flex-row ",children:Object(n.jsxs)("div",{className:"flex-row-align-center",children:[[0,1,2].map((function(t){var c,r=(c=t,e.members[c]?e.members[c].picture||h:null);return r&&Object(n.jsxs)("div",{className:"tooltip",style:{zIndex:3-t},children:[Object(n.jsx)("span",{className:"tooltiptext",children:e.members[t].name}),Object(n.jsx)("img",{className:"Member-preview",src:r,alt:""})]})})),Object(n.jsx)("p",{className:"ml-5",children:Object(n.jsx)("b",{children:e.members.length})})]})})};var x=function(e){var t=e.opportunity.organizations&&e.opportunity.organizations.length&&e.opportunity.organizations[0],c=e.opportunity.type.replace("-"," "),r=e.opportunity.deadline?f()(e.opportunity.deadline).format("MM/DD/YYYY"):null,i=t&&t.picture||"data:image/png;base64,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",s=t&&t.name||"-",a=e.opportunity.members||null;return Object(n.jsxs)("div",{className:"Opportunity-card",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"flex-row Card-header",children:[Object(n.jsx)("img",{className:"Organization-img",src:i,alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:Object(n.jsx)("b",{children:e.opportunity.objective})}),Object(n.jsxs)("p",{className:"mt-5",children:["@ ",s]})]})]}),Object(n.jsx)("span",{className:"Opportunity-type-tag",children:c})]}),Object(n.jsxs)("div",{className:"flex-row-space-between",children:[Object(n.jsx)("p",{children:r&&Object(n.jsxs)("b",{children:["Until ",r]})}),a&&Object(n.jsx)(v,{members:a})]})]},e.opportunity.id)};var z=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)(0),a=Object(p.a)(s,2),o=a[0],l=a[1],b=Object(r.useState)(0),j=Object(p.a)(b,2),d=j[0],O=j[1],f=function(e){i(e.opportunities),O(e.totalPages)},h=function(e){m.getOpportunities(e).then((function(t){f(t),l(e)}))};return Object(r.useEffect)((function(){m.getOpportunities().then((function(e){return f(e)}))}),[]),Object(n.jsxs)("div",{className:"App-body",children:[Object(n.jsx)(u,{}),Object(n.jsx)("div",{className:"Opportunities-container",children:c.map((function(e){return Object(n.jsx)(x,{opportunity:e},e.id)}))}),Object(n.jsxs)("div",{className:"flex-row Pager",children:[Object(n.jsx)("p",{className:"Navigator-item Navigator-arrow",onClick:function(){return h(0)},children:"<<"}),Object(n.jsx)("p",{className:"Navigator-item Navigator-arrow",onClick:function(){return o>0&&h(o-1)},children:"<"}),Object(n.jsxs)("p",{className:"Navigator-item",children:[o+1,"...",d+1]}),Object(n.jsx)("p",{className:"Navigator-item Navigator-arrow",onClick:function(){return o<d&&h(o+1)},children:">"}),Object(n.jsx)("p",{className:"Navigator-item Navigator-arrow",onClick:function(){return h(d)},children:">>"})]})]})};var N=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(o.a,{children:Object(n.jsx)(l.a,{path:"/",children:Object(n.jsx)(z,{})})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.0d9721f7.chunk.js.map