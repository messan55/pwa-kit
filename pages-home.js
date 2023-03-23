"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[676],{8515:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(5861),i=a(7294),s=a(5697),r=a.n(s),o=a(6896),l=a(4012),c=a(5977),d=a(8527),m=a(5193),g=a(7462),p=a(5987),u=a(4651);const h=["title","img","actions"],f=e=>{let{title:t,img:a,actions:n}=e,s=(0,p.Z)(e,h);const{src:r,alt:o}=a;return i.createElement(d.xu,(0,g.Z)({marginBottom:{base:0,md:10},height:{lg:"xl"},position:{lg:"relative"}},s),i.createElement(d.Kq,{align:"center",spacing:{base:8,md:10},paddingTop:{base:12,md:10},paddingBottom:{base:6,md:10},direction:{base:"column",lg:"row"}},i.createElement(d.Kq,{flex:1,spacing:{base:5,md:8}},i.createElement(d.X6,{as:"h1",fontSize:{base:"4xl",md:"5xl",lg:"6xl"},maxWidth:{base:"75%",md:"50%",lg:"md"}},t),n&&i.createElement(d.xu,{width:{base:"full",lg:"inherit"}},n)),i.createElement(d.kC,{flex:1,justify:"center",align:"center",position:"relative",width:"full",paddingTop:{base:4,lg:0}},i.createElement(d.xu,{position:"relative",width:{base:"full",md:"80%",lg:"full"}},i.createElement(u.Ee,{fit:"cover",align:"center",width:"100%",height:"100%",src:r,alt:o})))))};f.displayName="Hero",f.propTypes={img:r().shape({src:r().string,alt:r().string}),title:r().string,actions:r().element};const v=f;var b=a(9065);const E=["title","subtitle","actions","maxWidth","children"],y=e=>{let{title:t,subtitle:a,actions:n,maxWidth:s,children:r}=e,o=(0,p.Z)(e,E);const l=s||"3xl";return i.createElement(d.xu,(0,g.Z)({as:"section",paddingBottom:"16"},o),i.createElement(d.Kq,{spacing:4,as:d.W2,maxW:l,textAlign:"center"},t&&i.createElement(d.X6,{as:"h2",fontSize:40,textAlign:"center"},t),a&&i.createElement(d.xv,{color:"gray.700",fontWeight:600},a),n&&i.createElement(d.xu,{paddingTop:"2",width:{base:"full",md:"auto"}},n)),r)};y.displayName="Section",y.propTypes={title:r().string,subtitle:r().oneOfType([r().array,r().string,r().node]),children:r().node,actions:r().element,maxWidth:r().string};const x=y;var _=a(6158),M=a(8871),w=a(49),k=a(9731);const S=[{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Download on Github"}],id:"home.hero_features.link.on_github"}}),icon:i.createElement(k.bY,{width:12,height:12}),href:"https://github.com/SalesforceCommerceCloud/pwa-kit"},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Deploy on Managed Runtime"}],id:"home.hero_features.link.on_managed_runtime"}}),icon:i.createElement(k.Oc,{width:12,height:8}),href:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/pushing-and-deploying-bundles.html"},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Create with the Figma PWA Design Kit"}],id:"home.hero_features.link.design_kit"}}),icon:i.createElement(k.u2,{width:12,height:8}),href:"https://sfdc.co/figma-pwa-design-kit"}],C=[{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Cart & Checkout"}],id:"home.features.heading.cart_checkout"},text:{defaultMessage:[{type:0,value:"Ecommerce best practice for a shopper's cart and checkout experience."}],id:"home.features.description.cart_checkout"}}),icon:i.createElement(k.wh,null)},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Einstein Recommendations"}],id:"home.features.heading.einstein_recommendations"},text:{defaultMessage:[{type:0,value:"Deliver the next best product or offer to every shopper through product recommendations."}],id:"home.features.description.einstein_recommendations"}}),icon:i.createElement(k.lM,null)},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"My Account"}],id:"home.features.heading.my_account"},text:{defaultMessage:[{type:0,value:"Shoppers can manage account information such as their profile, addresses, payments and orders."}],id:"home.features.description.my_account"}}),icon:i.createElement(k.fr,null)},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Shopper Login and API Access Service"}],id:"home.features.heading.shopper_login"},text:{defaultMessage:[{type:0,value:"Enable shoppers to easily log in with a more personalized shopping experience."}],id:"home.features.description.shopper_login"}}),icon:i.createElement(k.BW,null)},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Components & Design Kit"}],id:"home.features.heading.components"},text:{defaultMessage:[{type:0,value:"Built using Chakra UI, a simple, modular and accessible React component library."}],id:"home.features.description.components"}}),icon:i.createElement(k.QG,null)},{message:(0,w.vU)({title:{defaultMessage:[{type:0,value:"Wishlist"}],id:"home.features.heading.wishlist"},text:{defaultMessage:[{type:0,value:"Registered shoppers can add product items to their wishlist from purchasing later."}],id:"home.features.description.wishlist"}}),icon:i.createElement(k.h_,null)}];var U=a(3269),R=a(3162);const W=({productSearchResult:e,isLoading:t})=>{const a=(0,o.Z)(),n=(0,U.Z)(),{pathname:s}=(0,c.TH)();return(0,i.useEffect)((()=>{n.sendViewPage(s)}),[]),i.createElement(d.xu,{"data-testid":"home-page",layerStyle:"page"},i.createElement(b.Z,{title:"Home Page",description:"Commerce Cloud Retail React App",keywords:"Commerce Cloud, Retail React App, React Storefront"}),i.createElement(v,{title:a.formatMessage({defaultMessage:[{type:0,value:"The React PWA Starter Store for Retail"}],id:"home.title.react_starter_store"}),img:{src:(0,M.Vh)("static/img/hero.png"),alt:"npx pwa-kit-create-app"},actions:i.createElement(d.Kq,{spacing:{base:4,sm:6},direction:{base:"column",sm:"row"}},i.createElement(m.zx,{as:d.rU,href:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html",target:"_blank",width:{base:"full",md:"inherit"},paddingX:7,_hover:{textDecoration:"none"}},i.createElement(l.Z,{defaultMessage:[{type:0,value:"Get started"}],id:"home.link.get_started"})))}),i.createElement(x,{background:"gray.50",marginX:"auto",paddingY:{base:8,md:16},paddingX:{base:4,md:8},borderRadius:"base",width:{base:"100vw",md:"inherit"},position:{base:"relative",md:"inherit"},left:{base:"50%",md:"inherit"},right:{base:"50%",md:"inherit"},marginLeft:{base:"-50vw",md:"auto"},marginRight:{base:"-50vw",md:"auto"}},i.createElement(d.MI,{columns:{base:1,md:1,lg:3},spacingX:{base:1,md:4},spacingY:{base:4,md:14}},S.map(((e,t)=>{const n=e.message;return i.createElement(d.xu,{key:t,background:"white",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)",borderRadius:"4px"},i.createElement(d.rU,{target:"_blank",href:e.href},i.createElement(d.Ug,null,i.createElement(d.kC,{paddingLeft:6,height:24,align:"center",justify:"center"},e.icon),i.createElement(d.xv,{fontWeight:"700"},a.formatMessage(n.title)))))})))),e&&i.createElement(x,{padding:4,paddingTop:16,title:a.formatMessage({defaultMessage:[{type:0,value:"Shop Products"}],id:"home.heading.shop_products"}),subtitle:a.formatMessage({defaultMessage:[{type:0,value:"This section contains content from the catalog. "},{type:1,value:"docLink"},{type:0,value:" on how to replace it."}],id:"home.description.shop_products"},{docLink:i.createElement(d.rU,{target:"_blank",href:"https://sfdc.co/business-manager-manage-catalogs",textDecoration:"none",position:"relative",_after:{position:"absolute",content:'""',height:"2px",bottom:"-2px",margin:"0 auto",left:0,right:0,background:"gray.700"},_hover:{textDecoration:"none"}},a.formatMessage({defaultMessage:[{type:0,value:"Read docs"}],id:"home.link.read_docs"}))})},i.createElement(d.Kq,{pt:8,spacing:16},i.createElement(_.Z,{products:null==e?void 0:e.hits,isLoading:t}))),i.createElement(x,{padding:4,paddingTop:32,title:a.formatMessage({defaultMessage:[{type:0,value:"Features"}],id:"home.heading.features"}),subtitle:a.formatMessage({defaultMessage:[{type:0,value:"Out-of-the-box features so that you focus only on adding enhancements."}],id:"home.description.features"})},i.createElement(d.W2,{maxW:"6xl",marginTop:10},i.createElement(d.MI,{columns:{base:1,md:2,lg:3},spacing:10},C.map(((e,t)=>{const n=e.message;return i.createElement(d.Ug,{key:t,align:"top"},i.createElement(d.gC,{align:"start"},i.createElement(d.kC,{width:16,height:16,align:"center",justify:"left",color:"gray.900",paddingX:2},e.icon),i.createElement(d.xv,{color:"black",fontWeight:700,fontSize:20},a.formatMessage(n.title)),i.createElement(d.xv,{color:"black"},a.formatMessage(n.text))))}))))),i.createElement(x,{padding:4,paddingTop:32,title:a.formatMessage({defaultMessage:[{type:0,value:"We're here to help"}],id:"home.heading.here_to_help"}),subtitle:i.createElement(i.Fragment,null,i.createElement(i.Fragment,null,a.formatMessage({defaultMessage:[{type:0,value:"Contact our support staff."}],id:"home.description.here_to_help"})),i.createElement("br",null),i.createElement(i.Fragment,null,a.formatMessage({defaultMessage:[{type:0,value:"They will get you to the right place."}],id:"home.description.here_to_help_line_2"}))),actions:i.createElement(m.zx,{as:d.rU,href:"https://help.salesforce.com/s/?language=en_US",target:"_blank",width:"auto",paddingX:7,_hover:{textDecoration:"none"}},i.createElement(l.Z,{defaultMessage:[{type:0,value:"Contact Us"}],id:"home.link.contact_us"})),maxWidth:"xl"}))};W.getTemplateName=()=>"home",W.shouldGetProps=({previousLocation:e,location:t})=>!e||e.pathname!==t.pathname,W.getProps=function(){var e=(0,n.Z)((function*({res:e,api:t}){return e&&e.set("Cache-Control",`max-age=${R.RU}`),{productSearchResult:yield t.shopperSearch.productSearch({parameters:{refine:[`cgid=${R.EP}`,"htype=master"],limit:R.DN}})}}));return function(t){return e.apply(this,arguments)}}(),W.propTypes={productSearchResult:r().object,isLoading:r().bool};const D=W}}]);