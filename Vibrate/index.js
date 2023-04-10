(function(c){"use strict";const{metro:p,logger:P,commands:f}=vendetta,{vibrate:v}=p.findByProps("vibrate"),y=function(e){return p.findByProps("View").Platform.select({ios:[e],android:e})},m={},d=[];m.onUnload=function(){return d.every(function(e){return e(),!0})};const b=findByProps("sendMessage","receiveMessage"),h=findByProps("createBotMessage");function l(e,r,a){let t=h.createBotMessage({message:e});return console.log(t),t={...t,...r,...a},b.receiveMessage(e.channelId,t)}m.onLoad=function(){d[0]=f.registerCommand({execute:w,type:1,inputType:1,applicationId:"-1",name:"vibrate",displayName:"vibrate",description:"b"+"r".repeat(50),displayDescription:"b"+"r".repeat(50),options:[{type:4,required:!0,name:"duration",displayName:"duration",description:"Duration of one vibration (in milliseconds)",displayDescription:"Duration of one vibration (in milliseconds)",min_value:1,max_value:9999},{type:4,name:"repeat",displayName:"repeat",description:"Number of times to repeat",displayDescription:"Number of times to repeat",min_value:1,max_value:9999999},{type:4,name:"gap",displayName:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)",displayDescription:"Wait between vibrates (only matters if you have more than 1 repeat)"}]})};async function w(e,r){const a=new Map(e.map(function(u){return[u.name,u]})),t=a.get("duration").value,i=a.get("repeat")?.value,s=a.get("gap")?.value;l({channelId:r.channel.id,content:`\u{1F4F3} Vibrating for ${t}ms`+(i?`, ${i} time${i===1?"":"s"}`:"")+"."+(s?`With a gap of ${s}ms.`:"")}),D(t,i,s,function(u,g,o){l({channelId:r.channel.id,content:`\u{1F4F1} Finished vibrating. Done in ${o-n}ms`})})}async function D(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3?arguments[3]:void 0;const i=function(o){return new Promise(function(M){return setTimeout(M,o)})},s=`${+Date.now()}`,u=Date.now();for(let o=0;o<r;o++)v(y(e),!0),await i(e),await i(a);const g=Date.now();t(s,u,g)}return c.default=m,Object.defineProperty(c,"__esModule",{value:!0}),c})({});
