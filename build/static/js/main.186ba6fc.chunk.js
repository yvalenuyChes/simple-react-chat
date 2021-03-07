(this["webpackJsonpsimple-react-chat"]=this["webpackJsonpsimple-react-chat"]||[]).push([[0],{44:function(e,t,a){e.exports=a(93)},87:function(e,t){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),s=a.n(c),o=a(7),u=a.n(o),l=a(11),m=a(4),i=a(13),E=a.n(i),d=a(42),p=a.n(d)()(),f=a(43),b=a(3),O=function(e,t){switch(t.type){case"JOINED":return Object(b.a)(Object(b.a)({},e),{},{joined:!0,username:t.payload.username,roomId:t.payload.roomId});case"SET_DATA":return Object(b.a)(Object(b.a)({},e),{},{users:t.payload.users,messages:t.payload.messages});case"SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.payload});case"NEW_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{messages:[].concat(Object(f.a)(e.messages),[t.payload])});default:return e}};a(90);var j=function(e){var t=e.onLogin,a=Object(n.useState)(""),c=Object(m.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(""),d=Object(m.a)(i,2),p=d[0],f=d[1],b=Object(n.useState)(!1),O=Object(m.a)(b,2),j=O[0],v=O[1],g=function(){var e=Object(l.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&p){e.next=2;break}return e.abrupt("return",alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"));case 2:return a={roomId:s,username:p},v(!0),e.next=6,E.a.post("/rooms",a);case 6:t(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"enter-room"},r.a.createElement("input",{type:"text",placeholder:"Room ID",value:s,onChange:function(e){return o(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:p,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{disabled:j,onClick:g,className:"enter-room__button"},j?"\u0412\u0445\u043e\u0434...":"\u0412\u043e\u0439\u0442\u0438"))};a(91);var v=function(e){var t=e.users,a=e.messages,c=e.username,s=e.roomId,o=e.onAddMessage,u=Object(n.useState)(""),l=Object(m.a)(u,2),i=l[0],E=l[1],d=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.current.scrollTo(0,99999)}),[a]),r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"chat-users"},"\u041a\u043e\u043c\u043d\u0430\u0442\u0430: ",r.a.createElement("b",null,s),r.a.createElement("hr",null),r.a.createElement("b",null,"\u041e\u043d\u043b\u0430\u0439\u043d (",t.length,"):"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:e+t},e)})))),r.a.createElement("div",{className:"chat-messages"},r.a.createElement("ul",{ref:d,className:"messages"},a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"message"},r.a.createElement("p",null,e.text),r.a.createElement("div",{className:"message-info"},r.a.createElement("span",null,e.username),r.a.createElement("span",null,e.date))))}))),r.a.createElement("form",null,r.a.createElement("textarea",{value:i,onChange:function(e){return E(e.target.value)},className:"form-control",rows:"3"}),r.a.createElement("button",{onClick:function(){""===i?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"):(p.emit("ROOM:NEW_MESSAGE",{username:c,roomId:s,text:i,date:(new Date).toLocaleTimeString()}),o({username:c,text:i,date:(new Date).toLocaleTimeString()}),E(""))},type:"button",className:"btn-chat"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))};a(92);var g=function(){var e=Object(n.useReducer)(O,{joined:!1,roomId:null,username:null,date:null,users:[],messages:[]}),t=Object(m.a)(e,2),a=t[0],c=t[1],s=function(e){c({type:"SET_USERS",payload:e})},o=function(e){var t=e.text,a=e.username,n=e.date;c({type:"NEW_MESSAGE",payload:{text:t,username:a,date:n}})},i=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"JOINED",payload:t}),p.emit("ROOM:JOIN",t),e.next=4,E.a.get("/rooms/".concat(t.roomId));case 4:a=e.sent,n=a.data,c({type:"SET_DATA",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p.on("ROOM:SET_USERS",s),p.on("ROOM:NEW_MESSAGE",o)}),[]),window.socket=p,r.a.createElement("div",{className:"wrapper"},a.joined?r.a.createElement(v,Object.assign({},a,{onAddMessage:o})):r.a.createElement(j,{onLogin:i}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.186ba6fc.chunk.js.map