goog.provide('app.components');
app.components.counter = (function app$components$counter(){
var cnt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cnt)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.inc);
})], null),"Increment!"], null)], null);
});
});
app.components.f__GT_c = (function app$components$f__GT_c(f){
return ((f - (32)) * ((5) / (9)));
});
app.components.c__GT_f = (function app$components$c__GT_f(c){
return ((32) + (c * ((9) / (5))));
});
app.components.valid_float_QMARK_ = (function app$components$valid_float_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseFloat(s)));
});
app.components.temperature_input = (function app$components$temperature_input(value,is_valid_fn){
var valid = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(valid))?"valid":"invalid"),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.target.focus();

return e.target.select();
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
cljs.core.reset_BANG_(value,v);

if(app.components.valid_float_QMARK_(v)){
cljs.core.reset_BANG_(valid,true);

return (is_valid_fn.cljs$core$IFn$_invoke$arity$1 ? is_valid_fn.cljs$core$IFn$_invoke$arity$1(v) : is_valid_fn.call(null,v));
} else {
return cljs.core.reset_BANG_(valid,false);
}
})], null)], null);
});
});
app.components.temperature_converter = (function app$components$temperature_converter(){
var celsius_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var fahrenheit_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.components.c__GT_f(cljs.core.deref(celsius_input)));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Celsius: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.temperature_input,celsius_input,(function (p1__39462_SHARP_){
return cljs.core.reset_BANG_(fahrenheit_input,app.components.c__GT_f(p1__39462_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Fahrenheit: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.temperature_input,fahrenheit_input,(function (p1__39463_SHARP_){
return cljs.core.reset_BANG_(celsius_input,app.components.f__GT_c(p1__39463_SHARP_));
})], null)], null)], null);
});
});
app.components.validate_date_str = (function app$components$validate_date_str(s){
var js_date = (new Date(s));
if(cljs.core.not_every_QMARK_(Number.isNaN,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_date.getMonth(),js_date.getDay(),js_date.getYear()], null))){
return js_date;
} else {
return null;
}
});
app.components.flight_type_input = (function app$components$flight_type_input(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var fexpr__39465 = cljs.core.deref(state);
return (fexpr__39465.cljs$core$IFn$_invoke$arity$1 ? fexpr__39465.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flight-type","flight-type",-24264583)) : fexpr__39465.call(null,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583)));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__39464_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39464_SHARP_,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),e.target.value);
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"one-way"], null),"One-Way"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"round-trip"], null),"Round-Trip"], null)], null);
});
app.components.flight_date_input = (function app$components$flight_date_input(p__39467){
var map__39468 = p__39467;
var map__39468__$1 = (((((!((map__39468 == null))))?(((((map__39468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39468):map__39468);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword(null,"value","value",305978217));
var invalid_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword(null,"invalid-when","invalid-when",-1107099780));
var complete_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword(null,"complete-when","complete-when",744407042));
var disabled_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39468__$1,new cljs.core.Keyword(null,"disabled-when","disabled-when",-391535461));
var validity = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"incomplete","incomplete",-998567478));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(validity),new cljs.core.Keyword(null,"invalid","invalid",412869516)))?"invalid":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(validity),new cljs.core.Keyword(null,"complete","complete",-500388775)))?"complete":null
)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_((function (){var and__4115__auto__ = disabled_when;
if(cljs.core.truth_(and__4115__auto__)){
var G__39470 = cljs.core.deref(context);
return (disabled_when.cljs$core$IFn$_invoke$arity$1 ? disabled_when.cljs$core$IFn$_invoke$arity$1(G__39470) : disabled_when.call(null,G__39470));
} else {
return and__4115__auto__;
}
})())?true:null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var fexpr__39471 = cljs.core.deref(context);
return (fexpr__39471.cljs$core$IFn$_invoke$arity$1 ? fexpr__39471.cljs$core$IFn$_invoke$arity$1(value) : fexpr__39471.call(null,value));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(context,(function (p1__39466_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39466_SHARP_,value,v);
}));
})], null)], null);
});
});
app.components.flight_submit_button = (function app$components$flight_submit_button(p__39472){
var map__39473 = p__39472;
var map__39473__$1 = (((((!((map__39473 == null))))?(((((map__39473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39473):map__39473);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var disabled_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39473__$1,new cljs.core.Keyword(null,"disabled-when","disabled-when",-391535461));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_((function (){var and__4115__auto__ = disabled_when;
if(cljs.core.truth_(and__4115__auto__)){
var G__39475 = cljs.core.deref(context);
return (disabled_when.cljs$core$IFn$_invoke$arity$1 ? disabled_when.cljs$core$IFn$_invoke$arity$1(G__39475) : disabled_when.call(null,G__39475));
} else {
return and__4115__auto__;
}
})())?true:null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return console.log((function (){var fexpr__39476 = cljs.core.deref(context);
return (fexpr__39476.cljs$core$IFn$_invoke$arity$1 ? fexpr__39476.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"departure-date","departure-date",819601724)) : fexpr__39476.call(null,new cljs.core.Keyword(null,"departure-date","departure-date",819601724)));
})());
})], null),"Submit"], null);
});
app.components.flight_booker = (function app$components$flight_booker(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),"one-way",new cljs.core.Keyword(null,"departure-date","departure-date",819601724),"",new cljs.core.Keyword(null,"return-date","return-date",520965446),""], null));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.flight_type_input,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.flight_date_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),state,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"departure-date","departure-date",819601724),new cljs.core.Keyword(null,"invalid-when","invalid-when",-1107099780),null], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.flight_date_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"context","context",-830191113),state,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"return-date","return-date",520965446),new cljs.core.Keyword(null,"invalid-when","invalid-when",-1107099780),null,new cljs.core.Keyword(null,"disabled-when","disabled-when",-391535461),(function (ctx){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flight-type","flight-type",-24264583).cljs$core$IFn$_invoke$arity$1(ctx),"one-way");
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.flight_submit_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),state,new cljs.core.Keyword(null,"disabled-when","disabled-when",-391535461),(function (ctx){
return cljs.core.some(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.components.validate_date_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"departure-date","departure-date",819601724).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"return-date","return-date",520965446).cljs$core$IFn$_invoke$arity$1(ctx)], null)));
})], null)], null)], null);
});
});

//# sourceMappingURL=app.components.js.map
