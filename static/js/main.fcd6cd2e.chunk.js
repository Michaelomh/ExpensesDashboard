(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a.p+"static/media/Expenyse Logo (Green) + Text.30b1d712.png"},148:function(e,t,a){e.exports=a.p+"static/media/Expenyse Horizontal (black).f199788c.png"},186:function(e,t,a){},188:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),c=(a(91),a(93),a(9)),l=a(10),i=a(13),m=a(11),u=a(12),d=(a(95),a(206)),h=a(204),p=a(29),E=a(16),v=a(100),b=a(191),f=a(192),g=a(193),y=a(194),C=a(203),O=a(195),w=a(202),S=a(205),x=a(200),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).login=function(){"Guardian07"===a.state.password?a.setState(function(){return{redirectToReferrer:!0,toRedirect:"/overview"}}):a.setState(function(){return{errorMsg:"Incorrect Username/Password",showError:"block"}})},a.addTransactionHandle=function(){a.setState(function(){return{redirectToReferrer:!0,toRedirect:"/add"}})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(p.a)({},n,t))},a.onEnterPress=function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),a.login())},a.state={username:"michaelomh",password:"Guardian07",redirectToReferrer:!1,showError:"None",errorMsg:"",toRedirect:""},a.handleInputChange=a.handleInputChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(window.innerWidth),window.innerWidth<=480&&this.setState(function(){return{redirectToReferrer:!0,toRedirect:"/add"}})}},{key:"render",value:function(){var e=this.state.redirectToReferrer,t={from:{pathname:this.state.toRedirect}}.from;return!0===e?r.a.createElement(x.a,{to:t}):r.a.createElement("div",{className:"login-container"},r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:10,xsPush:1,md:4,mdPush:4},r.a.createElement(g.a,{responsive:!0,src:a(131),className:"login-logo",onClick:this.addTransactionHandle}),r.a.createElement(y.a,null,r.a.createElement(C.a,{className:"login-form-group"},r.a.createElement(O.a,null,"USERNAME"),r.a.createElement(w.a,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange,autoComplete:"off"}),r.a.createElement(O.a,null,"PASSWORD"),r.a.createElement(w.a,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange,onKeyDown:this.onEnterPress}),r.a.createElement(S.a,{bsStyle:"primary",onClick:this.login},"LOGIN"),r.a.createElement("div",{className:"login-error",style:{display:this.state.showError}},r.a.createElement("span",null,this.state.errorMsg))))))))}}]),t}(n.Component),k=a(199),I=a(196),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{inverse:!0,collapseOnSelect:!0,fluid:!0},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Brand,null,r.a.createElement(g.a,{src:a(148)})),r.a.createElement(k.a.Toggle,null)),r.a.createElement(k.a.Collapse,null,r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"navbar-list"},r.a.createElement(I.a,{to:"/"},"Login")),r.a.createElement("li",{className:"navbar-list"},r.a.createElement(I.a,{to:"/overview"},"Overview")),r.a.createElement("li",{className:"navbar-list"},r.a.createElement(I.a,{to:"/records"},"Records")),r.a.createElement("li",{className:"navbar-list"},r.a.createElement(I.a,{to:"/add"},"Add"))))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),"Start of Overview")}}]),t}(n.Component),T=a(44),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"record-panel"},r.a.createElement(b.a,{className:"record-filter-container"},r.a.createElement(f.a,{xs:12,md:4,onClick:this.props.handleClick("expense")},r.a.createElement("span",{className:"record-filter-text"},"Expenses")),r.a.createElement(f.a,{xs:12,md:4,onClick:this.props.handleClick("active")},r.a.createElement("span",{className:"record-filter-text"},"Active Income")),r.a.createElement(f.a,{xs:12,md:4,onClick:this.props.handleClick("passive")},r.a.createElement("span",{className:"record-filter-text"},"Passive Income"))))}}]),t}(n.Component),D=a(197),R=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"convertSecondsToDate",value:function(e){console.log(e);var t=new Date(0);return t.setUTCSeconds(e),console.log(t),t.getMonth()+"-"+t.getFullYear()}},{key:"render",value:function(){return console.log(this.props.timestamp),r.a.createElement("tr",null,r.a.createElement("td",null,this.convertSecondsToDate(this.props.monthyear)),r.a.createElement("td",null,this.props.category),r.a.createElement("td",null,"$",this.props.amount),r.a.createElement("td",null,this.props.notes))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.expensesData;return r.a.createElement("div",{className:"expenses-panel record-panel"},r.a.createElement("h1",null,"Total Expenses"),r.a.createElement("div",{className:"record-table"},r.a.createElement(D.a,{condensed:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Timestamp"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement(R,{key:e.timestamp+"-"+e.amount+"-"+e.description+"-"+e.category,timestamp:e.timestamp,amount:e.amount,category:e.category,notes:e.description})})))))}}]),t}(n.Component),F=a(132),P=a(198),J=a(26),B=a(56);a(163);B.initializeApp({apiKey:"AIzaSyC3J9LQuddHlGF8ePfEQ55NnJXBcvIHADU",authDomain:"expensestrackerdashboard.firebaseapp.com",databaseURL:"https://expensestrackerdashboard.firebaseio.com",projectId:"expensestrackerdashboard",storageBucket:"expensestrackerdashboard.appspot.com",messagingSenderId:"345268338397"});var L=B,q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(p.a)({},n,t))},a.submitNewRecord=function(){var e=L.firestore();e.settings({timestampsInSnapshots:!0}),e.collection(a.props.dbToConnect).add({monthyear:parseInt(a.convertToEpochSeconds()),amount:parseInt(a.state.amount),notes:a.state.notes}).then(function(e){J.toast.success("Record submiited to database",{position:"bottom-right",autoClose:3e3}),a.setDate(),a.setActiveIncome()}).catch(function(e){J.toast.error("An error has occured, please try again later",{position:"bottom-right",autoClose:!1})})},a.componentWillMount=function(){a.setDate(),a.setActiveIncome()},a.setActiveIncome=function(){a.props.salary&&a.props.notes?a.setState({amount:a.props.salary,notes:a.props.notes}):a.setState({amount:0,notes:""})},a.setDate=function(){var e=new Date;a.setState({month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],year:e.getFullYear()})},a.state={show:!1,month:"",year:"",amount:0,notes:""},a.handleInputChange=a.handleInputChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"convertToEpochSeconds",value:function(){return new Date(this.state.year+"-"+this.getMonth(this.state.month)+"-01").getTime()/1e3}},{key:"getMonth",value:function(e){return new Date(e+"-1-01").getMonth()+1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.a,{show:this.props.show,onHide:this.props.handleClose,bsSize:"sm"},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Title,null,"Add Record"),r.a.createElement("span",{className:"modal-subtitle"},"ActiveIncome"===this.props.dbToConnect?"for active income":"for passive income")),r.a.createElement(P.a.Body,null,r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{md:6},r.a.createElement(O.a,null,"MONTH"),r.a.createElement(w.a,{componentClass:"select",className:"record-input",name:"month",value:this.state.month,onChange:this.handleInputChange},r.a.createElement("option",{value:"Jan"},"Jan"),r.a.createElement("option",{value:"Feb"},"Feb"),r.a.createElement("option",{value:"Mar"},"Mar"),r.a.createElement("option",{value:"Apr"},"Apr"),r.a.createElement("option",{value:"May"},"May"),r.a.createElement("option",{value:"Jun"},"Jun"),r.a.createElement("option",{value:"Jul"},"Jul"),r.a.createElement("option",{value:"Aug"},"Aug"),r.a.createElement("option",{value:"Sep"},"Sep"),r.a.createElement("option",{value:"Oct"},"Oct"),r.a.createElement("option",{value:"Nov"},"Nov"),r.a.createElement("option",{value:"Dec"},"Dec"))),r.a.createElement(f.a,{md:6},r.a.createElement(O.a,null,"YEAR"),r.a.createElement(w.a,{name:"year",type:"number",className:"record-input",value:this.state.year,onChange:this.handleInputChange}))),r.a.createElement(O.a,null,"AMOUNT"),r.a.createElement(w.a,{name:"amount",type:"number",className:"record-input",value:this.state.amount,onChange:this.handleInputChange}),r.a.createElement(O.a,null,"NOTES"),r.a.createElement(w.a,{name:"notes",type:"text",className:"record-input",value:this.state.notes,onChange:this.handleInputChange})))),r.a.createElement(P.a.Footer,null,r.a.createElement("div",{id:"record-modal-close",onClick:this.props.handleClose},r.a.createElement(F.a,{glyph:"remove"})," CLOSE"),r.a.createElement("div",{id:"record-modal-submit",onClick:this.submitNewRecord},r.a.createElement(F.a,{glyph:"plus"})," SUBMIT"))))}}]),t}(n.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"convertSecondsToDate",value:function(e){var t=new Date(0);return t.setUTCSeconds(e),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+"-"+t.getFullYear()}},{key:"render",value:function(){return console.log(this.props.monthyear+"-----"),r.a.createElement("tr",null,r.a.createElement("td",null,this.convertSecondsToDate(this.props.monthyear)),r.a.createElement("td",null,"$ ",this.props.amount),r.a.createElement("td",null,this.props.notes))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={showRecordsModal:!1},a.showRecordsModal=a.showRecordsModal.bind(Object(E.a)(Object(E.a)(a))),a.handleClose=a.handleClose.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClose",value:function(){document.getElementById("root").style.filter="blur(0px)",this.setState({showRecordsModal:!1}),this.props.handleClose(this.props.panelType)}},{key:"showRecordsModal",value:function(){document.getElementById("root").style.filter="blur(5px)",this.setState({showRecordsModal:!0})}},{key:"render",value:function(){var e=this.props.activeIncomeData;return r.a.createElement("div",{className:"active-panel record-panel"},r.a.createElement("h1",null,"Active Income Records",r.a.createElement(F.a,{glyph:"plus",className:"pull-right",onClick:this.showRecordsModal})),r.a.createElement("div",{className:"record-table"},r.a.createElement(D.a,{condensed:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Month-Year"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement(z,{key:e.monthyear+"-"+e.amount+"-"+e.notes,monthyear:e.monthyear.seconds,amount:e.amount,notes:e.notes})})))),r.a.createElement(q,{show:this.state.showRecordsModal,handleClose:this.handleClose.bind(this),dbToConnect:this.props.panelType,salary:4e3,notes:"Salary"}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={showRecordsModal:!1},a.showRecordsModal=a.showRecordsModal.bind(Object(E.a)(Object(E.a)(a))),a.handleClose=a.handleClose.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClose",value:function(){document.getElementById("root").style.filter="blur(0px)",this.setState({showRecordsModal:!1}),this.props.handleClose(this.props.panelType)}},{key:"showRecordsModal",value:function(){document.getElementById("root").style.filter="blur(5px)",this.setState({showRecordsModal:!0})}},{key:"render",value:function(){var e=this.props.passiveIncomeData;return r.a.createElement("div",{className:"passive-panel record-panel"},r.a.createElement("h1",null,"Passive Income Records",r.a.createElement(F.a,{glyph:"plus",className:"pull-right",onClick:this.showRecordsModal})),r.a.createElement("div",{className:"record-table"},r.a.createElement(D.a,{condensed:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Month-Year"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,e.map(function(e){return r.a.createElement(z,{key:e.monthyear+"-"+e.amount+"-"+e.notes,monthyear:e.monthyear,amount:e.amount,notes:e.notes})})))),r.a.createElement(q,{show:this.state.showRecordsModal,handleClose:this.handleClose,dbToConnect:this.props.panelType}))}}]),t}(n.Component),G=(a(186),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={activeIncome:[],passiveIncome:[],showExpenses:!0,showActive:!0,showPassive:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=L.firestore();e.settings({timestampsInSnapshots:!0}),this.queryPassiveIncome(e),this.queryActiveIncome(e),this.queryExpenses(e)}},{key:"queryActiveIncome",value:function(e){var t=this;this.setState({activeIncome:[]}),e.collection("ActiveIncome").get().then(function(e){e.docs.forEach(function(e){t.setState(function(t){return{activeIncome:Object(T.a)(t.activeIncome).concat([e.data()])}})})})}},{key:"queryPassiveIncome",value:function(e){var t=this;this.setState({passiveIncome:[]}),e.collection("PassiveIncome").get().then(function(e){e.docs.forEach(function(e){t.setState(function(t){return{passiveIncome:Object(T.a)(t.passiveIncome).concat([e.data()])}})})})}},{key:"queryExpenses",value:function(e){var t=this;this.setState({expenses:[]}),e.collection("Expenses").get().then(function(e){e.docs.forEach(function(e){t.setState(function(t){return{expenses:Object(T.a)(t.expenses).concat([e.data()])}})})})}},{key:"handleClick",value:function(e){}},{key:"handleClose",value:function(e){if("ActiveIncome"===e){var t=L.firestore();t.settings({timestampsInSnapshots:!0}),this.queryActiveIncome(t)}else if("PassiveIncome"===e){var a=L.firestore();a.settings({timestampsInSnapshots:!0}),this.queryPassiveIncome(a)}else console.log("E")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",null,r.a.createElement(M,{handleClick:this.handleClick})),r.a.createElement("div",{className:"record-container"},r.a.createElement(H,{expensesData:this.state.expenses,className:this.state.showExpenses?"hidden":""}),r.a.createElement(U,{activeIncomeData:this.state.activeIncome,className:this.state.showActive?"hidden":"",panelType:"ActiveIncome",handleClose:this.handleClose.bind(this,"ActiveIncome")}),r.a.createElement(Y,{passiveIncomeData:this.state.passiveIncome,className:this.state.showPassive?"hidden":"",panelType:"PassiveIncome",handleClose:this.handleClose.bind(this,"PassiveIncome")}))))}}]),t}(n.Component)),W=(a(188),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).moveToOverview=function(){a.setState(function(){return{moveToOverview:!0}})},a.componentWillMount=function(){a.setState({date:a.populateDateTime(!0),time:a.populateDateTime(!1)})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(p.a)({},n,t))},a.handleCategory=function(e){var t=e.target.id;a.setState(function(){return{category:t}}),document.querySelectorAll(".btn-outline-secondary").forEach(function(e){e.classList.remove("btn-active")}),e.target.classList.add("btn-active")},a.handleCalculator=function(e){var t=a.state.currentAmt,n=e.target.id[e.target.id.length-1];"l"===n?1===t.length||0===t?a.setState(function(){return{currentAmt:0}}):a.setState(function(){return{currentAmt:a.state.currentAmt.toString().substr(0,a.state.currentAmt.length-1)}}):"t"===n?t.toString().includes(".")||(0===t.length?a.setState(function(){return{currentAmt:"0"+a.state.currentAmt+"."}}):a.setState(function(){return{currentAmt:a.state.currentAmt+"."}})):t.toString().substr(t.toString().indexOf("."),t.length-1).length>2||("0"!==t.toString().substr(0,1)||t.toString().includes(".")?a.setState(function(){return{currentAmt:a.state.currentAmt+n}}):a.setState(function(){return{currentAmt:a.state.currentAmt.toString().substr(1,a.state.currentAmt.length)+n}}));var r=a.state.currentAmt;9===r.length?"l"===n?a.setState(function(){return{currentAmt:a.state.currentAmt.toString().substr(0,a.state.currentAmt.length-1)}}):a.setState(function(){return{currentAmt:r}}):r.length>6?a.setState(function(){return{fontSize:"3.5em",lineHeight:"3.5em"}}):a.setState(function(){return{fontSize:"4em",lineHeight:"3em"}})},a.handleAddingTransaction=function(){var e=L.firestore();e.settings({timestampsInSnapshots:!0}),e.collection("Expenses").add({timestamp:parseInt(a.convertToEpochSeconds()),description:a.state.description,category:a.state.category,amount:parseFloat(a.state.currentAmt)}).then(function(e){J.toast.success("Record submitted to database",{position:"bottom-right",autoClose:1500}),a.setState({date:a.populateDateTime(!0),time:a.populateDateTime(!1),description:"",category:"Food",currentAmt:0}),document.querySelectorAll(".btn-outline-secondary").forEach(function(e){"Food"===e.id?e.classList.add("btn-active"):e.classList.remove("btn-active")})}).catch(function(e){J.toast.error("An error has occured, please try again later",{position:"bottom-right",autoClose:!1})})},a.handleTemplate=function(e){switch(parseInt(e.target.id.substr(e.target.id.length-1,3))){case 1:a.setState(function(){return{currentAmt:2,description:"Coffee",category:"Food"}});break;case 2:a.setState(function(){return{currentAmt:0,description:"Meal",category:"Food"}});break;case 3:case 4:case 5:case 6:case 7:a.setState(function(){return{currentAmt:0,description:"",category:"Food"}});break;default:console.log("error, template not set up yet")}},a.state={date:"",time:"",description:"",category:"Food",moveToOverview:!1,currentAmt:0,fontSize:"4em",lineHeight:"3em"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"populateDateTime",value:function(e){var t=new Date;return e?(t.getDate()<10?"0"+t.getDate():t.getDate())+"/"+(t.getMonth()+1<10?"0"+t.getMonth()+1:t.getMonth()+1):(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}},{key:"convertToEpochSeconds",value:function(){return new Date((new Date).getFullYear(),parseInt(this.state.date.substr(3,2)),parseInt(this.state.date.substr(0,2)),parseInt(this.state.time.substr(3,2)),parseInt(this.state.time.substr(0,2)),0).getTime()/1e3}},{key:"render",value:function(){if(!0===this.state.moveToOverview){var e={pathname:"/overview"};return r.a.createElement(x.a,{to:e})}return r.a.createElement("div",{className:"Add-Container"},r.a.createElement(v.a,{style:{padding:"0px"}},r.a.createElement(b.a,null,r.a.createElement(f.a,{xs:12,className:"add-row-title add-row"},r.a.createElement("h1",{onClick:this.moveToOverview},"Add Transaction"))),r.a.createElement(b.a,{className:"add-row-mainRow add-row"},r.a.createElement(f.a,{xs:3},r.a.createElement("h3",null,"Add"),r.a.createElement("h2",null,"SGD")),r.a.createElement(f.a,{xs:9},r.a.createElement("span",{id:"transaction-amt",style:{fontSize:this.state.fontSize,lineHeight:this.state.lineHeight}},this.state.currentAmt))),r.a.createElement(b.a,{className:"add-row-form add-row"},r.a.createElement(f.a,{xs:12},r.a.createElement("input",{type:"text",className:"form-control form-notes",name:"description",placeholder:"description",value:this.state.description,onChange:this.handleInputChange,autoComplete:"off"}))),r.a.createElement(b.a,{className:"add-row-form add-row"},r.a.createElement(f.a,{xs:6},r.a.createElement("input",{type:"text",className:"form-control form-date",name:"date",placeholder:"DD/MM",value:this.state.date,onChange:this.handleInputChange})),r.a.createElement(f.a,{xs:6},r.a.createElement("input",{type:"text",className:"form-control form-time",name:"time",placeholder:"HH:MM",value:this.state.time,onChange:this.handleInputChange}))),r.a.createElement(b.a,{className:"add-row-category add-row"},r.a.createElement(f.a,{xs:4},r.a.createElement(S.a,{type:"button",id:"Food",className:"btn btn-active btn-outline-secondary",onClick:this.handleCategory},"Food")),r.a.createElement(f.a,{xs:4},r.a.createElement(S.a,{type:"button",id:"Transport",className:"btn btn-outline-secondary",onClick:this.handleCategory},"Transport")),r.a.createElement(f.a,{xs:4},r.a.createElement(S.a,{type:"button",id:"Holidays",className:"btn btn-outline-secondary",onClick:this.handleCategory},"Holidays"))),r.a.createElement(b.a,{className:"add-row-category add-row"},r.a.createElement(f.a,{xs:4},r.a.createElement(S.a,{type:"button",id:"Activities",className:"btn btn-outline-secondary",onClick:this.handleCategory},"Activities")),r.a.createElement(f.a,{xs:4},r.a.createElement(S.a,{type:"button",id:"Shopping",className:"btn btn-outline-secondary",onClick:this.handleCategory},"Shopping")),r.a.createElement(f.a,{xs:4},r.a.createElement(S.a,{type:"button",id:"Others",className:"btn btn-outline-secondary",onClick:this.handleCategory},"Others"))),r.a.createElement(b.a,{style:{marginTop:"15px"}},r.a.createElement(f.a,{xs:9},r.a.createElement(b.a,{className:"add-row add-row-calculator",onClick:this.handleCalculator},r.a.createElement(f.a,{xs:4,id:"calc-7"},"7"),r.a.createElement(f.a,{xs:4,id:"calc-8"},"8"),r.a.createElement(f.a,{xs:4,id:"calc-9"},"9")),r.a.createElement(b.a,{className:"add-row add-row-calculator",onClick:this.handleCalculator},r.a.createElement(f.a,{xs:4,id:"calc-4"},"4"),r.a.createElement(f.a,{xs:4,id:"calc-5"},"5"),r.a.createElement(f.a,{xs:4,id:"calc-6"},"6")),r.a.createElement(b.a,{className:"add-row add-row-calculator",onClick:this.handleCalculator},r.a.createElement(f.a,{xs:4,id:"calc-1"},"1"),r.a.createElement(f.a,{xs:4,id:"calc-2"},"2"),r.a.createElement(f.a,{xs:4,id:"calc-3"},"3")),r.a.createElement(b.a,{className:"add-row add-row-calculator",onClick:this.handleCalculator},r.a.createElement(f.a,{xs:4,id:"calc-dot"},"."),r.a.createElement(f.a,{xs:4,id:"calc-0"},"0"),r.a.createElement(f.a,{xs:4,id:"calc-del"},"-"))),r.a.createElement(f.a,{xs:3,style:{paddingLeft:"0px"}},r.a.createElement("div",{className:"add-row add-row-templates"},r.a.createElement("div",{className:"template-box",id:"template-1",onClick:this.handleTemplate},"Coffee"),r.a.createElement("div",{className:"template-box",id:"template-2",onClick:this.handleTemplate},"Meals"),r.a.createElement("div",{className:"template-box",id:"template-3",onClick:this.handleTemplate},"T3"),r.a.createElement("div",{className:"template-box",id:"template-4",onClick:this.handleTemplate},"T4"),r.a.createElement("div",{className:"template-box",id:"template-5",onClick:this.handleTemplate},"T5"),r.a.createElement("div",{className:"template-box",id:"template-6",onClick:this.handleTemplate},"T6"),r.a.createElement("div",{className:"template-box",id:"template-7",onClick:this.handleTemplate},"T7")),r.a.createElement("div",{className:"add-row add-row-calculator"},r.a.createElement("div",{onClick:this.handleAddingTransaction},r.a.createElement("p",{id:"calc-add"},"Add")))))))}}]),t}(n.Component)),K=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/overview",component:A}),r.a.createElement(h.a,{exact:!0,path:"/records",component:G}),r.a.createElement(h.a,{exact:!0,path:"/add",component:W})))}}]),t}(n.Component),Q=a(201);s.a.render(r.a.createElement(Q.a,{basename:"/ExpensesDashboard"},r.a.createElement(K,null)),document.getElementById("root")),s.a.render(r.a.createElement("div",null,r.a.createElement(J.ToastContainer,{newestOnTop:!1,rtl:!1,draggable:!0,pauseOnHover:!0,pauseOnVisibilityChange:!1,closeOnClick:!0})),document.getElementById("toastr"))},86:function(e,t,a){e.exports=a(190)},93:function(e,t,a){},95:function(e,t,a){}},[[86,2,1]]]);
//# sourceMappingURL=main.fcd6cd2e.chunk.js.map