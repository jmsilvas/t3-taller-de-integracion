(this["webpackJsonpsocket-app"]=this["webpackJsonpsocket-app"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(25),i=c.n(a),o=(c(53),c(7)),r=(c(54),c(92)),j=c(103),l=c(93),d=c(94),b=c(95),h=c(47),O=Object(h.io)("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),u=c(2);function p(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),s=c[0],a=c[1];return O.on("POSITION",(function(e){s[e.code]=e.position,a(s)})),Object(u.jsx)("div",{children:Object(u.jsx)("div",{id:"mapid",children:Object(u.jsxs)(r.a,{center:[-38.505,-65.09],zoom:5,scrollWheelZoom:!1,children:[Object(u.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.flights.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{pathOptions:{color:e.color},positions:[e.origin,e.destination],children:Object(u.jsx)(d.a,{children:e.code})}),s[e.code]&&Object(u.jsx)(b.a,{position:[s[e.code][0],s[e.code][1]],children:Object(u.jsxs)(d.a,{children:["Posicion actual Vuelo ",e.code,s[e.code]?s[e.code].position:"no hay avance"]})},e.code+"loc")]})}))]})})})}var x=c(96),m=c(97),g=c(98),f=c(102),v=c(99);function S(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),j=r[0],l=r[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),h=b[0],p=b[1];return O.on("CHAT",(function(e){e.name===s?p(h+"yo"+e.date+e.message):p(h+e.name+e+e.message)})),Object(u.jsxs)(u.Fragment,{children:[s&&Object(u.jsx)(x.a,{className:"chat-scroll",children:Object(u.jsx)("p",{children:h})}),Object(u.jsx)(x.a,{children:Object(u.jsxs)(m.a,{className:"input-group23",children:[Object(u.jsx)(g.a,{placeholder:s?"Escribe tu mensaje":"Ingresa tu nickname para chatear",onChange:function(e){return l(e.target.value)},value:j}),Object(u.jsx)(f.a,{addonType:"append",children:s?Object(u.jsx)(v.a,{color:"secondary",onClick:function(){O.emit("CHAT",{name:s,message:j}),l("")},children:"Send"}):Object(u.jsx)(v.a,{color:"secondary",onClick:function(){a(j),l("")},children:"Send"})})]})})]})}var k=c(100),F=c(101);O.emit("FLIGHTS");var y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return O.on("FLIGHTS",(function(e){for(var t=0;t<e.length;t++)e[t].color="blue";s(e)})),Object(u.jsxs)(k.a,{className:"main-container",children:[Object(u.jsxs)(x.a,{children:[Object(u.jsx)(F.a,{md:"8",sm:"12",children:Object(u.jsx)(p,{socket:O,flights:c,setFlights:s})}),Object(u.jsx)(F.a,{md:"4",sm:"12",children:Object(u.jsx)(S,{socket:O})})]}),Object(u.jsxs)(x.a,{md:"12",children:[Object(u.jsx)("h2",{children:"Info"}),c.length?c.map((function(e){return Object(u.jsxs)(F.a,{children:[Object(u.jsx)("div",{children:e.code}),Object(u.jsx)("div",{children:e.airline}),Object(u.jsx)("div",{children:e.plane}),Object(u.jsx)("div",{children:e.seats})]},e.code)})):""]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(89);i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[90,1,2]]]);
//# sourceMappingURL=main.bce9ceb3.chunk.js.map