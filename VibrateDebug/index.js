(function(r){"use strict";const{React:i,ReactNative:c}=vendetta.metro.common,{plugin:{storage:n},storage:{useProxy:u},ui:{components:{Forms:l}}}=vendetta;"test"in n||(n.test="");const m=vendetta.metro.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default,{FormSection:F,FormInput:d,FormRow:S,FormSwitch:w,FormText:B}=l;function p(t){u(n);const e={margin:2};return i.createElement(c.ScrollView,{style:{flex:1}},i.createElement(m,{style:e,text:"hey",color:"brand",size:"big",disabled:!1,onPress:function(o){return console.log("pressed",o)}}),i.createElement(d,{title:"Application Name",value:n.test,placeholder:"useless placeholder",onChange:function(o){return n.test=o},multiline:!0}))}const{plugin:{storage:N},logger:f}=vendetta;function g(t){if(!("description"in t)||!("name"in t))throw new Error("No name or description in the command guh");return t.displayName=t.name,t.displayDescription=t.description,t.options&&(t.options=t.options.map(function(e){return{...e,displayName:e.name,displayDescription:e.description}})),f.log("[helper \u203A cmd]",t),t}function y(t){}var v={cmd:g,vibrateScheme:y};const{logger:P,commands:{registerCommand:h},metro:{findByProps:E},plugin:{storage:b}}=vendetta,s=[],a={settings:p,onUnload:function(){return s.every(function(t){return!0})}};function $(t,e,o){return{content:b.test}}return a.onLoad=function(){s[0]=h(v.cmd({execute:function(t,e){return $()},name:"vibrate basic",description:"Start a basic vibrating scheme",applicationId:"1097969072022487110",inputType:"1",type:"1"}))},r.default=a,Object.defineProperty(r,"__esModule",{value:!0}),r})({});
