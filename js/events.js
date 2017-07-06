var $current;

var Events = function() {}
Events.prototype = {
  constructor: Events,
  currentKey: function(e,m) {
    e.preventDefault();
    // alert('working');
    var isFirst = false;
    var a = $(commSingle + '>.single');
    // console.log(a);
    //  var b =$('.info >.information');
    a.each(function(){
      console.log($(this));
        if ($(this).css('background-color') == "rgb(255, 255, 0)") {
          isFirst = false;
          $current = $(this);
          console.log($(this).text());

          return false;
        } else {
          isFirst = true;
          $current = $(commSingle + '>.single').first();
          // console.log($(commSingle + '>.single'));
          // $info=$('.info>.information').first();
        }
})
    // for (var i = 0; i < a.length; i++) {
    //   console.log($(a[i]));
    //   if ($(a[i]).css('background-color') == "rgb(255, 255, 0)") {
    //     isFirst = false;
    //     $current = $(a[i]);
    //     //  $info=$(b[i]);
    //
    //     break;
    //   } else {
    //     isFirst = true;
    //     $current = $(commSingle + '>.single').first();
    //     // console.log($(commSingle + '>.single'));
    //     // $info=$('.info>.information').first();
    //   }
    // }
    if (e.keyCode == 40) {
      e.preventDefault();
    //   var $nextDiv;
      console.log($current.text());
      if ($current.next().length == 0) {
        isFirst = true;
        $current.css('background-color', '');
        $current = $nextDiv = $(commSingle + '>.single').first().css('background-color', 'yellow');
      }
      if (!isFirst) {
        $nextDiv = $current.next();
        $current.css('background-color', '');
        $nextDiv.css('background-color', 'yellow');
        $current = $nextDiv;
        console.log($current);
        if(m === $.trim($current.text()).slice(0, m.length)){
        input.prev().val($.trim($current.text()))
          }
        else{
            input.prev().val('')
            }
        // input.prev().val('');
      } else {
        $current.css('background-color', 'yellow');
        if(m === $.trim($current.text()).slice(0, m.length)){
        input.prev().val($.trim($current.text()))
          }
        else{
            input.prev().val('')
            }
        // input.prev().val('');
      }
      // console.log(commSingle);
      // console.log($(commSingle + '>.single'));
    }
    // //
    if (e.keyCode == 38) {
      e.preventDefault();
      var $nextDiv;
      if ($current.prev().length == 0) {
        isFirst = true;
        $current.css('background-color', '');
        $current = $nextDiv = $(commSingle + '>.single').last().css('background-color', 'yellow');

      }
      if (!isFirst) {
        $nextDiv = $current.prev();
        e.preventDefault();
        $current.css('background-color', '');
        $nextDiv.css('background-color', 'yellow');

        $current = $nextDiv;
        if(m === $.trim($current.text()).slice(0, m.length)){
        input.prev().val($.trim($current.text()))
          }
        else{
            input.prev().val('')
            }
        // input.prev().val('');
      } else {

        $current.css('background-color', 'yellow');
        if(m === $.trim($current.text()).slice(0, m.length)){
        input.prev().val($.trim($current.text()))
          }
        else{
            input.prev().val('')
            }
        // input.prev().val('');
      }
}
},

completeKey:function(e){
    if (e.keyCode == 39) {
      e.preventDefault();
    if(input.prev().val()){
      input.val(input.prev().val());
      input.prev().val('');

    }

}
  },
backSpace:function(e){
  if (e.keyCode == 8){
input.prev().val('');
}
},
  enterKey: function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      input.val($.trim($current.text()));
      comment.empty();
      // $info.text();
      // $('.info1>.information').html($info.text());
      // $('.info1>.information').html($info.text());
      // $('.info1').css('display','block');




    };
  },
  highlight: function(k) {
    //console.log($(cs+'>.single').text());
    var z;
    $(commSingle + '>.single').each(function() {
      //  console.log(k);
      z = $(this).text().replace(RegExp(k, "g"), '<b>' + k + '</b>');
      $(this).html(z)
    });



  },
  getData:function(j){
console.log(j);
},
  mouseHighlight: function() {
    $(commSingle + '>.single').mouseover(function() {

      $(commSingle + '>.single').css('background-color', '');
      $(commSingle + '>.single').prev().css('background-color', '');
      $(this).css('background-color', 'yellow');
      $(this).click(function() {
        // alert('dsd');
        input.val($.trim($(this).text()));
        input.prev().val('');
        input.next().empty();
        $(this).css('background-color','');


        // console.log($(this).text());
      })

      // alert('sad');


    });
    $(commSingle + '>.single').mouseout(function() {
      $(commSingle + '>.single').css('background-color', '');
    });
  }


}
