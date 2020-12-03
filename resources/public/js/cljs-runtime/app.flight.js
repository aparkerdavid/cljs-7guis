goog.provide('app.flight');
app.flight.validate_date_str = (function app$flight$validate_date_str(s){
var js_date = (new Date(s));
if(cljs.core.truth_(cljs.core.some(Number.isNaN,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_date.getMonth(),js_date.getDay(),js_date.getYear()], null)))){
return new cljs.core.Keyword(null,"invalid","invalid",412869516);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,s))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(js_date.toISOString(),(0),(10)))){
return new cljs.core.Keyword(null,"complete","complete",-500388775);
} else {
return new cljs.core.Keyword(null,"invalid","invalid",412869516);
}
} else {
return null;
}
}
});
app.flight.flight_type_input = (function app$flight$flight_type_input(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var fexpr__40758 = cljs.core.deref(state);
return (fexpr__40758.cljs$core$IFn$_invoke$arity$1 ? fexpr__40758.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flight-type","flight-type",-24264583)) : fexpr__40758.call(null,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583)));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__40757_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40757_SHARP_,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),e.target.value);
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"one-way"], null),"One-Way"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"round-trip"], null),"Round-Trip"], null)], null);
});
app.flight.flight_date_input = (function app$flight$flight_date_input(p__40760){
var map__40761 = p__40760;
var map__40761__$1 = (((((!((map__40761 == null))))?(((((map__40761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40761):map__40761);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"value","value",305978217));
var invalid_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"invalid-when","invalid-when",-1107099780));
var complete_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"complete-when","complete-when",744407042));
var disabled_when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"disabled-when","disabled-when",-391535461));
var validity = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"incomplete","incomplete",-998567478));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(validity),new cljs.core.Keyword(null,"invalid","invalid",412869516)))?"invalid":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(validity),new cljs.core.Keyword(null,"complete","complete",-500388775)))?"complete":null)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled_when)?(function (){var G__40763 = cljs.core.deref(context);
return (disabled_when.cljs$core$IFn$_invoke$arity$1 ? disabled_when.cljs$core$IFn$_invoke$arity$1(G__40763) : disabled_when.call(null,G__40763));
})():null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var fexpr__40764 = cljs.core.deref(context);
return (fexpr__40764.cljs$core$IFn$_invoke$arity$1 ? fexpr__40764.cljs$core$IFn$_invoke$arity$1(value) : fexpr__40764.call(null,value));
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(context,(function (p1__40759_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40759_SHARP_,value,v);
}));

return console.log(app.flight.validate_date_str(v));
})], null)], null);
});
});
app.flight.flight_submit_button = (function app$flight$flight_submit_button(context){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.flight.validate_date_str(new cljs.core.Keyword(null,"departure-date","departure-date",819601724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(context))),new cljs.core.Keyword(null,"complete","complete",-500388775))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flight-type","flight-type",-24264583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(context)),"round-trip")) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.flight.validate_date_str(new cljs.core.Keyword(null,"return-date","return-date",520965446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(context))),new cljs.core.Keyword(null,"complete","complete",-500388775))) || (((new Date(new cljs.core.Keyword(null,"departure-date","departure-date",819601724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(context)))) > (new Date(new cljs.core.Keyword(null,"return-date","return-date",520965446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(context))))))))))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(context,(function (p1__40765_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40765_SHARP_,new cljs.core.Keyword(null,"message","message",-406056002),["Booked a flight departing on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__40769 = cljs.core.deref(context);
return (fexpr__40769.cljs$core$IFn$_invoke$arity$1 ? fexpr__40769.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"departure-date","departure-date",819601724)) : fexpr__40769.call(null,new cljs.core.Keyword(null,"departure-date","departure-date",819601724)));
})()),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flight-type","flight-type",-24264583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(context)),"round-trip"))?[", returning on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__40771 = cljs.core.deref(context);
return (fexpr__40771.cljs$core$IFn$_invoke$arity$1 ? fexpr__40771.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"return-date","return-date",520965446)) : fexpr__40771.call(null,new cljs.core.Keyword(null,"return-date","return-date",520965446)));
})())].join(''):null)].join(''));
}));
})], null),"Submit"], null);
});
app.flight.flight_booker = (function app$flight$flight_booker(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),"one-way",new cljs.core.Keyword(null,"departure-date","departure-date",819601724),"",new cljs.core.Keyword(null,"return-date","return-date",520965446),"",new cljs.core.Keyword(null,"message","message",-406056002),""], null));
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.flight.flight_type_input,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.flight.flight_date_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"context","context",-830191113),state,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"departure-date","departure-date",819601724),new cljs.core.Keyword(null,"invalid-when","invalid-when",-1107099780),(function (p1__40772_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.flight.validate_date_str(p1__40772_SHARP_),new cljs.core.Keyword(null,"invalid","invalid",412869516));
}),new cljs.core.Keyword(null,"complete-when","complete-when",744407042),(function (p1__40773_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.flight.validate_date_str(p1__40773_SHARP_),new cljs.core.Keyword(null,"complete","complete",-500388775));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.flight.flight_date_input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"context","context",-830191113),state,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"return-date","return-date",520965446),new cljs.core.Keyword(null,"invalid-when","invalid-when",-1107099780),(function (p1__40774_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.flight.validate_date_str(p1__40774_SHARP_),new cljs.core.Keyword(null,"invalid","invalid",412869516));
}),new cljs.core.Keyword(null,"complete-when","complete-when",744407042),(function (p1__40775_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.flight.validate_date_str(p1__40775_SHARP_),new cljs.core.Keyword(null,"complete","complete",-500388775));
}),new cljs.core.Keyword(null,"disabled-when","disabled-when",-391535461),(function (ctx){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flight-type","flight-type",-24264583).cljs$core$IFn$_invoke$arity$1(ctx),"one-way");
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.flight.flight_submit_button,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var fexpr__40776 = cljs.core.deref(state);
return (fexpr__40776.cljs$core$IFn$_invoke$arity$1 ? fexpr__40776.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002)) : fexpr__40776.call(null,new cljs.core.Keyword(null,"message","message",-406056002)));
})()], null)], null);
});
});

//# sourceMappingURL=app.flight.js.map
