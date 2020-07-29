(this["webpackJsonpsign-up-task"]=this["webpackJsonpsign-up-task"]||[]).push([[0],{65:function(e,a,t){e.exports=t(78)},70:function(e,a,t){},71:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(8),o=t.n(l),i=(t(70),t(71),t(37)),c=t(110),s=t(107),m=Object(s.a)((function(e){return{headerWrapper:{gridArea:"1 / 1 / 2 / 6",backgroundColor:"#dbe0f6",display:"flex",justifyContent:"flex-end",alignItems:"center"},item:{margin:"20px",textDecoration:"none",textAlign:"center"}}})),p=function(){var e=m();return n.a.createElement("div",{className:e.headerWrapper},n.a.createElement(i.b,{to:"/signUp",className:e.item},n.a.createElement(c.a,{variant:"contained",color:"primary"},"Sign Up")),n.a.createElement(i.b,{to:"/signIn",className:e.item},n.a.createElement(c.a,{variant:"contained",color:"primary"},"Sign In")))},d=t(10),u=function(e){return function(a){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(e,a))}},h=t(21),f=t(12),g=t(22),b=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";switch(e){case"firstName":case"lastName":return""===a?{error:!0,helperText:"Field is empty"}:a.length>100?{error:!0,helperText:"Maximum 100 characters allowed"}:{error:!1,helperText:""};case"email":return""===a?{error:!0,helperText:"Field is empty"}:a.match(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?{error:!1,helperText:""}:{error:!0,helperText:"Enter valid email"};case"password":return""===a?{error:!0,helperText:"Field is empty"}:a.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/)?{error:!1,helperText:""}:{error:!0,helperText:"Password must include 8-64 characters: lowercase, uppercase, digit, symbol"};case"confirmPassword":return a!==t?{error:!0,helperText:"Confirmed password doesn't match the password"}:{error:!1,helperText:""}}},x=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:"25ch"}},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"100ch"},input:{margin:e.spacing(1)},email:{margin:e.spacing(1),width:"100ch"},form:{display:"flex",flexWrap:"wrap",width:"500px",justifyContent:"space-between",boxShadow:"0px 5px 10px #555"},header:{width:"100%",textAlign:"center",fontFamily:"Roboto"},button:{width:"100%",margin:e.spacing(1)},error:{color:"#f44336",fontFamily:"Roboto",fontSize:"12px",margin:"3px 14px 0px"},headerWrapper:{gridArea:"1 / 1 / 2 / 6",backgroundColor:"#dbe0f6",display:"flex",justifyContent:"flex-end",alignItems:"center"},item:{margin:"20px",textDecoration:"none",textAlign:"center"}}})),w=function(e){var a=x();return n.a.createElement(c.a,{className:a.button,variant:e.variant,color:e.color,type:e.type,onClick:e.onClick},e.text)},v=t(3),E=t(112),C=t(116),y=t(115),j=t(117),O=t(114),T=t(55),N=t.n(T),S=t(56),P=t.n(S),k=function(e){var a=n.a.useState({showPassword:!1}),t=Object(g.a)(a,2),r=t[0],l=t[1],o=x();return n.a.createElement(O.a,{className:Object(v.a)(o.margin,o.textField),variant:"outlined"},n.a.createElement(y.a,{htmlFor:"outlined-adornment-password"},e.label),n.a.createElement(C.a,{id:"outlined-adornment-".concat(e.label),type:r.showPassword?"text":"password",error:e.error,value:e.value||"",onChange:e.handleChange,autoComplete:"new-password",endAdornment:n.a.createElement(j.a,{position:"end"},n.a.createElement(E.a,{"aria-label":"toggle password visibility",onClick:function(){l(Object(f.a)(Object(f.a)({},r),{},{showPassword:!r.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end"},r.showPassword?n.a.createElement(N.a,null):n.a.createElement(P.a,null))),labelWidth:e.labelWidth}),n.a.createElement("p",{className:o.error,id:"outlined-basic-helper-text"},e.helperText))},A=t(113),F=function(e){x();return n.a.createElement(A.a,{className:e.classes,id:"outlined-basic-".concat(e.label),label:e.label,variant:"outlined",value:e.value||"",type:e.type,placeholder:e.placeholder,error:e.error,helperText:e.helperText,autoComplete:e.autocomplete||"",onChange:e.handleChange})},I=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:"25ch"}},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"100ch"},input:{margin:e.spacing(1)},email:{margin:e.spacing(1),width:"100ch"},form:{display:"flex",flexWrap:"wrap",width:"500px",justifyContent:"space-between",boxShadow:"0px 5px 10px #555"},header:{width:"100%",textAlign:"center",fontFamily:"Roboto"},button:{width:"100%",margin:e.spacing(1)},error:{color:"#f44336",fontFamily:"Roboto",fontSize:"12px",margin:"3px 14px 0px"},headerWrapper:{gridArea:"1 / 1 / 2 / 6",backgroundColor:"#dbe0f6",display:"flex",justifyContent:"flex-end",alignItems:"center"},item:{margin:"20px",textDecoration:"none",textAlign:"center"}}})),W=function(e){var a=I();return n.a.createElement("div",{className:a.root},n.a.createElement("form",{className:a.form,onSubmit:e.handleSubmit},n.a.createElement("h1",{className:a.header},"Please Sign In"),n.a.createElement(F,{classes:a.email,label:"Email",placeholder:"example@gmail.com",type:"email",value:e.values.email,error:e.errors.email,helperText:e.helperText.email,handleChange:e.handleChange("email")}),n.a.createElement(k,{label:"Password",placeholder:"Password",value:e.values.password,error:e.errors.password,helperText:e.helperText.password,labelWidth:70,handleChange:e.handleChange("password")}),n.a.createElement(w,{variant:"contained",color:"primary",type:"submit",text:"Sign up"}),n.a.createElement(w,{variant:"outlined",color:"primary",type:"button",onClick:e.onClick,text:"Clear form"})))},L=function(){var e=n.a.useState({email:"",password:""}),a=Object(g.a)(e,2),t=a[0],r=a[1],l=n.a.useState(!1),o=Object(g.a)(l,2),i=o[0],c=o[1],s=n.a.useState(!1),m=Object(g.a)(s,2),p=m[0],d=m[1],u=function(){var e=!1;return Object.values(i).map((function(a){e=""===a})),Object.values(t).map((function(a){e=""!==a})),console.log(e),e};return n.a.createElement(W,{handleChange:function(e){return function(a){a.persist(),r((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(h.a)({},e,a.target.value))}));var n=b(e,a.target.value,t.password);c((function(a){return Object(f.a)(Object(f.a)({},a),{},Object(h.a)({},e,n.error))})),d((function(a){return Object(f.a)(Object(f.a)({},a),{},Object(h.a)({},e,n.helperText))}))}},values:t,onClick:function(){r(!1)},errors:i,helperText:p,handleSubmit:function(){u()?alert("--Log in--\n               // Email: ".concat(t.email,"\n               // Password: ").concat(t.password)):console.error("FORM INVALID")}})},z=function(e){var a=x();return n.a.createElement("div",{className:a.root},n.a.createElement("form",{className:a.form,onSubmit:e.handleSubmit},n.a.createElement("h1",{className:a.header},"Please Sign Up"),n.a.createElement(F,{classes:a.input,label:"First Name",placeholder:"John",type:"text",value:e.values.firstName,error:e.errors.firstName,helperText:e.helperText.firstName,handleChange:e.handleChange("firstName")}),n.a.createElement(F,{classes:a.input,label:"Last Name",placeholder:"Johnson",type:"text",value:e.values.lastName,error:e.errors.lastName,helperText:e.helperText.lastName,handleChange:e.handleChange("lastName")}),n.a.createElement(F,{classes:a.email,label:"Email",placeholder:"example@gmail.com",type:"email",value:e.values.email,error:e.errors.email,helperText:e.helperText.email,handleChange:e.handleChange("email")}),n.a.createElement(k,{label:"Password",placeholder:"Password",value:e.values.password,error:e.errors.password,helperText:e.helperText.password,labelWidth:70,handleChange:e.handleChange("password")}),n.a.createElement(k,{label:"Confirm Password",placeholder:"Confirm password",value:e.values.confirmPassword,error:e.errors.confirmPassword,helperText:e.helperText.confirmPassword,labelWidth:130,handleChange:e.handleChange("confirmPassword")}),n.a.createElement(w,{variant:"contained",color:"primary",type:"submit",text:"Sign up"}),n.a.createElement(w,{variant:"outlined",color:"primary",type:"button",onClick:e.onClick,text:"Clear form"})))},D=function(){var e=n.a.useState({firstName:"",lastName:"",password:"",confirmPassword:""}),a=Object(g.a)(e,2),t=a[0],r=a[1],l=n.a.useState(!1),o=Object(g.a)(l,2),i=o[0],c=o[1],s=n.a.useState(!1),m=Object(g.a)(s,2),p=m[0],d=m[1],u=function(){var e=!1;return Object.values(i).map((function(a){e=""===a})),Object.values(t).map((function(a){e=""!==a})),e};return n.a.createElement(z,{handleChange:function(e){return function(a){a.persist(),r((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(h.a)({},e,a.target.value))}));var n=b(e,a.target.value,t.password);c((function(a){return Object(f.a)(Object(f.a)({},a),{},Object(h.a)({},e,n.error))})),d((function(a){return Object(f.a)(Object(f.a)({},a),{},Object(h.a)({},e,n.helperText))}))}},values:t,onClick:function(){r(!1)},errors:i,helperText:p,handleSubmit:function(){u()?alert("--SUBMITTING--\n               // First Name: ".concat(t.firstName,"\n               // Last Name: ").concat(t.lastName,"\n               // Email: ").concat(t.email,"\n               // Password: ").concat(t.password,"\n               // Confirmed Password ").concat(t.confirmPassword)):console.error("FORM INVALID")}})},R=function(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(p,null),n.a.createElement("div",{className:"content"},n.a.createElement("h1",null,"To proceed, please Sign In or Sign Up"),n.a.createElement(d.a,{path:"/signUp",render:u(D)}),n.a.createElement(d.a,{path:"/signIn",render:u(L)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.6e4d29b6.chunk.js.map