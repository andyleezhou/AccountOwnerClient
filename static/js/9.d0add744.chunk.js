(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[9],{220:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(21),c=function(e,t){return 404===e.response.status?function(e){return{type:r.e,props:e}}(t):500===e.response.status?function(e){return{type:r.f,props:e}}(t):function(e){return{type:r.g,error:e}}(e)},a=function(){return{type:r.a}}},221:function(e,t,n){"use strict";var r=n(21),c=n(223),a=n.n(c).a.create({baseURL:"https://pacific-meadow-89341.herokuapp.com",headers:{headerType:"example header type"}}),u=n(220);n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var o=function(e,t){return function(n){a.get(e).then((function(e){var t;n((t=e.data,{type:r.d,data:t}))})).catch((function(e){n(u.b(e,t))}))}},l=function(e,t,n){return function(c){a.post(e,t).then((function(e){c(function(e){return{type:r.h,response:e}}(e))})).catch((function(e){c(u.b(e,n))}))}},i=function(e,t,n){return function(c){a.put(e,t).then((function(e){c(function(e){return{type:r.i,response:e}}(e))})).catch((function(e){c(u.b(e,n))}))}},s=function(e,t){return function(n){a.delete(e).then((function(e){n(function(e){return{type:r.c,response:e}}(e))})).catch((function(e){n(u.b(e,t))}))}},f=function(e,t){return{type:r.b,props:e,url:t}}},265:function(e,t,n){"use strict";n.r(t);var r=n(56),c=n(1),a=n.n(c),u=n(92),o=n(12),l=n(227),i=n.n(l),s=function(e){var t=null;return e.accounts&&(t=e.accounts.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,e.accountType),a.a.createElement("td",null,a.a.createElement(i.a,{format:"DD/MM/YYYY"},e.dateCreated)))}))),a.a.createElement(o.l,null,a.a.createElement(o.b,{md:12},a.a.createElement(o.m,{responsive:!0,striped:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Account type"),a.a.createElement("th",null,"Date created"))),a.a.createElement("tbody",null,t))))},f=n(221);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(e){var t=Object(u.c)();Object(c.useEffect)((function(){var n="/api/owner/"+e.match.params.id+"/account";t(f.c(n,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)))}),[e,t]);var n=Object(u.d)((function(e){return e.repository.data}));return a.a.createElement(c.Fragment,null,a.a.createElement(o.n,null,a.a.createElement(o.l,null,a.a.createElement(o.b,{md:3},a.a.createElement("strong",null,"Owner name:")),a.a.createElement(o.b,{md:3},n.name)),a.a.createElement(o.l,null,a.a.createElement(o.b,{md:3},a.a.createElement("strong",null,"Date of birth:")),a.a.createElement(o.b,{md:3},a.a.createElement(i.a,{format:"DD/MM/YYYY"},n.dateOfBirth))),function(e){return e.accounts&&e.accounts.length<=2?a.a.createElement(o.l,null,a.a.createElement(o.b,{md:3},a.a.createElement("strong",null,"Type of user:")),a.a.createElement(o.b,{md:3},a.a.createElement("span",{className:"text-success"},"Beginner user."))):a.a.createElement(o.l,null,a.a.createElement(o.b,{md:3},a.a.createElement("strong",null,"Type of user:")),a.a.createElement(o.b,{md:3},a.a.createElement("span",{className:"text-info"},"Advanced user.")))}(n)),a.a.createElement(s,{accounts:n.accounts}))}}}]);
//# sourceMappingURL=9.d0add744.chunk.js.map