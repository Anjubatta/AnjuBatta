(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(178),c=a(183);t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"404: Not found"}),l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Anju Batta",description:"This is simple gatsby application with PWA",author:"@Anju Batta"}}}}},176:function(e,t,a){e.exports=a.p+"static/logo-a7750f8eb6df4ed117ed135f2dcc9892.png"},177:function(e,t,a){e.exports=a.p+"static/dots-6fec7ee734ca9759c55e1dbeaa78975d.png"},178:function(e,t,a){"use strict";a(26);var n=a(76),l=a.n(n),r=a(175),c=a(0),i=a.n(c),o=a(56),s=a(179),m=a.n(s),u=a(180),d=a(1),E=a.n(d),p=a(154),g=a.n(p),v=a(8),h=a.n(v),y=a(155),f=a.n(y),b=a(176),k=a.n(b),w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={active:!1},t.handleOpen=function(){0==t.state.active?t.setState({active:!0}):t.setState({active:!1}),document.getElementById("changesize").classList.toggle(""+f.a.children)},t}return h()(t,e),t.prototype.render=function(){var e=this.state.active?f.a.hamburger+" "+f.a.hamburgerActive:""+f.a.hamburger,t=this.state.active?f.a.overlayActive+" "+f.a.overlay:""+f.a.initialNav,a=""+f.a.activeButton;return i.a.createElement("header",{className:f.a.header},i.a.createElement("div",{className:f.a.container},i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:k.a,alt:"Logo",className:f.a.logo})),i.a.createElement("div",{className:e,onClick:this.handleOpen},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("nav",{className:t},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.Link,{activeClassName:a,to:"/"},"Main")),i.a.createElement("li",null,i.a.createElement(o.Link,{activeClassName:a,to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(o.Link,{activeClassName:a,to:"/contact"},"Contact")),i.a.createElement("li",null,i.a.createElement(o.Link,{activeClassName:a,to:"/blog"},"Blog"))))))},t}(c.Component),N=a(156),L=a.n(N),A=a(177),M=a.n(A),C=function(){return i.a.createElement("footer",{className:L.a.footer},i.a.createElement("img",{src:M.a,className:L.a.background}),i.a.createElement("div",{className:L.a.menu},i.a.createElement("div",null,i.a.createElement("h1",null,"About"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.Link,{to:"about"},"About Me")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:"blog"},"News and Press")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:"contact"},"Contact Me")))),i.a.createElement("div",null,i.a.createElement("h1",null,"Services"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.Link,{to:""},"Products")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:"contact"},"Get Involved")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:""},"Support")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:""},"Overview")))),i.a.createElement("div",null,i.a.createElement("h1",null,"General"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.Link,{to:""},"Terms of Use")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:""},"Privacy Policy"))))),i.a.createElement("div",{className:L.a.copyright},"Copyright © ",(new Date).getFullYear()," All rights reserved."))},j=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"3986049164",render:function(e){return i.a.createElement(u.Scrollbars,{renderThumbVertical:function(e){var t=e.style,a=l()(e,["style"]);return i.a.createElement("div",Object.assign({},a,{style:Object.assign({},t,{backgroundColor:"rgba(0, 0, 0, 0.70)",borderRadius:"3px",boxShadow:"0 0 2px 1px #c7d2ee"})}))}},i.a.createElement("div",{className:g.a.layout},i.a.createElement(m.a,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("title",null,e.site.siteMetadata.title),i.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),i.a.createElement("meta",{name:"author",content:e.site.siteMetadata.author}),i.a.createElement("meta",{property:"og:type",content:"gatsby,react.js"}),i.a.createElement("meta",{property:"og:title",content:e.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:url",content:"/"})),i.a.createElement(w,null),i.a.createElement("div",{className:g.a.container,id:"changesize"},t)),i.a.createElement(C,null))},data:r})};j.propTypes={children:E.a.node.isRequired};t.a=j},183:function(e,t,a){"use strict";var n=a(184),l=a(0),r=a.n(l),c=a(1),i=a.n(c),o=a(179),s=a.n(o),m=a(56);function u(e){var t=e.description,a=e.lang,l=e.meta,c=e.keywords,i=e.title;return r.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var d="1025518380"},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Anju Batta",description:"This is simple gatsby application with PWA",author:"@Anju Batta"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-57cb90000cd9e39d7cc4.js.map