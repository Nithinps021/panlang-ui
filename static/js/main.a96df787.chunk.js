(this["webpackJsonppanlang-ui"]=this["webpackJsonppanlang-ui"]||[]).push([[0],{124:function(e,t,a){},161:function(e,t,a){e.exports=a(223)},170:function(e,t,a){e.exports=a.p+"static/media/logo.07da641c.png"},219:function(e,t){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),o=a.n(l),c=(a(124),a(26)),i=a(10),u=a(122),s=a(83);var m=function(){return r.a.createElement(u.a,{bg:"light"},r.a.createElement(u.a.Brand,{as:c.b,to:"/"},r.a.createElement("div",{id:"logo"},r.a.createElement("img",{src:a(170),alt:"Pan-Lang",style:{width:150,height:45}}))),r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{as:c.b,to:"/order"},"Order"),r.a.createElement(s.a.Link,{as:c.b,to:"/stock"},"Stock"),r.a.createElement(s.a.Link,{as:c.b,to:"/order-tracker"},"Order Tracker")))},d=a(8),E=a(73),f=a(29),h=a.n(f),p=a(54),g=a(150),b="https://panlang.herokuapp.com",v=a.n(g).a.create({baseURL:b});function k(){return(k=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.post("/people",t).then((function(e){return!0})).catch((function(e){return!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(n.useState)({month:9,year:2020}),t=Object(d.a)(e,2),a=t[0];return t[1],r.a.createElement("div",null,r.a.createElement("h1",{align:"center",style:{marginBottom:20}},"Welcome to ",r.a.createElement("font",{style:{color:"#26B020"}},"Pan-Lang"),"!"),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/order",style:{color:"white"}},r.a.createElement(E.a,{variant:"success",size:"lg",className:"mb-3",block:!0},"New Order"))),r.a.createElement(c.b,{to:"/stock",style:{color:"white"}},r.a.createElement(E.a,{variant:"success",size:"lg",className:"mb-3",block:!0},"Edit Stock")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"".concat(b).concat("/people","?").concat(new URLSearchParams(a))},r.a.createElement(E.a,{variant:"success",size:"lg",className:"mb-3",block:!0},"Download Order Data")," "))},C=a(52),S=a(71),w=a(17),O=a(231),j=w.b({firstName:w.c().required(),lastName:w.c().required(),adults:w.a().moreThan(-1).required(),children:w.a().moreThan(-1).required(),zipcode:w.a().moreThan(9999).lessThan(1e5).integer().required(),orderNotes:w.c().required()});var I=function(){var e=Object(i.f)();return r.a.createElement(C.a,{style:{backgroundColor:"white",paddingBottom:120}},r.a.createElement("h1",{style:{textAlign:"center"}},"Order"),r.a.createElement(S.a,{validationSchema:j,onSubmit:function(t){e.push("/order-stock",{fromForm:!0,personInfo:t})},initialValues:{firstName:"",lastName:"",adults:-1,children:-1,zipcode:-1,orderNotes:"test"}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=(e.handleBlur,e.values,e.touched),l=(e.isValid,e.errors);return r.a.createElement("div",null,r.a.createElement(O.a,{noValidate:!0,onSubmit:t},r.a.createElement(O.a.Group,{md:"4",controlId:"orderForm1"},r.a.createElement(O.a.Label,null,"First name"),r.a.createElement(O.a.Control,{type:"text",name:"firstName",placeholder:"Enter first name here",onChange:a,isValid:n.firstName&&!l.firstName,isInvalid:!!l.firstName}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement(O.a.Group,{md:"4",controlId:"orderForm2"},r.a.createElement(O.a.Label,null,"Last name"),r.a.createElement(O.a.Control,{type:"text",name:"lastName",placeholder:"Enter last name here",onChange:a,isValid:n.lastName&&!l.lastName,isInvalid:!!l.lastName}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement(O.a.Group,{md:"4",controlId:"orderForm3"},r.a.createElement(O.a.Label,null,"# of Adults"),r.a.createElement(O.a.Control,{type:"number",name:"adults",placeholder:"Enter number of adults in household",onChange:a,isValid:n.adults&&!l.adults,isInvalid:!!l.adults}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement(O.a.Group,{md:"4",controlId:"orderForm4"},r.a.createElement(O.a.Label,null,"# of Children"),r.a.createElement(O.a.Control,{type:"number",name:"children",placeholder:"Enter number of children in household",onChange:a,isValid:n.children&&!l.children,isInvalid:!!l.children}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement(O.a.Group,{md:"4",controlId:"orderForm4"},r.a.createElement(O.a.Label,null,"ZIP Code"),r.a.createElement(O.a.Control,{type:"number",name:"zipcode",placeholder:"Enter your ZIP Code",onChange:a,isValid:n.zipcode&&!l.zipcode,isInvalid:!!l.zipcode}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},r.a.createElement(E.a,{type:"submit",variant:"success",block:!0},"Select order"))))})))},N=a(82),L=a(110),q=a(228),x=a(230);function F(){return z.apply(this,arguments)}function z(){return(z=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/stock");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.post("/stock",t).then((function(e){return!0})).catch((function(e){return!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t){return T.apply(this,arguments)}function T(){return(T=Object(p.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.put("".concat("/stock","/").concat(t),a).then((function(e){return console.log(e),!0})).catch((function(e){return console.error(e),!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=w.b({newCount:w.a().integer().moreThan(-1).required()});var V=function(e){var t=e.show,a=e.handleClose,n=e.getStock,l=e.stockId,o=e.stockName,c=e.stockCount;return r.a.createElement(x.a,{show:t,onHide:a,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(S.a,{validationSchema:R,onSubmit:function(e){console.log(e),B(l,e),a(),n(500)},initialValues:{newCount:-1}},(function(e){var t=e.handleSubmit,n=e.handleChange,l=(e.handleBlur,e.values,e.touched),i=(e.isValid,e.errors);return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},"Edit amount for: ",o)),r.a.createElement(x.a.Body,null,r.a.createElement("p",null,"Current amount: ",c),r.a.createElement(O.a,{noValidate:!0,onSubmit:t},r.a.createElement(O.a.Group,{controlId:"stockCount"},r.a.createElement(O.a.Control,{type:"number",name:"newCount",placeholder:"Insert new item count",onChange:n,isValid:l.newCount&&!i.newCount,isInvalid:!!i.newCount}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")))),r.a.createElement(x.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:a},"Close"),r.a.createElement(E.a,{variant:"success",onClick:t},"Save new amount")))})))};var P=function(e){var t=e.stockItem,a=e.getStock,l=e.lang,o=void 0===l?"name":l,c=Object(n.useState)(!1),i=Object(d.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),h=f[0],p=f[1];return Object(n.useEffect)((function(){p(void 0!==t[o])}),[o,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:{margin:5}},r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Header,{as:"h2"},h?t[o]:t.name,"name"!==o&&h?" ("+t.name+")":""),r.a.createElement(L.a.Text,null,"Amount:"," ",r.a.createElement("font",{style:{fontSize:"1.4em",fontWeight:"bolder"}},t.count)),r.a.createElement(L.a.Text,{style:{textAlign:"right"}},"Last updated:"," ",void 0!==t.timestamp?new Date(t.timestamp).toDateString():"Unavailable"),r.a.createElement(C.a,{style:{display:"flex",alignItems:"center",padding:0}},!h&&r.a.createElement(q.a,{variant:"danger"},"Language unavailable: ",o),r.a.createElement("div",{style:{margin:"auto"}}),r.a.createElement(E.a,{size:"sm",variant:"success",style:{alignSelf:"center"},onClick:function(){return s(!0)}},"Edit amount")))),r.a.createElement(V,{show:u,handleClose:function(){return s(!1)},getStock:a,stockName:h?t[o]:t.name,stockId:t._id,stockCount:t.count}))},H=a(109),G=w.b({name:w.c().required(),count:w.a().integer().moreThan(-1).required()});var _=function(e){var t=e.getStock;return r.a.createElement(H.a,null,r.a.createElement(L.a,null,r.a.createElement(H.a.Toggle,{as:L.a.Header,eventKey:"0"},"Click here to insert a stock item"),r.a.createElement(H.a.Collapse,{eventKey:"0"},r.a.createElement(L.a.Body,null,r.a.createElement(S.a,{validationSchema:G,onSubmit:function(e){t(500),console.log(function(e){return A.apply(this,arguments)}(e))},initialValues:{name:"",count:-1}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=(e.handleBlur,e.values,e.touched),l=(e.isValid,e.errors);return r.a.createElement(O.a,{noValidate:!0,onSubmit:t},r.a.createElement(O.a.Group,{controlId:"stockInputName"},r.a.createElement(O.a.Control,{type:"text",name:"name",placeholder:"Insert item name here",onChange:a,isValid:n.name&&!l.name,isInvalid:!!l.name}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement(O.a.Group,{controlId:"stockInputCount"},r.a.createElement(O.a.Control,{type:"number",name:"count",placeholder:"Insert item count here",onChange:a,isValid:n.count&&!l.count,isInvalid:!!l.count}),r.a.createElement(O.a.Control.Feedback,null,"Looks good!")),r.a.createElement(E.a,{variant:"success",type:"submit"},"Add item to database"))}))))))},D=a(155);var U=function(){return r.a.createElement(D.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},W=["english","spanish","french","chinese"];var K=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),i=c[0],u=c[1],s=Object(n.useState)(W[0]),m=Object(d.a)(s,2),f=m[0],h=m[1];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;l([]),setTimeout((function(){F().then((function(e){l(e.data)})).catch((function(e){return u(!0)}))}),e)}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object(n.useEffect)((function(){p()}),[]),r.a.createElement(C.a,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Stock"),r.a.createElement(C.a,{style:{display:"flex",alignItems:"center",padding:0}},r.a.createElement(N.a,{onChange:function(e){return console.log(e)}},r.a.createElement(N.a.Toggle,{variant:"type",id:"dropdown-basic",size:"md",className:"mb-3",style:{backgroundColor:"green",color:"white"}},"Language: ",r.a.createElement("b",null,g(f))),r.a.createElement(N.a.Menu,null,W.map((function(e){return r.a.createElement(N.a.Item,{onSelect:function(e){return h(e)},eventKey:e,key:e},g(e))})))),r.a.createElement("div",{style:{margin:"auto"}}),r.a.createElement(E.a,{variant:"type",size:"md",onClick:p,style:{backgroundColor:"green",color:"white"}},"Refresh")),r.a.createElement(_,{getStock:p}),0===a.length&&!i&&r.a.createElement(U,null),a&&a.map((function(e){return r.a.createElement(P,{stockItem:e,getStock:p,lang:"english"===f?"name":f,key:e._id})})),i&&r.a.createElement("p",null,"Error :("))},M=a(229);var J=function(e){var t=e.show,a=e.handleClose,l=(e.getStock,e.stockId),o=e.stockName,c=e.stockCount,i=e.onRequest,u=Object(n.useState)(1),s=Object(d.a)(u,2),m=s[0],f=s[1];return r.a.createElement(x.a,{show:t,onHide:a,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},"Select requested amount for: ",o)),r.a.createElement(x.a.Body,null,r.a.createElement("p",null,"Current amount: ",r.a.createElement("b",null,c)),r.a.createElement("p",null,"Amount after order: ",r.a.createElement("b",null,c-m)),r.a.createElement(M.a,{"aria-label":"Stock item request buttons",style:{display:"flex",alignItems:"center"}},r.a.createElement(E.a,{size:"lg",onClick:function(){m>1&&f(m-1)}},"-"),r.a.createElement(E.a,{size:"lg",variant:"secondary",disabled:!0},m),r.a.createElement(E.a,{variant:"success",size:"lg",onClick:function(){m<c&&f(m+1)}},"+"))),r.a.createElement(x.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:a},"Close"),r.a.createElement(E.a,{variant:"success",onClick:function(){var e={id:l,name:o,requestedCount:m,countAfterRequest:c-m};console.log("submitRequest -> stockCount",c),console.log("submitRequest -> selectedAmount",m),console.log("countAfterRequest ->",e.countAfterRequest),i(e),a()}},"Request amount")))};var Z=function(e){var t=e.stockItem,a=e.getStock,l=e.lang,o=void 0===l?"name":l,c=e.onRequest,i=Object(n.useState)(!1),u=Object(d.a)(i,2),s=u[0],m=u[1],f=Object(n.useState)(!1),h=Object(d.a)(f,2),p=h[0],g=h[1];return Object(n.useEffect)((function(){g(void 0!==t[o])}),[o,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:{margin:5}},r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Header,{as:"h2"},p?t[o]:t.name,"name"!==o&&p?" ("+t.name+")":""),r.a.createElement(L.a.Text,null,"Amount:"," ",r.a.createElement("font",{style:{fontSize:"1.4em",fontWeight:"bolder"}},t.count)),r.a.createElement(C.a,{style:{display:"flex",alignItems:"center",padding:0}},!p&&r.a.createElement(q.a,{variant:"danger"},"Language unavailable: ",o),r.a.createElement("div",{style:{margin:"left"}}),r.a.createElement(E.a,{size:"lg",variant:"success",style:{alignSelf:"left"},onClick:function(){return m(!0)}},"Request Item")),r.a.createElement(L.a.Text,{style:{textAlign:"right"}},"Last updated:"," ",void 0!==t.timestamp?new Date(t.timestamp).toDateString():"Unavailable"))),r.a.createElement(J,{show:s,handleClose:function(){return m(!1)},getStock:a,stockName:p?t[o]:t.name,stockId:t._id,stockCount:t.count,onRequest:c}))};var $=function(){var e=Object(i.f)(),t=Object(i.g)(),a=void 0!==t.state,l=a?t.state.personInfo:{},o=Object(n.useState)([]),c=Object(d.a)(o,2),u=c[0],s=c[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),h=f[0],p=f[1],g=Object(n.useState)(W[0]),b=Object(d.a)(g,2),v=b[0],y=b[1],S=Object(n.useState)([]),w=Object(d.a)(S,2),O=w[0],j=w[1];function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s([]),setTimeout((function(){F().then((function(e){s(e.data)})).catch((function(e){return p(!0)}))}),e)}function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}function q(e){j(O.concat(e))}function x(){var e="";return O.forEach((function(t){e+=t.name+": "+t.requestedCount+", "})),e.slice(0,-2)}return Object(n.useEffect)((function(){a?(I(),console.log(l)):e.push("/order")}),[a,e,l]),r.a.createElement(C.a,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Select stock here"),O.map((function(e){return r.a.createElement("p",{key:e.name},e.name,": ",e.requestedCount)})),r.a.createElement(E.a,{variant:"type",className:"mb-3",onClick:function(){!function(e){k.apply(this,arguments)}({firstname:l.firstName,lastname:l.lastName,adults:l.adults,children:l.adults,zipcode:l.zipcode,"order-notes":x(),fulfilled:!1});var t=O.map((function(e){return console.log("making promise... ",e.countAfterRequest),B(e.id,{newCount:e.countAfterRequest})}));Promise.all(t).then((function(e){return console.log(e)})),e.push("/")},block:!0},"Submit request"),r.a.createElement(C.a,{style:{display:"flex",alignItems:"center",padding:0}},r.a.createElement(N.a,{variant:"type",onChange:function(e){return console.log(e)}},r.a.createElement(N.a.Toggle,{variant:"type",id:"dropdown-basic",size:"md",className:"mb-3",style:{backgroundColor:"green",color:"white"}},"Language: ",r.a.createElement("b",null,L(v))),r.a.createElement(N.a.Menu,null,W.map((function(e){return r.a.createElement(N.a.Item,{onSelect:function(e){return y(e)},eventKey:e,key:e},L(e))})))),r.a.createElement("div",{style:{margin:"auto"}}),r.a.createElement(E.a,{variant:"type",size:"md",onClick:I,style:{backgroundColor:"green",color:"white"}},"Refresh")),0===u.length&&!h&&r.a.createElement(U,null),u&&a&&u.map((function(e){return r.a.createElement(Z,{stockItem:e,getStock:I,lang:"english"===v?"name":v,key:e._id,onRequest:q})})),h&&r.a.createElement("p",null,"Error"))},Q=a(157),X=a.n(Q);var Y=function(e){var t=e.person,a=e.show,n=e.handleClose,l=e.fulfillPerson;return r.a.createElement(x.a,{show:a,onHide:n,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(x.a.Header,null,"Confirm fulfillment"),r.a.createElement(x.a.Body,null,r.a.createElement("h5",null,"Are you sure that ",t.firstname,"'s order is correct and has been fulfilled?"),r.a.createElement("p",null,t["order-notes"])),r.a.createElement(x.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:n},"Close"),r.a.createElement(E.a,{variant:"success",onClick:function(){l(t._id),n()}},"Confirm fulfillment")))};var ee=function(e){var t=e.person,a=e.fulfillPerson,l=Object(n.useState)(!1),o=Object(d.a)(l,2),c=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{key:t._id,size:"lg",style:{margin:5}},r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Header,{as:"h2"},t.firstname," ",t.lastname),r.a.createElement(L.a.Text,null,t["order-notes"]),r.a.createElement(E.a,{variant:"success",onClick:function(){return i(!0)},block:!0},"Fulfill Order"))),r.a.createElement(Y,{person:t,show:c,handleClose:function(){return i(!1)},fulfillPerson:a}))};var te=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],o=X()(b);function c(e){o.emit("personFulfilled",e),l(a.filter((function(t){return t._id!==e})))}return Object(n.useEffect)((function(){o.on("person",(function(t){console.log(t),e(t)}));var e=function(e){l(a.concat(e))};return function(){console.log("effect done"),o.off("person",e)}}),[]),r.a.createElement(C.a,null,0===a.length&&r.a.createElement("p",null,"No orders at the moment."),a&&a.map((function(e){return r.a.createElement(ee,{fulfillPerson:c,person:e,key:e._id})})))};var ae=function(){return r.a.createElement(c.a,{basename:"/panlang-ui"},r.a.createElement(m,{"\xe7":!0}),r.a.createElement("br",null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(i.a,{path:"/stock"},r.a.createElement(K,null)),r.a.createElement(i.a,{path:"/order"},r.a.createElement(I,null)),r.a.createElement(i.a,{path:"/order-stock"},r.a.createElement($,null)),r.a.createElement(i.a,{path:"/order-tracker"},r.a.createElement(te,null)),r.a.createElement(i.a,{path:"*"},r.a.createElement("h1",null,"Welcome to ",r.a.createElement("font",{style:{color:"#26B020"}},"Pan-Lang"),"!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(222);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.a96df787.chunk.js.map