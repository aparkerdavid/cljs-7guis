goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46276 = arguments.length;
var i__4737__auto___46277 = (0);
while(true){
if((i__4737__auto___46277 < len__4736__auto___46276)){
args__4742__auto__.push((arguments[i__4737__auto___46277]));

var G__46278 = (i__4737__auto___46277 + (1));
i__4737__auto___46277 = G__46278;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46120){
var G__46121 = cljs.core.first(seq46120);
var seq46120__$1 = cljs.core.next(seq46120);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46121,seq46120__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46123 = cljs.core.seq(sources);
var chunk__46124 = null;
var count__46125 = (0);
var i__46126 = (0);
while(true){
if((i__46126 < count__46125)){
var map__46141 = chunk__46124.cljs$core$IIndexed$_nth$arity$2(null,i__46126);
var map__46141__$1 = (((((!((map__46141 == null))))?(((((map__46141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46141):map__46141);
var src = map__46141__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46141__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46141__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46141__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46141__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46143){var e_46279 = e46143;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46279);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46279.message)].join('')));
}

var G__46280 = seq__46123;
var G__46281 = chunk__46124;
var G__46282 = count__46125;
var G__46283 = (i__46126 + (1));
seq__46123 = G__46280;
chunk__46124 = G__46281;
count__46125 = G__46282;
i__46126 = G__46283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46123);
if(temp__5735__auto__){
var seq__46123__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46123__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46123__$1);
var G__46284 = cljs.core.chunk_rest(seq__46123__$1);
var G__46285 = c__4556__auto__;
var G__46286 = cljs.core.count(c__4556__auto__);
var G__46287 = (0);
seq__46123 = G__46284;
chunk__46124 = G__46285;
count__46125 = G__46286;
i__46126 = G__46287;
continue;
} else {
var map__46145 = cljs.core.first(seq__46123__$1);
var map__46145__$1 = (((((!((map__46145 == null))))?(((((map__46145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46145):map__46145);
var src = map__46145__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46145__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46145__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46145__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46145__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46147){var e_46288 = e46147;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46288);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46288.message)].join('')));
}

var G__46289 = cljs.core.next(seq__46123__$1);
var G__46290 = null;
var G__46291 = (0);
var G__46292 = (0);
seq__46123 = G__46289;
chunk__46124 = G__46290;
count__46125 = G__46291;
i__46126 = G__46292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46148 = cljs.core.seq(js_requires);
var chunk__46149 = null;
var count__46150 = (0);
var i__46151 = (0);
while(true){
if((i__46151 < count__46150)){
var js_ns = chunk__46149.cljs$core$IIndexed$_nth$arity$2(null,i__46151);
var require_str_46293 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46293);


var G__46294 = seq__46148;
var G__46295 = chunk__46149;
var G__46296 = count__46150;
var G__46297 = (i__46151 + (1));
seq__46148 = G__46294;
chunk__46149 = G__46295;
count__46150 = G__46296;
i__46151 = G__46297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46148);
if(temp__5735__auto__){
var seq__46148__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46148__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46148__$1);
var G__46298 = cljs.core.chunk_rest(seq__46148__$1);
var G__46299 = c__4556__auto__;
var G__46300 = cljs.core.count(c__4556__auto__);
var G__46301 = (0);
seq__46148 = G__46298;
chunk__46149 = G__46299;
count__46150 = G__46300;
i__46151 = G__46301;
continue;
} else {
var js_ns = cljs.core.first(seq__46148__$1);
var require_str_46302 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46302);


var G__46303 = cljs.core.next(seq__46148__$1);
var G__46304 = null;
var G__46305 = (0);
var G__46306 = (0);
seq__46148 = G__46303;
chunk__46149 = G__46304;
count__46150 = G__46305;
i__46151 = G__46306;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46153){
var map__46154 = p__46153;
var map__46154__$1 = (((((!((map__46154 == null))))?(((((map__46154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46154):map__46154);
var msg = map__46154__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46154__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46156(s__46157){
return (new cljs.core.LazySeq(null,(function (){
var s__46157__$1 = s__46157;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46157__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46162 = cljs.core.first(xs__6292__auto__);
var map__46162__$1 = (((((!((map__46162 == null))))?(((((map__46162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46162):map__46162);
var src = map__46162__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__46157__$1,map__46162,map__46162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46154,map__46154__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46156_$_iter__46158(s__46159){
return (new cljs.core.LazySeq(null,((function (s__46157__$1,map__46162,map__46162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46154,map__46154__$1,msg,info,reload_info){
return (function (){
var s__46159__$1 = s__46159;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46159__$1);
if(temp__5735__auto____$1){
var s__46159__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46159__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46159__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46161 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46160 = (0);
while(true){
if((i__46160 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__46160);
cljs.core.chunk_append(b__46161,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46307 = (i__46160 + (1));
i__46160 = G__46307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46161),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46156_$_iter__46158(cljs.core.chunk_rest(s__46159__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46161),null);
}
} else {
var warning = cljs.core.first(s__46159__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46156_$_iter__46158(cljs.core.rest(s__46159__$2)));
}
} else {
return null;
}
break;
}
});})(s__46157__$1,map__46162,map__46162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46154,map__46154__$1,msg,info,reload_info))
,null,null));
});})(s__46157__$1,map__46162,map__46162__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46154,map__46154__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46156(cljs.core.rest(s__46157__$1)));
} else {
var G__46308 = cljs.core.rest(s__46157__$1);
s__46157__$1 = G__46308;
continue;
}
} else {
var G__46309 = cljs.core.rest(s__46157__$1);
s__46157__$1 = G__46309;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46165_46310 = cljs.core.seq(warnings);
var chunk__46166_46311 = null;
var count__46167_46312 = (0);
var i__46168_46313 = (0);
while(true){
if((i__46168_46313 < count__46167_46312)){
var map__46173_46314 = chunk__46166_46311.cljs$core$IIndexed$_nth$arity$2(null,i__46168_46313);
var map__46173_46315__$1 = (((((!((map__46173_46314 == null))))?(((((map__46173_46314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46173_46314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46173_46314):map__46173_46314);
var w_46316 = map__46173_46315__$1;
var msg_46317__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173_46315__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173_46315__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173_46315__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46173_46315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46320)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46318),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46319),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46317__$1)].join(''));


var G__46321 = seq__46165_46310;
var G__46322 = chunk__46166_46311;
var G__46323 = count__46167_46312;
var G__46324 = (i__46168_46313 + (1));
seq__46165_46310 = G__46321;
chunk__46166_46311 = G__46322;
count__46167_46312 = G__46323;
i__46168_46313 = G__46324;
continue;
} else {
var temp__5735__auto___46325 = cljs.core.seq(seq__46165_46310);
if(temp__5735__auto___46325){
var seq__46165_46326__$1 = temp__5735__auto___46325;
if(cljs.core.chunked_seq_QMARK_(seq__46165_46326__$1)){
var c__4556__auto___46327 = cljs.core.chunk_first(seq__46165_46326__$1);
var G__46328 = cljs.core.chunk_rest(seq__46165_46326__$1);
var G__46329 = c__4556__auto___46327;
var G__46330 = cljs.core.count(c__4556__auto___46327);
var G__46331 = (0);
seq__46165_46310 = G__46328;
chunk__46166_46311 = G__46329;
count__46167_46312 = G__46330;
i__46168_46313 = G__46331;
continue;
} else {
var map__46175_46332 = cljs.core.first(seq__46165_46326__$1);
var map__46175_46333__$1 = (((((!((map__46175_46332 == null))))?(((((map__46175_46332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46175_46332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46175_46332):map__46175_46332);
var w_46334 = map__46175_46333__$1;
var msg_46335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175_46333__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175_46333__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175_46333__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175_46333__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46338)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46336),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46337),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46335__$1)].join(''));


var G__46339 = cljs.core.next(seq__46165_46326__$1);
var G__46340 = null;
var G__46341 = (0);
var G__46342 = (0);
seq__46165_46310 = G__46339;
chunk__46166_46311 = G__46340;
count__46167_46312 = G__46341;
i__46168_46313 = G__46342;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46152_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46152_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46177){
var map__46178 = p__46177;
var map__46178__$1 = (((((!((map__46178 == null))))?(((((map__46178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46178):map__46178);
var msg = map__46178__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46178__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46180 = cljs.core.seq(updates);
var chunk__46182 = null;
var count__46183 = (0);
var i__46184 = (0);
while(true){
if((i__46184 < count__46183)){
var path = chunk__46182.cljs$core$IIndexed$_nth$arity$2(null,i__46184);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46216_46343 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46220_46344 = null;
var count__46221_46345 = (0);
var i__46222_46346 = (0);
while(true){
if((i__46222_46346 < count__46221_46345)){
var node_46347 = chunk__46220_46344.cljs$core$IIndexed$_nth$arity$2(null,i__46222_46346);
if(cljs.core.not(node_46347.shadow$old)){
var path_match_46348 = shadow.cljs.devtools.client.browser.match_paths(node_46347.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46348)){
var new_link_46349 = (function (){var G__46228 = node_46347.cloneNode(true);
G__46228.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46348),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46228;
})();
(node_46347.shadow$old = true);

(new_link_46349.onload = ((function (seq__46216_46343,chunk__46220_46344,count__46221_46345,i__46222_46346,seq__46180,chunk__46182,count__46183,i__46184,new_link_46349,path_match_46348,node_46347,path,map__46178,map__46178__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46347);
});})(seq__46216_46343,chunk__46220_46344,count__46221_46345,i__46222_46346,seq__46180,chunk__46182,count__46183,i__46184,new_link_46349,path_match_46348,node_46347,path,map__46178,map__46178__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46348], 0));

goog.dom.insertSiblingAfter(new_link_46349,node_46347);


var G__46350 = seq__46216_46343;
var G__46351 = chunk__46220_46344;
var G__46352 = count__46221_46345;
var G__46353 = (i__46222_46346 + (1));
seq__46216_46343 = G__46350;
chunk__46220_46344 = G__46351;
count__46221_46345 = G__46352;
i__46222_46346 = G__46353;
continue;
} else {
var G__46354 = seq__46216_46343;
var G__46355 = chunk__46220_46344;
var G__46356 = count__46221_46345;
var G__46357 = (i__46222_46346 + (1));
seq__46216_46343 = G__46354;
chunk__46220_46344 = G__46355;
count__46221_46345 = G__46356;
i__46222_46346 = G__46357;
continue;
}
} else {
var G__46358 = seq__46216_46343;
var G__46359 = chunk__46220_46344;
var G__46360 = count__46221_46345;
var G__46361 = (i__46222_46346 + (1));
seq__46216_46343 = G__46358;
chunk__46220_46344 = G__46359;
count__46221_46345 = G__46360;
i__46222_46346 = G__46361;
continue;
}
} else {
var temp__5735__auto___46362 = cljs.core.seq(seq__46216_46343);
if(temp__5735__auto___46362){
var seq__46216_46363__$1 = temp__5735__auto___46362;
if(cljs.core.chunked_seq_QMARK_(seq__46216_46363__$1)){
var c__4556__auto___46364 = cljs.core.chunk_first(seq__46216_46363__$1);
var G__46365 = cljs.core.chunk_rest(seq__46216_46363__$1);
var G__46366 = c__4556__auto___46364;
var G__46367 = cljs.core.count(c__4556__auto___46364);
var G__46368 = (0);
seq__46216_46343 = G__46365;
chunk__46220_46344 = G__46366;
count__46221_46345 = G__46367;
i__46222_46346 = G__46368;
continue;
} else {
var node_46369 = cljs.core.first(seq__46216_46363__$1);
if(cljs.core.not(node_46369.shadow$old)){
var path_match_46370 = shadow.cljs.devtools.client.browser.match_paths(node_46369.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46370)){
var new_link_46371 = (function (){var G__46229 = node_46369.cloneNode(true);
G__46229.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46370),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46229;
})();
(node_46369.shadow$old = true);

(new_link_46371.onload = ((function (seq__46216_46343,chunk__46220_46344,count__46221_46345,i__46222_46346,seq__46180,chunk__46182,count__46183,i__46184,new_link_46371,path_match_46370,node_46369,seq__46216_46363__$1,temp__5735__auto___46362,path,map__46178,map__46178__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46369);
});})(seq__46216_46343,chunk__46220_46344,count__46221_46345,i__46222_46346,seq__46180,chunk__46182,count__46183,i__46184,new_link_46371,path_match_46370,node_46369,seq__46216_46363__$1,temp__5735__auto___46362,path,map__46178,map__46178__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46370], 0));

goog.dom.insertSiblingAfter(new_link_46371,node_46369);


var G__46372 = cljs.core.next(seq__46216_46363__$1);
var G__46373 = null;
var G__46374 = (0);
var G__46375 = (0);
seq__46216_46343 = G__46372;
chunk__46220_46344 = G__46373;
count__46221_46345 = G__46374;
i__46222_46346 = G__46375;
continue;
} else {
var G__46376 = cljs.core.next(seq__46216_46363__$1);
var G__46377 = null;
var G__46378 = (0);
var G__46379 = (0);
seq__46216_46343 = G__46376;
chunk__46220_46344 = G__46377;
count__46221_46345 = G__46378;
i__46222_46346 = G__46379;
continue;
}
} else {
var G__46380 = cljs.core.next(seq__46216_46363__$1);
var G__46381 = null;
var G__46382 = (0);
var G__46383 = (0);
seq__46216_46343 = G__46380;
chunk__46220_46344 = G__46381;
count__46221_46345 = G__46382;
i__46222_46346 = G__46383;
continue;
}
}
} else {
}
}
break;
}


var G__46384 = seq__46180;
var G__46385 = chunk__46182;
var G__46386 = count__46183;
var G__46387 = (i__46184 + (1));
seq__46180 = G__46384;
chunk__46182 = G__46385;
count__46183 = G__46386;
i__46184 = G__46387;
continue;
} else {
var G__46388 = seq__46180;
var G__46389 = chunk__46182;
var G__46390 = count__46183;
var G__46391 = (i__46184 + (1));
seq__46180 = G__46388;
chunk__46182 = G__46389;
count__46183 = G__46390;
i__46184 = G__46391;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46180);
if(temp__5735__auto__){
var seq__46180__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46180__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46180__$1);
var G__46392 = cljs.core.chunk_rest(seq__46180__$1);
var G__46393 = c__4556__auto__;
var G__46394 = cljs.core.count(c__4556__auto__);
var G__46395 = (0);
seq__46180 = G__46392;
chunk__46182 = G__46393;
count__46183 = G__46394;
i__46184 = G__46395;
continue;
} else {
var path = cljs.core.first(seq__46180__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46230_46396 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46234_46397 = null;
var count__46235_46398 = (0);
var i__46236_46399 = (0);
while(true){
if((i__46236_46399 < count__46235_46398)){
var node_46400 = chunk__46234_46397.cljs$core$IIndexed$_nth$arity$2(null,i__46236_46399);
if(cljs.core.not(node_46400.shadow$old)){
var path_match_46401 = shadow.cljs.devtools.client.browser.match_paths(node_46400.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46401)){
var new_link_46402 = (function (){var G__46242 = node_46400.cloneNode(true);
G__46242.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46401),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46242;
})();
(node_46400.shadow$old = true);

(new_link_46402.onload = ((function (seq__46230_46396,chunk__46234_46397,count__46235_46398,i__46236_46399,seq__46180,chunk__46182,count__46183,i__46184,new_link_46402,path_match_46401,node_46400,path,seq__46180__$1,temp__5735__auto__,map__46178,map__46178__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46400);
});})(seq__46230_46396,chunk__46234_46397,count__46235_46398,i__46236_46399,seq__46180,chunk__46182,count__46183,i__46184,new_link_46402,path_match_46401,node_46400,path,seq__46180__$1,temp__5735__auto__,map__46178,map__46178__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46401], 0));

goog.dom.insertSiblingAfter(new_link_46402,node_46400);


var G__46403 = seq__46230_46396;
var G__46404 = chunk__46234_46397;
var G__46405 = count__46235_46398;
var G__46406 = (i__46236_46399 + (1));
seq__46230_46396 = G__46403;
chunk__46234_46397 = G__46404;
count__46235_46398 = G__46405;
i__46236_46399 = G__46406;
continue;
} else {
var G__46407 = seq__46230_46396;
var G__46408 = chunk__46234_46397;
var G__46409 = count__46235_46398;
var G__46410 = (i__46236_46399 + (1));
seq__46230_46396 = G__46407;
chunk__46234_46397 = G__46408;
count__46235_46398 = G__46409;
i__46236_46399 = G__46410;
continue;
}
} else {
var G__46411 = seq__46230_46396;
var G__46412 = chunk__46234_46397;
var G__46413 = count__46235_46398;
var G__46414 = (i__46236_46399 + (1));
seq__46230_46396 = G__46411;
chunk__46234_46397 = G__46412;
count__46235_46398 = G__46413;
i__46236_46399 = G__46414;
continue;
}
} else {
var temp__5735__auto___46415__$1 = cljs.core.seq(seq__46230_46396);
if(temp__5735__auto___46415__$1){
var seq__46230_46416__$1 = temp__5735__auto___46415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46230_46416__$1)){
var c__4556__auto___46417 = cljs.core.chunk_first(seq__46230_46416__$1);
var G__46418 = cljs.core.chunk_rest(seq__46230_46416__$1);
var G__46419 = c__4556__auto___46417;
var G__46420 = cljs.core.count(c__4556__auto___46417);
var G__46421 = (0);
seq__46230_46396 = G__46418;
chunk__46234_46397 = G__46419;
count__46235_46398 = G__46420;
i__46236_46399 = G__46421;
continue;
} else {
var node_46422 = cljs.core.first(seq__46230_46416__$1);
if(cljs.core.not(node_46422.shadow$old)){
var path_match_46423 = shadow.cljs.devtools.client.browser.match_paths(node_46422.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46423)){
var new_link_46424 = (function (){var G__46243 = node_46422.cloneNode(true);
G__46243.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46423),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46243;
})();
(node_46422.shadow$old = true);

(new_link_46424.onload = ((function (seq__46230_46396,chunk__46234_46397,count__46235_46398,i__46236_46399,seq__46180,chunk__46182,count__46183,i__46184,new_link_46424,path_match_46423,node_46422,seq__46230_46416__$1,temp__5735__auto___46415__$1,path,seq__46180__$1,temp__5735__auto__,map__46178,map__46178__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46422);
});})(seq__46230_46396,chunk__46234_46397,count__46235_46398,i__46236_46399,seq__46180,chunk__46182,count__46183,i__46184,new_link_46424,path_match_46423,node_46422,seq__46230_46416__$1,temp__5735__auto___46415__$1,path,seq__46180__$1,temp__5735__auto__,map__46178,map__46178__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46423], 0));

goog.dom.insertSiblingAfter(new_link_46424,node_46422);


var G__46425 = cljs.core.next(seq__46230_46416__$1);
var G__46426 = null;
var G__46427 = (0);
var G__46428 = (0);
seq__46230_46396 = G__46425;
chunk__46234_46397 = G__46426;
count__46235_46398 = G__46427;
i__46236_46399 = G__46428;
continue;
} else {
var G__46429 = cljs.core.next(seq__46230_46416__$1);
var G__46430 = null;
var G__46431 = (0);
var G__46432 = (0);
seq__46230_46396 = G__46429;
chunk__46234_46397 = G__46430;
count__46235_46398 = G__46431;
i__46236_46399 = G__46432;
continue;
}
} else {
var G__46433 = cljs.core.next(seq__46230_46416__$1);
var G__46434 = null;
var G__46435 = (0);
var G__46436 = (0);
seq__46230_46396 = G__46433;
chunk__46234_46397 = G__46434;
count__46235_46398 = G__46435;
i__46236_46399 = G__46436;
continue;
}
}
} else {
}
}
break;
}


var G__46437 = cljs.core.next(seq__46180__$1);
var G__46438 = null;
var G__46439 = (0);
var G__46440 = (0);
seq__46180 = G__46437;
chunk__46182 = G__46438;
count__46183 = G__46439;
i__46184 = G__46440;
continue;
} else {
var G__46441 = cljs.core.next(seq__46180__$1);
var G__46442 = null;
var G__46443 = (0);
var G__46444 = (0);
seq__46180 = G__46441;
chunk__46182 = G__46442;
count__46183 = G__46443;
i__46184 = G__46444;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46244){
var map__46245 = p__46244;
var map__46245__$1 = (((((!((map__46245 == null))))?(((((map__46245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46245):map__46245);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46245__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46247){
var map__46248 = p__46247;
var map__46248__$1 = (((((!((map__46248 == null))))?(((((map__46248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46248):map__46248);
var _ = map__46248__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46250,done,error){
var map__46251 = p__46250;
var map__46251__$1 = (((((!((map__46251 == null))))?(((((map__46251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46251):map__46251);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46251__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46253,done,error){
var map__46254 = p__46253;
var map__46254__$1 = (((((!((map__46254 == null))))?(((((map__46254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46254):map__46254);
var msg = map__46254__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46256){
var map__46257 = p__46256;
var map__46257__$1 = (((((!((map__46257 == null))))?(((((map__46257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46257):map__46257);
var src = map__46257__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46257__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46259 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46259) : done.call(null,G__46259));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46260){
var map__46261 = p__46260;
var map__46261__$1 = (((((!((map__46261 == null))))?(((((map__46261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46261):map__46261);
var msg__$1 = map__46261__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46261__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46263){var ex = e46263;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46264){
var map__46265 = p__46264;
var map__46265__$1 = (((((!((map__46265 == null))))?(((((map__46265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46265):map__46265);
var env = map__46265__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46265__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__46267){
var map__46268 = p__46267;
var map__46268__$1 = (((((!((map__46268 == null))))?(((((map__46268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46268):map__46268);
var msg = map__46268__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46270){
var map__46271 = p__46270;
var map__46271__$1 = (((((!((map__46271 == null))))?(((((map__46271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46271):map__46271);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46271__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46271__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46273){
var map__46274 = p__46273;
var map__46274__$1 = (((((!((map__46274 == null))))?(((((map__46274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46274):map__46274);
var svc = map__46274__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46274__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
