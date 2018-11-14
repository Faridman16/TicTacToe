// JavaScript Document
$(document).ready(function() {
  var startGame = true;
  var count = 0;
  var o_win = 0;
  var x_win = 0;
  var xTurn = true;

  arr=[5,
    1,
    2,
    3,
    4,
    5,
    6];
  k = 9;
  var result = '';
    for(var x=0;x<arr.length;x++){
        console.log(arr[x]+ ' = '+ k);
        if(arr[x] == k){
            result = 'YES';
            break;
        }else{
            result = 'NO';
        }
    }
    console.log(result);
    return;
  
  $('ul#game li').click( function() {
      if(startGame && !$(this).attr('value')){
          count++;
          $(this).text(xTurn?"X":"O");
          $(this).val(xTurn?1:2);
          $(this).addClass('disable x btn-info');
          if(count >= 5) {
              cekMenang(  $(this).attr('value'));
          }
          xTurn = !xTurn;    
      }
  });
  
  $("#reset").click(function () {
      reset()
  });

  function cekMenang(squares) {
      const lines = [
        ['one', 'two', 'three'],
        ['four', 'five', 'six'],
        ['seven', 'eight', 'nine'],
        ['one', 'four', 'seven'],
        ['two', 'five', 'eight'],
        ['three', 'six', 'nine'],
        ['one', 'five', 'nine'],
        ['three', 'five', 'seven'],
      ];
      var obj = {
          horizontal:{}
      }
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if ($('#'+a).attr('value') && $('#'+a).attr('value') === $('#'+b).attr('value') && $('#'+a).attr('value') === $('#'+c).attr('value')) {
          alertWinner();
          return;
        }
          if(count >= 9) {
              draw();
          }
      }
      return null;
    }

  function alertWinner(){
      alert((xTurn?"X":"O") + " Menangg");
      xTurn?x_win++:o_win++;
      xTurn?$('#x_win').text(x_win):$('#o_win').text(o_win);
      startGame = false;
  }

  function draw(){
      alert('Its a tie. It will restart.');
      reset();
  }
  
  function reset(){
      $("#game li").text("+");
      $("#game li").removeClass('disable')
      $("#game li").removeAttr('value');
      $("#game li").removeClass('btn-primary')
      $("#game li").removeClass('btn-info')
      count = 0;
      xTurn = true;
      startGame = true;
  }
});
  