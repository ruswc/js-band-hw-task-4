!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";var n,o={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}();function c(t,e){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}function s(t,e){for(var r=0;r<t.length;r++){var n=t[r],a=o[n.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(y(n.parts[i],e))}else{for(var c=[];i<n.parts.length;i++)c.push(y(n.parts[i],e));o[n.id]={id:n.id,refs:1,parts:c}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,p=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function h(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d=null,m=0;function y(t,e){var r,n,o;if(e.singleton){var a=m++;r=d||(d=l(e)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=l(e),n=h.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var r=c(t,e);return s(r,e),function(t){for(var n=[],a=0;a<r.length;a++){var i=r[a],l=o[i.id];l&&(l.refs--,n.push(l))}t&&s(c(t,e),e);for(var u=0;u<n.length;u++){var p=n[u];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete o[p.id]}}}}},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(0)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(0)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formId=e.formId,this.formHeader=e.formHeader,this.transportId=e.transportId,this.model=e.model,this.producedYear=e.producedYear,this.capacity=e.capacity,this.averageSpeed=e.averageSpeed};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=a(this,i(e).call(this,t))).serialNumberOrName=t.serialNumberOrName,r.countOfTeam=t.countOfTeam,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,t),e}(n);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=u(this,p(e).call(this,t))).licensePlate=t.licensePlate,r.typeOfGas=t.typeOfGas,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),e}(n);function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,(r=[{key:"create",value:function(t){return"ship"===t?new s({formId:"shipform",formHeader:"Ship / Argosy",transportId:"idofship",model:"shipmodel",producedYear:"shipproducedyear",capacity:"shipcapacity",averageSpeed:"shipavgspeed",countOfTeam:"countofteam",serialNumberOrName:"serialnumber"}):"truck"===t?new h({formId:"truckform",formHeader:"Truck",transportId:"truckid",model:"truckmodel",licensePlate:"licenseplate",producedYear:"truckproducedyear",capacity:"truckcapacity",averageSpeed:"truckavgspeed",typeOfGas:"typeofgas"}):void 0}}])&&d(e.prototype,r),n&&d(e,n),t}(),y=function(t){for(var e=0,r=t.length;e<r;e++)"text"!==t[e].type&&"select-one"!==t[e].type||(t[e].value="")};function b(){var t=Object.keys(localStorage).filter((function(t){return-1!==t.indexOf("jsbandtransport")})),e=document.getElementById("listoftransport");e.innerHTML="";for(var r=0,n=t.length;r<n;r++){var o=document.createElement("div");o.classList.add("plate");var a=JSON.parse(localStorage.getItem(t[r]));for(var i in a)"unique"!==i&&(o.innerHTML+="<p><strong>".concat(i,":</strong> ").concat(a[i],"</p>"));e.append(o)}}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.transportModel=e.transportModel,this.costPerKg=e.costPerKg,this.costPerKm=e.costPerKm,t._count+=1,t._name="jsbandcost"}var e,r,n;return e=t,(r=[{key:"saveInLocalStorage",value:function(){localStorage.setItem(t._name+t._count,JSON.stringify(this))}}])&&v(e.prototype,r),n&&v(e,n),t}();g._count=0;var S,O=Object.keys(localStorage).filter((function(t){return-1!==t.indexOf("jsbandcost")})).map((function(t){return+t.replace("jsbandcost","")})),k=Math.max.apply(Math,function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(S=O)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(S)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}());function _(){var t=Object.keys(localStorage).filter((function(t){return-1!==t.indexOf("jsbandcost")})),e=document.getElementById("costlist");e.innerHTML="";for(var r=0,n=t.length;r<n;r++){var o=document.createElement("div");o.classList.add("plate");var a=JSON.parse(localStorage.getItem(t[r]));for(var i in a)"unique"!==i&&(o.innerHTML+="<p><strong>".concat(i,":</strong> ").concat(a[i],"</p>"));e.append(o)}}O.length>0&&(g._count=k+1),_();function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function I(t,e,r){return e&&w(t.prototype,e),r&&w(t,r),t}var L=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t._randVal(0,2e5);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.unique=r,this.id=e.id,this.model=e.model,this.producedYear=e.producedYear,this.capacity=e.capacity,this.averageSpeed=e.averageSpeed,t._count+=1,t._name="jsbandtransport"}return I(t,null,[{key:"_randVal",value:function(t,e){var r=t+Math.random()*(e+1-t),n=t+Math.random()*(e+1-t);return"jsbanddelivery"+Math.floor(r)+Math.floor(n)}}]),I(t,[{key:"saveInLocalStorage",value:function(){var e=this;Object.values(localStorage).find((function(t){return-1!==t.indexOf(e.id)}))?console.warn("This object already exist"):localStorage.setItem(t._name+t._count,JSON.stringify(this))}},{key:"showCapacityInPounds",value:function(){return 2.20462262*this.capacity+"lb"}},{key:"showAverageSpeed",value:function(){return this.averageSpeed}},{key:"varName",value:function(){return this}},{key:"getObj",get:function(){return JSON.stringify(this)}}]),t}();L._count=0;var j=Object.keys(localStorage).filter((function(t){return-1!==t.indexOf("jsbandtransport")})).map((function(t){return+t.replace("jsbandtransport","")})),P=Math.max.apply(Math,function(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(j));function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t,e,r){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}j.length>0&&(L._count=P+1);var A=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=x(this,E(e).call(this,t))).snName=t.snName,r.countOfTeam=t.countOfTeam,r}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(e,t),r=e,(n=[{key:"showAverageSpeed",value:function(){return C(E(e.prototype),"showAverageSpeed",this).call(this)+"nm"}}])&&F(r.prototype,n),o&&F(r,o),e}(L);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Y(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t,e,r){return(G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}new A({id:"456-452-412",model:"Middle",name:"Kyiv",producedYear:"2019",capacity:"400000",averageSpeed:"40",countOfTeam:"250"}).saveInLocalStorage();var R=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Y(this,K(e).call(this,t))).licensePlate=t.licensePlate,r.typeOfGas=t.typeOfGas,r}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(e,t),r=e,(n=[{key:"showAverageSpeed",value:function(){return G(K(e.prototype),"showAverageSpeed",this).call(this)+"km"}}])&&B(r.prototype,n),o&&B(r,o),e}(L);new R({id:"321-542-860",model:"KFO 354",licensePlate:"AA 6324 II",producedYear:"2018",capacity:"50000",averageSpeed:"130",typeOfGas:"gasoline"}).saveInLocalStorage(),b();function z(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function J(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var D=function(){function t(){var e,r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=this._getElement("#forms"),this.factory=new m,this.shipForm=this.factory.create("ship"),this.title=this._createElement("h3"),this.title.textContent=this.shipForm.formHeader,this.sForm=this._createElement("form"),this.sForm.id=this.shipForm.formId,this.sForm.append(this.title),this.shipIdLabel=this._createLabel(this.shipForm.transportId,"Input id"),this.shipIdInput=this._createInput(this.shipForm.transportId,"text","Input id"),this.shipModelLabel=this._createLabel(this.shipForm.model,"Select Model"),this.shipModelSelector=this._createSelect(this.shipForm.model),this.shipModelSelectorOptions=this._createOptions(["small","middle","big","xl"]),(e=this.shipModelSelector).append.apply(e,z(this.shipModelSelectorOptions)),this.serialNumberLabel=this._createLabel(this.shipForm.serialNumberOrName,"Serial Number / Name"),this.serialNumber=this._createInput(this.shipForm.serialNumberOrName,"text","Serial Number / Name"),this.shipProducedYearLabel=this._createLabel(this.shipForm.producedYear,"Produced Year"),this.shipProducedYear=this._createInput(this.shipForm.producedYear,"text","Produced Year"),this.shipCapacityLabel=this._createLabel(this.shipForm.capacity,"Capacity"),this.shipCapacity=this._createInput(this.shipForm.capacity,"text","Capacity"),this.averageSpeedLabel=this._createLabel(this.shipForm.averageSpeed,"Average Speed"),this.averageSpeed=this._createInput(this.shipForm.averageSpeed,"text","Average Speed"),this.countOfTeamLabel=this._createLabel(this.shipForm.countOfTeam,"Count Of Team"),this.countOfTeam=this._createInput(this.shipForm.countOfTeam,"text","Count ofTeam"),this.shipSubmitButton=this._createElement("button"),this.shipSubmitButton.id="saveship",this.shipSubmitButton.textContent="Save",this.sForm.append(this.shipIdLabel,this.shipIdInput,this.shipModelLabel,this.shipModelSelector,this.serialNumberLabel,this.serialNumber,this.shipProducedYearLabel,this.shipProducedYear,this.shipCapacityLabel,this.shipCapacity,this.averageSpeedLabel,this.averageSpeed,this.countOfTeamLabel,this.countOfTeam,this.shipSubmitButton),this.app.append(this.sForm),this.factory=new m,this.truckForm=this.factory.create("truck"),this.truckTitle=this._createElement("h3"),this.truckTitle.textContent=this.truckForm.formHeader,this.truckFrm=this._createElement("form"),this.truckFrm.id=this.truckForm.formId,this.truckFrm.append(this.truckTitle),this.truckIdLabel=this._createLabel(this.truckForm.transportId,"Input id"),this.truckIdInput=this._createInput(this.truckForm.transportId,"text","Input id"),this.truckModelLabel=this._createLabel(this.truckForm.model,"Select Model"),this.truckModelSelector=this._createSelect(this.truckForm.model),this.truckModelSelectorOptions=this._createOptions(["MAN","Ford","Volvo","Mercedes"]),(r=this.truckModelSelector).append.apply(r,z(this.truckModelSelectorOptions)),this.licensePlateLabel=this._createLabel(this.truckForm.licensePlate,"License Plate"),this.licensePlate=this._createInput(this.truckForm.licensePlate,"text","License Plate"),this.truckProducedYearLabel=this._createLabel(this.truckForm.producedYear,"Produced Year"),this.truckProducedYear=this._createInput(this.truckForm.producedYear,"text","Produced Year"),this.truckCapacityLabel=this._createLabel(this.truckForm.capacity,"Capacity"),this.truckCapacity=this._createInput(this.truckForm.capacity,"text","Capacity"),this.truckAverageSpeedLabel=this._createLabel(this.truckForm.averageSpeed,"Average Speed"),this.truckAverageSpeed=this._createInput(this.truckForm.averageSpeed,"text","Average Speed"),this.typeOfGasLabel=this._createLabel(this.truckForm.typeOfGas,"Select Type Of Gas"),this.typeOfGasSelecotr=this._createSelect(this.truckForm.typeOfGas),this.typeOfGasSelectorOptions=this._createOptions(["Gas","Diesel"]),(n=this.typeOfGasSelecotr).append.apply(n,z(this.typeOfGasSelectorOptions)),this.truckSubmitButton=this._createElement("button"),this.truckSubmitButton.id="savetruck",this.truckSubmitButton.textContent="Save",this.truckFrm.append(this.truckIdLabel,this.truckIdInput,this.truckModelLabel,this.truckModelSelector,this.licensePlateLabel,this.licensePlate,this.truckProducedYearLabel,this.truckProducedYear,this.truckCapacityLabel,this.truckCapacity,this.truckAverageSpeedLabel,this.truckAverageSpeed,this.typeOfGasLabel,this.typeOfGasSelecotr,this.truckSubmitButton),this.app.append(this.truckFrm),this.costTitle=this._createElement("h3"),this.costTitle.textContent="Cost",this.costForm=this._createElement("form"),this.costForm.id="costform",this.costForm.append(this.costTitle),this.allModelLabel=this._createLabel("transportmodel","Select Model"),this.allModelSelector=this._createSelect("transportmodel"),this.allModelSelectorOptions=this._createOptions(["small","middle","big","xl","MAN","Ford","Volvo","Mercedes"]),(o=this.allModelSelector).append.apply(o,z(this.allModelSelectorOptions)),this.costByKgLabel=this._createLabel("costbykg","Cost (by 1 kg of cargo)"),this.costByKg=this._createInput("costbykg","text","Cost (by 1 kg of cargo)"),this.costByKmLabel=this._createLabel("costbykm","Cost (by 1 km of distance)"),this.costByKm=this._createInput("costbykm","text","Cost (by 1 km of distance)"),this.costSubmitButton=this._createElement("button"),this.costSubmitButton.id="savecost",this.costSubmitButton.textContent="Save",this.costForm.append(this.allModelLabel,this.allModelSelector,this.costByKgLabel,this.costByKg,this.costByKmLabel,this.costByKm,this.costSubmitButton),this.app.append(this.costForm)}var e,r,n;return e=t,(r=[{key:"_createElement",value:function(t,e){var r=document.createElement(t);return e&&r.classList.add(e),r}},{key:"_getElement",value:function(t){return document.querySelector(t)}},{key:"_createLabel",value:function(t,e){var r=this._createElement("label");return r.htmlFor=t,r.textContent=e,r}},{key:"_createInput",value:function(t,e,r){var n=this._createElement("input");return n.id=t,n.type=e,n.placeholder=r,n}},{key:"_createSelect",value:function(t){var e=this._createElement("select");return e.id=t,e}},{key:"_createOptions",value:function(t){var e=this;return(t=[" "].concat(t)).map((function(t){var r=e._createElement("option");return r.value=t,r.textContent=t,r}))}},{key:"bindAddShip",value:function(t){this.sForm.addEventListener("submit",(function(t){t.preventDefault(),function(){var t=new A({id:idofship.value,model:shipmodel.value,name:serialnumber.value,producedYear:shipproducedyear.value,capacity:shipcapacity.value,averageSpeed:shipavgspeed.value,countOfTeam:countofteam.value});console.log("%c Average Speed of ".concat(t.model),"color:skyblue;font-weight:bold;font-size:15px"),console.log("%c ".concat(t.showAverageSpeed()),"color:skyblue;font-weight:bold;font-size:12px"),console.log("%c Capacity in Pounds of ".concat(t.model),"color:skyblue;font-weight:bold;font-size:15px"),console.log("%c ".concat(t.showCapacityInPounds()),"color:skyblue;font-weight:bold;font-size:12px"),t.saveInLocalStorage();var e=document.getElementById("shipform").elements;y(e),b()}()}))}},{key:"bindAddTruck",value:function(t){this.truckFrm.addEventListener("submit",(function(t){t.preventDefault(),function(){var t=new R({id:truckid.value,model:truckmodel.value,licensePlate:licenseplate.value,producedYear:truckproducedyear.value,capacity:truckcapacity.value,averageSpeed:truckavgspeed.value,typeOfGas:typeofgas.value});console.log("%c Average Speed of ".concat(t.model),"color:purple;font-weight:bold;font-size:15px"),console.log("%c ".concat(t.showAverageSpeed()),"color:purple;font-weight:bold;font-size:12px"),console.log("%c Capacity in Pounds of ".concat(t.model),"color:purple;font-weight:bold;font-size:15px"),console.log("%c ".concat(t.showCapacityInPounds()),"color:purple;font-weight:bold;font-size:12px"),t.saveInLocalStorage();var e=document.getElementById("truckform").elements;y(e),b()}()}))}},{key:"bindAddCost",value:function(t){this.costForm.addEventListener("submit",(function(t){t.preventDefault(),function(){new g({transportModel:transportmodel.value,costPerKg:costbykg.value,costPerKm:costbykm.value}).saveInLocalStorage();var t=document.getElementById("costform").elements;y(t),_()}()}))}}])&&J(e.prototype,r),n&&J(e,n),t}();function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var V=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.storage=localStorage,this.jsband=this._listLocalStorage()}var e,r,n;return e=t,(r=[{key:"_listLocalStorage",value:function(){for(var t=Object.keys(this.storage).filter((function(t){return-1!==t.indexOf("jsband")})),e=[],r=0,n=t.length;r<n;r++){JSON.parse(localStorage.getItem("todos"));var o=JSON.parse(this.storage.getItem(t[r]));e.push(o)}return e}},{key:"saveInStorage",value:function(t,e){this.storage.setItem(t,e)}},{key:"bindSaveToStorage",value:function(t,e){this.storage.setItem(t,e)}}])&&q(e.prototype,r),n&&q(e,n),t}(),U=new function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.model=e,this.view=r,this.localStorage=n,this.view.bindAddShip(),this.view.bindAddTruck(),this.view.bindAddCost()}(new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},new D,new V);console.log(U);r(1),r(3)}]);