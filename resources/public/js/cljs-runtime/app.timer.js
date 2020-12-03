goog.provide('app.timer');
app.timer.limit_slider = (function app$timer$limit_slider(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"max","max",61366548),"1000",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(value,e.target.value);
})], null)], null);
});
app.timer.timer = (function app$timer$timer(){
var active = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var elapsed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1000));
var timer = window.setInterval((function (){
if((cljs.core.deref(elapsed) >= cljs.core.deref(limit))){
cljs.core.reset_BANG_(active,false);

return cljs.core.reset_BANG_(elapsed,(0));
} else {
if(cljs.core.truth_(cljs.core.deref(active))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(elapsed,cljs.core.inc);
} else {
return null;
}
}
}));
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),((100) * (cljs.core.deref(elapsed) / cljs.core.deref(limit)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(elapsed))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.deref(elapsed) / cljs.core.deref(limit))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.timer.limit_slider,limit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(active))?"Stop":"Start")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.reset_BANG_(elapsed,(0));
})], null),"Reset"], null)], null);
});
});

//# sourceMappingURL=app.timer.js.map
