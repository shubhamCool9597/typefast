var Api = function(ui) {
  this.ui = ui;
}
Api.prototype = {
  constructor: Api,
  searchResult: function(keyword, e, a) {
    var _this = this;
    if (keyword) {
      // console.log(keyword);
      var url = a['urlstart'] + keyword + a['urlend'];
      $.ajax({
        method: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data) {

          _this.ui.removeChild();
          // _this.ui.removeInfo();
          if (data[1].length == 0) {
            // $('.loading').css('display','none');
          }
          if (keyword === data[1][1].toLowerCase().slice(0, keyword.length)) {
            setTimeout(function() {
              input.prev().val(data[1][1].toLowerCase())
            },0);
          } else {
            input.prev().val('');
          }



          // console.log($(_this.ui.hint).val());
          //e.preventDefault();
          for (var i = 0; i < data[1].length; i++) {
            if (i == 9) {
              break;
            }
            // console.log(data[1].length)

            _this.ui.divAppend(data[1][i + 1]);
            // _this.ui.infoAppend(data[2][i+1]);


          }
          // console.log(a.hint);
          if (a.textHighlight == true) {
            _this.ui.wordHighlight(keyword);
          }
          if (a.mouseEvent == true) {
            _this.ui.mouse();
          }
        }


      })
    }
  }
};
