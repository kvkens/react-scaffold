(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),i=n.n(a),l=n(1),u=n.n(l),c=(n(12),function(e){var t=e.label,o=e.text,a=e.type,i=e.id,l=e.value,u=e.handleChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},o),r.a.createElement("input",{type:a,className:"form-control name",id:i,value:l,onChange:u,onClick:function(){new Promise(function(e){Promise.resolve().then(function(t){e(n(5))}.bind(null,n)).catch(n.oe)}).then(function(e){console.log(e.join(["Another","module","loaded!"]))})},required:!0}))});c.propTypes={label:u.a.string.isRequired,text:u.a.string.isRequired,type:u.a.string.isRequired,id:u.a.string.isRequired,value:u.a.string.isRequired,handleChange:u.a.func.isRequired},c.displayName="YmInput";var s=c,f=n(5),p=n.n(f);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=y(t).call(this))||"object"!==d(o)&&"function"!=typeof o?b(n):o).state={seo_title:""},e.handleChange=e.handleChange.bind(b(b(e))),e}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){console.log(p.a.join(["Another","module","loaded!"]," "))}},{key:"handleChange",value:function(e){var t,n,o;this.setState((t={},n=e.target.id,o=e.target.value,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t))}},{key:"render",value:function(){var e=this.state.seo_title;return r.a.createElement("form",{id:"article-form"},r.a.createElement(s,{text:"SEO title",label:"seo_title",type:"text",id:"seo_title",value:e,handleChange:this.handleChange}))}}])&&m(n.prototype,a),i&&m(n,i),t}();g.displayName="YmFormContainer";var v=g,w=document.getElementById("create-article-form");w&&i.a.render(r.a.createElement(v,null),w)}},[[14,1,2]]]);