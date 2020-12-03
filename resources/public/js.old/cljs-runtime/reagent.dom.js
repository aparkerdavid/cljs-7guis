goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37680 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37681 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37681);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37685 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37686 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37686);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37685);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37680);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37697 = arguments.length;
switch (G__37697) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37700 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37700,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37700,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37717_37745 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37718_37746 = null;
var count__37719_37747 = (0);
var i__37720_37748 = (0);
while(true){
if((i__37720_37748 < count__37719_37747)){
var vec__37731_37749 = chunk__37718_37746.cljs$core$IIndexed$_nth$arity$2(null,i__37720_37748);
var container_37750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37731_37749,(0),null);
var comp_37751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37731_37749,(1),null);
reagent.dom.re_render_component(comp_37751,container_37750);


var G__37753 = seq__37717_37745;
var G__37754 = chunk__37718_37746;
var G__37755 = count__37719_37747;
var G__37756 = (i__37720_37748 + (1));
seq__37717_37745 = G__37753;
chunk__37718_37746 = G__37754;
count__37719_37747 = G__37755;
i__37720_37748 = G__37756;
continue;
} else {
var temp__5735__auto___37757 = cljs.core.seq(seq__37717_37745);
if(temp__5735__auto___37757){
var seq__37717_37758__$1 = temp__5735__auto___37757;
if(cljs.core.chunked_seq_QMARK_(seq__37717_37758__$1)){
var c__4556__auto___37759 = cljs.core.chunk_first(seq__37717_37758__$1);
var G__37760 = cljs.core.chunk_rest(seq__37717_37758__$1);
var G__37761 = c__4556__auto___37759;
var G__37762 = cljs.core.count(c__4556__auto___37759);
var G__37763 = (0);
seq__37717_37745 = G__37760;
chunk__37718_37746 = G__37761;
count__37719_37747 = G__37762;
i__37720_37748 = G__37763;
continue;
} else {
var vec__37736_37764 = cljs.core.first(seq__37717_37758__$1);
var container_37765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736_37764,(0),null);
var comp_37766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736_37764,(1),null);
reagent.dom.re_render_component(comp_37766,container_37765);


var G__37767 = cljs.core.next(seq__37717_37758__$1);
var G__37768 = null;
var G__37769 = (0);
var G__37770 = (0);
seq__37717_37745 = G__37767;
chunk__37718_37746 = G__37768;
count__37719_37747 = G__37769;
i__37720_37748 = G__37770;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
