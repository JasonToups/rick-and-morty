(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],[,,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var n=c(0),t=c(1),o=c.n(t),a=c(4),i=c.n(a),r=(c(10),c(11),c(3)),l=(c(12),c(13),c(14),c.p+"static/media/logo-RickAndMorty.53bd11aa.png"),d=c.p+"static/media/Characteropedia.0814b805.png",j=(c(15),c(16),function(e){var s=e.imgSrc,c=e.imgAlt,t=e.name,o=e.species,a=e.gender,i=e.status,r=e.location,l=e.episodeFirst;e.episodes;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image--wrapper",children:Object(n.jsx)("img",{className:"card-image",src:s,alt:c})}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsxs)("h3",{children:[i," - ",o," - ",a]}),Object(n.jsx)("p",{children:"Last known location:"}),Object(n.jsx)("p",{children:r}),Object(n.jsx)("p",{children:"First seen in:"}),Object(n.jsxs)("p",{children:["episode ",l]})]})]})}),m=function(e){var s,c=e.results,t=c.info,o=t.count,a=(t.pages,t.next,t.prev,[]),i=c.results;return function(e,s){console.log("rendering cards");for(var c=0;c<e.length;c++)console.log(e[c].image),console.log(e[c].name),console.log(e[c].species),console.log(e[c].gender),console.log(e[c].status),console.log(e[c].location),console.log(e[c].episode[0]),console.log(e[c].episode),console.log(e[c].id),a.push(Object(n.jsx)(j,{imgSrc:e[c].image,imgAlt:e[c].name,name:e[c].name,status:e[c].status,species:e[c].species,gender:e[c].gender,location:e[c].location,episode:e[c].episode[0]},e[c].id));console.log(a)}(i),Object(n.jsxs)("section",{className:"rendered-cards",children:[Object(n.jsx)("div",{className:"rendered-cards--header",children:Object(n.jsxs)("h1",{children:["Number of Results: ",o]})}),Object(n.jsx)("div",{className:"rendered-cards--results",children:(s=i,s.map((function(e){return console.log(e),Object(n.jsx)(j,{imgSrc:e.image,imgAlt:e.name,name:e.name,status:e.status,species:e.species,gender:e.gender,location:e.location.name,episode:e.episode[0]},e.id)})))})]})},u=function(){var e=o.a.useState,s=o.a.useEffect,c=e(null),t=Object(r.a)(c,2),a=t[0],i=t[1],j=e(null),u=Object(r.a)(j,2);u[0],u[1];s((function(){h()}),[]);var h=function(e){fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){console.log("Success:",e),i(e)})).catch((function(e){console.error("Error:",e)}))};return Object(n.jsxs)("section",{children:[Object(n.jsxs)("section",{className:"home-header",children:[Object(n.jsxs)("div",{className:"logos",children:[Object(n.jsx)("img",{className:"home-header--image",src:l,alt:"rick and morty logo"}),Object(n.jsx)("img",{className:"home-header--image",src:d,alt:"characteropedia"})]}),Object(n.jsx)("div",{className:"search-form",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("input",{className:"search-field",type:"text",placeholder:"Search for a character"}),Object(n.jsx)("input",{className:"submit-button",type:"submit",value:"submit"})]})})]}),a?Object(n.jsx)(m,{results:a}):Object(n.jsx)("h1",{children:"Loading Results"})]})};var h=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(u,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(s){var c=s.getCLS,n=s.getFID,t=s.getFCP,o=s.getLCP,a=s.getTTFB;c(e),n(e),t(e),o(e),a(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.8da39f7c.chunk.js.map