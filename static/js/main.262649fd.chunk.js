(this["webpackJsonpcontact-us"]=this["webpackJsonpcontact-us"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),r=a.n(m),s=(a(15),a(4)),i=a(5),o=a(8),c=a(6),u=a(1),h=a(9),d=a(7),E=a.n(d),b={key:Object({NODE_ENV:"production",PUBLIC_URL:"/Contact-from-the-client-side"}).REACT_APP_USER_ID},f=b.key,g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).handleEmailChange=function(t){t.preventDefault(),e.setState({email:t.target.value})},e.nameChange=function(t){t.preventDefault(),e.setState({name:t.target.value})},e.messageChange=function(t){t.preventDefault(),e.setState({message:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.name,n={email:e.state.email,from_name:a,to_name:"Alchemical Mind",message_html:e.state.message};E.a.send("default_service","<your template_id>",n,f).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),e.setState({submit:!0}),e.reset()},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e.state={name:"",email:"",message:"",submit:!1},e.handleEmailChange=e.handleEmailChange.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"reset",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){var e;return e=this.state.submit?l.a.createElement("div",{className:"response"},l.a.createElement("h1",null,"Thank you for Contacting Alchemical Mind!"),l.a.createElement("p",null,"Please allow us time to review your request and we will be in contact with you within the next 48hrs!")):l.a.createElement("div",null,l.a.createElement("h3",{className:"mt-2 mb-4 formTitle"},"Contact Us"),l.a.createElement("form",{id:"contact-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Name"},"Name ",l.a.createElement("i",null,"(required)")),l.a.createElement("input",{onChange:this.nameChange,ref:"input",type:"text",value:this.state.name,className:"form-control mt-2 mb-5",id:"Name",placeholder:""}),l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address ",l.a.createElement("i",null,"(required)")),l.a.createElement("input",{type:"text",name:"email",ref:"input",value:this.state.email,onChange:this.handleEmailChange,className:"form-control mt-2 mb-5"}),l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Message/Comments ",l.a.createElement("i",null,"(required)")),l.a.createElement("textarea",{value:this.state.message,ref:"input",className:"form-control mt-2 mb-5",id:"exampleFormControlTextarea1",rows:"7",onChange:this.messageChange}),l.a.createElement("button",{className:"btn btn-primary btn-lg mb-3",onClick:this.handleSubmit},"Submit")))),l.a.createElement("div",{className:"container mb-5"},l.a.createElement("div",{className:"row-fluid justify-content-center"},l.a.createElement("div",{className:"col"},e)))}}]),t}(n.Component);a(18);var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"jumbotron backgroundImg "},l.a.createElement("div",{className:"row-fluid"},l.a.createElement("div",{className:"col textCss"},l.a.createElement("h1",{className:"display-3"},"Sending Email from the Front-End with Email.js"),l.a.createElement("p",{className:"display-4"},"When a quick client side tool is needed"),l.a.createElement("p",{className:"lead"},l.a.createElement("a",{className:"btn btn-primary btn-lg",href:"https://www.emailjs.com/",role:"button"},"Learn more"))))),l.a.createElement(g,null),l.a.createElement("nav",{class:"navbar fixed-bottom navbar-light "},l.a.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/natosha-arringtion-676263165/"},l.a.createElement("p",null,"Created by Natosha Arrington"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.262649fd.chunk.js.map