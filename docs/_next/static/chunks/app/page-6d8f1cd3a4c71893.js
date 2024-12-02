(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7261:function(){},5425:function(){},7546:function(e,t,s){Promise.resolve().then(s.bind(s,8075))},8075:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return G}});var i,r,Event,a,n,o,l,c,Event,h,d,u,v=s(7437),g=s(2265),m=s(2707),f=s.n(m),p=s(3838);class b{static generateUID(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return("000"+(46656*Math.random()|0).toString(36)).slice(-e)}static convertTypedArray(e,t){var s=new ArrayBuffer(e.byteLength);return new e.constructor(s).set(e),new t(s)}static setIntervalWithoutDelay(e,t){return e(),setInterval(e,t)}static getHash(e){let t=(0,p.w)(e);return t.slice(0,8)}static compareBytes(e,t){if(e.length!=t.length)return!1;for(let s=0;s<e.length;s++)if(e[s]!=t[s])return!1;return!0}static stringToBytes(e){return new TextEncoder().encode(e)}static bytesToString(e){return new TextDecoder().decode(e)}static bytesToBase64(e){return btoa(String.fromCharCode.apply(null,Array.from(e)))}static base64ToBytes(e){return new Uint8Array(atob(e).split("").map(e=>e.charCodeAt(0)))}}class y{async enqueue(e){if(this.queue.length>=this.capacity&&await new Promise(e=>{this.waitingEnqueueResolvers.push(e)}),this.waitingDequeueResolvers.length>0){let t=this.waitingDequeueResolvers.shift();t(e)}else this.queue.push(e)}async dequeue(){if(0===this.queue.length){let e=await new Promise(e=>{this.waitingDequeueResolvers.push(e)});return e}let e=this.queue.shift();if(this.waitingEnqueueResolvers.length>0){let e=this.waitingEnqueueResolvers.shift();e()}return e}constructor(e){this.queue=[],this.waitingEnqueueResolvers=[],this.waitingDequeueResolvers=[],this.capacity=e}}(i=l||(l={}))[i.OPENED=0]="OPENED",i[i.CLOSED=1]="CLOSED";class x{onStatus(e){throw Error("Method not implemented.")}listen(e){this.callback=e,setTimeout(this.poll.bind(this),0)}async poll(){var e=await this.recv();void 0!=this.callback&&this.callback(e),this.isOpened()&&setTimeout(this.poll.bind(this),0)}prefixStringToUint8Array(e,t){let s=new TextEncoder,i=s.encode(e),r=new Uint8Array(i.length+t.length);return r.set(i,0),r.set(t,i.length),r}async send(e){if(!this.isOpened())return Promise.resolve(!1);var t=this.prefixStringToUint8Array(this.deviceId,e),s=this.ggwave.encode(this.instance,t,this.ggwave.ProtocolId.GGWAVE_PROTOCOL_AUDIBLE_FASTEST,10),i=b.convertTypedArray(s,Float32Array),r=this.context.createBuffer(1,i.length,this.context.sampleRate);r.getChannelData(0).set(i);var a=this.context.createBufferSource();return a.buffer=r,a.connect(this.context.destination),a.start(0),Promise.resolve(!0)}checkFirstBytes(e,t){let s=new TextEncoder,i=s.encode(t);for(let t=0;t<i.length;t++)if(e[t]!==i[t])return!1;return!0}async open(){if(this.isOpened())return Promise.resolve(!0);this.ggwave=await f()();let e=await this.isReceivable();if(!e)return Promise.resolve(!1);window.AudioContext=window.AudioContext||window.webkitAudioContext,window.OfflineAudioContext=window.OfflineAudioContext||window.webkitOfflineAudioContext,this.context||(this.context=new AudioContext({sampleRate:48e3}),this.context.createRecorder=this.context.createScriptProcessor||this.context.createJavaScriptNode,this.parameters=this.ggwave.getDefaultParameters(),this.parameters.sampleRateInp=this.context.sampleRate,this.parameters.sampleRateOut=this.context.sampleRate,this.instance=this.ggwave.init(this.parameters));var t,s=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1}}),i=this.context.createMediaStreamSource(s);return this.recorder=this.context.createRecorder(1024,1,1),this.recorder.onaudioprocess=(t=this,async e=>{var s=e.inputBuffer,i=t.ggwave.decode(t.instance,b.convertTypedArray(new Float32Array(s.getChannelData(0)),Uint8Array));if(i&&i.length>0){if(t.checkFirstBytes(i,t.deviceId))return;var r=i.slice(t.deviceId.length);await t.recvQueue.enqueue(r)}}),i.connect(this.recorder),this.recorder.connect(this.context.destination),this.state=0,Promise.resolve(!0)}async close(){return this.state=1,Promise.resolve(!0)}recv(){return this.recvQueue.dequeue()}async isReceivable(){var e=s.g.navigator;if(void 0==e)return Promise.reject();e.getUserMedia||(e.getUserMedia=e.getUserMedia||e.webkitGetUserMedia||e.mozGetUserMedia||e.msGetUserMedia);try{return await e.mediaDevices.getUserMedia({audio:!0}),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}isOpened(){return 0==this.state}constructor(){this.state=1,this.recvQueue=new y(1),this.callback=void 0,this.deviceId=b.generateUID()}}x.pollingIntervalMs=200,(r=c||(c={}))[r.OPENED=0]="OPENED",r[r.CLOSED=1]="CLOSED";class w{onStatus(e){throw Error("Method not implemented.")}listen(e){this.callback=e,setTimeout(this.poll.bind(this),0)}async poll(){var e=await this.recv();void 0!=this.callback&&this.callback(e),this.isOpened()&&setTimeout(this.poll.bind(this),0)}prefixStringToUint8Array(e,t){let s=new TextEncoder,i=s.encode(e),r=new Uint8Array(i.length+t.length);return r.set(i,0),r.set(t,i.length),r}async send(e){if(!this.isOpened())return Promise.resolve(!1);var t=b.bytesToBase64(e);return this.visionInterface.send(t)}checkFirstBytes(e,t){let s=new TextEncoder,i=s.encode(t);for(let t=0;t<i.length;t++)if(e[t]!==i[t])return!1;return!0}async open(){return this.isOpened()||(this.state=0),Promise.resolve(!0)}async close(){return this.state=1,Promise.resolve(!0)}recv(){return this.recvQueue.dequeue()}isOpened(){return 0==this.state}constructor(e){this.visionInterface=e,this.state=1,this.recvQueue=new y(1),this.callback=void 0,this.lastHash=new Uint8Array,this.deviceId=b.generateUID(),this.visionInterface.listen(async e=>{if(void 0!=e){var t=b.base64ToBytes(e),s=b.getHash(t);b.compareBytes(s,this.lastHash)||(this.lastHash=s,this.recvQueue.enqueue(t))}})}}w.pollingIntervalMs=200;var E=void 0,k=void 0,S=s(5930),A=s(1207);(Event=Event||(Event={}))[Event.IDLE=0]="IDLE",Event[Event.READY=1]="READY",Event[Event.READ=2]="READ",Event[Event.UPDATE=3]="UPDATE",Event[Event.ABORT=4]="ABORT",Event[Event.COMPLETE=5]="COMPLETE",Event[Event.DATA=6]="DATA",Event[Event.BROADCAST=7]="BROADCAST",Event[Event.METADATA=8]="METADATA",Event[Event.NEXT=9]="NEXT",Event[Event.SEND=10]="SEND",Event[Event.SEND_READY=11]="SEND_READY",Event[Event.SEND_READING=12]="SEND_READING",Event[Event.RECV_READY=13]="RECV_READY",Event[Event.RECV_READING=14]="RECV_READING";let D=function(){let e=new Map;for(let t of Object.values(Event))"number"==typeof t&&e.set(t,t);return e}();class R{static async create(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t instanceof Blob?Promise.resolve(new R(e,new Uint8Array(await t.arrayBuffer()),s)):Promise.resolve(new R(e,t,s))}static async serialize(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(await R.create(e,t,s)).serialize()}serialize(){let e=R.packTuple([this.event.toString().padStart(2,"0"),this.data,this.header]),t=b.getHash(e);return R.packTuple([e,t])}unpackData(){return R.unpackTuple(this.data)}unpackHeader(){return R.unpackTuple(this.header)}static packTuple(e){return(0,S.c)(e)}static unpackTuple(e){return(0,A.Jx)(e)}static async deserialize(e){t=e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e;var t,s=this.unpackTuple(t);if(2!=s.length)return;let[i,r]=s;if(!b.compareBytes(r,b.getHash(i))||3!=(s=R.unpackTuple(i)).length)return;let a=function(e){let t=parseInt(e,10);return D.get(t)||void 0}(s[0]);if(void 0!=a)return new R(a,s[1],s[2])}static stringToBytes(e){return new TextEncoder().encode(e)}static bytesToString(e){return new TextDecoder().decode(e)}constructor(e,t,s=[]){this.event=e,t instanceof Uint8Array?this.data=t:this.data=R.packTuple(t),s instanceof Uint8Array?this.header=s:this.header=R.packTuple(s)}}var T=s(8557);class N{put(e,t){this.blocks["block-".concat(e)]=t}exists(e){return"block-".concat(e) in this.blocks}get(e){let t="block-".concat(e);if(t in this.blocks)return this.blocks[t]}getLatestBlock(){let e=Object.keys(this.blocks).sort(),t=this.latestBlock;for(let s=t+1;s<e.length;s++){let t=e[s];if(null==t?void 0:t.startsWith("block-")){let e=parseInt(t.split("-")[1]);e>this.latestBlock&&(this.latestBlock=e)}}return this.latestBlock}aggregate(){let e=Object.values(this.blocks),t=e.reduce((e,t)=>e+t.length,0),s=new Uint8Array(t),i=0;return e.forEach(e=>{s.set(e,i),i+=e.length}),s}verify(){for(let e=0;e<=this.getLatestBlock();e++)if(!this.exists(e))return!1;return!0}clear(){this.blocks={}}constructor(){this.blocks={},this.latestBlock=-1}}var P=s(263).Buffer;class I{put(e,t){localStorage.setItem("block-".concat(e),JSON.stringify(Array.from(t))),e>this.latestBlock&&(this.latestBlock=e)}exists(e){return null!==localStorage.getItem("block-".concat(e))}get(e){let t=localStorage.getItem("block-".concat(e));if(null!==t)return new Uint8Array(JSON.parse(t))}getLatestBlock(){if(this.latestBlock+1>=localStorage.length)return this.latestBlock;for(let e=0;e<localStorage.length;e++){let t=localStorage.key(e);if(null==t?void 0:t.startsWith("block-")){let e=parseInt(t.split("-")[1]);e>this.latestBlock&&(this.latestBlock=e)}}return this.latestBlock}aggregate(){let e=[];for(let t=0;t<=this.getLatestBlock();t++){let s=this.get(t);if(void 0==s)return;e.push(s)}return new Uint8Array(P.concat(e))}clear(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],localStorage.clear()}verify(){for(let e=0;e<=this.getLatestBlock();e++)if(!this.exists(e))return!1;return!0}constructor(){this.latestBlock=-1}}class j{clearPersistent(){this.persistentStorage.clear()}clear(){this.memoryStorage.clear()}enablePersistent(){this.activeStorage=this.persistentStorage}put(e,t){this.activeStorage.put(e,t)}exists(e){return this.activeStorage.exists(e)}get(e){return this.activeStorage.get(e)}getLatestBlock(){return this.activeStorage.getLatestBlock()}aggregate(){return this.activeStorage.aggregate()}verify(){return this.activeStorage.verify()}constructor(){this.memoryStorage=new N,this.persistentStorage=new I,this.activeStorage=this.memoryStorage}}class B{loadString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return this.load(B.stringToBytes(e),t)}load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return this.blob=e,(t<1||t>100)&&(t=100),this.blockSize=t,this.blocks=Math.ceil(this.blob.length/this.blockSize),this.lastBlock=-1,this.size=e.length,Promise.resolve(this.blocks)}getSize(){return this.size}getBlocks(){return this.blocks}getLastBlock(){return this.lastBlock}hasNext(){return this.lastBlock+1<this.blocks}read(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(void 0==this.blob)return Promise.reject("No blob loaded");if(-1==e&&(e=this.lastBlock+1),e>=this.blocks)return Promise.resolve(void 0);var t=e*this.blockSize;if(t>=this.blob.length)return Promise.resolve(void 0);this.lastBlock=e;var s=t+this.blockSize;return s>this.blob.length&&(s=this.blob.length),Promise.resolve(this.blob.slice(t,s))}readString(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return new Promise(async(t,s)=>{var i=await this.read(e);if(void 0==i){t(void 0);return}t(B.bytesToString(i))})}static bytesToString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf-8";return new TextDecoder(t).decode(e)}static stringToBytes(e){return new TextEncoder().encode(e)}static stringToBlob(e){return new Blob([e],{type:"text/plain"})}static async blobToString(e){let t=await e.text();return Promise.resolve(t)}constructor(){this.blockSize=100,this.blocks=-1,this.size=-1,this.lastBlock=-1,this.blob=void 0}}class C{update(e){return e<=this.blocks&&(this.block=e),this.updatedAt=new Date,this}getPercent(){return(this.block+1)/this.blocks*100}toString(){return"sessionId=".concat(this.sessionId,", percent=").concat(this.getPercent().toFixed(2),"%, block=").concat(this.block,", blocks=").concat(this.blocks-1)}constructor(e,t){this.sessionId=e,this.blocks=t,this.block=-1,this.createdAt=new Date,this.updatedAt=this.createdAt}}(a=h||(h={}))[a.READY=0]="READY",a[a.SENDING=1]="SENDING";class O{onStatus(e){this.statusCallback=e}async updateStatus(e){void 0!=this.statusCallback&&await this.statusCallback(e)}open(){return this.audioTransport.open()}async poll(){var e=await this.recv();void 0!=this.listenCallback&&this.listenCallback(e),this.isOpened()&&setTimeout(this.poll.bind(this),0)}close(){return this.audioTransport.close()}listen(e){this.listenCallback=e,setTimeout(this.poll.bind(this),0)}isOpened(){return this.audioTransport.isOpened()}async onSending(){setTimeout(this.ship.bind(this),0)}async onCompleted(){this.disableRetryShip(),this.sendResolve(!0),this.status=void 0}async ship(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;var t=await this.reader.read(e),s=this.reader.hasNext();if(void 0!=this.status&&this.updateStatus(this.status.update(e)),this.disableRetryShip(),null!=t){var i=[this.protocolVersion,this.sessionId,e,this.reader.getBlocks(),s];let r=await R.serialize(Event.DATA,t,i);this.retryShipHandle=b.setIntervalWithoutDelay(async()=>{await this.audioTransport.send(r)},9e3)}if(null==t||!1==s){this.fsm.dispatch(Event.COMPLETE);return}}async parseDataHeader(e){var t=e.unpackHeader();if(5!=t.length)return Promise.reject("Invalid Header");let[s,i,r,a,n]=t;return s!=this.protocolVersion?Promise.reject("Invalid Protocol Version"):"number"!=typeof r?Promise.reject("Invalid Block"):t}async parseNextHeader(e){var t=e.unpackHeader();if(3!=t.length)return Promise.reject("Invalid Header");let[s,i,r]=t;return s!=this.protocolVersion?Promise.reject("Invalid Protocol Version"):i!=this.sessionId?Promise.reject("Invalid Session Id"):t}disableRetryNext(){void 0!=this.retryNextHandle&&(clearInterval(this.retryNextHandle),this.retryNextHandle=void 0)}disableRetryShip(){void 0!=this.retryShipHandle&&(clearInterval(this.retryShipHandle),this.retryShipHandle=void 0)}async handleDataFromSender(e){var[t,s,i,r,a]=await this.parseDataHeader(e);if(this.disableRetryNext(),void 0==this.status&&(this.status=new C(s,r)),this.updateStatus(this.status.update(i)),0==i&&r>30&&this.blockStorage.enablePersistent(),this.blockStorage.put(i,e.data),a){await this.updateStatus(this.status);let e=this.blockStorage.getLatestBlock();var n=[t,s,e];this.retryNextHandle=b.setIntervalWithoutDelay(async()=>{this.audioTransport.send(await R.serialize(Event.NEXT,[],n))},9e3);return}let o=this.blockStorage.aggregate();void 0==o||this.recvCompleteQueue.enqueue(o),this.blockStorage.clear(),this.status=void 0}async handleNextFromReceiver(e){var[t,s,i]=await this.parseNextHeader(e);this.ship(i)}async collect(e){var t=await R.deserialize(e);if(void 0!=t){if(this.disableRetryShip(),t.event==Event.DATA){this.handleDataFromSender(t);return}if(t.event==Event.NEXT){this.handleNextFromReceiver(t);return}}}async send(e){if(!this.fsm.can(Event.SEND))return Promise.reject("Invalid State");await this.reader.load(e),this.sessionId=b.generateUID(),this.status=new C(this.sessionId,this.reader.getBlocks());let{promise:t,resolve:s,reject:i}=Promise.withResolvers();return this.sendResolve=s,this.sendReject=i,this.fsm.dispatch(Event.SEND),t}recv(){return this.recvCompleteQueue.dequeue()}constructor(e){this.audioTransport=e,this.reader=new B,this.sessionId=void 0,this.retryNextHandle=void 0,this.retryShipHandle=void 0,this.protocolVersion="0",this.recvCompleteQueue=new y(1),this.listenCallback=void 0,this.blockStorage=new j,this.statusCallback=void 0,this.status=void 0;let t=[(0,T.t)(0,Event.SEND,1,this.onSending.bind(this)),(0,T.t)(1,Event.COMPLETE,0,this.onCompleted.bind(this))];this.fsm=new T.StateMachine(0,t),this.audioTransport.listen(this.collect.bind(this))}}async function M(){var e=new O(await (void 0==k?Promise.reject("Must configure VisionInterface first"):(void 0==E&&(E=new w(k)),Promise.resolve(E))));return await e.open(),Promise.resolve(e)}(n=d||(d={}))[n.IDLE=0]="IDLE",n[n.READY=1]="READY",n[n.READING=2]="READING",n[n.COMPLETED=3]="COMPLETED",n[n.ABORTED=4]="ABORTED";class L{static fromFile(e){return new L(e.name,e.type,e.size)}serialize(){return R.packTuple([this.name,this.type,this.bytes,this.id])}static deserialize(e){var t=R.unpackTuple(e);if(4==t.length)return new L(t[0],t[1],parseInt(t[2],10),t[3])}constructor(e,t,s,i=b.generateUID()){this.name=e,this.type=t,this.bytes=s,this.id=i}}(o=u||(u={}))[o.IDLE=0]="IDLE",o[o.SEND=1]="SEND",o[o.RECEIVE=2]="RECEIVE";class U{clear(){return this.transport.blockStorage.clearPersistent(),Promise.resolve()}onStatus(e){this.transport.onStatus(e)}close(){throw Error("Method not implemented.")}async onMessageAsSender(e){if(this.fsm.getState()==d.READY){var t,s=await R.deserialize(e);if(void 0==s||s.event!=Event.READ)return Promise.resolve();var i=s.unpackData();if(1!=i.length||i[0]!=(null===(t=this.meta)||void 0===t?void 0:t.id))return Promise.resolve();this.fsm.dispatch(Event.READ)}return Promise.resolve()}downloadFile(e){let t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=e.name,s.click()}async onMessageAsReceiver(e){if(this.fsm.getState()==d.READY){var t=await R.deserialize(e);if(void 0==t||t.event!=Event.BROADCAST)return Promise.resolve();var s=L.deserialize(t.data);return void 0==s||(this.meta=s,this.fsm.dispatch(Event.READ)),Promise.resolve()}if(this.fsm.getState()==d.READING){if(void 0==this.meta)return Promise.resolve();let t=new Blob([e],{type:this.meta.type});this.file=new File([t],this.meta.name,{type:this.meta.type}),this.fsm.dispatch(Event.COMPLETE)}return Promise.resolve()}async onMessage(e){return 1==this.mode?this.onMessageAsSender(e):2==this.mode?this.onMessageAsReceiver(e):Promise.resolve()}send(e){if(!this.fsm.can(Event.READY))return Promise.reject("Invalid State");if(0!=this.mode)return Promise.reject("Invalid operation mode");this.mode=1,this.file=e;let t=this.defer();return this.fsm.dispatch(Event.READY),t}async defer(){let{promise:e,resolve:t,reject:s}=Promise.withResolvers();return this.resolveFn=t,this.rejectFn=s,e}recv(){if(!this.fsm.can(Event.READY))return Promise.reject("Invalid State");if(0!=this.mode)return Promise.reject("Invalid operation mode");this.mode=2;let e=this.defer();return this.fsm.dispatch(Event.READY),e}listen(e){throw Error("Method not implemented.")}async onSendReady(){void 0!=this.file&&(this.meta=L.fromFile(this.file),this.broadcast())}async onRecvReady(){}async onReady(){return 1==this.mode?this.onSendReady():2==this.mode?this.onRecvReady():void 0}async broadcast(){if(void 0!=this.meta&&this.fsm.getState()==d.READY){var e=await R.create(Event.BROADCAST,this.meta.serialize());if(!await this.transport.send(e.serialize())){this.fsm.dispatch(Event.ABORT);return}setTimeout(this.broadcast.bind(this),1e4)}}async sendFile(){if(void 0==this.file){this.fsm.dispatch(Event.ABORT);return}var e=new Uint8Array(await this.file.arrayBuffer());if(!await this.transport.send(e)){this.fsm.dispatch(Event.ABORT);return}this.fsm.dispatch(Event.COMPLETE)}async onReadingAsSender(){if(void 0==this.file){this.fsm.dispatch(Event.ABORT);return}this.sendFile()}async onReadingAsReceiver(){void 0!=this.meta&&this.transport.send(await R.serialize(Event.READ,[this.meta.id]))}async onReading(){return 1==this.mode?this.onReadingAsSender():2==this.mode?this.onReadingAsReceiver():void 0}async onAborted(){this.resolveFn(!1),this.clean()}async onCompleted(){1==this.mode?this.resolveFn(!0):2==this.mode&&this.resolveFn(this.file),this.clean()}clean(){this.file=void 0,this.meta=void 0,this.rejectFn=void 0,this.resolveFn=void 0,this.mode=0}constructor(e){this.transport=e,this.file=void 0,this.meta=void 0,this.mode=0;let t=[(0,T.t)(d.IDLE,Event.READY,d.READY,this.onReady.bind(this)),(0,T.t)(d.READY,Event.READ,d.READING,this.onReading.bind(this)),(0,T.t)(d.READING,Event.ABORT,d.ABORTED,this.onAborted.bind(this)),(0,T.t)(d.READING,Event.COMPLETE,d.COMPLETED,this.onCompleted.bind(this)),(0,T.t)(d.COMPLETED,Event.READY,d.READY,this.onReady.bind(this)),(0,T.t)(d.ABORTED,Event.READY,d.READY,this.onReady.bind(this))];this.fsm=new T.StateMachine(d.IDLE,t),this.transport.listen(this.onMessage.bind(this))}}async function F(){return Promise.resolve(new U(await M()))}var z=s(7323),H=s(8526),Y=()=>{let[e,t]=(0,g.useState)("Whisper"),[s,i]=(0,g.useState)(void 0),r={send:function(e){return t(e),Promise.resolve(!0)},listen:function(e){i(()=>t=>e(t))},recv:async function(e){void 0!=s&&await s(e)}};k=r;let[a,n]=(0,g.useState)("");g.useEffect(()=>{navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{navigator.mediaDevices.enumerateDevices().then(e=>{let t=e.find(e=>"videoinput"===e.kind&&(e.label.includes("Front")||e.label.includes("FaceTime")));if(void 0==t)return;let s=t.deviceId;n(s)}).catch(e=>console.error("Error accessing media devices:",e))}).catch(e=>{})},[]);let{ref:o}=(0,H.T_)({paused:!a,deviceId:a,onDecodeResult(e){r.recv(e.getText())}});return(0,v.jsx)("div",{className:"flex flex-col justify-center items-center  border border-dashed border-gray-300 bg-white rounded-lg shadow-md w-full",children:(0,v.jsxs)("div",{className:"columns-2 mt-8 p-16",children:[(0,v.jsx)("div",{className:"flex-1 items-center",children:(0,v.jsx)("div",{className:"flex flex-col md:flex-row items-center justify-between p-6",children:(0,v.jsx)("video",{ref:o})})}),(0,v.jsx)("div",{className:"flex-1 items-center",children:(0,v.jsx)(z.t,{value:e,level:"M",minVersion:2,size:320})})]})})},q=()=>{let[e,t]=(0,g.useState)(void 0),[s,i]=(0,g.useState)(!1),r=e=>{var t=document.getElementById("status");null!=t&&(t.innerText=e,t.style.color="black")},a=async()=>{var e=await F();return e.onStatus(async e=>{r(e.toString())}),e},n=e=>{let t=URL.createObjectURL(e),s=document.createElement("a");s.href=t,s.download=e.name,s.click()},o=async e=>{i(!0),r("Cache is set to clear when receiving a new file")},l=async e=>{var t=void 0;void 0==t&&(t=await a(),s&&t.clear()),n(await t.recv())},c=async t=>{if(void 0!=e){var s=void 0;void 0==s&&(s=await a()),await s.send(e)}};return(0,v.jsxs)("main",{className:"flex flex-col  p-6",children:[(0,v.jsxs)("div",{className:"border border-dashed border-gray-300 bg-white p-6 rounded-lg shadow-md w-full text-center",children:[(0,v.jsx)("div",{className:"text-blue-500 text-5xl",children:(0,v.jsx)("i",{className:"fas fa-plus-circle"})}),(0,v.jsx)("h2",{className:"text-gray-800 font-semibold text-xl mt-4",children:"Whisper"}),(0,v.jsx)("p",{className:"text-gray-500 mt-2",children:"A demo app"}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsxs)("div",{className:"mt-4",children:[(0,v.jsx)("input",{type:"file",onChange:e=>{t(e.target.files[0])},className:"block w-full mb-4",id:"fileInput",style:{display:"none"}}),(0,v.jsx)("label",{htmlFor:"fileInput",className:"px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80",children:"Select File"}),(0,v.jsx)("label",{className:"mx-8 mt-4 px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80",onClick:c,children:"Send"}),e&&(0,v.jsxs)("div",{className:"text-gray-700 mt-4",children:[(0,v.jsxs)("p",{children:["File Name: ",e.name]}),(0,v.jsxs)("p",{children:["File Size: ",e.size," bytes"]})]}),!e&&(0,v.jsxs)("div",{children:[(0,v.jsx)("br",{}),(0,v.jsx)("br",{})]}),(0,v.jsxs)("div",{className:"mt-8",children:[(0,v.jsx)("label",{className:"mx-8 mt-4 px-6 py-3.5   bg-green-700 hover:bg-green-800  text-white text-lg rounded-lg shadow ",onClick:o,children:"Clear"}),(0,v.jsx)("label",{className:"mx-8 mt-4 px-6 py-3.5   bg-green-700 hover:bg-green-800  text-white text-lg rounded-lg shadow ",onClick:l,children:"Receive"})]}),(0,v.jsx)("br",{}),(0,v.jsx)("br",{}),(0,v.jsx)("div",{className:"mt-8",children:(0,v.jsx)("p",{id:"status"})})]})]}),(0,v.jsx)(Y,{})]})},G=()=>(0,v.jsx)("div",{className:"h-screen w-full  bg-gray-100 flex items-center justify-center",children:(0,v.jsxs)("div",{className:"h-screen w-full  bg-gray-100",children:[(0,v.jsx)("div",{className:" mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200",children:(0,v.jsxs)("header",{className:"bg-gray-100 py-3 px-4 flex items-center justify-between",children:[(0,v.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,v.jsx)("img",{src:"https://placehold.co/24x24",alt:"Firefox Logo",className:"h-6"}),(0,v.jsx)("h1",{className:"text-gray-800 font-semibold text-lg",children:"Whisper"})]}),(0,v.jsx)("nav",{className:"flex items-center space-x-3 text-gray-500",children:(0,v.jsx)("i",{className:"fas fa-user-circle text-xl"})})]})}),(0,v.jsx)(q,{}),(0,v.jsxs)("footer",{className:"bg-gray-100 p-4 flex items-center justify-between text-sm text-gray-500 border-t border-gray-200",children:[(0,v.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,v.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"Legal"}),(0,v.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"Privacy"}),(0,v.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"Cookies"}),(0,v.jsx)("a",{href:"#",className:"hover:text-gray-800",children:"GitHub"})]}),(0,v.jsx)("button",{className:"bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg",children:"Feedback"})]})]})})}},function(e){e.O(0,[48,971,472,744],function(){return e(e.s=7546)}),_N_E=e.O()}]);