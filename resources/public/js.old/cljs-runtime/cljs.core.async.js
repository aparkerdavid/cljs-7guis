goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40139 = arguments.length;
switch (G__40139) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40144 = (function (f,blockable,meta40145){
this.f = f;
this.blockable = blockable;
this.meta40145 = meta40145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40146,meta40145__$1){
var self__ = this;
var _40146__$1 = this;
return (new cljs.core.async.t_cljs$core$async40144(self__.f,self__.blockable,meta40145__$1));
}));

(cljs.core.async.t_cljs$core$async40144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40146){
var self__ = this;
var _40146__$1 = this;
return self__.meta40145;
}));

(cljs.core.async.t_cljs$core$async40144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40145","meta40145",1710775162,null)], null);
}));

(cljs.core.async.t_cljs$core$async40144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40144");

(cljs.core.async.t_cljs$core$async40144.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40144.
 */
cljs.core.async.__GT_t_cljs$core$async40144 = (function cljs$core$async$__GT_t_cljs$core$async40144(f__$1,blockable__$1,meta40145){
return (new cljs.core.async.t_cljs$core$async40144(f__$1,blockable__$1,meta40145));
});

}

return (new cljs.core.async.t_cljs$core$async40144(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40181 = arguments.length;
switch (G__40181) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40196 = arguments.length;
switch (G__40196) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40225 = arguments.length;
switch (G__40225) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42922 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42922) : fn1.call(null,val_42922));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42922) : fn1.call(null,val_42922));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40268 = arguments.length;
switch (G__40268) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___42929 = n;
var x_42930 = (0);
while(true){
if((x_42930 < n__4613__auto___42929)){
(a[x_42930] = x_42930);

var G__42931 = (x_42930 + (1));
x_42930 = G__42931;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40309 = (function (flag,meta40310){
this.flag = flag;
this.meta40310 = meta40310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40311,meta40310__$1){
var self__ = this;
var _40311__$1 = this;
return (new cljs.core.async.t_cljs$core$async40309(self__.flag,meta40310__$1));
}));

(cljs.core.async.t_cljs$core$async40309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40311){
var self__ = this;
var _40311__$1 = this;
return self__.meta40310;
}));

(cljs.core.async.t_cljs$core$async40309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40310","meta40310",-1690164993,null)], null);
}));

(cljs.core.async.t_cljs$core$async40309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40309");

(cljs.core.async.t_cljs$core$async40309.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40309.
 */
cljs.core.async.__GT_t_cljs$core$async40309 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40309(flag__$1,meta40310){
return (new cljs.core.async.t_cljs$core$async40309(flag__$1,meta40310));
});

}

return (new cljs.core.async.t_cljs$core$async40309(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40323 = (function (flag,cb,meta40324){
this.flag = flag;
this.cb = cb;
this.meta40324 = meta40324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40325,meta40324__$1){
var self__ = this;
var _40325__$1 = this;
return (new cljs.core.async.t_cljs$core$async40323(self__.flag,self__.cb,meta40324__$1));
}));

(cljs.core.async.t_cljs$core$async40323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40325){
var self__ = this;
var _40325__$1 = this;
return self__.meta40324;
}));

(cljs.core.async.t_cljs$core$async40323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40324","meta40324",102579581,null)], null);
}));

(cljs.core.async.t_cljs$core$async40323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40323");

(cljs.core.async.t_cljs$core$async40323.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async40323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40323.
 */
cljs.core.async.__GT_t_cljs$core$async40323 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40323(flag__$1,cb__$1,meta40324){
return (new cljs.core.async.t_cljs$core$async40323(flag__$1,cb__$1,meta40324));
});

}

return (new cljs.core.async.t_cljs$core$async40323(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40337_SHARP_){
var G__40348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40337_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40348) : fret.call(null,G__40348));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40338_SHARP_){
var G__40349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40338_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40349) : fret.call(null,G__40349));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42948 = (i + (1));
i = G__42948;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42949 = arguments.length;
var i__4737__auto___42950 = (0);
while(true){
if((i__4737__auto___42950 < len__4736__auto___42949)){
args__4742__auto__.push((arguments[i__4737__auto___42950]));

var G__42951 = (i__4737__auto___42950 + (1));
i__4737__auto___42950 = G__42951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40361){
var map__40362 = p__40361;
var map__40362__$1 = (((((!((map__40362 == null))))?(((((map__40362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40362):map__40362);
var opts = map__40362__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40353){
var G__40354 = cljs.core.first(seq40353);
var seq40353__$1 = cljs.core.next(seq40353);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40354,seq40353__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40373 = arguments.length;
switch (G__40373) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40038__auto___42959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_40477){
var state_val_40491 = (state_40477[(1)]);
if((state_val_40491 === (7))){
var inst_40473 = (state_40477[(2)]);
var state_40477__$1 = state_40477;
var statearr_40524_42964 = state_40477__$1;
(statearr_40524_42964[(2)] = inst_40473);

(statearr_40524_42964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (1))){
var state_40477__$1 = state_40477;
var statearr_40529_42965 = state_40477__$1;
(statearr_40529_42965[(2)] = null);

(statearr_40529_42965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (4))){
var inst_40434 = (state_40477[(7)]);
var inst_40434__$1 = (state_40477[(2)]);
var inst_40440 = (inst_40434__$1 == null);
var state_40477__$1 = (function (){var statearr_40540 = state_40477;
(statearr_40540[(7)] = inst_40434__$1);

return statearr_40540;
})();
if(cljs.core.truth_(inst_40440)){
var statearr_40545_42970 = state_40477__$1;
(statearr_40545_42970[(1)] = (5));

} else {
var statearr_40546_42989 = state_40477__$1;
(statearr_40546_42989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (13))){
var state_40477__$1 = state_40477;
var statearr_40547_42990 = state_40477__$1;
(statearr_40547_42990[(2)] = null);

(statearr_40547_42990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (6))){
var inst_40434 = (state_40477[(7)]);
var state_40477__$1 = state_40477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40477__$1,(11),to,inst_40434);
} else {
if((state_val_40491 === (3))){
var inst_40475 = (state_40477[(2)]);
var state_40477__$1 = state_40477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40477__$1,inst_40475);
} else {
if((state_val_40491 === (12))){
var state_40477__$1 = state_40477;
var statearr_40552_42993 = state_40477__$1;
(statearr_40552_42993[(2)] = null);

(statearr_40552_42993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (2))){
var state_40477__$1 = state_40477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40477__$1,(4),from);
} else {
if((state_val_40491 === (11))){
var inst_40460 = (state_40477[(2)]);
var state_40477__$1 = state_40477;
if(cljs.core.truth_(inst_40460)){
var statearr_40553_42994 = state_40477__$1;
(statearr_40553_42994[(1)] = (12));

} else {
var statearr_40554_42995 = state_40477__$1;
(statearr_40554_42995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (9))){
var state_40477__$1 = state_40477;
var statearr_40555_42998 = state_40477__$1;
(statearr_40555_42998[(2)] = null);

(statearr_40555_42998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (5))){
var state_40477__$1 = state_40477;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40556_42999 = state_40477__$1;
(statearr_40556_42999[(1)] = (8));

} else {
var statearr_40557_43000 = state_40477__$1;
(statearr_40557_43000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (14))){
var inst_40471 = (state_40477[(2)]);
var state_40477__$1 = state_40477;
var statearr_40558_43003 = state_40477__$1;
(statearr_40558_43003[(2)] = inst_40471);

(statearr_40558_43003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (10))){
var inst_40451 = (state_40477[(2)]);
var state_40477__$1 = state_40477;
var statearr_40559_43005 = state_40477__$1;
(statearr_40559_43005[(2)] = inst_40451);

(statearr_40559_43005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (8))){
var inst_40448 = cljs.core.async.close_BANG_(to);
var state_40477__$1 = state_40477;
var statearr_40560_43006 = state_40477__$1;
(statearr_40560_43006[(2)] = inst_40448);

(statearr_40560_43006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_40562 = [null,null,null,null,null,null,null,null];
(statearr_40562[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_40562[(1)] = (1));

return statearr_40562;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_40477){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_40477);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e40564){var ex__39901__auto__ = e40564;
var statearr_40568_43007 = state_40477;
(statearr_40568_43007[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_40477[(4)]))){
var statearr_40569_43008 = state_40477;
(statearr_40569_43008[(1)] = cljs.core.first((state_40477[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43009 = state_40477;
state_40477 = G__43009;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_40477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_40477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_40576 = f__40039__auto__();
(statearr_40576[(6)] = c__40038__auto___42959);

return statearr_40576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__40581){
var vec__40582 = p__40581;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40582,(1),null);
var job = vec__40582;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40038__auto___43012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_40589){
var state_val_40590 = (state_40589[(1)]);
if((state_val_40590 === (1))){
var state_40589__$1 = state_40589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40589__$1,(2),res,v);
} else {
if((state_val_40590 === (2))){
var inst_40586 = (state_40589[(2)]);
var inst_40587 = cljs.core.async.close_BANG_(res);
var state_40589__$1 = (function (){var statearr_40597 = state_40589;
(statearr_40597[(7)] = inst_40586);

return statearr_40597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40589__$1,inst_40587);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0 = (function (){
var statearr_40599 = [null,null,null,null,null,null,null,null];
(statearr_40599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__);

(statearr_40599[(1)] = (1));

return statearr_40599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1 = (function (state_40589){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_40589);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e40600){var ex__39901__auto__ = e40600;
var statearr_40601_43015 = state_40589;
(statearr_40601_43015[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_40589[(4)]))){
var statearr_40602_43018 = state_40589;
(statearr_40602_43018[(1)] = cljs.core.first((state_40589[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43019 = state_40589;
state_40589 = G__43019;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = function(state_40589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1.call(this,state_40589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_40611 = f__40039__auto__();
(statearr_40611[(6)] = c__40038__auto___43012);

return statearr_40611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40614){
var vec__40617 = p__40614;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40617,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40617,(1),null);
var job = vec__40617;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___43023 = n;
var __43025 = (0);
while(true){
if((__43025 < n__4613__auto___43023)){
var G__40623_43026 = type;
var G__40623_43027__$1 = (((G__40623_43026 instanceof cljs.core.Keyword))?G__40623_43026.fqn:null);
switch (G__40623_43027__$1) {
case "compute":
var c__40038__auto___43029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43025,c__40038__auto___43029,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async){
return (function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = ((function (__43025,c__40038__auto___43029,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async){
return (function (state_40637){
var state_val_40638 = (state_40637[(1)]);
if((state_val_40638 === (1))){
var state_40637__$1 = state_40637;
var statearr_40639_43030 = state_40637__$1;
(statearr_40639_43030[(2)] = null);

(statearr_40639_43030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40638 === (2))){
var state_40637__$1 = state_40637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40637__$1,(4),jobs);
} else {
if((state_val_40638 === (3))){
var inst_40635 = (state_40637[(2)]);
var state_40637__$1 = state_40637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40637__$1,inst_40635);
} else {
if((state_val_40638 === (4))){
var inst_40627 = (state_40637[(2)]);
var inst_40628 = process(inst_40627);
var state_40637__$1 = state_40637;
if(cljs.core.truth_(inst_40628)){
var statearr_40651_43034 = state_40637__$1;
(statearr_40651_43034[(1)] = (5));

} else {
var statearr_40652_43035 = state_40637__$1;
(statearr_40652_43035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40638 === (5))){
var state_40637__$1 = state_40637;
var statearr_40655_43036 = state_40637__$1;
(statearr_40655_43036[(2)] = null);

(statearr_40655_43036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40638 === (6))){
var state_40637__$1 = state_40637;
var statearr_40657_43037 = state_40637__$1;
(statearr_40657_43037[(2)] = null);

(statearr_40657_43037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40638 === (7))){
var inst_40633 = (state_40637[(2)]);
var state_40637__$1 = state_40637;
var statearr_40658_43042 = state_40637__$1;
(statearr_40658_43042[(2)] = inst_40633);

(statearr_40658_43042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43025,c__40038__auto___43029,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async))
;
return ((function (__43025,switch__39897__auto__,c__40038__auto___43029,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0 = (function (){
var statearr_40665 = [null,null,null,null,null,null,null];
(statearr_40665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__);

(statearr_40665[(1)] = (1));

return statearr_40665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1 = (function (state_40637){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_40637);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e40667){var ex__39901__auto__ = e40667;
var statearr_40669_43043 = state_40637;
(statearr_40669_43043[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_40637[(4)]))){
var statearr_40673_43044 = state_40637;
(statearr_40673_43044[(1)] = cljs.core.first((state_40637[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43045 = state_40637;
state_40637 = G__43045;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = function(state_40637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1.call(this,state_40637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__;
})()
;})(__43025,switch__39897__auto__,c__40038__auto___43029,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async))
})();
var state__40040__auto__ = (function (){var statearr_40677 = f__40039__auto__();
(statearr_40677[(6)] = c__40038__auto___43029);

return statearr_40677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
});})(__43025,c__40038__auto___43029,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async))
);


break;
case "async":
var c__40038__auto___43047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43025,c__40038__auto___43047,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async){
return (function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = ((function (__43025,c__40038__auto___43047,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async){
return (function (state_40702){
var state_val_40703 = (state_40702[(1)]);
if((state_val_40703 === (1))){
var state_40702__$1 = state_40702;
var statearr_40711_43048 = state_40702__$1;
(statearr_40711_43048[(2)] = null);

(statearr_40711_43048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (2))){
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40702__$1,(4),jobs);
} else {
if((state_val_40703 === (3))){
var inst_40700 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40702__$1,inst_40700);
} else {
if((state_val_40703 === (4))){
var inst_40686 = (state_40702[(2)]);
var inst_40687 = async(inst_40686);
var state_40702__$1 = state_40702;
if(cljs.core.truth_(inst_40687)){
var statearr_40714_43049 = state_40702__$1;
(statearr_40714_43049[(1)] = (5));

} else {
var statearr_40715_43050 = state_40702__$1;
(statearr_40715_43050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (5))){
var state_40702__$1 = state_40702;
var statearr_40717_43051 = state_40702__$1;
(statearr_40717_43051[(2)] = null);

(statearr_40717_43051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (6))){
var state_40702__$1 = state_40702;
var statearr_40718_43054 = state_40702__$1;
(statearr_40718_43054[(2)] = null);

(statearr_40718_43054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (7))){
var inst_40697 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
var statearr_40719_43055 = state_40702__$1;
(statearr_40719_43055[(2)] = inst_40697);

(statearr_40719_43055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43025,c__40038__auto___43047,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async))
;
return ((function (__43025,switch__39897__auto__,c__40038__auto___43047,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0 = (function (){
var statearr_40721 = [null,null,null,null,null,null,null];
(statearr_40721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__);

(statearr_40721[(1)] = (1));

return statearr_40721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1 = (function (state_40702){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_40702);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e40724){var ex__39901__auto__ = e40724;
var statearr_40725_43063 = state_40702;
(statearr_40725_43063[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_40702[(4)]))){
var statearr_40726_43067 = state_40702;
(statearr_40726_43067[(1)] = cljs.core.first((state_40702[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43069 = state_40702;
state_40702 = G__43069;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = function(state_40702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1.call(this,state_40702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__;
})()
;})(__43025,switch__39897__auto__,c__40038__auto___43047,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async))
})();
var state__40040__auto__ = (function (){var statearr_40731 = f__40039__auto__();
(statearr_40731[(6)] = c__40038__auto___43047);

return statearr_40731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
});})(__43025,c__40038__auto___43047,G__40623_43026,G__40623_43027__$1,n__4613__auto___43023,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40623_43027__$1)].join('')));

}

var G__43070 = (__43025 + (1));
__43025 = G__43070;
continue;
} else {
}
break;
}

var c__40038__auto___43071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_40768){
var state_val_40770 = (state_40768[(1)]);
if((state_val_40770 === (7))){
var inst_40762 = (state_40768[(2)]);
var state_40768__$1 = state_40768;
var statearr_40778_43075 = state_40768__$1;
(statearr_40778_43075[(2)] = inst_40762);

(statearr_40778_43075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40770 === (1))){
var state_40768__$1 = state_40768;
var statearr_40781_43076 = state_40768__$1;
(statearr_40781_43076[(2)] = null);

(statearr_40781_43076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40770 === (4))){
var inst_40738 = (state_40768[(7)]);
var inst_40738__$1 = (state_40768[(2)]);
var inst_40739 = (inst_40738__$1 == null);
var state_40768__$1 = (function (){var statearr_40787 = state_40768;
(statearr_40787[(7)] = inst_40738__$1);

return statearr_40787;
})();
if(cljs.core.truth_(inst_40739)){
var statearr_40790_43077 = state_40768__$1;
(statearr_40790_43077[(1)] = (5));

} else {
var statearr_40791_43078 = state_40768__$1;
(statearr_40791_43078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40770 === (6))){
var inst_40738 = (state_40768[(7)]);
var inst_40746 = (state_40768[(8)]);
var inst_40746__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40754 = [inst_40738,inst_40746__$1];
var inst_40755 = (new cljs.core.PersistentVector(null,2,(5),inst_40749,inst_40754,null));
var state_40768__$1 = (function (){var statearr_40797 = state_40768;
(statearr_40797[(8)] = inst_40746__$1);

return statearr_40797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40768__$1,(8),jobs,inst_40755);
} else {
if((state_val_40770 === (3))){
var inst_40764 = (state_40768[(2)]);
var state_40768__$1 = state_40768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40768__$1,inst_40764);
} else {
if((state_val_40770 === (2))){
var state_40768__$1 = state_40768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40768__$1,(4),from);
} else {
if((state_val_40770 === (9))){
var inst_40759 = (state_40768[(2)]);
var state_40768__$1 = (function (){var statearr_40800 = state_40768;
(statearr_40800[(9)] = inst_40759);

return statearr_40800;
})();
var statearr_40802_43086 = state_40768__$1;
(statearr_40802_43086[(2)] = null);

(statearr_40802_43086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40770 === (5))){
var inst_40743 = cljs.core.async.close_BANG_(jobs);
var state_40768__$1 = state_40768;
var statearr_40805_43087 = state_40768__$1;
(statearr_40805_43087[(2)] = inst_40743);

(statearr_40805_43087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40770 === (8))){
var inst_40746 = (state_40768[(8)]);
var inst_40757 = (state_40768[(2)]);
var state_40768__$1 = (function (){var statearr_40806 = state_40768;
(statearr_40806[(10)] = inst_40757);

return statearr_40806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40768__$1,(9),results,inst_40746);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0 = (function (){
var statearr_40816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__);

(statearr_40816[(1)] = (1));

return statearr_40816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1 = (function (state_40768){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_40768);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e40819){var ex__39901__auto__ = e40819;
var statearr_40820_43094 = state_40768;
(statearr_40820_43094[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_40768[(4)]))){
var statearr_40823_43095 = state_40768;
(statearr_40823_43095[(1)] = cljs.core.first((state_40768[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43096 = state_40768;
state_40768 = G__43096;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = function(state_40768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1.call(this,state_40768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_40827 = f__40039__auto__();
(statearr_40827[(6)] = c__40038__auto___43071);

return statearr_40827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


var c__40038__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_40878){
var state_val_40880 = (state_40878[(1)]);
if((state_val_40880 === (7))){
var inst_40870 = (state_40878[(2)]);
var state_40878__$1 = state_40878;
var statearr_40883_43100 = state_40878__$1;
(statearr_40883_43100[(2)] = inst_40870);

(statearr_40883_43100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (20))){
var state_40878__$1 = state_40878;
var statearr_40884_43101 = state_40878__$1;
(statearr_40884_43101[(2)] = null);

(statearr_40884_43101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (1))){
var state_40878__$1 = state_40878;
var statearr_40886_43102 = state_40878__$1;
(statearr_40886_43102[(2)] = null);

(statearr_40886_43102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (4))){
var inst_40835 = (state_40878[(7)]);
var inst_40835__$1 = (state_40878[(2)]);
var inst_40836 = (inst_40835__$1 == null);
var state_40878__$1 = (function (){var statearr_40888 = state_40878;
(statearr_40888[(7)] = inst_40835__$1);

return statearr_40888;
})();
if(cljs.core.truth_(inst_40836)){
var statearr_40889_43110 = state_40878__$1;
(statearr_40889_43110[(1)] = (5));

} else {
var statearr_40891_43111 = state_40878__$1;
(statearr_40891_43111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (15))){
var inst_40849 = (state_40878[(8)]);
var state_40878__$1 = state_40878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40878__$1,(18),to,inst_40849);
} else {
if((state_val_40880 === (21))){
var inst_40865 = (state_40878[(2)]);
var state_40878__$1 = state_40878;
var statearr_40894_43112 = state_40878__$1;
(statearr_40894_43112[(2)] = inst_40865);

(statearr_40894_43112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (13))){
var inst_40867 = (state_40878[(2)]);
var state_40878__$1 = (function (){var statearr_40895 = state_40878;
(statearr_40895[(9)] = inst_40867);

return statearr_40895;
})();
var statearr_40896_43116 = state_40878__$1;
(statearr_40896_43116[(2)] = null);

(statearr_40896_43116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (6))){
var inst_40835 = (state_40878[(7)]);
var state_40878__$1 = state_40878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40878__$1,(11),inst_40835);
} else {
if((state_val_40880 === (17))){
var inst_40860 = (state_40878[(2)]);
var state_40878__$1 = state_40878;
if(cljs.core.truth_(inst_40860)){
var statearr_40900_43120 = state_40878__$1;
(statearr_40900_43120[(1)] = (19));

} else {
var statearr_40901_43121 = state_40878__$1;
(statearr_40901_43121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (3))){
var inst_40872 = (state_40878[(2)]);
var state_40878__$1 = state_40878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40878__$1,inst_40872);
} else {
if((state_val_40880 === (12))){
var inst_40846 = (state_40878[(10)]);
var state_40878__$1 = state_40878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40878__$1,(14),inst_40846);
} else {
if((state_val_40880 === (2))){
var state_40878__$1 = state_40878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40878__$1,(4),results);
} else {
if((state_val_40880 === (19))){
var state_40878__$1 = state_40878;
var statearr_40903_43125 = state_40878__$1;
(statearr_40903_43125[(2)] = null);

(statearr_40903_43125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (11))){
var inst_40846 = (state_40878[(2)]);
var state_40878__$1 = (function (){var statearr_40908 = state_40878;
(statearr_40908[(10)] = inst_40846);

return statearr_40908;
})();
var statearr_40909_43127 = state_40878__$1;
(statearr_40909_43127[(2)] = null);

(statearr_40909_43127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (9))){
var state_40878__$1 = state_40878;
var statearr_40910_43128 = state_40878__$1;
(statearr_40910_43128[(2)] = null);

(statearr_40910_43128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (5))){
var state_40878__$1 = state_40878;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40912_43129 = state_40878__$1;
(statearr_40912_43129[(1)] = (8));

} else {
var statearr_40913_43131 = state_40878__$1;
(statearr_40913_43131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (14))){
var inst_40849 = (state_40878[(8)]);
var inst_40849__$1 = (state_40878[(2)]);
var inst_40852 = (inst_40849__$1 == null);
var inst_40853 = cljs.core.not(inst_40852);
var state_40878__$1 = (function (){var statearr_40916 = state_40878;
(statearr_40916[(8)] = inst_40849__$1);

return statearr_40916;
})();
if(inst_40853){
var statearr_40918_43134 = state_40878__$1;
(statearr_40918_43134[(1)] = (15));

} else {
var statearr_40921_43135 = state_40878__$1;
(statearr_40921_43135[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (16))){
var state_40878__$1 = state_40878;
var statearr_40928_43136 = state_40878__$1;
(statearr_40928_43136[(2)] = false);

(statearr_40928_43136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (10))){
var inst_40842 = (state_40878[(2)]);
var state_40878__$1 = state_40878;
var statearr_40931_43137 = state_40878__$1;
(statearr_40931_43137[(2)] = inst_40842);

(statearr_40931_43137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (18))){
var inst_40857 = (state_40878[(2)]);
var state_40878__$1 = state_40878;
var statearr_40934_43138 = state_40878__$1;
(statearr_40934_43138[(2)] = inst_40857);

(statearr_40934_43138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40880 === (8))){
var inst_40839 = cljs.core.async.close_BANG_(to);
var state_40878__$1 = state_40878;
var statearr_40938_43139 = state_40878__$1;
(statearr_40938_43139[(2)] = inst_40839);

(statearr_40938_43139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0 = (function (){
var statearr_40943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__);

(statearr_40943[(1)] = (1));

return statearr_40943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1 = (function (state_40878){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_40878);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e40944){var ex__39901__auto__ = e40944;
var statearr_40945_43140 = state_40878;
(statearr_40945_43140[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_40878[(4)]))){
var statearr_40947_43141 = state_40878;
(statearr_40947_43141[(1)] = cljs.core.first((state_40878[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43142 = state_40878;
state_40878 = G__43142;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__ = function(state_40878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1.call(this,state_40878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_40951 = f__40039__auto__();
(statearr_40951[(6)] = c__40038__auto__);

return statearr_40951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));

return c__40038__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40957 = arguments.length;
switch (G__40957) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40963 = arguments.length;
switch (G__40963) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40971 = arguments.length;
switch (G__40971) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__40038__auto___43156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_41011){
var state_val_41012 = (state_41011[(1)]);
if((state_val_41012 === (7))){
var inst_41007 = (state_41011[(2)]);
var state_41011__$1 = state_41011;
var statearr_41016_43157 = state_41011__$1;
(statearr_41016_43157[(2)] = inst_41007);

(statearr_41016_43157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (1))){
var state_41011__$1 = state_41011;
var statearr_41021_43158 = state_41011__$1;
(statearr_41021_43158[(2)] = null);

(statearr_41021_43158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (4))){
var inst_40988 = (state_41011[(7)]);
var inst_40988__$1 = (state_41011[(2)]);
var inst_40989 = (inst_40988__$1 == null);
var state_41011__$1 = (function (){var statearr_41026 = state_41011;
(statearr_41026[(7)] = inst_40988__$1);

return statearr_41026;
})();
if(cljs.core.truth_(inst_40989)){
var statearr_41027_43159 = state_41011__$1;
(statearr_41027_43159[(1)] = (5));

} else {
var statearr_41032_43160 = state_41011__$1;
(statearr_41032_43160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (13))){
var state_41011__$1 = state_41011;
var statearr_41036_43161 = state_41011__$1;
(statearr_41036_43161[(2)] = null);

(statearr_41036_43161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (6))){
var inst_40988 = (state_41011[(7)]);
var inst_40994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40988) : p.call(null,inst_40988));
var state_41011__$1 = state_41011;
if(cljs.core.truth_(inst_40994)){
var statearr_41037_43162 = state_41011__$1;
(statearr_41037_43162[(1)] = (9));

} else {
var statearr_41040_43163 = state_41011__$1;
(statearr_41040_43163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (3))){
var inst_41009 = (state_41011[(2)]);
var state_41011__$1 = state_41011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41011__$1,inst_41009);
} else {
if((state_val_41012 === (12))){
var state_41011__$1 = state_41011;
var statearr_41043_43170 = state_41011__$1;
(statearr_41043_43170[(2)] = null);

(statearr_41043_43170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (2))){
var state_41011__$1 = state_41011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41011__$1,(4),ch);
} else {
if((state_val_41012 === (11))){
var inst_40988 = (state_41011[(7)]);
var inst_40998 = (state_41011[(2)]);
var state_41011__$1 = state_41011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41011__$1,(8),inst_40998,inst_40988);
} else {
if((state_val_41012 === (9))){
var state_41011__$1 = state_41011;
var statearr_41044_43174 = state_41011__$1;
(statearr_41044_43174[(2)] = tc);

(statearr_41044_43174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (5))){
var inst_40991 = cljs.core.async.close_BANG_(tc);
var inst_40992 = cljs.core.async.close_BANG_(fc);
var state_41011__$1 = (function (){var statearr_41045 = state_41011;
(statearr_41045[(8)] = inst_40991);

return statearr_41045;
})();
var statearr_41049_43177 = state_41011__$1;
(statearr_41049_43177[(2)] = inst_40992);

(statearr_41049_43177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (14))){
var inst_41005 = (state_41011[(2)]);
var state_41011__$1 = state_41011;
var statearr_41051_43178 = state_41011__$1;
(statearr_41051_43178[(2)] = inst_41005);

(statearr_41051_43178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (10))){
var state_41011__$1 = state_41011;
var statearr_41052_43187 = state_41011__$1;
(statearr_41052_43187[(2)] = fc);

(statearr_41052_43187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41012 === (8))){
var inst_41000 = (state_41011[(2)]);
var state_41011__$1 = state_41011;
if(cljs.core.truth_(inst_41000)){
var statearr_41053_43194 = state_41011__$1;
(statearr_41053_43194[(1)] = (12));

} else {
var statearr_41054_43195 = state_41011__$1;
(statearr_41054_43195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_41055 = [null,null,null,null,null,null,null,null,null];
(statearr_41055[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_41055[(1)] = (1));

return statearr_41055;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_41011){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_41011);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e41056){var ex__39901__auto__ = e41056;
var statearr_41058_43196 = state_41011;
(statearr_41058_43196[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_41011[(4)]))){
var statearr_41059_43197 = state_41011;
(statearr_41059_43197[(1)] = cljs.core.first((state_41011[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43198 = state_41011;
state_41011 = G__43198;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_41011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_41011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_41072 = f__40039__auto__();
(statearr_41072[(6)] = c__40038__auto___43156);

return statearr_41072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40038__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_41102){
var state_val_41103 = (state_41102[(1)]);
if((state_val_41103 === (7))){
var inst_41098 = (state_41102[(2)]);
var state_41102__$1 = state_41102;
var statearr_41104_43205 = state_41102__$1;
(statearr_41104_43205[(2)] = inst_41098);

(statearr_41104_43205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (1))){
var inst_41078 = init;
var inst_41079 = inst_41078;
var state_41102__$1 = (function (){var statearr_41105 = state_41102;
(statearr_41105[(7)] = inst_41079);

return statearr_41105;
})();
var statearr_41106_43206 = state_41102__$1;
(statearr_41106_43206[(2)] = null);

(statearr_41106_43206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (4))){
var inst_41082 = (state_41102[(8)]);
var inst_41082__$1 = (state_41102[(2)]);
var inst_41084 = (inst_41082__$1 == null);
var state_41102__$1 = (function (){var statearr_41107 = state_41102;
(statearr_41107[(8)] = inst_41082__$1);

return statearr_41107;
})();
if(cljs.core.truth_(inst_41084)){
var statearr_41108_43207 = state_41102__$1;
(statearr_41108_43207[(1)] = (5));

} else {
var statearr_41109_43208 = state_41102__$1;
(statearr_41109_43208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (6))){
var inst_41088 = (state_41102[(9)]);
var inst_41082 = (state_41102[(8)]);
var inst_41079 = (state_41102[(7)]);
var inst_41088__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41079,inst_41082) : f.call(null,inst_41079,inst_41082));
var inst_41090 = cljs.core.reduced_QMARK_(inst_41088__$1);
var state_41102__$1 = (function (){var statearr_41110 = state_41102;
(statearr_41110[(9)] = inst_41088__$1);

return statearr_41110;
})();
if(inst_41090){
var statearr_41111_43209 = state_41102__$1;
(statearr_41111_43209[(1)] = (8));

} else {
var statearr_41112_43210 = state_41102__$1;
(statearr_41112_43210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (3))){
var inst_41100 = (state_41102[(2)]);
var state_41102__$1 = state_41102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41102__$1,inst_41100);
} else {
if((state_val_41103 === (2))){
var state_41102__$1 = state_41102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41102__$1,(4),ch);
} else {
if((state_val_41103 === (9))){
var inst_41088 = (state_41102[(9)]);
var inst_41079 = inst_41088;
var state_41102__$1 = (function (){var statearr_41113 = state_41102;
(statearr_41113[(7)] = inst_41079);

return statearr_41113;
})();
var statearr_41114_43217 = state_41102__$1;
(statearr_41114_43217[(2)] = null);

(statearr_41114_43217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (5))){
var inst_41079 = (state_41102[(7)]);
var state_41102__$1 = state_41102;
var statearr_41115_43218 = state_41102__$1;
(statearr_41115_43218[(2)] = inst_41079);

(statearr_41115_43218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (10))){
var inst_41096 = (state_41102[(2)]);
var state_41102__$1 = state_41102;
var statearr_41116_43219 = state_41102__$1;
(statearr_41116_43219[(2)] = inst_41096);

(statearr_41116_43219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41103 === (8))){
var inst_41088 = (state_41102[(9)]);
var inst_41092 = cljs.core.deref(inst_41088);
var state_41102__$1 = state_41102;
var statearr_41118_43220 = state_41102__$1;
(statearr_41118_43220[(2)] = inst_41092);

(statearr_41118_43220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39898__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39898__auto____0 = (function (){
var statearr_41120 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41120[(0)] = cljs$core$async$reduce_$_state_machine__39898__auto__);

(statearr_41120[(1)] = (1));

return statearr_41120;
});
var cljs$core$async$reduce_$_state_machine__39898__auto____1 = (function (state_41102){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_41102);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e41121){var ex__39901__auto__ = e41121;
var statearr_41122_43222 = state_41102;
(statearr_41122_43222[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_41102[(4)]))){
var statearr_41123_43229 = state_41102;
(statearr_41123_43229[(1)] = cljs.core.first((state_41102[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43230 = state_41102;
state_41102 = G__43230;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39898__auto__ = function(state_41102){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39898__auto____1.call(this,state_41102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39898__auto____0;
cljs$core$async$reduce_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39898__auto____1;
return cljs$core$async$reduce_$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_41128 = f__40039__auto__();
(statearr_41128[(6)] = c__40038__auto__);

return statearr_41128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));

return c__40038__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40038__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_41151){
var state_val_41152 = (state_41151[(1)]);
if((state_val_41152 === (1))){
var inst_41146 = cljs.core.async.reduce(f__$1,init,ch);
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41151__$1,(2),inst_41146);
} else {
if((state_val_41152 === (2))){
var inst_41148 = (state_41151[(2)]);
var inst_41149 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41148) : f__$1.call(null,inst_41148));
var state_41151__$1 = state_41151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41151__$1,inst_41149);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39898__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39898__auto____0 = (function (){
var statearr_41156 = [null,null,null,null,null,null,null];
(statearr_41156[(0)] = cljs$core$async$transduce_$_state_machine__39898__auto__);

(statearr_41156[(1)] = (1));

return statearr_41156;
});
var cljs$core$async$transduce_$_state_machine__39898__auto____1 = (function (state_41151){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_41151);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e41159){var ex__39901__auto__ = e41159;
var statearr_41160_43231 = state_41151;
(statearr_41160_43231[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_41151[(4)]))){
var statearr_41161_43232 = state_41151;
(statearr_41161_43232[(1)] = cljs.core.first((state_41151[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43233 = state_41151;
state_41151 = G__43233;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39898__auto__ = function(state_41151){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39898__auto____1.call(this,state_41151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39898__auto____0;
cljs$core$async$transduce_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39898__auto____1;
return cljs$core$async$transduce_$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_41162 = f__40039__auto__();
(statearr_41162[(6)] = c__40038__auto__);

return statearr_41162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));

return c__40038__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__41164 = arguments.length;
switch (G__41164) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40038__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_41199){
var state_val_41200 = (state_41199[(1)]);
if((state_val_41200 === (7))){
var inst_41176 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41203_43235 = state_41199__$1;
(statearr_41203_43235[(2)] = inst_41176);

(statearr_41203_43235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (1))){
var inst_41170 = cljs.core.seq(coll);
var inst_41171 = inst_41170;
var state_41199__$1 = (function (){var statearr_41206 = state_41199;
(statearr_41206[(7)] = inst_41171);

return statearr_41206;
})();
var statearr_41207_43237 = state_41199__$1;
(statearr_41207_43237[(2)] = null);

(statearr_41207_43237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (4))){
var inst_41171 = (state_41199[(7)]);
var inst_41174 = cljs.core.first(inst_41171);
var state_41199__$1 = state_41199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41199__$1,(7),ch,inst_41174);
} else {
if((state_val_41200 === (13))){
var inst_41189 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41208_43242 = state_41199__$1;
(statearr_41208_43242[(2)] = inst_41189);

(statearr_41208_43242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (6))){
var inst_41179 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
if(cljs.core.truth_(inst_41179)){
var statearr_41209_43245 = state_41199__$1;
(statearr_41209_43245[(1)] = (8));

} else {
var statearr_41210_43246 = state_41199__$1;
(statearr_41210_43246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (3))){
var inst_41193 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41199__$1,inst_41193);
} else {
if((state_val_41200 === (12))){
var state_41199__$1 = state_41199;
var statearr_41211_43247 = state_41199__$1;
(statearr_41211_43247[(2)] = null);

(statearr_41211_43247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (2))){
var inst_41171 = (state_41199[(7)]);
var state_41199__$1 = state_41199;
if(cljs.core.truth_(inst_41171)){
var statearr_41212_43248 = state_41199__$1;
(statearr_41212_43248[(1)] = (4));

} else {
var statearr_41217_43249 = state_41199__$1;
(statearr_41217_43249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (11))){
var inst_41186 = cljs.core.async.close_BANG_(ch);
var state_41199__$1 = state_41199;
var statearr_41218_43250 = state_41199__$1;
(statearr_41218_43250[(2)] = inst_41186);

(statearr_41218_43250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (9))){
var state_41199__$1 = state_41199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41219_43251 = state_41199__$1;
(statearr_41219_43251[(1)] = (11));

} else {
var statearr_41220_43252 = state_41199__$1;
(statearr_41220_43252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (5))){
var inst_41171 = (state_41199[(7)]);
var state_41199__$1 = state_41199;
var statearr_41221_43254 = state_41199__$1;
(statearr_41221_43254[(2)] = inst_41171);

(statearr_41221_43254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (10))){
var inst_41191 = (state_41199[(2)]);
var state_41199__$1 = state_41199;
var statearr_41223_43256 = state_41199__$1;
(statearr_41223_43256[(2)] = inst_41191);

(statearr_41223_43256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41200 === (8))){
var inst_41171 = (state_41199[(7)]);
var inst_41181 = cljs.core.next(inst_41171);
var inst_41171__$1 = inst_41181;
var state_41199__$1 = (function (){var statearr_41224 = state_41199;
(statearr_41224[(7)] = inst_41171__$1);

return statearr_41224;
})();
var statearr_41225_43257 = state_41199__$1;
(statearr_41225_43257[(2)] = null);

(statearr_41225_43257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_41232 = [null,null,null,null,null,null,null,null];
(statearr_41232[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_41232[(1)] = (1));

return statearr_41232;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_41199){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_41199);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e41240){var ex__39901__auto__ = e41240;
var statearr_41241_43259 = state_41199;
(statearr_41241_43259[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_41199[(4)]))){
var statearr_41242_43265 = state_41199;
(statearr_41242_43265[(1)] = cljs.core.first((state_41199[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43266 = state_41199;
state_41199 = G__43266;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_41199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_41199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_41243 = f__40039__auto__();
(statearr_41243[(6)] = c__40038__auto__);

return statearr_41243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));

return c__40038__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41254 = arguments.length;
switch (G__41254) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43292 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43292(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43296 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43296(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43301 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43301(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43312 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43312(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41283 = (function (ch,cs,meta41284){
this.ch = ch;
this.cs = cs;
this.meta41284 = meta41284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41285,meta41284__$1){
var self__ = this;
var _41285__$1 = this;
return (new cljs.core.async.t_cljs$core$async41283(self__.ch,self__.cs,meta41284__$1));
}));

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41285){
var self__ = this;
var _41285__$1 = this;
return self__.meta41284;
}));

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41283.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41284","meta41284",-2066905470,null)], null);
}));

(cljs.core.async.t_cljs$core$async41283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41283");

(cljs.core.async.t_cljs$core$async41283.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41283.
 */
cljs.core.async.__GT_t_cljs$core$async41283 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41283(ch__$1,cs__$1,meta41284){
return (new cljs.core.async.t_cljs$core$async41283(ch__$1,cs__$1,meta41284));
});

}

return (new cljs.core.async.t_cljs$core$async41283(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__40038__auto___43333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_41450){
var state_val_41451 = (state_41450[(1)]);
if((state_val_41451 === (7))){
var inst_41446 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41453_43334 = state_41450__$1;
(statearr_41453_43334[(2)] = inst_41446);

(statearr_41453_43334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (20))){
var inst_41350 = (state_41450[(7)]);
var inst_41362 = cljs.core.first(inst_41350);
var inst_41363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41362,(0),null);
var inst_41364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41362,(1),null);
var state_41450__$1 = (function (){var statearr_41454 = state_41450;
(statearr_41454[(8)] = inst_41363);

return statearr_41454;
})();
if(cljs.core.truth_(inst_41364)){
var statearr_41455_43337 = state_41450__$1;
(statearr_41455_43337[(1)] = (22));

} else {
var statearr_41456_43340 = state_41450__$1;
(statearr_41456_43340[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (27))){
var inst_41316 = (state_41450[(9)]);
var inst_41394 = (state_41450[(10)]);
var inst_41399 = (state_41450[(11)]);
var inst_41392 = (state_41450[(12)]);
var inst_41399__$1 = cljs.core._nth(inst_41392,inst_41394);
var inst_41400 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41399__$1,inst_41316,done);
var state_41450__$1 = (function (){var statearr_41461 = state_41450;
(statearr_41461[(11)] = inst_41399__$1);

return statearr_41461;
})();
if(cljs.core.truth_(inst_41400)){
var statearr_41463_43345 = state_41450__$1;
(statearr_41463_43345[(1)] = (30));

} else {
var statearr_41465_43346 = state_41450__$1;
(statearr_41465_43346[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (1))){
var state_41450__$1 = state_41450;
var statearr_41466_43347 = state_41450__$1;
(statearr_41466_43347[(2)] = null);

(statearr_41466_43347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (24))){
var inst_41350 = (state_41450[(7)]);
var inst_41369 = (state_41450[(2)]);
var inst_41370 = cljs.core.next(inst_41350);
var inst_41325 = inst_41370;
var inst_41326 = null;
var inst_41327 = (0);
var inst_41328 = (0);
var state_41450__$1 = (function (){var statearr_41467 = state_41450;
(statearr_41467[(13)] = inst_41328);

(statearr_41467[(14)] = inst_41369);

(statearr_41467[(15)] = inst_41326);

(statearr_41467[(16)] = inst_41325);

(statearr_41467[(17)] = inst_41327);

return statearr_41467;
})();
var statearr_41468_43352 = state_41450__$1;
(statearr_41468_43352[(2)] = null);

(statearr_41468_43352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (39))){
var state_41450__$1 = state_41450;
var statearr_41478_43359 = state_41450__$1;
(statearr_41478_43359[(2)] = null);

(statearr_41478_43359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (4))){
var inst_41316 = (state_41450[(9)]);
var inst_41316__$1 = (state_41450[(2)]);
var inst_41317 = (inst_41316__$1 == null);
var state_41450__$1 = (function (){var statearr_41479 = state_41450;
(statearr_41479[(9)] = inst_41316__$1);

return statearr_41479;
})();
if(cljs.core.truth_(inst_41317)){
var statearr_41482_43365 = state_41450__$1;
(statearr_41482_43365[(1)] = (5));

} else {
var statearr_41483_43366 = state_41450__$1;
(statearr_41483_43366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (15))){
var inst_41328 = (state_41450[(13)]);
var inst_41326 = (state_41450[(15)]);
var inst_41325 = (state_41450[(16)]);
var inst_41327 = (state_41450[(17)]);
var inst_41346 = (state_41450[(2)]);
var inst_41347 = (inst_41328 + (1));
var tmp41469 = inst_41326;
var tmp41470 = inst_41325;
var tmp41471 = inst_41327;
var inst_41325__$1 = tmp41470;
var inst_41326__$1 = tmp41469;
var inst_41327__$1 = tmp41471;
var inst_41328__$1 = inst_41347;
var state_41450__$1 = (function (){var statearr_41488 = state_41450;
(statearr_41488[(13)] = inst_41328__$1);

(statearr_41488[(15)] = inst_41326__$1);

(statearr_41488[(16)] = inst_41325__$1);

(statearr_41488[(18)] = inst_41346);

(statearr_41488[(17)] = inst_41327__$1);

return statearr_41488;
})();
var statearr_41489_43380 = state_41450__$1;
(statearr_41489_43380[(2)] = null);

(statearr_41489_43380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (21))){
var inst_41373 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41499_43386 = state_41450__$1;
(statearr_41499_43386[(2)] = inst_41373);

(statearr_41499_43386[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (31))){
var inst_41399 = (state_41450[(11)]);
var inst_41403 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41399);
var state_41450__$1 = state_41450;
var statearr_41505_43390 = state_41450__$1;
(statearr_41505_43390[(2)] = inst_41403);

(statearr_41505_43390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (32))){
var inst_41394 = (state_41450[(10)]);
var inst_41393 = (state_41450[(19)]);
var inst_41392 = (state_41450[(12)]);
var inst_41391 = (state_41450[(20)]);
var inst_41405 = (state_41450[(2)]);
var inst_41406 = (inst_41394 + (1));
var tmp41495 = inst_41393;
var tmp41496 = inst_41392;
var tmp41497 = inst_41391;
var inst_41391__$1 = tmp41497;
var inst_41392__$1 = tmp41496;
var inst_41393__$1 = tmp41495;
var inst_41394__$1 = inst_41406;
var state_41450__$1 = (function (){var statearr_41506 = state_41450;
(statearr_41506[(21)] = inst_41405);

(statearr_41506[(10)] = inst_41394__$1);

(statearr_41506[(19)] = inst_41393__$1);

(statearr_41506[(12)] = inst_41392__$1);

(statearr_41506[(20)] = inst_41391__$1);

return statearr_41506;
})();
var statearr_41509_43409 = state_41450__$1;
(statearr_41509_43409[(2)] = null);

(statearr_41509_43409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (40))){
var inst_41419 = (state_41450[(22)]);
var inst_41423 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41419);
var state_41450__$1 = state_41450;
var statearr_41513_43412 = state_41450__$1;
(statearr_41513_43412[(2)] = inst_41423);

(statearr_41513_43412[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (33))){
var inst_41410 = (state_41450[(23)]);
var inst_41412 = cljs.core.chunked_seq_QMARK_(inst_41410);
var state_41450__$1 = state_41450;
if(inst_41412){
var statearr_41519_43416 = state_41450__$1;
(statearr_41519_43416[(1)] = (36));

} else {
var statearr_41520_43419 = state_41450__$1;
(statearr_41520_43419[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (13))){
var inst_41340 = (state_41450[(24)]);
var inst_41343 = cljs.core.async.close_BANG_(inst_41340);
var state_41450__$1 = state_41450;
var statearr_41525_43420 = state_41450__$1;
(statearr_41525_43420[(2)] = inst_41343);

(statearr_41525_43420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (22))){
var inst_41363 = (state_41450[(8)]);
var inst_41366 = cljs.core.async.close_BANG_(inst_41363);
var state_41450__$1 = state_41450;
var statearr_41526_43423 = state_41450__$1;
(statearr_41526_43423[(2)] = inst_41366);

(statearr_41526_43423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (36))){
var inst_41410 = (state_41450[(23)]);
var inst_41414 = cljs.core.chunk_first(inst_41410);
var inst_41415 = cljs.core.chunk_rest(inst_41410);
var inst_41416 = cljs.core.count(inst_41414);
var inst_41391 = inst_41415;
var inst_41392 = inst_41414;
var inst_41393 = inst_41416;
var inst_41394 = (0);
var state_41450__$1 = (function (){var statearr_41529 = state_41450;
(statearr_41529[(10)] = inst_41394);

(statearr_41529[(19)] = inst_41393);

(statearr_41529[(12)] = inst_41392);

(statearr_41529[(20)] = inst_41391);

return statearr_41529;
})();
var statearr_41532_43431 = state_41450__$1;
(statearr_41532_43431[(2)] = null);

(statearr_41532_43431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (41))){
var inst_41410 = (state_41450[(23)]);
var inst_41425 = (state_41450[(2)]);
var inst_41426 = cljs.core.next(inst_41410);
var inst_41391 = inst_41426;
var inst_41392 = null;
var inst_41393 = (0);
var inst_41394 = (0);
var state_41450__$1 = (function (){var statearr_41533 = state_41450;
(statearr_41533[(10)] = inst_41394);

(statearr_41533[(19)] = inst_41393);

(statearr_41533[(12)] = inst_41392);

(statearr_41533[(25)] = inst_41425);

(statearr_41533[(20)] = inst_41391);

return statearr_41533;
})();
var statearr_41534_43438 = state_41450__$1;
(statearr_41534_43438[(2)] = null);

(statearr_41534_43438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (43))){
var state_41450__$1 = state_41450;
var statearr_41535_43439 = state_41450__$1;
(statearr_41535_43439[(2)] = null);

(statearr_41535_43439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (29))){
var inst_41434 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41536_43440 = state_41450__$1;
(statearr_41536_43440[(2)] = inst_41434);

(statearr_41536_43440[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (44))){
var inst_41443 = (state_41450[(2)]);
var state_41450__$1 = (function (){var statearr_41537 = state_41450;
(statearr_41537[(26)] = inst_41443);

return statearr_41537;
})();
var statearr_41538_43443 = state_41450__$1;
(statearr_41538_43443[(2)] = null);

(statearr_41538_43443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (6))){
var inst_41383 = (state_41450[(27)]);
var inst_41382 = cljs.core.deref(cs);
var inst_41383__$1 = cljs.core.keys(inst_41382);
var inst_41384 = cljs.core.count(inst_41383__$1);
var inst_41385 = cljs.core.reset_BANG_(dctr,inst_41384);
var inst_41390 = cljs.core.seq(inst_41383__$1);
var inst_41391 = inst_41390;
var inst_41392 = null;
var inst_41393 = (0);
var inst_41394 = (0);
var state_41450__$1 = (function (){var statearr_41539 = state_41450;
(statearr_41539[(10)] = inst_41394);

(statearr_41539[(28)] = inst_41385);

(statearr_41539[(19)] = inst_41393);

(statearr_41539[(12)] = inst_41392);

(statearr_41539[(27)] = inst_41383__$1);

(statearr_41539[(20)] = inst_41391);

return statearr_41539;
})();
var statearr_41540_43450 = state_41450__$1;
(statearr_41540_43450[(2)] = null);

(statearr_41540_43450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (28))){
var inst_41410 = (state_41450[(23)]);
var inst_41391 = (state_41450[(20)]);
var inst_41410__$1 = cljs.core.seq(inst_41391);
var state_41450__$1 = (function (){var statearr_41542 = state_41450;
(statearr_41542[(23)] = inst_41410__$1);

return statearr_41542;
})();
if(inst_41410__$1){
var statearr_41543_43452 = state_41450__$1;
(statearr_41543_43452[(1)] = (33));

} else {
var statearr_41544_43453 = state_41450__$1;
(statearr_41544_43453[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (25))){
var inst_41394 = (state_41450[(10)]);
var inst_41393 = (state_41450[(19)]);
var inst_41396 = (inst_41394 < inst_41393);
var inst_41397 = inst_41396;
var state_41450__$1 = state_41450;
if(cljs.core.truth_(inst_41397)){
var statearr_41546_43454 = state_41450__$1;
(statearr_41546_43454[(1)] = (27));

} else {
var statearr_41547_43455 = state_41450__$1;
(statearr_41547_43455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (34))){
var state_41450__$1 = state_41450;
var statearr_41548_43456 = state_41450__$1;
(statearr_41548_43456[(2)] = null);

(statearr_41548_43456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (17))){
var state_41450__$1 = state_41450;
var statearr_41549_43457 = state_41450__$1;
(statearr_41549_43457[(2)] = null);

(statearr_41549_43457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (3))){
var inst_41448 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41450__$1,inst_41448);
} else {
if((state_val_41451 === (12))){
var inst_41378 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41550_43463 = state_41450__$1;
(statearr_41550_43463[(2)] = inst_41378);

(statearr_41550_43463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (2))){
var state_41450__$1 = state_41450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41450__$1,(4),ch);
} else {
if((state_val_41451 === (23))){
var state_41450__$1 = state_41450;
var statearr_41551_43470 = state_41450__$1;
(statearr_41551_43470[(2)] = null);

(statearr_41551_43470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (35))){
var inst_41432 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41553_43471 = state_41450__$1;
(statearr_41553_43471[(2)] = inst_41432);

(statearr_41553_43471[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (19))){
var inst_41350 = (state_41450[(7)]);
var inst_41354 = cljs.core.chunk_first(inst_41350);
var inst_41355 = cljs.core.chunk_rest(inst_41350);
var inst_41356 = cljs.core.count(inst_41354);
var inst_41325 = inst_41355;
var inst_41326 = inst_41354;
var inst_41327 = inst_41356;
var inst_41328 = (0);
var state_41450__$1 = (function (){var statearr_41556 = state_41450;
(statearr_41556[(13)] = inst_41328);

(statearr_41556[(15)] = inst_41326);

(statearr_41556[(16)] = inst_41325);

(statearr_41556[(17)] = inst_41327);

return statearr_41556;
})();
var statearr_41557_43475 = state_41450__$1;
(statearr_41557_43475[(2)] = null);

(statearr_41557_43475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (11))){
var inst_41325 = (state_41450[(16)]);
var inst_41350 = (state_41450[(7)]);
var inst_41350__$1 = cljs.core.seq(inst_41325);
var state_41450__$1 = (function (){var statearr_41559 = state_41450;
(statearr_41559[(7)] = inst_41350__$1);

return statearr_41559;
})();
if(inst_41350__$1){
var statearr_41560_43479 = state_41450__$1;
(statearr_41560_43479[(1)] = (16));

} else {
var statearr_41561_43480 = state_41450__$1;
(statearr_41561_43480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (9))){
var inst_41380 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41564_43483 = state_41450__$1;
(statearr_41564_43483[(2)] = inst_41380);

(statearr_41564_43483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (5))){
var inst_41323 = cljs.core.deref(cs);
var inst_41324 = cljs.core.seq(inst_41323);
var inst_41325 = inst_41324;
var inst_41326 = null;
var inst_41327 = (0);
var inst_41328 = (0);
var state_41450__$1 = (function (){var statearr_41566 = state_41450;
(statearr_41566[(13)] = inst_41328);

(statearr_41566[(15)] = inst_41326);

(statearr_41566[(16)] = inst_41325);

(statearr_41566[(17)] = inst_41327);

return statearr_41566;
})();
var statearr_41568_43492 = state_41450__$1;
(statearr_41568_43492[(2)] = null);

(statearr_41568_43492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (14))){
var state_41450__$1 = state_41450;
var statearr_41570_43496 = state_41450__$1;
(statearr_41570_43496[(2)] = null);

(statearr_41570_43496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (45))){
var inst_41440 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41571_43497 = state_41450__$1;
(statearr_41571_43497[(2)] = inst_41440);

(statearr_41571_43497[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (26))){
var inst_41383 = (state_41450[(27)]);
var inst_41436 = (state_41450[(2)]);
var inst_41437 = cljs.core.seq(inst_41383);
var state_41450__$1 = (function (){var statearr_41572 = state_41450;
(statearr_41572[(29)] = inst_41436);

return statearr_41572;
})();
if(inst_41437){
var statearr_41574_43502 = state_41450__$1;
(statearr_41574_43502[(1)] = (42));

} else {
var statearr_41576_43504 = state_41450__$1;
(statearr_41576_43504[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (16))){
var inst_41350 = (state_41450[(7)]);
var inst_41352 = cljs.core.chunked_seq_QMARK_(inst_41350);
var state_41450__$1 = state_41450;
if(inst_41352){
var statearr_41578_43508 = state_41450__$1;
(statearr_41578_43508[(1)] = (19));

} else {
var statearr_41579_43509 = state_41450__$1;
(statearr_41579_43509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (38))){
var inst_41429 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41580_43511 = state_41450__$1;
(statearr_41580_43511[(2)] = inst_41429);

(statearr_41580_43511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (30))){
var state_41450__$1 = state_41450;
var statearr_41582_43514 = state_41450__$1;
(statearr_41582_43514[(2)] = null);

(statearr_41582_43514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (10))){
var inst_41328 = (state_41450[(13)]);
var inst_41326 = (state_41450[(15)]);
var inst_41338 = cljs.core._nth(inst_41326,inst_41328);
var inst_41340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41338,(0),null);
var inst_41341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41338,(1),null);
var state_41450__$1 = (function (){var statearr_41583 = state_41450;
(statearr_41583[(24)] = inst_41340);

return statearr_41583;
})();
if(cljs.core.truth_(inst_41341)){
var statearr_41584_43522 = state_41450__$1;
(statearr_41584_43522[(1)] = (13));

} else {
var statearr_41585_43523 = state_41450__$1;
(statearr_41585_43523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (18))){
var inst_41376 = (state_41450[(2)]);
var state_41450__$1 = state_41450;
var statearr_41587_43524 = state_41450__$1;
(statearr_41587_43524[(2)] = inst_41376);

(statearr_41587_43524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (42))){
var state_41450__$1 = state_41450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41450__$1,(45),dchan);
} else {
if((state_val_41451 === (37))){
var inst_41316 = (state_41450[(9)]);
var inst_41410 = (state_41450[(23)]);
var inst_41419 = (state_41450[(22)]);
var inst_41419__$1 = cljs.core.first(inst_41410);
var inst_41420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41419__$1,inst_41316,done);
var state_41450__$1 = (function (){var statearr_41590 = state_41450;
(statearr_41590[(22)] = inst_41419__$1);

return statearr_41590;
})();
if(cljs.core.truth_(inst_41420)){
var statearr_41592_43525 = state_41450__$1;
(statearr_41592_43525[(1)] = (39));

} else {
var statearr_41593_43526 = state_41450__$1;
(statearr_41593_43526[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41451 === (8))){
var inst_41328 = (state_41450[(13)]);
var inst_41327 = (state_41450[(17)]);
var inst_41332 = (inst_41328 < inst_41327);
var inst_41333 = inst_41332;
var state_41450__$1 = state_41450;
if(cljs.core.truth_(inst_41333)){
var statearr_41594_43531 = state_41450__$1;
(statearr_41594_43531[(1)] = (10));

} else {
var statearr_41595_43532 = state_41450__$1;
(statearr_41595_43532[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__39898__auto__ = null;
var cljs$core$async$mult_$_state_machine__39898__auto____0 = (function (){
var statearr_41603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41603[(0)] = cljs$core$async$mult_$_state_machine__39898__auto__);

(statearr_41603[(1)] = (1));

return statearr_41603;
});
var cljs$core$async$mult_$_state_machine__39898__auto____1 = (function (state_41450){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_41450);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e41604){var ex__39901__auto__ = e41604;
var statearr_41605_43538 = state_41450;
(statearr_41605_43538[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_41450[(4)]))){
var statearr_41606_43540 = state_41450;
(statearr_41606_43540[(1)] = cljs.core.first((state_41450[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43545 = state_41450;
state_41450 = G__43545;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39898__auto__ = function(state_41450){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39898__auto____1.call(this,state_41450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39898__auto____0;
cljs$core$async$mult_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39898__auto____1;
return cljs$core$async$mult_$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_41607 = f__40039__auto__();
(statearr_41607[(6)] = c__40038__auto___43333);

return statearr_41607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41618 = arguments.length;
switch (G__41618) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43558 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43558(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43566 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43566(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43575 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43575(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43579 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43579(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43584 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43584(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43592 = arguments.length;
var i__4737__auto___43593 = (0);
while(true){
if((i__4737__auto___43593 < len__4736__auto___43592)){
args__4742__auto__.push((arguments[i__4737__auto___43593]));

var G__43594 = (i__4737__auto___43593 + (1));
i__4737__auto___43593 = G__43594;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41673){
var map__41674 = p__41673;
var map__41674__$1 = (((((!((map__41674 == null))))?(((((map__41674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41674):map__41674);
var opts = map__41674__$1;
var statearr_41676_43609 = state;
(statearr_41676_43609[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41677_43610 = state;
(statearr_41677_43610[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_41678_43611 = state;
(statearr_41678_43611[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41661){
var G__41662 = cljs.core.first(seq41661);
var seq41661__$1 = cljs.core.next(seq41661);
var G__41663 = cljs.core.first(seq41661__$1);
var seq41661__$2 = cljs.core.next(seq41661__$1);
var G__41664 = cljs.core.first(seq41661__$2);
var seq41661__$3 = cljs.core.next(seq41661__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41662,G__41663,G__41664,seq41661__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41695 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41696){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41696 = meta41696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41697,meta41696__$1){
var self__ = this;
var _41697__$1 = this;
return (new cljs.core.async.t_cljs$core$async41695(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41696__$1));
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41697){
var self__ = this;
var _41697__$1 = this;
return self__.meta41696;
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41696","meta41696",-387696170,null)], null);
}));

(cljs.core.async.t_cljs$core$async41695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41695");

(cljs.core.async.t_cljs$core$async41695.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41695.
 */
cljs.core.async.__GT_t_cljs$core$async41695 = (function cljs$core$async$mix_$___GT_t_cljs$core$async41695(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41696){
return (new cljs.core.async.t_cljs$core$async41695(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41696));
});

}

return (new cljs.core.async.t_cljs$core$async41695(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40038__auto___43661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_41824){
var state_val_41825 = (state_41824[(1)]);
if((state_val_41825 === (7))){
var inst_41730 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
var statearr_41828_43664 = state_41824__$1;
(statearr_41828_43664[(2)] = inst_41730);

(statearr_41828_43664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (20))){
var inst_41742 = (state_41824[(7)]);
var state_41824__$1 = state_41824;
var statearr_41829_43668 = state_41824__$1;
(statearr_41829_43668[(2)] = inst_41742);

(statearr_41829_43668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (27))){
var state_41824__$1 = state_41824;
var statearr_41831_43669 = state_41824__$1;
(statearr_41831_43669[(2)] = null);

(statearr_41831_43669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (1))){
var inst_41716 = (state_41824[(8)]);
var inst_41716__$1 = calc_state();
var inst_41718 = (inst_41716__$1 == null);
var inst_41719 = cljs.core.not(inst_41718);
var state_41824__$1 = (function (){var statearr_41833 = state_41824;
(statearr_41833[(8)] = inst_41716__$1);

return statearr_41833;
})();
if(inst_41719){
var statearr_41836_43670 = state_41824__$1;
(statearr_41836_43670[(1)] = (2));

} else {
var statearr_41837_43671 = state_41824__$1;
(statearr_41837_43671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (24))){
var inst_41771 = (state_41824[(9)]);
var inst_41781 = (state_41824[(10)]);
var inst_41798 = (state_41824[(11)]);
var inst_41798__$1 = (inst_41771.cljs$core$IFn$_invoke$arity$1 ? inst_41771.cljs$core$IFn$_invoke$arity$1(inst_41781) : inst_41771.call(null,inst_41781));
var state_41824__$1 = (function (){var statearr_41846 = state_41824;
(statearr_41846[(11)] = inst_41798__$1);

return statearr_41846;
})();
if(cljs.core.truth_(inst_41798__$1)){
var statearr_41847_43673 = state_41824__$1;
(statearr_41847_43673[(1)] = (29));

} else {
var statearr_41848_43674 = state_41824__$1;
(statearr_41848_43674[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (4))){
var inst_41733 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41733)){
var statearr_41852_43675 = state_41824__$1;
(statearr_41852_43675[(1)] = (8));

} else {
var statearr_41854_43679 = state_41824__$1;
(statearr_41854_43679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (15))){
var inst_41763 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41763)){
var statearr_41856_43680 = state_41824__$1;
(statearr_41856_43680[(1)] = (19));

} else {
var statearr_41857_43681 = state_41824__$1;
(statearr_41857_43681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (21))){
var inst_41770 = (state_41824[(12)]);
var inst_41770__$1 = (state_41824[(2)]);
var inst_41771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41770__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41770__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41770__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41824__$1 = (function (){var statearr_41858 = state_41824;
(statearr_41858[(9)] = inst_41771);

(statearr_41858[(12)] = inst_41770__$1);

(statearr_41858[(13)] = inst_41772);

return statearr_41858;
})();
return cljs.core.async.ioc_alts_BANG_(state_41824__$1,(22),inst_41774);
} else {
if((state_val_41825 === (31))){
var inst_41806 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41806)){
var statearr_41859_43683 = state_41824__$1;
(statearr_41859_43683[(1)] = (32));

} else {
var statearr_41860_43684 = state_41824__$1;
(statearr_41860_43684[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (32))){
var inst_41780 = (state_41824[(14)]);
var state_41824__$1 = state_41824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41824__$1,(35),out,inst_41780);
} else {
if((state_val_41825 === (33))){
var inst_41770 = (state_41824[(12)]);
var inst_41742 = inst_41770;
var state_41824__$1 = (function (){var statearr_41861 = state_41824;
(statearr_41861[(7)] = inst_41742);

return statearr_41861;
})();
var statearr_41862_43685 = state_41824__$1;
(statearr_41862_43685[(2)] = null);

(statearr_41862_43685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (13))){
var inst_41742 = (state_41824[(7)]);
var inst_41751 = inst_41742.cljs$lang$protocol_mask$partition0$;
var inst_41752 = (inst_41751 & (64));
var inst_41754 = inst_41742.cljs$core$ISeq$;
var inst_41755 = (cljs.core.PROTOCOL_SENTINEL === inst_41754);
var inst_41756 = ((inst_41752) || (inst_41755));
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41756)){
var statearr_41863_43686 = state_41824__$1;
(statearr_41863_43686[(1)] = (16));

} else {
var statearr_41864_43687 = state_41824__$1;
(statearr_41864_43687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (22))){
var inst_41780 = (state_41824[(14)]);
var inst_41781 = (state_41824[(10)]);
var inst_41779 = (state_41824[(2)]);
var inst_41780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41779,(0),null);
var inst_41781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41779,(1),null);
var inst_41782 = (inst_41780__$1 == null);
var inst_41783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41781__$1,change);
var inst_41784 = ((inst_41782) || (inst_41783));
var state_41824__$1 = (function (){var statearr_41865 = state_41824;
(statearr_41865[(14)] = inst_41780__$1);

(statearr_41865[(10)] = inst_41781__$1);

return statearr_41865;
})();
if(cljs.core.truth_(inst_41784)){
var statearr_41866_43693 = state_41824__$1;
(statearr_41866_43693[(1)] = (23));

} else {
var statearr_41867_43694 = state_41824__$1;
(statearr_41867_43694[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (36))){
var inst_41770 = (state_41824[(12)]);
var inst_41742 = inst_41770;
var state_41824__$1 = (function (){var statearr_41869 = state_41824;
(statearr_41869[(7)] = inst_41742);

return statearr_41869;
})();
var statearr_41870_43695 = state_41824__$1;
(statearr_41870_43695[(2)] = null);

(statearr_41870_43695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (29))){
var inst_41798 = (state_41824[(11)]);
var state_41824__$1 = state_41824;
var statearr_41876_43700 = state_41824__$1;
(statearr_41876_43700[(2)] = inst_41798);

(statearr_41876_43700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (6))){
var state_41824__$1 = state_41824;
var statearr_41879_43705 = state_41824__$1;
(statearr_41879_43705[(2)] = false);

(statearr_41879_43705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (28))){
var inst_41793 = (state_41824[(2)]);
var inst_41795 = calc_state();
var inst_41742 = inst_41795;
var state_41824__$1 = (function (){var statearr_41881 = state_41824;
(statearr_41881[(7)] = inst_41742);

(statearr_41881[(15)] = inst_41793);

return statearr_41881;
})();
var statearr_41884_43715 = state_41824__$1;
(statearr_41884_43715[(2)] = null);

(statearr_41884_43715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (25))){
var inst_41820 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
var statearr_41887_43720 = state_41824__$1;
(statearr_41887_43720[(2)] = inst_41820);

(statearr_41887_43720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (34))){
var inst_41818 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
var statearr_41888_43721 = state_41824__$1;
(statearr_41888_43721[(2)] = inst_41818);

(statearr_41888_43721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (17))){
var state_41824__$1 = state_41824;
var statearr_41889_43722 = state_41824__$1;
(statearr_41889_43722[(2)] = false);

(statearr_41889_43722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (3))){
var state_41824__$1 = state_41824;
var statearr_41890_43723 = state_41824__$1;
(statearr_41890_43723[(2)] = false);

(statearr_41890_43723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (12))){
var inst_41822 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41824__$1,inst_41822);
} else {
if((state_val_41825 === (2))){
var inst_41716 = (state_41824[(8)]);
var inst_41721 = inst_41716.cljs$lang$protocol_mask$partition0$;
var inst_41722 = (inst_41721 & (64));
var inst_41723 = inst_41716.cljs$core$ISeq$;
var inst_41724 = (cljs.core.PROTOCOL_SENTINEL === inst_41723);
var inst_41726 = ((inst_41722) || (inst_41724));
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41726)){
var statearr_41891_43724 = state_41824__$1;
(statearr_41891_43724[(1)] = (5));

} else {
var statearr_41892_43725 = state_41824__$1;
(statearr_41892_43725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (23))){
var inst_41780 = (state_41824[(14)]);
var inst_41787 = (inst_41780 == null);
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41787)){
var statearr_41893_43726 = state_41824__$1;
(statearr_41893_43726[(1)] = (26));

} else {
var statearr_41894_43727 = state_41824__$1;
(statearr_41894_43727[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (35))){
var inst_41809 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
if(cljs.core.truth_(inst_41809)){
var statearr_41895_43728 = state_41824__$1;
(statearr_41895_43728[(1)] = (36));

} else {
var statearr_41896_43729 = state_41824__$1;
(statearr_41896_43729[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (19))){
var inst_41742 = (state_41824[(7)]);
var inst_41766 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41742);
var state_41824__$1 = state_41824;
var statearr_41897_43730 = state_41824__$1;
(statearr_41897_43730[(2)] = inst_41766);

(statearr_41897_43730[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (11))){
var inst_41742 = (state_41824[(7)]);
var inst_41746 = (inst_41742 == null);
var inst_41747 = cljs.core.not(inst_41746);
var state_41824__$1 = state_41824;
if(inst_41747){
var statearr_41898_43731 = state_41824__$1;
(statearr_41898_43731[(1)] = (13));

} else {
var statearr_41899_43732 = state_41824__$1;
(statearr_41899_43732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (9))){
var inst_41716 = (state_41824[(8)]);
var state_41824__$1 = state_41824;
var statearr_41900_43733 = state_41824__$1;
(statearr_41900_43733[(2)] = inst_41716);

(statearr_41900_43733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (5))){
var state_41824__$1 = state_41824;
var statearr_41902_43735 = state_41824__$1;
(statearr_41902_43735[(2)] = true);

(statearr_41902_43735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (14))){
var state_41824__$1 = state_41824;
var statearr_41903_43736 = state_41824__$1;
(statearr_41903_43736[(2)] = false);

(statearr_41903_43736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (26))){
var inst_41781 = (state_41824[(10)]);
var inst_41790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41781);
var state_41824__$1 = state_41824;
var statearr_41904_43737 = state_41824__$1;
(statearr_41904_43737[(2)] = inst_41790);

(statearr_41904_43737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (16))){
var state_41824__$1 = state_41824;
var statearr_41905_43738 = state_41824__$1;
(statearr_41905_43738[(2)] = true);

(statearr_41905_43738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (38))){
var inst_41814 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
var statearr_41906_43739 = state_41824__$1;
(statearr_41906_43739[(2)] = inst_41814);

(statearr_41906_43739[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (30))){
var inst_41771 = (state_41824[(9)]);
var inst_41781 = (state_41824[(10)]);
var inst_41772 = (state_41824[(13)]);
var inst_41801 = cljs.core.empty_QMARK_(inst_41771);
var inst_41802 = (inst_41772.cljs$core$IFn$_invoke$arity$1 ? inst_41772.cljs$core$IFn$_invoke$arity$1(inst_41781) : inst_41772.call(null,inst_41781));
var inst_41803 = cljs.core.not(inst_41802);
var inst_41804 = ((inst_41801) && (inst_41803));
var state_41824__$1 = state_41824;
var statearr_41910_43740 = state_41824__$1;
(statearr_41910_43740[(2)] = inst_41804);

(statearr_41910_43740[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (10))){
var inst_41716 = (state_41824[(8)]);
var inst_41738 = (state_41824[(2)]);
var inst_41739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41738,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41738,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41738,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41742 = inst_41716;
var state_41824__$1 = (function (){var statearr_41911 = state_41824;
(statearr_41911[(16)] = inst_41741);

(statearr_41911[(17)] = inst_41739);

(statearr_41911[(18)] = inst_41740);

(statearr_41911[(7)] = inst_41742);

return statearr_41911;
})();
var statearr_41913_43747 = state_41824__$1;
(statearr_41913_43747[(2)] = null);

(statearr_41913_43747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (18))){
var inst_41760 = (state_41824[(2)]);
var state_41824__$1 = state_41824;
var statearr_41914_43748 = state_41824__$1;
(statearr_41914_43748[(2)] = inst_41760);

(statearr_41914_43748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (37))){
var state_41824__$1 = state_41824;
var statearr_41916_43749 = state_41824__$1;
(statearr_41916_43749[(2)] = null);

(statearr_41916_43749[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41825 === (8))){
var inst_41716 = (state_41824[(8)]);
var inst_41735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41716);
var state_41824__$1 = state_41824;
var statearr_41917_43753 = state_41824__$1;
(statearr_41917_43753[(2)] = inst_41735);

(statearr_41917_43753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__39898__auto__ = null;
var cljs$core$async$mix_$_state_machine__39898__auto____0 = (function (){
var statearr_41918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41918[(0)] = cljs$core$async$mix_$_state_machine__39898__auto__);

(statearr_41918[(1)] = (1));

return statearr_41918;
});
var cljs$core$async$mix_$_state_machine__39898__auto____1 = (function (state_41824){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_41824);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e41921){var ex__39901__auto__ = e41921;
var statearr_41922_43760 = state_41824;
(statearr_41922_43760[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_41824[(4)]))){
var statearr_41926_43762 = state_41824;
(statearr_41926_43762[(1)] = cljs.core.first((state_41824[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43764 = state_41824;
state_41824 = G__43764;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39898__auto__ = function(state_41824){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39898__auto____1.call(this,state_41824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39898__auto____0;
cljs$core$async$mix_$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39898__auto____1;
return cljs$core$async$mix_$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_41927 = f__40039__auto__();
(statearr_41927[(6)] = c__40038__auto___43661);

return statearr_41927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43769 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43769(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43770 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43770(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43774 = (function() {
var G__43775 = null;
var G__43775__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__43775__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__43775 = function(p,v){
switch(arguments.length){
case 1:
return G__43775__1.call(this,p);
case 2:
return G__43775__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43775.cljs$core$IFn$_invoke$arity$1 = G__43775__1;
G__43775.cljs$core$IFn$_invoke$arity$2 = G__43775__2;
return G__43775;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41940 = arguments.length;
switch (G__41940) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43774(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43774(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41957 = arguments.length;
switch (G__41957) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41955_SHARP_){
if(cljs.core.truth_((p1__41955_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41955_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41955_SHARP_.call(null,topic)))){
return p1__41955_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41955_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41960 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41961){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41961 = meta41961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41962,meta41961__$1){
var self__ = this;
var _41962__$1 = this;
return (new cljs.core.async.t_cljs$core$async41960(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41961__$1));
}));

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41962){
var self__ = this;
var _41962__$1 = this;
return self__.meta41961;
}));

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41961","meta41961",-36740080,null)], null);
}));

(cljs.core.async.t_cljs$core$async41960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41960");

(cljs.core.async.t_cljs$core$async41960.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async41960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41960.
 */
cljs.core.async.__GT_t_cljs$core$async41960 = (function cljs$core$async$__GT_t_cljs$core$async41960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41961){
return (new cljs.core.async.t_cljs$core$async41960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41961));
});

}

return (new cljs.core.async.t_cljs$core$async41960(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40038__auto___43785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42045){
var state_val_42046 = (state_42045[(1)]);
if((state_val_42046 === (7))){
var inst_42041 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42048_43792 = state_42045__$1;
(statearr_42048_43792[(2)] = inst_42041);

(statearr_42048_43792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (20))){
var state_42045__$1 = state_42045;
var statearr_42049_43794 = state_42045__$1;
(statearr_42049_43794[(2)] = null);

(statearr_42049_43794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (1))){
var state_42045__$1 = state_42045;
var statearr_42050_43799 = state_42045__$1;
(statearr_42050_43799[(2)] = null);

(statearr_42050_43799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (24))){
var inst_42024 = (state_42045[(7)]);
var inst_42033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42024);
var state_42045__$1 = state_42045;
var statearr_42052_43806 = state_42045__$1;
(statearr_42052_43806[(2)] = inst_42033);

(statearr_42052_43806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (4))){
var inst_41976 = (state_42045[(8)]);
var inst_41976__$1 = (state_42045[(2)]);
var inst_41977 = (inst_41976__$1 == null);
var state_42045__$1 = (function (){var statearr_42053 = state_42045;
(statearr_42053[(8)] = inst_41976__$1);

return statearr_42053;
})();
if(cljs.core.truth_(inst_41977)){
var statearr_42054_43807 = state_42045__$1;
(statearr_42054_43807[(1)] = (5));

} else {
var statearr_42055_43808 = state_42045__$1;
(statearr_42055_43808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (15))){
var inst_42018 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42056_43812 = state_42045__$1;
(statearr_42056_43812[(2)] = inst_42018);

(statearr_42056_43812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (21))){
var inst_42038 = (state_42045[(2)]);
var state_42045__$1 = (function (){var statearr_42057 = state_42045;
(statearr_42057[(9)] = inst_42038);

return statearr_42057;
})();
var statearr_42058_43813 = state_42045__$1;
(statearr_42058_43813[(2)] = null);

(statearr_42058_43813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (13))){
var inst_42000 = (state_42045[(10)]);
var inst_42002 = cljs.core.chunked_seq_QMARK_(inst_42000);
var state_42045__$1 = state_42045;
if(inst_42002){
var statearr_42059_43817 = state_42045__$1;
(statearr_42059_43817[(1)] = (16));

} else {
var statearr_42060_43818 = state_42045__$1;
(statearr_42060_43818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (22))){
var inst_42030 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
if(cljs.core.truth_(inst_42030)){
var statearr_42061_43820 = state_42045__$1;
(statearr_42061_43820[(1)] = (23));

} else {
var statearr_42063_43821 = state_42045__$1;
(statearr_42063_43821[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (6))){
var inst_42026 = (state_42045[(11)]);
var inst_41976 = (state_42045[(8)]);
var inst_42024 = (state_42045[(7)]);
var inst_42024__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41976) : topic_fn.call(null,inst_41976));
var inst_42025 = cljs.core.deref(mults);
var inst_42026__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42025,inst_42024__$1);
var state_42045__$1 = (function (){var statearr_42064 = state_42045;
(statearr_42064[(11)] = inst_42026__$1);

(statearr_42064[(7)] = inst_42024__$1);

return statearr_42064;
})();
if(cljs.core.truth_(inst_42026__$1)){
var statearr_42066_43828 = state_42045__$1;
(statearr_42066_43828[(1)] = (19));

} else {
var statearr_42067_43829 = state_42045__$1;
(statearr_42067_43829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (25))){
var inst_42035 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42068_43830 = state_42045__$1;
(statearr_42068_43830[(2)] = inst_42035);

(statearr_42068_43830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (17))){
var inst_42000 = (state_42045[(10)]);
var inst_42009 = cljs.core.first(inst_42000);
var inst_42010 = cljs.core.async.muxch_STAR_(inst_42009);
var inst_42011 = cljs.core.async.close_BANG_(inst_42010);
var inst_42012 = cljs.core.next(inst_42000);
var inst_41986 = inst_42012;
var inst_41987 = null;
var inst_41988 = (0);
var inst_41989 = (0);
var state_42045__$1 = (function (){var statearr_42072 = state_42045;
(statearr_42072[(12)] = inst_41989);

(statearr_42072[(13)] = inst_42011);

(statearr_42072[(14)] = inst_41986);

(statearr_42072[(15)] = inst_41988);

(statearr_42072[(16)] = inst_41987);

return statearr_42072;
})();
var statearr_42073_43832 = state_42045__$1;
(statearr_42073_43832[(2)] = null);

(statearr_42073_43832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (3))){
var inst_42043 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42045__$1,inst_42043);
} else {
if((state_val_42046 === (12))){
var inst_42020 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42074_43833 = state_42045__$1;
(statearr_42074_43833[(2)] = inst_42020);

(statearr_42074_43833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (2))){
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42045__$1,(4),ch);
} else {
if((state_val_42046 === (23))){
var state_42045__$1 = state_42045;
var statearr_42075_43834 = state_42045__$1;
(statearr_42075_43834[(2)] = null);

(statearr_42075_43834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (19))){
var inst_42026 = (state_42045[(11)]);
var inst_41976 = (state_42045[(8)]);
var inst_42028 = cljs.core.async.muxch_STAR_(inst_42026);
var state_42045__$1 = state_42045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42045__$1,(22),inst_42028,inst_41976);
} else {
if((state_val_42046 === (11))){
var inst_42000 = (state_42045[(10)]);
var inst_41986 = (state_42045[(14)]);
var inst_42000__$1 = cljs.core.seq(inst_41986);
var state_42045__$1 = (function (){var statearr_42076 = state_42045;
(statearr_42076[(10)] = inst_42000__$1);

return statearr_42076;
})();
if(inst_42000__$1){
var statearr_42077_43838 = state_42045__$1;
(statearr_42077_43838[(1)] = (13));

} else {
var statearr_42078_43844 = state_42045__$1;
(statearr_42078_43844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (9))){
var inst_42022 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42079_43846 = state_42045__$1;
(statearr_42079_43846[(2)] = inst_42022);

(statearr_42079_43846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (5))){
var inst_41983 = cljs.core.deref(mults);
var inst_41984 = cljs.core.vals(inst_41983);
var inst_41985 = cljs.core.seq(inst_41984);
var inst_41986 = inst_41985;
var inst_41987 = null;
var inst_41988 = (0);
var inst_41989 = (0);
var state_42045__$1 = (function (){var statearr_42080 = state_42045;
(statearr_42080[(12)] = inst_41989);

(statearr_42080[(14)] = inst_41986);

(statearr_42080[(15)] = inst_41988);

(statearr_42080[(16)] = inst_41987);

return statearr_42080;
})();
var statearr_42081_43847 = state_42045__$1;
(statearr_42081_43847[(2)] = null);

(statearr_42081_43847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (14))){
var state_42045__$1 = state_42045;
var statearr_42086_43854 = state_42045__$1;
(statearr_42086_43854[(2)] = null);

(statearr_42086_43854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (16))){
var inst_42000 = (state_42045[(10)]);
var inst_42004 = cljs.core.chunk_first(inst_42000);
var inst_42005 = cljs.core.chunk_rest(inst_42000);
var inst_42006 = cljs.core.count(inst_42004);
var inst_41986 = inst_42005;
var inst_41987 = inst_42004;
var inst_41988 = inst_42006;
var inst_41989 = (0);
var state_42045__$1 = (function (){var statearr_42087 = state_42045;
(statearr_42087[(12)] = inst_41989);

(statearr_42087[(14)] = inst_41986);

(statearr_42087[(15)] = inst_41988);

(statearr_42087[(16)] = inst_41987);

return statearr_42087;
})();
var statearr_42088_43856 = state_42045__$1;
(statearr_42088_43856[(2)] = null);

(statearr_42088_43856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (10))){
var inst_41989 = (state_42045[(12)]);
var inst_41986 = (state_42045[(14)]);
var inst_41988 = (state_42045[(15)]);
var inst_41987 = (state_42045[(16)]);
var inst_41994 = cljs.core._nth(inst_41987,inst_41989);
var inst_41995 = cljs.core.async.muxch_STAR_(inst_41994);
var inst_41996 = cljs.core.async.close_BANG_(inst_41995);
var inst_41997 = (inst_41989 + (1));
var tmp42083 = inst_41986;
var tmp42084 = inst_41988;
var tmp42085 = inst_41987;
var inst_41986__$1 = tmp42083;
var inst_41987__$1 = tmp42085;
var inst_41988__$1 = tmp42084;
var inst_41989__$1 = inst_41997;
var state_42045__$1 = (function (){var statearr_42089 = state_42045;
(statearr_42089[(12)] = inst_41989__$1);

(statearr_42089[(17)] = inst_41996);

(statearr_42089[(14)] = inst_41986__$1);

(statearr_42089[(15)] = inst_41988__$1);

(statearr_42089[(16)] = inst_41987__$1);

return statearr_42089;
})();
var statearr_42090_43858 = state_42045__$1;
(statearr_42090_43858[(2)] = null);

(statearr_42090_43858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (18))){
var inst_42015 = (state_42045[(2)]);
var state_42045__$1 = state_42045;
var statearr_42091_43859 = state_42045__$1;
(statearr_42091_43859[(2)] = inst_42015);

(statearr_42091_43859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42046 === (8))){
var inst_41989 = (state_42045[(12)]);
var inst_41988 = (state_42045[(15)]);
var inst_41991 = (inst_41989 < inst_41988);
var inst_41992 = inst_41991;
var state_42045__$1 = state_42045;
if(cljs.core.truth_(inst_41992)){
var statearr_42092_43860 = state_42045__$1;
(statearr_42092_43860[(1)] = (10));

} else {
var statearr_42093_43861 = state_42045__$1;
(statearr_42093_43861[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42095[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42095[(1)] = (1));

return statearr_42095;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42045){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42045);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42096){var ex__39901__auto__ = e42096;
var statearr_42097_43870 = state_42045;
(statearr_42097_43870[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42045[(4)]))){
var statearr_42098_43871 = state_42045;
(statearr_42098_43871[(1)] = cljs.core.first((state_42045[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43872 = state_42045;
state_42045 = G__43872;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42099 = f__40039__auto__();
(statearr_42099[(6)] = c__40038__auto___43785);

return statearr_42099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42106 = arguments.length;
switch (G__42106) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42109 = arguments.length;
switch (G__42109) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42115 = arguments.length;
switch (G__42115) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__40038__auto___43884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42183){
var state_val_42184 = (state_42183[(1)]);
if((state_val_42184 === (7))){
var state_42183__$1 = state_42183;
var statearr_42187_43885 = state_42183__$1;
(statearr_42187_43885[(2)] = null);

(statearr_42187_43885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (1))){
var state_42183__$1 = state_42183;
var statearr_42188_43886 = state_42183__$1;
(statearr_42188_43886[(2)] = null);

(statearr_42188_43886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (4))){
var inst_42123 = (state_42183[(7)]);
var inst_42122 = (state_42183[(8)]);
var inst_42125 = (inst_42123 < inst_42122);
var state_42183__$1 = state_42183;
if(cljs.core.truth_(inst_42125)){
var statearr_42189_43887 = state_42183__$1;
(statearr_42189_43887[(1)] = (6));

} else {
var statearr_42190_43888 = state_42183__$1;
(statearr_42190_43888[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (15))){
var inst_42169 = (state_42183[(9)]);
var inst_42174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42169);
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42183__$1,(17),out,inst_42174);
} else {
if((state_val_42184 === (13))){
var inst_42169 = (state_42183[(9)]);
var inst_42169__$1 = (state_42183[(2)]);
var inst_42170 = cljs.core.some(cljs.core.nil_QMARK_,inst_42169__$1);
var state_42183__$1 = (function (){var statearr_42191 = state_42183;
(statearr_42191[(9)] = inst_42169__$1);

return statearr_42191;
})();
if(cljs.core.truth_(inst_42170)){
var statearr_42192_43895 = state_42183__$1;
(statearr_42192_43895[(1)] = (14));

} else {
var statearr_42193_43896 = state_42183__$1;
(statearr_42193_43896[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (6))){
var state_42183__$1 = state_42183;
var statearr_42194_43897 = state_42183__$1;
(statearr_42194_43897[(2)] = null);

(statearr_42194_43897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (17))){
var inst_42176 = (state_42183[(2)]);
var state_42183__$1 = (function (){var statearr_42197 = state_42183;
(statearr_42197[(10)] = inst_42176);

return statearr_42197;
})();
var statearr_42199_43898 = state_42183__$1;
(statearr_42199_43898[(2)] = null);

(statearr_42199_43898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (3))){
var inst_42181 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42183__$1,inst_42181);
} else {
if((state_val_42184 === (12))){
var _ = (function (){var statearr_42201 = state_42183;
(statearr_42201[(4)] = cljs.core.rest((state_42183[(4)])));

return statearr_42201;
})();
var state_42183__$1 = state_42183;
var ex42195 = (state_42183__$1[(2)]);
var statearr_42202_43899 = state_42183__$1;
(statearr_42202_43899[(5)] = ex42195);


if((ex42195 instanceof Object)){
var statearr_42204_43900 = state_42183__$1;
(statearr_42204_43900[(1)] = (11));

(statearr_42204_43900[(5)] = null);

} else {
throw ex42195;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (2))){
var inst_42121 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42122 = cnt;
var inst_42123 = (0);
var state_42183__$1 = (function (){var statearr_42205 = state_42183;
(statearr_42205[(11)] = inst_42121);

(statearr_42205[(7)] = inst_42123);

(statearr_42205[(8)] = inst_42122);

return statearr_42205;
})();
var statearr_42206_43901 = state_42183__$1;
(statearr_42206_43901[(2)] = null);

(statearr_42206_43901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (11))){
var inst_42143 = (state_42183[(2)]);
var inst_42144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42183__$1 = (function (){var statearr_42207 = state_42183;
(statearr_42207[(12)] = inst_42143);

return statearr_42207;
})();
var statearr_42208_43902 = state_42183__$1;
(statearr_42208_43902[(2)] = inst_42144);

(statearr_42208_43902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (9))){
var inst_42123 = (state_42183[(7)]);
var _ = (function (){var statearr_42209 = state_42183;
(statearr_42209[(4)] = cljs.core.cons((12),(state_42183[(4)])));

return statearr_42209;
})();
var inst_42151 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42123) : chs__$1.call(null,inst_42123));
var inst_42152 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42123) : done.call(null,inst_42123));
var inst_42153 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42151,inst_42152);
var ___$1 = (function (){var statearr_42210 = state_42183;
(statearr_42210[(4)] = cljs.core.rest((state_42183[(4)])));

return statearr_42210;
})();
var state_42183__$1 = state_42183;
var statearr_42211_43903 = state_42183__$1;
(statearr_42211_43903[(2)] = inst_42153);

(statearr_42211_43903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (5))){
var inst_42167 = (state_42183[(2)]);
var state_42183__$1 = (function (){var statearr_42212 = state_42183;
(statearr_42212[(13)] = inst_42167);

return statearr_42212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42183__$1,(13),dchan);
} else {
if((state_val_42184 === (14))){
var inst_42172 = cljs.core.async.close_BANG_(out);
var state_42183__$1 = state_42183;
var statearr_42214_43905 = state_42183__$1;
(statearr_42214_43905[(2)] = inst_42172);

(statearr_42214_43905[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (16))){
var inst_42179 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42215_43907 = state_42183__$1;
(statearr_42215_43907[(2)] = inst_42179);

(statearr_42215_43907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (10))){
var inst_42123 = (state_42183[(7)]);
var inst_42156 = (state_42183[(2)]);
var inst_42157 = (inst_42123 + (1));
var inst_42123__$1 = inst_42157;
var state_42183__$1 = (function (){var statearr_42216 = state_42183;
(statearr_42216[(7)] = inst_42123__$1);

(statearr_42216[(14)] = inst_42156);

return statearr_42216;
})();
var statearr_42217_43908 = state_42183__$1;
(statearr_42217_43908[(2)] = null);

(statearr_42217_43908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (8))){
var inst_42165 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42218_43911 = state_42183__$1;
(statearr_42218_43911[(2)] = inst_42165);

(statearr_42218_43911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42219[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42219[(1)] = (1));

return statearr_42219;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42183){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42183);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42222){var ex__39901__auto__ = e42222;
var statearr_42223_43912 = state_42183;
(statearr_42223_43912[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42183[(4)]))){
var statearr_42224_43913 = state_42183;
(statearr_42224_43913[(1)] = cljs.core.first((state_42183[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43914 = state_42183;
state_42183 = G__43914;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42230 = f__40039__auto__();
(statearr_42230[(6)] = c__40038__auto___43884);

return statearr_42230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42243 = arguments.length;
switch (G__42243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40038__auto___43917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42289){
var state_val_42290 = (state_42289[(1)]);
if((state_val_42290 === (7))){
var inst_42266 = (state_42289[(7)]);
var inst_42267 = (state_42289[(8)]);
var inst_42266__$1 = (state_42289[(2)]);
var inst_42267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42266__$1,(0),null);
var inst_42268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42266__$1,(1),null);
var inst_42269 = (inst_42267__$1 == null);
var state_42289__$1 = (function (){var statearr_42291 = state_42289;
(statearr_42291[(7)] = inst_42266__$1);

(statearr_42291[(8)] = inst_42267__$1);

(statearr_42291[(9)] = inst_42268);

return statearr_42291;
})();
if(cljs.core.truth_(inst_42269)){
var statearr_42292_43919 = state_42289__$1;
(statearr_42292_43919[(1)] = (8));

} else {
var statearr_42293_43920 = state_42289__$1;
(statearr_42293_43920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (1))){
var inst_42256 = cljs.core.vec(chs);
var inst_42257 = inst_42256;
var state_42289__$1 = (function (){var statearr_42294 = state_42289;
(statearr_42294[(10)] = inst_42257);

return statearr_42294;
})();
var statearr_42295_43921 = state_42289__$1;
(statearr_42295_43921[(2)] = null);

(statearr_42295_43921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (4))){
var inst_42257 = (state_42289[(10)]);
var state_42289__$1 = state_42289;
return cljs.core.async.ioc_alts_BANG_(state_42289__$1,(7),inst_42257);
} else {
if((state_val_42290 === (6))){
var inst_42285 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42296_43922 = state_42289__$1;
(statearr_42296_43922[(2)] = inst_42285);

(statearr_42296_43922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (3))){
var inst_42287 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42289__$1,inst_42287);
} else {
if((state_val_42290 === (2))){
var inst_42257 = (state_42289[(10)]);
var inst_42259 = cljs.core.count(inst_42257);
var inst_42260 = (inst_42259 > (0));
var state_42289__$1 = state_42289;
if(cljs.core.truth_(inst_42260)){
var statearr_42298_43927 = state_42289__$1;
(statearr_42298_43927[(1)] = (4));

} else {
var statearr_42299_43932 = state_42289__$1;
(statearr_42299_43932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (11))){
var inst_42257 = (state_42289[(10)]);
var inst_42278 = (state_42289[(2)]);
var tmp42297 = inst_42257;
var inst_42257__$1 = tmp42297;
var state_42289__$1 = (function (){var statearr_42300 = state_42289;
(statearr_42300[(10)] = inst_42257__$1);

(statearr_42300[(11)] = inst_42278);

return statearr_42300;
})();
var statearr_42301_43933 = state_42289__$1;
(statearr_42301_43933[(2)] = null);

(statearr_42301_43933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (9))){
var inst_42267 = (state_42289[(8)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42289__$1,(11),out,inst_42267);
} else {
if((state_val_42290 === (5))){
var inst_42283 = cljs.core.async.close_BANG_(out);
var state_42289__$1 = state_42289;
var statearr_42305_43935 = state_42289__$1;
(statearr_42305_43935[(2)] = inst_42283);

(statearr_42305_43935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (10))){
var inst_42281 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42306_43936 = state_42289__$1;
(statearr_42306_43936[(2)] = inst_42281);

(statearr_42306_43936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (8))){
var inst_42266 = (state_42289[(7)]);
var inst_42257 = (state_42289[(10)]);
var inst_42267 = (state_42289[(8)]);
var inst_42268 = (state_42289[(9)]);
var inst_42273 = (function (){var cs = inst_42257;
var vec__42262 = inst_42266;
var v = inst_42267;
var c = inst_42268;
return (function (p1__42232_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42232_SHARP_);
});
})();
var inst_42274 = cljs.core.filterv(inst_42273,inst_42257);
var inst_42257__$1 = inst_42274;
var state_42289__$1 = (function (){var statearr_42307 = state_42289;
(statearr_42307[(10)] = inst_42257__$1);

return statearr_42307;
})();
var statearr_42308_43942 = state_42289__$1;
(statearr_42308_43942[(2)] = null);

(statearr_42308_43942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42313 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42313[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42313[(1)] = (1));

return statearr_42313;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42289){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42289);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42314){var ex__39901__auto__ = e42314;
var statearr_42315_43944 = state_42289;
(statearr_42315_43944[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42289[(4)]))){
var statearr_42316_43946 = state_42289;
(statearr_42316_43946[(1)] = cljs.core.first((state_42289[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43947 = state_42289;
state_42289 = G__43947;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42317 = f__40039__auto__();
(statearr_42317[(6)] = c__40038__auto___43917);

return statearr_42317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42319 = arguments.length;
switch (G__42319) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40038__auto___43950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42343){
var state_val_42344 = (state_42343[(1)]);
if((state_val_42344 === (7))){
var inst_42325 = (state_42343[(7)]);
var inst_42325__$1 = (state_42343[(2)]);
var inst_42326 = (inst_42325__$1 == null);
var inst_42327 = cljs.core.not(inst_42326);
var state_42343__$1 = (function (){var statearr_42348 = state_42343;
(statearr_42348[(7)] = inst_42325__$1);

return statearr_42348;
})();
if(inst_42327){
var statearr_42349_43952 = state_42343__$1;
(statearr_42349_43952[(1)] = (8));

} else {
var statearr_42350_43953 = state_42343__$1;
(statearr_42350_43953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (1))){
var inst_42320 = (0);
var state_42343__$1 = (function (){var statearr_42351 = state_42343;
(statearr_42351[(8)] = inst_42320);

return statearr_42351;
})();
var statearr_42353_43956 = state_42343__$1;
(statearr_42353_43956[(2)] = null);

(statearr_42353_43956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (4))){
var state_42343__$1 = state_42343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42343__$1,(7),ch);
} else {
if((state_val_42344 === (6))){
var inst_42338 = (state_42343[(2)]);
var state_42343__$1 = state_42343;
var statearr_42355_43957 = state_42343__$1;
(statearr_42355_43957[(2)] = inst_42338);

(statearr_42355_43957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (3))){
var inst_42340 = (state_42343[(2)]);
var inst_42341 = cljs.core.async.close_BANG_(out);
var state_42343__$1 = (function (){var statearr_42357 = state_42343;
(statearr_42357[(9)] = inst_42340);

return statearr_42357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42343__$1,inst_42341);
} else {
if((state_val_42344 === (2))){
var inst_42320 = (state_42343[(8)]);
var inst_42322 = (inst_42320 < n);
var state_42343__$1 = state_42343;
if(cljs.core.truth_(inst_42322)){
var statearr_42359_43959 = state_42343__$1;
(statearr_42359_43959[(1)] = (4));

} else {
var statearr_42360_43960 = state_42343__$1;
(statearr_42360_43960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (11))){
var inst_42320 = (state_42343[(8)]);
var inst_42330 = (state_42343[(2)]);
var inst_42331 = (inst_42320 + (1));
var inst_42320__$1 = inst_42331;
var state_42343__$1 = (function (){var statearr_42362 = state_42343;
(statearr_42362[(8)] = inst_42320__$1);

(statearr_42362[(10)] = inst_42330);

return statearr_42362;
})();
var statearr_42365_43961 = state_42343__$1;
(statearr_42365_43961[(2)] = null);

(statearr_42365_43961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (9))){
var state_42343__$1 = state_42343;
var statearr_42368_43962 = state_42343__$1;
(statearr_42368_43962[(2)] = null);

(statearr_42368_43962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (5))){
var state_42343__$1 = state_42343;
var statearr_42371_43963 = state_42343__$1;
(statearr_42371_43963[(2)] = null);

(statearr_42371_43963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (10))){
var inst_42335 = (state_42343[(2)]);
var state_42343__$1 = state_42343;
var statearr_42373_43965 = state_42343__$1;
(statearr_42373_43965[(2)] = inst_42335);

(statearr_42373_43965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42344 === (8))){
var inst_42325 = (state_42343[(7)]);
var state_42343__$1 = state_42343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42343__$1,(11),out,inst_42325);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42376[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42376[(1)] = (1));

return statearr_42376;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42343){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42343);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42378){var ex__39901__auto__ = e42378;
var statearr_42379_43967 = state_42343;
(statearr_42379_43967[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42343[(4)]))){
var statearr_42381_43968 = state_42343;
(statearr_42381_43968[(1)] = cljs.core.first((state_42343[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43969 = state_42343;
state_42343 = G__43969;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42385 = f__40039__auto__();
(statearr_42385[(6)] = c__40038__auto___43950);

return statearr_42385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42387 = (function (f,ch,meta42388){
this.f = f;
this.ch = ch;
this.meta42388 = meta42388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42389,meta42388__$1){
var self__ = this;
var _42389__$1 = this;
return (new cljs.core.async.t_cljs$core$async42387(self__.f,self__.ch,meta42388__$1));
}));

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42389){
var self__ = this;
var _42389__$1 = this;
return self__.meta42388;
}));

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42394 = (function (f,ch,meta42388,_,fn1,meta42395){
this.f = f;
this.ch = ch;
this.meta42388 = meta42388;
this._ = _;
this.fn1 = fn1;
this.meta42395 = meta42395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42396,meta42395__$1){
var self__ = this;
var _42396__$1 = this;
return (new cljs.core.async.t_cljs$core$async42394(self__.f,self__.ch,self__.meta42388,self__._,self__.fn1,meta42395__$1));
}));

(cljs.core.async.t_cljs$core$async42394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42396){
var self__ = this;
var _42396__$1 = this;
return self__.meta42395;
}));

(cljs.core.async.t_cljs$core$async42394.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42386_SHARP_){
var G__42398 = (((p1__42386_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42386_SHARP_) : self__.f.call(null,p1__42386_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42398) : f1.call(null,G__42398));
});
}));

(cljs.core.async.t_cljs$core$async42394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42388","meta42388",63794029,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42387","cljs.core.async/t_cljs$core$async42387",1115552451,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42395","meta42395",-362944145,null)], null);
}));

(cljs.core.async.t_cljs$core$async42394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42394");

(cljs.core.async.t_cljs$core$async42394.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42394.
 */
cljs.core.async.__GT_t_cljs$core$async42394 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42394(f__$1,ch__$1,meta42388__$1,___$2,fn1__$1,meta42395){
return (new cljs.core.async.t_cljs$core$async42394(f__$1,ch__$1,meta42388__$1,___$2,fn1__$1,meta42395));
});

}

return (new cljs.core.async.t_cljs$core$async42394(self__.f,self__.ch,self__.meta42388,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42400 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42400) : self__.f.call(null,G__42400));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42388","meta42388",63794029,null)], null);
}));

(cljs.core.async.t_cljs$core$async42387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42387");

(cljs.core.async.t_cljs$core$async42387.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42387.
 */
cljs.core.async.__GT_t_cljs$core$async42387 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42387(f__$1,ch__$1,meta42388){
return (new cljs.core.async.t_cljs$core$async42387(f__$1,ch__$1,meta42388));
});

}

return (new cljs.core.async.t_cljs$core$async42387(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42402 = (function (f,ch,meta42403){
this.f = f;
this.ch = ch;
this.meta42403 = meta42403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42404,meta42403__$1){
var self__ = this;
var _42404__$1 = this;
return (new cljs.core.async.t_cljs$core$async42402(self__.f,self__.ch,meta42403__$1));
}));

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42404){
var self__ = this;
var _42404__$1 = this;
return self__.meta42403;
}));

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42403","meta42403",-1731828905,null)], null);
}));

(cljs.core.async.t_cljs$core$async42402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42402");

(cljs.core.async.t_cljs$core$async42402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42402.
 */
cljs.core.async.__GT_t_cljs$core$async42402 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42402(f__$1,ch__$1,meta42403){
return (new cljs.core.async.t_cljs$core$async42402(f__$1,ch__$1,meta42403));
});

}

return (new cljs.core.async.t_cljs$core$async42402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42405 = (function (p,ch,meta42406){
this.p = p;
this.ch = ch;
this.meta42406 = meta42406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42407,meta42406__$1){
var self__ = this;
var _42407__$1 = this;
return (new cljs.core.async.t_cljs$core$async42405(self__.p,self__.ch,meta42406__$1));
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42407){
var self__ = this;
var _42407__$1 = this;
return self__.meta42406;
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42406","meta42406",1588909405,null)], null);
}));

(cljs.core.async.t_cljs$core$async42405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42405");

(cljs.core.async.t_cljs$core$async42405.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42405.
 */
cljs.core.async.__GT_t_cljs$core$async42405 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42405(p__$1,ch__$1,meta42406){
return (new cljs.core.async.t_cljs$core$async42405(p__$1,ch__$1,meta42406));
});

}

return (new cljs.core.async.t_cljs$core$async42405(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42422 = arguments.length;
switch (G__42422) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40038__auto___44028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42445){
var state_val_42446 = (state_42445[(1)]);
if((state_val_42446 === (7))){
var inst_42441 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42448_44031 = state_42445__$1;
(statearr_42448_44031[(2)] = inst_42441);

(statearr_42448_44031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (1))){
var state_42445__$1 = state_42445;
var statearr_42449_44038 = state_42445__$1;
(statearr_42449_44038[(2)] = null);

(statearr_42449_44038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (4))){
var inst_42427 = (state_42445[(7)]);
var inst_42427__$1 = (state_42445[(2)]);
var inst_42428 = (inst_42427__$1 == null);
var state_42445__$1 = (function (){var statearr_42450 = state_42445;
(statearr_42450[(7)] = inst_42427__$1);

return statearr_42450;
})();
if(cljs.core.truth_(inst_42428)){
var statearr_42451_44046 = state_42445__$1;
(statearr_42451_44046[(1)] = (5));

} else {
var statearr_42452_44047 = state_42445__$1;
(statearr_42452_44047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (6))){
var inst_42427 = (state_42445[(7)]);
var inst_42432 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42427) : p.call(null,inst_42427));
var state_42445__$1 = state_42445;
if(cljs.core.truth_(inst_42432)){
var statearr_42453_44054 = state_42445__$1;
(statearr_42453_44054[(1)] = (8));

} else {
var statearr_42454_44057 = state_42445__$1;
(statearr_42454_44057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (3))){
var inst_42443 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42445__$1,inst_42443);
} else {
if((state_val_42446 === (2))){
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42445__$1,(4),ch);
} else {
if((state_val_42446 === (11))){
var inst_42435 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42459_44059 = state_42445__$1;
(statearr_42459_44059[(2)] = inst_42435);

(statearr_42459_44059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (9))){
var state_42445__$1 = state_42445;
var statearr_42460_44062 = state_42445__$1;
(statearr_42460_44062[(2)] = null);

(statearr_42460_44062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (5))){
var inst_42430 = cljs.core.async.close_BANG_(out);
var state_42445__$1 = state_42445;
var statearr_42461_44065 = state_42445__$1;
(statearr_42461_44065[(2)] = inst_42430);

(statearr_42461_44065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (10))){
var inst_42438 = (state_42445[(2)]);
var state_42445__$1 = (function (){var statearr_42462 = state_42445;
(statearr_42462[(8)] = inst_42438);

return statearr_42462;
})();
var statearr_42463_44068 = state_42445__$1;
(statearr_42463_44068[(2)] = null);

(statearr_42463_44068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (8))){
var inst_42427 = (state_42445[(7)]);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42445__$1,(11),out,inst_42427);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42464 = [null,null,null,null,null,null,null,null,null];
(statearr_42464[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42464[(1)] = (1));

return statearr_42464;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42445){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42445);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42465){var ex__39901__auto__ = e42465;
var statearr_42466_44069 = state_42445;
(statearr_42466_44069[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42445[(4)]))){
var statearr_42467_44070 = state_42445;
(statearr_42467_44070[(1)] = cljs.core.first((state_42445[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44071 = state_42445;
state_42445 = G__44071;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42468 = f__40039__auto__();
(statearr_42468[(6)] = c__40038__auto___44028);

return statearr_42468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42472 = arguments.length;
switch (G__42472) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40038__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42546){
var state_val_42547 = (state_42546[(1)]);
if((state_val_42547 === (7))){
var inst_42542 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42554_44076 = state_42546__$1;
(statearr_42554_44076[(2)] = inst_42542);

(statearr_42554_44076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (20))){
var inst_42510 = (state_42546[(7)]);
var inst_42522 = (state_42546[(2)]);
var inst_42523 = cljs.core.next(inst_42510);
var inst_42487 = inst_42523;
var inst_42488 = null;
var inst_42489 = (0);
var inst_42490 = (0);
var state_42546__$1 = (function (){var statearr_42555 = state_42546;
(statearr_42555[(8)] = inst_42489);

(statearr_42555[(9)] = inst_42487);

(statearr_42555[(10)] = inst_42488);

(statearr_42555[(11)] = inst_42522);

(statearr_42555[(12)] = inst_42490);

return statearr_42555;
})();
var statearr_42556_44078 = state_42546__$1;
(statearr_42556_44078[(2)] = null);

(statearr_42556_44078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (1))){
var state_42546__$1 = state_42546;
var statearr_42557_44079 = state_42546__$1;
(statearr_42557_44079[(2)] = null);

(statearr_42557_44079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (4))){
var inst_42476 = (state_42546[(13)]);
var inst_42476__$1 = (state_42546[(2)]);
var inst_42477 = (inst_42476__$1 == null);
var state_42546__$1 = (function (){var statearr_42558 = state_42546;
(statearr_42558[(13)] = inst_42476__$1);

return statearr_42558;
})();
if(cljs.core.truth_(inst_42477)){
var statearr_42559_44086 = state_42546__$1;
(statearr_42559_44086[(1)] = (5));

} else {
var statearr_42560_44087 = state_42546__$1;
(statearr_42560_44087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (15))){
var state_42546__$1 = state_42546;
var statearr_42564_44088 = state_42546__$1;
(statearr_42564_44088[(2)] = null);

(statearr_42564_44088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (21))){
var state_42546__$1 = state_42546;
var statearr_42565_44092 = state_42546__$1;
(statearr_42565_44092[(2)] = null);

(statearr_42565_44092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (13))){
var inst_42489 = (state_42546[(8)]);
var inst_42487 = (state_42546[(9)]);
var inst_42488 = (state_42546[(10)]);
var inst_42490 = (state_42546[(12)]);
var inst_42502 = (state_42546[(2)]);
var inst_42503 = (inst_42490 + (1));
var tmp42561 = inst_42489;
var tmp42562 = inst_42487;
var tmp42563 = inst_42488;
var inst_42487__$1 = tmp42562;
var inst_42488__$1 = tmp42563;
var inst_42489__$1 = tmp42561;
var inst_42490__$1 = inst_42503;
var state_42546__$1 = (function (){var statearr_42574 = state_42546;
(statearr_42574[(8)] = inst_42489__$1);

(statearr_42574[(9)] = inst_42487__$1);

(statearr_42574[(10)] = inst_42488__$1);

(statearr_42574[(14)] = inst_42502);

(statearr_42574[(12)] = inst_42490__$1);

return statearr_42574;
})();
var statearr_42575_44105 = state_42546__$1;
(statearr_42575_44105[(2)] = null);

(statearr_42575_44105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (22))){
var state_42546__$1 = state_42546;
var statearr_42576_44112 = state_42546__$1;
(statearr_42576_44112[(2)] = null);

(statearr_42576_44112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (6))){
var inst_42476 = (state_42546[(13)]);
var inst_42485 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42476) : f.call(null,inst_42476));
var inst_42486 = cljs.core.seq(inst_42485);
var inst_42487 = inst_42486;
var inst_42488 = null;
var inst_42489 = (0);
var inst_42490 = (0);
var state_42546__$1 = (function (){var statearr_42577 = state_42546;
(statearr_42577[(8)] = inst_42489);

(statearr_42577[(9)] = inst_42487);

(statearr_42577[(10)] = inst_42488);

(statearr_42577[(12)] = inst_42490);

return statearr_42577;
})();
var statearr_42578_44130 = state_42546__$1;
(statearr_42578_44130[(2)] = null);

(statearr_42578_44130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (17))){
var inst_42510 = (state_42546[(7)]);
var inst_42514 = cljs.core.chunk_first(inst_42510);
var inst_42516 = cljs.core.chunk_rest(inst_42510);
var inst_42517 = cljs.core.count(inst_42514);
var inst_42487 = inst_42516;
var inst_42488 = inst_42514;
var inst_42489 = inst_42517;
var inst_42490 = (0);
var state_42546__$1 = (function (){var statearr_42580 = state_42546;
(statearr_42580[(8)] = inst_42489);

(statearr_42580[(9)] = inst_42487);

(statearr_42580[(10)] = inst_42488);

(statearr_42580[(12)] = inst_42490);

return statearr_42580;
})();
var statearr_42582_44154 = state_42546__$1;
(statearr_42582_44154[(2)] = null);

(statearr_42582_44154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (3))){
var inst_42544 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42546__$1,inst_42544);
} else {
if((state_val_42547 === (12))){
var inst_42532 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42583_44161 = state_42546__$1;
(statearr_42583_44161[(2)] = inst_42532);

(statearr_42583_44161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (2))){
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42546__$1,(4),in$);
} else {
if((state_val_42547 === (23))){
var inst_42540 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42584_44169 = state_42546__$1;
(statearr_42584_44169[(2)] = inst_42540);

(statearr_42584_44169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (19))){
var inst_42527 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42589_44175 = state_42546__$1;
(statearr_42589_44175[(2)] = inst_42527);

(statearr_42589_44175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (11))){
var inst_42487 = (state_42546[(9)]);
var inst_42510 = (state_42546[(7)]);
var inst_42510__$1 = cljs.core.seq(inst_42487);
var state_42546__$1 = (function (){var statearr_42592 = state_42546;
(statearr_42592[(7)] = inst_42510__$1);

return statearr_42592;
})();
if(inst_42510__$1){
var statearr_42595_44186 = state_42546__$1;
(statearr_42595_44186[(1)] = (14));

} else {
var statearr_42596_44188 = state_42546__$1;
(statearr_42596_44188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (9))){
var inst_42534 = (state_42546[(2)]);
var inst_42535 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42546__$1 = (function (){var statearr_42599 = state_42546;
(statearr_42599[(15)] = inst_42534);

return statearr_42599;
})();
if(cljs.core.truth_(inst_42535)){
var statearr_42601_44201 = state_42546__$1;
(statearr_42601_44201[(1)] = (21));

} else {
var statearr_42602_44206 = state_42546__$1;
(statearr_42602_44206[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (5))){
var inst_42479 = cljs.core.async.close_BANG_(out);
var state_42546__$1 = state_42546;
var statearr_42603_44214 = state_42546__$1;
(statearr_42603_44214[(2)] = inst_42479);

(statearr_42603_44214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (14))){
var inst_42510 = (state_42546[(7)]);
var inst_42512 = cljs.core.chunked_seq_QMARK_(inst_42510);
var state_42546__$1 = state_42546;
if(inst_42512){
var statearr_42604_44215 = state_42546__$1;
(statearr_42604_44215[(1)] = (17));

} else {
var statearr_42605_44216 = state_42546__$1;
(statearr_42605_44216[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (16))){
var inst_42530 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42606_44217 = state_42546__$1;
(statearr_42606_44217[(2)] = inst_42530);

(statearr_42606_44217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (10))){
var inst_42488 = (state_42546[(10)]);
var inst_42490 = (state_42546[(12)]);
var inst_42500 = cljs.core._nth(inst_42488,inst_42490);
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42546__$1,(13),out,inst_42500);
} else {
if((state_val_42547 === (18))){
var inst_42510 = (state_42546[(7)]);
var inst_42520 = cljs.core.first(inst_42510);
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42546__$1,(20),out,inst_42520);
} else {
if((state_val_42547 === (8))){
var inst_42489 = (state_42546[(8)]);
var inst_42490 = (state_42546[(12)]);
var inst_42496 = (inst_42490 < inst_42489);
var inst_42497 = inst_42496;
var state_42546__$1 = state_42546;
if(cljs.core.truth_(inst_42497)){
var statearr_42607_44222 = state_42546__$1;
(statearr_42607_44222[(1)] = (10));

} else {
var statearr_42608_44223 = state_42546__$1;
(statearr_42608_44223[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39898__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39898__auto____0 = (function (){
var statearr_42610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42610[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39898__auto__);

(statearr_42610[(1)] = (1));

return statearr_42610;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39898__auto____1 = (function (state_42546){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42546);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42611){var ex__39901__auto__ = e42611;
var statearr_42614_44233 = state_42546;
(statearr_42614_44233[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42546[(4)]))){
var statearr_42618_44238 = state_42546;
(statearr_42618_44238[(1)] = cljs.core.first((state_42546[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44239 = state_42546;
state_42546 = G__44239;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39898__auto__ = function(state_42546){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39898__auto____1.call(this,state_42546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39898__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39898__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42619 = f__40039__auto__();
(statearr_42619[(6)] = c__40038__auto__);

return statearr_42619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));

return c__40038__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42626 = arguments.length;
switch (G__42626) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42636 = arguments.length;
switch (G__42636) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42638 = arguments.length;
switch (G__42638) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40038__auto___44254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42664){
var state_val_42665 = (state_42664[(1)]);
if((state_val_42665 === (7))){
var inst_42659 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42666_44259 = state_42664__$1;
(statearr_42666_44259[(2)] = inst_42659);

(statearr_42666_44259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (1))){
var inst_42641 = null;
var state_42664__$1 = (function (){var statearr_42667 = state_42664;
(statearr_42667[(7)] = inst_42641);

return statearr_42667;
})();
var statearr_42668_44264 = state_42664__$1;
(statearr_42668_44264[(2)] = null);

(statearr_42668_44264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (4))){
var inst_42644 = (state_42664[(8)]);
var inst_42644__$1 = (state_42664[(2)]);
var inst_42645 = (inst_42644__$1 == null);
var inst_42646 = cljs.core.not(inst_42645);
var state_42664__$1 = (function (){var statearr_42669 = state_42664;
(statearr_42669[(8)] = inst_42644__$1);

return statearr_42669;
})();
if(inst_42646){
var statearr_42672_44268 = state_42664__$1;
(statearr_42672_44268[(1)] = (5));

} else {
var statearr_42675_44269 = state_42664__$1;
(statearr_42675_44269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (6))){
var state_42664__$1 = state_42664;
var statearr_42676_44274 = state_42664__$1;
(statearr_42676_44274[(2)] = null);

(statearr_42676_44274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (3))){
var inst_42661 = (state_42664[(2)]);
var inst_42662 = cljs.core.async.close_BANG_(out);
var state_42664__$1 = (function (){var statearr_42679 = state_42664;
(statearr_42679[(9)] = inst_42661);

return statearr_42679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42664__$1,inst_42662);
} else {
if((state_val_42665 === (2))){
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42664__$1,(4),ch);
} else {
if((state_val_42665 === (11))){
var inst_42644 = (state_42664[(8)]);
var inst_42653 = (state_42664[(2)]);
var inst_42641 = inst_42644;
var state_42664__$1 = (function (){var statearr_42681 = state_42664;
(statearr_42681[(7)] = inst_42641);

(statearr_42681[(10)] = inst_42653);

return statearr_42681;
})();
var statearr_42682_44296 = state_42664__$1;
(statearr_42682_44296[(2)] = null);

(statearr_42682_44296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (9))){
var inst_42644 = (state_42664[(8)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42664__$1,(11),out,inst_42644);
} else {
if((state_val_42665 === (5))){
var inst_42641 = (state_42664[(7)]);
var inst_42644 = (state_42664[(8)]);
var inst_42648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42644,inst_42641);
var state_42664__$1 = state_42664;
if(inst_42648){
var statearr_42684_44304 = state_42664__$1;
(statearr_42684_44304[(1)] = (8));

} else {
var statearr_42685_44305 = state_42664__$1;
(statearr_42685_44305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (10))){
var inst_42656 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42686_44309 = state_42664__$1;
(statearr_42686_44309[(2)] = inst_42656);

(statearr_42686_44309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (8))){
var inst_42641 = (state_42664[(7)]);
var tmp42683 = inst_42641;
var inst_42641__$1 = tmp42683;
var state_42664__$1 = (function (){var statearr_42687 = state_42664;
(statearr_42687[(7)] = inst_42641__$1);

return statearr_42687;
})();
var statearr_42688_44317 = state_42664__$1;
(statearr_42688_44317[(2)] = null);

(statearr_42688_44317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42689[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42689[(1)] = (1));

return statearr_42689;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42664){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42664);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42690){var ex__39901__auto__ = e42690;
var statearr_42691_44328 = state_42664;
(statearr_42691_44328[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42664[(4)]))){
var statearr_42692_44333 = state_42664;
(statearr_42692_44333[(1)] = cljs.core.first((state_42664[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44339 = state_42664;
state_42664 = G__44339;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42693 = f__40039__auto__();
(statearr_42693[(6)] = c__40038__auto___44254);

return statearr_42693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42695 = arguments.length;
switch (G__42695) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40038__auto___44345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42744){
var state_val_42745 = (state_42744[(1)]);
if((state_val_42745 === (7))){
var inst_42735 = (state_42744[(2)]);
var state_42744__$1 = state_42744;
var statearr_42746_44349 = state_42744__$1;
(statearr_42746_44349[(2)] = inst_42735);

(statearr_42746_44349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (1))){
var inst_42702 = (new Array(n));
var inst_42703 = inst_42702;
var inst_42704 = (0);
var state_42744__$1 = (function (){var statearr_42747 = state_42744;
(statearr_42747[(7)] = inst_42703);

(statearr_42747[(8)] = inst_42704);

return statearr_42747;
})();
var statearr_42748_44350 = state_42744__$1;
(statearr_42748_44350[(2)] = null);

(statearr_42748_44350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (4))){
var inst_42707 = (state_42744[(9)]);
var inst_42707__$1 = (state_42744[(2)]);
var inst_42708 = (inst_42707__$1 == null);
var inst_42709 = cljs.core.not(inst_42708);
var state_42744__$1 = (function (){var statearr_42753 = state_42744;
(statearr_42753[(9)] = inst_42707__$1);

return statearr_42753;
})();
if(inst_42709){
var statearr_42758_44357 = state_42744__$1;
(statearr_42758_44357[(1)] = (5));

} else {
var statearr_42779_44358 = state_42744__$1;
(statearr_42779_44358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (15))){
var inst_42729 = (state_42744[(2)]);
var state_42744__$1 = state_42744;
var statearr_42780_44359 = state_42744__$1;
(statearr_42780_44359[(2)] = inst_42729);

(statearr_42780_44359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (13))){
var state_42744__$1 = state_42744;
var statearr_42781_44364 = state_42744__$1;
(statearr_42781_44364[(2)] = null);

(statearr_42781_44364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (6))){
var inst_42704 = (state_42744[(8)]);
var inst_42725 = (inst_42704 > (0));
var state_42744__$1 = state_42744;
if(cljs.core.truth_(inst_42725)){
var statearr_42785_44371 = state_42744__$1;
(statearr_42785_44371[(1)] = (12));

} else {
var statearr_42789_44373 = state_42744__$1;
(statearr_42789_44373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (3))){
var inst_42737 = (state_42744[(2)]);
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42744__$1,inst_42737);
} else {
if((state_val_42745 === (12))){
var inst_42703 = (state_42744[(7)]);
var inst_42727 = cljs.core.vec(inst_42703);
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42744__$1,(15),out,inst_42727);
} else {
if((state_val_42745 === (2))){
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42744__$1,(4),ch);
} else {
if((state_val_42745 === (11))){
var inst_42719 = (state_42744[(2)]);
var inst_42720 = (new Array(n));
var inst_42703 = inst_42720;
var inst_42704 = (0);
var state_42744__$1 = (function (){var statearr_42795 = state_42744;
(statearr_42795[(7)] = inst_42703);

(statearr_42795[(8)] = inst_42704);

(statearr_42795[(10)] = inst_42719);

return statearr_42795;
})();
var statearr_42796_44381 = state_42744__$1;
(statearr_42796_44381[(2)] = null);

(statearr_42796_44381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (9))){
var inst_42703 = (state_42744[(7)]);
var inst_42717 = cljs.core.vec(inst_42703);
var state_42744__$1 = state_42744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42744__$1,(11),out,inst_42717);
} else {
if((state_val_42745 === (5))){
var inst_42703 = (state_42744[(7)]);
var inst_42712 = (state_42744[(11)]);
var inst_42704 = (state_42744[(8)]);
var inst_42707 = (state_42744[(9)]);
var inst_42711 = (inst_42703[inst_42704] = inst_42707);
var inst_42712__$1 = (inst_42704 + (1));
var inst_42713 = (inst_42712__$1 < n);
var state_42744__$1 = (function (){var statearr_42797 = state_42744;
(statearr_42797[(11)] = inst_42712__$1);

(statearr_42797[(12)] = inst_42711);

return statearr_42797;
})();
if(cljs.core.truth_(inst_42713)){
var statearr_42799_44383 = state_42744__$1;
(statearr_42799_44383[(1)] = (8));

} else {
var statearr_42800_44384 = state_42744__$1;
(statearr_42800_44384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (14))){
var inst_42732 = (state_42744[(2)]);
var inst_42733 = cljs.core.async.close_BANG_(out);
var state_42744__$1 = (function (){var statearr_42802 = state_42744;
(statearr_42802[(13)] = inst_42732);

return statearr_42802;
})();
var statearr_42803_44385 = state_42744__$1;
(statearr_42803_44385[(2)] = inst_42733);

(statearr_42803_44385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (10))){
var inst_42723 = (state_42744[(2)]);
var state_42744__$1 = state_42744;
var statearr_42804_44386 = state_42744__$1;
(statearr_42804_44386[(2)] = inst_42723);

(statearr_42804_44386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42745 === (8))){
var inst_42703 = (state_42744[(7)]);
var inst_42712 = (state_42744[(11)]);
var tmp42801 = inst_42703;
var inst_42703__$1 = tmp42801;
var inst_42704 = inst_42712;
var state_42744__$1 = (function (){var statearr_42809 = state_42744;
(statearr_42809[(7)] = inst_42703__$1);

(statearr_42809[(8)] = inst_42704);

return statearr_42809;
})();
var statearr_42810_44387 = state_42744__$1;
(statearr_42810_44387[(2)] = null);

(statearr_42810_44387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42811[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42811[(1)] = (1));

return statearr_42811;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42744){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42744);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42812){var ex__39901__auto__ = e42812;
var statearr_42813_44396 = state_42744;
(statearr_42813_44396[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42744[(4)]))){
var statearr_42814_44397 = state_42744;
(statearr_42814_44397[(1)] = cljs.core.first((state_42744[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44401 = state_42744;
state_42744 = G__44401;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42815 = f__40039__auto__();
(statearr_42815[(6)] = c__40038__auto___44345);

return statearr_42815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42817 = arguments.length;
switch (G__42817) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__40038__auto___44405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_42860){
var state_val_42861 = (state_42860[(1)]);
if((state_val_42861 === (7))){
var inst_42856 = (state_42860[(2)]);
var state_42860__$1 = state_42860;
var statearr_42862_44406 = state_42860__$1;
(statearr_42862_44406[(2)] = inst_42856);

(statearr_42862_44406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (1))){
var inst_42819 = [];
var inst_42820 = inst_42819;
var inst_42821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42860__$1 = (function (){var statearr_42863 = state_42860;
(statearr_42863[(7)] = inst_42820);

(statearr_42863[(8)] = inst_42821);

return statearr_42863;
})();
var statearr_42864_44407 = state_42860__$1;
(statearr_42864_44407[(2)] = null);

(statearr_42864_44407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (4))){
var inst_42824 = (state_42860[(9)]);
var inst_42824__$1 = (state_42860[(2)]);
var inst_42825 = (inst_42824__$1 == null);
var inst_42826 = cljs.core.not(inst_42825);
var state_42860__$1 = (function (){var statearr_42865 = state_42860;
(statearr_42865[(9)] = inst_42824__$1);

return statearr_42865;
})();
if(inst_42826){
var statearr_42866_44412 = state_42860__$1;
(statearr_42866_44412[(1)] = (5));

} else {
var statearr_42867_44416 = state_42860__$1;
(statearr_42867_44416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (15))){
var inst_42850 = (state_42860[(2)]);
var state_42860__$1 = state_42860;
var statearr_42868_44417 = state_42860__$1;
(statearr_42868_44417[(2)] = inst_42850);

(statearr_42868_44417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (13))){
var state_42860__$1 = state_42860;
var statearr_42872_44418 = state_42860__$1;
(statearr_42872_44418[(2)] = null);

(statearr_42872_44418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (6))){
var inst_42820 = (state_42860[(7)]);
var inst_42845 = inst_42820.length;
var inst_42846 = (inst_42845 > (0));
var state_42860__$1 = state_42860;
if(cljs.core.truth_(inst_42846)){
var statearr_42873_44419 = state_42860__$1;
(statearr_42873_44419[(1)] = (12));

} else {
var statearr_42874_44420 = state_42860__$1;
(statearr_42874_44420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (3))){
var inst_42858 = (state_42860[(2)]);
var state_42860__$1 = state_42860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42860__$1,inst_42858);
} else {
if((state_val_42861 === (12))){
var inst_42820 = (state_42860[(7)]);
var inst_42848 = cljs.core.vec(inst_42820);
var state_42860__$1 = state_42860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42860__$1,(15),out,inst_42848);
} else {
if((state_val_42861 === (2))){
var state_42860__$1 = state_42860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42860__$1,(4),ch);
} else {
if((state_val_42861 === (11))){
var inst_42828 = (state_42860[(10)]);
var inst_42824 = (state_42860[(9)]);
var inst_42838 = (state_42860[(2)]);
var inst_42839 = [];
var inst_42840 = inst_42839.push(inst_42824);
var inst_42820 = inst_42839;
var inst_42821 = inst_42828;
var state_42860__$1 = (function (){var statearr_42875 = state_42860;
(statearr_42875[(11)] = inst_42838);

(statearr_42875[(12)] = inst_42840);

(statearr_42875[(7)] = inst_42820);

(statearr_42875[(8)] = inst_42821);

return statearr_42875;
})();
var statearr_42876_44425 = state_42860__$1;
(statearr_42876_44425[(2)] = null);

(statearr_42876_44425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (9))){
var inst_42820 = (state_42860[(7)]);
var inst_42836 = cljs.core.vec(inst_42820);
var state_42860__$1 = state_42860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42860__$1,(11),out,inst_42836);
} else {
if((state_val_42861 === (5))){
var inst_42828 = (state_42860[(10)]);
var inst_42821 = (state_42860[(8)]);
var inst_42824 = (state_42860[(9)]);
var inst_42828__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42824) : f.call(null,inst_42824));
var inst_42829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42828__$1,inst_42821);
var inst_42830 = cljs.core.keyword_identical_QMARK_(inst_42821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42831 = ((inst_42829) || (inst_42830));
var state_42860__$1 = (function (){var statearr_42879 = state_42860;
(statearr_42879[(10)] = inst_42828__$1);

return statearr_42879;
})();
if(cljs.core.truth_(inst_42831)){
var statearr_42880_44426 = state_42860__$1;
(statearr_42880_44426[(1)] = (8));

} else {
var statearr_42881_44427 = state_42860__$1;
(statearr_42881_44427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (14))){
var inst_42853 = (state_42860[(2)]);
var inst_42854 = cljs.core.async.close_BANG_(out);
var state_42860__$1 = (function (){var statearr_42883 = state_42860;
(statearr_42883[(13)] = inst_42853);

return statearr_42883;
})();
var statearr_42884_44431 = state_42860__$1;
(statearr_42884_44431[(2)] = inst_42854);

(statearr_42884_44431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (10))){
var inst_42843 = (state_42860[(2)]);
var state_42860__$1 = state_42860;
var statearr_42885_44432 = state_42860__$1;
(statearr_42885_44432[(2)] = inst_42843);

(statearr_42885_44432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42861 === (8))){
var inst_42828 = (state_42860[(10)]);
var inst_42820 = (state_42860[(7)]);
var inst_42824 = (state_42860[(9)]);
var inst_42833 = inst_42820.push(inst_42824);
var tmp42882 = inst_42820;
var inst_42820__$1 = tmp42882;
var inst_42821 = inst_42828;
var state_42860__$1 = (function (){var statearr_42886 = state_42860;
(statearr_42886[(14)] = inst_42833);

(statearr_42886[(7)] = inst_42820__$1);

(statearr_42886[(8)] = inst_42821);

return statearr_42886;
})();
var statearr_42887_44433 = state_42860__$1;
(statearr_42887_44433[(2)] = null);

(statearr_42887_44433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39898__auto__ = null;
var cljs$core$async$state_machine__39898__auto____0 = (function (){
var statearr_42891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42891[(0)] = cljs$core$async$state_machine__39898__auto__);

(statearr_42891[(1)] = (1));

return statearr_42891;
});
var cljs$core$async$state_machine__39898__auto____1 = (function (state_42860){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_42860);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e42892){var ex__39901__auto__ = e42892;
var statearr_42893_44434 = state_42860;
(statearr_42893_44434[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_42860[(4)]))){
var statearr_42894_44438 = state_42860;
(statearr_42894_44438[(1)] = cljs.core.first((state_42860[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44439 = state_42860;
state_42860 = G__44439;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
cljs$core$async$state_machine__39898__auto__ = function(state_42860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39898__auto____1.call(this,state_42860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39898__auto____0;
cljs$core$async$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39898__auto____1;
return cljs$core$async$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_42896 = f__40039__auto__();
(statearr_42896[(6)] = c__40038__auto___44405);

return statearr_42896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
