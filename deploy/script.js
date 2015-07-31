/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,n,r,a,o,l=function(t){var e,s=t.split("."),n=i;for(e=0;s.length>e;e++)n[s[e]]=n=n[s[e]]||{};return n},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},p=function(s,n,r,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=r;var o=[];this.check=function(h){for(var _,u,m,f,d=n.length,v=d;--d>-1;)(_=c[n[d]]||new p(n[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&r)for(u=("com.greensock."+s).split("."),m=u.pop(),f=l(u.join("."))[m]=this.gsClass=r.apply(r,o),a&&(i[m]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var n,r,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(r=l[_],n=s?v("easing."+r,null,!0):h.easing[r]||{},a=u.length;--a>-1;)o=u[a],w[r+"."+o]=w[o+r]=n[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],n=s.length;--n>-1;)r=s[n]+",Power"+n,P(new y(null,null,1,n),r,"easeOut",!0),P(new y(null,null,2,n),r,"easeIn"+(0===n?",easeNone":"")),P(new y(null,null,3,n),r,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=b.prototype,r.addEventListener=function(t,e,i,s,n){n=n||0;var r,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)r=h[l],r.c===e&&r.s===i?h.splice(l,1):0===_&&n>r.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:n}),this!==a||o||a.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,n=this._listeners[t];if(n)for(e=n.length,i=this._eventTarget;--e>-1;)s=n[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],n=s.length;--n>-1&&!k;)k=t[s[n]+"RequestAnimationFrame"],A=t[s[n]+"CancelAnimationFrame"]||t[s[n]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,n,r,l,h=this,u=S(),f=e!==!1&&k,c=500,p=33,d="tick",v=function(t){var e,a,o=S()-x;o>c&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=r?.004:r-e),a=!0),t!==!0&&(n=s(v)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){v(!0)},h.lagSmoothing=function(t,e){c=t||1/_,p=Math.min(e,c,0)},h.sleep=function(){null!=n&&(f&&A?A(n):clearTimeout(n),s=m,n=null,h===a&&(o=!1))},h.wake=function(){null!==n?h.sleep():h.frame>10&&(x=S()-c+5),s=0===i?m:f&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),v(2)},h.fps=function(t){return arguments.length?(i=t,r=1/(i||60),l=this.time+r,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&5>h.frame&&h.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,r=R.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||T)},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,n=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?s-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&$())}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&this.render(s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,!0,!0)),this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=D.prototype=new R,r.constructor=D,r.kill()._gc=!1,r._first=r._last=r._recent=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)s=n._next,(n._active||t>=n._startTime&&!n._paused)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=s},r.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var n,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],n=0;a.length>n;n++)r=a[n],r?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(n--,1),this._targets=a=a.concat(u(r))):(this._siblings[n]=K(r,this,!1),1===l&&this._siblings[n].length>1&&J(r,this,null,1,this._siblings[n])):(r=a[n--]=I.selector(r),"string"==typeof r&&a.splice(n+1,1)):a.splice(n--,1);else this._propLookup={},this._siblings=K(e,this,!1),1===l&&this._siblings.length>1&&J(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!F[i]||F[i]&&F[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=I.prototype=new R,r.constructor=I,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=r._lazy=!1,I.version="1.17.0",I.defaultEase=r._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=120,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],N={},L=I._internals={isArray:f,isSelector:E,lazyTweens:z},F=I._plugins={},U=L.tweenLookup={},j=0,G=L.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=R._rootFramesTimeline=new D,B=R._rootTimeline=new D,M=30,$=L.lazyRender=function(){var t,e=z.length;for(N={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout($,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&$(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),z.length&&$(),a.frame>=M){M=a.frame+(parseInt(I.autoSleep,10)||120);for(i in U){for(e=U[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete U[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var K=function(t,e,i){var s,n,r=t._gsTweenID;if(U[r||(t._gsTweenID=r="t"+j++)]||(U[r]={target:t,tweens:[]}),e&&(s=U[r].tweens,s[n=s.length]=e,i))for(;--n>-1;)s[n]===e&&s.splice(n,1);return U[r].tweens},H=function(t,e,i,s){var n,r,a=t.vars.onOverwrite;return a&&(n=a(t,e,i,s)),a=I.onOverwrite,a&&(r=a(t,e,i,s)),n!==!1&&r!==!1},J=function(t,e,i,s,n){var r,a,o,l;if(1===s||s>=4){for(l=n.length,r=0;l>r;r++)if((o=n[r])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,m=[],f=0,c=0===e._duration;for(r=n.length;--r>-1;)(o=n[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||V(e,0,c),0===V(o,h,c)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(r=f;--r>-1;)if(o=m[r],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!H(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},V=function(t,e,i){for(var s=t._timeline,n=s._timeScale,r=t._startTime;s._timeline;){if(r+=s._startTime,n*=s._timeScale,s._paused)return-100;s=s._timeline}return r/=n,r>e?r-e:i&&r===e||!t._initted&&2*_>r-e?_:(r+=t.totalDuration()/t._timeScale/n)>e+_?0:r-e-_};r._init=function(){var t,e,i,s,n,r=this.vars,a=this._overwrittenProps,o=this._duration,l=!!r.immediateRender,h=r.ease;if(r.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={};for(s in r.startAt)n[s]=r.startAt[s];if(n.overwrite=!1,n.immediateRender=!0,n.lazy=l&&r.lazy!==!1,n.startAt=n.delay=null,this._startAt=I.to(this.target,0,n),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(r.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in r)G[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&r.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,r.easeParams):w[h]||I.defaultEase:I.defaultEase,r.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,r.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,n){var r,a,o,l,h,_;if(null==e)return!1;N[e._gsTweenID]&&$(),this.vars.css||e.style&&e!==t&&e.nodeType&&F.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(r in this.vars){if(_=this.vars[r],G[r])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[r]=_=this._swapSelfInParams(_,this));else if(F[r]&&(l=new F[r])._onInitTween(e,this.vars[r],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:r,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[r]=h={_next:this._firstPT,t:e,p:r,f:"function"==typeof e[r],n:r,pg:!1,pr:0},h.s=h.f?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return n&&this._kill(n,e)?this._initProps(e,i,s,n):this._overwrite>1&&this._firstPT&&s.length>1&&J(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,n)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(N[e._gsTweenID]=!0),o)},r.render=function(t,e,i){var s,n,r,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(n="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(n="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,m=this._easeType,f=this._easePower;(1===m||3===m&&u>=.5)&&(u=1-u),3===m&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===m?1-u:2===m?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):n||(n="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),n&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this._callback(n),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},r._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,n,r,a,o,l,h,_,u,m=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==n&&"all"!==n&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(r in h)o[r]&&(u||(u=[]),u.push(r));if((u||!t)&&!H(this,i,e,u))return!1}for(r in h)(a=o[r])&&(m&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[r]),_&&(n[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},r.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},r._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=K(s[i],this,!0);else this._siblings=K(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,n){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,n,r;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(r=s[i],n=i;--n>-1;)r===s[n]&&s.splice(i,1)}else for(s=K(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),n=s.length;--n>-1;)s[n]._kill(i,t)};var W=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=W.prototype},!0);if(r=W.prototype,W.version="1.10.1",W.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,n,r){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-Number(i):parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:n||e,r:r},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,n,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=n;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:n=o,(o._next=s)?s._prev=o:r=o,o=a}o=e._firstPT=n}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},W.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===W.API&&(F[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,n=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){W.call(this,i,s),this._overwriteProps=n||[]},t.global===!0),o=a.prototype=new W(i);o.constructor=a,a.API=t.API;for(e in r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,W.activate([a]),a},s=t._gsQueue){for(n=0;s.length>n;n++)s[n]();for(r in c)c[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");;
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],f=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,f=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=f,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&f.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&f.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&f.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),f.to(t[u],e,c(r),u*n);return this.add(f,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(f=r[u])&&(f=new s({tweens:f})),this.add(f,l),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?l=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(c===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");;
/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=l[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 0.4.0
 * DATE: 2015-05-06
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=/(?:\d|\-|\+|=|#|\.)*/g,e=/[A-Za-z%]/g;_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.4.0",init:function(i,r){var s,n,a,o,l;if("function"!=typeof i.setAttribute)return!1;this._target=i,this._proxy={},this._start={},this._end={},this._suffix={};for(s in r)this._start[s]=this._proxy[s]=n=i.getAttribute(s)+"",this._end[s]=a=r[s]+"",this._suffix[s]=o=e.test(a)?a.replace(t,""):e.test(n)?n.replace(t,""):"",o&&(l=a.indexOf(o),-1!==l&&(a=a.substr(0,l))),this._addTween(this._proxy,s,parseFloat(n),a,s)||(this._suffix[s]=""),"="===a.charAt(1)&&(this._end[s]=this._firstPT.s+this._firstPT.c+o),this._overwriteProps.push(s);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,r=i.length,s=1===t?this._end:t?this._proxy:this._start,n=s===this._proxy;--r>-1;)e=i[r],this._target.setAttribute(e,s[e]+(n?this._suffix[e]:""))}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: beta 1.3.4
 * DATE: 2014-11-15
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=180/Math.PI,e=[],i=[],r=[],s={},n=_gsScope._gsDefine.globals,a=function(t,e,i,r){this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(t,e,i,r){var s={a:t},n={},a={},o={c:r},l=(t+e)/2,h=(e+i)/2,u=(i+r)/2,_=(l+h)/2,f=(h+u)/2,c=(f-_)/8;return s.b=l+(t-l)/4,n.b=_+c,s.c=n.a=(s.b+n.b)/2,n.c=a.a=(_+f)/2,a.b=f-c,o.b=u+(r-u)/4,a.c=o.a=(a.b+o.b)/2,[s,n,a,o]},h=function(t,s,n,a,o){var h,u,_,f,c,p,d,m,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(h=0;w>h;h++)c=t[b],u=c.a,_=c.d,f=t[b+1].d,o?(y=e[h],T=i[h],x=.25*(T+y)*s/(a?.5:r[h]||.5),p=_-(_-u)*(a?.5*s:0!==y?x/y:0),d=_+(f-_)*(a?.5*s:0!==T?x/T:0),m=_-(p+((d-p)*(3*y/(y+T)+.5)/4||0))):(p=_-.5*(_-u)*s,d=_+.5*(f-_)*s,m=_-(p+d)/2),p+=m,d+=m,c.c=g=p,c.b=0!==h?P:P=c.a+.6*(c.c-c.a),c.da=_-u,c.ca=g-u,c.ba=P-u,n?(v=l(u,P,g,_),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=d;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=l(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},u=function(t,r,s,n){var o,l,h,u,_,f,c=[];if(n)for(t=[n].concat(t),l=t.length;--l>-1;)"string"==typeof(f=t[l][r])&&"="===f.charAt(1)&&(t[l][r]=n[r]+Number(f.charAt(0)+f.substr(2)));if(o=t.length-2,0>o)return c[0]=new a(t[0][r],0,0,t[-1>o?0:1][r]),c;for(l=0;o>l;l++)h=t[l][r],u=t[l+1][r],c[l]=new a(h,0,0,u),s&&(_=t[l+2][r],e[l]=(e[l]||0)+(u-h)*(u-h),i[l]=(i[l]||0)+(_-u)*(_-u));return c[l]=new a(t[l][r],0,0,t[l+1][r]),c},_=function(t,n,a,l,_,f){var c,p,d,m,g,v,y,T,x={},w=[],b=f||t[0];_="string"==typeof _?","+_+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,c=w.length;--c>-1;)if(p=w[c],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),f&&t.unshift(f),t.push(t[1]),f=t[t.length-3])}for(e.length=i.length=r.length=0,c=w.length;--c>-1;)p=w[c],s[p]=-1!==_.indexOf(","+p+","),x[p]=u(t,p,s[p],f);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!l){for(c=w.length;--c>-1;)if(s[p])for(d=x[w[c]],v=d.length-1,m=0;v>m;m++)g=d[m+1].da/i[m]+d[m].da/e[m],r[m]=(r[m]||0)+g*g;for(c=r.length;--c>-1;)r[c]=Math.sqrt(r[c])}for(c=w.length,m=a?4:1;--c>-1;)p=w[c],d=x[p],h(d,n,a,l,s[p]),y&&(d.splice(0,m),d.splice(d.length-m,m));return x},f=function(t,e,i){e=e||"soft";var r,s,n,o,l,h,u,_,f,c,p,d={},m="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||m+1>t.length)throw"invalid Bezier data";for(f in t[0])v.push(f);for(h=v.length;--h>-1;){for(f=v[h],d[f]=l=[],c=0,_=t.length,u=0;_>u;u++)r=null==i?t[u][f]:"string"==typeof(p=t[u][f])&&"="===p.charAt(1)?i[f]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&u>1&&_-1>u&&(l[c++]=(r+l[c-2])/2),l[c++]=r;for(_=c-m+1,c=0,u=0;_>u;u+=m)r=l[u],s=l[u+1],n=l[u+2],o=2===m?0:l[u+3],l[c++]=p=3===m?new a(r,s,n,o):new a(r,(2*s+r)/3,(2*s+n)/3,n);l.length=c}return d},c=function(t,e,i){for(var r,s,n,a,o,l,h,u,_,f,c,p=1/i,d=t.length;--d>-1;)for(f=t[d],n=f.a,a=f.d-n,o=f.c-n,l=f.b-n,r=s=0,u=1;i>=u;u++)h=p*u,_=1-h,r=s-(s=(h*h*a+3*_*(h*o+_*l))*h),c=d*i+u-1,e[c]=(e[c]||0)+r*r},p=function(t,e){e=e>>0||6;var i,r,s,n,a=[],o=[],l=0,h=0,u=e-1,_=[],f=[];for(i in t)c(t[i],a,e);for(s=a.length,r=0;s>r;r++)l+=Math.sqrt(a[r]),n=r%e,f[n]=l,n===u&&(h+=l,n=r/e>>0,_[n]=f,o[n]=h,l=0,f=[]);return{length:h,lengths:o,segments:_}},d=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,s,n,a,o,l=e.values||[],h={},u=l[0],c=e.autoRotate||i.vars.orientToBezier;this._autoRotate=c?c instanceof Array?c:[["x","y","rotation",c===!0?0:Number(c)||0]]:null;for(r in u)this._props.push(r);for(n=this._props.length;--n>-1;)r=this._props[n],this._overwriteProps.push(r),s=this._func[r]="function"==typeof t[r],h[r]=s?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),o||h[r]!==l[0][r]&&(o=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):f(l,e.type,h),this._segCount=this._beziers[r].length,this._timeRes){var d=p(this._beziers,this._timeRes);this._length=d.length,this._lengths=d.lengths,this._segments=d.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(c=this._autoRotate)for(this._initialRotations=[],c[0]instanceof Array||(this._autoRotate=c=[c]),n=c.length;--n>-1;){for(a=0;3>a;a++)r=c[n][a],this._func[r]="function"==typeof t[r]?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]:!1;r=c[n][2],this._initialRotations[n]=this._func[r]?this._func[r].call(this._target):this._target[r]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,r,s,n,a,o,l,h,u,_,f=this._segCount,c=this._func,p=this._target,d=e!==this._startRatio;if(this._timeRes){if(u=this._lengths,_=this._curSeg,e*=this._length,s=this._li,e>this._l2&&f-1>s){for(h=f-1;h>s&&e>=(this._l2=u[++s]););this._l1=u[s-1],this._li=s,this._curSeg=_=this._segments[s],this._s2=_[this._s1=this._si=0]}else if(this._l1>e&&s>0){for(;s>0&&(this._l1=u[--s])>=e;);0===s&&this._l1>e?this._l1=0:s++,this._l2=u[s],this._li=s,this._curSeg=_=this._segments[s],this._s1=_[(this._si=_.length-1)-1]||0,this._s2=_[this._si]}if(i=s,e-=this._l1,s=this._si,e>this._s2&&_.length-1>s){for(h=_.length-1;h>s&&e>=(this._s2=_[++s]););this._s1=_[s-1],this._si=s}else if(this._s1>e&&s>0){for(;s>0&&(this._s1=_[--s])>=e;);0===s&&this._s1>e?this._s1=0:s++,this._s2=_[s],this._si=s}o=(s+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?f-1:f*e>>0,o=(e-i*(1/f))*f;for(r=1-o,s=this._props.length;--s>-1;)n=this._props[s],a=this._beziers[n][i],l=(o*o*a.da+3*r*(o*a.ca+r*a.ba))*o+a.a,this._round[n]&&(l=Math.round(l)),c[n]?p[n](l):p[n]=l;if(this._autoRotate){var m,g,v,y,T,x,w,b=this._autoRotate;for(s=b.length;--s>-1;)n=b[s][2],x=b[s][3]||0,w=b[s][4]===!0?1:t,a=this._beziers[b[s][0]],m=this._beziers[b[s][1]],a&&m&&(a=a[i],m=m[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=m.a+(m.b-m.a)*o,T=m.b+(m.c-m.b)*o,v+=(T-v)*o,T+=(m.c+(m.d-m.c)*o-T)*o,l=d?Math.atan2(T-v,y-g)*w+x:this._initialRotations[s],c[n]?p[n](l):p[n]=l)}}}),m=d.prototype;d.bezierThrough=_,d.cubicToQuadratic=l,d._autoCSS=!0,d.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},d._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,r=e._setPluginRatio,s=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,l){e instanceof Array&&(e={values:e}),l=new d;var h,u,_,f=e.values,c=f.length-1,p=[],m={};if(0>c)return o;for(h=0;c>=h;h++)_=i(t,f[h],a,o,l,c!==h),p[h]=_.end;for(u in e)m[u]=e[u];return m.values=p,o=new s(t,"bezier",0,0,_.pt,2),o.data=_,o.plugin=l,o.setRatio=r,0===m.autoRotate&&(m.autoRotate=!0),!m.autoRotate||m.autoRotate instanceof Array||(h=m.autoRotate===!0?0:Number(m.autoRotate),m.autoRotate=null!=_.end.left?[["left","top","rotation",h,!1]]:null!=_.end.x?[["x","y","rotation",h,!1]]:!1),m.autoRotate&&(a._transform||a._enableTransforms(!1),_.autoRotate=a._target._gsTransform),l._onInitTween(_.proxy,m,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,r=i.length;--r>-1;)(t[i[r]]||t.bezier||t.bezierThrough)&&(this._round[i[r]]=e)},m._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;--i>-1;)r[i]===e&&r.splice(i,1);return this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("BezierPlugin");;
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.17.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var u,f,c,p,_,d,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,S=/([A-Z])/g,O=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(t,e){return e.toUpperCase()},R=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,M=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,N=Math.PI/180,L=180/Math.PI,F={},X=document,z=function(t){return X.createElementNS?X.createElementNS("http://www.w3.org/1999/xhtml",t):X.createElement(t)},B=z("div"),E=z("img"),I=a._internals={_specialProps:l},Y=navigator.userAgent,W=function(){var t=Y.indexOf("Android"),e=z("a");return c=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),_=c&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(d=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),V=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},G="",U="",q=function(t,e){e=e||B;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(U=3===r?"ms":i[r],G="-"+U.toLowerCase()+"-",U+t):null},H=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,r,s){var n;return W||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||H(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(S,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):V(t)},Z=I.convertToPixels=function(t,i,r,s,n){if("px"===s||!s)return r;if("auto"===s||!r)return 0;var o,l,h,u=R.test(i),f=t,c=B.style,p=0>r;if(p&&(r=-r),"%"===s&&-1!==i.indexOf("border"))o=r/100*(u?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&f.appendChild)c[u?"borderLeftWidth":"borderTopWidth"]=r+s;else{if(f=t.parentNode||X.body,l=f._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;c[u?"width":"height"]=r+s}f.appendChild(B),o=parseFloat(B[u?"offsetWidth":"offsetHeight"]),f.removeChild(B),u&&"%"===s&&a.cacheWidths!==!1&&(l=f._gsCache=f._gsCache||{},l.time=h,l.width=100*(o/r)),0!==o||n||(o=Z(t,i,r,s,!0))}return p?-o:o},$=I.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=Q(t,"margin"+r,i);return t["offset"+r]-(Z(t,e,parseFloat(s),s.replace(x,""))||0)},K=function(t,e){var i,r,s,n={};if(e=e||H(t,null))if(i=e.length)for(;--i>-1;)s=e[i],(-1===s.indexOf("-transform")||Pe===s)&&(n[s.replace(O,C)]=e.getPropertyValue(s));else for(i in e)(-1===i.indexOf("Transform")||be===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(O,C)]=e[i]);return W||(n.opacity=V(t)),r=Xe(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Oe&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:$(t,a),void 0!==h[a]&&(o=new pe(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=te[e],n=s.length;for(i=i||H(t,null);--n>-1;)r-=parseFloat(Q(t,"padding"+s[n],i,!0))||0,r-=parseFloat(Q(t,"border"+s[n]+"Width",i,!0))||0;return r},re=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="center"===r?"50%":"0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),t=r+" "+s+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(y,"")),e.oy=parseFloat(s.replace(y,"")),e.v=t),e||t},se=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,r){var s,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:L)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},he=a.parseColor=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=le(s+1/3,e,i),t[1]=le(s,e,i),t[2]=le(s-1/3,e,i),t):(t=t.match(m)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},ue="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in oe)ue+="|"+h+"\\b";ue=RegExp(ue+")","gi");var fe=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(ue)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,f=u>0?a[0].replace(m,""):"";return u?s=e?function(t){var e,c,p,_;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(_=t.replace(D,"|").split("|"),p=0;_.length>p;p++)_[p]=s(_[p]);return _.join(",")}if(e=(t.match(ue)||[n])[0],c=t.split(e).join("").match(v)||[],p=c.length,u>p--)for(;u>++p;)c[p]=i?c[0|(p-1)/2]:a[p];return o+c.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),c=0;n.length>c;c++)n[c]=s(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,u>c--)for(;u>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(h)+l}:function(t){return t}},ce=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},pe=(I._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),_e=(I._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,f=r,c={},p={},_=i._transform,d=F;for(i._transform=null,F=e,r=u=i.parse(t,e,r,s),F=d,n&&(i._transform=_,f&&(f._prev=null,f._prev&&(f._prev._next=null)));r&&r!==f;){if(1>=r.type&&(o=r.p,p[o]=r.s+r.c,c[o]=r.s,n||(h=new pe(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,p[o]=r.data[l],c[o]=r[l],n||(h=new pe(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:c,end:p,firstMPT:h,pt:u}},I.CSSPropTween=function(t,e,r,s,a,o,l,h,u,f,c){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof _e||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===f?r:f,this.e=void 0===c?r+s:c,a&&(this._next=a,a._prev=this)}),de=function(t,e,i,r,s,n){var a=new _e(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a},me=a.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"",a=new _e(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="";var f,c,p,_,d,v,y,x,T,w,b,S,O=i.split(", ").join(",").split(" "),k=r.split(", ").join(",").split(" "),C=O.length,R=u!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(O=O.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=O.length),C!==k.length&&(O=(n||"").split(" "),C=O.length),a.plugin=l,a.setRatio=h,f=0;C>f;f++)if(_=O[f],d=k[f],x=parseFloat(_),x||0===x)a.appendXtra("",x,se(d,x),d.replace(g,""),R&&-1!==d.indexOf("px"),!0);else if(s&&("#"===_.charAt(0)||oe[_]||P.test(_)))S=","===d.charAt(d.length-1)?"),":")",_=he(_),d=he(d),T=_.length+d.length>6,T&&!W&&0===d[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[f]).join("transparent")):(W||(T=!1),a.appendXtra(T?"rgba(":"rgb(",_[0],d[0]-_[0],",",!0,!0).appendXtra("",_[1],d[1]-_[1],",",!0).appendXtra("",_[2],d[2]-_[2],T?",":S,!0),T&&(_=4>_.length?1:_[3],a.appendXtra("",_,(4>d.length?1:d[3])-_,S,!1)));else if(v=_.match(m)){if(y=d.match(g),!y||y.length!==v.length)return a;for(p=0,c=0;v.length>c;c++)b=v[c],w=_.indexOf(b,p),a.appendXtra(_.substr(p,w-p),Number(b),se(y[c],b),"",R&&"px"===_.substr(w+b.length,2),0===c),p=w+b.length;a["xs"+a.l]+=_.substr(p)}else a["xs"+a.l]+=a.l?" "+_:_;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,f=1;a.l>f;f++)S+=a["xs"+f]+a.data["xn"+f];a.e=S+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ge=9;for(h=_e.prototype,h.l=h.pr=0;--ge>0;)h["xn"+ge]=0,h["xs"+ge]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new _e(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var ve=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||fe(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ye=I._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new ve(n[r],e)},xe=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ye(t,{parser:function(t,i,r,s,n,a,h){var u=o.com.greensock.plugins[e];return u?(u._cssRegister(),l[r].parse(t,i,r,s,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=ve.prototype,h.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,f,c=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):c&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,c&&(u=e.indexOf(c),f=i.indexOf(c),u!==f&&(-1===f?o[a]=o[a].split(c).join(""):-1===u&&(o[a]+=" "+c)));e=o.join(", "),i=l.join(", ")}return me(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},h.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ye(t,{parser:function(t,r,s,n,a,o){var l=new _e(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})},a.useSVGTransformAttr=c||p;var Te,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),be=q("transform"),Pe=G+"transform",Se=q("transformOrigin"),Oe=null!==q("perspective"),ke=I.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Oe?a.defaultForce3D||"auto":!1},Ce=window.SVGElement,Re=function(t,e,i){var r,s=X.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s},Ae=X.documentElement,Me=function(){var t,e,i,r=d||/Android/i.test(Y)&&!window.chrome;return X.createElementNS&&!r&&(t=Re("svg",Ae),e=Re("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Se]="50% 50%",e.style[be]="scaleX(0.5)",r=i===e.getBoundingClientRect().width&&!(p&&Oe),Ae.removeChild(t)),r}(),De=function(t,e,i,r,s){var n,o,l,h,u,f,c,p,_,d,m,g,v,y,x=t._gsTransform,T=Fe(t,!0);x&&(v=x.xOrigin,y=x.yOrigin),(!r||2>(n=r.split(" ")).length)&&(c=t.getBBox(),e=re(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=h=parseFloat(n[0]),i.yOrigin=u=parseFloat(n[1]),r&&T!==Le&&(f=T[0],c=T[1],p=T[2],_=T[3],d=T[4],m=T[5],g=f*_-c*p,o=h*(_/g)+u*(-p/g)+(p*m-_*d)/g,l=h*(-c/g)+u*(f/g)-(f*m-c*d)/g,h=i.xOrigin=n[0]=o,u=i.yOrigin=n[1]=l),x&&(s||s!==!1&&a.defaultSmoothOrigin!==!1?(o=h-v,l=u-y,x.xOffset+=o*T[0]+l*T[2]-o,x.yOffset+=o*T[1]+l*T[3]-l):x.xOffset=x.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Ne=function(t){return!!(Ce&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Le=[1,0,0,1,0,0],Fe=function(t,e){var i,r,s,n,a,o=t._gsTransform||new ke,l=1e5;if(be?r=Q(t,Pe,null,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),o.x||0,o.y||0].join(","):""),i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,(o.svg||t.getBBox&&Ne(t))&&(i&&-1!==(t.style[be]+"").indexOf("matrix")&&(r=t.style[be],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Le;for(s=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ge=s.length;--ge>-1;)n=Number(s[ge]),s[ge]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Xe=I.getTransform=function(t,i,r,n){if(t._gsTransform&&r&&!n)return t._gsTransform;var o,l,h,u,f,c,p=r?t._gsTransform||new ke:new ke,_=0>p.scaleX,d=2e-5,m=1e5,g=Oe?parseFloat(Q(t,Se,i,!1,"0 0 0").split(" ")[2])||p.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(p.svg=!(!t.getBBox||!Ne(t)),p.svg&&(De(t,Q(t,Se,s,!1,"50% 50%")+"",p,t.getAttribute("data-svg-origin")),Te=a.useSVGTransformAttr||Me),o=Fe(t),o!==Le){if(16===o.length){var y,x,T,w,b,P=o[0],S=o[1],O=o[2],k=o[3],C=o[4],R=o[5],A=o[6],M=o[7],D=o[8],N=o[9],F=o[10],X=o[12],z=o[13],B=o[14],E=o[11],I=Math.atan2(A,F);p.zOrigin&&(B=-p.zOrigin,X=D*B-o[12],z=N*B-o[13],B=F*B+p.zOrigin-o[14]),p.rotationX=I*L,I&&(w=Math.cos(-I),b=Math.sin(-I),y=C*w+D*b,x=R*w+N*b,T=A*w+F*b,D=C*-b+D*w,N=R*-b+N*w,F=A*-b+F*w,E=M*-b+E*w,C=y,R=x,A=T),I=Math.atan2(D,F),p.rotationY=I*L,I&&(w=Math.cos(-I),b=Math.sin(-I),y=P*w-D*b,x=S*w-N*b,T=O*w-F*b,N=S*b+N*w,F=O*b+F*w,E=k*b+E*w,P=y,S=x,O=T),I=Math.atan2(S,P),p.rotation=I*L,I&&(w=Math.cos(-I),b=Math.sin(-I),P=P*w+C*b,x=S*w+R*b,R=S*-b+R*w,A=O*-b+A*w,S=x),p.rotationX&&Math.abs(p.rotationX)+Math.abs(p.rotation)>359.9&&(p.rotationX=p.rotation=0,p.rotationY+=180),p.scaleX=(0|Math.sqrt(P*P+S*S)*m+.5)/m,p.scaleY=(0|Math.sqrt(R*R+N*N)*m+.5)/m,p.scaleZ=(0|Math.sqrt(A*A+F*F)*m+.5)/m,p.skewX=0,p.perspective=E?1/(0>E?-E:E):0,p.x=X,p.y=z,p.z=B,p.svg&&(p.x-=p.xOrigin-(p.xOrigin*P-p.yOrigin*C),p.y-=p.yOrigin-(p.yOrigin*S-p.xOrigin*R))}else if(!(Oe&&!n&&o.length&&p.x===o[4]&&p.y===o[5]&&(p.rotationX||p.rotationY)||void 0!==p.x&&"none"===Q(t,"display",i))){var Y=o.length>=6,W=Y?o[0]:1,V=o[1]||0,j=o[2]||0,G=Y?o[3]:1;p.x=o[4]||0,p.y=o[5]||0,h=Math.sqrt(W*W+V*V),u=Math.sqrt(G*G+j*j),f=W||V?Math.atan2(V,W)*L:p.rotation||0,c=j||G?Math.atan2(j,G)*L+f:p.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(_?(h*=-1,c+=0>=f?180:-180,f+=0>=f?180:-180):(u*=-1,c+=0>=c?180:-180)),p.scaleX=h,p.scaleY=u,p.rotation=f,p.skewX=c,Oe&&(p.rotationX=p.rotationY=p.z=0,p.perspective=v,p.scaleZ=1),p.svg&&(p.x-=p.xOrigin-(p.xOrigin*W+p.yOrigin*j),p.y-=p.yOrigin-(p.xOrigin*V+p.yOrigin*G))}p.zOrigin=g;for(l in p)d>p[l]&&p[l]>-d&&(p[l]=0)}return r&&(t._gsTransform=p,p.svg&&(Te&&t.style[be]?e.delayedCall(.001,function(){Ie(t.style,be)}):!Te&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),p},ze=function(t){var e,i,r=this.data,s=-r.rotation*N,n=s+r.skewX*N,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,f=this.t.style,c=this.t.currentStyle;if(c){i=l,l=-h,h=-i,e=c.filter,f.filter="";var p,_,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x+m*r.xPercent/100,b=r.y+g*r.yPercent/100;if(null!=r.ox&&(p=(r.oxp?.01*m*r.ox:r.ox)-m/2,_=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=p-(p*o+_*l),b+=_-(p*h+_*u)),v?(p=m/2,_=g/2,y+=", Dx="+(p-(p*o+_*l)+w)+", Dy="+(_-(p*h+_*u)+b)+")"):y+=", sizingMethod='auto expand')",f.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(M,y):y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===y.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&f.removeAttribute("filter")),!v){var P,S,O,k=8>d?1:-1;for(p=r.ieOffsetX||0,_=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ge=0;4>ge;ge++)S=ee[ge],P=c[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(x,""))||0,O=i!==r[S]?2>ge?-r.ieOffsetX:-r.ieOffsetY:2>ge?p-r.ieOffsetX:_-r.ieOffsetY,f[S]=(r[S]=Math.round(i-O*(0===ge||2===ge?1:k)))+"px"}}},Be=I.set3DTransformRatio=I.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,c,_,d,m,g,v,y,x,T,w,b,P,S=this.data,O=this.t.style,k=S.rotation,C=S.rotationX,R=S.rotationY,A=S.scaleX,M=S.scaleY,D=S.scaleZ,L=S.x,F=S.y,X=S.z,z=S.svg,B=S.perspective,E=S.force3D;if(!(((1!==t&&0!==t||"auto"!==E||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&E||X||B||R||C)&&(!Te||!z)&&Oe))return k||S.skewX||z?(k*=N,b=S.skewX*N,P=1e5,e=Math.cos(k)*A,s=Math.sin(k)*A,i=Math.sin(k-b)*-M,n=Math.cos(k-b)*M,b&&"simple"===S.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,S.skewY&&(e*=v,s*=v)),z&&(L+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,F+=S.yOrigin-(S.xOrigin*s+S.yOrigin*n)+S.yOffset,Te&&(S.xPercent||S.yPercent)&&(d=this.t.getBBox(),L+=.01*S.xPercent*d.width,F+=.01*S.yPercent*d.height),d=1e-6,d>L&&L>-d&&(L=0),d>F&&F>-d&&(F=0)),x=(0|e*P)/P+","+(0|s*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+L+","+F+")",z&&Te?this.t.setAttribute("transform","matrix("+x):O[be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+x):O[be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+L+","+F+")",void 0;if(p&&(d=1e-4,d>A&&A>-d&&(A=D=2e-5),d>M&&M>-d&&(M=D=2e-5),!B||S.z||S.rotationX||S.rotationY||(B=0)),k||S.skewX)k*=N,m=e=Math.cos(k),g=s=Math.sin(k),S.skewX&&(k-=S.skewX*N,m=Math.cos(k),g=Math.sin(k),"simple"===S.skewType&&(v=Math.tan(S.skewX*N),v=Math.sqrt(1+v*v),m*=v,g*=v,S.skewY&&(e*=v,s*=v))),i=-g,n=m;else{if(!(R||C||1!==D||B||z))return O[be]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+L+"px,"+F+"px,"+X+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""),void 0;e=n=1,i=s=0}h=1,r=a=o=l=u=f=0,c=B?-1/B:0,_=S.zOrigin,d=1e-6,T=",",w="0",k=R*N,k&&(m=Math.cos(k),g=Math.sin(k),o=-g,u=c*-g,r=e*g,a=s*g,h=m,c*=m,e*=m,s*=m),k=C*N,k&&(m=Math.cos(k),g=Math.sin(k),v=i*m+r*g,y=n*m+a*g,l=h*g,f=c*g,r=i*-g+r*m,a=n*-g+a*m,h*=m,c*=m,i=v,n=y),1!==D&&(r*=D,a*=D,h*=D,c*=D),1!==M&&(i*=M,n*=M,l*=M,f*=M),1!==A&&(e*=A,s*=A,o*=A,u*=A),(_||z)&&(_&&(L+=r*-_,F+=a*-_,X+=h*-_+_),z&&(L+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i)+S.xOffset,F+=S.yOrigin-(S.xOrigin*s+S.yOrigin*n)+S.yOffset),d>L&&L>-d&&(L=w),d>F&&F>-d&&(F=w),d>X&&X>-d&&(X=0)),x=S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(",x+=(d>e&&e>-d?w:e)+T+(d>s&&s>-d?w:s)+T+(d>o&&o>-d?w:o),x+=T+(d>u&&u>-d?w:u)+T+(d>i&&i>-d?w:i)+T+(d>n&&n>-d?w:n),C||R?(x+=T+(d>l&&l>-d?w:l)+T+(d>f&&f>-d?w:f)+T+(d>r&&r>-d?w:r),x+=T+(d>a&&a>-d?w:a)+T+(d>h&&h>-d?w:h)+T+(d>c&&c>-d?w:c)+T):x+=",0,0,0,0,1,0,",x+=L+T+F+T+X+T+(B?1+-X/B:1)+")",O[be]=x};h=ke.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,n,o,l){if(r._lastParsedTransform===l)return n;r._lastParsedTransform=l;var h,u,f,c,p,_,d,m,g,v=t._gsTransform,y=r._transform=Xe(t,s,!0,l.parseTransform),x=t.style,T=1e-6,w=we.length,b=l,P={},S="transformOrigin";if("string"==typeof b.transform&&be)f=B.style,f[be]=b.transform,f.display="block",f.position="absolute",X.body.appendChild(B),h=Xe(B,null,!1),X.body.removeChild(B),null!=b.xPercent&&(h.xPercent=ne(b.xPercent,y.xPercent)),null!=b.yPercent&&(h.yPercent=ne(b.yPercent,y.yPercent));else if("object"==typeof b){if(h={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,y.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,y.scaleY),scaleZ:ne(b.scaleZ,y.scaleZ),x:ne(b.x,y.x),y:ne(b.y,y.y),z:ne(b.z,y.z),xPercent:ne(b.xPercent,y.xPercent),yPercent:ne(b.yPercent,y.yPercent),perspective:ne(b.transformPerspective,y.perspective)},d=b.directionalRotation,null!=d)if("object"==typeof d)for(f in d)b[f]=d[f];else b.rotation=d;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(h.x=0,h.xPercent=ne(b.x,y.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(h.y=0,h.yPercent=ne(b.y,y.yPercent)),h.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:y.rotation,y.rotation,"rotation",P),Oe&&(h.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":y.rotationX||0,y.rotationX,"rotationX",P),h.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":y.rotationY||0,y.rotationY,"rotationY",P)),h.skewX=null==b.skewX?y.skewX:ae(b.skewX,y.skewX),h.skewY=null==b.skewY?y.skewY:ae(b.skewY,y.skewY),(u=h.skewY-y.skewY)&&(h.skewX+=u,h.rotation+=u)}for(Oe&&null!=b.force3D&&(y.force3D=b.force3D,_=!0),y.skewType=b.skewType||y.skewType||a.defaultSkewType,p=y.force3D||y.z||y.rotationX||y.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==b.scale||(h.scaleZ=1);--w>-1;)i=we[w],c=h[i]-y[i],(c>T||-T>c||null!=b[i]||null!=F[i])&&(_=!0,n=new _e(y,i,y[i],c,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return c=b.transformOrigin,y.svg&&(c||b.svgOrigin)&&(m=y.xOffset,g=y.yOffset,De(t,re(c),h,b.svgOrigin,b.smoothOrigin),n=de(y,"xOrigin",(v?y:h).xOrigin,h.xOrigin,n,S),n=de(y,"yOrigin",(v?y:h).yOrigin,h.yOrigin,n,S),(m!==y.xOffset||g!==y.yOffset)&&(n=de(y,"xOffset",v?m:y.xOffset,y.xOffset,n,S),n=de(y,"yOffset",v?g:y.yOffset,y.yOffset,n,S)),c=Te?null:"0px 0px"),(c||Oe&&p&&y.zOrigin)&&(be?(_=!0,i=Se,c=(c||Q(t,i,s,!1,"50% 50%"))+"",n=new _e(x,i,0,0,n,-1,S),n.b=x[i],n.plugin=o,Oe?(f=y.zOrigin,c=c.split(" "),y.zOrigin=(c.length>2&&(0===f||"0px"!==c[2])?parseFloat(c[2]):f)||0,n.xs0=n.e=c[0]+" "+(c[1]||"50%")+" 0px",n=new _e(y,"zOrigin",0,0,n,-1,n.n),n.b=f,n.xs0=n.e=y.zOrigin):n.xs0=n.e=c):re(c+"",y)),_&&(r._transformType=y.svg&&Te||!p&&3!==this._transformType?2:3),n},prefix:!0}),ye("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ye("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,f,c,p,_,d,m,g,v,y,x,T,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),f=u=Q(t,b[l],s,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),c=h=o[l],p=parseFloat(f),v=f.substr((p+"").length),y="="===c.charAt(1),y?(_=parseInt(c.charAt(0)+"1",10),c=c.substr(2),_*=parseFloat(c),g=c.substr((_+"").length-(0>_?1:0))||""):(_=parseFloat(c),g=c.substr((_+"").length)),""===g&&(g=r[i]||v),g!==v&&(x=Z(t,"borderLeft",p,v),T=Z(t,"borderTop",p,v),"%"===g?(f=100*(x/d)+"%",u=100*(T/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),f=x/w+"em",u=T/w+"em"):(f=x+"px",u=T+"px"),y&&(c=parseFloat(f)+_+g,h=parseFloat(u)+_+g)),a=me(P,b[l],f+" "+u,c+" "+h,!1,"0px",a);return a},prefix:!0,formatter:fe("0px 0px 0px 0px",!1,!0)}),ye("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,f,c,p="background-position",_=s||H(t,null),m=this.format((_?d?_.getPropertyValue(p+"-x")+" "+_.getPropertyValue(p+"-y"):_.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(k,""),c&&"none"!==c)){for(o=m.split(" "),l=g.split(" "),E.setAttribute("src",c),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(f=0===h?t.offsetWidth-E.width:t.offsetHeight-E.height,o[h]=u?parseFloat(m)/100*f+"px":100*(parseFloat(m)/f)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:re}),ye("backgroundSize",{defaultValue:"0 0",formatter:re}),ye("perspective",{defaultValue:"0px",prefix:!0}),ye("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ye("transformStyle",{prefix:!0}),ye("backfaceVisibility",{prefix:!0}),ye("userSelect",{prefix:!0}),ye("margin",{parser:ce("marginTop,marginRight,marginBottom,marginLeft")}),ye("padding",{parser:ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ye("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>d?(l=t.currentStyle,h=8>d?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ye("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ye("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),ye("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",s,!1,"0px")+" "+Q(t,"borderTopStyle",s,!1,"solid")+" "+Q(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ue)||["#000"])[0]}}),ye("borderWidth",{parser:ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ye("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new _e(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ee=function(t){var e,i=this.t,r=i.filter||Q(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=r.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(T,"opacity="+s))};ye("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(Q(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",s)&&0!==e&&(o=0),W?n=new _e(l,"opacity",o,e-o,n):(n=new _e(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ee),h&&(n=new _e(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var Ie=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ie(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ye("className",{parser:function(t,e,r,n,a,o,l){var h,u,f,c,p,_=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new _e(t,r,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=_,u=K(t,s),f=t._gsClassPT){for(c={},p=f.data;p;)c[p.p]=1,p=p._next;f.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:_.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=J(t,u,K(t),l,c),t.setAttribute("class",_),a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)}});var We=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],l[i]&&(l[i].parse===o?s=!0:i="transformOrigin"===i?Se:l[i].p),Ie(a,i);s&&(Ie(a,be),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(ye("clearProps",{parser:function(t,e,r,s,n){return n=new _e(t,r,0,0,n,2),n.setRatio=We,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ge=h.length;ge--;)xe(h[ge]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,u=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=H(t,""),n=this._overwriteProps;
var h,p,d,m,g,v,y,x,T,b=t.style;if(f&&""===b.zIndex&&(h=Q(t,"zIndex",s),("auto"===h||""===h)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(m=b.cssText,h=K(t,s),b.cssText=m+";"+e,h=J(t,h,K(t)).difs,!W&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,b.cssText=m),this._firstPT=p=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(T=3===this._transformType,be?c&&(f=!0,""===b.zIndex&&(y=Q(t,"zIndex",s),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),_&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):b.zoom=1,d=p;d&&d._next;)d=d._next;x=new _e(t,"transform",0,0,null,2),this._linkCSSP(x,null,d),x.setRatio=be?Be:ze,x.data=this._transform||Xe(t,s,!0),x.tween=o,x.pr=-1,n.pop()}if(i){for(;p;){for(v=p._next,d=m;d&&d.pr>p.pr;)d=d._next;(p._prev=d?d._prev:g)?p._prev._next=p:m=p,(p._next=d)?d._prev=p:g=p,p=v}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,o,h,f,c,p,_,d,m,g,v=t.style;for(a in e)p=e[a],o=l[a],o?i=o.parse(t,p,a,this,i,n,e):(c=Q(t,a,s)+"",m="string"==typeof p,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&P.test(p)?(m||(p=he(p),p=(p.length>3?"rgba(":"rgb(")+p.join(",")+")"),i=me(v,a,c,p,!0,"transparent",i,0,n)):!m||-1===p.indexOf(" ")&&-1===p.indexOf(",")?(h=parseFloat(c),_=h||0===h?c.substr((h+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(h=ie(t,a,s),_="px"):"left"===a||"top"===a?(h=$(t,a,s),_="px"):(h="opacity"!==a?0:1,_="")),g=m&&"="===p.charAt(1),g?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),d=p.replace(x,"")):(f=parseFloat(p),d=m?p.replace(x,""):""),""===d&&(d=a in r?r[a]:_),p=f||0===f?(g?f+h:f)+d:e[a],_!==d&&""!==d&&(f||0===f)&&h&&(h=Z(t,a,h,_),"%"===d?(h/=Z(t,a,100,"%")/100,e.strictUnits!==!0&&(c=h+"%")):"em"===d?h/=Z(t,a,1,"em"):"px"!==d&&(f=Z(t,a,f,d),d="px"),g&&(f||0===f)&&(p=f+h+d)),g&&(f+=h),!h&&0!==h||!f&&0!==f?void 0!==v[a]&&(p||"NaN"!=p+""&&null!=p)?(i=new _e(v,a,f||h||0,0,i,-1,a,!1,0,c,p),i.xs0="none"!==p||"display"!==a&&-1===a.indexOf("Style")?p:c):j("invalid "+a+" tween value: "+e[a]):(i=new _e(v,a,h,f-h,i,0,a,u!==!1&&("px"===d||"zIndex"===a),0,c,p),i.xs0=d)):i=me(v,a,c,p,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},h._enableTransforms=function(t){this._transform=this._transform||Xe(this._target,s,!0),this._transformType=this._transform.svg&&Te||!t&&3!==this._transformType?2:3};var Ve=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var r=this._firstPT=new _e(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Ve,r.data=this},h._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var je=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)je(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||je(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o,l=e.to(t,i,r),h=[l],u=[],f=[],c=[],p=e._internals.reservedProps;for(t=l._targets||l.target,je(t,u,c),l.render(i,!0,!0),je(t,f),l.render(0,!0,!0),l._enabled(!0),s=c.length;--s>-1;)if(n=J(c[s],u[s],f[s]),n.firstMPT){n=n.difs;for(a in r)p[a]&&(n[a]=r[a]);o={};for(a in n)o[a]=u[s][a];h.push(e.fromTo(c[s],i,o,n))}return h},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");;
/*!
 * VERSION: beta 0.6.3
 * DATE: 2014-12-31
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSRulePlugin",["plugins.TweenPlugin","TweenLite","plugins.CSSPlugin"],function(t,e,i){var r=function(){t.call(this,"cssRule"),this._overwriteProps.length=0},s=window.document,n=i.prototype.setRatio,a=r.prototype=new i;return a._propName="cssRule",a.constructor=r,r.version="0.6.3",r.API=2,r.getRule=function(t){var e,i,r,n,a=s.all?"rules":"cssRules",o=s.styleSheets,l=o.length,h=":"===t.charAt(0);for(t=(h?"":",")+t.toLowerCase()+",",h&&(n=[]);--l>-1;){try{if(i=o[l][a],!i)continue;e=i.length}catch(u){console.log(u);continue}for(;--e>-1;)if(r=i[e],r.selectorText&&-1!==(","+r.selectorText.split("::").join(":").toLowerCase()+",").indexOf(t)){if(!h)return r.style;n.push(r.style)}}return n},a._onInitTween=function(t,e,r){if(void 0===t.cssText)return!1;var n=t._gsProxy=t._gsProxy||s.createElement("div");return this._ss=t,this._proxy=n.style,n.style.cssText=t.cssText,i.prototype._onInitTween.call(this,n,e,r),!0},a.setRatio=function(t){n.call(this,t),this._ss.cssText=this._proxy.cssText},t.activate([r]),r},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: beta 1.3.0
 * DATE: 2015-02-06
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=/(\d|\.)+/g,e={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},i=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},r=function(r){if(""===r||null==r||"none"===r)return e.transparent;if(e[r])return e[r];if("number"==typeof r)return[r>>16,255&r>>8,255&r];if("#"===r.charAt(0))return 4===r.length&&(r="#"+r.charAt(1)+r.charAt(1)+r.charAt(2)+r.charAt(2)+r.charAt(3)+r.charAt(3)),r=parseInt(r.substr(1),16),[r>>16,255&r>>8,255&r];if("hsl"===r.substr(0,3)){r=r.match(t);var s=Number(r[0])%360/360,n=Number(r[1])/100,a=Number(r[2])/100,o=.5>=a?a*(n+1):a+n-a*n,l=2*a-o;return r.length>3&&(r[3]=Number(r[3])),r[0]=i(s+1/3,l,o),r[1]=i(s,l,o),r[2]=i(s-1/3,l,o),r}return r.match(t)||e.transparent};_gsScope._gsDefine.plugin({propName:"colorProps",version:"1.3.0",priority:-1,API:2,init:function(t,e){this._target=t;var i,s,n,a;this.numFormat="number"===e.format;for(i in e)"format"!==i&&(n=r(e[i]),this._firstPT=a={_next:this._firstPT,p:i,f:"function"==typeof t[i],n:i,r:!1},s=r(a.f?t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]():t[i]),a.s=Number(s[0]),a.c=Number(n[0])-a.s,a.gs=Number(s[1]),a.gc=Number(n[1])-a.gs,a.bs=Number(s[2]),a.bc=Number(n[2])-a.bs,(a.rgba=s.length>3||n.length>3)&&(a.as=4>s.length?1:Number(s[3]),a.ac=(4>n.length?1:Number(n[3]))-a.as),a._next&&(a._next._prev=a));return!0},set:function(t){for(var e,i=this._firstPT;i;)e=this.numFormat?i.s+t*i.c<<16|i.gs+t*i.gc<<8|i.bs+t*i.bc:(i.rgba?"rgba(":"rgb(")+(i.s+t*i.c>>0)+", "+(i.gs+t*i.gc>>0)+", "+(i.bs+t*i.bc>>0)+(i.rgba?", "+(i.as+t*i.ac):"")+")",i.f?this._target[i.p](e):this._target[i.p]=e,i=i._next}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: beta 0.2.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,r,s,n,a,o,l=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),r=o[0],s=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof r&&"="===r.charAt(1)?s+parseInt(r.charAt(0)+"1",10)*Number(r.substr(2)):Number(r)||0,a=n-s,o.length&&(r=o.join("_"),-1!==r.indexOf("short")&&(a%=l,a!==a%(l/2)&&(a=0>a?a+l:a-l)),-1!==r.indexOf("_cw")&&0>a?a=(a+9999999999*l)%l-(0|a/l)*l:-1!==r.indexOf("ccw")&&a>0&&(a=(a-9999999999*l)%l-(0|a/l)*l)),(a>h||-h>a)&&(this._addTween(t,i,s,s+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 0.1.6
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t,e,i=/(\d|\.)+/g,r=["redMultiplier","greenMultiplier","blueMultiplier","alphaMultiplier","redOffset","greenOffset","blueOffset","alphaOffset"],s={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},n=function(t){return""===t||null==t||"none"===t?s.transparent:s[t]?s[t]:"number"==typeof t?[t>>16,255&t>>8,255&t]:"#"===t.charAt(0)?(4===t.length&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):t.match(i)||s.transparent},a=function(e,i,s){if(!t&&(t=_gsScope.ColorFilter||_gsScope.createjs.ColorFilter,!t))throw"EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.";for(var a,o,l,h,u,f=e.filters||[],c=f.length;--c>-1;)if(f[c]instanceof t){o=f[c];break}if(o||(o=new t,f.push(o),e.filters=f),l=o.clone(),null!=i.tint)a=n(i.tint),h=null!=i.tintAmount?Number(i.tintAmount):1,l.redOffset=Number(a[0])*h,l.greenOffset=Number(a[1])*h,l.blueOffset=Number(a[2])*h,l.redMultiplier=l.greenMultiplier=l.blueMultiplier=1-h;else for(u in i)"exposure"!==u&&"brightness"!==u&&(l[u]=Number(i[u]));for(null!=i.exposure?(l.redOffset=l.greenOffset=l.blueOffset=255*(Number(i.exposure)-1),l.redMultiplier=l.greenMultiplier=l.blueMultiplier=1):null!=i.brightness&&(h=Number(i.brightness)-1,l.redOffset=l.greenOffset=l.blueOffset=h>0?255*h:0,l.redMultiplier=l.greenMultiplier=l.blueMultiplier=1-Math.abs(h)),c=8;--c>-1;)u=r[c],o[u]!==l[u]&&s._addTween(o,u,o[u],l[u],"easel_colorFilter");if(s._overwriteProps.push("easel_colorFilter"),!e.cacheID)throw"EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. "+e},o=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],l=.212671,h=.71516,u=.072169,f=function(t,e){if(!(t instanceof Array&&e instanceof Array))return e;var i,r,s=[],n=0,a=0;for(i=0;4>i;i++){for(r=0;5>r;r++)a=4===r?t[n+4]:0,s[n+r]=t[n]*e[r]+t[n+1]*e[r+5]+t[n+2]*e[r+10]+t[n+3]*e[r+15]+a;n+=5}return s},c=function(t,e){if(isNaN(e))return t;var i=1-e,r=i*l,s=i*h,n=i*u;return f([r+e,s,n,0,0,r,s+e,n,0,0,r,s,n+e,0,0,0,0,0,1,0],t)},p=function(t,e,i){isNaN(i)&&(i=1);var r=n(e),s=r[0]/255,a=r[1]/255,o=r[2]/255,c=1-i;return f([c+i*s*l,i*s*h,i*s*u,0,0,i*a*l,c+i*a*h,i*a*u,0,0,i*o*l,i*o*h,c+i*o*u,0,0,0,0,0,1,0],t)},_=function(t,e){if(isNaN(e))return t;e*=Math.PI/180;var i=Math.cos(e),r=Math.sin(e);return f([l+i*(1-l)+r*-l,h+i*-h+r*-h,u+i*-u+r*(1-u),0,0,l+i*-l+.143*r,h+i*(1-h)+.14*r,u+i*-u+r*-.283,0,0,l+i*-l+r*-(1-l),h+i*-h+r*h,u+i*(1-u)+r*u,0,0,0,0,0,1,0,0,0,0,0,1],t)},d=function(t,e){return isNaN(e)?t:(e+=.01,f([e,0,0,0,128*(1-e),0,e,0,0,128*(1-e),0,0,e,0,128*(1-e),0,0,0,1,0],t))},m=function(t,i,r){if(!e&&(e=_gsScope.ColorMatrixFilter||_gsScope.createjs.ColorMatrixFilter,!e))throw"EaselPlugin error: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.";for(var s,n,a,l=t.filters||[],h=l.length;--h>-1;)if(l[h]instanceof e){a=l[h];break}for(a||(a=new e(o.slice()),l.push(a),t.filters=l),n=a.matrix,s=o.slice(),null!=i.colorize&&(s=p(s,i.colorize,Number(i.colorizeAmount))),null!=i.contrast&&(s=d(s,Number(i.contrast))),null!=i.hue&&(s=_(s,Number(i.hue))),null!=i.saturation&&(s=c(s,Number(i.saturation))),h=s.length;--h>-1;)s[h]!==n[h]&&r._addTween(n,h,n[h],s[h],"easel_colorMatrixFilter");if(r._overwriteProps.push("easel_colorMatrixFilter"),!t.cacheID)throw"EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. "+t;r._matrix=n};_gsScope._gsDefine.plugin({propName:"easel",priority:-1,version:"0.1.6",API:2,init:function(t,e){this._target=t;var i,r,s,n;for(i in e)"colorFilter"===i||"tint"===i||"tintAmount"===i||"exposure"===i||"brightness"===i?s||(a(t,e.colorFilter||e,this),s=!0):"saturation"===i||"contrast"===i||"hue"===i||"colorize"===i||"colorizeAmount"===i?n||(m(t,e.colorMatrixFilter||e,this),n=!0):"frame"===i?(this._firstPT=r={_next:this._firstPT,t:t,p:"gotoAndStop",s:t.currentFrame,f:!0,n:"frame",pr:0,type:0,r:!0},r.c="number"==typeof e[i]?e[i]-r.s:"string"==typeof e[i]?parseFloat(e[i].split("=").join("")):0,r._next&&(r._next._prev=r)):null!=t[i]&&(this._firstPT=r={_next:this._firstPT,t:t,p:i,f:"function"==typeof t[i],n:i,pr:0,type:0},r.s=r.f?t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]():parseFloat(t[i]),r.c="number"==typeof e[i]?e[i]-r.s:"string"==typeof e[i]?parseFloat(e[i].split("=").join("")):0,r._next&&(r._next._prev=r));return!0},set:function(t){for(var e,i=this._firstPT,r=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):r>e&&e>-r&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next;this._target.cacheID&&this._target.updateCache()}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 0.1.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.2",init:function(t,e){var i,r,s=e.length,n=this.a=[];if(this.target=t,this._round=!1,!s)return!1;for(;--s>-1;)i=t[s],r=e[s],i!==r&&n.push({i:s,s:i,c:r-i});return!0},round:function(t){"endArray"in t&&(this._round=!0)},set:function(t){var e,i,r=this.target,s=this.a,n=s.length;if(this._round)for(;--n>-1;)e=s[n],r[e.i]=Math.round(e.s+e.c*t);else for(;--n>-1;)e=s[n],i=e.s+e.c*t,r[e.i]=1e-6>i&&i>-1e-6?0:i}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 0.5.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t,e,i,r,s={scale:1,shadowOffset:1,fillPatternOffset:1,offset:1,fill:2,stroke:2,shadowColor:2},n={},a={},o=/(\d|\.)+/g,l=/(?:_cw|_ccw|_short)/,h=_gsScope._gsDefine.globals.com.greensock.plugins,u={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},f=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},c=function(t){if(""===t||null==t||"none"===t)return u.transparent;if(u[t])return u[t];if("number"==typeof t)return[t>>16,255&t>>8,255&t];if("#"===t.charAt(0))return 4===t.length&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t];if("hsl"===t.substr(0,3)){t=t.match(o);var e=Number(t[0])%360/360,i=Number(t[1])/100,r=Number(t[2])/100,s=.5>=r?r*(i+1):r+i-r*i,n=2*r-s;return t.length>3&&(t[3]=Number(t[3])),t[0]=f(e+1/3,n,s),t[1]=f(e,n,s),t[2]=f(e-1/3,n,s),t}for(var a=t.match(o)||u.transparent,l=a.length;--l>-1;)a[l]=Number(a[l]);return a},p=function(t,e,i,r){this.getter=e,this.setter=i;var s=c(t[e]());this.proxy={r:s[0],g:s[1],b:s[2],a:s.length>3?s[3]:1},r&&(this._next=r,r._prev=this)},_=[],d=function(){var i=_.length;if(0!==i){for(;--i>-1;)_[i].draw(),_[i]._gsDraw=!1;_.length=0}else t.removeEventListener("tick",d),e=!1},g=function(t,e){var i="x"===e?"y":"x",r="_gs_"+t;n[t]=function(){return this["get"+t]()[e]},a[t]=function(s){var n=this["get"+t](),a=this[r];return a||(a=this[r]={}),a[e]=s,a[i]=n[i],this[t](a),this}},m=function(t,e){return function(i){return arguments.length?e(i):t()}},v=function(t,e){var i,r,o,l,h=[];for(i in e)if(r=e[i],"bezier"!==i&&"autoDraw"!==i&&"set"!==i.substr(0,3)&&void 0===t[i]&&(h.push(i),delete e[i],i="set"+i.charAt(0).toUpperCase()+i.substr(1),e[i]=r),s[i]){if(1===s[i])return e[i+"X"]=e[i+"Y"]=e[i],delete e[i],v(t,e);!t[i]&&a[i]&&(l=t.prototype||t,l[i]=m(n[i],a[i]))}else if("bezier"===i)for(r=r instanceof Array?r:r.values||[],o=r.length;--o>-1;)0===o?h=h.concat(v(t,r[o])):v(t,r[o]);return h},y=function(t){var e,i={};for(e in t)i[e]=t[e];return i};for(r in s)1===s[r]&&(g(r,"x"),g(r,"y"));var x=_gsScope._gsDefine.plugin({propName:"kinetic",API:2,version:"0.5.2",init:function(e,r,n){var a,o,u,f,_,d;if(!i&&(i=5>parseInt(Kinetic.version.split(".")[0],10)))throw"The GSAP KineticPlugin that's loaded requires KineticJS version 5.0.0 or later. For earlier versions, use KineticPlugin from GSAP 1.11.3 or earlier.";this._overwriteProps=v(e,r),this._target=e,this._layer=r.autoDraw!==!1?e.getLayer():null,!t&&this._layer&&(t=n.constructor.ticker);for(a in r){if(o=r[a],2===s[a])f=this._firstSP=new p(e,a,a,this._firstSP),o=c(o),f.proxy.r!==o[0]&&this._addTween(f.proxy,"r",f.proxy.r,o[0],a),f.proxy.g!==o[1]&&this._addTween(f.proxy,"g",f.proxy.g,o[1],a),f.proxy.b!==o[2]&&this._addTween(f.proxy,"b",f.proxy.b,o[2],a),(o.length>3||1!==f.proxy.a)&&f.proxy.a!==o[3]&&this._addTween(f.proxy,"a",f.proxy.a,o.length>3?o[3]:1,a);else if("bezier"===a){if(_=h.BezierPlugin,!_)throw"BezierPlugin not loaded";_=this._bezier=new _,"object"==typeof o&&o.autoRotate===!0&&(o.autoRotate=["x","y","rotation",0,!1]),_._onInitTween(e,o,n),this._overwriteProps=this._overwriteProps.concat(_._overwriteProps),this._addTween(_,"setRatio",0,1,a)}else if("rotation"!==a&&"rotationDeg"!==a||"string"!=typeof o||!l.test(o))o instanceof Array?this._initArrayTween(e[a](),o,a):"autoDraw"!==a&&(u="get"+a.substr(3),this._addTween(e,a,("function"==typeof e[a]?e["get"!==u&&"function"==typeof e[u]?u:a]():e[a])||0,o,a));else{if(d=h.DirectionalRotationPlugin,!d)throw"DirectionalRotationPlugin not loaded";d=this._directionalRotation=new d,u={useRadians:!1},u[a]=o,d._onInitTween(e,u,n),this._addTween(d,"setRatio",0,1,a)}this._overwriteProps.push(a)}return!0},kill:function(t){return t=y(t),v(this._target,t),this._bezier&&this._bezier._kill(t),this._directionalRotation&&this._directionalRotation._kill(t),this._super._kill.call(this,t)},round:function(t,e){return t=y(t),v(this._target,t),this._bezier&&this._bezier._roundProps(t,e),this._super._roundProps.call(this,t,e)},set:function(i){this._super.setRatio.call(this,i);var r,s,n,a,o,l,h=this._firstSP,u=this._layer,f=this._arrayTweens;if(h)for(o=this._target;h;)l=h.proxy,o[h.setter]((1!==l.a?"rgba(":"rgb(")+(0|l.r)+", "+(0|l.g)+", "+(0|l.b)+(1!==l.a?", "+l.a:"")+")"),h=h._next;if(f){for(r=f.length;--r>-1;)s=f[r],a=s.s+s.c*i,s.a[s.i]=1e-6>a&&a>-1e-6?0:a;for(n in this._arrayProps)this._target[n](this._arrayProps[n])}u&&!u._gsDraw&&(_.push(u),u._gsDraw=!0,e||(t.addEventListener("tick",d),e=!0))}});r=x.prototype,r._initArrayTween=function(t,e,i){this._arrayTweens||(this._arrayTweens=[],this._arrayProps={});for(var r,s,n=t.length,a=this._arrayTweens;--n>-1;)r=t[n],s=e[n],r!==s&&a.push({a:t,i:n,s:r,c:s-r});a.length&&(this._arrayProps[i]=t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 0.2.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=/[^\d\-\.]/g,e=Math.PI/180,i=/(\d|\.)+/g,r={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},s=function(t){return"number"==typeof t?[t>>16,255&t>>8,255&t]:""===t||null==t||"none"===t||"string"!=typeof t?r.transparent:r[t]?r[t]:"#"===t.charAt(0)?(4===t.length&&(t="#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):t.match(i)||r.transparent},n={scaleX:1,scaleY:1,tx:1,ty:1,rotation:1,shortRotation:1,skewX:1,skewY:1,scale:1},a=function(t,e){var i=t.matrix,r=1e-6,s=i.a,n=i.b,a=i.c,o=i.d,l=e?t._gsTransform||{skewY:0}:{skewY:0},h=0>l.scaleX;return l.tx=i.e-(l.ox||0),l.ty=i.f-(l.oy||0),l.scaleX=Math.sqrt(s*s+n*n),l.scaleY=Math.sqrt(o*o+a*a),l.rotation=s||n?Math.atan2(n,s):l.rotation||0,l.skewX=a||o?Math.atan2(a,o)+l.rotation:l.skewX||0,Math.abs(l.skewX)>Math.PI/2&&(h?(l.scaleX*=-1,l.skewX+=0>=l.rotation?Math.PI:-Math.PI,l.rotation+=0>=l.rotation?Math.PI:-Math.PI):(l.scaleY*=-1,l.skewX+=0>=l.skewX?Math.PI:-Math.PI)),r>l.rotation&&l.rotation>-r&&(s||n)&&(l.rotation=0),r>l.skewX&&l.skewX>-r&&(n||a)&&(l.skewX=0),e&&(t._gsTransform=l),l},o=function(t,e){return null==t?e:"string"==typeof t&&1===t.indexOf("=")?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:Number(t)},l=function(i,r){var s=-1===i.indexOf("rad")?e:1,n=1===i.indexOf("=");return i=Number(i.replace(t,""))*s,n?i+r:i},h=_gsScope._gsDefine.plugin({propName:"raphael",version:"0.2.2",API:2,init:function(e,i,r){if(!e.attr)return!1;this._target=e,this._tween=r,this._props=e._gsProps=e._gsProps||{};var a,o,l,h,u,f,c;for(a in i)l=i[a],"transform"!==a?n[a]||"pivot"===a?this._parseTransform(e,i):(o=e.attr(a),this._firstPT=h={_next:this._firstPT,t:this._props,p:a,b:o,f:!1,n:"raphael_"+a,r:!1,type:0},"fill"===a||"stroke"===a?(u=s(o),f=s(l),h.e=l,h.s=Number(u[0]),h.c=Number(f[0])-h.s,h.gs=Number(u[1]),h.gc=Number(f[1])-h.gs,h.bs=Number(u[2]),h.bc=Number(f[2])-h.bs,u.length>3||f.length>3?(h.as=4>u.length?1:Number(u[3]),h.ac=(4>f.length?1:Number(f[3]))-h.as,h.type=2):h.type=1):(o="string"==typeof o?parseFloat(o.replace(t,"")):Number(o),"string"==typeof l?(c="="===l.charAt(1),l=parseFloat(l.replace(t,""))):c=!1,h.e=l||0===l?c?l+o:l:i[a],!o&&0!==o||!l&&0!==l||!(h.c=c?l:l-o)?(h.type=-1,h.i=i[a],h.s=h.c=0):h.s=o),this._overwriteProps.push("raphael_"+a),h._next&&(h._next._prev=h)):this._parseTransform(e,l);return!0},set:function(t){for(var e,i=this._firstPT;i;)e=i.c*t+i.s,i.r&&(e=Math.round(e)),i.type?1===i.type?i.t[i.p]="rgb("+(e>>0)+", "+(i.gs+t*i.gc>>0)+", "+(i.bs+t*i.bc>>0)+")":2===i.type?i.t[i.p]="rgba("+(e>>0)+", "+(i.gs+t*i.gc>>0)+", "+(i.bs+t*i.bc>>0)+", "+(i.as+t*i.ac)+")":-1===i.type&&(i.t[i.p]=i.i):i.t[i.p]=e,i=i._next;if(this._target.attr(this._props),this._transform){i=this._transform;var r=i.rotation,s=r-i.skewX,n=Math.cos(r)*i.scaleX,a=Math.sin(r)*i.scaleX,o=Math.sin(s)*-i.scaleY,l=Math.cos(s)*i.scaleY,h=1e-6,u=this._pxl,f=this._pyl;h>a&&a>-h&&(a=0),h>o&&o>-h&&(o=0),i.ox=this._pxg-(u*n+f*o),i.oy=this._pyg-(u*a+f*l),this._target.transform("m"+n+","+a+","+o+","+l+","+(i.tx+i.ox)+","+(i.ty+i.oy))}}}),u=h.prototype;u._parseTransform=function(t,i){if(!this._transform){var r,s,h,u,f,c,p,_,d,g=this._transform=a(t,!0),m=1e-6;if("object"==typeof i){if(r={scaleX:o(null!=i.scaleX?i.scaleX:i.scale,g.scaleX),scaleY:o(null!=i.scaleY?i.scaleY:i.scale,g.scaleY),tx:o(i.tx,g.tx),ty:o(i.ty,g.ty)},null!=i.shortRotation){r.rotation="number"==typeof i.shortRotation?i.shortRotation*e:l(i.shortRotation,g.rotation);var v=(r.rotation-g.rotation)%(2*Math.PI);v!==v%Math.PI&&(v+=Math.PI*(0>v?2:-2)),r.rotation=g.rotation+v}else r.rotation=null==i.rotation?g.rotation:"number"==typeof i.rotation?i.rotation*e:l(i.rotation,g.rotation);r.skewX=null==i.skewX?g.skewX:"number"==typeof i.skewX?i.skewX*e:l(i.skewX,g.skewX),r.skewY=null==i.skewY?g.skewY:"number"==typeof i.skewY?i.skewY*e:l(i.skewY,g.skewY),(s=r.skewY-g.skewY)&&(r.skewX+=s,r.rotation+=s),m>r.skewY&&r.skewY>-m&&(r.skewY=0),m>r.skewX&&r.skewX>-m&&(r.skewX=0),m>r.rotation&&r.rotation>-m&&(r.rotation=0),d=i.localPivot||i.globalPivot,"string"==typeof d?(f=d.split(","),c=Number(f[0]),p=Number(f[1])):"object"==typeof d?(c=Number(d.x),p=Number(d.y)):i.localPivot?(f=t.getBBox(!0),c=f.width/2,p=f.height/2):(f=t.getBBox(),c=f.x+f.width/2,p=f.y+f.height/2),i.localPivot?(_=t.matrix,c+=t.attr("x"),p+=t.attr("y"),this._pxl=c,this._pyl=p,this._pxg=c*_.a+p*_.c+_.e-g.tx,this._pyg=c*_.b+p*_.d+_.f-g.ty):(_=t.matrix.invert(),this._pxl=c*_.a+p*_.c+_.e,this._pyl=c*_.b+p*_.d+_.f,this._pxg=c-g.tx,this._pyg=p-g.ty)}else{if("string"!=typeof i)return;f=this._target.transform(),t.transform(i),r=a(t,!1),t.transform(f)}for(h in n)g[h]!==r[h]&&"shortRotation"!==h&&"scale"!==h&&(this._firstPT=u={_next:this._firstPT,t:g,p:h,s:g[h],c:r[h]-g[h],n:h,f:!1,r:!1,b:g[h],e:r[h],type:0},u._next&&(u._next._prev=u),this._overwriteProps.push("raphael_"+h))}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: beta 1.4.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.4.1",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,r=this._tween,s=r.vars.roundProps instanceof Array?r.vars.roundProps:r.vars.roundProps.split(","),n=s.length,o={},a=r._propLookup.roundProps;--n>-1;)o[s[n]]=1;for(n=s.length;--n>-1;)for(t=s[n],e=r._firstPT;e;)i=e._next,e.pg?e.t._roundProps(o,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:r._firstPT===e&&(r._firstPT=i),e._next=e._prev=null,r._propLookup[t]=a),e=i;return!1},e._add=function(t,e,i,r){this._addTween(t,e,i,i+r,e,!0),this._overwriteProps.push(e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 1.7.5
 * DATE: 2015-02-26
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,o="client"+s,a=document.body;return i===e||i===t||i===a?Math.max(t[n],a[n])-(e["inner"+s]||t[o]||a[o]):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.5",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,o=r-this.xPrev;this._autoKill&&(!this.skipX&&(o>7||-7>o)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
/*!
 * VERSION: 0.5.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(e){var i=e.nodeType,r="";if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=t(e)}else if(3===i||4===i)return e.nodeValue;return r},e=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.5.1",init:function(e,i,r){var s,n;if(!("innerHTML"in e))return!1;if(this._target=e,"object"!=typeof i&&(i={value:i}),void 0===i.value)return this._text=this._original=[""],!0;for(this._delimiter=i.delimiter||"",this._original=t(e).replace(/\s+/g," ").split(this._delimiter),this._text=i.value.replace(/\s+/g," ").split(this._delimiter),this._runBackwards=r.vars.runBackwards===!0,this._runBackwards&&(s=this._original,this._original=this._text,this._text=s),"string"==typeof i.newClass&&(this._newClass=i.newClass,this._hasClass=!0),"string"==typeof i.oldClass&&(this._oldClass=i.oldClass,this._hasClass=!0),s=this._original.length-this._text.length,n=0>s?this._original:this._text,this._fillChar=i.fillChar||(i.padSpace?"&nbsp;":""),0>s&&(s=-s);--s>-1;)n.push(this._fillChar);return!0},set:function(t){t>1?t=1:0>t&&(t=0),this._runBackwards&&(t=1-t);var e,i,r,s=this._text.length,n=0|t*s+.5;this._hasClass?(e=this._newClass&&0!==n,i=this._oldClass&&n!==s,r=(e?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,n).join(this._delimiter)+(e?"</span>":"")+(i?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(n).join(this._delimiter)+(i?"</span>":"")):r=this._text.slice(0,n).join(this._delimiter)+this._delimiter+this._original.slice(n).join(this._delimiter),this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==r.indexOf("  ")?r.split("  ").join("&nbsp;&nbsp;"):r}}),i=e.prototype;i._newClass=i._oldClass=i._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();;
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.1.20',
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttp://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                req.onResourceLoad(context, this.map, this.depMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }
                context.defQueueMap = {};

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs ? url +
                                        ((url.indexOf('?') === -1 ? '?' : '&') +
                                         config.urlArgs) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError('scripterror', 'Script error for: ' + data.id, evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/jrburke/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/jrburke/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation that a build has been done so that
                //only one script needs to be loaded anyway. This may need to be
                //reevaluated if other use cases become common.
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one.
                if (!cfg.baseUrl) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, '')
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        } else {
            globalDefQueue.push([name, deps, callback]);
        }
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this));
;

// threejs.org/license
'use strict';var THREE={REVISION:"71"};"object"===typeof module&&(module.exports=THREE);void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});THREE.log=function(){console.log.apply(console,arguments)};THREE.warn=function(){console.warn.apply(console,arguments)};THREE.error=function(){console.error.apply(console,arguments)};THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;
THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;
THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;
THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;
THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;
THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;
THREE.Projector=function(){THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){THREE.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=
Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+
(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;
return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(.001>Math.abs(k))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=
Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);
this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===
a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=
a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,
c));return this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*
c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),
unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=
a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,
b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):
Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},cross:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=
e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;
return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=
a.array[b+2];return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,
b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=
a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>
b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=
Math.sqrt(e),c=d/b,d=f/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&
(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=
Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},
fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};
THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],l=e[9],p=e[2],q=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,
k)):(this._y=Math.atan2(-p,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(q,-1,1)),.99999>Math.abs(q)?(this._y=Math.atan2(-p,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(p,-1,1)),.99999>Math.abs(p)?(this._x=Math.atan2(q,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=
Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-l,e),this._y=0)):THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,
b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?
a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var f=e.vertices,e=0,g=f.length;e<g;e++)a.copy(f[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e instanceof THREE.BufferGeometry&&void 0!==e.attributes.position)for(f=e.attributes.position.array,e=0,g=f.length;e<g;e+=3)a.set(f[e],f[e+1],f[e+2]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},
makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");THREE.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){return(new THREE.Matrix3).fromArray(this.elements)}};
THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,p,q,n,t,r,s){var u=this.elements;u[0]=a;u[4]=b;u[8]=c;u[12]=d;u[1]=e;u[5]=f;u[9]=g;u[13]=h;u[2]=k;u[6]=l;u[10]=p;u[14]=q;u[3]=n;u[7]=t;u[11]=r;u[15]=s;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),
f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,
l=c*h,p=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-p*d;b[9]=-c*g;b[2]=p-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,p=d*e,b[0]=a+p*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=p+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,p=d*e,b[0]=a-p*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=p-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,p=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+p,b[1]=g*e,b[5]=p*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===
a.order?(a=f*g,k=f*d,l=c*g,p=c*d,b[0]=g*h,b[4]=p-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-p*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,p=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+p,b[5]=f*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=p*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},
makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,p=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(p+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+p);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,
c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],
k=c[12],l=c[1],p=c[5],q=c[9],n=c[13],t=c[2],r=c[6],s=c[10],u=c[14],v=c[3],x=c[7],D=c[11],c=c[15],w=d[0],y=d[4],A=d[8],E=d[12],G=d[1],F=d[5],z=d[9],I=d[13],U=d[2],M=d[6],H=d[10],L=d[14],P=d[3],N=d[7],R=d[11],d=d[15];e[0]=f*w+g*G+h*U+k*P;e[4]=f*y+g*F+h*M+k*N;e[8]=f*A+g*z+h*H+k*R;e[12]=f*E+g*I+h*L+k*d;e[1]=l*w+p*G+q*U+n*P;e[5]=l*y+p*F+q*M+n*N;e[9]=l*A+p*z+q*H+n*R;e[13]=l*E+p*I+q*L+n*d;e[2]=t*w+r*G+s*U+u*P;e[6]=t*y+r*F+s*M+u*N;e[10]=t*A+r*z+s*H+u*R;e[14]=t*E+r*I+s*L+u*d;e[3]=v*w+x*G+D*U+c*P;e[7]=v*y+
x*F+D*M+c*N;e[11]=v*A+x*z+D*H+c*R;e[15]=v*E+x*I+D*L+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=
a;b[15]*=a;return this},multiplyVector3:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],p=a[6],q=a[10],n=a[14];return a[3]*(+e*h*p-d*k*p-e*g*q+c*k*q+d*g*n-c*h*n)+a[7]*(+b*h*n-b*k*q+e*f*q-d*f*n+d*k*l-e*h*l)+a[11]*(+b*k*p-b*g*n-e*f*p+c*f*n+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*p+b*g*q+d*f*p-c*f*q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];
a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=
this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],p=d[9],q=d[13],n=d[2],t=d[6],r=d[10],s=d[14],u=d[3],v=d[7],x=d[11],d=d[15];c[0]=p*s*v-q*r*v+q*t*x-l*s*x-p*t*d+l*r*d;c[4]=h*r*v-g*s*v-h*t*x+f*s*x+g*t*d-f*r*d;c[8]=g*q*v-h*p*v+h*l*x-f*q*x-g*l*d+f*p*d;c[12]=h*p*t-g*q*t-h*l*r+f*q*r+g*l*s-f*p*s;c[1]=q*r*u-p*s*u-q*n*x+
k*s*x+p*n*d-k*r*d;c[5]=g*s*u-h*r*u+h*n*x-e*s*x-g*n*d+e*r*d;c[9]=h*p*u-g*q*u-h*k*x+e*q*x+g*k*d-e*p*d;c[13]=g*q*n-h*p*n+h*k*r-e*q*r-g*k*s+e*p*s;c[2]=l*s*u-q*t*u+q*n*v-k*s*v-l*n*d+k*t*d;c[6]=h*t*u-f*s*u-h*n*v+e*s*v+f*n*d-e*t*d;c[10]=f*q*u-h*l*u+h*k*v-e*q*v-f*k*d+e*l*d;c[14]=h*l*n-f*q*n-h*k*t+e*q*t+f*k*s-e*l*s;c[3]=p*t*u-l*r*u-p*n*v+k*r*v+l*n*x-k*t*x;c[7]=f*r*u-g*t*u+g*n*v-e*r*v-f*n*x+e*t*x;c[11]=g*l*u-f*p*u-g*k*v+e*p*v+f*k*x-e*l*x;c[15]=f*p*n-g*l*n+g*k*t-e*p*t-f*k*r+e*l*r;c=e*c[0]+k*c[4]+n*c[8]+u*c[12];
if(0==c){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");THREE.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){THREE.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){THREE.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){THREE.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){THREE.error("THREE.Matrix4: .rotateZ() has been removed.")},
rotateByAxis:function(a,b){THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,
c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+
d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];
c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;
g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],
a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);
b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),p=-c.dot(b),q=c.lengthSq(),n=Math.abs(1-k*k),t;0<n?(d=k*p-l,e=k*l-p,t=h*n,0<=d?e>=-t?e<=t?(h=1/n,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*p)+q):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q):(e=-h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q):e<=-t?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q):e<=t?(d=0,e=Math.min(Math.max(-h,-p),h),k=e*(e+
2*p)+q):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*p)+q);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;
if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},
isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*
g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));
if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],p=c[8],q=c[9],n=c[10],t=c[11],r=c[12],s=c[13],u=c[14],c=c[15];b[0].setComponents(f-a,l-g,t-p,c-r).normalize();b[1].setComponents(f+
a,l+g,t+p,c+r).normalize();b[2].setComponents(f+d,l+h,t+q,c+s).normalize();b[3].setComponents(f-d,l-h,t-q,c-s).normalize();b[4].setComponents(f-e,l-k,t-n,c-u).normalize();b[5].setComponents(f+e,l+k,t+n,c+u).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return Math.floor(this.randFloat(a,b))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=
180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,p,q,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+
2;l=this.points[c[0]];p=this.points[c[1]];q=this.points[c[2]];n=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,p.x,q.x,n.x,g,h,k);d.y=b(l.y,p.y,q.y,n.y,g,h,k);d.z=b(l.z,p.z,q.z,n.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,n=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=n.chunks[b]-n.chunks[b-1];g=Math.ceil(a*c/n.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?
(this.ray.origin.copy(c.position),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(c.position).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):a.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,e){var f=[];c(a,this,f,e);f.sort(b);return f},intersectObjects:function(d,e){var f=[];if(!1===d instanceof Array)return a.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
f;for(var g=0,h=d.length;g<h;g++)c(d[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translate:function(a,b){THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return THREE.error("THREE.Object3D.add: object can't be added as a child of itself.",
a),this;a instanceof THREE.Object3D?(void 0!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=void 0,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getChildByName:function(a){THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
return this.getObjectByName(a)},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new THREE.Vector3;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=
new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,
b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverseVisible(a)}},traverseAncestors:function(a){this.parent&&(a(this.parent),
this.parent.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},
toJSON:function(){var a={metadata:{version:4.3,type:"Object",generator:"ObjectExporter"}},b={},c={},d=function(b){void 0===a.materials&&(a.materials=[]);if(void 0===c[b.uuid]){var d=b.toJSON();delete d.metadata;c[b.uuid]=d;a.materials.push(d)}return b.uuid},e=function(c){var g={};g.uuid=c.uuid;g.type=c.type;""!==c.name&&(g.name=c.name);"{}"!==JSON.stringify(c.userData)&&(g.userData=c.userData);!0!==c.visible&&(g.visible=c.visible);if(c instanceof THREE.PerspectiveCamera)g.fov=c.fov,g.aspect=c.aspect,
g.near=c.near,g.far=c.far;else if(c instanceof THREE.OrthographicCamera)g.left=c.left,g.right=c.right,g.top=c.top,g.bottom=c.bottom,g.near=c.near,g.far=c.far;else if(c instanceof THREE.AmbientLight)g.color=c.color.getHex();else if(c instanceof THREE.DirectionalLight)g.color=c.color.getHex(),g.intensity=c.intensity;else if(c instanceof THREE.PointLight)g.color=c.color.getHex(),g.intensity=c.intensity,g.distance=c.distance,g.decay=c.decay;else if(c instanceof THREE.SpotLight)g.color=c.color.getHex(),
g.intensity=c.intensity,g.distance=c.distance,g.angle=c.angle,g.exponent=c.exponent,g.decay=c.decay;else if(c instanceof THREE.HemisphereLight)g.color=c.color.getHex(),g.groundColor=c.groundColor.getHex();else if(c instanceof THREE.Mesh||c instanceof THREE.Line||c instanceof THREE.PointCloud){var h=c.geometry;void 0===a.geometries&&(a.geometries=[]);if(void 0===b[h.uuid]){var k=h.toJSON();delete k.metadata;b[h.uuid]=k;a.geometries.push(k)}g.geometry=h.uuid;g.material=d(c.material);c instanceof THREE.Line&&
(g.mode=c.mode)}else c instanceof THREE.Sprite&&(g.material=d(c.material));g.matrix=c.matrix.toArray();if(0<c.children.length)for(g.children=[],h=0;h<c.children.length;h++)g.children.push(e(c.children[h]));return g};a.object=e(this);return a},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);
a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b;this.needsUpdate=!1};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,
b,c){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return new THREE.BufferAttribute(new this.array.constructor(this.array),this.itemSize)}};
THREE.Int8Attribute=function(a,b){THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8Attribute=function(a,b){THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8ClampedAttribute=function(a,b){THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int16Attribute=function(a,b){THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint16Attribute=function(a,b){THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int32Attribute=function(a,b){THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint32Attribute=function(a,b){THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float32Attribute=function(a,b){THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float64Attribute=function(a,b){THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.DynamicBufferAttribute=function(a,b){THREE.BufferAttribute.call(this,a,b);this.updateRange={offset:0,count:-1}};THREE.DynamicBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);THREE.DynamicBufferAttribute.prototype.constructor=THREE.DynamicBufferAttribute;
THREE.DynamicBufferAttribute.prototype.clone=function(){return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array),this.itemSize)};THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.attributes={};this.attributesKeys=[];this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):(this.attributes[a]=b,this.attributesKeys=Object.keys(this.attributes))},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=
this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere()},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.applyMatrix((new THREE.Matrix4).setPosition(a));return a},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};
var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var l=new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(l,3));if(f!==THREE.NoColors){var p=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(p,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uv",new THREE.BufferAttribute(q,
2))}for(var n=0,t=0,r=0;n<d.length;n++,t+=6,r+=9){var s=d[n],u=c[s.a],v=c[s.b],x=c[s.c];k[r]=u.x;k[r+1]=u.y;k[r+2]=u.z;k[r+3]=v.x;k[r+4]=v.y;k[r+5]=v.z;k[r+6]=x.x;k[r+7]=x.y;k[r+8]=x.z;!0===h?(u=s.vertexNormals[0],v=s.vertexNormals[1],x=s.vertexNormals[2],l[r]=u.x,l[r+1]=u.y,l[r+2]=u.z,l[r+3]=v.x,l[r+4]=v.y,l[r+5]=v.z,l[r+6]=x.x,l[r+7]=x.y,l[r+8]=x.z):(u=s.normal,l[r]=u.x,l[r+1]=u.y,l[r+2]=u.z,l[r+3]=u.x,l[r+4]=u.y,l[r+5]=u.z,l[r+6]=u.x,l[r+7]=u.y,l[r+8]=u.z);f===THREE.FaceColors?(s=s.color,p[r]=
s.r,p[r+1]=s.g,p[r+2]=s.b,p[r+3]=s.r,p[r+4]=s.g,p[r+5]=s.b,p[r+6]=s.r,p[r+7]=s.g,p[r+8]=s.b):f===THREE.VertexColors&&(u=s.vertexColors[0],v=s.vertexColors[1],s=s.vertexColors[2],p[r]=u.r,p[r+1]=u.g,p[r+2]=u.b,p[r+3]=v.r,p[r+4]=v.g,p[r+5]=v.b,p[r+6]=s.r,p[r+7]=s.g,p[r+8]=s.b);!0===g&&(s=e[0][n][0],u=e[0][n][1],v=e[0][n][2],q[t]=s.x,q[t+1]=s.y,q[t+2]=u.x,q[t+3]=u.y,q[t+4]=v.x,q[t+5]=v.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){var a=new THREE.Vector3;return function(){null===
this.boundingBox&&(this.boundingBox=new THREE.Box3);var b=this.attributes.position.array;if(b){var c=this.boundingBox;c.makeEmpty();for(var d=0,e=b.length;d<e;d+=3)a.set(b[d],b[d+1],b[d+2]),c.expandByPoint(a)}if(void 0===b||0===b.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')}}(),
computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&
THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.attributes;if(a.position){var b=a.position.array;if(void 0===a.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(b.length),3));else for(var c=a.normal.array,d=0,e=c.length;d<e;d++)c[d]=0;var c=a.normal.array,f,g,h,k=new THREE.Vector3,l=new THREE.Vector3,
p=new THREE.Vector3,q=new THREE.Vector3,n=new THREE.Vector3;if(a.index)for(var t=a.index.array,r=0<this.offsets.length?this.offsets:[{start:0,count:t.length,index:0}],s=0,u=r.length;s<u;++s){e=r[s].start;f=r[s].count;for(var v=r[s].index,d=e,e=e+f;d<e;d+=3)f=3*(v+t[d]),g=3*(v+t[d+1]),h=3*(v+t[d+2]),k.fromArray(b,f),l.fromArray(b,g),p.fromArray(b,h),q.subVectors(p,l),n.subVectors(k,l),q.cross(n),c[f]+=q.x,c[f+1]+=q.y,c[f+2]+=q.z,c[g]+=q.x,c[g+1]+=q.y,c[g+2]+=q.z,c[h]+=q.x,c[h+1]+=q.y,c[h+2]+=q.z}else for(d=
0,e=b.length;d<e;d+=9)k.fromArray(b,d),l.fromArray(b,d+3),p.fromArray(b,d+6),q.subVectors(p,l),n.subVectors(k,l),q.cross(n),c[d]=q.x,c[d+1]=q.y,c[d+2]=q.z,c[d+3]=q.x,c[d+4]=q.y,c[d+5]=q.z,c[d+6]=q.x,c[d+7]=q.y,c[d+8]=q.z;this.normalizeNormals();a.normal.needsUpdate=!0}},computeTangents:function(){function a(a,b,c){q.fromArray(d,3*a);n.fromArray(d,3*b);t.fromArray(d,3*c);r.fromArray(f,2*a);s.fromArray(f,2*b);u.fromArray(f,2*c);v=n.x-q.x;x=t.x-q.x;D=n.y-q.y;w=t.y-q.y;y=n.z-q.z;A=t.z-q.z;E=s.x-r.x;G=
u.x-r.x;F=s.y-r.y;z=u.y-r.y;I=1/(E*z-G*F);U.set((z*v-F*x)*I,(z*D-F*w)*I,(z*y-F*A)*I);M.set((E*x-G*v)*I,(E*w-G*D)*I,(E*A-G*y)*I);k[a].add(U);k[b].add(U);k[c].add(U);l[a].add(M);l[b].add(M);l[c].add(M)}function b(a){ha.fromArray(e,3*a);O.copy(ha);ba=k[a];oa.copy(ba);oa.sub(ha.multiplyScalar(ha.dot(ba))).normalize();ja.crossVectors(O,ba);qa=ja.dot(l[a]);ca=0>qa?-1:1;h[4*a]=oa.x;h[4*a+1]=oa.y;h[4*a+2]=oa.z;h[4*a+3]=ca}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||
void 0===this.attributes.uv)THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&this.addAttribute("tangent",new THREE.BufferAttribute(new Float32Array(4*g),4));for(var h=this.attributes.tangent.array,k=[],l=[],p=0;p<g;p++)k[p]=new THREE.Vector3,
l[p]=new THREE.Vector3;var q=new THREE.Vector3,n=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector2,s=new THREE.Vector2,u=new THREE.Vector2,v,x,D,w,y,A,E,G,F,z,I,U=new THREE.Vector3,M=new THREE.Vector3,H,L,P,N,R;0===this.drawcalls.length&&this.addDrawCall(0,c.length,0);var V=this.drawcalls,p=0;for(L=V.length;p<L;++p){H=V[p].start;P=V[p].count;var J=V[p].index,g=H;for(H+=P;g<H;g+=3)P=J+c[g],N=J+c[g+1],R=J+c[g+2],a(P,N,R)}var oa=new THREE.Vector3,ja=new THREE.Vector3,ha=new THREE.Vector3,O=new THREE.Vector3,
ca,ba,qa,p=0;for(L=V.length;p<L;++p)for(H=V[p].start,P=V[p].count,J=V[p].index,g=H,H+=P;g<H;g+=3)P=J+c[g],N=J+c[g+1],R=J+c[g+2],b(P),b(N),b(R)}},computeOffsets:function(a){void 0===a&&(a=65535);for(var b=this.attributes.index.array,c=this.attributes.position.array,d=b.length/3,e=new Uint16Array(b.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,p=0,q=new Int32Array(6),n=new Int32Array(c.length),t=new Int32Array(c.length),r=0;r<c.length;r++)n[r]=-1,t[r]=-1;for(c=0;c<d;c++){for(var s=p=0;3>
s;s++)r=b[3*c+s],-1==n[r]?(q[2*s]=r,q[2*s+1]=-1,p++):n[r]<k.index?(q[2*s]=r,q[2*s+1]=-1,l++):(q[2*s]=r,q[2*s+1]=n[r]);if(g+p>k.index+a)for(k={start:f,count:0,index:g},h.push(k),p=0;6>p;p+=2)s=q[p+1],-1<s&&s<k.index&&(q[p+1]=-1);for(p=0;6>p;p+=2)r=q[p],s=q[p+1],-1===s&&(s=g++),n[r]=s,t[s]=r,e[f++]=s-k.index,k.count++}this.reorderBuffers(e,t,g);return this.drawcalls=this.offsets=h},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e;for(e in this.attributes)"index"!=e&&(d[e]=new this.attributes[e].array.constructor(this.attributes[e].itemSize*
c));for(var f=0;f<c;f++){var g=b[f];for(e in this.attributes)if("index"!=e)for(var h=this.attributes[e].array,k=this.attributes[e].itemSize,l=d[e],p=0;p<k;p++)l[f*k+p]=h[g*k+p]}this.attributes.index.array=a;for(e in this.attributes)"index"!=e&&(this.attributes[e].array=d[e],this.attributes[e].numItems=this.attributes[e].itemSize*c)},toJSON:function(){var a={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type,data:{attributes:{}}},b=this.attributes,
c=this.offsets,d=this.boundingSphere,e;for(e in b){var f=b[e],g=Array.prototype.slice.call(f.array);a.data.attributes[e]={itemSize:f.itemSize,type:f.array.constructor.name,array:g}}0<c.length&&(a.data.offsets=JSON.parse(JSON.stringify(c)));null!==d&&(a.data.boundingSphere={center:d.center.toArray(),radius:d.radius});return a},clone:function(){var a=new THREE.BufferGeometry,b;for(b in this.attributes)a.addAttribute(b,this.attributes[b].clone());b=0;for(var c=this.offsets.length;b<c;b++){var d=this.offsets[b];
a.offsets.push({start:d.start,index:d.index,count:d.count})}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=
this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=
this.verticesNeedUpdate=!0},fromBufferGeometry:function(a){for(var b=this,c=a.attributes,d=c.position.array,e=void 0!==c.index?c.index.array:void 0,f=void 0!==c.normal?c.normal.array:void 0,g=void 0!==c.color?c.color.array:void 0,h=void 0!==c.uv?c.uv.array:void 0,k=[],l=[],p=c=0;c<d.length;c+=3,p+=2)b.vertices.push(new THREE.Vector3(d[c],d[c+1],d[c+2])),void 0!==f&&k.push(new THREE.Vector3(f[c],f[c+1],f[c+2])),void 0!==g&&b.colors.push(new THREE.Color(g[c],g[c+1],g[c+2])),void 0!==h&&l.push(new THREE.Vector2(h[p],
h[p+1]));var q=function(a,c,d){var e=void 0!==f?[k[a].clone(),k[c].clone(),k[d].clone()]:[],n=void 0!==g?[b.colors[a].clone(),b.colors[c].clone(),b.colors[d].clone()]:[];b.faces.push(new THREE.Face3(a,c,d,e,n));void 0!==h&&b.faceVertexUvs[0].push([l[a].clone(),l[c].clone(),l[d].clone()])};if(void 0!==e)if(d=a.drawcalls,0<d.length)for(c=0;c<d.length;c++)for(var p=d[c],n=p.start,t=p.count,r=p.index,p=n,n=n+t;p<n;p+=3)q(r+e[p],r+e[p+1],r+e[p+2]);else for(c=0;c<e.length;c+=3)q(e[c],e[c+1],e[c+2]);else for(c=
0;c<d.length/3;c+=3)q(c,c+1,c+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.applyMatrix((new THREE.Matrix4).setPosition(a));return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],
g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=
0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=
this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<
d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,p,q,n,t,r,s,u,v=[],x=[];c=new THREE.Vector3;var D=new THREE.Vector3,w=new THREE.Vector3,y=new THREE.Vector3,A=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)v[a]=new THREE.Vector3,x[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,u=e.b,e=e.c,g=this.vertices[d],h=this.vertices[u],k=this.vertices[e],
l=f[0],p=f[1],q=f[2],f=h.x-g.x,n=k.x-g.x,t=h.y-g.y,r=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=p.x-l.x,s=q.x-l.x,p=p.y-l.y,l=q.y-l.y,q=1/(k*l-s*p),c.set((l*f-p*n)*q,(l*t-p*r)*q,(l*h-p*g)*q),D.set((k*n-s*f)*q,(k*r-s*t)*q,(k*g-s*h)*q),v[d].add(c),v[u].add(c),v[e].add(c),x[d].add(D),x[u].add(D),x[e].add(D);D=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)A.copy(e.vertexNormals[c]),d=e[D[c]],u=v[d],w.copy(u),w.sub(A.multiplyScalar(A.dot(u))).normalize(),
y.crossVectors(e.vertexNormals[c],u),d=y.dot(x[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(w.x,w.y,w.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var p=0,q=g.length;p<q;p++){var n=g[p].clone();void 0!==b&&n.applyMatrix4(b);f.push(n)}p=0;for(q=k.length;p<
q;p++){var g=k[p],t,r=g.vertexNormals,s=g.vertexColors,n=new THREE.Face3(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)t=r[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),n.vertexNormals.push(t);n.color.copy(g.color);b=0;for(f=s.length;b<f;b++)t=s[b],n.vertexColors.push(t.clone());n.materialIndex=g.materialIndex+c;h.push(n)}p=0;for(q=a.length;p<q;p++)if(c=a[p],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());
l.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<
g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,
a.z);return l[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==q[b])return q[b];q[b]=p.length;p.push(a.getHex());return q[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=n.length/2;n.push(a.x,a.y);return t[b]}var e={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==
f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],l={},p=[],q={},n=[],t={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],s=void 0!==this.faceVertexUvs[0][g],u=0<r.normal.length(),v=0<r.vertexNormals.length,x=1!==r.color.r||1!==r.color.g||1!==r.color.b,D=0<r.vertexColors.length,w=0,w=a(w,0,0),w=a(w,1,!1),w=a(w,2,!1),w=a(w,3,s),w=a(w,4,u),w=a(w,5,v),w=a(w,6,x),w=a(w,7,D);h.push(w);h.push(r.a,r.b,r.c);s&&(s=this.faceVertexUvs[0][g],
h.push(d(s[0]),d(s[1]),d(s[2])));u&&h.push(b(r.normal));v&&(u=r.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));x&&h.push(c(r.color));D&&(r=r.vertexColors,h.push(c(r[0]),c(r[1]),c(r[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<p.length&&(e.data.colors=p);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());c=0;
for(d=this.faceVertexUvs.length;c<d;c++){b=this.faceVertexUvs[c];void 0===a.faceVertexUvs[c]&&(a.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,l=g.length;k<l;k++)h.push(g[k].clone());a.faceVertexUvs[c].push(h)}}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();
THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));
this.add(g);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=
1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.Light=function(a){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;
THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a);this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.type="AreaLight";this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=.5;this.quadraticAttenuation=.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.AreaLight.prototype.constructor=THREE.AreaLight;
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.type="DirectionalLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;
this.shadowCascadeOffset=new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,.99,.998];this.shadowCascadeFarZ=[.99,.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.type="HemisphereLight";this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;
THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a);this.type="PointLight";this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;a.decay=this.decay;return a};
THREE.SpotLight=function(a,b,c,d,e,f){THREE.Light.call(this,a);this.type="SpotLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.decay=void 0!==f?f:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=
512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.decay=this.decay;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;
a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache={files:{},add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
d,e,g,h,k,s){var u=b+e,v,x=THREE.Loader.Handlers.get(u);null!==x?v=x.load(u):(v=new THREE.Texture,x=f.imageLoader,x.crossOrigin=f.crossOrigin,x.load(u,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);v.image=e}else v.image=a;v.needsUpdate=!0}));v.sourceFile=e;g&&(v.repeat.set(g[0],g[1]),1!==g[0]&&(v.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(v.wrapT=THREE.RepeatWrapping));h&&v.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(v.wrapS=e[k[0]]),void 0!==e[k[1]]&&(v.wrapT=e[k[1]]));s&&(v.anisotropy=s);a[d]=v}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);void 0!==a.transparent&&(h.transparent=a.transparent);void 0!==a.opacity&&1>a.opacity&&(h.transparent=!0);void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);
void 0!==a.vertexColors&&("face"===a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorEmissive&&(h.emissive=e(a.colorEmissive));void 0!==a.transparency&&(console.warn("THREE.Loader: transparency has been renamed to opacity"),a.opacity=a.transparency);void 0!==a.opacity&&(h.opacity=a.opacity);a.specularCoef&&(h.shininess=
a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",
a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormalFactor&&(h.normalScale=new THREE.Vector2(a.mapNormalFactor,a.mapNormalFactor));g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=THREE.Cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){THREE.Cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=THREE.Cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),f.addEventListener("load",function(c){THREE.Cache.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText),k=h.metadata;if(void 0!==k){if("object"===k.type){THREE.error("THREE.JSONLoader: "+b+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===k.type){THREE.error("THREE.JSONLoader: "+b+" seems to be a Scene. Use THREE.SceneLoader instead.");return}}h=a.parse(h,
d);c(h.geometry,h.materials)}else THREE.error("THREE.JSONLoader: "+b+" seems to be unreachable or the file is empty.");a.onLoadComplete()}else THREE.error("THREE.JSONLoader: Couldn't load "+b+" ("+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,p,q,n,t,r,s,u,v,x=a.faces;p=a.vertices;var D=a.normals,w=a.colors,y=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&y++;for(d=0;d<y;d++)c.faceVertexUvs[d]=[]}k=0;for(l=p.length;k<l;)d=new THREE.Vector3,d.x=p[k++]*b,d.y=p[k++]*b,d.z=p[k++]*b,c.vertices.push(d);k=0;for(l=x.length;k<l;)if(b=x[k++],t=b&1,h=b&2,d=b&8,q=b&16,r=b&32,p=b&64,b&=128,t){t=new THREE.Face3;
t.a=x[k];t.b=x[k+1];t.c=x[k+3];s=new THREE.Face3;s.a=x[k+1];s.b=x[k+2];s.c=x[k+3];k+=4;h&&(h=x[k++],t.materialIndex=h,s.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<y;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=x[k++],v=u[2*n],n=u[2*n+1],v=new THREE.Vector2(v,n),2!==g&&c.faceVertexUvs[d][h].push(v),0!==g&&c.faceVertexUvs[d][h+1].push(v);q&&(q=3*x[k++],t.normal.set(D[q++],D[q++],D[q]),s.normal.copy(t.normal));if(r)for(d=0;4>d;d++)q=3*x[k++],r=new THREE.Vector3(D[q++],
D[q++],D[q]),2!==d&&t.vertexNormals.push(r),0!==d&&s.vertexNormals.push(r);p&&(p=x[k++],p=w[p],t.color.setHex(p),s.color.setHex(p));if(b)for(d=0;4>d;d++)p=x[k++],p=w[p],2!==d&&t.vertexColors.push(new THREE.Color(p)),0!==d&&s.vertexColors.push(new THREE.Color(p));c.faces.push(t);c.faces.push(s)}else{t=new THREE.Face3;t.a=x[k++];t.b=x[k++];t.c=x[k++];h&&(h=x[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<y;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)n=x[k++],v=u[2*n],n=u[2*n+1],
v=new THREE.Vector2(v,n),c.faceVertexUvs[d][h].push(v);q&&(q=3*x[k++],t.normal.set(D[q++],D[q++],D[q]));if(r)for(d=0;3>d;d++)q=3*x[k++],r=new THREE.Vector3(D[q++],D[q++],D[q]),t.vertexNormals.push(r);p&&(p=x[k++],t.color.setHex(w[p]));if(b)for(d=0;3>d;d++)p=x[k++],t.vertexColors.push(new THREE.Color(w[p]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&THREE.warn("THREE.JSONLoader: When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+
c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,l,p;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,p=a.morphTargets[d].vertices,h=0,k=p.length;h<k;h+=3){var q=new THREE.Vector3;q.x=p[h]*b;q.y=p[h+1]*b;q.z=p[h+2]*b;l.push(q)}}if(void 0!==
a.morphColors)for(d=0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)p=new THREE.Color(16755200),p.setRGB(l[b],l[b+1],l[b+2]),k.push(p)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,
materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.attributes,d;for(d in c){var e=c[d],f=new self[e.type](e.array);b.addAttribute(d,new THREE.BufferAttribute(f,e.itemSize))}c=a.data.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));
a=a.data.boundingSphere;void 0!==a&&(c=new THREE.Vector3,void 0!==a.center&&c.fromArray(a.center),b.boundingSphere=new THREE.Sphere(c,a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);
void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.size&&
(b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=a.sizeAttenuation);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath=""};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),
d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=
new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,
h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a)for(var d=function(a){void 0===b[a]&&
THREE.warn("THREE.ObjectLoader: Undefined texture",a);return b[a]},e=new THREE.MaterialLoader,f=0,g=a.length;f<g;f++){var h=a[f],k=e.parse(h);k.uuid=h.uuid;void 0!==h.name&&(k.name=h.name);void 0!==h.map&&(k.map=d(h.map));void 0!==h.bumpMap&&(k.bumpMap=d(h.bumpMap),h.bumpScale&&(k.bumpScale=new THREE.Vector2(h.bumpScale,h.bumpScale)));void 0!==h.alphaMap&&(k.alphaMap=d(h.alphaMap));void 0!==h.envMap&&(k.envMap=d(h.envMap));void 0!==h.normalMap&&(k.normalMap=d(h.normalMap),h.normalScale&&(k.normalScale=
new THREE.Vector2(h.normalScale,h.normalScale)));void 0!==h.lightMap&&(k.lightMap=d(h.lightMap));void 0!==h.specularMap&&(k.specularMap=d(h.specularMap));c[h.uuid]=k}return c},parseImages:function(a,b){var c=this,d={};if(void 0!==a&&0<a.length){var e=new THREE.LoadingManager(b),f=new THREE.ImageLoader(e);f.setCrossOrigin(this.crossOrigin);for(var e=function(a){c.manager.itemStart(a);return f.load(a,function(){c.manager.itemEnd(a)})},g=0,h=a.length;g<h;g++){var k=a[g],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?
k.url:c.texturePath+k.url;d[k.uuid]=e(l)}}return d},parseTextures:function(a,b){var c={};if(void 0!==a)for(var d=0,e=a.length;d<e;d++){var f=a[d];void 0===f.image&&THREE.warn('THREE.ObjectLoader: No "image" speficied for',f.uuid);void 0===b[f.image]&&THREE.warn("THREE.ObjectLoader: Undefined image",f.image);var g=new THREE.Texture(b[f.image]);g.needsUpdate=!0;g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);void 0!==f.repeat&&(g.repeat=new THREE.Vector2(f.repeat[0],f.repeat[1]));void 0!==f.minFilter&&
(g.minFilter=THREE[f.minFilter]);void 0!==f.magFilter&&(g.magFilter=THREE[f.magFilter]);void 0!==f.anisotropy&&(g.anisotropy=f.anisotropy);f.wrap instanceof Array&&(g.wrapS=THREE[f.wrap[0]],g.wrapT=THREE[f.wrap[1]]);c[f.uuid]=g}return c},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;e=function(a){void 0===c[a]&&THREE.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]};var f=function(a){void 0===d[a]&&THREE.warn("THREE.ObjectLoader: Undefined material",a);return d[a]};
switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":e=new THREE.SpotLight(b.color,
b.intensity,b.distance,b.angle,b.exponent,b.decay);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=new THREE.Mesh(e(b.geometry),f(b.material));break;case "Line":e=new THREE.Line(e(b.geometry),f(b.material),b.mode);break;case "PointCloud":e=new THREE.PointCloud(e(b.geometry),f(b.material));break;case "Sprite":e=new THREE.Sprite(f(b.material));break;case "Group":e=new THREE.Group;break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==
b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};
THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(){this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,f=new THREE.DataTexture,g=new THREE.XHRLoader;g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==a.magFilter?a.magFilter:
THREE.LinearFilter,f.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}};THREE.CompressedTextureLoader=function(){this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c){var d=this,e=[],f=new THREE.CompressedTexture;f.image=e;var g=new THREE.XHRLoader;g.setResponseType("arraybuffer");if(a instanceof Array){var h=0;c=function(c){g.load(a[c],function(a){a=d._parser(a,!0);e[c]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};h+=1;6===h&&(1==a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.format=a.format,f.needsUpdate=!0,b&&b(f))})};for(var k=0,l=
a.length;k<l;++k)c(k)}else g.load(a,function(a){a=d._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,g=0;g<c;g++){e[g]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)e[g].mipmaps.push(a.mipmaps[g*a.mipmapCount+h]),e[g].format=a.format,e[g].width=a.width,e[g].height=a.height}else f.image.width=a.width,f.image.height=a.height,f.mipmaps=a.mipmaps;1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter);f.format=a.format;f.needsUpdate=!0;b&&b(f)});return f}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.colorWrite=this.depthWrite=this.depthTest=!0;this.polygonOffset=
!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this._needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)THREE.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},toJSON:function(){var a={metadata:{version:4.2,
type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(a.name=this.name);this instanceof THREE.MeshBasicMaterial?(a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshLambertMaterial?(a.color=this.color.getHex(),a.emissive=this.emissive.getHex(),this.vertexColors!==THREE.NoColors&&
(a.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(a.shading=this.shading),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshPhongMaterial?(a.color=this.color.getHex(),a.emissive=this.emissive.getHex(),a.specular=this.specular.getHex(),a.shininess=this.shininess,this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.shading!==THREE.SmoothShading&&(a.shading=this.shading),
this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshNormalMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshDepthMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.PointCloudMaterial?(a.size=this.size,a.sizeAttenuation=
this.sizeAttenuation,a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending)):this instanceof THREE.ShaderMaterial?(a.uniforms=this.uniforms,a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader):this instanceof THREE.SpriteMaterial&&(a.color=this.color.getHex());1>this.opacity&&(a.opacity=this.opacity);!1!==this.transparent&&(a.transparent=this.transparent);!1!==this.wireframe&&
(a.wireframe=this.wireframe);return a},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.blendSrcAlpha=this.blendSrcAlpha;a.blendDstAlpha=this.blendDstAlpha;a.blendEquationAlpha=this.blendEquationAlpha;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=
this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;
THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=
this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);a.specularMap=this.specularMap;
a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MeshFaceMaterial";this.materials=a instanceof Array?a:[]};
THREE.MeshFaceMaterial.prototype={constructor:THREE.MeshFaceMaterial,toJSON:function(){for(var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},b=0,c=this.materials.length;b<c;b++)a.materials.push(this.materials[b].toJSON());return a},clone:function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a}};
THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.type="PointCloudMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointCloudMaterial.prototype.constructor=THREE.PointCloudMaterial;
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=
this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};
THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};
THREE.Texture=function(a,b,c,d,e,f,g,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;
this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};
THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,p);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.VideoTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var l=this,p=function(){requestAnimationFrame(p);a.readyState===a.HAVE_ENOUGH_DATA&&(l.needsUpdate=!0)};p()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;
THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);THREE.Group.prototype.constructor=THREE.Group;THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.type="PointCloud";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()})};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);THREE.PointCloud.prototype.constructor=THREE.PointCloud;
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var n=c.ray.origin.distanceTo(k);
d.push({distance:n,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var l=f.attributes,p=l.position.array;if(void 0!==l.index){var l=l.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:l.length,index:0}]);for(var n=0,t=q.length;n<t;++n)for(var r=q[n].start,s=q[n].index,f=r,r=r+q[n].count;f<r;f++){var u=s+l[f];k.fromArray(p,3*u);g(k,u)}}else for(l=p.length/3,f=0;f<l;f++)k.set(p[3*f],p[3*f+1],p[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.mode=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)){a.getInverse(this.matrixWorld);b.copy(d.ray).applyMatrix4(a);var h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,p=new THREE.Vector3,q=this.mode===THREE.LineStrip?1:2;if(g instanceof
THREE.BufferGeometry){var n=g.attributes;if(void 0!==n.index){var t=n.index.array,n=n.position.array,r=g.offsets;0===r.length&&(r=[{start:0,count:t.length,index:0}]);for(var s=0;s<r.length;s++)for(var u=r[s].start,v=r[s].count,x=r[s].index,g=u;g<u+v-1;g+=q){var D=x+t[g+1];h.fromArray(n,3*(x+t[g]));k.fromArray(n,3*D);D=b.distanceSqToSegment(h,k,p,l);D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:g,offsetIndex:s,face:null,faceIndex:null,
object:this}))}}else for(n=n.position.array,g=0;g<n.length/3-1;g+=q)h.fromArray(n,3*g),k.fromArray(n,3*g+3),D=b.distanceSqToSegment(h,k,p,l),D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g instanceof THREE.Geometry)for(h=g.vertices,k=h.length,g=0;g<k-1;g+=q)D=b.distanceSqToSegment(h[g],h[g+1],p,l),D>f||(D=b.origin.distanceTo(p),D<d.near||D>d.far||e.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),
index:g,face:null,faceIndex:null,object:this}))}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.mode));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var l=
this.material;if(void 0!==l){var p=k.attributes,q,n,t=g.precision;if(void 0!==p.index){var r=p.index.array,s=p.position.array,u=k.offsets;0===u.length&&(u=[{start:0,count:r.length,index:0}]);for(var v=0,x=u.length;v<x;++v)for(var p=u[v].start,D=u[v].index,k=p,w=p+u[v].count;k<w;k+=3){p=D+r[k];q=D+r[k+1];n=D+r[k+2];d.fromArray(s,3*p);e.fromArray(s,3*q);f.fromArray(s,3*n);var y=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide);if(null!==y){y.applyMatrix4(this.matrixWorld);
var A=g.ray.origin.distanceTo(y);A<t||A<g.near||A>g.far||h.push({distance:A,point:y,face:new THREE.Face3(p,q,n,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this})}}}else for(s=p.position.array,r=k=0,w=s.length;k<w;k+=3,r+=9)p=k,q=k+1,n=k+2,d.fromArray(s,r),e.fromArray(s,r+3),f.fromArray(s,r+6),y=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide),null!==y&&(y.applyMatrix4(this.matrixWorld),A=g.ray.origin.distanceTo(y),A<t||A<g.near||A>
g.far||h.push({distance:A,point:y,face:new THREE.Face3(p,q,n,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(r=this.material instanceof THREE.MeshFaceMaterial,s=!0===r?this.material.materials:null,t=g.precision,u=k.vertices,v=0,x=k.faces.length;v<x;v++)if(D=k.faces[v],l=!0===r?s[D.materialIndex]:this.material,void 0!==l){p=u[D.a];q=u[D.b];n=u[D.c];if(!0===l.morphTargets){y=k.morphTargets;A=this.morphTargetInfluences;d.set(0,0,0);e.set(0,0,0);f.set(0,
0,0);for(var w=0,E=y.length;w<E;w++){var G=A[w];if(0!==G){var F=y[w].vertices;d.x+=(F[D.a].x-p.x)*G;d.y+=(F[D.a].y-p.y)*G;d.z+=(F[D.a].z-p.z)*G;e.x+=(F[D.b].x-q.x)*G;e.y+=(F[D.b].y-q.y)*G;e.z+=(F[D.b].z-q.z)*G;f.x+=(F[D.c].x-n.x)*G;f.y+=(F[D.c].y-n.y)*G;f.z+=(F[D.c].z-n.z)*G}}d.add(p);e.add(q);f.add(n);p=d;q=e;n=f}y=l.side===THREE.BackSide?b.intersectTriangle(n,q,p,!0):b.intersectTriangle(p,q,n,l.side!==THREE.DoubleSide);null!==y&&(y.applyMatrix4(this.matrixWorld),A=g.ray.origin.distanceTo(y),A<t||
A<g.near||A>g.far||h.push({distance:A,point:y,face:D,faceIndex:v,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.constructor=THREE.Bone;
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(THREE.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,
1,1);h=0;for(k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};
THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):THREE.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.type="MorphAnimMesh";this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):THREE.warn("THREE.MorphAnimMesh: animation["+a+"] undefined in .playAnimation()")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor=THREE.LOD;THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.addAttribute("index",new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();
THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Particle=THREE.Sprite;THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.constructor=THREE.LensFlare;
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n\tfloat distance = dot( planeNormal, point-pointOnPlane );\n\treturn point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n\t}\n\treturn 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\n";
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";THREE.ShaderChunk.default_vertex="#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\ttotalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\ttotalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\tvColor.xyz = inputToLinear( color.xyz );\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="\n\toutgoingLight = linearToOutput( outgoingLight );\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n\t\tfogFactor = whiteCompliment( fogFactor );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\toutgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n\tshadowColor = inputToLinear( shadowColor );\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];b[c][d]=e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix4||e instanceof THREE.Texture?e.clone():e instanceof Array?e.slice():e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",
value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",
value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",
value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",
THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,
"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,
THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,
THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,
THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,
THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),
vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {\n\tvNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},
tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,
"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a){var b=a.geometry;a=a.material;var c=b.vertices.length;if(a.attributes){void 0===b.__webglCustomAttributesList&&(b.__webglCustomAttributesList=[]);for(var d in a.attributes){var e=a.attributes[d];if(!e.__webglInitialized||e.createUniqueBuffers){e.__webglInitialized=!0;var f=1;"v2"===e.type?f=2:"v3"===e.type?f=3:"v4"===e.type?f=4:"c"===e.type&&(f=3);e.size=f;e.array=new Float32Array(c*f);e.buffer=m.createBuffer();e.buffer.belongsToAttribute=d;e.needsUpdate=
!0}b.__webglCustomAttributesList.push(e)}}}function c(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function d(a,b,c,d){c=c.attributes;var e=b.attributes;b=b.attributesKeys;for(var f=0,g=b.length;f<g;f++){var h=b[f],k=e[h];if(0<=k){var n=c[h];void 0!==n?(h=n.itemSize,m.bindBuffer(m.ARRAY_BUFFER,n.buffer),W.enableAttribute(k),m.vertexAttribPointer(k,h,m.FLOAT,!1,0,d*h*4)):void 0!==a.defaultAttributeValues&&(2===a.defaultAttributeValues[h].length?
m.vertexAttrib2fv(k,a.defaultAttributeValues[h]):3===a.defaultAttributeValues[h].length&&m.vertexAttrib3fv(k,a.defaultAttributeValues[h]))}}W.disableUnusedAttributes()}function e(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function f(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function g(a,
b){return b[0]-a[0]}function h(a){if(!1!==a.visible){if(!(a instanceof THREE.Scene||a instanceof THREE.Group)){void 0===a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,a.addEventListener("removed",wb));var c=a.geometry;if(void 0!==c&&void 0===c.__webglInit)if(c.__webglInit=!0,c.addEventListener("dispose",jb),c instanceof THREE.BufferGeometry)B.info.memory.geometries++;else if(a instanceof THREE.Mesh)q(a,c);else if(a instanceof THREE.Line){if(void 0===
c.__webglVertexBuffer){c.__webglVertexBuffer=m.createBuffer();c.__webglColorBuffer=m.createBuffer();c.__webglLineDistanceBuffer=m.createBuffer();B.info.memory.geometries++;var d=c.vertices.length;c.__vertexArray=new Float32Array(3*d);c.__colorArray=new Float32Array(3*d);c.__lineDistanceArray=new Float32Array(1*d);c.__webglLineCount=d;b(a);c.verticesNeedUpdate=!0;c.colorsNeedUpdate=!0;c.lineDistancesNeedUpdate=!0}}else a instanceof THREE.PointCloud&&void 0===c.__webglVertexBuffer&&(c.__webglVertexBuffer=
m.createBuffer(),c.__webglColorBuffer=m.createBuffer(),B.info.memory.geometries++,d=c.vertices.length,c.__vertexArray=new Float32Array(3*d),c.__colorArray=new Float32Array(3*d),c.__webglParticleCount=d,b(a),c.verticesNeedUpdate=!0,c.colorsNeedUpdate=!0);if(void 0===a.__webglActive)if(a.__webglActive=!0,a instanceof THREE.Mesh)if(c instanceof THREE.BufferGeometry)n(ba,c,a);else{if(c instanceof THREE.Geometry)for(var c=Ua[c.id],d=0,e=c.length;d<e;d++)n(ba,c[d],a)}else a instanceof THREE.Line||a instanceof
THREE.PointCloud?n(ba,c,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&qa.push({id:null,object:a,opaque:null,transparent:null,z:0});if(a instanceof THREE.Light)ca.push(a);else if(a instanceof THREE.Sprite)Xa.push(a);else if(a instanceof THREE.LensFlare)Ya.push(a);else if((c=ba[a.id])&&(!1===a.frustumCulled||!0===cb.intersectsObject(a)))for(d=0,e=c.length;d<e;d++){var f=c[d],g=f,k=g.object,l=g.buffer,p=k.geometry,k=k.material;k instanceof THREE.MeshFaceMaterial?(k=k.materials[p instanceof
THREE.BufferGeometry?0:l.materialIndex],g.material=k,k.transparent?Qa.push(g):Ka.push(g)):k&&(g.material=k,k.transparent?Qa.push(g):Ka.push(g));f.render=!0;!0===B.sortObjects&&(wa.setFromMatrixPosition(a.matrixWorld),wa.applyProjection(db),f.z=wa.z)}}d=0;for(e=a.children.length;d<e;d++)h(a.children[d])}}function k(a,b,c,d,e){for(var f,g=0,h=a.length;g<h;g++){f=a[g];var k=f.object,m=f.buffer;w(k,b);if(e)f=e;else{f=f.material;if(!f)continue;u(f)}B.setMaterialFaces(f);m instanceof THREE.BufferGeometry?
B.renderBufferDirect(b,c,d,f,m,k):B.renderBuffer(b,c,d,f,m,k)}}function l(a,b,c,d,e,f){for(var g,h=0,k=a.length;h<k;h++){g=a[h];var m=g.object;if(m.visible){if(f)g=f;else{g=g[b];if(!g)continue;u(g)}B.renderImmediateObject(c,d,e,g,m)}}}function p(a){var b=a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function q(a,b){var d=a.material,e=!1;if(void 0===Ua[b.id]||!0===b.groupsNeedUpdate){delete ba[a.id];for(var f=Ua,g=b.id,d=d instanceof THREE.MeshFaceMaterial,
h=da.get("OES_element_index_uint")?4294967296:65535,k,e={},l=b.morphTargets.length,p=b.morphNormals.length,q,s={},t=[],r=0,w=b.faces.length;r<w;r++){k=b.faces[r];var u=d?k.materialIndex:0;u in e||(e[u]={hash:u,counter:0});k=e[u].hash+"_"+e[u].counter;k in s||(q={id:Qb++,faces3:[],materialIndex:u,vertices:0,numMorphTargets:l,numMorphNormals:p},s[k]=q,t.push(q));s[k].vertices+3>h&&(e[u].counter+=1,k=e[u].hash+"_"+e[u].counter,k in s||(q={id:Qb++,faces3:[],materialIndex:u,vertices:0,numMorphTargets:l,
numMorphNormals:p},s[k]=q,t.push(q)));s[k].faces3.push(r);s[k].vertices+=3}f[g]=t;b.groupsNeedUpdate=!1}f=Ua[b.id];g=0;for(d=f.length;g<d;g++){h=f[g];if(void 0===h.__webglVertexBuffer){e=h;e.__webglVertexBuffer=m.createBuffer();e.__webglNormalBuffer=m.createBuffer();e.__webglTangentBuffer=m.createBuffer();e.__webglColorBuffer=m.createBuffer();e.__webglUVBuffer=m.createBuffer();e.__webglUV2Buffer=m.createBuffer();e.__webglSkinIndicesBuffer=m.createBuffer();e.__webglSkinWeightsBuffer=m.createBuffer();
e.__webglFaceBuffer=m.createBuffer();e.__webglLineBuffer=m.createBuffer();if(p=e.numMorphTargets)for(e.__webglMorphTargetsBuffers=[],l=0;l<p;l++)e.__webglMorphTargetsBuffers.push(m.createBuffer());if(p=e.numMorphNormals)for(e.__webglMorphNormalsBuffers=[],l=0;l<p;l++)e.__webglMorphNormalsBuffers.push(m.createBuffer());B.info.memory.geometries++;e=h;r=a;w=r.geometry;p=e.faces3;l=3*p.length;s=1*p.length;t=3*p.length;p=c(r,e);e.__vertexArray=new Float32Array(3*l);e.__normalArray=new Float32Array(3*l);
e.__colorArray=new Float32Array(3*l);e.__uvArray=new Float32Array(2*l);1<w.faceVertexUvs.length&&(e.__uv2Array=new Float32Array(2*l));w.hasTangents&&(e.__tangentArray=new Float32Array(4*l));r.geometry.skinWeights.length&&r.geometry.skinIndices.length&&(e.__skinIndexArray=new Float32Array(4*l),e.__skinWeightArray=new Float32Array(4*l));r=null!==da.get("OES_element_index_uint")&&21845<s?Uint32Array:Uint16Array;e.__typeArray=r;e.__faceArray=new r(3*s);e.__lineArray=new r(2*t);if(w=e.numMorphTargets)for(e.__morphTargetsArrays=
[],r=0;r<w;r++)e.__morphTargetsArrays.push(new Float32Array(3*l));if(w=e.numMorphNormals)for(e.__morphNormalsArrays=[],r=0;r<w;r++)e.__morphNormalsArrays.push(new Float32Array(3*l));e.__webglFaceCount=3*s;e.__webglLineCount=2*t;if(p.attributes)for(s in void 0===e.__webglCustomAttributesList&&(e.__webglCustomAttributesList=[]),s=void 0,p.attributes){var t=p.attributes[s],r={},v;for(v in t)r[v]=t[v];if(!r.__webglInitialized||r.createUniqueBuffers)r.__webglInitialized=!0,w=1,"v2"===r.type?w=2:"v3"===
r.type?w=3:"v4"===r.type?w=4:"c"===r.type&&(w=3),r.size=w,r.array=new Float32Array(l*w),r.buffer=m.createBuffer(),r.buffer.belongsToAttribute=s,t.needsUpdate=!0,r.__original=t;e.__webglCustomAttributesList.push(r)}e.__inittedArrays=!0;b.verticesNeedUpdate=!0;b.morphTargetsNeedUpdate=!0;b.elementsNeedUpdate=!0;b.uvsNeedUpdate=!0;b.normalsNeedUpdate=!0;b.tangentsNeedUpdate=!0;e=b.colorsNeedUpdate=!0}else e=!1;(e||void 0===a.__webglActive)&&n(ba,h,a)}a.__webglActive=!0}function n(a,b,c){var d=c.id;a[d]=
a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function t(a){var b=a.geometry;if(b instanceof THREE.BufferGeometry)for(var d=b.attributes,e=b.attributesKeys,f=0,g=e.length;f<g;f++){var h=e[f],k=d[h],n="index"===h?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER;void 0===k.buffer?(k.buffer=m.createBuffer(),m.bindBuffer(n,k.buffer),m.bufferData(n,k.array,k instanceof THREE.DynamicBufferAttribute?m.DYNAMIC_DRAW:m.STATIC_DRAW),k.needsUpdate=!1):!0===k.needsUpdate&&(m.bindBuffer(n,k.buffer),void 0===
k.updateRange||-1===k.updateRange.count?m.bufferSubData(n,0,k.array):0===k.updateRange.count?console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually."):(m.bufferSubData(n,k.updateRange.offset*k.array.BYTES_PER_ELEMENT,k.array.subarray(k.updateRange.offset,k.updateRange.offset+k.updateRange.count)),k.updateRange.count=0),k.needsUpdate=!1)}else if(a instanceof THREE.Mesh){!0===
b.groupsNeedUpdate&&q(a,b);for(var l=Ua[b.id],f=0,p=l.length;f<p;f++){var t=l[f],w=c(a,t),u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.morphTargetsNeedUpdate||b.elementsNeedUpdate||b.uvsNeedUpdate||b.normalsNeedUpdate||b.colorsNeedUpdate||b.tangentsNeedUpdate||u){var v=t,x=a,D=m.DYNAMIC_DRAW,A=!b.dynamic,E=w;if(v.__inittedArrays){var G=!1===E instanceof THREE.MeshPhongMaterial&&E.shading===THREE.FlatShading,y=void 0,z=void 0,F=void 0,B=void 0,I=void 0,H=void 0,M=void 0,R=void 0,P=void 0,U=void 0,
O=void 0,J=void 0,L=void 0,N=void 0,Ka=void 0,V=void 0,W=void 0,Qa=void 0,Ya=void 0,Xa=void 0,da=void 0,ba=void 0,ja=void 0,Pa=void 0,ka=void 0,Q=void 0,ha=void 0,ia=void 0,ob=void 0,Y=void 0,ub=void 0,pa=void 0,ab=void 0,oa=void 0,ca=void 0,qa=void 0,Ca=void 0,ta=void 0,na=void 0,wa=void 0,La=0,Ma=0,kb=0,yb=0,zb=0,Ra=0,Aa=0,eb=0,Ha=0,la=0,ra=0,K=0,za=void 0,Sa=v.__vertexArray,Ab=v.__uvArray,lb=v.__uv2Array,Na=v.__normalArray,sa=v.__tangentArray,Da=v.__colorArray,Ea=v.__skinIndexArray,Fa=v.__skinWeightArray,
Gb=v.__morphTargetsArrays,Bb=v.__morphNormalsArrays,mb=v.__webglCustomAttributesList,C=void 0,Va=v.__faceArray,Ta=v.__lineArray,ea=x.geometry,fb=ea.elementsNeedUpdate,vb=ea.uvsNeedUpdate,Mb=ea.normalsNeedUpdate,Ob=ea.tangentsNeedUpdate,ib=ea.colorsNeedUpdate,sb=ea.morphTargetsNeedUpdate,Cb=ea.vertices,$=v.faces3,xa=ea.faces,Hb=ea.faceVertexUvs[0],Oa=ea.faceVertexUvs[1],$a=ea.skinIndices,Ga=ea.skinWeights,nb=ea.morphTargets,bb=ea.morphNormals;if(ea.verticesNeedUpdate){y=0;for(z=$.length;y<z;y++)B=
xa[$[y]],J=Cb[B.a],L=Cb[B.b],N=Cb[B.c],Sa[Ma]=J.x,Sa[Ma+1]=J.y,Sa[Ma+2]=J.z,Sa[Ma+3]=L.x,Sa[Ma+4]=L.y,Sa[Ma+5]=L.z,Sa[Ma+6]=N.x,Sa[Ma+7]=N.y,Sa[Ma+8]=N.z,Ma+=9;m.bindBuffer(m.ARRAY_BUFFER,v.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Sa,D)}if(sb)for(ca=0,qa=nb.length;ca<qa;ca++){y=ra=0;for(z=$.length;y<z;y++)na=$[y],B=xa[na],J=nb[ca].vertices[B.a],L=nb[ca].vertices[B.b],N=nb[ca].vertices[B.c],Ca=Gb[ca],Ca[ra]=J.x,Ca[ra+1]=J.y,Ca[ra+2]=J.z,Ca[ra+3]=L.x,Ca[ra+4]=L.y,Ca[ra+5]=L.z,Ca[ra+6]=N.x,Ca[ra+
7]=N.y,Ca[ra+8]=N.z,E.morphNormals&&(G?Xa=Ya=Qa=bb[ca].faceNormals[na]:(wa=bb[ca].vertexNormals[na],Qa=wa.a,Ya=wa.b,Xa=wa.c),ta=Bb[ca],ta[ra]=Qa.x,ta[ra+1]=Qa.y,ta[ra+2]=Qa.z,ta[ra+3]=Ya.x,ta[ra+4]=Ya.y,ta[ra+5]=Ya.z,ta[ra+6]=Xa.x,ta[ra+7]=Xa.y,ta[ra+8]=Xa.z),ra+=9;m.bindBuffer(m.ARRAY_BUFFER,v.__webglMorphTargetsBuffers[ca]);m.bufferData(m.ARRAY_BUFFER,Gb[ca],D);E.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglMorphNormalsBuffers[ca]),m.bufferData(m.ARRAY_BUFFER,Bb[ca],D))}if(Ga.length){y=0;
for(z=$.length;y<z;y++)B=xa[$[y]],Pa=Ga[B.a],ka=Ga[B.b],Q=Ga[B.c],Fa[la]=Pa.x,Fa[la+1]=Pa.y,Fa[la+2]=Pa.z,Fa[la+3]=Pa.w,Fa[la+4]=ka.x,Fa[la+5]=ka.y,Fa[la+6]=ka.z,Fa[la+7]=ka.w,Fa[la+8]=Q.x,Fa[la+9]=Q.y,Fa[la+10]=Q.z,Fa[la+11]=Q.w,ha=$a[B.a],ia=$a[B.b],ob=$a[B.c],Ea[la]=ha.x,Ea[la+1]=ha.y,Ea[la+2]=ha.z,Ea[la+3]=ha.w,Ea[la+4]=ia.x,Ea[la+5]=ia.y,Ea[la+6]=ia.z,Ea[la+7]=ia.w,Ea[la+8]=ob.x,Ea[la+9]=ob.y,Ea[la+10]=ob.z,Ea[la+11]=ob.w,la+=12;0<la&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglSkinIndicesBuffer),
m.bufferData(m.ARRAY_BUFFER,Ea,D),m.bindBuffer(m.ARRAY_BUFFER,v.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,Fa,D))}if(ib){y=0;for(z=$.length;y<z;y++)B=xa[$[y]],M=B.vertexColors,R=B.color,3===M.length&&E.vertexColors===THREE.VertexColors?(da=M[0],ba=M[1],ja=M[2]):ja=ba=da=R,Da[Ha]=da.r,Da[Ha+1]=da.g,Da[Ha+2]=da.b,Da[Ha+3]=ba.r,Da[Ha+4]=ba.g,Da[Ha+5]=ba.b,Da[Ha+6]=ja.r,Da[Ha+7]=ja.g,Da[Ha+8]=ja.b,Ha+=9;0<Ha&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Da,
D))}if(Ob&&ea.hasTangents){y=0;for(z=$.length;y<z;y++)B=xa[$[y]],P=B.vertexTangents,Ka=P[0],V=P[1],W=P[2],sa[Aa]=Ka.x,sa[Aa+1]=Ka.y,sa[Aa+2]=Ka.z,sa[Aa+3]=Ka.w,sa[Aa+4]=V.x,sa[Aa+5]=V.y,sa[Aa+6]=V.z,sa[Aa+7]=V.w,sa[Aa+8]=W.x,sa[Aa+9]=W.y,sa[Aa+10]=W.z,sa[Aa+11]=W.w,Aa+=12;m.bindBuffer(m.ARRAY_BUFFER,v.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,sa,D)}if(Mb){y=0;for(z=$.length;y<z;y++)if(B=xa[$[y]],I=B.vertexNormals,H=B.normal,3===I.length&&!1===G)for(Y=0;3>Y;Y++)pa=I[Y],Na[Ra]=pa.x,Na[Ra+1]=
pa.y,Na[Ra+2]=pa.z,Ra+=3;else for(Y=0;3>Y;Y++)Na[Ra]=H.x,Na[Ra+1]=H.y,Na[Ra+2]=H.z,Ra+=3;m.bindBuffer(m.ARRAY_BUFFER,v.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,Na,D)}if(vb&&Hb){y=0;for(z=$.length;y<z;y++)if(F=$[y],U=Hb[F],void 0!==U)for(Y=0;3>Y;Y++)ab=U[Y],Ab[kb]=ab.x,Ab[kb+1]=ab.y,kb+=2;0<kb&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,Ab,D))}if(vb&&Oa){y=0;for(z=$.length;y<z;y++)if(F=$[y],O=Oa[F],void 0!==O)for(Y=0;3>Y;Y++)oa=O[Y],lb[yb]=oa.x,lb[yb+1]=oa.y,
yb+=2;0<yb&&(m.bindBuffer(m.ARRAY_BUFFER,v.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,lb,D))}if(fb){y=0;for(z=$.length;y<z;y++)Va[zb]=La,Va[zb+1]=La+1,Va[zb+2]=La+2,zb+=3,Ta[eb]=La,Ta[eb+1]=La+1,Ta[eb+2]=La,Ta[eb+3]=La+2,Ta[eb+4]=La+1,Ta[eb+5]=La+2,eb+=6,La+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Va,D);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,Ta,D)}if(mb)for(Y=0,ub=mb.length;Y<ub;Y++)if(C=
mb[Y],C.__original.needsUpdate){K=0;if(1===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],C.array[K]=C.value[B.a],C.array[K+1]=C.value[B.b],C.array[K+2]=C.value[B.c],K+=3;else{if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],C.array[K]=za,C.array[K+1]=za,C.array[K+2]=za,K+=3}else if(2===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J.x,
C.array[K+1]=J.y,C.array[K+2]=L.x,C.array[K+3]=L.y,C.array[K+4]=N.x,C.array[K+5]=N.y,K+=6;else{if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=L.x,C.array[K+3]=L.y,C.array[K+4]=N.x,C.array[K+5]=N.y,K+=6}else if(3===C.size){var T;T="c"===C.type?["r","g","b"]:["x","y","z"];if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J[T[0]],C.array[K+1]=
J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9;else if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J[T[0]],C.array[K+1]=J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9;else if("faceVertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],
J=za[0],L=za[1],N=za[2],C.array[K]=J[T[0]],C.array[K+1]=J[T[1]],C.array[K+2]=J[T[2]],C.array[K+3]=L[T[0]],C.array[K+4]=L[T[1]],C.array[K+5]=L[T[2]],C.array[K+6]=N[T[0]],C.array[K+7]=N[T[1]],C.array[K+8]=N[T[2]],K+=9}else if(4===C.size)if(void 0===C.boundTo||"vertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)B=xa[$[y]],J=C.value[B.a],L=C.value[B.b],N=C.value[B.c],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+
8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;else if("faces"===C.boundTo)for(y=0,z=$.length;y<z;y++)N=L=J=za=C.value[$[y]],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;else if("faceVertices"===C.boundTo)for(y=0,z=$.length;y<z;y++)za=C.value[$[y]],J=za[0],L=za[1],N=za[2],C.array[K]=J.x,C.array[K+1]=J.y,C.array[K+2]=
J.z,C.array[K+3]=J.w,C.array[K+4]=L.x,C.array[K+5]=L.y,C.array[K+6]=L.z,C.array[K+7]=L.w,C.array[K+8]=N.x,C.array[K+9]=N.y,C.array[K+10]=N.z,C.array[K+11]=N.w,K+=12;m.bindBuffer(m.ARRAY_BUFFER,C.buffer);m.bufferData(m.ARRAY_BUFFER,C.array,D)}A&&(delete v.__inittedArrays,delete v.__colorArray,delete v.__normalArray,delete v.__tangentArray,delete v.__uvArray,delete v.__uv2Array,delete v.__faceArray,delete v.__vertexArray,delete v.__lineArray,delete v.__skinIndexArray,delete v.__skinWeightArray)}}}b.verticesNeedUpdate=
!1;b.morphTargetsNeedUpdate=!1;b.elementsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.tangentsNeedUpdate=!1;w.attributes&&s(w)}else if(a instanceof THREE.Line){w=c(a,b);u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.colorsNeedUpdate||b.lineDistancesNeedUpdate||u){var Db=m.DYNAMIC_DRAW,S,aa,Z,Ba,X,Eb,Rb=b.vertices,Ib=b.colors,gb=b.lineDistances,ya=Rb.length,pb=Ib.length,qb=gb.length,Wa=b.__vertexArray,tb=b.__colorArray,hb=b.__lineDistanceArray,$b=b.colorsNeedUpdate,
Fb=b.lineDistancesNeedUpdate,Sb=b.__webglCustomAttributesList,Jb,cb,ua,Kb,Ia,fa;if(b.verticesNeedUpdate){for(S=0;S<ya;S++)Ba=Rb[S],X=3*S,Wa[X]=Ba.x,Wa[X+1]=Ba.y,Wa[X+2]=Ba.z;m.bindBuffer(m.ARRAY_BUFFER,b.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,Wa,Db)}if($b){for(aa=0;aa<pb;aa++)Eb=Ib[aa],X=3*aa,tb[X]=Eb.r,tb[X+1]=Eb.g,tb[X+2]=Eb.b;m.bindBuffer(m.ARRAY_BUFFER,b.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,tb,Db)}if(Fb){for(Z=0;Z<qb;Z++)hb[Z]=gb[Z];m.bindBuffer(m.ARRAY_BUFFER,b.__webglLineDistanceBuffer);
m.bufferData(m.ARRAY_BUFFER,hb,Db)}if(Sb)for(Jb=0,cb=Sb.length;Jb<cb;Jb++)if(fa=Sb[Jb],fa.needsUpdate&&(void 0===fa.boundTo||"vertices"===fa.boundTo)){X=0;Kb=fa.value.length;if(1===fa.size)for(ua=0;ua<Kb;ua++)fa.array[ua]=fa.value[ua];else if(2===fa.size)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,X+=2;else if(3===fa.size)if("c"===fa.type)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.r,fa.array[X+1]=Ia.g,fa.array[X+2]=Ia.b,X+=3;else for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],
fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,fa.array[X+2]=Ia.z,X+=3;else if(4===fa.size)for(ua=0;ua<Kb;ua++)Ia=fa.value[ua],fa.array[X]=Ia.x,fa.array[X+1]=Ia.y,fa.array[X+2]=Ia.z,fa.array[X+3]=Ia.w,X+=4;m.bindBuffer(m.ARRAY_BUFFER,fa.buffer);m.bufferData(m.ARRAY_BUFFER,fa.array,Db);fa.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;b.lineDistancesNeedUpdate=!1;w.attributes&&s(w)}else if(a instanceof THREE.PointCloud){w=c(a,b);u=w.attributes&&r(w);if(b.verticesNeedUpdate||b.colorsNeedUpdate||
u){var db=m.DYNAMIC_DRAW,Tb,Ub,ac,ma,bc,Nb=b.vertices,Vb=Nb.length,Pb=b.colors,rb=Pb.length,cc=b.__vertexArray,dc=b.__colorArray,wb=b.colorsNeedUpdate,gc=b.__webglCustomAttributesList,ec,jb,va,Lb,Ja,ga;if(b.verticesNeedUpdate){for(Tb=0;Tb<Vb;Tb++)ac=Nb[Tb],ma=3*Tb,cc[ma]=ac.x,cc[ma+1]=ac.y,cc[ma+2]=ac.z;m.bindBuffer(m.ARRAY_BUFFER,b.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,cc,db)}if(wb){for(Ub=0;Ub<rb;Ub++)bc=Pb[Ub],ma=3*Ub,dc[ma]=bc.r,dc[ma+1]=bc.g,dc[ma+2]=bc.b;m.bindBuffer(m.ARRAY_BUFFER,
b.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,dc,db)}if(gc)for(ec=0,jb=gc.length;ec<jb;ec++){ga=gc[ec];if(ga.needsUpdate&&(void 0===ga.boundTo||"vertices"===ga.boundTo))if(Lb=ga.value.length,ma=0,1===ga.size)for(va=0;va<Lb;va++)ga.array[va]=ga.value[va];else if(2===ga.size)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ma+=2;else if(3===ga.size)if("c"===ga.type)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.r,ga.array[ma+1]=Ja.g,ga.array[ma+2]=Ja.b,ma+=3;else for(va=
0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ga.array[ma+2]=Ja.z,ma+=3;else if(4===ga.size)for(va=0;va<Lb;va++)Ja=ga.value[va],ga.array[ma]=Ja.x,ga.array[ma+1]=Ja.y,ga.array[ma+2]=Ja.z,ga.array[ma+3]=Ja.w,ma+=4;m.bindBuffer(m.ARRAY_BUFFER,ga.buffer);m.bufferData(m.ARRAY_BUFFER,ga.array,db);ga.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;w.attributes&&s(w)}}function r(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function s(a){for(var b in a.attributes)a.attributes[b].needsUpdate=
!1}function u(a){!0===a.transparent?W.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha):W.setBlending(THREE.NoBlending);W.setDepthTest(a.depthTest);W.setDepthWrite(a.depthWrite);W.setColorWrite(a.colorWrite);W.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function v(a,b,c,d,e){var f,g,h,k;Mb=0;if(d.needsUpdate){d.program&&hc(d);d.addEventListener("dispose",ic);var n=pc[d.type];if(n){var l=THREE.ShaderLib[n];
d.__webglShader={uniforms:THREE.UniformsUtils.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}}else d.__webglShader={uniforms:d.uniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader};for(var p=0,q=0,r=0,s=0,t=0,w=b.length;t<w;t++){var v=b[t];v.onlyShadow||!1===v.visible||(v instanceof THREE.DirectionalLight&&p++,v instanceof THREE.PointLight&&q++,v instanceof THREE.SpotLight&&r++,v instanceof THREE.HemisphereLight&&s++)}f=p;g=q;h=r;k=s;for(var u,z=0,G=
0,F=b.length;G<F;G++){var J=b[G];J.castShadow&&(J instanceof THREE.SpotLight&&z++,J instanceof THREE.DirectionalLight&&!J.shadowCascade&&z++)}u=z;var H;if(Nb&&e&&e.skeleton&&e.skeleton.useVertexTexture)H=1024;else{var N=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),M=Math.floor((N-20)/4);void 0!==e&&e instanceof THREE.SkinnedMesh&&(M=Math.min(e.skeleton.bones.length,M),M<e.skeleton.bones.length&&THREE.warn("WebGLRenderer: too many bones - "+e.skeleton.bones.length+", this GPU supports just "+M+" (try OpenGL instead of ANGLE)"));
H=M}var P={precision:L,supportsVertexTextures:Vb,map:!!d.map,envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,lightMap:!!d.lightMap,bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,combine:d.combine,vertexColors:d.vertexColors,fog:c,useFog:d.fog,fogExp:c instanceof THREE.FogExp2,flatShading:d.shading===THREE.FlatShading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:ja,skinning:d.skinning,maxBones:H,useVertexTexture:Nb&&e&&e.skeleton&&
e.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:B.maxMorphTargets,maxMorphNormals:B.maxMorphNormals,maxDirLights:f,maxPointLights:g,maxSpotLights:h,maxHemiLights:k,maxShadows:u,shadowMapEnabled:B.shadowMapEnabled&&e.receiveShadow&&0<u,shadowMapType:B.shadowMapType,shadowMapDebug:B.shadowMapDebug,shadowMapCascade:B.shadowMapCascade,alphaTest:d.alphaTest,metal:d.metal,wrapAround:d.wrapAround,doubleSided:d.side===THREE.DoubleSide,flipSided:d.side===
THREE.BackSide},R=[];n?R.push(n):(R.push(d.fragmentShader),R.push(d.vertexShader));if(void 0!==d.defines)for(var O in d.defines)R.push(O),R.push(d.defines[O]);for(O in P)R.push(O),R.push(P[O]);for(var Ka=R.join(),V,W=0,Qa=Pa.length;W<Qa;W++){var Ya=Pa[W];if(Ya.code===Ka){V=Ya;V.usedTimes++;break}}void 0===V&&(V=new THREE.WebGLProgram(B,Ka,d,P),Pa.push(V),B.info.memory.programs=Pa.length);d.program=V;var Xa=V.attributes;if(d.morphTargets){d.numSupportedMorphTargets=0;for(var ca,da="morphTarget",ba=
0;ba<B.maxMorphTargets;ba++)ca=da+ba,0<=Xa[ca]&&d.numSupportedMorphTargets++}if(d.morphNormals)for(d.numSupportedMorphNormals=0,da="morphNormal",ba=0;ba<B.maxMorphNormals;ba++)ca=da+ba,0<=Xa[ca]&&d.numSupportedMorphNormals++;d.uniformsList=[];for(var ha in d.__webglShader.uniforms){var ta=d.program.uniforms[ha];ta&&d.uniformsList.push([d.__webglShader.uniforms[ha],ta])}d.needsUpdate=!1}d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(B.maxMorphTargets));
var ab=!1,oa=!1,qa=!1,Ua=d.program,ka=Ua.uniforms,Q=d.__webglShader.uniforms;Ua.id!==ob&&(m.useProgram(Ua.program),ob=Ua.id,qa=oa=ab=!0);d.id!==ub&&(-1===ub&&(qa=!0),ub=d.id,oa=!0);if(ab||a!==vb)m.uniformMatrix4fv(ka.projectionMatrix,!1,a.projectionMatrix.elements),ja&&m.uniform1f(ka.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==vb&&(vb=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==ka.cameraPosition&&(wa.setFromMatrixPosition(a.matrixWorld),m.uniform3f(ka.cameraPosition,
wa.x,wa.y,wa.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==ka.viewMatrix&&m.uniformMatrix4fv(ka.viewMatrix,!1,a.matrixWorldInverse.elements);if(d.skinning)if(e.bindMatrix&&null!==ka.bindMatrix&&m.uniformMatrix4fv(ka.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==ka.bindMatrixInverse&&m.uniformMatrix4fv(ka.bindMatrixInverse,!1,e.bindMatrixInverse.elements),
Nb&&e.skeleton&&e.skeleton.useVertexTexture){if(null!==ka.boneTexture){var db=D();m.uniform1i(ka.boneTexture,db);B.setTexture(e.skeleton.boneTexture,db)}null!==ka.boneTextureWidth&&m.uniform1i(ka.boneTextureWidth,e.skeleton.boneTextureWidth);null!==ka.boneTextureHeight&&m.uniform1i(ka.boneTextureHeight,e.skeleton.boneTextureHeight)}else e.skeleton&&e.skeleton.boneMatrices&&null!==ka.boneGlobalMatrices&&m.uniformMatrix4fv(ka.boneGlobalMatrices,!1,e.skeleton.boneMatrices);if(oa){c&&d.fog&&(Q.fogColor.value=
c.color,c instanceof THREE.Fog?(Q.fogNear.value=c.near,Q.fogFar.value=c.far):c instanceof THREE.FogExp2&&(Q.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(Ob){var qa=!0,ia,Za,Y,bb=0,cb=0,ib=0,xb,pb,qb,Ca,jb,na=jc,rb=na.directional.colors,La=na.directional.positions,Ma=na.point.colors,kb=na.point.positions,yb=na.point.distances,zb=na.point.decays,Ra=na.spot.colors,Aa=na.spot.positions,eb=na.spot.distances,Ha=na.spot.directions,
la=na.spot.anglesCos,ra=na.spot.exponents,K=na.spot.decays,za=na.hemi.skyColors,Sa=na.hemi.groundColors,Ab=na.hemi.positions,lb=0,Na=0,sa=0,Da=0,Ea=0,Fa=0,Gb=0,Bb=0,mb=0,C=0,Va=0,Ta=0;ia=0;for(Za=b.length;ia<Za;ia++)Y=b[ia],Y.onlyShadow||(xb=Y.color,Ca=Y.intensity,jb=Y.distance,Y instanceof THREE.AmbientLight?Y.visible&&(bb+=xb.r,cb+=xb.g,ib+=xb.b):Y instanceof THREE.DirectionalLight?(Ea+=1,Y.visible&&(pa.setFromMatrixPosition(Y.matrixWorld),wa.setFromMatrixPosition(Y.target.matrixWorld),pa.sub(wa),
pa.normalize(),mb=3*lb,La[mb]=pa.x,La[mb+1]=pa.y,La[mb+2]=pa.z,y(rb,mb,xb,Ca),lb+=1)):Y instanceof THREE.PointLight?(Fa+=1,Y.visible&&(C=3*Na,y(Ma,C,xb,Ca),wa.setFromMatrixPosition(Y.matrixWorld),kb[C]=wa.x,kb[C+1]=wa.y,kb[C+2]=wa.z,yb[Na]=jb,zb[Na]=0===Y.distance?0:Y.decay,Na+=1)):Y instanceof THREE.SpotLight?(Gb+=1,Y.visible&&(Va=3*sa,y(Ra,Va,xb,Ca),pa.setFromMatrixPosition(Y.matrixWorld),Aa[Va]=pa.x,Aa[Va+1]=pa.y,Aa[Va+2]=pa.z,eb[sa]=jb,wa.setFromMatrixPosition(Y.target.matrixWorld),pa.sub(wa),
pa.normalize(),Ha[Va]=pa.x,Ha[Va+1]=pa.y,Ha[Va+2]=pa.z,la[sa]=Math.cos(Y.angle),ra[sa]=Y.exponent,K[sa]=0===Y.distance?0:Y.decay,sa+=1)):Y instanceof THREE.HemisphereLight&&(Bb+=1,Y.visible&&(pa.setFromMatrixPosition(Y.matrixWorld),pa.normalize(),Ta=3*Da,Ab[Ta]=pa.x,Ab[Ta+1]=pa.y,Ab[Ta+2]=pa.z,pb=Y.color,qb=Y.groundColor,y(za,Ta,pb,Ca),y(Sa,Ta,qb,Ca),Da+=1)));ia=3*lb;for(Za=Math.max(rb.length,3*Ea);ia<Za;ia++)rb[ia]=0;ia=3*Na;for(Za=Math.max(Ma.length,3*Fa);ia<Za;ia++)Ma[ia]=0;ia=3*sa;for(Za=Math.max(Ra.length,
3*Gb);ia<Za;ia++)Ra[ia]=0;ia=3*Da;for(Za=Math.max(za.length,3*Bb);ia<Za;ia++)za[ia]=0;ia=3*Da;for(Za=Math.max(Sa.length,3*Bb);ia<Za;ia++)Sa[ia]=0;na.directional.length=lb;na.point.length=Na;na.spot.length=sa;na.hemi.length=Da;na.ambient[0]=bb;na.ambient[1]=cb;na.ambient[2]=ib;Ob=!1}if(qa){var ea=jc;Q.ambientLightColor.value=ea.ambient;Q.directionalLightColor.value=ea.directional.colors;Q.directionalLightDirection.value=ea.directional.positions;Q.pointLightColor.value=ea.point.colors;Q.pointLightPosition.value=
ea.point.positions;Q.pointLightDistance.value=ea.point.distances;Q.pointLightDecay.value=ea.point.decays;Q.spotLightColor.value=ea.spot.colors;Q.spotLightPosition.value=ea.spot.positions;Q.spotLightDistance.value=ea.spot.distances;Q.spotLightDirection.value=ea.spot.directions;Q.spotLightAngleCos.value=ea.spot.anglesCos;Q.spotLightExponent.value=ea.spot.exponents;Q.spotLightDecay.value=ea.spot.decays;Q.hemisphereLightSkyColor.value=ea.hemi.skyColors;Q.hemisphereLightGroundColor.value=ea.hemi.groundColors;
Q.hemisphereLightDirection.value=ea.hemi.positions;x(Q,!0)}else x(Q,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){Q.opacity.value=d.opacity;Q.diffuse.value=d.color;Q.map.value=d.map;Q.lightMap.value=d.lightMap;Q.specularMap.value=d.specularMap;Q.alphaMap.value=d.alphaMap;d.bumpMap&&(Q.bumpMap.value=d.bumpMap,Q.bumpScale.value=d.bumpScale);d.normalMap&&(Q.normalMap.value=d.normalMap,Q.normalScale.value.copy(d.normalScale));
var fb;d.map?fb=d.map:d.specularMap?fb=d.specularMap:d.normalMap?fb=d.normalMap:d.bumpMap?fb=d.bumpMap:d.alphaMap&&(fb=d.alphaMap);if(void 0!==fb){var wb=fb.offset,Qb=fb.repeat;Q.offsetRepeat.value.set(wb.x,wb.y,Qb.x,Qb.y)}Q.envMap.value=d.envMap;Q.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;Q.reflectivity.value=d.reflectivity;Q.refractionRatio.value=d.refractionRatio}if(d instanceof THREE.LineBasicMaterial)Q.diffuse.value=d.color,Q.opacity.value=d.opacity;else if(d instanceof
THREE.LineDashedMaterial)Q.diffuse.value=d.color,Q.opacity.value=d.opacity,Q.dashSize.value=d.dashSize,Q.totalSize.value=d.dashSize+d.gapSize,Q.scale.value=d.scale;else if(d instanceof THREE.PointCloudMaterial){if(Q.psColor.value=d.color,Q.opacity.value=d.opacity,Q.size.value=d.size,Q.scale.value=U.height/2,Q.map.value=d.map,null!==d.map){var Wb=d.map.offset,Xb=d.map.repeat;Q.offsetRepeat.value.set(Wb.x,Wb.y,Xb.x,Xb.y)}}else d instanceof THREE.MeshPhongMaterial?(Q.shininess.value=d.shininess,Q.emissive.value=
d.emissive,Q.specular.value=d.specular,d.wrapAround&&Q.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(Q.emissive.value=d.emissive,d.wrapAround&&Q.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(Q.mNear.value=a.near,Q.mFar.value=a.far,Q.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(Q.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&Q.shadowMatrix)for(var sb=0,Cb=0,$=b.length;Cb<$;Cb++){var xa=b[Cb];xa.castShadow&&(xa instanceof
THREE.SpotLight||xa instanceof THREE.DirectionalLight&&!xa.shadowCascade)&&(Q.shadowMap.value[sb]=xa.shadowMap,Q.shadowMapSize.value[sb]=xa.shadowMapSize,Q.shadowMatrix.value[sb]=xa.shadowMatrix,Q.shadowDarkness.value[sb]=xa.shadowDarkness,Q.shadowBias.value[sb]=xa.shadowBias,sb++)}for(var Hb=d.uniformsList,Oa,$a,Ga,nb=0,fc=Hb.length;nb<fc;nb++){var T=Hb[nb][0];if(!1!==T.needsUpdate){var Db=T.type,S=T.value,aa=Hb[nb][1];switch(Db){case "1i":m.uniform1i(aa,S);break;case "1f":m.uniform1f(aa,S);break;
case "2f":m.uniform2f(aa,S[0],S[1]);break;case "3f":m.uniform3f(aa,S[0],S[1],S[2]);break;case "4f":m.uniform4f(aa,S[0],S[1],S[2],S[3]);break;case "1iv":m.uniform1iv(aa,S);break;case "3iv":m.uniform3iv(aa,S);break;case "1fv":m.uniform1fv(aa,S);break;case "2fv":m.uniform2fv(aa,S);break;case "3fv":m.uniform3fv(aa,S);break;case "4fv":m.uniform4fv(aa,S);break;case "Matrix3fv":m.uniformMatrix3fv(aa,!1,S);break;case "Matrix4fv":m.uniformMatrix4fv(aa,!1,S);break;case "i":m.uniform1i(aa,S);break;case "f":m.uniform1f(aa,
S);break;case "v2":m.uniform2f(aa,S.x,S.y);break;case "v3":m.uniform3f(aa,S.x,S.y,S.z);break;case "v4":m.uniform4f(aa,S.x,S.y,S.z,S.w);break;case "c":m.uniform3f(aa,S.r,S.g,S.b);break;case "iv1":m.uniform1iv(aa,S);break;case "iv":m.uniform3iv(aa,S);break;case "fv1":m.uniform1fv(aa,S);break;case "fv":m.uniform3fv(aa,S);break;case "v2v":void 0===T._array&&(T._array=new Float32Array(2*S.length));for(var Z=0,Ba=S.length;Z<Ba;Z++)Ga=2*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y;m.uniform2fv(aa,T._array);
break;case "v3v":void 0===T._array&&(T._array=new Float32Array(3*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)Ga=3*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y,T._array[Ga+2]=S[Z].z;m.uniform3fv(aa,T._array);break;case "v4v":void 0===T._array&&(T._array=new Float32Array(4*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)Ga=4*Z,T._array[Ga]=S[Z].x,T._array[Ga+1]=S[Z].y,T._array[Ga+2]=S[Z].z,T._array[Ga+3]=S[Z].w;m.uniform4fv(aa,T._array);break;case "m3":m.uniformMatrix3fv(aa,!1,S.elements);break;case "m3v":void 0===
T._array&&(T._array=new Float32Array(9*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)S[Z].flattenToArrayOffset(T._array,9*Z);m.uniformMatrix3fv(aa,!1,T._array);break;case "m4":m.uniformMatrix4fv(aa,!1,S.elements);break;case "m4v":void 0===T._array&&(T._array=new Float32Array(16*S.length));Z=0;for(Ba=S.length;Z<Ba;Z++)S[Z].flattenToArrayOffset(T._array,16*Z);m.uniformMatrix4fv(aa,!1,T._array);break;case "t":Oa=S;$a=D();m.uniform1i(aa,$a);if(!Oa)continue;if(Oa instanceof THREE.CubeTexture||Oa.image instanceof
Array&&6===Oa.image.length){var X=Oa,Eb=$a;if(6===X.image.length)if(X.needsUpdate){X.image.__webglTextureCube||(X.addEventListener("dispose",Pb),X.image.__webglTextureCube=m.createTexture(),B.info.memory.textures++);m.activeTexture(m.TEXTURE0+Eb);m.bindTexture(m.TEXTURE_CUBE_MAP,X.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,X.flipY);for(var Rb=X instanceof THREE.CompressedTexture,Ib=X.image[0]instanceof THREE.DataTexture,gb=[],ya=0;6>ya;ya++)gb[ya]=!B.autoScaleCubemaps||Rb||Ib?Ib?
X.image[ya].image:X.image[ya]:E(X.image[ya],qc);var Yb=gb[0],Zb=THREE.Math.isPowerOfTwo(Yb.width)&&THREE.Math.isPowerOfTwo(Yb.height),Wa=I(X.format),tb=I(X.type);A(m.TEXTURE_CUBE_MAP,X,Zb);for(ya=0;6>ya;ya++)if(Rb)for(var hb,$b=gb[ya].mipmaps,Fb=0,Sb=$b.length;Fb<Sb;Fb++)hb=$b[Fb],X.format!==THREE.RGBAFormat&&X.format!==THREE.RGBFormat?-1<kc().indexOf(Wa)?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,Fb,Wa,hb.width,hb.height,0,hb.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):
m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,Fb,Wa,hb.width,hb.height,0,Wa,tb,hb.data);else Ib?m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,0,Wa,gb[ya].width,gb[ya].height,0,Wa,tb,gb[ya].data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+ya,0,Wa,Wa,tb,gb[ya]);X.generateMipmaps&&Zb&&m.generateMipmap(m.TEXTURE_CUBE_MAP);X.needsUpdate=!1;if(X.onUpdate)X.onUpdate()}else m.activeTexture(m.TEXTURE0+Eb),m.bindTexture(m.TEXTURE_CUBE_MAP,X.image.__webglTextureCube)}else if(Oa instanceof THREE.WebGLRenderTargetCube){var Jb=
Oa;m.activeTexture(m.TEXTURE0+$a);m.bindTexture(m.TEXTURE_CUBE_MAP,Jb.__webglTexture)}else B.setTexture(Oa,$a);break;case "tv":void 0===T._array&&(T._array=[]);Z=0;for(Ba=T.value.length;Z<Ba;Z++)T._array[Z]=D();m.uniform1iv(aa,T._array);Z=0;for(Ba=T.value.length;Z<Ba;Z++)Oa=T.value[Z],$a=T._array[Z],Oa&&B.setTexture(Oa,$a);break;default:THREE.warn("THREE.WebGLRenderer: Unknown uniform type: "+Db)}}}}m.uniformMatrix4fv(ka.modelViewMatrix,!1,e._modelViewMatrix.elements);ka.normalMatrix&&m.uniformMatrix3fv(ka.normalMatrix,
!1,e._normalMatrix.elements);null!==ka.modelMatrix&&m.uniformMatrix4fv(ka.modelMatrix,!1,e.matrixWorld.elements);return Ua}function x(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.pointLightDecay.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=b;a.spotLightDirection.needsUpdate=
b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.spotLightDecay.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function D(){var a=Mb;a>=Wb&&THREE.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Wb);Mb+=1;return a}function w(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}
function y(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function A(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,I(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,I(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,I(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,I(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+
b.sourceFile+" )"),m.texParameteri(a,m.TEXTURE_MAG_FILTER,z(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,z(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+b.sourceFile+" )"));(c=da.get("EXT_texture_filter_anisotropic"))&&b.type!==THREE.FloatType&&b.type!==THREE.HalfFloatType&&(1<b.anisotropy||b.__currentAnisotropy)&&
(m.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,B.getMaxAnisotropy())),b.__currentAnisotropy=b.anisotropy)}function E(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);THREE.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}
function G(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function F(a){a instanceof
THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture),m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,a.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null))}function z(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?m.NEAREST:m.LINEAR}function I(a){var b;if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;
if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;
if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;b=da.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return m.ALPHA;
if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;
if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;b=da.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=da.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=da.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var U=void 0!==a.canvas?a.canvas:document.createElement("canvas"),M=void 0!==a.context?a.context:null,H=1,L=void 0!==a.precision?a.precision:"highp",P=void 0!==a.alpha?a.alpha:!1,N=void 0!==a.depth?a.depth:!0,R=void 0!==a.stencil?
a.stencil:!0,V=void 0!==a.antialias?a.antialias:!1,J=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,oa=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,ja=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:!1,ha=new THREE.Color(0),O=0,ca=[],ba={},qa=[],Ka=[],Qa=[],Xa=[],Ya=[];this.domElement=U;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.gammaFactor=2;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=
!1;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var B=this,Pa=[],ob=null,ab=null,ub=-1,ta="",vb=null,Mb=0,ib=0,bb=0,pb=U.width,qb=U.height,Xb=0,fc=0,cb=new THREE.Frustum,db=new THREE.Matrix4,wa=new THREE.Vector3,pa=new THREE.Vector3,Ob=!0,jc={ambient:[0,
0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m;try{var Yb={alpha:P,depth:N,stencil:R,antialias:V,premultipliedAlpha:J,preserveDrawingBuffer:oa};m=M||U.getContext("webgl",Yb)||U.getContext("experimental-webgl",Yb);if(null===m){if(null!==U.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";
throw"Error creating WebGL context.";}U.addEventListener("webglcontextlost",function(a){a.preventDefault();Zb();lc();ba={}},!1)}catch(rc){THREE.error("THREE.WebGLRenderer: "+rc)}var W=new THREE.WebGLState(m,I);void 0===m.getShaderPrecisionFormat&&(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});var da=new THREE.WebGLExtensions(m);da.get("OES_texture_float");da.get("OES_texture_float_linear");da.get("OES_texture_half_float");da.get("OES_texture_half_float_linear");
da.get("OES_standard_derivatives");ja&&da.get("EXT_frag_depth");var rb=function(a,b,c,d){!0===J&&(a*=d,b*=d,c*=d);m.clearColor(a,b,c,d)},lc=function(){m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(ib,bb,pb,qb);rb(ha.r,ha.g,ha.b,O)},Zb=function(){vb=ob=null;ta="";ub=-1;Ob=!0;W.reset()};
lc();this.context=m;this.state=W;var Wb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),sc=m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS),tc=m.getParameter(m.MAX_TEXTURE_SIZE),qc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Vb=0<sc,Nb=Vb&&da.get("OES_texture_float"),uc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),vc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT),wc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),xc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT),
kc=function(){var a;return function(){if(void 0!==a)return a;a=[];if(da.get("WEBGL_compressed_texture_pvrtc")||da.get("WEBGL_compressed_texture_s3tc"))for(var b=m.getParameter(m.COMPRESSED_TEXTURE_FORMATS),c=0;c<b.length;c++)a.push(b[c]);return a}}(),yc=0<uc.precision&&0<wc.precision,mc=0<vc.precision&&0<xc.precision;"highp"!==L||yc||(mc?(L="mediump",THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(L="lowp",THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));
"mediump"!==L||mc||(L="lowp",THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));var zc=new THREE.ShadowMapPlugin(this,ca,ba,qa),Ac=new THREE.SpritePlugin(this,Xa),Bc=new THREE.LensFlarePlugin(this,Ya);this.getContext=function(){return m};this.forceContextLoss=function(){da.get("WEBGL_lose_context").loseContext()};this.supportsVertexTextures=function(){return Vb};this.supportsFloatTextures=function(){return da.get("OES_texture_float")};this.supportsHalfFloatTextures=function(){return da.get("OES_texture_half_float")};
this.supportsStandardDerivatives=function(){return da.get("OES_standard_derivatives")};this.supportsCompressedTextureS3TC=function(){return da.get("WEBGL_compressed_texture_s3tc")};this.supportsCompressedTexturePVRTC=function(){return da.get("WEBGL_compressed_texture_pvrtc")};this.supportsBlendMinMax=function(){return da.get("EXT_blend_minmax")};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=da.get("EXT_texture_filter_anisotropic");return a=null!==b?m.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
0}}();this.getPrecision=function(){return L};this.getPixelRatio=function(){return H};this.setPixelRatio=function(a){H=a};this.setSize=function(a,b,c){U.width=a*H;U.height=b*H;!1!==c&&(U.style.width=a+"px",U.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){ib=a*H;bb=b*H;pb=c*H;qb=d*H;m.viewport(ib,bb,pb,qb)};this.setScissor=function(a,b,c,d){m.scissor(a*H,b*H,c*H,d*H)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.getClearColor=
function(){return ha};this.setClearColor=function(a,b){ha.set(a);O=void 0!==b?b:1;rb(ha.r,ha.g,ha.b,O)};this.getClearAlpha=function(){return O};this.setClearAlpha=function(a){O=a;rb(ha.r,ha.g,ha.b,O)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=function(){m.clear(m.STENCIL_BUFFER_BIT)};
this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=Zb;var wb=function(a){a.target.traverse(function(a){a.removeEventListener("remove",wb);if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete ba[a.id];else if(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var b=qa,c=b.length-1;0<=c;c--)b[c].object===a&&b.splice(c,1);delete a.__webglInit;delete a._modelViewMatrix;delete a._normalMatrix;delete a.__webglActive})},
jb=function(a){a=a.target;a.removeEventListener("dispose",jb);delete a.__webglInit;if(a instanceof THREE.BufferGeometry){for(var b in a.attributes){var c=a.attributes[b];void 0!==c.buffer&&(m.deleteBuffer(c.buffer),delete c.buffer)}B.info.memory.geometries--}else if(b=Ua[a.id],void 0!==b){for(var c=0,d=b.length;c<d;c++){var e=b[c];if(void 0!==e.numMorphTargets){for(var f=0,g=e.numMorphTargets;f<g;f++)m.deleteBuffer(e.__webglMorphTargetsBuffers[f]);delete e.__webglMorphTargetsBuffers}if(void 0!==e.numMorphNormals){f=
0;for(g=e.numMorphNormals;f<g;f++)m.deleteBuffer(e.__webglMorphNormalsBuffers[f]);delete e.__webglMorphNormalsBuffers}nc(e)}delete Ua[a.id]}else nc(a);ta=""},Pb=function(a){a=a.target;a.removeEventListener("dispose",Pb);a.image&&a.image.__webglTextureCube?(m.deleteTexture(a.image.__webglTextureCube),delete a.image.__webglTextureCube):void 0!==a.__webglInit&&(m.deleteTexture(a.__webglTexture),delete a.__webglTexture,delete a.__webglInit);B.info.memory.textures--},oc=function(a){a=a.target;a.removeEventListener("dispose",
oc);if(a&&void 0!==a.__webglTexture){m.deleteTexture(a.__webglTexture);delete a.__webglTexture;if(a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);delete a.__webglFramebuffer;delete a.__webglRenderbuffer}B.info.memory.textures--},ic=function(a){a=a.target;a.removeEventListener("dispose",ic);hc(a)},nc=function(a){for(var b=
"__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "),c=0,d=b.length;c<d;c++){var e=b[c];void 0!==a[e]&&(m.deleteBuffer(a[e]),delete a[e])}if(void 0!==a.__webglCustomAttributesList){for(e in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[e].buffer);delete a.__webglCustomAttributesList}B.info.memory.geometries--},
hc=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Pa.length;a<c;a++)if(d=Pa[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Pa.length;a<c;a++)d=Pa[a],d.program!==b&&e.push(d);Pa=e;m.deleteProgram(b);B.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){W.initAttributes();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=
m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(!1===c instanceof THREE.MeshPhongMaterial&&
c.shading===THREE.FlatShading){var d,e,f,g,h,k,n,l,p,q,r,s=3*a.count;for(r=0;r<s;r+=9)q=a.normalArray,d=q[r],e=q[r+1],f=q[r+2],g=q[r+3],k=q[r+4],l=q[r+5],h=q[r+6],n=q[r+7],p=q[r+8],d=(d+g+h)/3,e=(e+k+n)/3,f=(f+l+p)/3,q[r]=d,q[r+1]=e,q[r+2]=f,q[r+3]=d,q[r+4]=e,q[r+5]=f,q[r+6]=d,q[r+7]=e,q[r+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);W.enableAttribute(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),
m.bufferData(m.ARRAY_BUFFER,a.uvArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),W.enableAttribute(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));W.disableUnusedAttributes();m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,
b,c,e,f,g){if(!1!==e.visible)if(t(g),a=v(a,b,c,e,g),b=!1,c="direct_"+f.id+"_"+a.id+"_"+(e.wireframe?1:0),c!==ta&&(ta=c,b=!0),b&&W.initAttributes(),g instanceof THREE.Mesh){g=!0===e.wireframe?m.LINES:m.TRIANGLES;var h=f.attributes.index;if(h){var k,n;h.array instanceof Uint32Array&&da.get("OES_element_index_uint")?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2);c=f.offsets;if(0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,
B.info.render.vertices+=h.array.length,B.info.render.faces+=h.array.length/3;else{b=!0;for(var l=0,p=c.length;l<p;l++){var q=c[l].index;b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer));m.drawElements(g,c[l].count,k,c[l].start*n);B.info.render.calls++;B.info.render.vertices+=c[l].count;B.info.render.faces+=c[l].count/3}}}else b&&d(e,a,f,0),e=f.attributes.position,m.drawArrays(g,0,e.array.length/e.itemSize),B.info.render.calls++,B.info.render.vertices+=e.array.length/e.itemSize,B.info.render.faces+=
e.array.length/(3*e.itemSize)}else if(g instanceof THREE.PointCloud)if(g=m.POINTS,h=f.attributes.index)if(h.array instanceof Uint32Array&&da.get("OES_element_index_uint")?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2),c=f.offsets,0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,B.info.render.points+=h.array.length;else for(1<c.length&&(b=!0),l=0,p=c.length;l<p;l++)q=c[l].index,b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
h.buffer)),m.drawElements(g,c[l].count,k,c[l].start*n),B.info.render.calls++,B.info.render.points+=c[l].count;else if(b&&d(e,a,f,0),e=f.attributes.position,c=f.offsets,0===c.length)m.drawArrays(g,0,e.array.length/3),B.info.render.calls++,B.info.render.points+=e.array.length/3;else for(l=0,p=c.length;l<p;l++)m.drawArrays(g,c[l].index,c[l].count),B.info.render.calls++,B.info.render.points+=c[l].count;else if(g instanceof THREE.Line)if(g=g.mode===THREE.LineStrip?m.LINE_STRIP:m.LINES,W.setLineWidth(e.linewidth*
H),h=f.attributes.index)if(h.array instanceof Uint32Array?(k=m.UNSIGNED_INT,n=4):(k=m.UNSIGNED_SHORT,n=2),c=f.offsets,0===c.length)b&&(d(e,a,f,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,h.array.length,k,0),B.info.render.calls++,B.info.render.vertices+=h.array.length;else for(1<c.length&&(b=!0),l=0,p=c.length;l<p;l++)q=c[l].index,b&&(d(e,a,f,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,h.buffer)),m.drawElements(g,c[l].count,k,c[l].start*n),B.info.render.calls++,B.info.render.vertices+=
c[l].count;else if(b&&d(e,a,f,0),e=f.attributes.position,c=f.offsets,0===c.length)m.drawArrays(g,0,e.array.length/3),B.info.render.calls++,B.info.render.vertices+=e.array.length/3;else for(l=0,p=c.length;l<p;l++)m.drawArrays(g,c[l].index,c[l].count),B.info.render.calls++,B.info.render.vertices+=c[l].count};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){t(f);c=v(a,b,c,d,f);b=c.attributes;a=!1;c=e.id+"_"+c.id+"_"+(d.wireframe?1:0);c!==ta&&(ta=c,a=!0);a&&W.initAttributes();if(!d.morphTargets&&
0<=b.position)a&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),W.enableAttribute(b.position),m.vertexAttribPointer(b.position,3,m.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),W.enableAttribute(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),W.enableAttribute(c.position),m.vertexAttribPointer(c.position,
3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length)for(var h=0,k=f.morphTargetForcedOrder,n=f.morphTargetInfluences,l;h<d.numSupportedMorphTargets&&h<k.length;)l=c["morphTarget"+h],0<=l&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[k[h]]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0)),l=c["morphNormal"+h],0<=l&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[k[h]]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[h]=
n[k[h]],h++;else{k=[];n=f.morphTargetInfluences;h=f.geometry.morphTargets;n.length>h.length&&(console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."),n.length=h.length);h=0;for(l=n.length;h<l;h++)k.push([n[h],h]);k.length>d.numSupportedMorphTargets?(k.sort(g),k.length=d.numSupportedMorphTargets):k.length>d.numSupportedMorphNormals?k.sort(g):0===k.length&&k.push([0,0]);for(var h=0,p=d.numSupportedMorphTargets;h<p;h++)if(k[h]){var q=k[h][1];l=c["morphTarget"+h];0<=l&&
(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[q]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0));l=c["morphNormal"+h];0<=l&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[q]),W.enableAttribute(l),m.vertexAttribPointer(l,3,m.FLOAT,!1,0,0));f.__webglMorphTargetInfluences[h]=n[q]}else f.__webglMorphTargetInfluences[h]=0}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(c=
0,n=e.__webglCustomAttributesList.length;c<n;c++)k=e.__webglCustomAttributesList[c],0<=b[k.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,k.buffer),W.enableAttribute(b[k.buffer.belongsToAttribute]),m.vertexAttribPointer(b[k.buffer.belongsToAttribute],k.size,m.FLOAT,!1,0,0));0<=b.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),W.enableAttribute(b.color),m.vertexAttribPointer(b.color,3,m.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&
m.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),W.enableAttribute(b.normal),m.vertexAttribPointer(b.normal,3,m.FLOAT,!1,0,0));0<=b.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglTangentBuffer),W.enableAttribute(b.tangent),m.vertexAttribPointer(b.tangent,4,m.FLOAT,!1,0,0));0<=b.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),W.enableAttribute(b.uv),m.vertexAttribPointer(b.uv,2,m.FLOAT,!1,0,
0)):void 0!==d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),W.enableAttribute(b.uv2),m.vertexAttribPointer(b.uv2,2,m.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv2,d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),W.enableAttribute(b.skinIndex),m.vertexAttribPointer(b.skinIndex,
4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),W.enableAttribute(b.skinWeight),m.vertexAttribPointer(b.skinWeight,4,m.FLOAT,!1,0,0));0<=b.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),W.enableAttribute(b.lineDistance),m.vertexAttribPointer(b.lineDistance,1,m.FLOAT,!1,0,0))}W.disableUnusedAttributes();f instanceof THREE.Mesh?(f=e.__typeArray===Uint32Array?m.UNSIGNED_INT:m.UNSIGNED_SHORT,d.wireframe?(W.setLineWidth(d.wireframeLinewidth*H),a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,f,0)):(a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,f,0)),B.info.render.calls++,B.info.render.vertices+=e.__webglFaceCount,B.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.mode===THREE.LineStrip?m.LINE_STRIP:m.LINES,W.setLineWidth(d.linewidth*H),m.drawArrays(f,0,e.__webglLineCount),B.info.render.calls++):f instanceof THREE.PointCloud&&(m.drawArrays(m.POINTS,
0,e.__webglParticleCount),B.info.render.calls++,B.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var g=a.fog;ta="";ub=-1;vb=null;Ob=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();a.traverse(function(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update()});b.matrixWorldInverse.getInverse(b.matrixWorld);db.multiplyMatrices(b.projectionMatrix,
b.matrixWorldInverse);cb.setFromMatrix(db);ca.length=0;Ka.length=0;Qa.length=0;Xa.length=0;Ya.length=0;h(a);!0===B.sortObjects&&(Ka.sort(e),Qa.sort(f));zc.render(a,b);B.info.render.calls=0;B.info.render.vertices=0;B.info.render.faces=0;B.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);d=0;for(var n=qa.length;d<n;d++){var m=qa[d],q=m.object;q.visible&&(w(q,b),p(m))}a.overrideMaterial?(d=a.overrideMaterial,u(d),
k(Ka,b,ca,g,d),k(Qa,b,ca,g,d),l(qa,"",b,ca,g,d)):(W.setBlending(THREE.NoBlending),k(Ka,b,ca,g,null),l(qa,"opaque",b,ca,g,null),k(Qa,b,ca,g,null),l(qa,"transparent",b,ca,g,null));Ac.render(a,b);Bc.render(a,b,Xb,fc);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&F(c);W.setDepthTest(!0);W.setDepthWrite(!0);W.setColorWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=v(a,b,c,d,e);ta="";B.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,
m,cb):e.render(function(a){B.renderBufferImmediate(a,f,d)})};var Ua={},Qb=0,pc={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointCloudMaterial:"particle_basic"};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===
THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){W.setDoubleSided(a.side===THREE.DoubleSide);W.setFlipSided(a.side===THREE.BackSide)};this.uploadTexture=function(a){void 0===a.__webglInit&&(a.__webglInit=!0,a.addEventListener("dispose",Pb),a.__webglTexture=m.createTexture(),B.info.memory.textures++);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);a.image=E(a.image,tc);var b=a.image,c=THREE.Math.isPowerOfTwo(b.width)&&THREE.Math.isPowerOfTwo(b.height),d=I(a.format),e=I(a.type);A(m.TEXTURE_2D,a,c);var f=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<f.length&&c){for(var g=0,h=f.length;g<h;g++)b=f[g],m.texImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,d,b.width,b.height,0,d,e,b.data);else if(a instanceof THREE.CompressedTexture)for(g=
0,h=f.length;g<h;g++)b=f[g],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<kc().indexOf(d)?m.compressedTexImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,b.data):THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):m.texImage2D(m.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);else if(0<f.length&&c){g=0;for(h=f.length;g<h;g++)b=f[g],m.texImage2D(m.TEXTURE_2D,g,d,d,e,b);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,d,d,e,a.image);
a.generateMipmaps&&c&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()};this.setTexture=function(a,b){m.activeTexture(m.TEXTURE0+b);a.needsUpdate?B.uploadTexture(a):m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&void 0===a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",oc);a.__webglTexture=m.createTexture();
B.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=I(a.format),e=I(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);A(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,
a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);G(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),A(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),
m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):G(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,
null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=pb,a=qb,d=ib,e=bb);b!==ab&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),ab=b);Xb=c;fc=a};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!(a instanceof THREE.WebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else if(a.__webglFramebuffer)if(a.format!==THREE.RGBAFormat)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
else{var g=!1;a.__webglFramebuffer!==ab&&(m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),g=!0);m.checkFramebufferStatus(m.FRAMEBUFFER)===m.FRAMEBUFFER_COMPLETE?m.readPixels(b,c,d,e,m.RGBA,m.UNSIGNED_BYTE,f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");g&&m.bindFramebuffer(m.FRAMEBUFFER,ab)}};this.initMaterial=function(){THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};this.addPrePlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};
this.addPostPlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};this.updateShadowMap=function(){THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=void 0!==c.shareDepthFrom?c.shareDepthFrom:null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&THREE.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,l=d.__webglShader.vertexShader,p=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var n="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(n="SHADOWMAP_TYPE_PCF_SOFT");var t="ENVMAP_TYPE_CUBE",r="ENVMAP_MODE_REFLECTION",s="ENVMAP_BLENDING_MULTIPLY";
if(e.envMap){switch(d.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:t="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:t="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:t="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:r="ENVMAP_MODE_REFRACTION"}switch(d.combine){case THREE.MultiplyOperation:s="ENVMAP_BLENDING_MULTIPLY";
break;case THREE.MixOperation:s="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:s="ENVMAP_BLENDING_ADD"}}var u=0<b.gammaFactor?b.gammaFactor:1,v,x;v=[];for(var D in g)x=g[D],!1!==x&&(x="#define "+D+" "+x,v.push(x));v=v.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",v,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":
"","#define GAMMA_FACTOR "+u,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":
"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+n:"",e.shadowMapDebug?
"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap||e.flatShading?"#extension GL_OES_standard_derivatives : enable":"",v,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+
u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+t:"",e.envMap?"#define "+r:"",e.envMap?"#define "+s:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.flatShading?"#define FLAT_SHADED":"",e.metal?"#define METAL":
"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+n:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));l=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+l);p=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,
b+p);f.attachShader(g,l);f.attachShader(g,p);void 0!==q&&f.bindAttribLocation(g,0,q);f.linkProgram(g);q=f.getProgramInfoLog(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&THREE.error("THREE.WebGLProgram: shader error: "+f.getError(),"gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS),"gl.getPRogramInfoLog",q);""!==q&&THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()"+q);f.deleteShader(l);f.deleteShader(p);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var w in h)q.push(w);h=q;w={};q=0;for(b=h.length;q<b;q++)n=h[q],w[n]=f.getUniformLocation(g,n);this.uniforms=w;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var y in k)q.push(y);
e=q;k={};y=0;for(h=e.length;y<h;y++)w=e[y],k[w]=f.getAttribLocation(g,w);this.attributes=k;this.attributesKeys=Object.keys(this.attributes);this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=l;this.fragmentShader=p;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&THREE.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c),a(d));return c}}();
THREE.WebGLState=function(a,b){var c=new Uint8Array(16),d=new Uint8Array(16),e=null,f=null,g=null,h=null,k=null,l=null,p=null,q=null,n=null,t=null,r=null,s=null,u=null,v=null,x=null,D=null;this.initAttributes=function(){for(var a=0,b=c.length;a<b;a++)c[a]=0};this.enableAttribute=function(b){c[b]=1;0===d[b]&&(a.enableVertexAttribArray(b),d[b]=1)};this.disableUnusedAttributes=function(){for(var b=0,e=d.length;b<e;b++)d[b]!==c[b]&&(a.disableVertexAttribArray(b),d[b]=0)};this.setBlending=function(c,d,
n,q,r,s,t){c!==e&&(c===THREE.NoBlending?a.disable(a.BLEND):c===THREE.AdditiveBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):c===THREE.SubtractiveBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):c===THREE.MultiplyBlending?(a.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):c===THREE.CustomBlending?a.enable(a.BLEND):(a.enable(a.BLEND),a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),
a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),e=c);if(c===THREE.CustomBlending){r=r||d;s=s||n;t=t||q;if(d!==f||r!==k)a.blendEquationSeparate(b(d),b(r)),f=d,k=r;if(n!==g||q!==h||s!==l||t!==p)a.blendFuncSeparate(b(n),b(q),b(s),b(t)),g=n,h=q,l=s,p=t}else p=l=k=h=g=f=null};this.setDepthTest=function(b){q!==b&&(b?a.enable(a.DEPTH_TEST):a.disable(a.DEPTH_TEST),q=b)};this.setDepthWrite=function(b){n!==b&&(a.depthMask(b),n=b)};this.setColorWrite=function(b){t!==b&&(a.colorMask(b,
b,b,b),t=b)};this.setDoubleSided=function(b){r!==b&&(b?a.disable(a.CULL_FACE):a.enable(a.CULL_FACE),r=b)};this.setFlipSided=function(b){s!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),s=b)};this.setLineWidth=function(b){b!==u&&(a.lineWidth(b),u=b)};this.setPolygonOffset=function(b,c,d){v!==b&&(b?a.enable(a.POLYGON_OFFSET_FILL):a.disable(a.POLYGON_OFFSET_FILL),v=b);!b||x===c&&D===d||(a.polygonOffset(c,d),x=c,D=d)};this.reset=function(){for(var a=0;a<d.length;a++)d[a]=0;s=r=t=n=q=e=null}};
THREE.LensFlarePlugin=function(a,b){var c,d,e,f,g,h,k,l,p,q,n=a.context,t,r,s,u,v,x;this.render=function(D,w,y,A){if(0!==b.length){D=new THREE.Vector3;var E=A/y,G=.5*y,F=.5*A,z=16/A,I=new THREE.Vector2(z*E,z),U=new THREE.Vector3(1,1,0),M=new THREE.Vector2(1,1);if(void 0===s){var z=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),H=new Uint16Array([0,1,2,0,2,3]);t=n.createBuffer();r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t);n.bufferData(n.ARRAY_BUFFER,z,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,
r);n.bufferData(n.ELEMENT_ARRAY_BUFFER,H,n.STATIC_DRAW);v=n.createTexture();x=n.createTexture();n.bindTexture(n.TEXTURE_2D,v);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);n.bindTexture(n.TEXTURE_2D,x);n.texImage2D(n.TEXTURE_2D,0,
n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var z=(u=0<n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
H=n.createProgram(),L=n.createShader(n.FRAGMENT_SHADER),P=n.createShader(n.VERTEX_SHADER),N="precision "+a.getPrecision()+" float;\n";n.shaderSource(L,N+z.fragmentShader);n.shaderSource(P,N+z.vertexShader);n.compileShader(L);n.compileShader(P);n.attachShader(H,L);n.attachShader(H,P);n.linkProgram(H);s=H;p=n.getAttribLocation(s,"position");q=n.getAttribLocation(s,"uv");c=n.getUniformLocation(s,"renderType");d=n.getUniformLocation(s,"map");e=n.getUniformLocation(s,"occlusionMap");f=n.getUniformLocation(s,
"opacity");g=n.getUniformLocation(s,"color");h=n.getUniformLocation(s,"scale");k=n.getUniformLocation(s,"rotation");l=n.getUniformLocation(s,"screenPosition")}n.useProgram(s);n.enableVertexAttribArray(p);n.enableVertexAttribArray(q);n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,t);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(q,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);n.disable(n.CULL_FACE);n.depthMask(!1);H=0;for(L=b.length;H<L;H++)if(z=16/A,I.set(z*
E,z),P=b[H],D.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]),D.applyMatrix4(w.matrixWorldInverse),D.applyProjection(w.projectionMatrix),U.copy(D),M.x=U.x*G+G,M.y=U.y*F+F,u||0<M.x&&M.x<y&&0<M.y&&M.y<A){n.activeTexture(n.TEXTURE1);n.bindTexture(n.TEXTURE_2D,v);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,M.x-8,M.y-8,16,16,0);n.uniform1i(c,0);n.uniform2f(h,I.x,I.y);n.uniform3f(l,U.x,U.y,U.z);n.disable(n.BLEND);n.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,
0);n.activeTexture(n.TEXTURE0);n.bindTexture(n.TEXTURE_2D,x);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,M.x-8,M.y-8,16,16,0);n.uniform1i(c,1);n.disable(n.DEPTH_TEST);n.activeTexture(n.TEXTURE1);n.bindTexture(n.TEXTURE_2D,v);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);P.positionScreen.copy(U);P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares();n.uniform1i(c,2);n.enable(n.BLEND);for(var N=0,R=P.lensFlares.length;N<R;N++){var V=P.lensFlares[N];.001<V.opacity&&.001<V.scale&&(U.x=V.x,
U.y=V.y,U.z=V.z,z=V.size*V.scale/A,I.x=z*E,I.y=z,n.uniform3f(l,U.x,U.y,U.z),n.uniform2f(h,I.x,I.y),n.uniform1f(k,V.rotation),n.uniform1f(f,V.opacity),n.uniform3f(g,V.color.r,V.color.g,V.color.b),a.state.setBlending(V.blending,V.blendEquation,V.blendSrc,V.blendDst),a.setTexture(V.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}n.enable(n.CULL_FACE);n.enable(n.DEPTH_TEST);n.depthMask(!0);a.resetGLState()}}};
THREE.ShadowMapPlugin=function(a,b,c,d){function e(a,b,d){if(b.visible){var f=c[b.id];if(f&&b.castShadow&&(!1===b.frustumCulled||!0===p.intersectsObject(b)))for(var g=0,h=f.length;g<h;g++){var k=f[g];b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,b.matrixWorld);s.push(k)}g=0;for(h=b.children.length;g<h;g++)e(a,b.children[g],d)}}var f=a.context,g,h,k,l,p=new THREE.Frustum,q=new THREE.Matrix4,n=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3,s=[],u=THREE.ShaderLib.depthRGBA,v=THREE.UniformsUtils.clone(u.uniforms);
g=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader});h=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0});k=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,skinning:!0});l=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0,skinning:!0});g._shadowPass=!0;h._shadowPass=!0;k._shadowPass=
!0;l._shadowPass=!0;this.render=function(c,v){if(!1!==a.shadowMapEnabled){var u,y,A,E,G,F,z,I,U=[];E=0;f.clearColor(1,1,1,1);f.disable(f.BLEND);f.enable(f.CULL_FACE);f.frontFace(f.CCW);a.shadowMapCullFace===THREE.CullFaceFront?f.cullFace(f.FRONT):f.cullFace(f.BACK);a.state.setDepthTest(!0);u=0;for(y=b.length;u<y;u++)if(A=b[u],A.castShadow)if(A instanceof THREE.DirectionalLight&&A.shadowCascade)for(G=0;G<A.shadowCascadeCount;G++){var M;if(A.shadowCascadeArray[G])M=A.shadowCascadeArray[G];else{z=A;
var H=G;M=new THREE.DirectionalLight;M.isVirtual=!0;M.onlyShadow=!0;M.castShadow=!0;M.shadowCameraNear=z.shadowCameraNear;M.shadowCameraFar=z.shadowCameraFar;M.shadowCameraLeft=z.shadowCameraLeft;M.shadowCameraRight=z.shadowCameraRight;M.shadowCameraBottom=z.shadowCameraBottom;M.shadowCameraTop=z.shadowCameraTop;M.shadowCameraVisible=z.shadowCameraVisible;M.shadowDarkness=z.shadowDarkness;M.shadowBias=z.shadowCascadeBias[H];M.shadowMapWidth=z.shadowCascadeWidth[H];M.shadowMapHeight=z.shadowCascadeHeight[H];
M.pointsWorld=[];M.pointsFrustum=[];I=M.pointsWorld;F=M.pointsFrustum;for(var L=0;8>L;L++)I[L]=new THREE.Vector3,F[L]=new THREE.Vector3;I=z.shadowCascadeNearZ[H];z=z.shadowCascadeFarZ[H];F[0].set(-1,-1,I);F[1].set(1,-1,I);F[2].set(-1,1,I);F[3].set(1,1,I);F[4].set(-1,-1,z);F[5].set(1,-1,z);F[6].set(-1,1,z);F[7].set(1,1,z);M.originalCamera=v;F=new THREE.Gyroscope;F.position.copy(A.shadowCascadeOffset);F.add(M);F.add(M.target);v.add(F);A.shadowCascadeArray[G]=M}H=A;I=G;z=H.shadowCascadeArray[I];z.position.copy(H.position);
z.target.position.copy(H.target.position);z.lookAt(z.target);z.shadowCameraVisible=H.shadowCameraVisible;z.shadowDarkness=H.shadowDarkness;z.shadowBias=H.shadowCascadeBias[I];F=H.shadowCascadeNearZ[I];H=H.shadowCascadeFarZ[I];z=z.pointsFrustum;z[0].z=F;z[1].z=F;z[2].z=F;z[3].z=F;z[4].z=H;z[5].z=H;z[6].z=H;z[7].z=H;U[E]=M;E++}else U[E]=A,E++;u=0;for(y=U.length;u<y;u++){A=U[u];A.shadowMap||(G=THREE.LinearFilter,a.shadowMapType===THREE.PCFSoftShadowMap&&(G=THREE.NearestFilter),A.shadowMap=new THREE.WebGLRenderTarget(A.shadowMapWidth,
A.shadowMapHeight,{minFilter:G,magFilter:G,format:THREE.RGBAFormat}),A.shadowMapSize=new THREE.Vector2(A.shadowMapWidth,A.shadowMapHeight),A.shadowMatrix=new THREE.Matrix4);if(!A.shadowCamera){if(A instanceof THREE.SpotLight)A.shadowCamera=new THREE.PerspectiveCamera(A.shadowCameraFov,A.shadowMapWidth/A.shadowMapHeight,A.shadowCameraNear,A.shadowCameraFar);else if(A instanceof THREE.DirectionalLight)A.shadowCamera=new THREE.OrthographicCamera(A.shadowCameraLeft,A.shadowCameraRight,A.shadowCameraTop,
A.shadowCameraBottom,A.shadowCameraNear,A.shadowCameraFar);else{THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",A);continue}c.add(A.shadowCamera);!0===c.autoUpdate&&c.updateMatrixWorld()}A.shadowCameraVisible&&!A.cameraHelper&&(A.cameraHelper=new THREE.CameraHelper(A.shadowCamera),c.add(A.cameraHelper));if(A.isVirtual&&M.originalCamera==v){G=v;E=A.shadowCamera;F=A.pointsFrustum;z=A.pointsWorld;n.set(Infinity,Infinity,Infinity);t.set(-Infinity,-Infinity,-Infinity);for(H=0;8>
H;H++)I=z[H],I.copy(F[H]),I.unproject(G),I.applyMatrix4(E.matrixWorldInverse),I.x<n.x&&(n.x=I.x),I.x>t.x&&(t.x=I.x),I.y<n.y&&(n.y=I.y),I.y>t.y&&(t.y=I.y),I.z<n.z&&(n.z=I.z),I.z>t.z&&(t.z=I.z);E.left=n.x;E.right=t.x;E.top=t.y;E.bottom=n.y;E.updateProjectionMatrix()}E=A.shadowMap;F=A.shadowMatrix;G=A.shadowCamera;G.position.setFromMatrixPosition(A.matrixWorld);r.setFromMatrixPosition(A.target.matrixWorld);G.lookAt(r);G.updateMatrixWorld();G.matrixWorldInverse.getInverse(G.matrixWorld);A.cameraHelper&&
(A.cameraHelper.visible=A.shadowCameraVisible);A.shadowCameraVisible&&A.cameraHelper.update();F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);F.multiply(G.projectionMatrix);F.multiply(G.matrixWorldInverse);q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse);p.setFromMatrix(q);a.setRenderTarget(E);a.clear();s.length=0;e(c,c,G);A=0;for(E=s.length;A<E;A++)z=s[A],F=z.object,z=z.buffer,H=F.material instanceof THREE.MeshFaceMaterial?F.material.materials[0]:F.material,I=void 0!==F.geometry.morphTargets&&
0<F.geometry.morphTargets.length&&H.morphTargets,L=F instanceof THREE.SkinnedMesh&&H.skinning,I=F.customDepthMaterial?F.customDepthMaterial:L?I?l:k:I?h:g,a.setMaterialFaces(H),z instanceof THREE.BufferGeometry?a.renderBufferDirect(G,b,null,I,z,F):a.renderBuffer(G,b,null,I,z,F);A=0;for(E=d.length;A<E;A++)z=d[A],F=z.object,F.visible&&F.castShadow&&(F._modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld),a.renderImmediateObject(G,b,null,g,F))}u=a.getClearColor();y=a.getClearAlpha();f.clearColor(u.r,
u.g,u.b,y);f.enable(f.BLEND);a.shadowMapCullFace===THREE.CullFaceFront&&f.cullFace(f.BACK);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,f,g,h,k,l,p,q,n,t,r,s,u,v,x;function D(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var w=a.context,y,A,E,G,F=new THREE.Vector3,z=new THREE.Quaternion,I=new THREE.Vector3;this.render=function(U,M){if(0!==b.length){if(void 0===E){var H=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),L=new Uint16Array([0,1,2,0,2,3]);y=w.createBuffer();A=w.createBuffer();w.bindBuffer(w.ARRAY_BUFFER,y);w.bufferData(w.ARRAY_BUFFER,H,w.STATIC_DRAW);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,
A);w.bufferData(w.ELEMENT_ARRAY_BUFFER,L,w.STATIC_DRAW);var H=w.createProgram(),L=w.createShader(w.VERTEX_SHADER),P=w.createShader(w.FRAGMENT_SHADER);w.shaderSource(L,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
w.shaderSource(P,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
w.compileShader(L);w.compileShader(P);w.attachShader(H,L);w.attachShader(H,P);w.linkProgram(H);E=H;v=w.getAttribLocation(E,"position");x=w.getAttribLocation(E,"uv");c=w.getUniformLocation(E,"uvOffset");d=w.getUniformLocation(E,"uvScale");e=w.getUniformLocation(E,"rotation");f=w.getUniformLocation(E,"scale");g=w.getUniformLocation(E,"color");h=w.getUniformLocation(E,"map");k=w.getUniformLocation(E,"opacity");l=w.getUniformLocation(E,"modelViewMatrix");p=w.getUniformLocation(E,"projectionMatrix");q=
w.getUniformLocation(E,"fogType");n=w.getUniformLocation(E,"fogDensity");t=w.getUniformLocation(E,"fogNear");r=w.getUniformLocation(E,"fogFar");s=w.getUniformLocation(E,"fogColor");u=w.getUniformLocation(E,"alphaTest");H=document.createElement("canvas");H.width=8;H.height=8;L=H.getContext("2d");L.fillStyle="white";L.fillRect(0,0,8,8);G=new THREE.Texture(H);G.needsUpdate=!0}w.useProgram(E);w.enableVertexAttribArray(v);w.enableVertexAttribArray(x);w.disable(w.CULL_FACE);w.enable(w.BLEND);w.bindBuffer(w.ARRAY_BUFFER,
y);w.vertexAttribPointer(v,2,w.FLOAT,!1,16,0);w.vertexAttribPointer(x,2,w.FLOAT,!1,16,8);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,A);w.uniformMatrix4fv(p,!1,M.projectionMatrix.elements);w.activeTexture(w.TEXTURE0);w.uniform1i(h,0);L=H=0;(P=U.fog)?(w.uniform3f(s,P.color.r,P.color.g,P.color.b),P instanceof THREE.Fog?(w.uniform1f(t,P.near),w.uniform1f(r,P.far),w.uniform1i(q,1),L=H=1):P instanceof THREE.FogExp2&&(w.uniform1f(n,P.density),w.uniform1i(q,2),L=H=2)):(w.uniform1i(q,0),L=H=0);for(var P=0,N=b.length;P<
N;P++){var R=b[P];R._modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);R.z=-R._modelViewMatrix.elements[14]}b.sort(D);for(var V=[],P=0,N=b.length;P<N;P++){var R=b[P],J=R.material;w.uniform1f(u,J.alphaTest);w.uniformMatrix4fv(l,!1,R._modelViewMatrix.elements);R.matrixWorld.decompose(F,z,I);V[0]=I.x;V[1]=I.y;R=0;U.fog&&J.fog&&(R=L);H!==R&&(w.uniform1i(q,R),H=R);null!==J.map?(w.uniform2f(c,J.map.offset.x,J.map.offset.y),w.uniform2f(d,J.map.repeat.x,J.map.repeat.y)):(w.uniform2f(c,
0,0),w.uniform2f(d,1,1));w.uniform1f(k,J.opacity);w.uniform3f(g,J.color.r,J.color.g,J.color.b);w.uniform1f(e,J.rotation);w.uniform2fv(f,V);a.state.setBlending(J.blending,J.blendEquation,J.blendSrc,J.blendDst);a.state.setDepthTest(J.depthTest);a.state.setDepthWrite(J.depthWrite);J.map&&J.map.image&&J.map.image.width?a.setTexture(J.map,0):a.setTexture(G,0);w.drawElements(w.TRIANGLES,6,w.UNSIGNED_SHORT,0)}w.enable(w.CULL_FACE);a.resetGLState()}}};
THREE.GeometryUtils={merge:function(a,b,c){THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))},void 0,d)};for(var h=0,k=a.length;h<k;++h)b(h);return f},loadCompressedTexture:function(){THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),l=k.data,p=0;p<d;p++)for(var q=0;q<e;q++){var n=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,r=0>p-1?0:p-1,s=p+1>d-1?d-1:p+1,u=[],v=[0,0,h[4*(q*d+p)]/255*b];u.push([-1,0,h[4*(q*d+r)]/255*b]);u.push([-1,-1,h[4*(n*d+r)]/255*b]);u.push([0,-1,h[4*(n*d+p)]/255*b]);u.push([1,-1,h[4*(n*d+s)]/255*b]);u.push([1,0,h[4*(q*d+s)]/255*b]);u.push([1,1,h[4*(t*d+s)]/255*b]);u.push([0,1,h[4*(t*d+p)]/255*
b]);u.push([-1,1,h[4*(t*d+r)]/255*b]);n=[];r=u.length;for(t=0;t<r;t++){var s=u[t],x=u[(t+1)%r],s=[s[0]-v[0],s[1]-v[1],s[2]-v[2]],x=[x[0]-v[0],x[1]-v[1],x[2]-v[2]];n.push(c([s[1]*x[2]-s[2]*x[1],s[2]*x[0]-s[0]*x[2],s[0]*x[1]-s[1]*x[0]]))}u=[0,0,0];for(t=0;t<n.length;t++)u[0]+=n[t][0],u[1]+=n[t][1],u[2]+=n[t][2];u[0]/=n.length;u[1]/=n.length;u[2]/=n.length;v=4*(q*d+p);l[v]=(u[0]+1)/2*255|0;l[v+1]=(u[1]+1)/2*255|0;l[v+2]=255*u[2]|0;l[v+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,p,q,n,t,r,s,u,v=b.glyphs[a]||b.glyphs["?"];if(v){if(v.o)for(b=v._cachedOutline||(v._cachedOutline=v.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;p=b[a++]*c;e.moveTo(k,p);
break;case "l":k=b[a++]*c+d;p=b[a++]*c;e.lineTo(k,p);break;case "q":k=b[a++]*c+d;p=b[a++]*c;t=b[a++]*c+d;r=b[a++]*c;e.quadraticCurveTo(t,r,k,p);if(g=f[f.length-1])for(q=g.x,n=g.y,g=1,h=this.divisions;g<=h;g++){var x=g/h;THREE.Shape.Utils.b2(x,q,t,k);THREE.Shape.Utils.b2(x,n,r,p)}break;case "b":if(k=b[a++]*c+d,p=b[a++]*c,t=b[a++]*c+d,r=b[a++]*c,s=b[a++]*c+d,u=b[a++]*c,e.bezierCurveTo(t,r,s,u,k,p),g=f[f.length-1])for(q=g.x,n=g.y,g=1,h=this.divisions;g<=h;g++)x=g/h,THREE.Shape.Utils.b3(x,q,t,s,k),THREE.Shape.Utils.b3(x,
n,r,u,p)}return{offset:v.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,p;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);p=l+1;e<=p&&(p=0);var n;a:{var t=n=void 0,r=void 0,s=void 0,
u=void 0,v=void 0,x=void 0,D=void 0,w=void 0,t=a[g[k]].x,r=a[g[k]].y,s=a[g[l]].x,u=a[g[l]].y,v=a[g[p]].x,x=a[g[p]].y;if(1E-10>(s-t)*(x-r)-(u-r)*(v-t))n=!1;else{var y=void 0,A=void 0,E=void 0,G=void 0,F=void 0,z=void 0,I=void 0,U=void 0,M=void 0,H=void 0,M=U=I=w=D=void 0,y=v-s,A=x-u,E=t-v,G=r-x,F=s-t,z=u-r;for(n=0;n<e;n++)if(D=a[g[n]].x,w=a[g[n]].y,!(D===t&&w===r||D===s&&w===u||D===v&&w===x)&&(I=D-t,U=w-r,M=D-s,H=w-u,D-=v,w-=x,M=y*H-A*M,I=F*U-z*I,U=E*w-G*D,-1E-10<=M&&-1E-10<=U&&-1E-10<=I)){n=!1;break a}n=
!0}}if(n){f.push([a[g[k]],a[g[l]],a[g[p]]]);h.push([g[k],g[l],g[p]]);k=l;for(p=l+1;p<e;k++,p++)g[k]=g[p];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.panner=this.context.createPanner();this.panner.connect(this.gain);this.autoplay=!1;this.startTime=0;this.isPlaying=!1};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);THREE.Audio.prototype.constructor=THREE.Audio;
THREE.Audio.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.source.buffer=a;b.autoplay&&b.play()})};c.send();return this};
THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)THREE.warn("THREE.Audio: Audio is already playing.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.connect(this.panner);a.start(0,this.startTime);this.isPlaying=!0;this.source=a}};THREE.Audio.prototype.pause=function(){this.source.stop();this.startTime=this.context.currentTime};THREE.Audio.prototype.stop=function(){this.source.stop();this.startTime=0};
THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1};THREE.Audio.prototype.setLoop=function(a){this.source.loop=a};THREE.Audio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.Audio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a};
THREE.Audio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)};THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g){THREE.Object3D.prototype.updateMatrixWorld.call(this,g);g=this.context.listener;var h=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.subVectors(a,f);g.setPosition(a.x,a.y,a.z);g.setOrientation(d.x,d.y,d.z,h.x,h.y,h.z);g.setVelocity(e.x,e.y,e.z);f.copy(a)}}();
THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){THREE.warn("THREE.Curve: Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,p,q=a[0]instanceof THREE.Vector3;p=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),p.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);THREE.Gyroscope.prototype.constructor=THREE.Gyroscope;
THREE.Gyroscope.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Quaternion,f=new THREE.Vector3;return function(g){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||g)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(d,e,f),this.matrix.decompose(a,b,c),this.matrixWorld.compose(d,b,f)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
!1,g=!0;for(var h=0,k=this.children.length;h<k;h++)this.children[h].updateMatrixWorld(g)}}();THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};
THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};
THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,p,q,n,t,r,s;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];n=f[1];0<c.length?(g=c[c.length-1],t=g.x,
r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b2(s,t,q,h),s=THREE.Shape.Utils.b2(s,r,n,k),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];n=f[1];l=f[2];p=f[3];0<c.length?(g=c[c.length-1],t=g.x,r=g.y):(g=this.actions[d-1].args,t=g[g.length-2],r=g[g.length-1]);for(f=1;f<=a;f++)s=f/a,g=THREE.Shape.Utils.b3(s,t,q,l,h),s=THREE.Shape.Utils.b3(s,r,n,p,k),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;s=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;s=s.concat(f[0]);s=new THREE.SplineCurve(s);for(f=1;f<=g;f++)c.push(s.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];n=f[2];l=f[3];g=f[4];q=!!f[5];t=g-l;r=2*a;for(f=1;f<=r;f++)s=f/r,q||(s=1-s),s=l+s*t,g=h+n*Math.cos(s),s=k+n*Math.sin(s),c.push(new THREE.Vector2(g,s));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],n=f[2],p=f[3],l=f[4],g=f[5],q=!!f[6],t=g-l,r=2*a,f=1;f<=r;f++)s=f/r,q||
(s=1-s),s=l+s*t,g=h+n*Math.cos(s),s=k+p*Math.sin(s),c.push(new THREE.Vector2(g,s))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,n=h.y-g.y;if(1E-10<Math.abs(n)){if(0>n&&(g=b[f],k=-k,h=b[e],n=-n),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=n*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=
h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),l=a?!l:l;
h=[];var p=[],q=[],n=0,t;p[n]=void 0;q[n]=[];var r,s;r=0;for(s=e.length;r<s;r++)g=e[r],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!l&&p[n]&&n++,p[n]={s:new THREE.Shape,p:t},p[n].s.actions=g.actions,p[n].s.curves=g.curves,l&&n++,q[n]=[]):q[n].push({h:g,p:t[0]});if(!p[0])return c(e);if(1<p.length){r=!1;s=[];g=0;for(e=p.length;g<e;g++)h[g]=[];g=0;for(e=p.length;g<e;g++)for(f=q[g],l=0;l<f.length;l++){n=f[l];t=!0;for(var u=0;u<p.length;u++)d(n.p,p[u].p)&&(g!=u&&s.push({froms:g,tos:u,
hole:l}),t?(t=!1,h[u].push(n)):r=!0);t&&h[g].push(n)}0<s.length&&(r||(q=h))}r=0;for(s=p.length;r<s;r++)for(h=p[r].s,k.push(h),g=q[r],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,p=a.x-d.x,q=a.y-d.y,E=h*k-g*l,G=h*p-g*q;if(1E-10<Math.abs(E)){if(0<E){if(0>G||G>E)return[];k=l*p-k*q;if(0>k||k>E)return[]}else{if(0<G||G<E)return[];k=l*p-k*q;if(0<k||k<E)return[]}if(0==k)return!f||0!=G&&G!=E?[a]:[];if(k==E)return!f||0!=G&&G!=E?[b]:[];if(0==G)return[d];
if(G==E)return[e];f=k/E;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=G||l*p!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,E=d.x,l=e,d=e.x):(b=e,E=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,E=d.y,l=e,d=e.y):(b=e,E=e.y,l=d,d=d.y));return k<=E?a<E?[]:a==E?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,p={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==p[l]&&THREE.warn("THREE.Shape: Duplicate point",l),p[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);
if(!d)return!1;d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],p,q,A,E,G,F=[],z,I,U,M=0;for(p=b.length;M<p;M++)l.push(M);z=0;for(var H=2*l.length;0<l.length;){H--;if(0>
H){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break}for(q=z;q<h.length;q++){A=h[q];p=-1;for(M=0;M<l.length;M++)if(E=l[M],G=A.x+":"+A.y+":"+E,void 0===F[G]){k=b[E];for(I=0;I<k.length;I++)if(E=k[I],c(q,I)&&!f(A,E)&&!g(A,E)){p=I;l.splice(M,1);z=h.slice(0,q+1);E=h.slice(q);I=k.slice(p);U=k.slice(0,p+1);h=z.concat(I).concat(U).concat(E);z=q;break}if(0<=p)break;F[G]=!0}if(0<=p)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=
q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=p[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*
a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};
THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=new THREE.Vector2;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return b};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=new THREE.Vector2;b.x=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);return b.normalize()};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector2;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);return c};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};
THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);a=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;b=new THREE.Vector2;b.x=this.aX+this.xRadius*Math.cos(a);b.y=this.aY+this.yRadius*Math.sin(a);return b};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);b.z=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return b});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);b.y=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b.z=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return b});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-0;var c=Math.floor(a);a-=c;var c=c+(0<c?0:(Math.floor(Math.abs(c)/b.length)+1)*b.length),d=b[(c-1)%b.length],e=b[c%b.length],f=b[(c+1)%b.length],b=b[(c+2)%b.length],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){THREE.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){THREE.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){THREE.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0===a.initialized)return a;for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].resetBlendWeights();
for(b=0;b<this.animations.length;b++)this.animations[b].update(a)}};THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};
THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)},reset:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0===c.animationCache&&(c.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});
var d=this.data.name,e=c.animationCache.animations,f=e[d];void 0===f&&(f={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:c.matrix},e[d]=f);for(c=0;3>c;c++){for(var d=this.keyTypes[c],e=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(d,a,1);g.time<this.currentTime&&g.index>e.index;)e=g,g=this.getNextKeyWith(d,a,g.index+1);f.prevKey[d]=e;f.nextKey[d]=g}}},resetBlendWeights:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a].animationCache;void 0!==
c&&(c=c.blending,c.positionWeight=0,c.quaternionWeight=0,c.scaleWeight=0)}},update:function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,n,t,r,s;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];r=a[c[2]];s=a[c[3]];c=e*e;n=e*c;d[0]=f(q[0],t[0],r[0],s[0],e,c,n);d[1]=f(q[1],t[1],r[1],s[1],e,c,n);d[2]=f(q[2],t[2],r[2],s[2],e,c,n);return d},f=function(a,b,c,d,
e,f,n){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*n+(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(this.currentTime>f||0>this.currentTime)this.loop?(this.currentTime%=f,0>this.currentTime&&(this.currentTime+=f),this.reset()):this.stop();f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],l=k.animationCache.animations[this.data.name],p=k.animationCache.blending,q=0;3>q;q++){var n=this.keyTypes[q],
t=l.prevKey[n],r=l.nextKey[n];if(0<this.timeScale&&r.time<=this.currentTime||0>this.timeScale&&t.time>=this.currentTime){t=this.data.hierarchy[f].keys[0];for(r=this.getNextKeyWith(n,f,1);r.time<this.currentTime&&r.index>t.index;)t=r,r=this.getNextKeyWith(n,f,r.index+1);l.prevKey[n]=t;l.nextKey[n]=r}var s=(this.currentTime-t.time)/(r.time-t.time),u=t[n],v=r[n];0>s&&(s=0);1<s&&(s=1);if("pos"===n)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=u[0]+(v[0]-u[0])*s,c.y=u[1]+(v[1]-u[1])*s,
c.z=u[2]+(v[2]-u[2])*s,t=this.weight/(this.weight+p.positionWeight),k.position.lerp(c,t),p.positionWeight+=this.weight;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,t.index-1).pos,a[1]=u,a[2]=v,a[3]=this.getNextKeyWith("pos",f,r.index+1).pos,s=.33*s+.33,r=e(a,s),t=this.weight/(this.weight+p.positionWeight),p.positionWeight+=this.weight,n=k.position,n.x+=(r[0]-n.x)*t,n.y+=(r[1]-
n.y)*t,n.z+=(r[2]-n.z)*t,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(s=e(a,1.01*s),b.set(s[0],s[1],s[2]),b.sub(n),b.y=0,b.normalize(),s=Math.atan2(b.x,b.z),k.rotation.set(0,s,0))}else"rot"===n?(THREE.Quaternion.slerp(u,v,d,s),0===p.quaternionWeight?(k.quaternion.copy(d),p.quaternionWeight=this.weight):(t=this.weight/(this.weight+p.quaternionWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,t),p.quaternionWeight+=this.weight)):"scl"===n&&(c.x=u[0]+(v[0]-u[0])*s,c.y=
u[1]+(v[1]-u[1])*s,c.z=u[2]+(v[2]-u[2])*s,t=this.weight/(this.weight+p.scaleWeight),k.scale.lerp(c,t),p.scaleWeight+=this.weight)}return!0}}}(),getNextKeyWith:function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]},getPrevKeyWith:function(a,b,c){var d=
this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]}};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=
c[1],this.startTime=Math.min(c[0].time,this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)},stop:function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}},update:function(a){if(!1!==
this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):
f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]},getPrevKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]}};
THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.currentFrame=this.lastFrame=0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(a){if(!1!==this.isPlaying){this.currentTime+=a;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);a=this.duration/this.frames;var b=Math.floor(this.currentTime/a),c=this.mesh.morphTargetInfluences;b!=this.currentFrame&&(c[this.lastFrame]=0,c[this.currentFrame]=
1,c[b]=0,this.lastFrame=this.currentFrame,this.currentFrame=b);c[b]=this.currentTime%a/a;c[this.lastFrame]=1-c[b]}}};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,s){var u,v=h.widthSegments,x=h.heightSegments,D=e/2,w=f/2,y=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)u="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)u="y",x=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)u="x",v=h.depthSegments;var A=v+1,E=x+1,G=e/v,F=f/x,z=new THREE.Vector3;z[u]=0<g?1:-1;for(e=0;e<E;e++)for(f=0;f<A;f++){var I=new THREE.Vector3;I[a]=(f*G-D)*c;I[b]=(e*F-w)*d;I[u]=g;h.vertices.push(I)}for(e=
0;e<x;e++)for(f=0;f<v;f++)w=f+A*e,a=f+A*(e+1),b=f+1+A*(e+1),c=f+1+A*e,d=new THREE.Vector2(f/v,1-e/x),g=new THREE.Vector2(f/v,1-(e+1)/x),u=new THREE.Vector2((f+1)/v,1-(e+1)/x),D=new THREE.Vector2((f+1)/v,1-e/x),w=new THREE.Face3(w+y,a+y,c+y),w.normal.copy(z),w.vertexNormals.push(z.clone(),z.clone(),z.clone()),w.materialIndex=s,h.faces.push(w),h.faceVertexUvs[0].push([d,g,D]),w=new THREE.Face3(a+y,b+y,c+y),w.normal.copy(z),w.vertexNormals.push(z.clone(),z.clone(),z.clone()),w.materialIndex=s,h.faces.push(w),
h.faceVertexUvs[0].push([g.clone(),u,D.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(.5,.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,
0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CubeGeometry=function(a,b,c,d,e,f){THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=c/2,l,p,q=[],n=[];for(p=0;p<=e;p++){var t=[],r=[],s=p/e,u=s*(b-a)+a;for(l=0;l<=d;l++){var v=l/d,x=new THREE.Vector3;x.x=u*Math.sin(v*h+
g);x.y=-s*c+k;x.z=u*Math.cos(v*h+g);this.vertices.push(x);t.push(this.vertices.length-1);r.push(new THREE.Vector2(v,1-s))}q.push(t);n.push(r)}c=(b-a)/c;for(l=0;l<d;l++)for(0!==a?(g=this.vertices[q[0][l]].clone(),h=this.vertices[q[0][l+1]].clone()):(g=this.vertices[q[1][l]].clone(),h=this.vertices[q[1][l+1]].clone()),g.setY(Math.sqrt(g.x*g.x+g.z*g.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),p=0;p<e;p++){var t=q[p][l],r=q[p+1][l],s=q[p+1][l+1],u=q[p][l+1],v=g.clone(),x=g.clone(),
D=h.clone(),w=h.clone(),y=n[p][l].clone(),A=n[p+1][l].clone(),E=n[p+1][l+1].clone(),G=n[p][l+1].clone();this.faces.push(new THREE.Face3(t,r,u,[v,x,w]));this.faceVertexUvs[0].push([y,A,G]);this.faces.push(new THREE.Face3(r,s,u,[x.clone(),D,w.clone()]));this.faceVertexUvs[0].push([A.clone(),E,G.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),l=0;l<d;l++)t=q[0][l],r=q[0][l+1],s=this.vertices.length-1,v=new THREE.Vector3(0,1,0),x=new THREE.Vector3(0,1,0),D=new THREE.Vector3(0,
1,0),y=n[0][l].clone(),A=n[0][l+1].clone(),E=new THREE.Vector2(A.x,0),this.faces.push(new THREE.Face3(t,r,s,[v,x,D])),this.faceVertexUvs[0].push([y,A,E]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),l=0;l<d;l++)t=q[e][l+1],r=q[e][l],s=this.vertices.length-1,v=new THREE.Vector3(0,-1,0),x=new THREE.Vector3(0,-1,0),D=new THREE.Vector3(0,-1,0),y=n[e][l+1].clone(),A=n[e][l].clone(),E=new THREE.Vector2(A.x,1),this.faces.push(new THREE.Face3(t,r,s,[v,x,D])),this.faceVertexUvs[0].push([y,
A,E]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||THREE.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(1E-10<Math.abs(d*g-e*f)){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,1E-10<d?1E-10<f&&(a=!0):
-1E-10>d?-1E-10>f&&(a=!0):Math.sign(e)==Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(O=a.length;0<=--O;){c=O;d=O-1;0>d&&(d=a.length-1);for(var e=0,f=t+2*p,e=0;e<f;e++){var g=oa*e,h=oa*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+U,g=g+U,l=l+U,h=h+U;I.faces.push(new THREE.Face3(k,g,h,null,null,x));I.faces.push(new THREE.Face3(g,l,h,null,null,x));k=D.generateSideWallUV(I,k,g,l,h);I.faceVertexUvs[0].push([k[0],
k[1],k[3]]);I.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){I.vertices.push(new THREE.Vector3(a,b,c))}function g(a,b,c){a+=U;b+=U;c+=U;I.faces.push(new THREE.Face3(a,b,c,null,null,v));a=D.generateTopUV(I,a,b,c);I.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,p=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:
12,t=void 0!==b.steps?b.steps:1,r=b.extrudePath,s,u=!1,v=b.material,x=b.extrudeMaterial,D=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,w,y,A,E;r&&(s=r.getSpacedPoints(t),u=!0,q=!1,w=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,t,!1),y=new THREE.Vector3,A=new THREE.Vector3,E=new THREE.Vector3);q||(l=k=p=0);var G,F,z,I=this,U=this.vertices.length,r=a.extractPoints(n),n=r.shape,M=r.holes;if(r=!THREE.Shape.Utils.isClockWise(n)){n=n.reverse();F=0;for(z=
M.length;F<z;F++)G=M[F],THREE.Shape.Utils.isClockWise(G)&&(M[F]=G.reverse());r=!1}var H=THREE.Shape.Utils.triangulateShape(n,M),L=n;F=0;for(z=M.length;F<z;F++)G=M[F],n=n.concat(G);var P,N,R,V,J,oa=n.length,ja,ha=H.length,r=[],O=0;R=L.length;P=R-1;for(N=O+1;O<R;O++,P++,N++)P===R&&(P=0),N===R&&(N=0),r[O]=d(L[O],L[P],L[N]);var ca=[],ba,qa=r.concat();F=0;for(z=M.length;F<z;F++){G=M[F];ba=[];O=0;R=G.length;P=R-1;for(N=O+1;O<R;O++,P++,N++)P===R&&(P=0),N===R&&(N=0),ba[O]=d(G[O],G[P],G[N]);ca.push(ba);qa=
qa.concat(ba)}for(P=0;P<p;P++){R=P/p;V=k*(1-R);N=l*Math.sin(R*Math.PI/2);O=0;for(R=L.length;O<R;O++)J=c(L[O],r[O],N),f(J.x,J.y,-V);F=0;for(z=M.length;F<z;F++)for(G=M[F],ba=ca[F],O=0,R=G.length;O<R;O++)J=c(G[O],ba[O],N),f(J.x,J.y,-V)}N=l;for(O=0;O<oa;O++)J=q?c(n[O],qa[O],N):n[O],u?(A.copy(w.normals[0]).multiplyScalar(J.x),y.copy(w.binormals[0]).multiplyScalar(J.y),E.copy(s[0]).add(A).add(y),f(E.x,E.y,E.z)):f(J.x,J.y,0);for(R=1;R<=t;R++)for(O=0;O<oa;O++)J=q?c(n[O],qa[O],N):n[O],u?(A.copy(w.normals[R]).multiplyScalar(J.x),
y.copy(w.binormals[R]).multiplyScalar(J.y),E.copy(s[R]).add(A).add(y),f(E.x,E.y,E.z)):f(J.x,J.y,h/t*R);for(P=p-1;0<=P;P--){R=P/p;V=k*(1-R);N=l*Math.sin(R*Math.PI/2);O=0;for(R=L.length;O<R;O++)J=c(L[O],r[O],N),f(J.x,J.y,h+V);F=0;for(z=M.length;F<z;F++)for(G=M[F],ba=ca[F],O=0,R=G.length;O<R;O++)J=c(G[O],ba[O],N),u?f(J.x,J.y+s[t-1].y,s[t-1].x+V):f(J.x,J.y,h+V)}(function(){if(q){var a;a=0*oa;for(O=0;O<ha;O++)ja=H[O],g(ja[2]+a,ja[1]+a,ja[0]+a);a=t+2*p;a*=oa;for(O=0;O<ha;O++)ja=H[O],g(ja[0]+a,ja[1]+a,ja[2]+
a)}else{for(O=0;O<ha;O++)ja=H[O],g(ja[2],ja[1],ja[0]);for(O=0;O<ha;O++)ja=H[O],g(ja[0]+oa*t,ja[1]+oa*t,ja[2]+oa*t)}})();(function(){var a=0;e(L,a);a+=L.length;F=0;for(z=M.length;F<z;F++)G=M[F],e(G,a),a+=G.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var p=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
k=k.concat(g);l=k.length;f=p.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=p[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),p=Math.sin(k),k=0,q=a.length;k<q;k++){var n=a[k],t=new THREE.Vector3;t.x=l*n.x-p*n.y;t.y=p*n.x+l*n.y;t.z=n.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=p=k+c*g;d=p+c;var l=p+1+c,p=p+1,n=g*f,t=k*e,r=
n+f,s=t+e;this.faces.push(new THREE.Face3(b,d,p));this.faceVertexUvs[0].push([new THREE.Vector2(n,t),new THREE.Vector2(r,t),new THREE.Vector2(n,s)]);this.faces.push(new THREE.Face3(d,l,p));this.faceVertexUvs[0].push([new THREE.Vector2(r,t),new THREE.Vector2(r,s),new THREE.Vector2(n,s)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.");THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var p=new Float32Array(g*h*2),q=0,n=0,t=0;t<h;t++)for(var r=t*l-f,s=0;s<g;s++)b[q]=s*k-e,b[q+1]=-r,a[q+2]=1,p[n]=s/c,p[n+1]=1-t/d,q+=3,n+=2;q=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(t=0;t<d;t++)for(s=
0;s<c;s++)f=s+g*(t+1),h=s+1+g*(t+1),k=s+1+g*t,e[q]=s+g*t,e[q+1]=f,e[q+2]=k,e[q+3]=f,e[q+4]=h,e[q+5]=k,q+=6;this.addAttribute("index",new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(p,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var p=new THREE.Vector3,q=e+g/c*f;p.x=k*Math.cos(q);p.y=k*Math.sin(q);this.vertices.push(p);h.push(new THREE.Vector2((p.x/b+1)/2,
(p.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,l=q+c+1,p=q+c+2,this.faces.push(new THREE.Face3(f,l,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[p].clone()]),f=q,l=q+c+2,p=q+1,this.faces.push(new THREE.Face3(f,l,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[p].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,l=[],p=[];for(k=0;k<=c;k++){var q=[],n=[];for(h=0;h<=b;h++){var t=h/b,r=k/c,s=new THREE.Vector3;s.x=-a*Math.cos(d+t*e)*Math.sin(f+r*g);
s.y=a*Math.cos(f+r*g);s.z=a*Math.sin(d+t*e)*Math.sin(f+r*g);this.vertices.push(s);q.push(this.vertices.length-1);n.push(new THREE.Vector2(t,1-r))}l.push(q);p.push(n)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=l[k][h+1];e=l[k][h];f=l[k+1][h];g=l[k+1][h+1];var q=this.vertices[d].clone().normalize(),n=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),r=this.vertices[g].clone().normalize(),s=p[k][h+1].clone(),u=p[k][h].clone(),v=p[k+1][h].clone(),x=p[k+1][h+1].clone();Math.abs(this.vertices[d].y)===
a?(s.x=(s.x+u.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,r])),this.faceVertexUvs[0].push([s,v,x])):Math.abs(this.vertices[f].y)===a?(v.x=(v.x+x.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,n,t])),this.faceVertexUvs[0].push([s,u,v])):(this.faces.push(new THREE.Face3(d,e,g,[q,n,r])),this.faceVertexUvs[0].push([s,u,x]),this.faces.push(new THREE.Face3(e,f,g,[n.clone(),t,r.clone()])),this.faceVertexUvs[0].push([u.clone(),v,x.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var p=l/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(p);f.y=a*Math.sin(p);var n=new THREE.Vector3;n.x=(a+b*Math.cos(q))*Math.cos(p);n.y=(a+b*Math.cos(q))*Math.sin(p);n.z=b*Math.sin(q);this.vertices.push(n);g.push(new THREE.Vector2(l/
d,k/c));h.push(n.clone().sub(f).normalize())}for(k=1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,p=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),p=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,p=new THREE.Vector3,q=new THREE.Vector3,n=0;n<c;++n){k[n]=
Array(d);var t=n/c*2*e*Math.PI,r=h(t,f,e,a,g),t=h(t+.01,f,e,a,g);l.subVectors(t,r);p.addVectors(t,r);q.crossVectors(l,p);p.crossVectors(q,l);q.normalize();p.normalize();for(t=0;t<d;++t){var s=t/d*2*Math.PI,u=-b*Math.cos(s),s=b*Math.sin(s),v=new THREE.Vector3;v.x=r.x+u*p.x+s*q.x;v.y=r.y+u*p.y+s*q.y;v.z=r.z+u*p.z+s*q.z;k[n][t]=this.vertices.push(v)-1}}for(n=0;n<c;++n)for(t=0;t<d;++t)e=(n+1)%c,f=(t+1)%d,a=k[n][t],b=k[e][t],e=k[e][f],f=k[n][f],g=new THREE.Vector2(n/c,t/d),l=new THREE.Vector2((n+1)/c,
t/d),p=new THREE.Vector2((n+1)/c,(t+1)/d),q=new THREE.Vector2(n/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),p,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;f=f||THREE.TubeGeometry.NoTaper;var g=[],h,k,l=b+1,p,q,n,t,r,s=new THREE.Vector3,u,v,x;u=new THREE.TubeGeometry.FrenetFrames(a,b,e);v=u.normals;x=u.binormals;this.tangents=u.tangents;this.normals=v;this.binormals=x;for(u=0;u<l;u++)for(g[u]=[],p=u/(l-1),r=a.getPointAt(p),h=v[u],k=x[u],n=c*f(p),p=0;p<d;p++)q=
p/d*2*Math.PI,t=-n*Math.cos(q),q=n*Math.sin(q),s.copy(r),s.x+=t*h.x+q*k.x,s.y+=t*h.y+q*k.y,s.z+=t*h.z+q*k.z,g[u][p]=this.vertices.push(new THREE.Vector3(s.x,s.y,s.z))-1;for(u=0;u<b;u++)for(p=0;p<d;p++)f=e?(u+1)%b:u+1,l=(p+1)%d,a=g[u][p],c=g[f][p],f=g[f][l],l=g[u][l],s=new THREE.Vector2(u/b,p/d),v=new THREE.Vector2((u+1)/b,p/d),x=new THREE.Vector2((u+1)/b,(p+1)/d),h=new THREE.Vector2(u/b,(p+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([s,v,h]),this.faces.push(new THREE.Face3(c,
f,l)),this.faceVertexUvs[0].push([v.clone(),x,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3,e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,p,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)p=l/(b-1),e[l]=a.getTangentAt(p),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);p=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));p<=a&&(a=p,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();f[0].crossVectors(e[0],
h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);u.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(u.z,-u.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,
b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),s=c-n,r=0;r<=s;r++)l[n][r]=0==r&&n==c?p:e(p.clone().lerp(q,r/s))}for(n=0;n<c;n++)for(r=0;r<2*(c-n)-1;r++)d=Math.floor(r/2),0==r%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+.5,a.y));return a.clone()}
THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,p=a.length;l<p;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var q=[],n=l=0,p=b.length;l<p;l+=3,n++){var t=a[b[l]],r=a[b[l+1]],s=a[b[l+2]];q[n]=new THREE.Face3(t.index,r.index,s.index,[t.clone(),r.clone(),s.clone()])}for(var u=new THREE.Vector3,l=0,p=q.length;l<p;l++)g(q[l],d);l=0;for(p=this.faceVertexUvs[0].length;l<p;l++)b=this.faceVertexUvs[0][l],
d=b[0].x,a=b[1].x,q=b[2].x,n=Math.max(d,Math.max(a,q)),t=Math.min(d,Math.min(a,q)),.9<n&&.1>t&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>q&&(b[2].x+=1));l=0;for(p=this.vertices.length;l<p;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,
11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b)};THREE.DodecahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,p=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,n,t,r;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*p+h,d=g*p+h+1,l=(g+1)*p+h+1,k=(g+1)*p+h,q=new THREE.Vector2(h/b,g/c),n=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),r=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,
d,k)),f.push([q,n,r]),e.push(new THREE.Face3(d,l,k)),f.push([n.clone(),t,r.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=.2*e);void 0===h&&(h=.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,a-b,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){var a,b,c=new THREE.Vector3,d=new THREE.Camera,e=function(e,g,h,k){c.set(g,h,k).unproject(d);e=b[e];if(void 0!==e)for(g=0,h=e.length;g<h;g++)a.vertices[e[g]].copy(c)};return function(){a=this.geometry;b=this.pointMap;d.projectionMatrix.copy(this.camera.projectionMatrix);e("c",0,0,-1);e("t",0,0,1);e("n1",-1,-1,-1);e("n2",1,-1,-1);e("n3",-1,1,-1);e("n4",1,1,-1);e("f1",-1,-1,1);e("f2",1,-1,1);e("f3",-1,1,1);e("f4",1,1,1);e("u1",.7,1.1,-1);e("u2",-.7,1.1,
-1);e("u3",0,2,-1);e("cf1",-1,0,1);e("cf2",1,0,1);e("cf3",0,-1,1);e("cf4",0,1,1);e("cn1",-1,0,-1);e("cn2",1,0,-1);e("cn3",0,-1,-1);e("cn4",0,1,-1);a.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;c=Math.cos(THREE.Math.degToRad(void 0!==c?c:1));var d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k;a.geometry instanceof THREE.BufferGeometry?(k=new THREE.Geometry,k.fromBufferGeometry(a.geometry)):k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();var l=k.vertices;k=k.faces;for(var p=0,q=0,n=k.length;q<n;q++)for(var t=k[q],r=0;3>r;r++){d[0]=t[g[r]];d[1]=t[g[(r+1)%3]];d.sort(f);var s=d.toString();
void 0===e[s]?(e[s]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},p++):e[s].face2=q}d=new Float32Array(6*p);f=0;for(s in e)if(g=e[s],void 0===g.face2||k[g.face1].normal.dot(k[g.face2].normal)<=c)p=l[g.vert1],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z,p=l[g.vert2],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3));THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:b}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};
THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};
THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var p=f[k],q=0,n=p.vertexNormals.length;q<n;q++){var t=p.vertexNormals[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.constructor=THREE.VertexTangentsHelper;
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var p=f[k],q=0,n=p.vertexTangents.length;q<n;q++){var t=p.vertexTangents[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,p=0,q=new Uint32Array(6*l.length),n=0,t=l.length;n<t;n++)for(var r=l[n],s=0;3>s;s++){d[0]=r[g[s]];d[1]=r[g[(s+1)%3]];d.sort(f);var u=d.toString();void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++)}d=new Float32Array(6*p);n=0;for(t=p;n<t;n++)for(s=0;2>s;s++)p=
k[q[2*n+s]],g=6*n+3*s,d[g+0]=p.x,d[g+1]=p.y,d[g+2]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){k=a.geometry.attributes.position.array;t=a.geometry.attributes.index.array;l=a.geometry.drawcalls;p=0;0===l.length&&(l=[{count:t.length,index:0,start:0}]);for(var q=new Uint32Array(2*t.length),r=0,v=l.length;r<v;++r)for(var s=l[r].start,u=l[r].count,g=l[r].index,n=s,x=s+u;n<x;n+=3)for(s=0;3>s;s++)d[0]=
g+t[n+s],d[1]=g+t[n+(s+1)%3],d.sort(f),u=d.toString(),void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++);d=new Float32Array(6*p);n=0;for(t=p;n<t;n++)for(s=0;2>s;s++)g=6*n+3*s,p=3*q[2*n+s],d[g+0]=k[p],d[g+1]=k[p+1],d[g+2]=k[p+2]}else for(k=a.geometry.attributes.position.array,p=k.length/3,q=p/3,d=new Float32Array(6*p),n=0,t=q;n<t;n++)for(s=0;3>s;s++)g=18*n+6*s,q=9*n+3*s,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],p=9*n+(s+1)%3*3,d[g+3]=k[p],d[g+4]=k[p+1],d[g+5]=k[p+2];h.addAttribute("position",new THREE.BufferAttribute(d,
3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):THREE.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
;
(function () {define('src/three/ThreeEngine',["require", "exports"], function (require, exports) {
    var ThreeEngine;
    (function (ThreeEngine) {
        /**
         * The default engine config
         */
        ThreeEngine.DEFAULT_ENGINE_CONFIG = {
            antialias: true,
            backgroundColor: 0xFFFFFF,
            backgroundAlpha: 1,
            autoPixelRatio: true,
            cameraFov: 70,
            cameraNear: 10,
            cameraFar: 10000
        };
        /**
         * Detect WebGL capability
         */
        function isWebglAvailable() {
            try {
                var canvas = document.createElement("canvas");
                return !!(window["WebGLRenderingContext"] &&
                    (canvas.getContext("webgl") ||
                        canvas.getContext("experimental-webgl")));
            }
            catch (e) {
                return false;
            }
        }
        ThreeEngine.isWebglAvailable = isWebglAvailable;
        /**
         * 3D Scene base to extend
         */
        var SceneBase = (function () {
            function SceneBase() {
                var _this = this;
                /**
                 * Called when browser is resized
                 */
                this.windowResizedHandler = function (pEvent) {
                    if (pEvent === void 0) { pEvent = null; }
                    // Compute render size from stage dom element
                    _this._renderSize = [window.innerWidth, window.innerHeight];
                    // Update camera aspect ratio
                    _this._camera.aspect = _this._renderSize[0] / _this._renderSize[1];
                    // Update camera projection
                    _this._camera.updateProjectionMatrix();
                    // Update renderer
                    _this._renderer.setSize(_this._renderSize[0], _this._renderSize[1]);
                };
            }
            Object.defineProperty(SceneBase.prototype, "renderer", {
                get: function () { return this._renderer; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneBase.prototype, "camera", {
                get: function () { return this._camera; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneBase.prototype, "scene", {
                get: function () { return this._scene; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SceneBase.prototype, "renderSize", {
                get: function () { return this._renderSize; },
                enumerable: true,
                configurable: true
            });
            /**
             * Init Three.js engine
             */
            SceneBase.prototype.initEngine = function (pConfig) {
                var _this = this;
                if (pConfig === void 0) { pConfig = ThreeEngine.DEFAULT_ENGINE_CONFIG; }
                // Check if our system support WebGL rendering
                if (ThreeEngine.isWebglAvailable()) {
                    // Instantiate the WebGL renderer
                    this._renderer = new THREE.WebGLRenderer({
                        antialias: pConfig.antialias
                    });
                    // Set the background color
                    this._renderer.setClearColor(pConfig.backgroundColor, pConfig.backgroundAlpha);
                }
                else
                    return false;
                // Define pixel ratio
                if (pConfig.autoPixelRatio) {
                    this._renderer['setPixelRatio'](window.devicePixelRatio);
                }
                // Add the three dom element (canvas) to the stage dom element
                document.getElementById("stage").appendChild(this._renderer.domElement);
                // Init default perspective camera
                this._camera = new THREE.PerspectiveCamera(pConfig.cameraFov, 1, pConfig.cameraNear, pConfig.cameraFar);
                // Init scene
                this._scene = new THREE.Scene();
                // Listen for brower resize
                window.onresize = this.windowResizedHandler;
                // Update size once
                this.windowResizedHandler();
                // Init scene
                this.initScene();
                // Enable render loop
                TweenLite.ticker.addEventListener("tick", function () {
                    _this.enterFrameHandler();
                });
                // Render the first frame
                this.enterFrameHandler();
                // All is ok
                return true;
            };
            /**
             * Called to init scene after engine. Have to be overrided via strategy pattern.
             */
            SceneBase.prototype.initScene = function () { };
            /**
             * Called every frames to run animations
             */
            SceneBase.prototype.enterFrameHandler = function () {
                // Render a frame
                this.renderer.render(this.scene, this.camera);
            };
            return SceneBase;
        })();
        ThreeEngine.SceneBase = SceneBase;
    })(ThreeEngine || (ThreeEngine = {}));
    return ThreeEngine;
});

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define('src/scene/MyScene',["require", "exports", "../three/ThreeEngine"], function (require, exports, ThreeEngine) {
    /**
     * Our scene extends the default scene from the helper
     */
    var MyScene = (function (_super) {
        __extends(MyScene, _super);
        /**
         * Class constructor
         */
        function MyScene() {
            // Relay construction
            _super.call(this);
            // Try to init the 3D engine
            if (!this.initEngine()) {
                alert("Your system does not support WebGL :(");
            }
        }
        /**
         * Called to init the 3D scene when the engine is ready
         */
        MyScene.prototype.initScene = function () {
            // There will be light
            this._light = new THREE.DirectionalLight(0xFFFFFF, .8);
            // Add the light to our scene
            this.scene.add(this._light);
            // Place the light above our subject
            this._light.position.set(1000, 500, 1000);
            // Create a geometry for our cube
            var cubeGeometry = new THREE.BoxGeometry(200, 200, 200, 1, 1, 1);
            // Create the material for our cube
            var cubeMaterial = new THREE.MeshPhongMaterial({
                color: 0xDEDEDE,
                ambient: 0x555555,
                shininess: 100
            });
            // Create the mesh from the geometry and the material
            // Meshs are 3D objects
            this._cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
            // Add the 3D cube to our scene
            this.scene.add(this._cubeMesh);
            // Set the camera position away from our cube to see it
            this.camera.position.z = 600;
        };
        /**
         * Called each frame (~60 times a second)
         */
        MyScene.prototype.enterFrameHandler = function () {
            // Rotate our cube
            this._cubeMesh.rotation.x += 0.02;
            this._cubeMesh.rotation.y += 0.01;
            // Relayer le rendu
            _super.prototype.enterFrameHandler.call(this);
        };
        return MyScene;
    })(ThreeEngine.SceneBase);
    return MyScene;
});

define('src/app/App',["require", "exports", "src/scene/MyScene"], function (require, exports, MyScene) {
    var App;
    (function (App) {
        /**
         * Main class
         */
        var Main = (function () {
            /**
             * App constructor
             */
            function Main() {
                this.initScene();
            }
            /**
             * Init our specific scene
             */
            Main.prototype.initScene = function () {
                this._myScene = new MyScene();
            };
            return Main;
        })();
        App.Main = Main;
    })(App || (App = {}));
    return App;
});

}());