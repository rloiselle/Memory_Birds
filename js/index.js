$(document).ready(function() {

// Total number of tiles available in game
  // var cellCt = $('.cell').length;
// number of bird songs required to fill tiles
  // var numSongs = cellCt/2;
  // var songs = {};

// toggles cell color when clicked and also calls a function
  $('.cell').bind('click', function() {
      $(this).toggleClass("blue");
       // hugNeighbors($(this));
       soundManager.togglePause('Sturnella_neglecta');
  });

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

  // $('#gameBox').data({name:["Piranga_ludoviciana","Sialia_currucoides","Spinus_tristis","Sturnella_neglecta"], count:[0,0,0,0]});
  $('#gameBox').data({name:[], count:[]});
  // console.log($('gameBox').data());
  // $('gameBox').data("name").push(rand);
  var birdAry=[];
  var birdHash={};
  var songs = ["Piranga_ludoviciana", "Sialia_currucoides", "Spinus_tristis", "Sturnella_neglecta"];
  var rand = songs[Math.floor(Math.random() * songs.length)];
  birdAry.push(rand);
  console.log(birdAry);

  // birdHash.Piranga_ludoviciana=undefined;
  // ct=1;
  // if(birdHash.Piranga_ludoviciana===undefined){
  //   birdHash.Piranga_ludoviciana = 1;
  // } else if{
  //     console.log("false");
  //   }


  $('.cell').map(function() {
    // var songs = {Pl:0,Sc:0,St:0,Sn:0};
    var songs = ["Piranga_ludoviciana", "Sialia_currucoides", "Spinus_tristis", "Sturnella_neglecta"];
    var rand = songs[Math.floor(Math.random() * songs.length)];
    // $(this).data({name:rand, url:"_mp3/filename.mp3"});

    if(birdHash[rand]===undefined){
      birdHash[rand] = 1;
      $(this).data({name:rand, url:"_mp3/filename.mp3"});
    } else if(birdHash[rand]<=2){
      birdHash[rand]=birdHash[rand]+1;
      $(this).data({name:rand, url:"_mp3/filename.mp3"});
    } else {
      var rand = songs[Math.floor(Math.random() * songs.length)];
      break;
    }


    console.log($(this).data());

    // for(var i=0, max=$('#gameBox').data("name").length; i<max; i++) {
    //   // if($('#gameBox').data("name")[rand] === rand) {
    //   console.log($('#gameBox').data("name")[i]===rand);
    //   console.log($('#gameBox').data("name")[i]);
    // }

  });

  // console.log(namAry);
  console.log(birdHash);

  // $('#gameBox').data("name").map(function(){
  // for(var i=0, max=$('#gameBox').data("name").length; i<max; i++) {
    // if($('#gameBox').data("name")[rand] === rand) {
   // console.log($('#gameBox').data("name")[i]);
    // }
  // }
  // });

var assignSound = function(){

};

});