(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(0),a=t.n(s),r=t(7),i=t.n(r),o=(t(14),t(15),t(2)),l=t(8),d=(t(17),t(18),t(19),t.p+"static/media/logo-RickAndMorty.53bd11aa.png"),j=t.p+"static/media/Characteropedia.0814b805.png",u=(t(20),t(21),function(e){var c=e.id,t=e.imgSrc,s=e.imgAlt,a=e.name,r=e.species,i=e.gender,o=e.status,l=e.location,d=e.episodeFirst;e.episodes;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image--wrapper",children:Object(n.jsx)("img",{className:"card-image",src:t,alt:s})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h2",{children:["#",c," - ",a]}),Object(n.jsxs)("h3",{children:[o," - ",r," - ",i]}),Object(n.jsx)("p",{children:"Last known location:"}),Object(n.jsx)("p",{children:l}),Object(n.jsx)("p",{children:"First seen in:"}),Object(n.jsx)("p",{children:d})]})]})}),h=function(e){var c=e.results,t=c.info.count,a=Object(s.useState)(c.info.next),r=Object(o.a)(a,2),i=r[0],l=r[1],d=Object(s.useState)(c.results),j=Object(o.a)(d,2),h=j[0],b=j[1],m=Object(s.useState)(!1),O=Object(o.a)(m,2),f=O[0],x=O[1],p=Object(s.useState)(!1),g=Object(o.a)(p,2),v=g[0],N=g[1];window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(null!=i?S(i):N(!0))};var S=function(e){x(!0),fetch(e).then((function(e){return e.json()})).then((function(e){console.log("Success:",e);var c=h.concat(e.results);b(c),l(e.info.next),0===e.length&&N(!0)})).catch((function(e){console.error("Error:",e)})).finally((function(){x(!1)}))};return Object(n.jsxs)("section",{className:"rendered-cards",children:[Object(n.jsx)("div",{className:"rendered-cards--header",children:Object(n.jsxs)("h1",{children:["Number of Results: ",t]})}),Object(n.jsx)("div",{className:"rendered-cards--results",children:h.map((function(e,c){return Object(n.jsx)(u,{id:c+1,imgSrc:e.image,imgAlt:e.name,name:e.name,status:e.status,species:e.species,gender:e.gender,location:e.location.name,episodeFirst:e.episode[0]},c.toString())}))}),Object(n.jsxs)("div",{className:"rendered-cards--status",children:[f?Object(n.jsx)("h1",{children:"loading data ..."}):"",v?Object(n.jsx)("h1",{children:"that's all folks!"}):""]})]})},b=function(){var e=Object(s.useState)(null),c=Object(o.a)(e,2),t=c[0],a=c[1],r=Object(s.useState)(null),i=Object(o.a)(r,2),u=i[0],b=i[1],m=Object(s.useState)(!1),O=Object(o.a)(m,2),f=O[0],x=O[1],p=Object(s.useState)(""),g=Object(o.a)(p,2),v=g[0],N=g[1],S=Object(l.a)(),w=S.register,k=S.handleSubmit,y=S.reset,F="https://rickandmortyapi.com/api/character/";Object(s.useEffect)((function(){a(E(F))}),[]);var E=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){e.error?(console.error("Error:",e.error),b(!0),a("")):(console.log("Success:",e),b(!1),a(e),console.log(u))})).catch((function(e){console.error("Error:",e),b(!0)}))};return Object(n.jsxs)("section",{children:[Object(n.jsxs)("section",{className:"home-header",children:[Object(n.jsxs)("div",{className:"logos",children:[Object(n.jsx)("img",{className:"home-header--image",src:d,alt:"rick and morty logo"}),Object(n.jsx)("img",{className:"home-header--image",src:j,alt:"characteropedia"})]}),Object(n.jsx)("div",{className:"search-form",children:Object(n.jsxs)("form",{onSubmit:k((function(e){e.characterName||e.status||e.gender?x(!0):x(!1);var c="".concat(F,"?name=").concat(e.characterName,"&status=").concat(e.status,"&gender=").concat(e.gender);a(E(c));var t="".concat(e.characterName," ").concat(e.status," ").concat(e.gender);N(t),y()})),children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"form-label",children:"Name"}),Object(n.jsx)("input",{className:"form-field",type:"search",placeholder:"Search for a character",name:"characterName",ref:w})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"form-label",children:"Status"}),Object(n.jsxs)("select",{className:"form-field",type:"dropdown",name:"status",ref:w,children:[Object(n.jsx)("option",{disabled:!0,hidden:!0,selected:!0,children:"mortal options"}),Object(n.jsx)("option",{value:"",children:"None"}),Object(n.jsx)("option",{value:"alive",children:"Alive"}),Object(n.jsx)("option",{value:"dead",children:"Dead"}),Object(n.jsx)("option",{value:"unknown",children:"Unknown"})]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{className:"form-label",children:"Gender"}),Object(n.jsxs)("select",{className:"form-field",type:"dropdown",name:"gender",ref:w,children:[Object(n.jsx)("option",{disabled:!0,hidden:!0,selected:!0,children:"select a gender"}),Object(n.jsx)("option",{value:"",children:"None"}),Object(n.jsx)("option",{value:"female",children:"Female"}),Object(n.jsx)("option",{value:"male",children:"Male"}),Object(n.jsx)("option",{value:"genderless",children:"Genderless"}),Object(n.jsx)("option",{value:"unknown",children:"Unknown"})]})]}),Object(n.jsx)("input",{className:"submit-button",type:"submit",value:"Submit"})]})})]}),f?Object(n.jsx)("div",{className:"search-status",children:Object(n.jsxs)("h3",{children:["Searched for: ",v]})}):"",u?Object(n.jsx)("div",{className:"search-status",children:Object(n.jsx)("h3",{children:"There were no search results. Try again."})}):"",t?Object(n.jsx)(h,{results:t}):""]})};var m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),a(e),r(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),O()}],[[22,1,2]]]);
//# sourceMappingURL=main.aa72b4e1.chunk.js.map