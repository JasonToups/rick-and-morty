(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),a=c(4),i=c.n(a),o=(c(10),c(11),c(2)),d=(c(12),c(13),c(14),c.p+"static/media/logo-RickAndMorty.53bd11aa.png"),l=c.p+"static/media/Characteropedia.0814b805.png",j=(c(15),c(16),function(e){var t=e.id,c=e.imgSrc,s=e.imgAlt,r=e.name,a=e.species,i=e.gender,o=e.status,d=e.location,l=e.episodeFirst;e.episodes;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image--wrapper",children:Object(n.jsx)("img",{className:"card-image",src:c,alt:s})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h2",{children:["#",t," - ",r]}),Object(n.jsxs)("h3",{children:[o," - ",a," - ",i]}),Object(n.jsx)("p",{children:"Last known location:"}),Object(n.jsx)("p",{children:d}),Object(n.jsx)("p",{children:"First seen in:"}),Object(n.jsx)("p",{children:l})]})]},t)}),u=function(e){var t=e.results,c=t.info.count,r=Object(s.useState)(t.info.next),a=Object(o.a)(r,2),i=a[0],d=a[1],l=Object(s.useState)(t.results),u=Object(o.a)(l,2),h=u[0],m=u[1],b=Object(s.useState)(!1),f=Object(o.a)(b,2),O=f[0],p=f[1],x=Object(s.useState)(!1),g=Object(o.a)(x,2),v=g[0],N=g[1];Object(s.useEffect)((function(){S(i)}),[]),window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(v||S(i))};var S=function(e){p(!0),fetch(e).then((function(e){return e.json()})).then((function(e){console.log("Success:",e);var t=h.concat(e.results);m(t),d(e.info.next),0===e.length&&N(!0)})).catch((function(e){console.error("Error:",e)})).finally((function(){p(!1)}))};return Object(n.jsxs)("section",{className:"rendered-cards",children:[Object(n.jsx)("div",{className:"rendered-cards--header",children:Object(n.jsxs)("h1",{children:["Number of Results: ",c]})}),Object(n.jsx)("div",{className:"rendered-cards--results",children:h.map((function(e){return Object(n.jsx)(j,{id:e.id,imgSrc:e.image,imgAlt:e.name,name:e.name,status:e.status,species:e.species,gender:e.gender,location:e.location.name,episodeFirst:e.episode[0]})}))}),Object(n.jsxs)("div",{className:"rendered-cards--status",children:[O?Object(n.jsx)("h1",{children:"loading data ..."}):Object(n.jsx)("h1",{children:"pull up for more laughs!"}),v?Object(n.jsx)("h1",{children:"that's all folks!"}):""]})]})},h=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],r=t[1];Object(s.useEffect)((function(){r(a("https://rickandmortyapi.com/api/character/"))}),[]);var a=function(){fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){console.log("Success:",e),r(e)})).catch((function(e){console.error("Error:",e)}))};return Object(n.jsxs)("section",{children:[Object(n.jsxs)("section",{className:"home-header",children:[Object(n.jsxs)("div",{className:"logos",children:[Object(n.jsx)("img",{className:"home-header--image",src:d,alt:"rick and morty logo"}),Object(n.jsx)("img",{className:"home-header--image",src:l,alt:"characteropedia"})]}),Object(n.jsx)("div",{className:"search-form",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:"search-field",type:"text",placeholder:"Search for a character"}),Object(n.jsx)("input",{className:"submit-button",type:"submit",value:"submit"})]})})]}),c?Object(n.jsx)(u,{results:c}):Object(n.jsx)("h1",{children:"Loading Results"})]})};var m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.169b56e4.chunk.js.map