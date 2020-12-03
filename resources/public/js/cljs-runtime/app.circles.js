goog.provide('app.circles');
if((typeof app !== 'undefined') && (typeof app.circles !== 'undefined') && (typeof app.circles.circles !== 'undefined')){
} else {
app.circles.circles = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.circles !== 'undefined') && (typeof app.circles.canvas !== 'undefined')){
} else {
app.circles.canvas = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.circles !== 'undefined') && (typeof app.circles.undo_queue !== 'undefined')){
} else {
app.circles.undo_queue = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.circles !== 'undefined') && (typeof app.circles.redo_queue !== 'undefined')){
} else {
app.circles.redo_queue = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.circles !== 'undefined') && (typeof app.circles.mouse_pos !== 'undefined')){
} else {
app.circles.mouse_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof app !== 'undefined') && (typeof app.circles !== 'undefined') && (typeof app.circles.current_id !== 'undefined')){
} else {
app.circles.current_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
app.circles.add_circle = (function app$circles$add_circle(p__51798){
var vec__51799 = p__51798;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51799,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51799,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.circles,(function (p1__51796_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51796_SHARP_,cljs.core.deref(app.circles.current_id),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(50)], null));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.undo_queue,(function (p1__51797_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51797_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(app.circles.current_id),null], null));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.current_id,cljs.core.inc);

return cljs.core.reset_BANG_(app.circles.redo_queue,cljs.core.PersistentVector.EMPTY);
});
app.circles.resize_circle = (function app$circles$resize_circle(id,r){
var old_r = (function (){var fexpr__51804 = cljs.core.deref(app.circles.circles);
return (fexpr__51804.cljs$core$IFn$_invoke$arity$2 ? fexpr__51804.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"r","r",-471384190)) : fexpr__51804.call(null,id,new cljs.core.Keyword(null,"r","r",-471384190)));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.circles,(function (p1__51802_SHARP_){
return cljs.core.assoc_in(p1__51802_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"r","r",-471384190)], null),r);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.undo_queue,(function (p1__51803_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51803_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,old_r], null));
}));

return cljs.core.reset_BANG_(app.circles.redo_queue,cljs.core.PersistentVector.EMPTY);
});
app.circles.undo = (function app$circles$undo(){
var vec__51809 = cljs.core.last(cljs.core.deref(app.circles.undo_queue));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(1),null);
var circle = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(function (){var fexpr__51812 = cljs.core.deref(app.circles.circles);
return (fexpr__51812.cljs$core$IFn$_invoke$arity$1 ? fexpr__51812.cljs$core$IFn$_invoke$arity$1(id) : fexpr__51812.call(null,id));
})()], null);
if((op == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.circles,(function (p1__51805_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51805_SHARP_,id);
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.undo_queue,cljs.core.pop);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.redo_queue,(function (p1__51806_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51806_SHARP_,circle);
}));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.circles,(function (p1__51807_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51807_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,op]));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.undo_queue,cljs.core.pop);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.redo_queue,(function (p1__51808_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51808_SHARP_,circle);
}));
}
});
app.circles.redo = (function app$circles$redo(){
var vec__51815 = cljs.core.last(cljs.core.deref(app.circles.redo_queue));
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.undo_queue,(function (p1__51813_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51813_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(function (){var fexpr__51818 = cljs.core.deref(app.circles.circles);
return (fexpr__51818.cljs$core$IFn$_invoke$arity$1 ? fexpr__51818.cljs$core$IFn$_invoke$arity$1(id) : fexpr__51818.call(null,id));
})()], null));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.circles,(function (p1__51814_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51814_SHARP_,id,op);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.circles.redo_queue,cljs.core.pop);
});
app.circles.xy = (function app$circles$xy(e){
var rect = e.target.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.clientX - rect.left),(e.clientY - rect.top)], null);
});
app.circles.distance = (function app$circles$distance(x1,y1,x2,y2){
return Math.sqrt((Math.pow((x1 - x2),(2)) + Math.pow((y1 - y2),(2))));
});
app.circles.selected_circle = (function app$circles$selected_circle(circles,mouse_pos){
var vec__51819 = mouse_pos;
var mouse_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819,(0),null);
var mouse_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819,(1),null);
var distance = (function (p__51822){
var map__51823 = p__51822;
var map__51823__$1 = (((((!((map__51823 == null))))?(((((map__51823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51823):map__51823);
var circle_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51823__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var circle_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51823__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.circles.distance(mouse_x,mouse_y,circle_x,circle_y);
});
return (function (p__51825){
var vec__51826 = p__51825;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51826,(1),null);
if((distance(v) < new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(v))){
return v;
} else {
return null;
}
})(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__51829){
var vec__51830 = p__51829;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51830,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51830,(1),null);
return distance(v);
}),circles)));
});
app.circles.selected_circle_2 = (function app$circles$selected_circle_2(mouse_pos){
var vec__51833 = mouse_pos;
var mouse_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51833,(0),null);
var mouse_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51833,(1),null);
var distance = (function (p__51836){
var map__51837 = p__51836;
var map__51837__$1 = (((((!((map__51837 == null))))?(((((map__51837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51837):map__51837);
var circle_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51837__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var circle_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51837__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return app.circles.distance(mouse_x,mouse_y,circle_x,circle_y);
});
return (function (p__51839){
var vec__51840 = p__51839;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51840,(1),null);
if((distance(v) < new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(v))){
return v;
} else {
return null;
}
})(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__51843){
var vec__51844 = p__51843;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(1),null);
return distance(v);
}),cljs.core.deref(app.circles.circles))));
});
app.circles.draw_circle_2 = (function app$circles$draw_circle_2(p__51847,color){
var map__51848 = p__51847;
var map__51848__$1 = (((((!((map__51848 == null))))?(((((map__51848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51848):map__51848);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51848__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51848__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51848__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var ctx = cljs.core.deref(app.circles.canvas).getContext("2d");
(ctx.fillStyle = color);

ctx.moveTo(x,y);

ctx.beginPath();

ctx.arc(x,y,r,(0),((2) * Math.PI));

ctx.fill();

return ctx.stroke();
});
app.circles.draw_circle = (function app$circles$draw_circle(p__51850,ctx){
var map__51851 = p__51850;
var map__51851__$1 = (((((!((map__51851 == null))))?(((((map__51851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51851):map__51851);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51851__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51851__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51851__$1,new cljs.core.Keyword(null,"r","r",-471384190));
(ctx.fillStyle = "#fff");

ctx.moveTo(x,y);

ctx.beginPath();

ctx.arc(x,y,r,(0),((2) * Math.PI));

ctx.fill();

return ctx.stroke();
});
app.circles.draw_selected_circle = (function app$circles$draw_selected_circle(p__51853,ctx){
var map__51854 = p__51853;
var map__51854__$1 = (((((!((map__51854 == null))))?(((((map__51854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51854):map__51854);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51854__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51854__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51854__$1,new cljs.core.Keyword(null,"r","r",-471384190));
(ctx.fillStyle = "#666");

ctx.moveTo(x,y);

ctx.beginPath();

ctx.arc(x,y,r,(0),((2) * Math.PI));

ctx.fill();

return ctx.stroke();
});
app.circles.redraw = (function app$circles$redraw(mouse_pos){
var ctx = cljs.core.deref(app.circles.canvas).getContext("2d");
var selected_circle = app.circles.selected_circle_2(mouse_pos);
(ctx.fillStyle = "#eee");

ctx.fillRect((0),(0),(800),(600));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51856_SHARP_){
return app.circles.draw_circle_2(p1__51856_SHARP_,"#fff");
}),cljs.core.vals(cljs.core.deref(app.circles.circles))));

return app.circles.draw_circle_2(selected_circle,"#666");
});
app.circles.draw_all_circles = (function app$circles$draw_all_circles(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51861 = arguments.length;
var i__4737__auto___51862 = (0);
while(true){
if((i__4737__auto___51862 < len__4736__auto___51861)){
args__4742__auto__.push((arguments[i__4737__auto___51862]));

var G__51863 = (i__4737__auto___51862 + (1));
i__4737__auto___51862 = G__51863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return app.circles.draw_all_circles.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(app.circles.draw_all_circles.cljs$core$IFn$_invoke$arity$variadic = (function (circles,ctx,mouse_pos){
(ctx.fillStyle = "#eee");

ctx.fillRect((0),(0),(800),(600));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51857_SHARP_){
return app.circles.draw_circle(p1__51857_SHARP_,ctx);
}),cljs.core.vals(circles)));

return app.circles.draw_selected_circle(app.circles.selected_circle(circles,cljs.core.first(mouse_pos)),ctx);
}));

(app.circles.draw_all_circles.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.circles.draw_all_circles.cljs$lang$applyTo = (function (seq51858){
var G__51859 = cljs.core.first(seq51858);
var seq51858__$1 = cljs.core.next(seq51858);
var G__51860 = cljs.core.first(seq51858__$1);
var seq51858__$2 = cljs.core.next(seq51858__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51859,G__51860,seq51858__$2);
}));

app.circles.main = (function app$circles$main(){
var mouse_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var current_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"circles",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
cljs.core.reset_BANG_(app.circles.canvas,reagent.dom.dom_node(this$).querySelector("#circles-canvas"));

var ctx_51864 = cljs.core.deref(app.circles.canvas).getContext("2d");
(ctx_51864.fillStyle = "#eee");

ctx_51864.fillRect((0),(0),(800),(600));

cljs.core.add_watch(app.circles.circles,new cljs.core.Keyword(null,"component-update-circles","component-update-circles",146962770),(function (){
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1(this$);
}));

return cljs.core.add_watch(mouse_pos,new cljs.core.Keyword(null,"component-update-mouse-pos","component-update-mouse-pos",1101832320),(function (){
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1(this$);
}));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var ctx = cljs.core.deref(app.circles.canvas).getContext("2d");
return app.circles.redraw(cljs.core.deref(mouse_pos));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"circles-canvas",new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (e){
return cljs.core.reset_BANG_(mouse_pos,app.circles.xy(e));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return app.circles.add_circle(app.circles.xy(e));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.circles.undo], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.circles.redo], null),"Redo"], null)], null);
})], null));
});
goog.exportSymbol('app.circles.main', app.circles.main);

//# sourceMappingURL=app.circles.js.map
