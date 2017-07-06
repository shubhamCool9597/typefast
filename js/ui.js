var Ui = function(events) {
  this.input = input;
  this.hint = input.prev();
  this.comment = input.next();
  this.single = $('.single');
  this.result = $(commSingle + '>.single');
  this.info=$('.info');
  this.events = events;
}
Ui.prototype = {

  constructor: Ui,
  divAppend: function(data) {
    var _this = this;
    var div = $("<div>", {
      "class": "single",
      "text": data.toLowerCase()
    });
    comment.append(div);
    single = $('.single');
    // console.log(input.prev());


  },
//   // infoAppend:function (data) {
//   //   var _this =this;
//   //   // console.log('bingo');
//   //
//   //   var div1=$("<div>", { "class": "information","text": data.toLowerCase()});
//   //   _this.info.append(div1);
//   //
//   // },
  keyarrow: function(e,m,a) {
    e.preventDefault();
    var _this=this;
    if(a['keyboardEvent']==true){
    _this.events.currentKey(e,m);
      }

  },
  enterKey: function(e) {
    var _this=this;
    _this.events.enterKey(e);
  },
  completeKey: function(e) {
    var _this=this;
    _this.events.completeKey(e);
  },
  wordHighlight: function(m) {
    var _this=this;
    _this.events.highlight(m)
  },
  mouse: function() {
    var _this=this;
    _this.events.mouseHighlight();
  },
  backSpace:function(e) {
    var _this=this;
    _this.events.backSpace(e);
  },
  getData:function(k) {
    var _this=this;
    _this.events.getData(k);
  },
//
  removeChild: function() {
    var _this = this;
    comment.empty();
  },
  // removeInfo:function(){
  //   var _this =this;
  //     _this.info.empty();
  //   }
};
