(this["webpackJsonpsocket-app"]=this["webpackJsonpsocket-app"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(24),s=n.n(i),r=(n(50),n(13)),a=(n(51),n(90)),j=n(97),d=n(91),l=n(92),h=n(93),b=n(2);function p(e){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{id:"mapid",children:Object(b.jsxs)(a.a,{center:[-38.505,-65.09],zoom:5,scrollWheelZoom:!1,children:[Object(b.jsx)(j.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.flights.map((function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{pathOptions:{color:t.color},positions:[t.origin,t.destination],children:Object(b.jsx)(l.a,{children:t.code})}),e.positions[t.code]&&Object(b.jsx)(h.a,{position:[e.positions[t.code][0],e.positions[t.code][1]],children:Object(b.jsxs)(l.a,{children:["Posicion actual Vuelo ",t.code,e.positions[t.code]?e.positions[t.code].position:"no hay avance"]})},t.code+"loc")]})}))]})})})}var O=n(94),u=n(95),f=n(96),x=n(45);var m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)({}),s=Object(r.a)(i,2),a=s[0],j=s[1];function d(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}return Object(c.useEffect)((function(){var e=Object(x.io)("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"});e.emit("FLIGHTS"),e.on("FLIGHTS",(function(e){for(var t=0;t<e.length;t++)e[t].color=d();o(e)})),e.on("POSITION",(function(e){a[e.code]=e.position,j(a)}))}),[n,a]),Object(b.jsxs)(O.a,{className:"main-container",children:[Object(b.jsxs)(u.a,{children:[Object(b.jsx)(f.a,{md:"8",sm:"12",children:Object(b.jsx)(p,{flights:n,positions:a})}),Object(b.jsx)(f.a,{md:"4",sm:"12",children:"Chat"})]}),Object(b.jsxs)(u.a,{md:"12",children:[Object(b.jsx)("h2",{children:"Info"}),n.length?n.map((function(e){return Object(b.jsxs)(f.a,{children:[Object(b.jsx)("div",{children:e.code}),Object(b.jsx)("div",{children:e.airline}),Object(b.jsx)("div",{children:e.plane}),Object(b.jsx)("div",{children:e.seats})]},e.code)})):""]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};n(86);s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),g()}},[[87,1,2]]]);
//# sourceMappingURL=main.d063d33a.chunk.js.map