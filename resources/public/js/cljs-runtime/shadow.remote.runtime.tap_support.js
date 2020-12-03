goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45920,p__45921){
var map__45922 = p__45920;
var map__45922__$1 = (((((!((map__45922 == null))))?(((((map__45922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45922):map__45922);
var svc = map__45922__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45922__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45922__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45922__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45923 = p__45921;
var map__45923__$1 = (((((!((map__45923 == null))))?(((((map__45923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45923):map__45923);
var msg = map__45923__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45923__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45923__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45923__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45923__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45932,p__45933){
var map__45935 = p__45932;
var map__45935__$1 = (((((!((map__45935 == null))))?(((((map__45935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45935):map__45935);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45935__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45936 = p__45933;
var map__45936__$1 = (((((!((map__45936 == null))))?(((((map__45936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45936):map__45936);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45936__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45945,p__45946){
var map__45947 = p__45945;
var map__45947__$1 = (((((!((map__45947 == null))))?(((((map__45947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45947):map__45947);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45947__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45948 = p__45946;
var map__45948__$1 = (((((!((map__45948 == null))))?(((((map__45948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45948):map__45948);
var msg = map__45948__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45948__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45955,tid){
var map__45958 = p__45955;
var map__45958__$1 = (((((!((map__45958 == null))))?(((((map__45958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45958):map__45958);
var svc = map__45958__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45958__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45969 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45970 = null;
var count__45971 = (0);
var i__45972 = (0);
while(true){
if((i__45972 < count__45971)){
var vec__45983 = chunk__45970.cljs$core$IIndexed$_nth$arity$2(null,i__45972);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45983,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45983,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45996 = seq__45969;
var G__45997 = chunk__45970;
var G__45998 = count__45971;
var G__45999 = (i__45972 + (1));
seq__45969 = G__45996;
chunk__45970 = G__45997;
count__45971 = G__45998;
i__45972 = G__45999;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45969);
if(temp__5735__auto__){
var seq__45969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45969__$1);
var G__46000 = cljs.core.chunk_rest(seq__45969__$1);
var G__46001 = c__4556__auto__;
var G__46002 = cljs.core.count(c__4556__auto__);
var G__46003 = (0);
seq__45969 = G__46000;
chunk__45970 = G__46001;
count__45971 = G__46002;
i__45972 = G__46003;
continue;
} else {
var vec__45986 = cljs.core.first(seq__45969__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45986,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45986,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46004 = cljs.core.next(seq__45969__$1);
var G__46005 = null;
var G__46006 = (0);
var G__46007 = (0);
seq__45969 = G__46004;
chunk__45970 = G__46005;
count__45971 = G__46006;
i__45972 = G__46007;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45960_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45960_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45961_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45961_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45962_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45962_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45963_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45963_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45992){
var map__45993 = p__45992;
var map__45993__$1 = (((((!((map__45993 == null))))?(((((map__45993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45993):map__45993);
var svc = map__45993__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45993__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45993__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
