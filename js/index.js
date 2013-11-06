$(document).ready(function() {

// $('.cell').bind('click', function(){
//   // var picture =
//   $(".flipbox").flippy({
//     color_target: "red",
//     duration: "500",
//     verso: 'Hello'
//   });

// });

// $('.cell').bind('dblclick', function(){
//   $('.flipbox').flippyReverse();
// });

// $(function() {
//     $('.quickflip-wrapper').quickFlip();
// });

// Total number of tiles available in game
  // var cellCt = $('.cell').length;
// number of bird songs required to fill tiles
  // var numSongs = cellCt/2;
  // var songs = {};

// toggles cell color when clicked and also calls a function
  // $('.cell').bind('click', function() {
  //     $(this).toggleClass("blue");
  //      // hugNeighbors($(this));
  //      soundManager.togglePause('Sturnella_neglecta');
  // });

  // $('.cell').bind('click', function() {
  //   soundManager.play('WesternMeadowlark');
  // });

// congratulation box appears if all cells are blue
  $('#gameBox').bind('click', function() {
    cellcount = $('.cell').length;
    bluecount = $('div.blue').length;
    if (cellcount === bluecount) {
      alert("congratulations");
    }
  });

// resets cell colors
  $('#wipe').bind('click', function() {
    $('.cell').removeClass("blue");
  });

// function changes the color for boxes adjacent to the box clicked
  var hugNeighbors = function(position) {
    var rownum = position.data("row");
    var colnum = position.data("col");
    $("div.cell[data-row=" + (rownum) + "][data-col=" + (colnum + 1) + "]").toggleClass("blue");
    $("div.cell[data-row=" + (rownum) + "][data-col=" + (colnum - 1) + "]").toggleClass("blue");
    $("div.cell[data-row=" + (rownum + 1) + "][data-col=" + (colnum) + "]").toggleClass("blue");
    $("div.cell[data-row=" + (rownum - 1) + "][data-col=" + (colnum) + "]").toggleClass("blue");
  };

  // Array of options for the the gameboard
  var songsAll = ["Piranga_ludoviciana", "Sialia_currucoides", "Spinus_tristis", "Sturnella_neglecta","a","b","c","d"];

// create array 1:length of game tiles
  var positionList = [];
  for (var pos = 1; pos <= $('.cell').length; pos++) {
      positionList.push(pos);
  }

  var fillOrder = [];

// randomly select from array list without replacement
  var randSelect = function(ary){
    // This gets numbers between 1=>x<=16
    var ind = Math.floor(Math.random() * ary.length);
    fillOrder.push(ary[ind]);
    return ary.splice(ind, 1)[0];
  };

  var assignSound = function(){
    songs = songsAll.concat(songsAll);
    console.log(songs);
    $('.cell').map(function() {
      for(ind=0; ind<fillOrder.length; ind++){
        if(ind === $(this).data("pos") & $(this).data("name")===undefined) {
          // subtract one from the index in order to cover the index range of songs array
          $(this).data({name:songs[fillOrder[ind]-1], url:"_mp3/filename.mp3"});
        }
      }
    });
  };

// function allows repeated calls to function
// a function passed into another function as a parameter must be stored as a variable OR
// use the name without the () after it. Otherwise the function will be immediately evaluated
  var repeatFxnCall = function(num, fxn, par){
    for(var i=0; i<num; i++) {
      fxn(par);
    }
  };

  repeatFxnCall(16, randSelect, positionList);
  assignSound();

  // console.log(fillOrder,fillOrder.length);
  // console.log(positionList);

  // $('.cell').map(function() {
  //   console.log($(this).data("pos"),$(this).data("name"));
  // });



});