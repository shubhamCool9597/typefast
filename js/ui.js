var Ui = function(events) {
  this.input = input;
  this.hint = input.prev();
  this.comment = comment;
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
  keyarrow: function(e) {
    e.preventDefault();
    var _this=this;
    _this.events.currentKey(e);


  },
  enterKey: function(e) {
    var _this=this;
    _this.events.enterKey(e);
  },
  tabKey: function(e) {
    var _this=this;
    _this.events.tabKey(e);
  },
  wordHighlight: function(m) {
    var _this=this;
    _this.events.highlight(m)
  },
  mouse: function() {
    var _this=this;
    _this.events.mouseHighlight();
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
