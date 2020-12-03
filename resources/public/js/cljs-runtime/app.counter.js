goog.provide('app.counter');
app.counter.counter = (function app$counter$counter(){
var cnt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cnt)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cnt,cljs.core.inc);
})], null),"Increment!"], null)], null);
});
});

//# sourceMappingURL=app.counter.js.map
