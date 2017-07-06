var timeOut = null;

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
var commSingle;
$.fn.typefast = function(a) {

  $(this).one('click', function() {

    $('body').bodyAppend($(this));
  // input according to code
 $(this).css({
      'position': 'relative',
      'top': '-55px',
      'background': 'transparent',

    })
    $('<div>').attr({
      name: 'comment',
      class: 'comment' + count
    }).insertAfter($(this));
    // comment = $('.comment' + count + '');
    cs = '.comment' + count + '';
    $(cs).css({
  'margin-top': '-55px',
  'position':'relative',
  'width':'465px'
});
    arr[$(this).attr('id')] = cs;
    count = count + 1;
  })
$(this).on('focus',function(){
input=$(this);
id = $(this).attr('id');

hint1 = $(hin[id]);
$(arr[id]).empty();
// input.val('');
// console.log(comment);
// console.log(input);
})
$(this).on('blur',function(){
var m = $(this).attr('id');
// $(arr[m]).empty();
$(hin[m]).val('');
// input.val('');
// $(this).next().empty();
// $(this).prev().val('');
// $(this).val('')
})

$(this).on('keydown', function(e) {

$('.loader').css('display','block');
$('.loading').css('display','none');

  var _this = $(this);
  var events = new Events();
  var ui=new Ui(events);
  var api = new Api(ui);


  setTimeout(function() {
    var m = _this.val();
    if (e.keyCode == 38 || e.keyCode == 40) {
      e.preventDefault();
      $('#loader').css('display','none');
        // alert('up*down');
    console.log(a['urlstart']+a['urlend']);
        comment=_this.next();
      // $('.info1').css('display','none');
      // $('.loading').css('display','none');
      ui.keyarrow(e,m,a);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      comment=_this.next();
      // alert('enter');
      // $('.comment').css('display','none');
      // $('.info').css('display','none');
      // $('.info1>.information').css('display','block');
      // $('.result').val('');
      ui.enterKey(e);
    } else if (e.keyCode == 39) {
    $('#loader').css('display','none');
    e.preventDefault();
    // alert('tab');
  if(a['autocomplete']==true){
    ui.completeKey(e);
}

    } else if (e.keyCode == 8) {
        // alert('backspace')
      // $('.info').css('display','none');
      // $('.info1>.information').css('display','none');
      // $('.result').val('');
      // $('.loading').css('display','none');
      // $('.comment').css('display','none');
      $('#loader').css('display','block');

      ui.backSpace(e);
      input.prev().val('');
      api.searchResult(m, e, a);
      if(input.val().length==0){
$('#loader').css('display','none')
input.prev().val('');}

    } else {
      // alert('else')
      // console.log(m);
      e.preventDefault();
      commSingle = arr[id];
      comment=_this.next();
      console.log(comment);
      $('#loader').css('display','block');
      // input.prev().val('');
      api.searchResult(m, e, a);
    }



  }, 100);


})
}
$.fn.bodyAppend = function(m) {
  $(window).ready(function() {
    $('<input>').attr({
      type: 'text',
      name: 'input1',
      class: 'control',
      id: 'result' + hCount,
      tabindex:'-1'
        }).insertBefore(m);
        // $('#result' + hCount).css({
        //   'color': '#9a9191',
        //   'padding-left': '11px',
        //   'font-size': '16px',
        //   'letter-spacing': 'inherit',
        //   'width': '100%'
        // });
        hint = $('#result' + hCount)
        hin[id] = hint;
        hCount = hCount + 1;
  });
}
