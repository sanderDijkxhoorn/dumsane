(function(){"use strict";function b(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,n,e){return n&&v(t.prototype,n),e&&v(t,e),t}let h=function(){function t(n){b(this,t),Object.defineProperty(this,"seeder",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.seeder=this.xmur3(n)}return x(t,[{key:"random",value:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;if(n>e)throw new Error("The minimum value must be below the maximum value");if(n===e)throw new Error("The minimum value cannot equal the maximum value");return this.denormalize(this.sfc32(),n,e)}},{key:"randomInt",value:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Math.round(this.random(n,e))}},{key:"denormalize",value:function(n,e,r){return n*(r-e)+e}},{key:"xmur3",value:function(n){let e=1779033703^n.length;for(let r=0;r<n.length;r++)e=Math.imul(e^n.charCodeAt(r),3432918353),e=e<<13|e>>>19;return function(){return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^=e>>>16)>>>0}}},{key:"sfc32",value:function(){let n=this.seeder(),e=this.seeder(),r=this.seeder(),i=this.seeder();n>>>=0,e>>>=0,r>>>=0,i>>>=0;let a=n+e|0;return n=e^e>>>9,e=r+(r<<3)|0,r=r<<21|r>>>11,i=i+1|0,a=a+i|0,r=r+a|0,(a>>>0)/4294967296}}]),t}();function E(t){return /^\p{L}/u.test(t)}function P(t){return t===t.toUpperCase()}function A(t){let n=0,e=0;for(const r of t)E(r)&&(P(r)&&e++,n++);return e/n}function p(){return function(t,n){let e=t[n],r=0;Object.defineProperty(t,n,{get:function(){return e},set:function(i){if(typeof i=="object"&&(r=Object.values(i).reduce(function(a,s){return a+s})),i<0||r<0||i>1||r>1)throw new Error(`${n} modifier value must be a number between 0 and 1`);e=i},enumerable:!0,configurable:!0})}}function M(t){if(!t||/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(t)||/%[^0-9a-f]/i.test(t)||/%[0-9a-f](:?[^0-9a-f]|$)/i.test(t))return!1;const n=t.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);if(!n)return!1;const[,e,r,i]=n;if(!(e&&e.length&&i.length>=0))return!1;if(r&&r.length){if(!(i.length===0||/^\//.test(i)))return!1}else if(/^\/\//.test(i))return!1;return!!/^[a-z][a-z0-9\+\-\.]*$/.test(e.toLowerCase())}function _(t){return t.charAt(0)==="@"}var w=function(t,n,e,r){var i=arguments.length,a=i<3?n:r===null?r=Object.getOwnPropertyDescriptor(n,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,n,e,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(a=(i<3?s(a):i>3?s(n,e,a):s(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a};const u={SPACES:{faces:.05,actions:.075,stutters:.1},WORDS:1,EXCLAMATIONS:1};let c=function(){function t(){let{spaces:n=u.SPACES,words:e=u.WORDS,exclamations:r=u.EXCLAMATIONS}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{spaces:u.SPACES,words:u.WORDS,exclamations:u.EXCLAMATIONS};b(this,t),Object.defineProperty(this,"faces",{enumerable:!0,configurable:!0,writable:!0,value:["(\u30FB`\u03C9\xB4\u30FB)",";;w;;","OwO","UwU",">w<","^w^","\xDAw\xDA","^-^",":3","x3",";3",":3c"]}),Object.defineProperty(this,"exclamations",{enumerable:!0,configurable:!0,writable:!0,value:["!?","?!!","?!?1","!!11","?!?!"]}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:["*blushes*","*whispers to self*","*cries*","*screams*","*sweats*","*twerks*","*runs away*","*screeches*","*walks away*","*looks at you*","*starts twerking*","*huggles tightly*","*boops your nose*"]}),Object.defineProperty(this,"uwuMap",{enumerable:!0,configurable:!0,writable:!0,value:[[/(?:r|l)/g,"w"],[/(?:R|L)/g,"W"],[/n([aeiou])/g,"ny$1"],[/N([aeiou])/g,"Ny$1"],[/N([AEIOU])/g,"Ny$1"],[/ove/g,"uv"]]}),Object.defineProperty(this,"_spacesModifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_wordsModifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_exclamationsModifier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._spacesModifier=n??u.SPACES,this._wordsModifier=e??u.WORDS,this._exclamationsModifier=r??u.EXCLAMATIONS}return x(t,[{key:"uwuifyWords",value:function(n){var e=this;return n.split(" ").map(function(r){if(_(r)||M(r))return r;const i=new h(r);for(const[a,s]of e.uwuMap)i.random()>e._wordsModifier||(r=r.replace(a,s));return r}).join(" ")}},{key:"uwuifySpaces",value:function(n){var e=this;const r=n.split(" "),i=this._spacesModifier.faces,a=this._spacesModifier.actions+i,s=this._spacesModifier.stutters+a;return r.map(function(o,O){const m=new h(o),y=m.random(),[f]=o;if(y<=i&&e.faces)o+=" "+e.faces[m.randomInt(0,e.faces.length-1)],C();else if(y<=a&&e.actions)o+=" "+e.actions[m.randomInt(0,e.actions.length-1)],C();else if(y<=s&&!M(o)){const g=m.randomInt(0,2);return(f+"-").repeat(g)+o}function C(){if(f===f.toUpperCase()&&!(A(o)>.5))if(O===0)o=f.toLowerCase()+o.slice(1);else{const g=r[O-1],B=g[g.length-1];if(!new RegExp("[.!?\\-]").test(B))return;o=f.toLowerCase()+o.slice(1)}}return o}).join(" ")}},{key:"uwuifyExclamations",value:function(n){var e=this;const r=n.split(" "),i=new RegExp("[?!]+$");return r.map(function(a){const s=new h(a);return!i.test(a)||s.random()>e._exclamationsModifier||(a=a.replace(i,""),a+=e.exclamations[s.randomInt(0,e.exclamations.length-1)]),a}).join(" ")}},{key:"uwuifySentence",value:function(n){let e=n;return e=this.uwuifyWords(e),e=this.uwuifyExclamations(e),e=this.uwuifySpaces(e),e}}]),t}();w([p()],c.prototype,"_spacesModifier",void 0),w([p()],c.prototype,"_wordsModifier",void 0),w([p()],c.prototype,"_exclamationsModifier",void 0);const{React:d,ReactNative:j}=vendetta.metro.common,{plugin:{storage:l},storage:{useProxy:k},ui:{components:{Forms:R}}}=vendetta,{FormRow:I,FormSection:W,FormSwitch:N}=R,U=vendetta.metro.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default;function T(t,n){let{patches:e,reloadUwuifier:r,startMessageTransfoworming:i}=n;return k(l),d.createElement(j.ScrollView,{style:{flex:1}},[{label:"faces",default:!0,id:"cfg.spaces.faces"},{label:"actions",default:!0,id:"cfg.spaces.actions"},{label:"stutters",default:!0,id:"cfg.spaces.stutters"},{label:"words",default:!0,id:"cfg.words"},{label:"exclamations",default:!1,id:"cfg.exclamations"},{label:"Strength sliders will come when i figure out how to make em"},{id:"reload",style:{height:5,margin:8},name:"Reload uwuifier",onPress:function(){r(l),vendetta.ui.toasts.showToast("Reloaded uwuifier",vendetta.ui.assets.getAssetIDByName("check"))}}].map(function(a){return a?.id==="reload"?d.createElement(U,{style:a.style,text:a.name??"Unnamed",color:"brand",size:"small",disabled:!1,onPress:a.onPress??function(){}}):("id"in a&&!(a.id in l)&&(l[a.id]=a.default),d.createElement(I,{label:a?.label??a?.id??"no name",trailing:"id"in a?d.createElement(N,{value:l[a.id]??a.default,onValueChange:function(s){l[a.id]=s,cfg?.onValueChange?.(s)}}):void 0}))}))}const{plugin:{storage:z},logger:L}=vendetta;function D(t){if(!("description"in t)||!("name"in t))throw new Error("No name or description in the command guh");return t.displayName=t.name,t.displayDescription=t.description,t.options&&(t.options=t.options.map(function(n){return{...n,displayName:n.name,displayDescription:n.description}})),L.log("[helper \u203A cmd]",t),t}let S=new c;reloadUwuifier})();
