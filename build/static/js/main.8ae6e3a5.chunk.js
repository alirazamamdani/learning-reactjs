(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(14),s=c.n(i),j=(c(21),c(7)),l=c(0),a=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("h1",{children:"The Blog"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(j.b,{to:"/",children:"Sign Up"}),Object(l.jsx)(j.b,{to:"/home",children:"Home"}),Object(l.jsx)(j.b,{to:"/create",children:"New Blog"})]})]})},o=c(8),b=function(e){var t=Object(n.useState)(null),c=Object(o.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(!0),j=Object(o.a)(s,2),l=j[0],a=j[1],b=Object(n.useState)(null),d=Object(o.a)(b,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(e.ok)return e.json();throw Error("could not fetch the data for that resource")})).then((function(e){i(e),a(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("Abort Fetch"):(a(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isLoading:l,error:h}},d=function(e){var t=e.blog,c=e.title;return Object(l.jsxs)("div",{className:"blogList",children:[Object(l.jsx)("h1",{children:c}),t.map((function(e){return Object(l.jsx)("div",{className:"blog-preview",children:Object(l.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})},h=function(){var e=b("http://localhost:8000/blogs/"),t=e.data,c=e.error,n=e.isLoading;return Object(l.jsxs)("div",{className:"home",children:[c&&Object(l.jsx)("div",{children:c}),n&&Object(l.jsx)("div",{children:"is Loading....."}),t&&Object(l.jsx)(d,{blog:t,title:"All Blogs"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),j=s[0],a=s[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),h=d[0],O=d[1],x=Object(u.f)();return Object(l.jsxs)("div",{className:"create",children:[Object(l.jsx)("h2",{children:"Add a new Blog"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:j,author:h};fetch("http://localhost:8000/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){x.push("/")}))},children:[Object(l.jsx)("label",{children:"Blog Title"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Blog body"}),Object(l.jsx)("textarea",{value:j,onChange:function(e){return a(e.target.value)},required:!0}),Object(l.jsx)("label",{children:"Blog Author"}),Object(l.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(l.jsx)("option",{value:"Ali Raza",children:"Ali Raza"}),Object(l.jsx)("option",{value:"Mamdani",children:"Mamdani"})]}),Object(l.jsx)("button",{children:"Add Blog"})]})]})},x=function(){var e=Object(u.g)().id,t=b("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,r=t.isPending,i=Object(u.f)();return Object(l.jsxs)("div",{className:"blog-details",children:[r&&Object(l.jsx)("div",{children:"Loading...."}),n&&Object(l.jsxs)("div",{children:[" ",n," "]}),c&&Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:c.title}),Object(l.jsxs)("p",{children:["Written By ",c.author]}),Object(l.jsx)("div",{children:c.body}),Object(l.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){i.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(l.jsx)("div",{children:"These Page was not found"})},f=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"Email:"}),Object(l.jsx)("input",{type:"text"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Passowrd:"}),Object(l.jsx)("input",{type:"password"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{children:"Sign Up"})]})})};var p=function(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(a,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(f,{})}),Object(l.jsx)(u.a,{path:"/home",children:Object(l.jsx)(h,{})}),Object(l.jsx)(u.a,{path:"/create",children:Object(l.jsx)(O,{})}),Object(l.jsx)(u.a,{path:"/blogs/:id",children:Object(l.jsx)(x,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(g,{})})]})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.8ae6e3a5.chunk.js.map