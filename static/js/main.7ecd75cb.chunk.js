(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={input:"Statistics_input__2lK-X"}},,function(t,e,n){t.exports={controls:"Options_controls__pb3IH"}},,,,,function(t,e,n){t.exports={App:"App_App__3mciF"}},function(t,e,n){t.exports={notification:"Notification_notification__1iIx5"}},function(t,e,n){t.exports={title:"Section_title__2IfDb"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(5),o=n.n(i),s=n(6),r=n(7),l=n(8),u=n(13),d=n(12),b=n(9),j=n.n(b),p=n(2),h=n.n(p),f=n(0);var O=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,i=t.positivePercent;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:h.a.input,children:["Good: ",e]}),Object(f.jsxs)("p",{className:h.a.input,children:["Neutral: ",n]}),Object(f.jsxs)("p",{className:h.a.input,children:["Bad: ",c]}),Object(f.jsxs)("p",{className:h.a.input,children:["Total: ",a]}),Object(f.jsxs)("p",{className:h.a.input,children:["PositivePercent: ",i,"%"]})]})},x=n(4),v=n.n(x);var m=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(f.jsx)("div",{className:v.a.controls,children:e.map((function(t,e){return Object(f.jsx)("button",{className:v.a.button,type:"button",onClick:function(){return n(t)},children:t},"".concat(e+1))}))})},g=n(10),_=n.n(g),k=function(t){var e=t.message;return Object(f.jsx)("p",{className:_.a.notification,children:e})},N=n(11),P=n.n(N),y=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{className:P.a.title,children:e}),n]})},F=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.countTotal=function(){var e=t.state;return e.good+e.neutral+e.bad},t.addFeedback=function(e){t.setState((function(t){return Object(s.a)({},e,t[e]+1)}))},t.countPercentage=function(){return 100*t.state.good/t.countTotal()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,a=Object.keys(this.state),i=this.countTotal();return Object(f.jsxs)("div",{className:j.a.App,children:[Object(f.jsx)(y,{title:"Please leave Feedback",children:Object(f.jsx)(m,{options:a,onLeaveFeedback:this.addFeedback})}),0!==i?Object(f.jsx)(y,{title:"Statistics",children:Object(f.jsx)(O,{good:e,neutral:n,bad:c,total:i,positivePercent:this.countPercentage()})}):Object(f.jsx)(k,{message:"No feedback given."})]})}}]),n}(c.Component);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7ecd75cb.chunk.js.map