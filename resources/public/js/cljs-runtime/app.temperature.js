goog.provide('app.temperature');
app.temperature.f__GT_c = (function app$temperature$f__GT_c(f){
return ((f - (32)) * ((5) / (9)));
});
app.temperature.c__GT_f = (function app$temperature$c__GT_f(c){
return ((32) + (c * ((9) / (5))));
});
app.temperature.valid_float_QMARK_ = (function app$temperature$valid_float_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseFloat(s)));
});
app.temperature.temperature_input = (function app$temperature$temperature_input(value,is_valid_fn){
var valid = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(valid))?"valid":"invalid"),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.target.focus();

return e.target.select();
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
cljs.core.reset_BANG_(value,v);

if(app.temperature.valid_float_QMARK_(v)){
cljs.core.reset_BANG_(valid,true);

return (is_valid_fn.cljs$core$IFn$_invoke$arity$1 ? is_valid_fn.cljs$core$IFn$_invoke$arity$1(v) : is_valid_fn.call(null,v));
} else {
return cljs.core.reset_BANG_(valid,false);
}
})], null)], null);
});
});
app.temperature.temperature_converter = (function app$temperature$temperature_converter(){
var celsius_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var fahrenheit_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.temperature.c__GT_f(cljs.core.deref(celsius_input)));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Celsius: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.temperature.temperature_input,celsius_input,(function (p1__38325_SHARP_){
return cljs.core.reset_BANG_(fahrenheit_input,app.temperature.c__GT_f(p1__38325_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Fahrenheit: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.temperature.temperature_input,fahrenheit_input,(function (p1__38326_SHARP_){
return cljs.core.reset_BANG_(celsius_input,app.temperature.f__GT_c(p1__38326_SHARP_));
})], null)], null)], null);
});
});

//# sourceMappingURL=app.temperature.js.map
