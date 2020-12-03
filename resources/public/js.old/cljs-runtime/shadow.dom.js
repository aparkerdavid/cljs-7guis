goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43954 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_43954(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43958 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_43958(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42953 = coll;
var G__42954 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42953,G__42954) : shadow.dom.lazy_native_coll_seq.call(null,G__42953,G__42954));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42982 = arguments.length;
switch (G__42982) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42988 = arguments.length;
switch (G__42988) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42992 = arguments.length;
switch (G__42992) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__43004 = arguments.length;
switch (G__43004) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__43011 = arguments.length;
switch (G__43011) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__43022 = arguments.length;
switch (G__43022) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e43033){if((e43033 instanceof Object)){
var e = e43033;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43033;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__43038 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43039 = null;
var count__43040 = (0);
var i__43041 = (0);
while(true){
if((i__43041 < count__43040)){
var el = chunk__43039.cljs$core$IIndexed$_nth$arity$2(null,i__43041);
var handler_43991__$1 = ((function (seq__43038,chunk__43039,count__43040,i__43041,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43038,chunk__43039,count__43040,i__43041,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43991__$1);


var G__43993 = seq__43038;
var G__43994 = chunk__43039;
var G__43995 = count__43040;
var G__43996 = (i__43041 + (1));
seq__43038 = G__43993;
chunk__43039 = G__43994;
count__43040 = G__43995;
i__43041 = G__43996;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43038);
if(temp__5735__auto__){
var seq__43038__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43038__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43038__$1);
var G__43997 = cljs.core.chunk_rest(seq__43038__$1);
var G__43998 = c__4556__auto__;
var G__43999 = cljs.core.count(c__4556__auto__);
var G__44000 = (0);
seq__43038 = G__43997;
chunk__43039 = G__43998;
count__43040 = G__43999;
i__43041 = G__44000;
continue;
} else {
var el = cljs.core.first(seq__43038__$1);
var handler_44002__$1 = ((function (seq__43038,chunk__43039,count__43040,i__43041,el,seq__43038__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43038,chunk__43039,count__43040,i__43041,el,seq__43038__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44002__$1);


var G__44004 = cljs.core.next(seq__43038__$1);
var G__44005 = null;
var G__44006 = (0);
var G__44007 = (0);
seq__43038 = G__44004;
chunk__43039 = G__44005;
count__43040 = G__44006;
i__43041 = G__44007;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__43060 = arguments.length;
switch (G__43060) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__43079 = cljs.core.seq(events);
var chunk__43080 = null;
var count__43081 = (0);
var i__43082 = (0);
while(true){
if((i__43082 < count__43081)){
var vec__43091 = chunk__43080.cljs$core$IIndexed$_nth$arity$2(null,i__43082);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43091,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44014 = seq__43079;
var G__44015 = chunk__43080;
var G__44016 = count__43081;
var G__44017 = (i__43082 + (1));
seq__43079 = G__44014;
chunk__43080 = G__44015;
count__43081 = G__44016;
i__43082 = G__44017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43079);
if(temp__5735__auto__){
var seq__43079__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43079__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43079__$1);
var G__44019 = cljs.core.chunk_rest(seq__43079__$1);
var G__44020 = c__4556__auto__;
var G__44021 = cljs.core.count(c__4556__auto__);
var G__44022 = (0);
seq__43079 = G__44019;
chunk__43080 = G__44020;
count__43081 = G__44021;
i__43082 = G__44022;
continue;
} else {
var vec__43097 = cljs.core.first(seq__43079__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43097,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44024 = cljs.core.next(seq__43079__$1);
var G__44025 = null;
var G__44026 = (0);
var G__44027 = (0);
seq__43079 = G__44024;
chunk__43080 = G__44025;
count__43081 = G__44026;
i__43082 = G__44027;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__43103 = cljs.core.seq(styles);
var chunk__43104 = null;
var count__43105 = (0);
var i__43106 = (0);
while(true){
if((i__43106 < count__43105)){
var vec__43117 = chunk__43104.cljs$core$IIndexed$_nth$arity$2(null,i__43106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43117,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44034 = seq__43103;
var G__44035 = chunk__43104;
var G__44036 = count__43105;
var G__44037 = (i__43106 + (1));
seq__43103 = G__44034;
chunk__43104 = G__44035;
count__43105 = G__44036;
i__43106 = G__44037;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43103);
if(temp__5735__auto__){
var seq__43103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43103__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43103__$1);
var G__44040 = cljs.core.chunk_rest(seq__43103__$1);
var G__44041 = c__4556__auto__;
var G__44042 = cljs.core.count(c__4556__auto__);
var G__44043 = (0);
seq__43103 = G__44040;
chunk__43104 = G__44041;
count__43105 = G__44042;
i__43106 = G__44043;
continue;
} else {
var vec__43122 = cljs.core.first(seq__43103__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43122,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44048 = cljs.core.next(seq__43103__$1);
var G__44049 = null;
var G__44050 = (0);
var G__44051 = (0);
seq__43103 = G__44048;
chunk__43104 = G__44049;
count__43105 = G__44050;
i__43106 = G__44051;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__43126_44052 = key;
var G__43126_44053__$1 = (((G__43126_44052 instanceof cljs.core.Keyword))?G__43126_44052.fqn:null);
switch (G__43126_44053__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_44066 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_44066,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_44066,"aria-");
}
})())){
el.setAttribute(ks_44066,value);
} else {
(el[ks_44066] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__43144){
var map__43145 = p__43144;
var map__43145__$1 = (((((!((map__43145 == null))))?(((((map__43145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43145):map__43145);
var props = map__43145__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43145__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__43148 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__43151 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__43151,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__43151;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__43154 = arguments.length;
switch (G__43154) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__43164){
var vec__43166 = p__43164;
var seq__43167 = cljs.core.seq(vec__43166);
var first__43168 = cljs.core.first(seq__43167);
var seq__43167__$1 = cljs.core.next(seq__43167);
var nn = first__43168;
var first__43168__$1 = cljs.core.first(seq__43167__$1);
var seq__43167__$2 = cljs.core.next(seq__43167__$1);
var np = first__43168__$1;
var nc = seq__43167__$2;
var node = vec__43166;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43172 = nn;
var G__43173 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43172,G__43173) : create_fn.call(null,G__43172,G__43173));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43175 = nn;
var G__43176 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43175,G__43176) : create_fn.call(null,G__43175,G__43176));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__43179 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43179,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43179,(1),null);
var seq__43182_44099 = cljs.core.seq(node_children);
var chunk__43183_44100 = null;
var count__43184_44101 = (0);
var i__43185_44102 = (0);
while(true){
if((i__43185_44102 < count__43184_44101)){
var child_struct_44104 = chunk__43183_44100.cljs$core$IIndexed$_nth$arity$2(null,i__43185_44102);
var children_44107 = shadow.dom.dom_node(child_struct_44104);
if(cljs.core.seq_QMARK_(children_44107)){
var seq__43211_44108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44107));
var chunk__43213_44109 = null;
var count__43214_44110 = (0);
var i__43215_44111 = (0);
while(true){
if((i__43215_44111 < count__43214_44110)){
var child_44113 = chunk__43213_44109.cljs$core$IIndexed$_nth$arity$2(null,i__43215_44111);
if(cljs.core.truth_(child_44113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44113);


var G__44115 = seq__43211_44108;
var G__44116 = chunk__43213_44109;
var G__44117 = count__43214_44110;
var G__44118 = (i__43215_44111 + (1));
seq__43211_44108 = G__44115;
chunk__43213_44109 = G__44116;
count__43214_44110 = G__44117;
i__43215_44111 = G__44118;
continue;
} else {
var G__44124 = seq__43211_44108;
var G__44125 = chunk__43213_44109;
var G__44126 = count__43214_44110;
var G__44127 = (i__43215_44111 + (1));
seq__43211_44108 = G__44124;
chunk__43213_44109 = G__44125;
count__43214_44110 = G__44126;
i__43215_44111 = G__44127;
continue;
}
} else {
var temp__5735__auto___44129 = cljs.core.seq(seq__43211_44108);
if(temp__5735__auto___44129){
var seq__43211_44131__$1 = temp__5735__auto___44129;
if(cljs.core.chunked_seq_QMARK_(seq__43211_44131__$1)){
var c__4556__auto___44132 = cljs.core.chunk_first(seq__43211_44131__$1);
var G__44137 = cljs.core.chunk_rest(seq__43211_44131__$1);
var G__44138 = c__4556__auto___44132;
var G__44139 = cljs.core.count(c__4556__auto___44132);
var G__44140 = (0);
seq__43211_44108 = G__44137;
chunk__43213_44109 = G__44138;
count__43214_44110 = G__44139;
i__43215_44111 = G__44140;
continue;
} else {
var child_44141 = cljs.core.first(seq__43211_44131__$1);
if(cljs.core.truth_(child_44141)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44141);


var G__44146 = cljs.core.next(seq__43211_44131__$1);
var G__44147 = null;
var G__44148 = (0);
var G__44149 = (0);
seq__43211_44108 = G__44146;
chunk__43213_44109 = G__44147;
count__43214_44110 = G__44148;
i__43215_44111 = G__44149;
continue;
} else {
var G__44150 = cljs.core.next(seq__43211_44131__$1);
var G__44151 = null;
var G__44152 = (0);
var G__44153 = (0);
seq__43211_44108 = G__44150;
chunk__43213_44109 = G__44151;
count__43214_44110 = G__44152;
i__43215_44111 = G__44153;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44107);
}


var G__44155 = seq__43182_44099;
var G__44156 = chunk__43183_44100;
var G__44157 = count__43184_44101;
var G__44158 = (i__43185_44102 + (1));
seq__43182_44099 = G__44155;
chunk__43183_44100 = G__44156;
count__43184_44101 = G__44157;
i__43185_44102 = G__44158;
continue;
} else {
var temp__5735__auto___44159 = cljs.core.seq(seq__43182_44099);
if(temp__5735__auto___44159){
var seq__43182_44160__$1 = temp__5735__auto___44159;
if(cljs.core.chunked_seq_QMARK_(seq__43182_44160__$1)){
var c__4556__auto___44162 = cljs.core.chunk_first(seq__43182_44160__$1);
var G__44163 = cljs.core.chunk_rest(seq__43182_44160__$1);
var G__44164 = c__4556__auto___44162;
var G__44165 = cljs.core.count(c__4556__auto___44162);
var G__44166 = (0);
seq__43182_44099 = G__44163;
chunk__43183_44100 = G__44164;
count__43184_44101 = G__44165;
i__43185_44102 = G__44166;
continue;
} else {
var child_struct_44167 = cljs.core.first(seq__43182_44160__$1);
var children_44168 = shadow.dom.dom_node(child_struct_44167);
if(cljs.core.seq_QMARK_(children_44168)){
var seq__43223_44170 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44168));
var chunk__43225_44171 = null;
var count__43226_44172 = (0);
var i__43227_44173 = (0);
while(true){
if((i__43227_44173 < count__43226_44172)){
var child_44174 = chunk__43225_44171.cljs$core$IIndexed$_nth$arity$2(null,i__43227_44173);
if(cljs.core.truth_(child_44174)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44174);


var G__44176 = seq__43223_44170;
var G__44177 = chunk__43225_44171;
var G__44178 = count__43226_44172;
var G__44179 = (i__43227_44173 + (1));
seq__43223_44170 = G__44176;
chunk__43225_44171 = G__44177;
count__43226_44172 = G__44178;
i__43227_44173 = G__44179;
continue;
} else {
var G__44180 = seq__43223_44170;
var G__44181 = chunk__43225_44171;
var G__44182 = count__43226_44172;
var G__44183 = (i__43227_44173 + (1));
seq__43223_44170 = G__44180;
chunk__43225_44171 = G__44181;
count__43226_44172 = G__44182;
i__43227_44173 = G__44183;
continue;
}
} else {
var temp__5735__auto___44184__$1 = cljs.core.seq(seq__43223_44170);
if(temp__5735__auto___44184__$1){
var seq__43223_44185__$1 = temp__5735__auto___44184__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43223_44185__$1)){
var c__4556__auto___44187 = cljs.core.chunk_first(seq__43223_44185__$1);
var G__44189 = cljs.core.chunk_rest(seq__43223_44185__$1);
var G__44190 = c__4556__auto___44187;
var G__44191 = cljs.core.count(c__4556__auto___44187);
var G__44192 = (0);
seq__43223_44170 = G__44189;
chunk__43225_44171 = G__44190;
count__43226_44172 = G__44191;
i__43227_44173 = G__44192;
continue;
} else {
var child_44196 = cljs.core.first(seq__43223_44185__$1);
if(cljs.core.truth_(child_44196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44196);


var G__44197 = cljs.core.next(seq__43223_44185__$1);
var G__44198 = null;
var G__44199 = (0);
var G__44200 = (0);
seq__43223_44170 = G__44197;
chunk__43225_44171 = G__44198;
count__43226_44172 = G__44199;
i__43227_44173 = G__44200;
continue;
} else {
var G__44202 = cljs.core.next(seq__43223_44185__$1);
var G__44203 = null;
var G__44204 = (0);
var G__44205 = (0);
seq__43223_44170 = G__44202;
chunk__43225_44171 = G__44203;
count__43226_44172 = G__44204;
i__43227_44173 = G__44205;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44168);
}


var G__44210 = cljs.core.next(seq__43182_44160__$1);
var G__44211 = null;
var G__44212 = (0);
var G__44213 = (0);
seq__43182_44099 = G__44210;
chunk__43183_44100 = G__44211;
count__43184_44101 = G__44212;
i__43185_44102 = G__44213;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__43238 = cljs.core.seq(node);
var chunk__43239 = null;
var count__43240 = (0);
var i__43241 = (0);
while(true){
if((i__43241 < count__43240)){
var n = chunk__43239.cljs$core$IIndexed$_nth$arity$2(null,i__43241);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44224 = seq__43238;
var G__44225 = chunk__43239;
var G__44226 = count__43240;
var G__44227 = (i__43241 + (1));
seq__43238 = G__44224;
chunk__43239 = G__44225;
count__43240 = G__44226;
i__43241 = G__44227;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43238);
if(temp__5735__auto__){
var seq__43238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43238__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43238__$1);
var G__44228 = cljs.core.chunk_rest(seq__43238__$1);
var G__44229 = c__4556__auto__;
var G__44230 = cljs.core.count(c__4556__auto__);
var G__44231 = (0);
seq__43238 = G__44228;
chunk__43239 = G__44229;
count__43240 = G__44230;
i__43241 = G__44231;
continue;
} else {
var n = cljs.core.first(seq__43238__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44234 = cljs.core.next(seq__43238__$1);
var G__44235 = null;
var G__44236 = (0);
var G__44237 = (0);
seq__43238 = G__44234;
chunk__43239 = G__44235;
count__43240 = G__44236;
i__43241 = G__44237;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__43255 = arguments.length;
switch (G__43255) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__43264 = arguments.length;
switch (G__43264) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__43298 = arguments.length;
switch (G__43298) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44265 = arguments.length;
var i__4737__auto___44266 = (0);
while(true){
if((i__4737__auto___44266 < len__4736__auto___44265)){
args__4742__auto__.push((arguments[i__4737__auto___44266]));

var G__44267 = (i__4737__auto___44266 + (1));
i__4737__auto___44266 = G__44267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__43326_44270 = cljs.core.seq(nodes);
var chunk__43327_44271 = null;
var count__43328_44272 = (0);
var i__43329_44273 = (0);
while(true){
if((i__43329_44273 < count__43328_44272)){
var node_44275 = chunk__43327_44271.cljs$core$IIndexed$_nth$arity$2(null,i__43329_44273);
fragment.appendChild(shadow.dom._to_dom(node_44275));


var G__44277 = seq__43326_44270;
var G__44279 = chunk__43327_44271;
var G__44280 = count__43328_44272;
var G__44281 = (i__43329_44273 + (1));
seq__43326_44270 = G__44277;
chunk__43327_44271 = G__44279;
count__43328_44272 = G__44280;
i__43329_44273 = G__44281;
continue;
} else {
var temp__5735__auto___44284 = cljs.core.seq(seq__43326_44270);
if(temp__5735__auto___44284){
var seq__43326_44285__$1 = temp__5735__auto___44284;
if(cljs.core.chunked_seq_QMARK_(seq__43326_44285__$1)){
var c__4556__auto___44286 = cljs.core.chunk_first(seq__43326_44285__$1);
var G__44287 = cljs.core.chunk_rest(seq__43326_44285__$1);
var G__44288 = c__4556__auto___44286;
var G__44289 = cljs.core.count(c__4556__auto___44286);
var G__44290 = (0);
seq__43326_44270 = G__44287;
chunk__43327_44271 = G__44288;
count__43328_44272 = G__44289;
i__43329_44273 = G__44290;
continue;
} else {
var node_44291 = cljs.core.first(seq__43326_44285__$1);
fragment.appendChild(shadow.dom._to_dom(node_44291));


var G__44292 = cljs.core.next(seq__43326_44285__$1);
var G__44293 = null;
var G__44294 = (0);
var G__44295 = (0);
seq__43326_44270 = G__44292;
chunk__43327_44271 = G__44293;
count__43328_44272 = G__44294;
i__43329_44273 = G__44295;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq43322){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43322));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__43348_44300 = cljs.core.seq(scripts);
var chunk__43349_44301 = null;
var count__43350_44302 = (0);
var i__43351_44303 = (0);
while(true){
if((i__43351_44303 < count__43350_44302)){
var vec__43381_44306 = chunk__43349_44301.cljs$core$IIndexed$_nth$arity$2(null,i__43351_44303);
var script_tag_44307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43381_44306,(0),null);
var script_body_44308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43381_44306,(1),null);
eval(script_body_44308);


var G__44310 = seq__43348_44300;
var G__44311 = chunk__43349_44301;
var G__44312 = count__43350_44302;
var G__44313 = (i__43351_44303 + (1));
seq__43348_44300 = G__44310;
chunk__43349_44301 = G__44311;
count__43350_44302 = G__44312;
i__43351_44303 = G__44313;
continue;
} else {
var temp__5735__auto___44316 = cljs.core.seq(seq__43348_44300);
if(temp__5735__auto___44316){
var seq__43348_44318__$1 = temp__5735__auto___44316;
if(cljs.core.chunked_seq_QMARK_(seq__43348_44318__$1)){
var c__4556__auto___44320 = cljs.core.chunk_first(seq__43348_44318__$1);
var G__44321 = cljs.core.chunk_rest(seq__43348_44318__$1);
var G__44322 = c__4556__auto___44320;
var G__44323 = cljs.core.count(c__4556__auto___44320);
var G__44324 = (0);
seq__43348_44300 = G__44321;
chunk__43349_44301 = G__44322;
count__43350_44302 = G__44323;
i__43351_44303 = G__44324;
continue;
} else {
var vec__43396_44325 = cljs.core.first(seq__43348_44318__$1);
var script_tag_44326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43396_44325,(0),null);
var script_body_44327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43396_44325,(1),null);
eval(script_body_44327);


var G__44329 = cljs.core.next(seq__43348_44318__$1);
var G__44330 = null;
var G__44331 = (0);
var G__44332 = (0);
seq__43348_44300 = G__44329;
chunk__43349_44301 = G__44330;
count__43350_44302 = G__44331;
i__43351_44303 = G__44332;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__43405){
var vec__43406 = p__43405;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43406,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43406,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__43432 = arguments.length;
switch (G__43432) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__43464 = cljs.core.seq(style_keys);
var chunk__43465 = null;
var count__43466 = (0);
var i__43467 = (0);
while(true){
if((i__43467 < count__43466)){
var it = chunk__43465.cljs$core$IIndexed$_nth$arity$2(null,i__43467);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44360 = seq__43464;
var G__44361 = chunk__43465;
var G__44362 = count__43466;
var G__44363 = (i__43467 + (1));
seq__43464 = G__44360;
chunk__43465 = G__44361;
count__43466 = G__44362;
i__43467 = G__44363;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43464);
if(temp__5735__auto__){
var seq__43464__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43464__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43464__$1);
var G__44366 = cljs.core.chunk_rest(seq__43464__$1);
var G__44367 = c__4556__auto__;
var G__44368 = cljs.core.count(c__4556__auto__);
var G__44369 = (0);
seq__43464 = G__44366;
chunk__43465 = G__44367;
count__43466 = G__44368;
i__43467 = G__44369;
continue;
} else {
var it = cljs.core.first(seq__43464__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44374 = cljs.core.next(seq__43464__$1);
var G__44375 = null;
var G__44376 = (0);
var G__44377 = (0);
seq__43464 = G__44374;
chunk__43465 = G__44375;
count__43466 = G__44376;
i__43467 = G__44377;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43487,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43506 = k43487;
var G__43506__$1 = (((G__43506 instanceof cljs.core.Keyword))?G__43506.fqn:null);
switch (G__43506__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43487,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43515){
var vec__43516 = p__43515;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43486){
var self__ = this;
var G__43486__$1 = this;
return (new cljs.core.RecordIter((0),G__43486__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43488,other43489){
var self__ = this;
var this43488__$1 = this;
return (((!((other43489 == null)))) && ((this43488__$1.constructor === other43489.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43488__$1.x,other43489.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43488__$1.y,other43489.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43488__$1.__extmap,other43489.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43486){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43563 = cljs.core.keyword_identical_QMARK_;
var expr__43564 = k__4388__auto__;
if(cljs.core.truth_((pred__43563.cljs$core$IFn$_invoke$arity$2 ? pred__43563.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__43564) : pred__43563.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__43564)))){
return (new shadow.dom.Coordinate(G__43486,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43563.cljs$core$IFn$_invoke$arity$2 ? pred__43563.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__43564) : pred__43563.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__43564)))){
return (new shadow.dom.Coordinate(self__.x,G__43486,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43486),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43486){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__43486,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__43491){
var extmap__4419__auto__ = (function (){var G__43583 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43491,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__43491)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43583);
} else {
return G__43583;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__43491),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__43491),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43617,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43632 = k43617;
var G__43632__$1 = (((G__43632 instanceof cljs.core.Keyword))?G__43632.fqn:null);
switch (G__43632__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43617,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43637){
var vec__43638 = p__43637;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43638,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43638,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43616){
var self__ = this;
var G__43616__$1 = this;
return (new cljs.core.RecordIter((0),G__43616__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43618,other43619){
var self__ = this;
var this43618__$1 = this;
return (((!((other43619 == null)))) && ((this43618__$1.constructor === other43619.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43618__$1.w,other43619.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43618__$1.h,other43619.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43618__$1.__extmap,other43619.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43616){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43676 = cljs.core.keyword_identical_QMARK_;
var expr__43677 = k__4388__auto__;
if(cljs.core.truth_((pred__43676.cljs$core$IFn$_invoke$arity$2 ? pred__43676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__43677) : pred__43676.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__43677)))){
return (new shadow.dom.Size(G__43616,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43676.cljs$core$IFn$_invoke$arity$2 ? pred__43676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__43677) : pred__43676.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__43677)))){
return (new shadow.dom.Size(self__.w,G__43616,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43616),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43616){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__43616,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__43622){
var extmap__4419__auto__ = (function (){var G__43714 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43622,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__43622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43714);
} else {
return G__43714;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__43622),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__43622),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__44444 = (i + (1));
var G__44445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__44444;
ret = G__44445;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43752){
var vec__43754 = p__43752;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43754,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43765 = arguments.length;
switch (G__43765) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__44447 = ps;
var G__44448 = (i + (1));
el__$1 = G__44447;
i = G__44448;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43789 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43789,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43789,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43789,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43795_44451 = cljs.core.seq(props);
var chunk__43796_44452 = null;
var count__43797_44453 = (0);
var i__43798_44454 = (0);
while(true){
if((i__43798_44454 < count__43797_44453)){
var vec__43814_44455 = chunk__43796_44452.cljs$core$IIndexed$_nth$arity$2(null,i__43798_44454);
var k_44456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43814_44455,(0),null);
var v_44457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43814_44455,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_44456);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44456),v_44457);


var G__44459 = seq__43795_44451;
var G__44460 = chunk__43796_44452;
var G__44461 = count__43797_44453;
var G__44462 = (i__43798_44454 + (1));
seq__43795_44451 = G__44459;
chunk__43796_44452 = G__44460;
count__43797_44453 = G__44461;
i__43798_44454 = G__44462;
continue;
} else {
var temp__5735__auto___44463 = cljs.core.seq(seq__43795_44451);
if(temp__5735__auto___44463){
var seq__43795_44464__$1 = temp__5735__auto___44463;
if(cljs.core.chunked_seq_QMARK_(seq__43795_44464__$1)){
var c__4556__auto___44465 = cljs.core.chunk_first(seq__43795_44464__$1);
var G__44466 = cljs.core.chunk_rest(seq__43795_44464__$1);
var G__44467 = c__4556__auto___44465;
var G__44468 = cljs.core.count(c__4556__auto___44465);
var G__44469 = (0);
seq__43795_44451 = G__44466;
chunk__43796_44452 = G__44467;
count__43797_44453 = G__44468;
i__43798_44454 = G__44469;
continue;
} else {
var vec__43825_44470 = cljs.core.first(seq__43795_44464__$1);
var k_44471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43825_44470,(0),null);
var v_44472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43825_44470,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_44471);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44471),v_44472);


var G__44473 = cljs.core.next(seq__43795_44464__$1);
var G__44474 = null;
var G__44475 = (0);
var G__44476 = (0);
seq__43795_44451 = G__44473;
chunk__43796_44452 = G__44474;
count__43797_44453 = G__44475;
i__43798_44454 = G__44476;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43835 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43835,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43835,(1),null);
var seq__43839_44477 = cljs.core.seq(node_children);
var chunk__43841_44478 = null;
var count__43842_44479 = (0);
var i__43843_44480 = (0);
while(true){
if((i__43843_44480 < count__43842_44479)){
var child_struct_44481 = chunk__43841_44478.cljs$core$IIndexed$_nth$arity$2(null,i__43843_44480);
if((!((child_struct_44481 == null)))){
if(typeof child_struct_44481 === 'string'){
var text_44482 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44482),child_struct_44481].join(''));
} else {
var children_44483 = shadow.dom.svg_node(child_struct_44481);
if(cljs.core.seq_QMARK_(children_44483)){
var seq__43876_44485 = cljs.core.seq(children_44483);
var chunk__43878_44486 = null;
var count__43879_44487 = (0);
var i__43880_44488 = (0);
while(true){
if((i__43880_44488 < count__43879_44487)){
var child_44490 = chunk__43878_44486.cljs$core$IIndexed$_nth$arity$2(null,i__43880_44488);
if(cljs.core.truth_(child_44490)){
node.appendChild(child_44490);


var G__44491 = seq__43876_44485;
var G__44492 = chunk__43878_44486;
var G__44493 = count__43879_44487;
var G__44494 = (i__43880_44488 + (1));
seq__43876_44485 = G__44491;
chunk__43878_44486 = G__44492;
count__43879_44487 = G__44493;
i__43880_44488 = G__44494;
continue;
} else {
var G__44495 = seq__43876_44485;
var G__44496 = chunk__43878_44486;
var G__44497 = count__43879_44487;
var G__44498 = (i__43880_44488 + (1));
seq__43876_44485 = G__44495;
chunk__43878_44486 = G__44496;
count__43879_44487 = G__44497;
i__43880_44488 = G__44498;
continue;
}
} else {
var temp__5735__auto___44499 = cljs.core.seq(seq__43876_44485);
if(temp__5735__auto___44499){
var seq__43876_44500__$1 = temp__5735__auto___44499;
if(cljs.core.chunked_seq_QMARK_(seq__43876_44500__$1)){
var c__4556__auto___44501 = cljs.core.chunk_first(seq__43876_44500__$1);
var G__44502 = cljs.core.chunk_rest(seq__43876_44500__$1);
var G__44503 = c__4556__auto___44501;
var G__44504 = cljs.core.count(c__4556__auto___44501);
var G__44505 = (0);
seq__43876_44485 = G__44502;
chunk__43878_44486 = G__44503;
count__43879_44487 = G__44504;
i__43880_44488 = G__44505;
continue;
} else {
var child_44506 = cljs.core.first(seq__43876_44500__$1);
if(cljs.core.truth_(child_44506)){
node.appendChild(child_44506);


var G__44507 = cljs.core.next(seq__43876_44500__$1);
var G__44508 = null;
var G__44509 = (0);
var G__44510 = (0);
seq__43876_44485 = G__44507;
chunk__43878_44486 = G__44508;
count__43879_44487 = G__44509;
i__43880_44488 = G__44510;
continue;
} else {
var G__44513 = cljs.core.next(seq__43876_44500__$1);
var G__44514 = null;
var G__44515 = (0);
var G__44516 = (0);
seq__43876_44485 = G__44513;
chunk__43878_44486 = G__44514;
count__43879_44487 = G__44515;
i__43880_44488 = G__44516;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44483);
}
}


var G__44518 = seq__43839_44477;
var G__44519 = chunk__43841_44478;
var G__44520 = count__43842_44479;
var G__44521 = (i__43843_44480 + (1));
seq__43839_44477 = G__44518;
chunk__43841_44478 = G__44519;
count__43842_44479 = G__44520;
i__43843_44480 = G__44521;
continue;
} else {
var G__44523 = seq__43839_44477;
var G__44524 = chunk__43841_44478;
var G__44525 = count__43842_44479;
var G__44526 = (i__43843_44480 + (1));
seq__43839_44477 = G__44523;
chunk__43841_44478 = G__44524;
count__43842_44479 = G__44525;
i__43843_44480 = G__44526;
continue;
}
} else {
var temp__5735__auto___44527 = cljs.core.seq(seq__43839_44477);
if(temp__5735__auto___44527){
var seq__43839_44528__$1 = temp__5735__auto___44527;
if(cljs.core.chunked_seq_QMARK_(seq__43839_44528__$1)){
var c__4556__auto___44529 = cljs.core.chunk_first(seq__43839_44528__$1);
var G__44530 = cljs.core.chunk_rest(seq__43839_44528__$1);
var G__44531 = c__4556__auto___44529;
var G__44532 = cljs.core.count(c__4556__auto___44529);
var G__44533 = (0);
seq__43839_44477 = G__44530;
chunk__43841_44478 = G__44531;
count__43842_44479 = G__44532;
i__43843_44480 = G__44533;
continue;
} else {
var child_struct_44534 = cljs.core.first(seq__43839_44528__$1);
if((!((child_struct_44534 == null)))){
if(typeof child_struct_44534 === 'string'){
var text_44535 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44535),child_struct_44534].join(''));
} else {
var children_44540 = shadow.dom.svg_node(child_struct_44534);
if(cljs.core.seq_QMARK_(children_44540)){
var seq__43889_44541 = cljs.core.seq(children_44540);
var chunk__43891_44542 = null;
var count__43892_44543 = (0);
var i__43893_44544 = (0);
while(true){
if((i__43893_44544 < count__43892_44543)){
var child_44545 = chunk__43891_44542.cljs$core$IIndexed$_nth$arity$2(null,i__43893_44544);
if(cljs.core.truth_(child_44545)){
node.appendChild(child_44545);


var G__44547 = seq__43889_44541;
var G__44548 = chunk__43891_44542;
var G__44549 = count__43892_44543;
var G__44550 = (i__43893_44544 + (1));
seq__43889_44541 = G__44547;
chunk__43891_44542 = G__44548;
count__43892_44543 = G__44549;
i__43893_44544 = G__44550;
continue;
} else {
var G__44551 = seq__43889_44541;
var G__44552 = chunk__43891_44542;
var G__44553 = count__43892_44543;
var G__44554 = (i__43893_44544 + (1));
seq__43889_44541 = G__44551;
chunk__43891_44542 = G__44552;
count__43892_44543 = G__44553;
i__43893_44544 = G__44554;
continue;
}
} else {
var temp__5735__auto___44556__$1 = cljs.core.seq(seq__43889_44541);
if(temp__5735__auto___44556__$1){
var seq__43889_44557__$1 = temp__5735__auto___44556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43889_44557__$1)){
var c__4556__auto___44558 = cljs.core.chunk_first(seq__43889_44557__$1);
var G__44559 = cljs.core.chunk_rest(seq__43889_44557__$1);
var G__44560 = c__4556__auto___44558;
var G__44561 = cljs.core.count(c__4556__auto___44558);
var G__44562 = (0);
seq__43889_44541 = G__44559;
chunk__43891_44542 = G__44560;
count__43892_44543 = G__44561;
i__43893_44544 = G__44562;
continue;
} else {
var child_44563 = cljs.core.first(seq__43889_44557__$1);
if(cljs.core.truth_(child_44563)){
node.appendChild(child_44563);


var G__44564 = cljs.core.next(seq__43889_44557__$1);
var G__44565 = null;
var G__44566 = (0);
var G__44567 = (0);
seq__43889_44541 = G__44564;
chunk__43891_44542 = G__44565;
count__43892_44543 = G__44566;
i__43893_44544 = G__44567;
continue;
} else {
var G__44568 = cljs.core.next(seq__43889_44557__$1);
var G__44569 = null;
var G__44570 = (0);
var G__44571 = (0);
seq__43889_44541 = G__44568;
chunk__43891_44542 = G__44569;
count__43892_44543 = G__44570;
i__43893_44544 = G__44571;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44540);
}
}


var G__44572 = cljs.core.next(seq__43839_44528__$1);
var G__44573 = null;
var G__44574 = (0);
var G__44575 = (0);
seq__43839_44477 = G__44572;
chunk__43841_44478 = G__44573;
count__43842_44479 = G__44574;
i__43843_44480 = G__44575;
continue;
} else {
var G__44576 = cljs.core.next(seq__43839_44528__$1);
var G__44577 = null;
var G__44578 = (0);
var G__44579 = (0);
seq__43839_44477 = G__44576;
chunk__43841_44478 = G__44577;
count__43842_44479 = G__44578;
i__43843_44480 = G__44579;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44582 = arguments.length;
var i__4737__auto___44583 = (0);
while(true){
if((i__4737__auto___44583 < len__4736__auto___44582)){
args__4742__auto__.push((arguments[i__4737__auto___44583]));

var G__44587 = (i__4737__auto___44583 + (1));
i__4737__auto___44583 = G__44587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43909){
var G__43910 = cljs.core.first(seq43909);
var seq43909__$1 = cljs.core.next(seq43909);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43910,seq43909__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43918 = arguments.length;
switch (G__43918) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__40038__auto___44592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40039__auto__ = (function (){var switch__39897__auto__ = (function (state_43930){
var state_val_43931 = (state_43930[(1)]);
if((state_val_43931 === (1))){
var state_43930__$1 = state_43930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43930__$1,(2),once_or_cleanup);
} else {
if((state_val_43931 === (2))){
var inst_43926 = (state_43930[(2)]);
var inst_43928 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43930__$1 = (function (){var statearr_43934 = state_43930;
(statearr_43934[(7)] = inst_43926);

return statearr_43934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43930__$1,inst_43928);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39898__auto__ = null;
var shadow$dom$state_machine__39898__auto____0 = (function (){
var statearr_43937 = [null,null,null,null,null,null,null,null];
(statearr_43937[(0)] = shadow$dom$state_machine__39898__auto__);

(statearr_43937[(1)] = (1));

return statearr_43937;
});
var shadow$dom$state_machine__39898__auto____1 = (function (state_43930){
while(true){
var ret_value__39899__auto__ = (function (){try{while(true){
var result__39900__auto__ = switch__39897__auto__(state_43930);
if(cljs.core.keyword_identical_QMARK_(result__39900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39900__auto__;
}
break;
}
}catch (e43938){var ex__39901__auto__ = e43938;
var statearr_43939_44594 = state_43930;
(statearr_43939_44594[(2)] = ex__39901__auto__);


if(cljs.core.seq((state_43930[(4)]))){
var statearr_43941_44595 = state_43930;
(statearr_43941_44595[(1)] = cljs.core.first((state_43930[(4)])));

} else {
throw ex__39901__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44597 = state_43930;
state_43930 = G__44597;
continue;
} else {
return ret_value__39899__auto__;
}
break;
}
});
shadow$dom$state_machine__39898__auto__ = function(state_43930){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39898__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39898__auto____1.call(this,state_43930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39898__auto____0;
shadow$dom$state_machine__39898__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39898__auto____1;
return shadow$dom$state_machine__39898__auto__;
})()
})();
var state__40040__auto__ = (function (){var statearr_43943 = f__40039__auto__();
(statearr_43943[(6)] = c__40038__auto___44592);

return statearr_43943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40040__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
