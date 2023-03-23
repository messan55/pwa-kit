"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[896],{5247:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(5861),r=a(7294),n=a(5697),l=a.n(n),i=a(4012),o=a(8527),c=a(5193),m=a(2736),p=a(9065),d=a(2283),u=a(3210),g=a(9731),_=a(6933),E=a(3269),w=a(5977);const y=()=>{const e=(0,m.Z)(),t=(0,d.cI)(),a=(0,_.Z)(),[n,l]=(0,r.useState)(""),[y,f]=(0,r.useState)(!1),h=(0,E.Z)(),{pathname:v}=(0,w.TH)(),b=function(){var a=(0,s.Z)((function*({email:a}){try{yield e.getResetPasswordToken(a),l(a),f(!y)}catch(e){t.setError("global",{type:"manual",message:e.message})}}));return function(e){return a.apply(this,arguments)}}();return(0,r.useEffect)((()=>{h.sendViewPage(v)}),[]),r.createElement(o.xu,{"data-testid":"reset-password-page",bg:"gray.50",py:[8,16]},r.createElement(p.Z,{title:"Reset password",description:"Reset customer password"}),r.createElement(o.W2,{paddingTop:16,width:["100%","407px"],bg:"white",paddingBottom:14,marginTop:8,marginBottom:8,borderRadius:"base"},y?r.createElement(o.Kq,{justify:"center",align:"center",spacing:6},r.createElement(g.Oc,{width:"60px",height:"auto"}),r.createElement(o.xv,{align:"center",fontSize:"md"},r.createElement(i.Z,{defaultMessage:[{type:0,value:"Password Reset"}],id:"reset_password.title.password_reset"})),r.createElement(o.Kq,{spacing:6,pt:4},r.createElement(o.xv,{align:"center",fontSize:"sm"},r.createElement(i.Z,{defaultMessage:[{type:0,value:"You will receive an email at "},{type:8,value:"b",children:[{type:1,value:"email"}]},{type:0,value:" with a link to reset your password shortly."}],id:"reset_password.info.receive_email_shortly",values:{email:n,b:e=>r.createElement("b",null,e)}})),r.createElement(c.zx,{onClick:()=>a("/login")},r.createElement(i.Z,{defaultMessage:[{type:0,value:"Back to Sign In"}],id:"reset_password.button.back_to_sign_in"})))):r.createElement(u.Z,{form:t,submitForm:b,clickSignIn:()=>a("/login")})))};y.getTemplateName=()=>"reset-password",y.propTypes={match:l().object};const f=y}}]);