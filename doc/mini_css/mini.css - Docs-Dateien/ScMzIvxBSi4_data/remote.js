var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;'use strict';var e_a=function(a,b,c){null!=c&&(g.yd(a,b,1),a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Te=b,g.Se=c,g.wd(a,g.Te),g.wd(a,g.Se))},f_a=function(a,b,c){b=g.Nd(b,c);
null!=b&&(g.yd(a,c,0),a.j.j.push(b?1:0))},g_a=function(a,b){return g.Sf(a,b)},h_a=function(a,b){b=b instanceof g.Wg?b:g.bh(b,/^data:image\//i.test(b));
a.src=g.Xg(b)},j_a=function(a){g.D.call(this,a,-1,i_a)},k_a=function(a){g.D.call(this,a)},n_a=function(){return[1,
l_a,2,m_a]},o_a=function(){return[1,
g.rq,k_a,n_a]},p_a=function(a){g.D.call(this,a)},q_a=function(a){g.D.call(this,a)},s_a=function(){return[1,
g.tq,2,g.tq,3,r_a]},t_a=function(a){g.D.call(this,a)},v_a=function(){return[1,
g.tq,2,g.tq,3,u_a,4,r_a]},x_a=function(){return[1,
g.gf,q_a,s_a,w_a,2,g.gf,t_a,v_a,w_a]},B_a=function(){return[1,
y_a,g.Vi,2,z_a,g.Vi,3,A_a,g.Vi]},E_a=function(){return[1,
C_a,g.Ui,2,D_a,g.Ui,3,g.gf,j_a,o_a,g.Ui]},G_a=function(){return[1,
g.rq,g.Si,B_a,2,F_a,g.Ti,E_a]},K_a=function(){return[1,
g.tq,5,H_a,2,F_a,p_a,x_a,3,I_a,6,J_a,4,g.rq,g.Ri,G_a]},l6=function(a){g.Hk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Xa()).toString(36));
return a},m6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Jda(a.B,b,c)},L_a=function(a){if(a===g.Fn)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},M_a=function(a){if(a instanceof g.Dn)return a;
if("function"==typeof a.Mh)return a.Mh(!1);if(g.Oa(a)){var b=0,c=new g.Dn;c.next=function(){for(;;){if(b>=a.length)return g.G_;if(b in a)return g.En(a[b++]);b++}};
var d=c.next;c.j=function(){return g.Gn(d.call(c))};
return c}throw Error("Not implemented");},N_a=function(a,b,c){if(g.Oa(a))try{g.vc(a,b,c)}catch(f){L_a(f)}else for(a=M_a(a);;){var d=a.next(),e=d.value;
if(d.done)break;try{b.call(c,e,void 0,a)}catch(f){L_a(f)}}},O_a=function(a,b){var c=[];
N_a(b,function(d){try{var e=g.$p.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Eia(e)&&c.push(d)},a);
return c},P_a=function(a,b){O_a(a,b).forEach(function(c){g.$p.prototype.remove.call(this,c)},a)},Q_a=function(a){if(a.va){if(a.va.locationOverrideToken)return{locationOverrideToken:a.va.locationOverrideToken};
if(null!=a.va.latitudeE7&&null!=a.va.longitudeE7)return{latitudeE7:a.va.latitudeE7,longitudeE7:a.va.longitudeE7}}return null},R_a=function(a,b){g.cc(a,b)||a.push(b)},n6=function(a){var b=0,c;
for(c in a)b++;return b},S_a=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},o6=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return S_a(a)},T_a=function(a,b,c,d){var e=new g.zk(null,void 0);
a&&g.Ak(e,a);b&&g.Bk(e,b);c&&g.Ck(e,c);d&&(e.K=d);return e},p6=function(a,b){g.Ks[a]=!0;
var c=g.Is();c&&c.publish.apply(c,arguments);g.Ks[a]=!1},q6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Ip;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",U_a(this,a.capabilities||""),V_a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},U_a=function(a,b){a.capabilities.clear();
g.Kn(b.split(","),g.Va(g_a,W_a)).forEach(function(c){a.capabilities.add(c)})},V_a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},r6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},s6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},X_a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},Y_a=function(a){return new r6(a)},Z_a=function(a){return Array.isArray(a)?g.Ql(a,Y_a):[]},t6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},u6=function(a){return Array.isArray(a)?"["+g.Ql(a,t6).join(",")+"]":"null"},v6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},$_a=function(a){return g.Ql(a,function(b){return{key:b.id,
name:b.name}})},w6=function(a,b){return g.$b(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},x6=function(a,b){return g.$b(a,function(c){return s6(c,b)})},a0a=function(){var a=(0,g.dw)();
a&&P_a(a,a.j.Mh(!0))},y6=function(){var a=g.gw("yt-remote-connected-devices")||[];
g.sc(a);return a},b0a=function(a){if(g.ec(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Ql(a,function(d,e){return 0==e?d:d.substring(c.length)})},c0a=function(a){g.fw("yt-remote-connected-devices",a,86400)},A6=function(){if(z6)return z6;
var a=g.gw("yt-remote-device-id");a||(a=v6(),g.fw("yt-remote-device-id",a,31536E3));for(var b=y6(),c=1,d=a;g.cc(b,d);)c++,d=a+"#"+c;return z6=d},B6=function(){var a=y6(),b=A6();
g.cc(a,b);g.iw()&&g.uc(a,b);a=b0a(a);if(g.ec(a))try{g.fma("remote_sid")}catch(c){}else try{g.Pr("remote_sid",a.join(","),-1)}catch(c){}},d0a=function(){return g.gw("yt-remote-session-browser-channel")},e0a=function(){return g.gw("yt-remote-local-screens")||[]},f0a=function(){g.fw("yt-remote-lounge-token-expiration",!0,86400)},g0a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Ql(e0a(),function(d){return d.loungeToken}),c=g.Ql(a,function(d){return d.loungeToken});
g.Rl(c,function(d){return!g.cc(b,d)})&&f0a();
g.fw("yt-remote-local-screens",a,31536E3)},C6=function(a){a||(g.hw("yt-remote-session-screen-id"),g.hw("yt-remote-session-video-id"));
B6();a=y6();g.hc(a,A6());c0a(a)},h0a=function(){if(!D6){var a=g.iq();
a&&(D6=new g.Xp(a))}},i0a=function(){h0a();
return D6?!!D6.get("yt-remote-use-staging-server"):!1},E6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},j0a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},k0a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},F6=function(a){a.length?l0a(a.shift(),function(){F6(a)}):G6()},m0a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},l0a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.ak(d,g.Np(a));(document.head||document.documentElement).appendChild(d)},n0a=function(){var a=E6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220308204623/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220308204623/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},G6=function(){var a=k0a();
a&&a(!1,"No cast extension found")},H6=function(){if(o0a){var a=2,b=k0a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;l0a("//web.archive.org/web/20220308204623/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",G6,c)}},p0a=function(){H6();
var a=n0a();a.push("//web.archive.org/web/20220308204623/https://www.gstatic.com/eureka/clank/cast_sender.js");F6(a)},r0a=function(){H6();
var a=n0a();a.push.apply(a,g.la(q0a.map(m0a)));a.push("//web.archive.org/web/20220308204623/https://www.gstatic.com/eureka/clank/cast_sender.js");F6(a)},s0a=function(){this.j=I6();
this.j.xz("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},t0a=function(){this.j=I6();
this.j.xz("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},u0a=function(){this.j=I6();
this.j.xz("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},J6=function(a,b,c){g.G.call(this);
this.J=null!=c?(0,g.Ua)(a,c):a;this.og=b;this.D=(0,g.Ua)(this.PS,this);this.j=!1;this.u=0;this.B=this.Tb=null;this.C=[]},K6=function(a,b,c){g.G.call(this);
this.C=null!=c?a.bind(c):a;this.og=b;this.B=null;this.j=!1;this.u=0;this.Tb=null},L6=function(a){a.Tb=g.Oi(function(){a.Tb=null;
a.j&&!a.u&&(a.j=!1,L6(a))},a.og);
var b=a.B;a.B=null;a.C.apply(null,b)},M6=function(){},N6=function(){g.vf.call(this,"p")},O6=function(){g.vf.call(this,"o")},v0a=function(){var a=new g.B.TextEncoder;
return new g.B.ReadableStream({start:function(b){for(var c=g.q(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},w0a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},y0a=function(a,b){if(!x0a){x0a=!0;
var c;a:{if(c=g.B.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&w0a(a)&&window&&window.document&&w0a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.B.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.B.fetch(a+"?ot=2",{method:"POST",body:v0a(),BT:!1}).catch(b),g.B.fetch(a+"?ot=3",{method:"POST",body:v0a(),BT:!0}).catch(b)))}},P6=function(){return z0a=z0a||new g.tg},A0a=function(a){g.vf.call(this,"serverreachability",a)},Q6=function(a){var b=P6();
b.dispatchEvent(new A0a(b,a))},B0a=function(a,b){g.vf.call(this,"statevent",a);
this.stat=b},R6=function(a){var b=P6();
b.dispatchEvent(new B0a(b,a))},C0a=function(a,b,c,d){g.vf.call(this,"timingevent",a);
this.size=b;this.yu=d},S6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},T6=function(){},U6=function(a,b,c,d){this.D=a;
this.C=b;this.Ib=c;this.Fb=d||1;this.Ya=new g.Rk(this);this.kb=45E3;a=g.aD?125:void 0;this.bb=new g.Ni(a);this.Ia=null;this.B=!1;this.N=this.Va=this.K=this.Ja=this.va=this.qb=this.X=null;this.ma=[];this.j=null;this.Z=0;this.J=this.xa=null;this.rb=-1;this.Ea=!1;this.jb=0;this.Sa=null;this.Eb=this.Oa=this.wb=this.ya=!1;this.u=new D0a},D0a=function(){this.B=null;
this.j="";this.u=!1},V6=function(a,b,c){a.Ja=1;
a.K=l6(b.clone());a.N=c;a.ya=!0;E0a(a,null)},E0a=function(a,b){a.va=Date.now();
W6(a);a.Va=a.K.clone();m6(a.Va,"t",a.Fb);a.Z=0;var c=a.D.Ja;a.u=new D0a;a.j=F0a(a.D,c?b:null,!a.N);0<a.jb&&(a.Sa=new K6((0,g.Ua)(a.ZJ,a,a.j),a.jb));a.Ya.Pa(a.j,"readystatechange",a.SS);b=a.Ia?g.$f(a.Ia):{};a.N?(a.xa||(a.xa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Va,a.xa,a.N,b)):(a.xa="GET",a.j.send(a.Va,a.xa,null,b));Q6(1)},X6=function(a){return a.j?a.u.u?!0:!(!g.Ij(a.j)&&!g.Jj(a.j)):!1},G0a=function(a){return a.j?"GET"==a.xa&&2!=a.Ja&&a.D.fd:!1},I0a=function(a,b,
c){for(var d=!0,e;!a.Ea&&a.Z<c.length;)if(e=H0a(a,c),e==Y6){4==b&&(a.J=4,R6(14),d=!1);
break}else if(e==Z6){a.J=4;R6(15);d=!1;break}else $6(a,e);G0a(a)&&e!=Y6&&e!=Z6&&(a.u.j="",a.Z=0);4!=b||0!=c.length||a.u.u||(a.J=1,R6(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.Eb&&(a.Eb=!0,a.D.OG(a)):(a7(a),b7(a))},H0a=function(a,b){var c=a.Z,d=b.indexOf("\n",c);
if(-1==d)return Y6;c=Number(b.substring(c,d));if(isNaN(c))return Z6;d+=1;if(d+c>b.length)return Y6;b=b.substr(d,c);a.Z=d+c;return b},W6=function(a){a.qb=Date.now()+a.kb;
J0a(a,a.kb)},J0a=function(a,b){if(null!=a.X)throw Error("WatchDog timer not null");
a.X=S6((0,g.Ua)(a.QS,a),b)},c7=function(a){a.X&&(g.B.clearTimeout(a.X),a.X=null)},b7=function(a){a.D.df()||a.Ea||K0a(a.D,a)},a7=function(a){c7(a);
g.nf(a.Sa);a.Sa=null;a.bb.stop();g.Sk(a.Ya);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},$6=function(a,b){try{var c=a.D;
if(0!=c.sf&&(c.j==a||d7(c.u,a)))if(!a.Oa&&d7(c.u,a)&&3==c.sf){try{var d=c.ag.j.parse(b)}catch(y){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.va+3E3<a.va)e7(c),f7(c);else break a;g7(c);R6(18)}}else c.Ec=e[1],0<c.Ec-c.Oa&&37500>e[2]&&c.bb&&0==c.ma&&!c.Z&&(c.Z=S6((0,g.Ua)(c.VS,c),6E3));if(1>=h7(c.u)&&c.Vb){try{c.Vb()}catch(y){}c.Vb=void 0}}else i7(c,11)}else if((a.Oa||c.j==a)&&e7(c),!g.nb(b))for(e=c.ag.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Oa=f[0];f=f[1];
if(2==c.sf)if("c"==f[0]){c.C=f[1];c.Eb=f[2];var k=f[3];null!=k&&(c.aK=k);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Va=1.5*l);d=c;var m=a.j;if(m){var n=g.Kj(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.wb(n,"spdy")||g.wb(n,"quic")||g.wb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(j7(p,p.u),p.u=null))}if(d.ya){var r=g.Kj(m,"X-HTTP-Session-Id");r&&(d.Xc=r,g.Hk(d.Ia,d.ya,r))}}c.sf=3;c.D&&c.D.gK();c.Sb&&(c.Wb=Date.now()-a.va);d=c;var t=a;d.Xb=L0a(d,d.Ja?d.Eb:null,d.Ib);if(t.Oa){M0a(d.u,t);var u=
t,x=d.Va;x&&u.setTimeout(x);u.X&&(c7(u),W6(u));d.j=t}else N0a(d);0<c.B.length&&k7(c)}else"stop"!=f[0]&&"close"!=f[0]||i7(c,7);else 3==c.sf&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?i7(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.fK(f),c.ma=0)}Q6(4)}catch(y){}},O0a=function(a,b){this.j=a;
this.map=b;this.context=null},P0a=function(a){this.D=a||10;
g.B.PerformanceNavigationTiming?(a=g.B.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.B.chrome&&g.B.chrome.loadTimes&&g.B.chrome.loadTimes()&&g.B.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},Q0a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},h7=function(a){return a.u?1:a.j?a.j.size:0},d7=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},j7=function(a,
b){a.j?a.j.add(b):a.u=b},M0a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},l7=function(a){if(null!=a.u)return a.B.concat(a.u.ma);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.q(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.ma);return b}return g.kc(a.B)},R0a=function(a,b){var c=new T6;
if(g.B.Image){var d=new Image;d.onload=g.Va(m7,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Va(m7,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Va(m7,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Va(m7,c,d,"TestLoadImage: timeout",!1,b);g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},m7=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},S0a=function(){this.j=new M6},T0a=function(a,b,c){var d=c||"";
try{g.yk(a,function(e,f){var k=e;g.Ra(e)&&(k=g.ej(e));b.push(d+f+"="+encodeURIComponent(k))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},n7=function(a,b,c){return c&&c.pV?c.pV[a]||b:b},U0a=function(a){this.B=[];
this.Eb=this.Xb=this.Ia=this.Ib=this.j=this.Xc=this.ya=this.Ea=this.K=this.qb=this.X=null;this.Sd=this.Sa=0;this.Dd=n7("failFast",!1,a);this.bb=this.Z=this.N=this.J=this.D=null;this.Mb=!0;this.Fb=this.Ec=this.Oa=-1;this.wb=this.ma=this.va=0;this.pd=n7("baseRetryDelayMs",5E3,a);this.ke=n7("retryDelaySeedMs",1E4,a);this.Pd=n7("forwardChannelMaxRetries",2,a);this.pc=n7("forwardChannelRequestTimeoutMs",2E4,a);this.Wc=a&&a.Jha||void 0;this.fd=a&&a.Hha||!1;this.Va=void 0;this.Ja=a&&a.a_||!1;this.C="";this.u=
new P0a(a&&a.Cga);this.ag=new S0a;this.kb=a&&a.Mga||!1;this.jb=a&&a.Kga||!1;this.kb&&this.jb&&(this.jb=!1);this.le=a&&a.yga||!1;a&&a.Oga&&(this.Mb=!1);this.Sb=!this.kb&&this.Mb&&a&&a.Hga||!1;this.Vb=void 0;this.Wb=0;this.Ya=!1;this.xa=null;this.Yg=!a||!1!==a.Jga;this.rb=null},f7=function(a){a.j&&(o7(a),a.j.cancel(),a.j=null)},V0a=function(a){f7(a);
a.N&&(g.B.clearTimeout(a.N),a.N=null);e7(a);a.u.cancel();a.J&&("number"===typeof a.J&&g.B.clearTimeout(a.J),a.J=null)},k7=function(a){Q0a(a.u)||a.J||(a.J=!0,g.Di(a.cK,a),a.va=0)},X0a=function(a,b){if(h7(a.u)>=a.u.C-(a.J?1:0))return!1;
if(a.J)return a.B=b.ma.concat(a.B),!0;if(1==a.sf||2==a.sf||a.va>=(a.Dd?0:a.Pd))return!1;a.J=S6((0,g.Ua)(a.cK,a,b),W0a(a,a.va));a.va++;return!0},Z0a=function(a,b){var c;
b?c=b.Ib:c=a.Sa++;var d=a.Ia.clone();g.Hk(d,"SID",a.C);g.Hk(d,"RID",c);g.Hk(d,"AID",a.Oa);p7(a,d);a.K&&a.X&&g.Qk(d,a.K,a.X);c=new U6(a,a.C,c,a.va+1);null===a.K&&(c.Ia=a.X);b&&(a.B=b.ma.concat(a.B));b=Y0a(a,c,1E3);c.setTimeout(Math.round(.5*a.pc)+Math.round(.5*a.pc*Math.random()));j7(a.u,c);V6(c,d,b)},p7=function(a,b){a.Ea&&g.Ff(a.Ea,function(c,d){g.Hk(b,d,c)});
a.D&&g.yk({},function(c,d){g.Hk(b,d,c)})},Y0a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Ua)(a.D.WS,a.D,a):null;a:for(var e=a.B,f=-1;;){var k=["count="+c];-1==f?0<c?(f=e[0].j,k.push("ofs="+f)):f=0:k.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{T0a(p,k,"req"+n+"_")}catch(r){d&&d(p)}}if(l){d=k.join("&");break a}}a=a.B.splice(0,c);b.ma=a;return d},N0a=function(a){a.j||a.N||(a.wb=1,g.Di(a.bK,a),a.ma=0)},g7=function(a){if(a.j||a.N||3<=a.ma)return!1;
a.wb++;a.N=S6((0,g.Ua)(a.bK,a),W0a(a,a.ma));a.ma++;return!0},o7=function(a){null!=a.xa&&(g.B.clearTimeout(a.xa),a.xa=null)},$0a=function(a){a.j=new U6(a,a.C,"rpc",a.wb);
null===a.K&&(a.j.Ia=a.X);a.j.jb=0;var b=a.Xb.clone();g.Hk(b,"RID","rpc");g.Hk(b,"SID",a.C);g.Hk(b,"CI",a.bb?"0":"1");g.Hk(b,"AID",a.Oa);g.Hk(b,"TYPE","xmlhttp");p7(a,b);a.K&&a.X&&g.Qk(b,a.K,a.X);a.Va&&a.j.setTimeout(a.Va);var c=a.j;a=a.Eb;c.Ja=1;c.K=l6(b.clone());c.N=null;c.ya=!0;E0a(c,a)},e7=function(a){null!=a.Z&&(g.B.clearTimeout(a.Z),a.Z=null)},K0a=function(a,b){var c=null;
if(a.j==b){e7(a);o7(a);a.j=null;var d=2}else if(d7(a.u,b))c=b.ma,M0a(a.u,b),d=1;else return;if(0!=a.sf)if(a.Fb=b.rb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.va;var e=a.va;d=P6();d.dispatchEvent(new C0a(d,c,b,e));k7(a)}else N0a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Fb||!(1==d&&X0a(a,b)||2==d&&g7(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:i7(a,5);break;case 4:i7(a,10);break;case 3:i7(a,6);break;default:i7(a,2)}},W0a=function(a,b){var c=a.pd+Math.floor(Math.random()*
a.ke);
a.isActive()||(c*=2);return c*b},i7=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Ua)(a.g_,a);c||(c=new g.zk("//web.archive.org/web/20220308204623/https://www.google.com/images/cleardot.gif"),g.B.location&&"http"==g.B.location.protocol||g.Ak(c,"https"),l6(c));R0a(c.toString(),d)}else R6(2);a.sf=0;a.D&&a.D.eK(b);a1a(a);V0a(a)},a1a=function(a){a.sf=0;
a.rb=[];if(a.D){var b=l7(a.u);if(0!=b.length||0!=a.B.length)g.lc(a.rb,b),g.lc(a.rb,a.B),a.u.B.length=0,g.kc(a.B),a.B.length=0;a.D.dK()}},b1a=function(a){if(0==a.sf)return a.rb;
var b=[];g.lc(b,l7(a.u));g.lc(b,a.B);return b},L0a=function(a,b,c){var d=g.Ik(c);
""!=d.j?(b&&g.Bk(d,b+"."+d.j),g.Ck(d,d.u)):(d=g.B.location,d=T_a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.ya;c=a.Xc;b&&c&&g.Hk(d,b,c);g.Hk(d,"VER",a.aK);p7(a,d);return d},F0a=function(a,b,c){if(b&&!a.Ja)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.fd&&!a.Wc?new g.Cj(new g.uk({UP:!0})):new g.Cj(a.Wc);b.K=a.Ja;return b},c1a=function(){},d1a=function(){if(g.Mc&&!g.Fc(10))throw Error("Environmental error: no available transport.");
},r7=function(a,b){g.tg.call(this);
this.j=new U0a(b);this.J=a;this.u=b&&b.SV||null;a=b&&b.RV||null;b&&b.Bga&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.X=a;a=b&&b.Uga||null;b&&b.GN&&(a?a["X-WebChannel-Content-Type"]=b.GN:a={"X-WebChannel-Content-Type":b.GN});b&&b.zL&&(a?a["X-WebChannel-Client-Profile"]=b.zL:a={"X-WebChannel-Client-Profile":b.zL});this.j.qb=a;(a=b&&b.Rga)&&!g.nb(a)&&(this.j.K=a);this.K=b&&b.a_||!1;this.D=b&&b.wha||!1;(b=b&&b.lV)&&!g.nb(b)&&(this.j.ya=b,g.Of(this.u,b)&&g.Xf(this.u,
b));this.C=new q7(this)},e1a=function(a){N6.call(this);
"__headers__"in a&&(this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.Kf(b))?g.Yf(b,this.metadataKey):b:this.data=a},f1a=function(a){O6.call(this);
this.status=1;this.errorCode=a},q7=function(a){this.j=a},s7=function(a){return new g1a(a,a.j)},g1a=function(a,b){this.u=a;
this.j=b},h1a=function(a){return b1a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?S_a(b):b);return b})},t7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},v7=function(a){u7.dispatchEvent(new i1a(u7,a))},i1a=function(a,b){g.vf.call(this,"statevent",a);
this.stat=b},w7=function(a,b,c,d){this.j=a;
this.C=b;this.K=c;this.J=d||1;this.u=45E3;this.B=new g.Rk(this);this.D=new g.Ni;this.D.setInterval(250)},k1a=function(a,b,c){a.ls=1;
a.An=l6(b.clone());a.Op=c;a.ya=!0;j1a(a,null)},x7=function(a,b,c,d,e){a.ls=1;
a.An=l6(b.clone());a.Op=null;a.ya=c;e&&(a.FP=!1);j1a(a,d)},j1a=function(a,b){a.hs=Date.now();
y7(a);a.Cn=a.An.clone();m6(a.Cn,"t",a.J);a.oz=0;a.Qf=a.j.zD(a.j.Gv()?b:null);0<a.xD&&(a.mz=new K6((0,g.Ua)(a.hK,a,a.Qf),a.xD));a.B.Pa(a.Qf,"readystatechange",a.YS);b=a.Np?g.$f(a.Np):{};a.Op?(a.nz="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Qf.send(a.Cn,a.nz,a.Op,b)):(a.nz="GET",a.FP&&!g.zf&&(b.Connection="close"),a.Qf.send(a.Cn,a.nz,null,b));a.j.Uj(1)},m1a=function(a,b){var c=a.oz,d=b.indexOf("\n",c);
if(-1==d)return z7;c=Number(b.substring(c,d));if(isNaN(c))return l1a;d+=1;if(d+c>b.length)return z7;b=b.substr(d,c);a.oz=d+c;return b},o1a=function(a,b){a.hs=Date.now();
y7(a);var c=b?window.location.hostname:"";a.Cn=a.An.clone();g.Hk(a.Cn,"DOMAIN",c);g.Hk(a.Cn,"t",a.J);try{a.pk=new ActiveXObject("htmlfile")}catch(m){A7(a);a.Bn=7;v7(22);B7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in C7)f=C7[f];else if(f in n1a)f=C7[f]=n1a[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
C7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.th(g.Og("b/12014412"),d);a.pk.open();a.pk.write(g.ph(c));a.pk.close();a.pk.parentWindow.m=(0,g.Ua)(a.WY,a);a.pk.parentWindow.d=(0,g.Ua)(a.MO,a,!0);a.pk.parentWindow.rpcClose=(0,g.Ua)(a.MO,a,!1);c=a.pk.createElement("DIV");a.pk.parentWindow.document.body.appendChild(c);d=g.ah(a.Cn.toString());d=g.Kh(g.Xg(d));d=g.th(g.Og("b/12014412"),'<iframe src="'+d+'"></iframe>');g.vh(c,d);a.j.Uj(1)},y7=function(a){a.yD=Date.now()+
a.u;
p1a(a,a.u)},p1a=function(a,b){if(null!=a.qs)throw Error("WatchDog timer not null");
a.qs=t7((0,g.Ua)(a.XS,a),b)},D7=function(a){a.qs&&(g.B.clearTimeout(a.qs),a.qs=null)},B7=function(a){a.j.df()||a.Mp||a.j.pz(a)},A7=function(a){D7(a);
g.nf(a.mz);a.mz=null;a.D.stop();g.Sk(a.B);if(a.Qf){var b=a.Qf;a.Qf=null;b.abort();b.dispose()}a.pk&&(a.pk=null)},E7=function(a,b){try{a.j.iK(a,b),a.j.Uj(4)}catch(c){}},r1a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;q1a(a,b,function(k){k?c(!0):g.B.setTimeout(function(){r1a(a,b,c,d,f)},f)})}},q1a=function(a,b,c){var d=new Image;
d.onload=function(){try{F7(d),c(!0)}catch(e){}};
d.onerror=function(){try{F7(d),c(!1)}catch(e){}};
d.onabort=function(){try{F7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{F7(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
h_a(d,a)},F7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},s1a=function(a){this.j=a;
this.u=new M6},t1a=function(a){var b=G7(a.j,a.Uv,"/mail/images/cleardot.gif");
l6(b);r1a(b.toString(),5E3,(0,g.Ua)(a.IT,a),3,2E3);a.Uj(1)},I7=function(a){var b=a.j.X;
if(null!=b)v7(5),b?(v7(11),H7(a.j,a,!1)):(v7(12),H7(a.j,a,!0));else if(a.Xg=new w7(a,void 0,void 0,void 0),a.Xg.Np=a.AD,b=a.j,b=G7(b,b.Gv()?a.Fv:null,a.BD),v7(5),!g.Mc||g.Fc(10))m6(b,"TYPE","xmlhttp"),x7(a.Xg,b,!1,a.Fv,!1);else{m6(b,"TYPE","html");var c=a.Xg;a=!!a.Fv;c.ls=3;c.An=l6(b.clone());o1a(c,a)}},J7=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new M6;this.N=a||null;this.X=null!=b?b:null;this.K=c||!1},u1a=function(a,b){this.j=a;
this.map=b;this.context=null},v1a=function(a,b,c,d){g.vf.call(this,"timingevent",a);
this.size=b;this.yu=d},w1a=function(a){g.vf.call(this,"serverreachability",a)},x1a=function(a){a.ZS(1,0);
a.qz=G7(a,null,a.CD);K7(a)},y1a=function(a){a.Nn&&(a.Nn.abort(),a.Nn=null);
a.Te&&(a.Te.cancel(),a.Te=null);a.Tl&&(g.B.clearTimeout(a.Tl),a.Tl=null);L7(a);a.ih&&(a.ih.cancel(),a.ih=null);a.Dn&&(g.B.clearTimeout(a.Dn),a.Dn=null)},z1a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new u1a(a.aT++,b));2!=a.j&&3!=a.j||K7(a)},A1a=function(a){var b=0;
a.Te&&b++;a.ih&&b++;return b},K7=function(a){a.ih||a.Dn||(a.Dn=t7((0,g.Ua)(a.mK,a),0),a.us=0)},C1a=function(a,b){if(1==a.j){if(!b){a.Iv=Math.floor(1E5*Math.random());
b=a.Iv++;var c=new w7(a,"",b,void 0);c.Np=a.Ek;var d=M7(a),e=a.qz.clone();g.Hk(e,"RID",b);g.Hk(e,"CVER","1");N7(a,e);k1a(c,e,d);a.ih=c;a.j=2}}else 3==a.j&&(b?B1a(a,b):0==a.u.length||a.ih||B1a(a))},B1a=function(a,b){if(b)if(6<a.Pp){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Iv-1;b=M7(a)}else c=b.K,b=b.Op;else c=a.Iv++,b=M7(a);var d=a.qz.clone();g.Hk(d,"SID",a.C);g.Hk(d,"RID",c);g.Hk(d,"AID",a.ws);N7(a,d);c=new w7(a,a.C,c,a.us+1);c.Np=a.Ek;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ih=c;k1a(c,d,b)},N7=function(a,b){a.Zf&&(a=a.Zf.qK())&&g.Ff(a,function(c,d){g.Hk(b,d,c)})},M7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Pp&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Nr:e.Nr},f++){e.Nr=a.u[f].j;var k=a.u[f].map;e.Nr=6>=a.Pp?f:e.Nr-d;try{g.Ff(k,function(l){return function(m,n){c.push("req"+l.Nr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Nr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},D1a=function(a){a.Te||a.Tl||(a.J=1,a.Tl=t7((0,g.Ua)(a.lK,a),0),a.rs=0)},O7=function(a){if(a.Te||a.Tl||3<=a.rs)return!1;
a.J++;a.Tl=t7((0,g.Ua)(a.lK,a),E1a(a,a.rs));a.rs++;return!0},H7=function(a,b,c){a.BC=c;
a.Fk=b.Sl;a.K||x1a(a)},L7=function(a){null!=a.Qp&&(g.B.clearTimeout(a.Qp),a.Qp=null)},E1a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},P7=function(a,b){if(2==b||9==b){var c=null;
a.Zf&&(c=null);var d=(0,g.Ua)(a.f_,a);c||(c=new g.zk("//web.archive.org/web/20220308204623/https://www.google.com/images/cleardot.gif"),l6(c));q1a(c.toString(),1E4,d)}else v7(2);F1a(a,b)},F1a=function(a,b){a.j=0;
a.Zf&&a.Zf.nK(b);G1a(a);y1a(a)},G1a=function(a){a.j=0;
a.Fk=-1;if(a.Zf)if(0==a.B.length&&0==a.u.length)a.Zf.DD();else{var b=g.kc(a.B),c=g.kc(a.u);a.B.length=0;a.u.length=0;a.Zf.DD(b,c)}},G7=function(a,b,c){var d=g.Ik(c);
if(""!=d.j)b&&g.Bk(d,b+"."+d.j),g.Ck(d,d.u);else{var e=window.location;d=T_a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Hv&&g.Ff(a.Hv,function(f,k){g.Hk(d,k,f)});
g.Hk(d,"VER",a.Pp);N7(a,d);return d},H1a=function(){},I1a=function(){this.j=[];
this.u=[]},J1a=function(){},I6=function(){if(!Q7){Q7=new g.Qi(new J1a);
var a=g.er("client_streamz_web_flush_count",-1);-1!==a&&(Q7.C=a)}return Q7},R7=function(a){g.vf.call(this,"channelMessage");
this.message=a},S7=function(a){g.vf.call(this,"channelError");
this.error=a},K1a=function(a,b){this.action=a;
this.params=b||{}},T7=function(a,b){g.G.call(this);
this.j=new g.J(this.OY,0,this);g.I(this,this.j);this.og=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Ua)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ua)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},U7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.K=b;this.B=new g.Wp;this.u=new T7(this.JZ,this);this.j=null;this.Z=!1;this.J=null;this.X="";this.N=this.D=0;this.C=[];this.ya=c;this.ma=d;this.Ea=e;this.xa=new s0a;this.Ia=new t0a;this.Ja=new u0a},V7=function(a){if(a.j){var b=a.ma(),c=a.j.Ek||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Ek=c}},W7=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.pj(4,a))||"";b&&(this.port=":"+b);this.domain=g.qj(a)||"";a=g.Cb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Bb(a,"10.0")&&(this.u=!1))},X7=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.wj(c+b,{})},Y7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Va(a.C,d,!0),onError:g.Va(a.B,e),onTimeout:g.Va(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Gr(b,a)},Z7=function(a,b){g.tg.call(this);
var c=this;this.Nc=a();this.Nc.subscribe("handlerOpened",this.eT,this);this.Nc.subscribe("handlerClosed",this.cT,this);this.Nc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Nc.subscribe("handlerMessage",this.dT,this);this.j=b},L1a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new d1a:e;var f=void 0===f?new g.Wp:f;this.pathPrefix=a;this.j=b;this.va=c;this.D=f;this.N=null;this.X=this.K=0;this.channel=null;this.J=0;this.B=new T7(function(){var k;d.B.isActive();0===(null===(k=d.channel)||void 0===k?void 0:h7(s7(k).j.u))&&d.connect(d.N,d.K)});
this.C={};this.u={};this.Z=!1;this.logger=null;this.ma=[]},N1a=function(a){g.ig(a.channel,"m",function(){a.J=3;
a.B.reset();a.N=null;a.K=0;for(var b=g.q(a.ma),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ma=[];a.ea("webChannelOpened")});
g.ig(a.channel,"n",function(){var b;a.J=0;a.B.isActive()||a.ea("webChannelClosed");var c=null===(b=a.channel)||void 0===b?void 0:h1a(s7(b));c&&(a.ma=[].concat(g.la(c)))});
g.ig(a.channel,"p",function(b){b=b.data;"gracefulReconnect"===b[0]?(a.B.start(),a.channel&&a.channel.close()):a.ea("webChannelMessage",new K1a(b[0],b[1]))});
g.ig(a.channel,"o",function(){M1a(a)||a.B.start();a.ea("webChannelError")})},M1a=function(a){var b;
return 401===(null===(b=a.channel)||void 0===b?void 0:s7(b).j.Fb)},$7=function(a){var b=a.va();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},a8=function(a){g.tg.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.kR,this);this.j.subscribe("webChannelClosed",this.iR,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.jR,this)},O1a=function(a,b,c,d,e){function f(){return new U7(X7(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.O("enable_mdx_web_channel_desktop")?new a8(function(){return new L1a(X7(a,"/wc"),b,c)}):new Z7(f,e)},S1a=function(){var a=P1a;
Q1a();b8.push(a);R1a()},c8=function(a,b){Q1a();
var c=T1a(a,String(b));g.ec(b8)?U1a(c):(R1a(),g.vc(b8,function(d){d(c)}))},Q1a=function(){b8||(b8=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ja("yt.mdx.remote.debug.handlers_",b8,void 0))},U1a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},R1a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.vc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},T1a=function(a,b){var c=(Date.now()-V1a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.iv.call(this);
this.J=a;this.screens=[]},W1a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},X1a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Kn(a.screens,function(f){return!!w6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=W1a(a,b[d])||c;return c},Y1a=function(a,b){var c=a.screens.length;
a.screens=g.Kn(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.iv.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.j=null;this.Tb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.j=NaN;i8(this);this.info("Initializing with "+u6(this.screens))},Z1a=function(a){if(a.screens.length){var b=g.Ql(a.screens,function(d){return d.id}),c=X7(a.u,"/pairing/get_lounge_token_batch");
Y7(a.u,c,{screen_ids:b.join(",")},(0,g.Ua)(a.MU,a),(0,g.Ua)(a.LU,a))}},i8=function(a){if(g.O("deprecate_pair_servlet_enabled"))return X1a(a,[]);
var b=Z_a(e0a());b=g.Kn(b,function(c){return!c.uuid});
return X1a(a,b)},k8=function(a,b){g0a(g.Ql(a.screens,X_a));
b&&f0a()},m8=function(a,b){g.iv.call(this);
this.J=b;b=(b=g.gw("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.cc(b,k)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.ej(this.j))},n8=function(a,b,c){var d=X7(a.D,"/pairing/get_screen_availability");
Y7(a.D,d,{lounge_token:b.token},(0,g.Ua)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ua)(function(){c(!1)},a))},o8=function(a,b){a:if(n6(b)!=n6(a.j))var c=!1;
else{c=g.Nf(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.ej(a.j)),a.j=b,a.ea("screenChange"));$1a(a)},p8=function(a){isNaN(a.B)||g.Cr(a.B);
a.B=g.Ar((0,g.Ua)(a.EH,a),0<a.C&&a.C<g.Xa()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},a2a=function(a){var b={};
g.vc(a.J(),function(c){c.token?b[c.token]=c.id:this.Ee("Requesting availability of screen w/o lounge token.")});
return b},$1a=function(a){a=g.Nf(g.Gf(a.j,function(b){return b}));
g.sc(a);a.length?g.fw("yt-remote-online-screen-ids",a.join(","),60):g.hw("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.K=b;this.j=this.u=null;this.B=[];this.D={};b2a(this)},d2a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Qh(),l=c?x6(k,c):null;c&&(a.K||l)||(l=x6(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.j,m,function(n){e(n?m:null)})}else c?c2a(a,c,(0,g.Ua)(function(n){var p=r8(this,new r6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.j,p,function(r){e(r?p:null)})},a),f):e(null)},e2a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},f2a=function(a,b,c){n8(a.j,b,c)},c2a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Gr(X7(a.C,"/pairing/get_lounge_token_batch"),e)},g2a=function(a){a.screens=a.u.Qh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+u6(a.screens))},b2a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Ua)(a.VU,a));g2a(a);a.K||(a.B=Z_a(g.gw("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+u6(a.B));a.j=new m8(a.C,(0,g.Ua)(a.Qh,a,!0));a.j.subscribe("screenChange",(0,g.Ua)(function(){this.ea("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=x6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||h2a(a));s8(a);a.D[b.uuid]=b.id;g.fw("yt-remote-device-id-map",a.D,31536E3);return b},h2a=function(a){a=g.Kn(a.B,function(b){return"shortLived"!=b.idType});
g.fw("yt-remote-automatic-screen-cache",g.Ql(a,X_a))},s8=function(a){a.D=g.gw("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.iv.call(this);
this.ya=c;this.B=a;this.j=b;this.C=null},u8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},i2a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.ea("sessionScreen",a.C)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.Ua)(this.pR,this);this.xa=(0,g.Ua)(this.gZ,this);this.Z=g.Ar(function(){j2a(d,null)},12E4);
this.K=this.D=this.J=this.N=0;this.va=!1;this.X="unknown"},x8=function(a,b){g.Cr(a.K);
a.K=0;0==b?k2a(a):a.K=g.Ar(function(){k2a(a)},b)},k2a=function(a){l2a(a,"getLoungeToken");
g.Cr(a.D);a.D=g.Ar(function(){m2a(a,null)},3E4)},l2a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ej(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ua)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.ej(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.sM(b,function(c){u8(a,c)},function(){return a.Lg()},5)):a.Lg(Error("Waiting for session status timed out."))},o2a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new r6(b);n2a(a,d,function(e){e?(a.va=!0,r8(a.B,d),u8(a,d),a.X="unknown",x8(a,c)):(g.ir(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Lg())},5)},j2a=function(a,b){g.Cr(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?o2a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ir(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.ir(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Lg(Error("Waiting for session status timed out."))},m2a=function(a,b){g.Cr(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,x8(a,3E4)):(i2a(a,b.loungeToken),a.va=!1,a.X="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},n2a=function(a,b,c,d){g.Cr(a.J);
a.J=0;f2a(a.B,b,function(e){e||0>d?c(e):a.J=g.Ar(function(){n2a(a,b,c,d-1)},300)})},p2a=function(a){g.Cr(a.N);
a.N=0;g.Cr(a.J);a.J=0;g.Cr(a.Z);a.Z=0;g.Cr(a.D);a.D=0;g.Cr(a.K);a.K=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.xa="";this.Ja=c;this.Ia=null;this.Z=function(){};
this.X=NaN;this.Ea=(0,g.Ua)(this.qR,this);this.D=function(){};
this.K=this.J=0;this.ma=!1;this.va="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},q2a=function(a){a.D=a.B.jJ(a.xa,a.j.label,a.j.friendlyName,A8(a),function(b,c){a.D=function(){};
a.ma=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=function(){};
a.Lg(b)})},r2a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.Ja;i0a()&&(b.env_useStageMdx=1);return g.uj(b)},C8=function(a){return new Promise(function(b){a.xa=v6();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,r2a(a));b(c);q2a(a)}else a.Z=function(){g.Cr(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,r2a(a));b(d);q2a(a)},a.X=g.Ar(function(){a.Z()},100)})},t2a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new r6(b);return(new Promise(function(e){s2a(a,d,function(f){f?(a.ma=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.ir(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},u2a=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){d2a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},s2a=function(a,b,c,d){g.Cr(a.J);
a.J=0;f2a(a.B,b,function(e){e||0>d?c(e):a.J=g.Ar(function(){s2a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Cr(a.K),a.K=0,0==b?v2a(a):a.K=g.Ar(function(){v2a(a)},b))},v2a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,B8(a,3E4)):(a.ma=!1,a.va="unknown",i2a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";B8(a,3E4)})},w2a=function(a){g.Cr(a.J);
a.J=0;g.Cr(a.K);a.K=0;a.D();a.D=function(){};
g.Cr(a.X)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.Ar((0,g.Ua)(this.Qt,this,null),150)},E8=function(a,b){g.iv.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.j=null;this.K=!1;this.B=[];this.D=(0,g.Ua)(this.bY,this)},x2a=function(a,b){return b?g.$b(a.B,function(c){return s6(b,c.label)},a):null},F8=function(a){c8("Controller",a)},P1a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.K||!!a.B.length||!!a.j},H8=function(a,b,c){b!=a.j&&(g.nf(a.j),(a.j=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.j):a.ea("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Ua)(a.KO,a,b)),b.subscribe("sessionFailed",function(){return y2a(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Qt(null)):a.ea("yt-remote-cast2-session-change",null))},y2a=function(a,b){a.j==b&&a.ea("yt-remote-cast2-session-failed")},z2a=function(a){var b=a.u.iJ(),c=a.j&&a.j.j;
a=g.Ql(b,function(d){c&&s6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=x2a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},E2a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):A2a()?B2a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?C2a(a,c):(window.__onGCastApiAvailable=function(e,f){e?C2a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.hw("yt-remote-cast-available"),g.hw("yt-remote-cast-receiver"),
D2a(),c(!1))},d.loadCastApiSetupScript?g.jw("https://web.archive.org/web/20220308204623/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=E6()&&p0a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?G6():89<=E6()?r0a():(H6(),F6(q0a.map(m0a))))):I8("Cannot initialize because not running Chrome")},D2a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ja("yt.mdx.remote.cloudview.instance_",null,void 0);F2a(!1);g.Ns(N8);N8.length=0},O8=function(){return!!g.gw("yt-remote-cast-installed")},G2a=function(){var a=g.gw("yt-remote-cast-receiver");
return a?a.friendlyName:null},H2a=function(){I8("clearCurrentReceiver");
g.hw("yt-remote-cast-receiver")},I2a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.Ms("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},A2a=function(){var a=0<=g.Cb().search(/ (CrMo|Chrome|CriOS)\//);
return g.kA||a},J2a=function(a,b){M8().init(a,b)},B2a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.fw("yt-remote-cast-available",d);p6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.fw("yt-remote-cast-receiver",d);p6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.fw("yt-remote-cast-receiver",d);p6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+t6(d));
d||g.hw("yt-remote-cast-receiver");p6("yt-remote-cast2-session-change",d)}),g.Ja("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},C2a=function(a,b){L8(!0);
J8(!1);J2a(a,function(c){c?(F2a(!0),g.Os("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.hw("yt-remote-cast-available"),g.hw("yt-remote-cast-receiver"),D2a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.fw("yt-remote-cast-installed",a)},P8=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},F2a=function(a){I8("setApiReady_ "+a);
g.Ja("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ja("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.ol=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.ol=!1;a.hasNext=!1;a.K=0;a.J=g.Xa();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},U8=function(a){return a.Kc()?(g.Xa()-a.J)/1E3:0},V8=function(a,b){a.K=b;
a.J=g.Xa()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Xa()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ag(a.trackData);b.hasPrevious=a.ol;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.iv.call(this);
this.B=0;this.C=a;this.J=[];this.D=new I1a;this.u=this.j=null;this.X=(0,g.Ua)(this.NW,this);this.K=(0,g.Ua)(this.Cx,this);this.N=(0,g.Ua)(this.MW,this);this.Z=(0,g.Ua)(this.QW,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.VH,this),K2a(this))):c=3;0!=c&&(b?this.VH(c):g.Ar((0,g.Ua)(function(){this.VH(c)},this),0));
(a=I2a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},a9=function(a){return new S8(a.C.getPlayerContextData())},K2a=function(a){g.vc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Va(this.ZX,b),this))},a)},L2a=function(a){g.vc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){L2a(a);
a.C.setPlayerContextData(Y8(b));K2a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Cx(null));
a.u=b;a.u&&(c8("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Cx(a.u.media[0]))},M2a=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.j.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ua)(function(d){this.Ee("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Ee("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},j9=function(a,b,c,d){d=void 0===d?!1:d;
g.iv.call(this);var e=this;this.J=NaN;this.xa=!1;this.X=this.N=this.ma=this.va=NaN;this.Z=[];this.D=this.K=this.C=this.j=this.u=null;this.Ia=a;this.Ea=d;this.Z.push(g.ts(window,"beforeunload",function(){e.Xs(2)}));
this.B=[];this.j=new S8;this.Ja=b.id;this.ya=b.idType;this.u=O1a(this.Ia,c,this.nJ,"shortLived"==this.ya,this.Ja);this.u.Pa("channelOpened",function(){N2a(e)});
this.u.Pa("channelClosed",function(){h9("Channel closed");isNaN(e.J)?C6(!0):C6();e.dispose()});
this.u.Pa("channelError",function(f){C6();isNaN(e.Lw())?(1==f&&"shortLived"==e.ya&&e.ea("browserChannelAuthError",f),h9("Channel error: "+f+" without reconnection"),e.dispose()):(e.xa=!0,h9("Channel error: "+f+" with reconnection in "+e.Lw()+" ms"),i9(e,2))});
this.u.Pa("channelMessage",function(f){O2a(e,f)});
this.u.dn(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.iw()&&g.fw("yt-remote-session-video-id",f)})},P2a=function(a){return g.$b(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},h9=function(a){c8("conn",a)},i9=function(a,b){a.ea("proxyStateChange",b)},Q2a=function(a){a.J=g.Ar(function(){h9("Connecting timeout");
a.Xs(1)},2E4)},k9=function(a){g.Cr(a.J);
a.J=NaN},l9=function(a){g.Cr(a.va);
a.va=NaN},R2a=function(a){m9(a);
a.ma=g.Ar(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Cr(a.ma);
a.ma=NaN},N2a=function(a){h9("Channel opened");
a.xa&&(a.xa=!1,l9(a),a.va=g.Ar(function(){h9("Timing out waiting for a screen.");a.Xs(1)},15E3))},T2a=function(a,b){var c=null;
if(b){var d=P2a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ja("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=a.u.It()&&isNaN(a.J);b==c?b&&(i9(a,1),n9(a,"getSubtitlesTrack")):b?(a.rM()&&a.j.reset(),i9(a,1),n9(a,"getNowPlaying"),S2a(a)):a.Xs(1)},U2a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Vf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ea("remotePlayerChange"))},V2a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;X8(a.j,d,e);a.ea("remoteQueueChange",c)},X2a=function(a,b){b.params=b.params||{};
V2a(a,b,"NOW_PLAYING_MAY_CHANGE");W2a(a,b);a.ea("autoplayDismissed")},W2a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.gk(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?R2a(a):m9(a);a.ea("remotePlayerChange")},Y2a=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.j,isNaN(b)?0:b);a.ea("remotePlayerChange")}},Z2a=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ea("remotePlayerChange")},$2a=function(a,b){a.K=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},a3a=function(a,b){a.K=b.params.videoId||null;
a.ea("autoplayUpNext",a.K)},b3a=function(a,b){a.D=b.params.autoplayMode;
a.ea("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ea("autoplayDismissed")},c3a=function(a,b){var c="true"==b.params.hasNext;
a.j.ol="true"==b.params.hasPrevious;a.j.hasNext=c;a.ea("previousNextChange")},O2a=function(a,b){b=b.message;
b.params?h9("Received: action="+b.action+", params="+g.ej(b.params)):h9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=o6(b.params.devices);a.B=g.Ql(b,function(d){return new q6(d)});
b=!!g.$b(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
T2a(a,b);b=a.ZM("mlm");a.ea("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.ic(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
T2a(a,!1);break;case "remoteConnected":var c=new q6(o6(b.params.device));g.$b(a.B,function(d){return d.equals(c)})||R_a(a.B,c);
break;case "remoteDisconnected":c=new q6(o6(b.params.device));g.ic(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":V2a(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":X2a(a,b);break;case "onStateChange":W2a(a,b);break;case "onAdStateChange":Y2a(a,b);break;case "onVolumeChanged":Z2a(a,b);break;case "onSubtitlesTrackChanged":U2a(a,b);break;case "nowAutoplaying":$2a(a,b);break;case "autoplayDismissed":a.ea("autoplayDismissed");break;case "autoplayUpNext":a3a(a,b);break;case "onAutoplayModeChanged":b3a(a,b);break;case "onHasPreviousNextChanged":c3a(a,b);
break;case "requestAssistedSignIn":a.ea("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ea("loopModeChange",b.params.loopMode);break;default:h9("Unrecognized action: "+b.action)}},S2a=function(a){g.Cr(a.X);
a.X=g.Ar(function(){a.Xs(1)},864E5)},n9=function(a,b,c){c?h9("Sending: action="+b+", params="+g.ej(c)):h9("Sending: action="+b);
a.u.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.bf=a;this.j=[];this.j.push(this.bf.$_s("screenChange",(0,g.Ua)(this.uR,this)));this.j.push(this.bf.$_s("onlineScreenChange",(0,g.Ua)(this.GX,this)))},g3a=function(a,b){h0a();
if(!D6||!D6.get("yt-remote-disable-remote-module-for-dev")){b=g.N("MDX_CONFIG")||b;a0a();B6();p9||(p9=new W7(b?b.loungeApiHost:void 0),i0a()&&(p9.j="/api/loungedev"));q9||(q9=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ja("yt.mdx.remote.deferredProxies_",q9,void 0));d3a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ja("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ja("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);E2a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){p6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ja("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.ej(b)),u9.push(g.Ms("yt-remote-cast2-api-ready",function(){p6("yt-remote-api-ready")})),u9.push(g.Ms("yt-remote-cast2-availability-change",function(){p6("yt-remote-receiver-availability-change")})),u9.push(g.Ms("yt-remote-cast2-receiver-selected",function(){v9(null);
p6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.Ms("yt-remote-cast2-receiver-resumed",function(){p6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.Ms("yt-remote-cast2-session-change",e3a)),u9.push(g.Ms("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),H2a())})),u9.push(g.Ms("yt-remote-cast2-session-failed",function(){p6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.O("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.ej(a)),a?(g.fw("yt-remote-session-app",a.app),g.fw("yt-remote-session-name",a.name)):(g.hw("yt-remote-session-app"),g.hw("yt-remote-session-name")),g.Ja("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||f3a())}},h3a=function(){var a=r9().bf.$_gos();
var b=y9();b&&z9()&&(w6(a,b)||a.push(b));return $_a(a)},A9=function(){var a=i3a();
!a&&O8()&&G2a()&&(a={key:"cast-selector-receiver",name:G2a()});return a},i3a=function(){var a=h3a(),b=y9();
b||(b=w9());return g.$b(a,function(c){return b&&s6(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Qh();return x6(b,a)},e3a=function(a){t9("remote.onCastSessionChange_: "+t6(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.dn(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ka("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},j3a=function(a){g.Ja("yt.mdx.remote.currentScreenId_",a,void 0)},k3a=function(){return g.Ka("yt.mdx.remote.connectData_")},v9=function(a){g.Ja("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ka("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||j3a("");g.Ja("yt.mdx.remote.connection_",a,void 0);q9&&(g.vc(q9,function(c){c(a)}),q9.length=0);
b&&!a?p6("yt-remote-connection-change",!1):!b&&a&&p6("yt-remote-connection-change",!0)},w9=function(){var a=g.iw();
if(!a)return null;var b=r9();if(!b)return null;b=b.Qh();return x6(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{j3a(a.id);var c=g.Ka("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new j9(p9,a,x9(),c);a.connect(b,k3a());a.subscribe("beforeDisconnect",function(d){p6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},f3a=function(){var a=w9();
a?(t9("Resume connection to: "+t6(a)),D9(a,0)):(C6(),H2a(),t9("Skipping connecting because no session screen found."))},d3a=function(){var a=x9();
if(g.Vf(a)){a=A6();var b=g.gw("yt-remote-session-name")||"",c=g.gw("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ja("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.G.call(this);
var d=this;this.u=a;this.I=b;this.hc=c;this.events=new g.gA(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){l3a(d,e)});
this.D=!1;this.J=new g.tH(64);this.j=new g.J(this.RP,500,this);this.B=new g.J(this.SP,1E3,this);this.N=new J6(this.y_,0,this);this.C={};this.X=new g.J(this.AQ,1E3,this);this.K=new K6(this.seekTo,1E3,this);g.I(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.rX);this.events.T(b,"captionschanged",this.KW);this.events.T(b,"captionssettingschanged",this.ZP);this.events.T(b,"videoplayerreset",this.zB);this.events.T(b,"mdxautoplaycancel",function(){d.hc.NL()});
a=this.hc;a.isDisposed();a.subscribe("proxyStateChange",this.HO,this);a.subscribe("remotePlayerChange",this.Gx,this);a.subscribe("remoteQueueChange",this.zB,this);a.subscribe("previousNextChange",this.EO,this);a.subscribe("nowAutoplaying",this.yO,this);a.subscribe("autoplayDismissed",this.bO,this);g.I(this,this.j);g.I(this,this.B);g.I(this,this.N);g.I(this,this.X);g.I(this,this.K);this.ZP();this.zB();this.Gx()},l3a=function(a,b){if(J9(a)){a.hc.unsubscribe("remotePlayerChange",a.Gx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.hc);if(c!==d.volume||b!==d.muted)a.hc.setVolume(c,b),a.X.start();a.hc.subscribe("remotePlayerChange",a.Gx,a)}},m3a=function(a){a.Rb(0);
a.j.stop();a.jc(new g.tH(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.cg(c,b));a.hc.mJ(a.I.getVideoData(1).videoId,c);a.C=a9(a.hc).trackData}},L9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.hc.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,Q_a(c));a.jc(new g.tH(1))},n3a=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{QM:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},J9=function(a){return a9(a.hc).videoId===a.I.getVideoData(1).videoId},M9=function(){g.U.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},V:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",V:[{G:"div",L:"ytp-mdx-popup-title",oa:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",oa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",V:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],oa:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],oa:"Confirm"}]}]}]});this.j=new g.aJ(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.I(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},N9=function(a){g.U.call(this,{G:"div",
L:"ytp-remote",V:[{G:"div",L:"ytp-remote-display-status",V:[{G:"div",L:"ytp-remote-display-status-icon",V:[g.dAa()]},{G:"div",L:"ytp-remote-display-status-text",oa:"{{statustext}}"}]}]});this.api=a;this.j=new g.aJ(this,250);g.I(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);o3a(this,a.zb())},o3a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.OF("Error on $RECEIVER_NAME",c):b.Kc()||g.T(b,4)?g.OF("Playing on $RECEIVER_NAME",c):g.OF("Connected to $RECEIVER_NAME",c);a.Ma("statustext",b);a.j.show()}else a.j.hide()},O9=function(a,b){g.BO.call(this,"Play on",0,a,b);
this.I=a;this.ip={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},P9=function(a){g.tL.call(this,a);
this.yl={key:v6(),name:"This computer"};this.Ci=null;this.subscriptions=[];this.pH=this.hc=null;this.ip=[this.yl];this.Qn=this.yl;this.Md=new g.tH(64);this.oN=0;this.Hf=-1;this.Ox=!1;this.Mx=this.nu=null;if(!g.FC(this.player.U())&&!g.GC(this.player.U())){a=this.player;var b=g.XK(a);b&&(b=b.Co())&&(b=new O9(a,b),g.I(this,b));b=new N9(a);g.I(this,b);g.gL(a,b.element,4);this.nu=new M9;g.I(this,this.nu);g.gL(a,this.nu.element,4);this.Ox=!!w9()}},Q9=function(a){a.Mx&&(a.player.removeEventListener("presentingplayerstatechange",
a.Mx),a.Mx=null)},p3a=function(a,b,c){a.Md=c;
a.player.ea("presentingplayerstatechange",new g.wF(c,b))},R9=function(a,b){if(b.key!==a.Qn.key)if(b.key===a.yl.key)C9();
else{var c;(c=!a.player.U().S("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.Ox||!a.nu);(c?0:g.VC(a.player.U())||g.YC(a.player.U()))&&q3a(a);a.Qn=b;if(!a.player.U().S("disable_mdx_connection_in_mdx_module_for_music_web")||!g.GC(a.player.U())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.U().S("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.oL(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=Q_a(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.ej(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?p6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Qh(),(b=x6(a,b.key))&&D9(b,1))}}},q3a=function(a){a.player.zb().Kc()?a.player.pauseVideo():(a.Mx=function(b){!a.Ox&&g.yF(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.Mx));
a.nu&&a.nu.rd();z9()||(H9=!0)};
g.yq.prototype.po=g.ca(1,function(){return g.Nd(this,6)});
g.$c.prototype.Xy=g.ca(0,function(){var a=g.dd(this);return 4294967296*g.dd(this)+(a>>>0)});
var l_a=g.Qe(function(a,b,c){if(1!==a.u)return!1;g.C(b,c,g.nd(a));return!0},g.Ue),D_a=g.Qe(function(a,b,c,d){if(1!==a.u)return!1;
g.Zd(b,c,d,g.nd(a));return!0},g.Ue),m_a=g.Qe(function(a,b,c){if(0!==a.u)return!1;
g.C(b,c,g.bd(a.j));return!0},g.We),C_a=g.Qe(function(a,b,c,d){if(0!==a.u)return!1;
g.Zd(b,c,d,g.bd(a.j));return!0},g.We),u_a=g.Qe(function(a,b,c){if(0!==a.u)return!1;
g.C(b,c,g.cd(a.j));return!0},g.Xe),z_a=g.Qe(function(a,b,c,d){if(0!==a.u)return!1;
g.Zd(b,c,d,g.cd(a.j));return!0},g.Xe),H_a=g.Qe(function(a,b,c){if(1!==a.u)return!1;
g.C(b,c,a.j.Xy());return!0},function(a,b,c){e_a(a,c,g.Nd(b,c))}),J_a=g.Qe(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.Pd(b,c);if(2==a.u){c=g.$c.prototype.Xy;var d=g.cd(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.Xy());return!0},function(a,b,c){b=g.Pd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)e_a(a,c,b[d])}),r_a=g.Qe(function(a,b,c){if(0!==a.u)return!1;
g.C(b,c,g.ed(a.j));return!0},f_a),A_a=g.Qe(function(a,b,c,d){if(0!==a.u)return!1;
g.Zd(b,c,d,g.ed(a.j));return!0},f_a),I_a=g.Qe(function(a,b,c){if(2!==a.u)return!1;
a=g.pd(a);g.Xd(b,c,a);return!0},function(a,b,c){b=g.Pd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Bd(a,c,g.ib(e))}}),y_a=g.Qe(function(a,b,c,d){if(2!==a.u)return!1;
g.Zd(b,c,d,g.pd(a));return!0},g.Ye),F_a=g.Qe(function(a,b,c,d,e){if(2!==a.u)return!1;
g.md(a,g.$d(b,d,c),e);return!0},g.Ze),i_a=[1];
g.v(j_a,g.D);g.v(k_a,g.D);g.v(p_a,g.D);g.v(q_a,g.D);var w_a=[1,2];g.v(t_a,g.D);var n1a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},C7={"'":"\\'"},W_a={b1:"atp",xda:"ska",dca:"que",M$:"mus",wda:"sus",x6:"dsp",Bca:"seq",p$:"mic",u5:"dpa",u1:"cds",K$:"mlm",r5:"dsdtr",vaa:"ntb"};q6.prototype.equals=function(a){return a?this.id==a.id:!1};
var D6,z6="",o0a=j0a("loadCastFramework")||j0a("loadCastApplicationFramework"),q0a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ya(J6,g.G);g.h=J6.prototype;g.h.OS=function(a){this.C=arguments;this.j=!1;this.Tb?this.B=g.Xa()+this.og:this.Tb=g.Oi(this.D,this.og)};
g.h.stop=function(){this.Tb&&(g.B.clearTimeout(this.Tb),this.Tb=null);this.B=null;this.j=!1;this.C=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.J.apply(null,this.C)))};
g.h.ra=function(){this.stop();J6.xe.ra.call(this)};
g.h.PS=function(){this.Tb&&(g.B.clearTimeout(this.Tb),this.Tb=null);this.B?(this.Tb=g.Oi(this.D,this.B-g.Xa()),this.B=null):this.u?this.j=!0:(this.j=!1,this.J.apply(null,this.C))};g.v(K6,g.G);g.h=K6.prototype;g.h.wD=function(a){this.B=arguments;this.Tb||this.u?this.j=!0:L6(this)};
g.h.stop=function(){this.Tb&&(g.B.clearTimeout(this.Tb),this.Tb=null,this.j=!1,this.B=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.j||this.Tb||(this.j=!1,L6(this))};
g.h.ra=function(){g.G.prototype.ra.call(this);this.stop()};M6.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
M6.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};g.Ya(N6,g.vf);g.Ya(O6,g.vf);var x0a=!1;var z0a=null;g.Ya(A0a,g.vf);g.Ya(B0a,g.vf);g.Ya(C0a,g.vf);T6.prototype.info=function(){};
T6.prototype.warning=function(){};var Z6={},Y6={};g.h=U6.prototype;g.h.setTimeout=function(a){this.kb=a};
g.h.SS=function(a){a=a.target;var b=this.Sa;b&&3==g.Fj(a)?b.wD():this.ZJ(a)};
g.h.ZJ=function(a){try{if(a==this.j)a:{var b=g.Fj(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b||3==b&&!g.aD&&!X6(this))){this.Ea||4!=b||7==c||(8==c||0>=d?Q6(3):Q6(2));c7(this);var e=this.j.getStatus();this.rb=e;b:if(G0a(this)){var f=g.Jj(this.j);a="";var k=f.length,l=4==g.Fj(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){a7(this);b7(this);var m="";break b}this.u.B=new g.B.TextDecoder}for(c=0;c<k;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&c==k-1});f.splice(0,k);this.u.j+=a;
this.Z=0;m=this.u.j}else m=g.Ij(this.j);X6(this);if(this.B=200==e){if(this.wb&&!this.Oa){b:{if(this.j){var n=g.Kj(this.j,"X-HTTP-Initial-Response");if(n&&!g.nb(n)){var p=n;break b}}p=null}if(e=p)this.Oa=!0,$6(this,e);else{this.B=!1;this.J=3;R6(12);a7(this);b7(this);break a}}this.ya?(I0a(this,b,m),g.aD&&this.B&&3==b&&(this.Ya.Pa(this.bb,"tick",this.RS),this.bb.start())):$6(this,m);4==b&&a7(this);this.B&&!this.Ea&&(4==b?K0a(this.D,this):(this.B=!1,W6(this)))}else 400==e&&0<m.indexOf("Unknown SID")?
(this.J=3,R6(12)):(this.J=0,R6(13)),a7(this),b7(this)}}}catch(r){X6(this)}finally{}};
g.h.RS=function(){if(this.j){var a=g.Fj(this.j),b=g.Ij(this.j);this.Z<b.length&&(c7(this),I0a(this,a,b),this.B&&4!=a&&W6(this))}};
g.h.cancel=function(){this.Ea=!0;a7(this)};
g.h.QS=function(){this.X=null;var a=Date.now();0<=a-this.qb?(2!=this.Ja&&(Q6(3),R6(17)),a7(this),this.J=2,b7(this)):J0a(this,this.qb-a)};
g.h.getLastError=function(){return this.J};P0a.prototype.cancel=function(){this.B=l7(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.q(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.h=U0a.prototype;g.h.aK=8;g.h.sf=1;g.h.connect=function(a,b,c,d){this.Yg&&g.Di((0,g.Ua)(this.HZ,this,a));R6(0);this.Ib=a;this.Ea=b||{};c&&void 0!==d&&(this.Ea.OSID=c,this.Ea.OAID=d);this.bb=this.Mb;this.US(1,0);this.Ia=L0a(this,null,this.Ib);k7(this)};
g.h.disconnect=function(){V0a(this);if(3==this.sf){var a=this.Sa++,b=this.Ia.clone();g.Hk(b,"SID",this.C);g.Hk(b,"RID",a);g.Hk(b,"TYPE","terminate");p7(this,b);a=new U6(this,this.C,a,void 0);a.Ja=2;a.K=l6(b.clone());b=!1;g.B.navigator&&g.B.navigator.sendBeacon&&(b=g.B.navigator.sendBeacon(a.K.toString(),""));!b&&g.B.Image&&((new Image).src=a.K,b=!0);b||(a.j=F0a(a.D,null),a.j.send(a.K));a.va=Date.now();W6(a)}a1a(this)};
g.h.HZ=function(a){try{y0a(a,function(){})}catch(b){}};
g.h.df=function(){return 0==this.sf};
g.h.getState=function(){return this.sf};
g.h.cK=function(a){if(this.J)if(this.J=null,1==this.sf){if(!a){this.Sa=Math.floor(1E5*Math.random());a=this.Sa++;var b=new U6(this,"",a,void 0),c=this.X;this.qb&&(c?(c=g.$f(c),g.cg(c,this.qb)):c=this.qb);null!==this.K||this.jb||(b.Ia=c,c=null);var d;if(this.kb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=Y0a(this,b,d);e=this.Ia.clone();g.Hk(e,"RID",a);g.Hk(e,"CVER",22);this.ya&&g.Hk(e,"X-HTTP-Session-Id",this.ya);p7(this,e);c&&(this.jb?d="headers="+g.Ih(g.Kda(c))+"&"+d:this.K&&g.Qk(e,this.K,c));j7(this.u,b);this.le&&g.Hk(e,"TYPE","init");this.kb?(g.Hk(e,"$req",d),g.Hk(e,"SID","null"),b.wb=!0,V6(b,e,null)):V6(b,e,d);this.sf=2}}else 3==this.sf&&(a?Z0a(this,a):0==this.B.length||Q0a(this.u)||Z0a(this))};
g.h.bK=function(){this.N=null;$0a(this);if(this.Sb&&!(this.Ya||null==this.j||0>=this.Wb)){var a=2*this.Wb;this.xa=S6((0,g.Ua)(this.JW,this),a)}};
g.h.JW=function(){this.xa&&(this.xa=null,null!=this.j.j&&g.Ij(this.j.j),this.bb=!1,this.Ya=!0,R6(10),f7(this),$0a(this))};
g.h.OG=function(a){this.j==a&&this.Sb&&!this.Ya&&(o7(this),this.Ya=!0,R6(11))};
g.h.VS=function(){null!=this.Z&&(this.Z=null,f7(this),g7(this),R6(19))};
g.h.US=function(a){g.cc(arguments,this.sf)};
g.h.g_=function(a){a?R6(2):R6(1)};
g.h.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.h=c1a.prototype;g.h.gK=function(){};
g.h.fK=function(){};
g.h.eK=function(){};
g.h.dK=function(){};
g.h.isActive=function(){return!0};
g.h.WS=function(){};g.Ya(r7,g.tg);r7.prototype.open=function(){this.j.D=this.C;this.K&&(this.j.Ja=!0);this.j.connect(this.J,this.u||void 0)};
r7.prototype.close=function(){this.j.disconnect()};
r7.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.ej(a),a=c);b.B.push(new O0a(b.Sd++,a));3==b.sf&&k7(b)};
r7.prototype.ra=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;r7.xe.ra.call(this)};
g.Ya(e1a,N6);g.Ya(f1a,O6);g.Ya(q7,c1a);q7.prototype.gK=function(){this.j.dispatchEvent("m")};
q7.prototype.fK=function(a){this.j.dispatchEvent(new e1a(a))};
q7.prototype.eK=function(a){this.j.dispatchEvent(new f1a(a))};
q7.prototype.dK=function(){this.j.dispatchEvent("n")};var u7=new g.tg;g.v(i1a,g.vf);g.h=w7.prototype;g.h.Np=null;g.h.Rl=!1;g.h.qs=null;g.h.yD=null;g.h.hs=null;g.h.ls=null;g.h.An=null;g.h.Cn=null;g.h.Op=null;g.h.Qf=null;g.h.oz=0;g.h.pk=null;g.h.nz=null;g.h.Bn=null;g.h.Ev=-1;g.h.FP=!0;g.h.Mp=!1;g.h.xD=0;g.h.mz=null;var l1a={},z7={};g.h=w7.prototype;g.h.setTimeout=function(a){this.u=a};
g.h.YS=function(a){a=a.target;var b=this.mz;b&&3==g.Fj(a)?b.wD():this.hK(a)};
g.h.hK=function(a){try{if(a==this.Qf)a:{var b=g.Fj(this.Qf),c=this.Qf.u,d=this.Qf.getStatus();if(g.Mc&&!g.Fc(10)||g.zf&&!g.Ec("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Ij(this.Qf))break a;this.Mp||4!=b||7==c||(8==c||0>=d?this.j.Uj(3):this.j.Uj(2));D7(this);var e=this.Qf.getStatus();this.Ev=e;var f=g.Ij(this.Qf);if(this.Rl=200==e){4==b&&A7(this);if(this.ya){for(a=!0;!this.Mp&&this.oz<f.length;){var k=m1a(this,f);if(k==z7){4==b&&(this.Bn=4,v7(15),a=!1);break}else if(k==l1a){this.Bn=4;v7(16);a=!1;
break}else E7(this,k)}4==b&&0==f.length&&(this.Bn=1,v7(17),a=!1);this.Rl=this.Rl&&a;a||(A7(this),B7(this))}else E7(this,f);this.Rl&&!this.Mp&&(4==b?this.j.pz(this):(this.Rl=!1,y7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Bn=3,v7(13)):(this.Bn=0,v7(14)),A7(this),B7(this)}}catch(l){this.Qf&&g.Ij(this.Qf)}finally{}};
g.h.WY=function(a){t7((0,g.Ua)(this.VY,this,a),0)};
g.h.VY=function(a){this.Mp||(D7(this),E7(this,a),y7(this))};
g.h.MO=function(a){t7((0,g.Ua)(this.UY,this,a),0)};
g.h.UY=function(a){this.Mp||(A7(this),this.Rl=a,this.j.pz(this),this.j.Uj(4))};
g.h.cancel=function(){this.Mp=!0;A7(this)};
g.h.XS=function(){this.qs=null;var a=Date.now();0<=a-this.yD?(2!=this.ls&&this.j.Uj(3),A7(this),this.Bn=2,v7(18),B7(this)):p1a(this,this.yD-a)};
g.h.getLastError=function(){return this.Bn};g.h=s1a.prototype;g.h.AD=null;g.h.Xg=null;g.h.UB=!1;g.h.TP=null;g.h.cA=null;g.h.iG=null;g.h.BD=null;g.h.Bi=null;g.h.Sl=-1;g.h.Fv=null;g.h.Uv=null;g.h.connect=function(a){this.BD=a;a=G7(this.j,null,this.BD);v7(3);this.TP=Date.now();var b=this.j.N;null!=b?(this.Fv=b[0],(this.Uv=b[1])?(this.Bi=1,t1a(this)):(this.Bi=2,I7(this))):(m6(a,"MODE","init"),this.Xg=new w7(this,void 0,void 0,void 0),this.Xg.Np=this.AD,x7(this.Xg,a,!1,null,!0),this.Bi=0)};
g.h.IT=function(a){if(a)this.Bi=2,I7(this);else{v7(4);var b=this.j;b.Fk=b.Nn.Sl;P7(b,9)}a&&this.Uj(2)};
g.h.zD=function(a){return this.j.zD(a)};
g.h.abort=function(){this.Xg&&(this.Xg.cancel(),this.Xg=null);this.Sl=-1};
g.h.df=function(){return!1};
g.h.iK=function(a,b){this.Sl=a.Ev;if(0==this.Bi)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Fk=this.Sl;P7(a,2);return}this.Fv=c[0];this.Uv=c[1]}else a=this.j,a.Fk=this.Sl,P7(a,2);else if(2==this.Bi)if(this.UB)v7(7),this.iG=Date.now();else if("11111"==b){if(v7(6),this.UB=!0,this.cA=Date.now(),a=this.cA-this.TP,!g.Mc||g.Fc(10)||500>a)this.Sl=200,this.Xg.cancel(),v7(12),H7(this.j,this,!0)}else v7(8),this.cA=this.iG=Date.now(),this.UB=!1};
g.h.pz=function(){this.Sl=this.Xg.Ev;if(this.Xg.Rl)0==this.Bi?this.Uv?(this.Bi=1,t1a(this)):(this.Bi=2,I7(this)):2==this.Bi&&((!g.Mc||g.Fc(10)?!this.UB:200>this.iG-this.cA)?(v7(11),H7(this.j,this,!1)):(v7(12),H7(this.j,this,!0)));else{0==this.Bi?v7(9):2==this.Bi&&v7(10);var a=this.j;this.Xg.getLastError();a.Fk=this.Sl;P7(a,2)}};
g.h.Gv=function(){return this.j.Gv()};
g.h.isActive=function(){return this.j.isActive()};
g.h.Uj=function(a){this.j.Uj(a)};g.h=J7.prototype;g.h.Ek=null;g.h.Hv=null;g.h.ih=null;g.h.Te=null;g.h.CD=null;g.h.qz=null;g.h.jK=null;g.h.rz=null;g.h.Iv=0;g.h.aT=0;g.h.Zf=null;g.h.Dn=null;g.h.Tl=null;g.h.Qp=null;g.h.Nn=null;g.h.BC=null;g.h.ws=-1;g.h.kK=-1;g.h.Fk=-1;g.h.us=0;g.h.rs=0;g.h.Pp=8;g.Ya(v1a,g.vf);g.Ya(w1a,g.vf);g.h=J7.prototype;g.h.connect=function(a,b,c,d,e){v7(0);this.CD=b;this.Hv=c||{};d&&void 0!==e&&(this.Hv.OSID=d,this.Hv.OAID=e);this.K?(t7((0,g.Ua)(this.AL,this,a),100),x1a(this)):this.AL(a)};
g.h.disconnect=function(){y1a(this);if(3==this.j){var a=this.Iv++,b=this.qz.clone();g.Hk(b,"SID",this.C);g.Hk(b,"RID",a);g.Hk(b,"TYPE","terminate");N7(this,b);a=new w7(this,this.C,a,void 0);a.ls=2;a.An=l6(b.clone());h_a(new Image,a.An.toString());a.hs=Date.now();y7(a)}G1a(this)};
g.h.AL=function(a){this.Nn=new s1a(this);this.Nn.AD=this.Ek;this.Nn.u=this.D;this.Nn.connect(a)};
g.h.df=function(){return 0==this.j};
g.h.getState=function(){return this.j};
g.h.mK=function(a){this.Dn=null;C1a(this,a)};
g.h.lK=function(){this.Tl=null;this.Te=new w7(this,this.C,"rpc",this.J);this.Te.Np=this.Ek;this.Te.xD=0;var a=this.jK.clone();g.Hk(a,"RID","rpc");g.Hk(a,"SID",this.C);g.Hk(a,"CI",this.BC?"0":"1");g.Hk(a,"AID",this.ws);N7(this,a);if(!g.Mc||g.Fc(10))g.Hk(a,"TYPE","xmlhttp"),x7(this.Te,a,!0,this.rz,!1);else{g.Hk(a,"TYPE","html");var b=this.Te,c=!!this.rz;b.ls=3;b.An=l6(a.clone());o1a(b,c)}};
g.h.iK=function(a,b){if(0!=this.j&&(this.Te==a||this.ih==a))if(this.Fk=a.Ev,this.ih==a&&3==this.j)if(7<this.Pp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Tl){if(this.Te)if(this.Te.hs+3E3<this.ih.hs)L7(this),this.Te.cancel(),this.Te=null;else break a;O7(this);v7(19)}}else this.kK=a[1],0<this.kK-this.ws&&37500>a[2]&&this.BC&&0==this.rs&&!this.Qp&&(this.Qp=t7((0,g.Ua)(this.bT,this),6E3));else P7(this,11)}else null!=b&&P7(this,11);else if(this.Te==
a&&L7(this),!g.nb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.ws=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.rz=c[2],c=c[3],null!=c?this.Pp=c:this.Pp=6,this.j=3,this.Zf&&this.Zf.pK(),this.jK=G7(this,this.Gv()?this.rz:null,this.CD),D1a(this)):"stop"==c[0]&&P7(this,7):3==this.j&&("stop"==c[0]?P7(this,7):"noop"!=c[0]&&this.Zf&&this.Zf.oK(c),this.rs=0)};
g.h.bT=function(){null!=this.Qp&&(this.Qp=null,this.Te.cancel(),this.Te=null,O7(this),v7(20))};
g.h.pz=function(a){if(this.Te==a){L7(this);this.Te=null;var b=2}else if(this.ih==a)this.ih=null,b=1;else return;this.Fk=a.Ev;if(0!=this.j)if(a.Rl)if(1==b){b=Date.now()-a.hs;var c=u7;c.dispatchEvent(new v1a(c,a.Op?a.Op.length:0,b,this.us));K7(this);this.B.length=0}else D1a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Fk)){if(d=1==b)this.ih||this.Dn||1==this.j||2<=this.us?d=!1:(this.Dn=t7((0,g.Ua)(this.mK,this,a),E1a(this,this.us)),this.us++,d=!0);d=!(d||2==b&&O7(this))}if(d)switch(c){case 1:P7(this,
5);break;case 4:P7(this,10);break;case 3:P7(this,6);break;case 7:P7(this,12);break;default:P7(this,2)}}};
g.h.ZS=function(a){if(!g.cc(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.h.f_=function(a){a?v7(2):(v7(1),F1a(this,8))};
g.h.zD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Cj;a.K=!1;return a};
g.h.isActive=function(){return!!this.Zf&&this.Zf.isActive(this)};
g.h.Uj=function(a){var b=u7;b.dispatchEvent(new w1a(b,a))};
g.h.Gv=function(){return!(!g.Mc||g.Fc(10))};
g.h=H1a.prototype;g.h.pK=function(){};
g.h.oK=function(){};
g.h.nK=function(){};
g.h.DD=function(){};
g.h.qK=function(){return{}};
g.h.isActive=function(){return!0};g.h=I1a.prototype;g.h.enqueue=function(a){this.u.push(a)};
g.h.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.h.clear=function(){this.j=[];this.u=[]};
g.h.contains=function(a){return g.cc(this.j,a)||g.cc(this.u,a)};
g.h.remove=function(a){var b=this.j;var c=(0,g.IRa)(b,a);0<=c?(g.gc(b,c),b=!0):b=!1;return b||g.hc(this.u,a)};
g.h.Li=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};J1a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.O("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.aca(c.value),c={serializedIncrementBatch:g.Ic(g.Pe(c,K_a))},g.vt("streamzIncremented",c,{PH:b})}};var Q7;g.v(R7,g.vf);g.v(S7,g.vf);g.Ya(T7,g.G);g.h=T7.prototype;g.h.OY=function(){this.og=Math.min(3E5,2*this.og);this.B();this.u&&this.start()};
g.h.start=function(){var a=this.og+15E3*Math.random();g.tp(this.j,a);this.u=Date.now()+a};
g.h.stop=function(){this.j.stop();this.u=0};
g.h.isActive=function(){return this.j.isActive()};
g.h.reset=function(){this.j.stop();this.og=5E3};g.Ya(U7,H1a);g.h=U7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.Of=function(a){return this.B.Of(a)};
g.h.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.nf(this.B),this.disconnect(),g.nf(this.u),this.u=null,this.ma=function(){return""})};
g.h.isDisposed=function(){return this.Z};
g.h.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.X="";this.u.stop();this.J=a||null;this.D=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new J7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.j;e&&(e.Zf=null);d.Zf=this;this.j=d;V7(this);if(this.j){d=g.N("ID_TOKEN");var f=this.j.Ek||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Ek=f}e?(3!=e.getState()&&0==A1a(e)||e.getState(),this.j.connect(a,b,this.K,e.C,e.ws)):c?this.j.connect(a,
b,this.K,c.sessionId,c.arrayId):this.j.connect(a,b,this.K)}};
g.h.disconnect=function(a){this.N=a||0;this.u.stop();V7(this);this.j&&(3==this.j.getState()&&C1a(this.j),this.j.disconnect());this.N=0};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.cg(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.It()&&(V7(this),z1a(this.j,a))};
g.h.pK=function(){this.u.reset();this.J=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)z1a(this.j,a[b])}this.ea("handlerOpened")};
g.h.nK=function(a){var b=2==a&&401==this.j.Fk;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.h.DD=function(a,b){if(!this.u.isActive())this.ea("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}this.xa.j.sJ("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.j.dD("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Ja.j.dD("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.qK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.J&&g.cg(a,this.J);return a};
g.h.oK=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ea("handlerMessage",new K1a(a[0],a[1]))};
g.h.It=function(){return!!this.j&&3==this.j.getState()};
g.h.dn=function(a){(this.K.loungeIdToken=a)||this.u.stop();if(this.Ea&&this.j){var b=this.j.Ek||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Ek=b}};
g.h.po=function(){return this.K.id};
g.h.Bo=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.h.jr=function(){var a=this.u;g.up(a.j);a.start()};
g.h.JZ=function(){this.u.isActive();0==A1a(this.j)&&this.connect(this.J,this.D)};W7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
W7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
W7.prototype.D=function(a){a(Error("request timed out"))};g.v(Z7,g.tg);g.h=Z7.prototype;g.h.connect=function(a,b,c){this.Nc.connect(a,b,c)};
g.h.disconnect=function(a){this.Nc.disconnect(a)};
g.h.jr=function(){this.Nc.jr()};
g.h.po=function(){return this.Nc.po()};
g.h.Bo=function(){return this.Nc.Bo()};
g.h.It=function(){return this.Nc.It()};
g.h.eT=function(){this.dispatchEvent("channelOpened");var a=this.Nc,b=this.j;g.fw("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.BC,sessionId:a.j.C,arrayId:a.j.ws});g.fw("yt-remote-session-screen-id",b);a=y6();b=A6();g.cc(a,b)||a.push(b);c0a(a);B6()};
g.h.cT=function(){this.dispatchEvent("channelClosed")};
g.h.dT=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(a){this.dispatchEvent(new S7(a?1:0))};
g.h.sendMessage=function(a,b){this.Nc.sendMessage(a,b)};
g.h.dn=function(a){this.Nc.dn(a)};
g.h.dispose=function(){this.Nc.dispose()};g.h=L1a.prototype;
g.h.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.J&&(this.B.stop(),this.N=a,this.K=b,$7(this),(a=g.N("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.OV&&(this.u.mdxVersion=""+this.j.OV),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.K?this.u.ui=""+this.K:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new r7(this.pathPrefix,{lV:"gsessionid",RV:this.C,SV:this.u}),this.channel.open(),this.J=2,N1a(this))};
g.h.disconnect=function(a){this.X=void 0===a?0:a;this.B.stop();$7(this);this.channel&&(0!==this.X?this.u.ui=""+this.X:delete this.u.ui,this.channel.close());this.X=0};
g.h.Bo=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.h.jr=function(){var a=this.B;g.up(a.j);a.start()};
g.h.sendMessage=function(a,b){this.channel&&($7(this),a=Object.assign({_sc:a},b),this.channel.send(a))};
g.h.dn=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.h.po=function(){return this.j?this.j.id:""};
g.h.ea=function(a){return this.D.ea.apply(this.D,[a].concat(g.la(g.Ca.apply(1,arguments))))};
g.h.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.h.Of=function(a){return this.D.Of(a)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.nf(this.D),this.disconnect(),g.nf(this.B),this.va=function(){return""})};
g.h.isDisposed=function(){return this.Z};g.v(a8,g.tg);g.h=a8.prototype;g.h.connect=function(a,b){this.j.connect(a,b)};
g.h.disconnect=function(a){this.j.disconnect(a)};
g.h.jr=function(){this.j.jr()};
g.h.po=function(){return this.j.po()};
g.h.Bo=function(){return this.j.Bo()};
g.h.It=function(){return 3===this.j.J};
g.h.kR=function(){this.dispatchEvent("channelOpened")};
g.h.iR=function(){this.dispatchEvent("channelClosed")};
g.h.jR=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(){this.dispatchEvent(new S7(M1a(this.j)?1:0))};
g.h.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.h.dn=function(a){this.j.dn(a)};
g.h.dispose=function(){this.j.dispose()};var V1a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Ya(g8,g.iv);g8.prototype.Qh=function(){return this.screens};
g8.prototype.contains=function(a){return!!w6(this.screens,a)};
g8.prototype.get=function(a){return a?x6(this.screens,a):null};
g8.prototype.info=function(a){c8(this.J,a)};g.v(h8,g.iv);g.h=h8.prototype;g.h.start=function(){!this.j&&isNaN(this.Tb)&&this.XO()};
g.h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.Tb)||(g.Cr(this.Tb),this.Tb=NaN)};
g.h.ra=function(){this.stop();g.iv.prototype.ra.call(this)};
g.h.XO=function(){this.Tb=NaN;this.j=g.Gr(X7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Ua)(this.mR,this),onError:(0,g.Ua)(this.lR,this),onTimeout:(0,g.Ua)(this.nR,this)})};
g.h.mR=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new r6(a),b)};
g.h.lR=function(a){this.j=null;a.status&&404==a.status?this.u>=r3a.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=r3a[this.u],this.Tb=g.Ar((0,g.Ua)(this.XO,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.h.nR=function(){this.j=null;this.ea("pairingFailed",Error("Server not responding"))};
var r3a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ya(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.ea("screenChange");!g.gw("yt-remote-lounge-token-expiration")&&Z1a(this);g.Cr(this.j);this.j=g.Ar((0,g.Ua)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);W1a(this,a);k8(this,!1);this.ea("screenChange");b(a);a.token||Z1a(this)};
g.h.remove=function(a,b){var c=i8(this);Y1a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.h.zC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.h.ra=function(){g.Cr(this.j);j8.xe.ra.call(this)};
g.h.MU=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.J,"Missed "+b+" lounge tokens.")};
g.h.LU=function(a){c8(this.J,"Requesting lounge tokens failed: "+a)};g.v(m8,g.iv);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.gw("yt-remote-fast-check-period")||"0",10);(this.C=g.Xa()-144E5<a?0:a)?p8(this):(this.C=g.Xa()+3E5,g.fw("yt-remote-fast-check-period",this.C),this.EH())};
g.h.isEmpty=function(){return g.Vf(this.j)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.J(),b=g.Gf(this.j,function(c,d){return c&&!!x6(a,d)},this);
o8(this,b)};
g.h.ra=function(){g.Cr(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.iv.prototype.ra.call(this)};
g.h.EH=function(){g.Cr(this.B);this.B=NaN;this.u&&this.u.abort();var a=a2a(this);if(n6(a)){var b=X7(this.D,"/pairing/get_screen_availability");this.u=Y7(this.D,b,{lounge_token:g.Nf(a).join(",")},(0,g.Ua)(this.tY,this,a),(0,g.Ua)(this.sY,this))}else o8(this,{}),p8(this)};
g.h.tY=function(a,b){this.u=null;var c=g.Nf(a2a(this));if(g.tc(c,g.Nf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.Ee("Changing Screen set during request."),this.EH()};
g.h.sY=function(a){this.Ee("Screen availability failed: "+a);this.u=null;p8(this)};
g.h.Ee=function(a){c8("OnlineScreenService",a)};g.Ya(q8,g8);g.h=q8.prototype;g.h.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ea("screenChange"),this.j.isEmpty()||this.ea("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.h.zC=function(a,b,c,d){this.u.contains(a)?this.u.zC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.J,a),d(Error(a)))};
g.h.Qh=function(a){return a?this.screens:g.jc(this.screens,g.Kn(this.B,function(b){return!this.contains(b)},this))};
g.h.iJ=function(){return g.Kn(this.Qh(!0),function(a){return!!this.j.j[a.id]},this)};
g.h.jJ=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.nf(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.nf(l);f(m)});
l.start();return(0,g.Ua)(l.stop,l)};
g.h.oR=function(a,b,c,d){g.Gr(X7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ua)(function(e,f){e=new r6(f.screen||{});if(!e.name||e2a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);e2a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ua)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ua)(function(){d(Error("pairing request timed out."))},this)})};
g.h.ra=function(){g.nf(this.u);g.nf(this.j);q8.xe.ra.call(this)};
g.h.VU=function(){g2a(this);this.ea("screenChange");this.j.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Ya(t8,g.iv);g.h=t8.prototype;g.h.getScreen=function(){return this.C};
g.h.Lg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.h.info=function(a){c8(this.ya,a)};
g.h.kJ=function(){return null};
g.h.UH=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ua)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ua)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.ra=function(){this.UH("");t8.xe.ra.call(this)};g.v(w8,t8);g.h=w8.prototype;g.h.TH=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");p2a(this);this.va=!1;this.X="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);l2a(this,"getMdxSessionStatus")};
g.h.Qt=function(a){this.info("launchWithParams no-op for Cast: "+g.ej(a))};
g.h.stop=function(){this.u?this.u.stop((0,g.Ua)(function(){this.Lg()},this),(0,g.Ua)(function(){this.Lg(Error("Failed to stop receiver app."))},this)):this.Lg(Error("Stopping cast device without session."))};
g.h.UH=function(){};
g.h.ra=function(){this.info("disposeInternal");p2a(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.u=null;t8.prototype.ra.call(this)};
g.h.gZ=function(a,b){if(!this.isDisposed())if(b)if(b=o6(b),g.Ra(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ej(b)),a){case "mdxSessionStatus":j2a(this,b);break;case "loungeToken":m2a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.sM=function(a,b,c,d){g.Cr(this.N);this.N=0;d2a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Ua)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Ar((0,g.Ua)(this.sM,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.kJ=function(){return this.u};
g.h.pR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Lg())};g.v(z8,t8);g.h=z8.prototype;g.h.TH=function(a){this.u=a;this.u.addUpdateListener(this.Ea)};
g.h.Qt=function(a){this.Ia=a;this.Z()};
g.h.stop=function(){w2a(this);this.u?this.u.stop((0,g.Ua)(this.Lg,this,null),(0,g.Ua)(this.Lg,this,"Failed to stop DIAL device.")):this.Lg()};
g.h.ra=function(){w2a(this);this.u&&this.u.removeUpdateListener(this.Ea);this.u=null;t8.prototype.ra.call(this)};
g.h.qR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=function(){},this.Lg())};g.v(D8,t8);D8.prototype.stop=function(){this.Lg()};
D8.prototype.TH=function(){};
D8.prototype.Qt=function(){g.Cr(this.u);this.u=NaN;var a=x6(this.B.Qh(),this.j.label);a?u8(this,a):this.Lg(Error("No such screen"))};
D8.prototype.ra=function(){g.Cr(this.u);this.u=NaN;t8.prototype.ra.call(this)};g.v(E8,g.iv);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ua)(this.eY,this);c=new chrome.cast.ApiConfig(c,(0,g.Ua)(this.IO,this),e,d,a);c.customDialLaunchCallback=(0,g.Ua)(this.YW,this);
chrome.cast.initialize(c,(0,g.Ua)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),S1a(),this.u.subscribe("onlineScreenChange",(0,g.Ua)(this.lJ,this)),this.B=z2a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ua)(function(f){this.Ee("Failed to set initial custom receivers: "+g.ej(f))},this)),this.ea("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ua)(function(f){this.Ee("Failed to initialize API: "+g.ej(f));
b(!1)},this))};
g.h.NZ=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.j.j.friendlyName),H8(this,null)}if(a&&b){if(!this.j){c=x6(this.u.Qh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=x2a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ua)(function(d){this.Ee("Failed to set initial custom receivers: "+g.ej(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.j.UH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.OZ=function(a){this.isDisposed()?this.Ee("Setting connection data on disposed cast v2"):this.j?this.j.Qt(a):this.Ee("Setting connection data without a session")};
g.h.sR=function(){this.isDisposed()?this.Ee("Stopping session on disposed cast v2"):this.j?(this.j.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Ua)(this.IO,this),(0,g.Ua)(this.wY,this))};
g.h.ra=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Ua)(this.lJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=P1a,b=g.Ka("yt.mdx.remote.debug.handlers_");g.hc(b||[],a);g.nf(this.j);g.iv.prototype.ra.call(this)};
g.h.Ee=function(a){c8("Controller",a)};
g.h.KO=function(a,b){this.j==a&&(b||H8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.h.bY=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ea("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.Ee("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Ee("Stopping receiver w/o session: "+a.friendlyName)}else this.Ee("onReceiverAction_ called without receiver.")};
g.h.YW=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Ee("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Ee("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return F8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Ee('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=t2a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ir(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=u2a(b,c)):a=u2a(b,c)):a=C8(b);return a};
g.h.IO=function(a){var b=this;if(!this.isDisposed()&&!this.J){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.Ee("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=x6(this.u.Qh(),
d.label);e&&s6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.nf(this.j),this.j=new w8(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Ua)(this.KO,this,this.j)),this.j.subscribe("sessionFailed",function(){return y2a(b,b.j)}),this.j.Qt(null));
this.j.TH(a)}}};
g.h.rR=function(){return this.j?this.j.kJ():null};
g.h.wY=function(a){this.isDisposed()||(this.Ee("Failed to estabilish a session: "+g.ej(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.h.eY=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.ea("yt-remote-cast2-availability-change",G8(this))}};
g.h.lJ=function(){this.isDisposed()||(this.B=z2a(this),F8("Updating custom receivers: "+g.ej(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ua)(function(){this.Ee("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.OZ;E8.prototype.setConnectedScreenStatus=E8.prototype.NZ;E8.prototype.stopSession=E8.prototype.sR;E8.prototype.getCastSession=E8.prototype.rR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.ol=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.h.Kc=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.gk=function(a){this.D=isNaN(a)?0:a};
g.h.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.h.clone=function(){return new S8(Y8(this))};g.v($8,g.iv);g.h=$8.prototype;g.h.getState=function(){return this.B};
g.h.Bo=function(){return this.C.getReconnectTimeout()};
g.h.jr=function(){this.C.reconnect()};
g.h.play=function(){b9(this)?(this.j?this.j.play(null,g.La,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.j?this.j.pause(null,g.La,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.j){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Kc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.La,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.ea("remotePlayerChange")}else c9(this,g.Va(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.j?this.j.stop(null,g.La,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Ua)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ua)(function(){this.Ee("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Ua)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ua)(function(){this.Ee("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Va(this.setVolume,a,b))};
g.h.mJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ej(b.style),g.cg(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Va(this.mJ,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Va(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.ej(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.NB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Va(this.NB,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Va(this.nextVideo,a,b))};
g.h.Os=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.Os)};
g.h.NL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.NL)};
g.h.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.iv.prototype.dispose.call(this)};
g.h.ra=function(){L2a(this);this.C=null;this.D.clear();Z8(this,null);g.iv.prototype.ra.call(this)};
g.h.VH=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.h.ZX=function(a,b){this.ea(a,b)};
g.h.NW=function(a){if(!a)this.Cx(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.Cx=function(a){c8("CP","Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),M2a(this),this.ea("remotePlayerChange")};
g.h.MW=function(a){a?(M2a(this),this.ea("remotePlayerChange")):this.Cx(null)};
g.h.pI=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.QW=function(){var a=I2a();a&&Z8(this,a)};
g.h.Ee=function(a){c8("CP",a)};g.v(j9,g.iv);g.h=j9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ea&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;V8(this.j,
n);this.D="UNSUPPORTED";c=this.Ea?"setInitialState":"setPlaylist";h9("Connecting with "+c+" and params: "+g.ej(m));this.u.connect({method:c,params:g.ej(m)},a,d0a())}else h9("Connecting without params"),this.u.connect({},a,d0a());Q2a(this)};
g.h.dn=function(a){this.u.dn(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ja("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),i9(this,3));g.iv.prototype.dispose.call(this)};
g.h.ra=function(){k9(this);m9(this);l9(this);g.Cr(this.N);this.N=NaN;g.Cr(this.X);this.X=NaN;this.C=null;g.us(this.Z);this.Z.length=0;this.u.dispose();g.iv.prototype.ra.call(this);this.D=this.K=this.B=this.j=this.u=null};
g.h.ZM=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.q(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.FU=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Lw())?this.u.It()&&isNaN(this.J)&&(a=1):a=2);return a};
g.h.Xs=function(a){h9("Disconnecting with "+a);g.Ja("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.ea("beforeDisconnect",a);1==a&&C6();this.u.disconnect(a);this.dispose()};
g.h.DU=function(){var a=this.j;this.C&&(a=this.j.clone(),X8(a,this.C,a.index));return Y8(a)};
g.h.PZ=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Cr(this.N),this.N=g.Ar(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&W8(this.j)==W8(c)&&g.ej(this.j.trackData)==g.ej(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.vc(d,function(e){this.ea(e)},this)};
g.h.rM=function(){var a=this.u.po(),b=g.$b(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Lw=function(){return this.u.Bo()};
g.h.AU=function(){return this.D||"UNSUPPORTED"};
g.h.BU=function(){return this.K||""};
g.h.tR=function(){!isNaN(this.Lw())&&this.u.jr()};
g.h.MZ=function(a,b){n9(this,a,b);S2a(this)};
g.h.nJ=function(){var a=g.Qr("SID","")||"",b=g.Qr("SAPISID","")||"",c=g.Qr("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ic(g.jb(a),2);b=g.Ic(g.jb(b),2);c=g.Ic(g.jb(c),2);return g.Ic(g.jb(a+","+b+","+c),2)};
j9.prototype.subscribe=j9.prototype.subscribe;j9.prototype.unsubscribeByKey=j9.prototype.Of;j9.prototype.getProxyState=j9.prototype.FU;j9.prototype.disconnect=j9.prototype.Xs;j9.prototype.getPlayerContextData=j9.prototype.DU;j9.prototype.setPlayerContextData=j9.prototype.PZ;j9.prototype.getOtherConnectedRemoteId=j9.prototype.rM;j9.prototype.getReconnectTimeout=j9.prototype.Lw;j9.prototype.getAutoplayMode=j9.prototype.AU;j9.prototype.getAutoplayVideoId=j9.prototype.BU;j9.prototype.reconnect=j9.prototype.tR;
j9.prototype.sendMessage=j9.prototype.MZ;j9.prototype.getXsrfToken=j9.prototype.nJ;j9.prototype.isCapabilitySupportedOnConnectedDevices=j9.prototype.ZM;g.v(o9,g8);g.h=o9.prototype;g.h.Qh=function(a){return this.bf.$_gs(a)};
g.h.contains=function(a){return!!this.bf.$_c(a)};
g.h.get=function(a){return this.bf.$_g(a)};
g.h.start=function(){this.bf.$_st()};
g.h.add=function(a,b,c){this.bf.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.bf.$_r(a,b,c)};
g.h.zC=function(a,b,c,d){this.bf.$_un(a,b,c,d)};
g.h.ra=function(){for(var a=0,b=this.j.length;a<b;++a)this.bf.$_ubk(this.j[a]);this.j.length=0;this.bf=null;g8.prototype.ra.call(this)};
g.h.uR=function(){this.ea("screenChange")};
g.h.GX=function(){this.ea("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.oR;q8.prototype.$_gsppc=q8.prototype.jJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.zC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Qh;q8.prototype.$_gos=q8.prototype.iJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.Of;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.v(I9,g.G);g.h=I9.prototype;g.h.ra=function(){g.G.prototype.ra.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.hc;a.unsubscribe("proxyStateChange",this.HO,this);a.unsubscribe("remotePlayerChange",this.Gx,this);a.unsubscribe("remoteQueueChange",this.zB,this);a.unsubscribe("previousNextChange",this.EO,this);a.unsubscribe("nowAutoplaying",this.yO,this);a.unsubscribe("autoplayDismissed",this.bO,this);this.hc=this.u=null};
g.h.Mj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.hc.B)if(J9(this)){var c=a;if(!a9(this.hc).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.hc).Kc()?this.hc.pause():this.hc.play();break;case "control_play":this.hc.play();break;case "control_pause":this.hc.pause();break;case "control_seek":this.K.wD(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.KW=function(a){this.N.OS(a)};
g.h.y_=function(a){this.Mj("control_subtitles_set_track",g.Vf(a)?null:a)};
g.h.ZP=function(){var a=this.I.getOption("captions","track");g.Vf(a)||K9(this,a)};
g.h.Rb=function(a){this.u.Rb(a,this.I.getVideoData().lengthSeconds)};
g.h.rX=function(){g.Vf(this.C)||n3a(this,this.C);this.D=!1};
g.h.HO=function(a,b){this.B.stop();2===b&&this.SP()};
g.h.Gx=function(){if(J9(this)){this.j.stop();var a=a9(this.hc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Hf=1;break;case 1082:case 1083:this.u.Hf=0;break;default:this.u.Hf=-1}switch(a.playerState){case 1081:case 1:this.jc(new g.tH(8));this.RP();break;case 1085:case 3:this.jc(new g.tH(9));break;case 1083:case 0:this.jc(new g.tH(2));this.K.stop();this.Rb(this.I.getVideoData().lengthSeconds);break;case 1084:this.jc(new g.tH(4));break;case 2:this.jc(new g.tH(4));this.Rb(W8(a));
break;case -1:this.jc(new g.tH(64));break;case -1E3:this.jc(new g.tH(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",UE:2}))}a=a9(this.hc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,n3a(this,a));a=a9(this.hc);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.X.isActive()||this.AQ()}else m3a(this)};
g.h.EO=function(){this.I.ea("mdxpreviousnextchange")};
g.h.zB=function(){J9(this)||m3a(this)};
g.h.yO=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.h.bO=function(){this.I.ea("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.hc.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.hc).playerState?L9(this,a):b&&this.hc.seekTo(a)};
g.h.AQ=function(){var a=this;if(J9(this)){var b=a9(this.hc);this.events.xc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){l3a(a,c)})}};
g.h.RP=function(){this.j.stop();if(!this.hc.isDisposed()){var a=a9(this.hc);a.Kc()&&this.jc(new g.tH(8));this.Rb(W8(a));this.j.start()}};
g.h.SP=function(){this.B.stop();this.j.stop();var a=this.hc.Bo();2==this.hc.B&&!isNaN(a)&&this.B.start()};
g.h.jc=function(a){this.B.stop();var b=this.J;if(!g.yH(b,a)){var c=g.T(a,2);c!==g.T(this.J,2)&&this.I.Eu(c);this.J=a;p3a(this.u,b,a)}};g.v(M9,g.U);M9.prototype.rd=function(){this.j.show()};
M9.prototype.Gb=function(){this.j.hide()};
M9.prototype.u=function(){p6("mdx-privacy-popup-cancel");this.Gb()};
M9.prototype.B=function(){p6("mdx-privacy-popup-confirm");this.Gb()};g.v(N9,g.U);N9.prototype.onStateChange=function(a){o3a(this,a.state)};g.v(O9,g.BO);O9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.ip=g.xc(a,this.j,this),g.CO(this,g.Ql(a,this.j)),a=this.I.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Ai(a),this.enable(!0)):this.enable(!1)};
O9.prototype.j=function(a){return a.key};
O9.prototype.Dj=function(a){return"cast-selector-receiver"===a?"Cast...":this.ip[a].name};
O9.prototype.Pf=function(a){g.BO.prototype.Pf.call(this,a);this.I.setOption("remote","currentReceiver",this.ip[a]);this.sb.Gb()};g.v(P9,g.tL);g.h=P9.prototype;
g.h.create=function(){var a=this.player.U(),b=g.DC(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.S("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.S("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.S("enable_cast_short_lived_lounge_token")};g3a(b,a);this.subscriptions.push(g.Ms("yt-remote-before-disconnect",this.IW,this));this.subscriptions.push(g.Ms("yt-remote-connection-change",this.fY,this));this.subscriptions.push(g.Ms("yt-remote-receiver-availability-change",this.GO,
this));this.subscriptions.push(g.Ms("yt-remote-auto-connect",this.dY,this));this.subscriptions.push(g.Ms("yt-remote-receiver-resumed",this.cY,this));this.subscriptions.push(g.Ms("mdx-privacy-popup-confirm",this.sZ,this));this.subscriptions.push(g.Ms("mdx-privacy-popup-cancel",this.rZ,this));this.GO()};
g.h.load=function(){this.player.cancelPlayback();g.tL.prototype.load.call(this);this.Ci=new I9(this,this.player,this.hc);var a=(a=k3a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);p3a(this,this.Md,this.Md);this.player.Gl(6)};
g.h.unload=function(){this.player.ea("mdxautoplaycanceled");this.Qn=this.yl;g.tf(this.Ci,this.hc);this.hc=this.Ci=null;g.tL.prototype.unload.call(this);this.player.Gl(5);Q9(this)};
g.h.ra=function(){g.Ns(this.subscriptions);g.tL.prototype.ra.call(this)};
g.h.zl=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.Ci.Mj.apply(this.Ci,[a].concat(g.la(b)))};
g.h.getAdState=function(){return this.Hf};
g.h.ol=function(){return this.hc?a9(this.hc).ol:!1};
g.h.hasNext=function(){return this.hc?a9(this.hc).hasNext:!1};
g.h.Rb=function(a,b){this.oN=a||0;this.player.ea("progresssync",a,b);this.player.Qa("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.oN};
g.h.getProgressState=function(){var a=a9(this.hc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.U().S("web_player_mdx_allow_seeking_change_killswitch")?this.player.uf():!a.isAdPlaying()&&this.player.uf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.j+U8(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+U8(a):a.j,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.h.nextVideo=function(){this.hc&&this.hc.nextVideo()};
g.h.NB=function(){this.hc&&this.hc.NB()};
g.h.IW=function(a){1===a&&(this.pH=this.hc?a9(this.hc):null)};
g.h.fY=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Qn;this.loaded&&this.unload();this.hc=a;this.pH=null;b.key!==this.yl.key&&(this.Qn=b,this.load())}else g.nf(this.hc),this.hc=null,this.loaded&&(this.unload(),(a=this.pH)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.GO=function(){var a=[this.yl],b=a.concat,c=h3a();O8()&&g.gw("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.ip=b.call(a,c);a=A9()||this.yl;R9(this,a);this.player.Qa("onMdxReceiversChange")};
g.h.dY=function(){var a=A9();R9(this,a)};
g.h.cY=function(){this.Qn=A9()};
g.h.sZ=function(){this.Ox=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.rZ=function(){this.Ox=!1;Q9(this);R9(this,this.yl);this.Qn=this.yl;H9=!1;B9=null;this.player.playVideo()};
g.h.Af=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.ip;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Qn:this.yl;case "quickCast":return 2===this.ip.length&&"cast-selector-receiver"===this.ip[1].key?(b&&Q8(),!0):!1}};
g.h.pI=function(){this.hc.pI()};
g.h.gi=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.sL("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 20:46:23 Mar 08, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:18:43 Jul 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 123.396
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.063
  RedisCDXSource: 0.654
  esindex: 0.012
  LoadShardBlock: 98.7 (3)
  PetaboxLoader3.datanode: 125.546 (4)
  load_resource: 169.964
  PetaboxLoader3.resolve: 113.972
*/