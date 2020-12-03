goog.provide('app.crud');
app.crud.sample_names = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),"Lebbeus",new cljs.core.Keyword(null,"last","last",1105735132),"Woods"], null),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),"Bruce",new cljs.core.Keyword(null,"last","last",1105735132),"Mau"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),"Christopher",new cljs.core.Keyword(null,"last","last",1105735132),"Alexander"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),"Jane",new cljs.core.Keyword(null,"last","last",1105735132),"Jacobs"], null)], null);
app.crud.crud = (function app$crud$crud(){
var names = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(app.crud.sample_names);
var first_name_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var last_name_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var selected_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var filter_str = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var current_key_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((4));
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_id))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Filter: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_str),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(filter_str,e.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"First name:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(first_name_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(first_name_input,e.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Last name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(last_name_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(last_name_input,e.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if((!(clojure.string.blank_QMARK_(cljs.core.deref(first_name_input))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(names,(function (p1__41166_SHARP_){
return cljs.core.assoc_in(p1__41166_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(selected_id),new cljs.core.Keyword(null,"first","first",-644103046)], null),cljs.core.deref(first_name_input));
}));
} else {
}

if((!(clojure.string.blank_QMARK_(cljs.core.deref(last_name_input))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(names,(function (p1__41167_SHARP_){
return cljs.core.assoc_in(p1__41167_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(selected_id),new cljs.core.Keyword(null,"last","last",1105735132)], null),cljs.core.deref(last_name_input));
}));
} else {
return null;
}
})], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(names,(function (p1__41168_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41168_SHARP_,cljs.core.deref(selected_id));
}));

return cljs.core.reset_BANG_(selected_id,cljs.core.first(cljs.core.keys(cljs.core.deref(names))));
})], null),"Delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(names,(function (p1__41169_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41169_SHARP_,cljs.core.deref(current_key_index),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),cljs.core.deref(first_name_input),new cljs.core.Keyword(null,"last","last",1105735132),cljs.core.deref(last_name_input)], null));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_key_index,cljs.core.inc);
})], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"10",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(selected_id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(selected_id,parseInt(e.target.value));
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41170){
var vec__41171 = p__41170;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41171,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41171,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first","first",-644103046)) : v.call(null,new cljs.core.Keyword(null,"first","first",-644103046))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132)) : v.call(null,new cljs.core.Keyword(null,"last","last",1105735132))))].join('')], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41174){
var vec__41175 = p__41174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41175,(1),null);
if(clojure.string.blank_QMARK_(cljs.core.deref(filter_str))){
return true;
} else {
return clojure.string.starts_with_QMARK_(clojure.string.lower_case((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132)) : v.call(null,new cljs.core.Keyword(null,"last","last",1105735132)))),clojure.string.lower_case(cljs.core.deref(filter_str)));
}
}),cljs.core.deref(names)))], null)], null);
});
});

//# sourceMappingURL=app.crud.js.map
