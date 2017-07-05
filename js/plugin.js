var timeOut = null;
var $current;
var $info;
var input;
var hint;
var hint1;
var comment;
var single;
var count = 0;
var hCount = 0;
var cs;
var commres;
var arr = {};
var hin = {}
var selectedInput = null
var id;
var commSingle

$.fn.typefast = function(a) {

  $(this).one('click', function() {
    $('body').bodyAppend($(this));
    $(this).css({
      'position': 'relative',
      'top': '-34px',
      'background': 'transparent',
      'padding-left': '11px',
      'font-size': '16px'
    })
    $('<div>').attr({
      name: 'comment',
      class: 'comment' + count
    }).insertAfter($(this));
    comment = $('.comment' + count + '');
    cs = '.comment' + count + '';
    arr[$(this).attr('id')] = cs;
    count = count + 1;
  })
$(this).on('focus',function(){
input=$(this);
// console.log(input);
})
$(this).on('blur',function(){

})
$(this).on('keydown', function(e) {

  var _this = $(this);

  setTimeout(function() {
    var m = _this.val();
    if (e.keyCode == 38 || e.keyCode == 40) {
      e.preventDefault();
        alert('up*down');
    console.log(a['urlstart']+a['urlend']);
      // $('.info1').css('display','none');
      // $('.loading').css('display','none');
      // ui.keyarrow(e);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      alert('enter');
      // $('.comment').css('display','none');
      // $('.info').css('display','none');
      // $('.info1>.information').css('display','block');
      // $('.result').val('');
      // ui.enterKey(e);
    } else if (e.keyCode == 9) {
    e.preventDefault();
    alert('tab');

    } else if (e.keyCode == 8) {
        alert('backspace')
      // $('.info').css('display','none');
      // $('.info1>.information').css('display','none');
      // $('.result').val('');
      // $('.loading').css('display','none');
      // $('.comment').css('display','none');

    } else {
      alert('else')
      console.log(m);
      // e.preventDefault();
      // api.searchResult(m, e, a);
    }



  }, 100);


})
}
$.fn.bodyAppend = function(m) {
  $(window).ready(function() {
    $('<input>').attr({
      type: 'text',
      name: 'input1',
      class: 'form-control',
      id: 'result' + hCount,
      tabindex:'-1'
        }).insertBefore(m);
        $('#result' + hCount).css({
          'color': '#9a9191',
          'padding-left': '11px',
          'font-size': '16px',
          'letter-spacing': 'inherit',
          'width': '100%'
        });
        hint = $('#result' + hCount)
        hin[id] = hint;
        hCount = hCount + 1;
  });
}
