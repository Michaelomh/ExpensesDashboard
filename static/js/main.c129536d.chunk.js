(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/avatar.3feef4ad.png"},126:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(27),c=a.n(l),o=(a(71),a(15)),i=a(16),u=a(18),s=a(17),m=a(19),h=(a(73),a(137)),p=a(138),d=a(58),f=a(28),v=a(127),E=a(128),b=a(134),O=a(129),j=a(136),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).login=function(){console.log("login!"),console.log("process.env.PUBLIC_URL=","/ExpensesDashboard"),a.setState(function(){return{redirectToReferrer:!0}})},a.state={username:"",password:"",redirectToReferrer:!1},a.handleInputChange=a.handleInputChange.bind(Object(f.a)(Object(f.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target.value,a=e.target.name;this.setState(Object(d.a)({},a,t))}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/overview"}}).from;return!0===this.state.redirectToReferrer?r.a.createElement(j.a,{to:e}):r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange,placeholder:"Username"}),r.a.createElement(b.a,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange,placeholder:"Password"}),r.a.createElement(O.a,{bsStyle:"primary",onClick:this.login},"Primary"))))}}]),t}(n.Component),g=a(133),y=a(130),C=a(131),k=a(132),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{inverse:!0,collapseOnSelect:!0,fluid:!0},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Brand,null,r.a.createElement(y.a,{src:a(125)})),r.a.createElement(g.a.Toggle,null)),r.a.createElement(g.a.Collapse,null,r.a.createElement(C.a,{pullRight:!0},r.a.createElement(k.a,{href:"/"},"Login"),r.a.createElement(k.a,{href:"overview"},"Overview"),r.a.createElement(k.a,{href:"monthview"},"Month View"),r.a.createElement(k.a,{href:"yearview"},"Year View")))))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null),"Start of Overview Page")}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:w}),r.a.createElement(p.a,{path:"/overview",component:x}),r.a.createElement(p.a,{path:"/yearview",component:x}),r.a.createElement(p.a,{path:"/monthview",component:x})))}}]),t}(n.Component),S=a(135);c.a.render(r.a.createElement(S.a,{basename:"/ExpensesDashboard"},r.a.createElement(R,null)),document.getElementById("root"))},66:function(e,t,a){e.exports=a(126)},71:function(e,t,a){},73:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.c129536d.chunk.js.map