"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[28],{7696:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var a=r(5861),s=r(7294),n=r(5697),o=r.n(n),i=r(6896),c=r(8527),l=r(2736),d=r(6933),g=r(9065),u=r(2283),m=r(5977),p=r(3269),_=r(5118);const f=()=>{const{formatMessage:e}=(0,i.Z)(),t=(0,d.Z)(),r=(0,l.Z)(),n=(0,u.cI)(),o=(0,m.TH)(),f=(0,p.Z)(),E=function(){var t=(0,a.Z)((function*(t){try{yield r.login(t)}catch(t){const r=/invalid credentials/i.test(t.message)?e({defaultMessage:[{type:0,value:"Incorrect username or password, please try again."}],id:"login_page.error.incorrect_username_or_password"}):t.message;n.setError("global",{type:"manual",message:r})}}));return function(e){return t.apply(this,arguments)}}();return(0,s.useEffect)((()=>{var e;null!=r.authType&&r.isRegistered&&(null!=o&&null!==(e=o.state)&&void 0!==e&&e.directedFrom?t(o.state.directedFrom):t("/account"))}),[r]),(0,s.useEffect)((()=>{f.sendViewPage(o.pathname)}),[]),s.createElement(c.xu,{"data-testid":"login-page",bg:"gray.50",py:[8,16]},s.createElement(g.Z,{title:"Sign in",description:"Customer sign in"}),s.createElement(c.W2,{paddingTop:16,width:["100%","407px"],bg:"white",paddingBottom:14,marginTop:8,marginBottom:8,borderRadius:"base"},s.createElement(_.Z,{form:n,submitForm:E,clickCreateAccount:()=>t("/registration"),clickForgotPassword:()=>t("/reset-password")})))};f.getTemplateName=()=>"login",f.propTypes={match:o().object};const E=f}}]);