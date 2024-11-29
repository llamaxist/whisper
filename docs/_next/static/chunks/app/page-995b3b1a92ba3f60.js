(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7261:function(){},5425:function(){},7546:function(e,t,s){Promise.resolve().then(s.bind(s,1039))},1039:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var i,Event,r,a,n,o,Event,l,h,c,d=s(7437),u=s(2265),v=s(2707),m=s.n(v);class p{static generateUID(){let e=function(){return("000"+(46656*Math.random()|0).toString(36)).slice(-3)};return e()+e()}static convertTypedArray(e,t){var s=new ArrayBuffer(e.byteLength);return new e.constructor(s).set(e),new t(s)}static setIntervalWithoutDelay(e,t){return e(),setInterval(e,t)}}class f{async enqueue(e){if(this.queue.length>=this.capacity&&await new Promise(e=>{this.waitingEnqueueResolvers.push(e)}),this.waitingDequeueResolvers.length>0){let t=this.waitingDequeueResolvers.shift();t(e)}else this.queue.push(e)}async dequeue(){if(0===this.queue.length){let e=await new Promise(e=>{this.waitingDequeueResolvers.push(e)});return e}let e=this.queue.shift();if(this.waitingEnqueueResolvers.length>0){let e=this.waitingEnqueueResolvers.shift();e()}return e}constructor(e){this.queue=[],this.waitingEnqueueResolvers=[],this.waitingDequeueResolvers=[],this.capacity=e}}(i=o||(o={}))[i.OPENED=0]="OPENED",i[i.CLOSED=1]="CLOSED";class y{onStatus(e){throw Error("Method not implemented.")}listen(e){this.callback=e,setTimeout(this.poll.bind(this),0)}async poll(){var e=await this.recv();void 0!=this.callback&&this.callback(e),this.isOpened()&&setTimeout(this.poll.bind(this),0)}prefixStringToUint8Array(e,t){let s=new TextEncoder,i=s.encode(e),r=new Uint8Array(i.length+t.length);return r.set(i,0),r.set(t,i.length),r}async send(e){if(!this.isOpened())return Promise.resolve(!1);var t=this.prefixStringToUint8Array(this.deviceId,e),s=this.ggwave.encode(this.instance,t,this.ggwave.ProtocolId.GGWAVE_PROTOCOL_AUDIBLE_FASTEST,10),i=p.convertTypedArray(s,Float32Array),r=this.context.createBuffer(1,i.length,this.context.sampleRate);r.getChannelData(0).set(i);var a=this.context.createBufferSource();return a.buffer=r,a.connect(this.context.destination),a.start(0),Promise.resolve(!0)}checkFirstBytes(e,t){let s=new TextEncoder,i=s.encode(t);for(let t=0;t<i.length;t++)if(e[t]!==i[t])return!1;return!0}async open(){if(this.isOpened())return Promise.resolve(!0);this.ggwave=await m()();let e=await this.isReceivable();if(!e)return Promise.resolve(!1);window.AudioContext=window.AudioContext||window.webkitAudioContext,window.OfflineAudioContext=window.OfflineAudioContext||window.webkitOfflineAudioContext,this.context||(this.context=new AudioContext({sampleRate:48e3}),this.context.createRecorder=this.context.createScriptProcessor||this.context.createJavaScriptNode,this.parameters=this.ggwave.getDefaultParameters(),this.parameters.sampleRateInp=this.context.sampleRate,this.parameters.sampleRateOut=this.context.sampleRate,this.instance=this.ggwave.init(this.parameters));var t,s=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1}}),i=this.context.createMediaStreamSource(s);return this.recorder=this.context.createRecorder(1024,1,1),this.recorder.onaudioprocess=(t=this,async e=>{var s=e.inputBuffer,i=t.ggwave.decode(t.instance,p.convertTypedArray(new Float32Array(s.getChannelData(0)),Uint8Array));if(i&&i.length>0){if(t.checkFirstBytes(i,t.deviceId))return;var r=i.slice(t.deviceId.length);await t.recvQueue.enqueue(r)}}),i.connect(this.recorder),this.recorder.connect(this.context.destination),this.state=0,Promise.resolve(!0)}async close(){return this.state=1,Promise.resolve(!0)}recv(){return this.recvQueue.dequeue()}async isReceivable(){var e=s.g.navigator;if(void 0==e)return Promise.reject();e.getUserMedia||(e.getUserMedia=e.getUserMedia||e.webkitGetUserMedia||e.mozGetUserMedia||e.msGetUserMedia);try{return await e.mediaDevices.getUserMedia({audio:!0}),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}isOpened(){return 0==this.state}constructor(){this.state=1,this.recvQueue=new f(1),this.callback=void 0,this.deviceId=p.generateUID()}}y.pollingIntervalMs=200;var b=s(5930),g=s(1207);(Event=Event||(Event={}))[Event.IDLE=0]="IDLE",Event[Event.READY=1]="READY",Event[Event.READ=2]="READ",Event[Event.UPDATE=3]="UPDATE",Event[Event.ABORT=4]="ABORT",Event[Event.COMPLETE=5]="COMPLETE",Event[Event.DATA=6]="DATA",Event[Event.BROADCAST=7]="BROADCAST",Event[Event.METADATA=8]="METADATA",Event[Event.NEXT=9]="NEXT",Event[Event.SEND=10]="SEND",Event[Event.SEND_READY=11]="SEND_READY",Event[Event.SEND_READING=12]="SEND_READING",Event[Event.RECV_READY=13]="RECV_READY",Event[Event.RECV_READING=14]="RECV_READING";let w=function(){let e=new Map;for(let t of Object.values(Event))"number"==typeof t&&e.set(t,t);return e}();class x{static async create(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t instanceof Blob?Promise.resolve(new x(e,new Uint8Array(await t.arrayBuffer()),s)):Promise.resolve(new x(e,t,s))}static async serialize(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(await x.create(e,t,s)).serialize()}serialize(){var e=[this.event.toString().padStart(2,"0"),this.data,this.header];return x.packTuple(e)}unpackData(){return x.unpackTuple(this.data)}unpackHeader(){return x.unpackTuple(this.header)}static packTuple(e){return(0,b.c)(e)}static unpackTuple(e){return(0,g.Jx)(e)}static async deserialize(e){t=e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e;var t,s=this.unpackTuple(t);if(3!=s.length)return;let i=function(e){let t=parseInt(e,10);return w.get(t)||void 0}(s[0]);if(void 0!=i)return new x(i,s[1],s[2])}static stringToBytes(e){return new TextEncoder().encode(e)}constructor(e,t,s=[]){this.event=e,t instanceof Uint8Array?this.data=t:this.data=x.packTuple(t),s instanceof Uint8Array?this.header=s:this.header=x.packTuple(s)}}var E=s(8557);class R{add(e){this.arrays.push(e)}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.arrays=[],void 0!=e&&this.add(e)}concat(){let e=this.arrays.reduce((e,t)=>e+t.length,0),t=new Uint8Array(e),s=0;return this.arrays.forEach(e=>{t.set(e,s),s+=e.length}),t}constructor(){this.arrays=[],this.arrays=[]}}class A{loadString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80;return this.load(A.stringToBytes(e),t)}load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80;return this.blob=e,(t<1||t>80)&&(t=80),this.blockSize=t,this.blocks=Math.ceil(this.blob.length/this.blockSize),this.lastBlock=-1,this.size=e.length,Promise.resolve(this.blocks)}getSize(){return this.size}getBlocks(){return this.blocks}getLastBlock(){return this.lastBlock}hasNext(){return this.lastBlock+1<this.blocks}read(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(void 0==this.blob)return Promise.reject("No blob loaded");if(-1==e&&(e=this.lastBlock+1),e>=this.blocks)return Promise.resolve(void 0);var t=e*this.blockSize;if(t>=this.blob.length)return Promise.resolve(void 0);this.lastBlock=e;var s=t+this.blockSize;return s>this.blob.length&&(s=this.blob.length),Promise.resolve(this.blob.slice(t,s))}readString(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return new Promise(async(t,s)=>{var i=await this.read(e);if(void 0==i){t(void 0);return}t(A.bytesToString(i))})}static bytesToString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf-8";return new TextDecoder(t).decode(e)}static stringToBytes(e){return new TextEncoder().encode(e)}static stringToBlob(e){return new Blob([e],{type:"text/plain"})}static async blobToString(e){let t=await e.text();return Promise.resolve(t)}constructor(){this.blockSize=80,this.blocks=-1,this.size=-1,this.lastBlock=-1,this.blob=void 0}}class D{update(e){return e<=this.blocks&&(this.block=e),this.updatedAt=new Date,this}constructor(e,t){this.sessionId=e,this.blocks=t,this.block=-1,this.createdAt=new Date,this.updatedAt=this.createdAt}}(r=l||(l={}))[r.READY=0]="READY",r[r.SENDING=1]="SENDING";class T{onStatus(e){this.statusCallback=e}async update(e){void 0!=this.statusCallback&&await this.statusCallback(e)}open(){return this.audioTransport.open()}async poll(){var e=await this.recv();void 0!=this.listenCallback&&this.listenCallback(e),this.isOpened()&&setTimeout(this.poll.bind(this),0)}close(){return this.audioTransport.close()}listen(e){this.listenCallback=e,setTimeout(this.poll.bind(this),0)}isOpened(){return this.audioTransport.isOpened()}async onSending(){setTimeout(this.ship.bind(this),0)}async onCompleted(){this.disableRetryShip(),this.sendResolve(!0),this.status=void 0}async ship(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;var t=await this.reader.read(e),s=this.reader.hasNext();if(void 0!=this.status&&this.update(this.status.update(e)),this.disableRetryShip(),null!=t){var i=[this.protocolVersion,this.sessionId,e,this.reader.getBlocks(),s];let r=await x.serialize(Event.DATA,t,i);this.retryShipHandle=p.setIntervalWithoutDelay(async()=>{await this.audioTransport.send(r)},9e3)}if(null==t||!1==s){this.fsm.dispatch(Event.COMPLETE);return}}async parseDataHeader(e){var t=e.unpackHeader();if(5!=t.length)return Promise.reject("Invalid Header");let[s,i,r,a,n]=t;return s!=this.protocolVersion?Promise.reject("Invalid Protocol Version"):"number"!=typeof r?Promise.reject("Invalid Block"):t}async parseNextHeader(e){var t=e.unpackHeader();if(3!=t.length)return Promise.reject("Invalid Header");let[s,i,r]=t;return s!=this.protocolVersion?Promise.reject("Invalid Protocol Version"):i!=this.sessionId?Promise.reject("Invalid Session Id"):t}disableRetryNext(){void 0!=this.retryNextHandle&&(clearInterval(this.retryNextHandle),this.retryNextHandle=void 0)}disableRetryShip(){void 0!=this.retryShipHandle&&(clearInterval(this.retryShipHandle),this.retryShipHandle=void 0)}async handleDataFromSender(e){var[t,s,i,r,a]=await this.parseDataHeader(e);if(this.disableRetryNext(),void 0==this.status&&(this.status=new D(s,r)),this.status.update(i),this.byteBuffer.add(e.data),a){await this.update(this.status);var n=[t,s,i+1];this.retryNextHandle=p.setIntervalWithoutDelay(async()=>{this.audioTransport.send(await x.serialize(Event.NEXT,[],n))},9e3);return}let o=this.byteBuffer.concat();this.recvCompleteQueue.enqueue(o),this.byteBuffer.clear(),this.status=void 0}async handleNextFromReceiver(e){var[t,s,i]=await this.parseNextHeader(e);this.ship(i)}async collect(e){var t=await x.deserialize(e);if(void 0!=t){if(this.disableRetryShip(),t.event==Event.DATA){this.handleDataFromSender(t);return}if(t.event==Event.NEXT){this.handleNextFromReceiver(t);return}}}async send(e){if(!this.fsm.can(Event.SEND))return Promise.reject("Invalid State");await this.reader.load(e),this.sessionId=p.generateUID(),this.status=new D(this.sessionId,this.reader.getBlocks());let{promise:t,resolve:s,reject:i}=Promise.withResolvers();return this.sendResolve=s,this.sendReject=i,this.fsm.dispatch(Event.SEND),t}recv(){return this.recvCompleteQueue.dequeue()}constructor(e){this.audioTransport=e,this.reader=new A,this.sessionId=void 0,this.retryNextHandle=void 0,this.retryShipHandle=void 0,this.protocolVersion="0",this.recvCompleteQueue=new f(1),this.listenCallback=void 0,this.byteBuffer=new R,this.statusCallback=void 0,this.status=void 0;let t=[(0,E.t)(0,Event.SEND,1,this.onSending.bind(this)),(0,E.t)(1,Event.COMPLETE,0,this.onCompleted.bind(this))];this.fsm=new E.StateMachine(0,t),this.audioTransport.listen(this.collect.bind(this))}}async function S(){var e=new T(new y);return await e.open(),Promise.resolve(e)}(a=h||(h={}))[a.IDLE=0]="IDLE",a[a.READY=1]="READY",a[a.READING=2]="READING",a[a.COMPLETED=3]="COMPLETED",a[a.ABORTED=4]="ABORTED";class N{static fromFile(e){return new N(e.name,e.type,e.size)}serialize(){return x.packTuple([this.name,this.type,this.bytes,this.id])}static deserialize(e){var t=x.unpackTuple(e);if(4==t.length)return new N(t[0],t[1],parseInt(t[2],10),t[3])}constructor(e,t,s,i=p.generateUID()){this.name=e,this.type=t,this.bytes=s,this.id=i}}(n=c||(c={}))[n.IDLE=0]="IDLE",n[n.SEND=1]="SEND",n[n.RECEIVE=2]="RECEIVE";class k{onStatus(e){this.transport.onStatus(e)}close(){throw Error("Method not implemented.")}async onMessageAsSender(e){if(this.fsm.getState()==h.READY){var t,s=await x.deserialize(e);if(void 0==s||s.event!=Event.READ)return Promise.resolve();var i=s.unpackData();if(1!=i.length||i[0]!=(null===(t=this.meta)||void 0===t?void 0:t.id))return Promise.resolve();this.fsm.dispatch(Event.READ)}return Promise.resolve()}downloadFile(e){let t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=e.name,s.click()}async onMessageAsReceiver(e){if(this.fsm.getState()==h.READY){var t=await x.deserialize(e);if(void 0==t||t.event!=Event.BROADCAST)return Promise.resolve();var s=N.deserialize(t.data);return void 0==s||(this.meta=s,this.fsm.dispatch(Event.READ)),Promise.resolve()}if(this.fsm.getState()==h.READING){if(void 0==this.meta)return Promise.resolve();let t=new Blob([e],{type:this.meta.type});this.file=new File([t],this.meta.name,{type:this.meta.type}),this.fsm.dispatch(Event.COMPLETE)}return Promise.resolve()}async onMessage(e){return 1==this.mode?this.onMessageAsSender(e):2==this.mode?this.onMessageAsReceiver(e):Promise.resolve()}send(e){if(!this.fsm.can(Event.READY))return Promise.reject("Invalid State");if(0!=this.mode)return Promise.reject("Invalid operation mode");this.mode=1,this.file=e;let t=this.defer();return this.fsm.dispatch(Event.READY),t}async defer(){let{promise:e,resolve:t,reject:s}=Promise.withResolvers();return this.resolveFn=t,this.rejectFn=s,e}recv(){if(!this.fsm.can(Event.READY))return Promise.reject("Invalid State");if(0!=this.mode)return Promise.reject("Invalid operation mode");this.mode=2;let e=this.defer();return this.fsm.dispatch(Event.READY),e}listen(e){throw Error("Method not implemented.")}async onSendReady(){void 0!=this.file&&(this.meta=N.fromFile(this.file),this.broadcast())}async onRecvReady(){}async onReady(){return 1==this.mode?this.onSendReady():2==this.mode?this.onRecvReady():void 0}async broadcast(){if(void 0!=this.meta&&this.fsm.getState()==h.READY){var e=await x.create(Event.BROADCAST,this.meta.serialize());if(!await this.transport.send(e.serialize())){this.fsm.dispatch(Event.ABORT);return}setTimeout(this.broadcast.bind(this),1e4)}}async sendFile(){if(void 0==this.file){this.fsm.dispatch(Event.ABORT);return}var e=new Uint8Array(await this.file.arrayBuffer());if(!await this.transport.send(e)){this.fsm.dispatch(Event.ABORT);return}this.fsm.dispatch(Event.COMPLETE)}async onReadingAsSender(){if(void 0==this.file){this.fsm.dispatch(Event.ABORT);return}this.sendFile()}async onReadingAsReceiver(){void 0!=this.meta&&this.transport.send(await x.serialize(Event.READ,[this.meta.id]))}async onReading(){return 1==this.mode?this.onReadingAsSender():2==this.mode?this.onReadingAsReceiver():void 0}async onAborted(){this.resolveFn(!1),this.clean()}async onCompleted(){1==this.mode?this.resolveFn(!0):2==this.mode&&this.resolveFn(this.file),this.clean()}clean(){this.file=void 0,this.meta=void 0,this.rejectFn=void 0,this.resolveFn=void 0,this.mode=0}constructor(e){this.transport=e,this.file=void 0,this.meta=void 0,this.mode=0;let t=[(0,E.t)(h.IDLE,Event.READY,h.READY,this.onReady.bind(this)),(0,E.t)(h.READY,Event.READ,h.READING,this.onReading.bind(this)),(0,E.t)(h.READING,Event.ABORT,h.ABORTED,this.onAborted.bind(this)),(0,E.t)(h.READING,Event.COMPLETE,h.COMPLETED,this.onCompleted.bind(this)),(0,E.t)(h.COMPLETED,Event.READY,h.READY,this.onReady.bind(this)),(0,E.t)(h.ABORTED,Event.READY,h.READY,this.onReady.bind(this))];this.fsm=new E.StateMachine(h.IDLE,t),this.transport.listen(this.onMessage.bind(this))}}async function P(){return Promise.resolve(new k(await S()))}var I=()=>{let[e,t]=(0,u.useState)(void 0),s=async()=>{var e=await P();return e.onStatus(async e=>{var t=document.getElementById("status");if(null!=t){var s=((e.block+1)/e.blocks*100).toFixed(2);t.innerText="sessionId=".concat(e.sessionId,", percent=").concat(s,"%, block=").concat(e.block,", blocks=").concat(e.blocks),t.style.color="black"}}),e},i=e=>{let t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=e.name,s.click()},r=async e=>{var t=void 0;void 0==t&&(t=await s()),i(await t.recv())},a=async t=>{if(void 0!=e){var i=void 0;void 0==i&&(i=await s()),await i.send(e)}};return(0,d.jsx)("main",{className:"max-w-6xl flex flex-col md:flex-row items-center justify-between p-6",children:(0,d.jsxs)("div",{className:"border border-dashed border-gray-300 bg-white p-6 rounded-lg shadow-md w-full text-center",children:[(0,d.jsx)("div",{className:"text-blue-500 text-5xl",children:(0,d.jsx)("i",{className:"fas fa-plus-circle"})}),(0,d.jsx)("h2",{className:"text-gray-800 font-semibold text-xl mt-4",children:"Whisper"}),(0,d.jsx)("p",{className:"text-gray-500 mt-2",children:"A demo app"}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"mt-4",children:[(0,d.jsx)("input",{type:"file",onChange:e=>{t(e.target.files[0])},className:"block w-full mb-4",id:"fileInput",style:{display:"none"}}),(0,d.jsx)("label",{htmlFor:"fileInput",className:"mx-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600",children:"Select File"}),e&&(0,d.jsxs)("div",{className:"text-gray-700 mt-4",children:[(0,d.jsxs)("p",{children:["File Name: ",e.name]}),(0,d.jsxs)("p",{children:["File Size: ",e.size," bytes"]})]}),!e&&(0,d.jsxs)("div",{children:[(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]}),(0,d.jsxs)("div",{className:"mt-8",children:[(0,d.jsx)("label",{className:"mx-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600",onClick:a,children:"Send"}),(0,d.jsx)("label",{className:"mx-8 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600",onClick:r,children:"Receive"})]}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"mt-8",children:(0,d.jsx)("p",{id:"status"})})]})]})})},j=()=>(0,d.jsx)("div",{className:"h-screen w-full  bg-gray-100 flex items-center justify-center",children:(0,d.jsxs)("div",{className:"h-screen w-full  bg-gray-100",children:[(0,d.jsx)("div",{className:" mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200",children:(0,d.jsxs)("header",{className:"bg-gray-100 py-3 px-4 flex items-center justify-between",children:[(0,d.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,d.jsx)("img",{src:"https://placehold.co/24x24",alt:"Firefox Logo",className:"h-6"}),(0,d.jsx)("h1",{className:"text-gray-800 font-semibold text-lg",children:"Whisper"})]}),(0,d.jsx)("nav",{className:"flex items-center space-x-3 text-gray-500",children:(0,d.jsx)("i",{className:"fas fa-user-circle text-xl"})})]})}),(0,d.jsx)(I,{}),(0,d.jsxs)("footer",{className:"bg-gray-100 p-4 flex items-center justify-between text-sm text-gray-500 border-t border-gray-200",children:[(0,d.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,d.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"Legal"}),(0,d.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"Privacy"}),(0,d.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"Cookies"}),(0,d.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"GitHub"})]}),(0,d.jsx)("button",{className:"bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg",children:"Feedback"})]})]})})}},function(e){e.O(0,[69,971,472,744],function(){return e(e.s=7546)}),_N_E=e.O()}]);