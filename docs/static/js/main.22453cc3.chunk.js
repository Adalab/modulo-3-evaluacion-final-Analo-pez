(this["webpackJsonpnew-project-02"]=this["webpackJsonpnew-project-02"]||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),i=a(8),s=(a(24),a(13)),m=(a(25),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))});a(26);var u=function(){return c.a.createElement("div",{className:"DivHeader"})},o=(a(15),function(e){return c.a.createElement("form",{className:"filter",onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",{className:"filter__label"},"Encuentra tu personaje"),c.a.createElement("input",{className:"filter__input",type:"text",id:"filterName",value:e.filterName,onChange:function(t){e.handleFilters({key:"filterName",value:t.target.value})}}))}),d=function(e){return c.a.createElement("article",{className:"card",id:e.id},c.a.createElement(i.b,{to:"/character/".concat(e.id),className:"card__btn"},c.a.createElement("img",{src:e.image,className:"card__img",alt:e.name}),c.a.createElement("h3",{className:"card__title"},e.name),c.a.createElement("p",{className:"card__description"},e.species," ")))},f=function(e){if(0===e.characters.length)return c.a.createElement("p",{className:"Alert"},"No hay coincidencias");var t=e.characters.map((function(e,t){return c.a.createElement(d,{key:t,id:e.id,image:e.image,name:e.name,species:e.species})}));return c.a.createElement("section",{className:"list"},t," ")},E=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"rtn"},c.a.createElement(i.b,{to:"/"},c.a.createElement("span",null,"Volver")," ")),c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal__content"},c.a.createElement("div",null,c.a.createElement("section",null,c.a.createElement("img",{className:"card__img2",src:e.image,alt:e.name}),c.a.createElement("h2",{className:"card__content"},e.name),c.a.createElement("ul",{className:"card__content"},c.a.createElement("li",null,"Species: ",e.species),c.a.createElement("li",null,"Planet: ",e.planet),c.a.createElement("li",null,"Status: ",e.status),c.a.createElement("li",{className:"episodeList"},"Episodes: ",e.episode.length)))))))},p=a(10),h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("Rick"),i=Object(s.a)(l,2),d=i[0],h=i[1];Object(n.useEffect)((function(){m().then((function(e){r(e)}))}),[]);return c.a.createElement("div",{className:"App "},c.a.createElement(u,null),c.a.createElement(p.Switch,null,c.a.createElement(p.Route,{exact:!0,path:"/"},c.a.createElement(o,{filterName:d,handleFilters:function(e){"filterName"===e.key&&h(e.value)}}),c.a.createElement(f,{characters:a.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}))})),c.a.createElement(p.Route,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),n=a.find((function(e){return e.id===t}));if(n)return c.a.createElement(E,{image:n.image,name:n.name,species:n.species,planet:n.origin.name,episode:n.episode,status:n.status})}})))};l.a.render(c.a.createElement(i.a,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.22453cc3.chunk.js.map