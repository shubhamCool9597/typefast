var searchArr;
var Api = function(ui) {
  this.ui = ui;
}
Api.prototype = {
  constructor: Api,
  searchResult: function(keyword, e, a) {

    var _this = this;
    // var n=a;
    if (keyword) {
      // console.log(keyword);
      var url = a['urlstart'] + keyword + a['urlend'];
      $.ajax({
        method: 'GET',
        url: url,
        // contentType: "application/json; charset=utf-8",
        // async: false,
        dataType: "json",
        success: function(data) {
            // console.log(data,n);
        if(a['keyArr']&& a['key']){
          searchArr=_this.ui.getData(data,a);
          // console.log(se);
          _this.ui.removeChild();
          $('.loading').css('display','none');
          if (searchArr.length == 0) {
            $('#loader').css('display','block');

            setTimeout(function(){$('.loading').css('display','block');
                    $('#loader').css('display','none');},1000)
          }
          if (keyword === searchArr[0].toLowerCase().slice(0, keyword.length)) {
            setTimeout(function() {
              input.prev().val(searchArr[0].toLowerCase())
            },0);
          } else {
            input.prev().val('');
          }
          for (var i = 0; i < searchArr.length; i++) {
            if (i == 9) {
              break;
            }
            // console.log(data[1].length)

            _this.ui.divAppend(searchArr[i]);
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

        else{
          _this.ui.removeChild();
          // _this.ui.removeInfo();
          $('.loading').css('display','none');
          if (data[1].length == 0) {
            $('#loader').css('display','block');

            setTimeout(function(){$('.loading').css('display','block');
                    $('#loader').css('display','none');},1000)
          input.prev().val('');
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

        }


      })
    }
  }
};
