soundManager.setup({

  // location: path to SWF files, as needed (SWF file name is appended later.)

  url: 'swf/',

  // optional: version of SM2 flash audio API to use (8 or 9; default is 8 if omitted, OK for most use cases.)
  // flashVersion: 9,

  // optional: use 100% HTML5 mode where available
    preferFlash: false,

  // use soundmanager2-nodebug-jsmin.js, or disable debug mode (enabled by default) after development/testing
  // debugMode: false,

  // good to go: the onready() callback

  onready: function() {

    // SM2 has started - now you can create and play sounds!

    var w_Meadowlark = soundManager.createSound({
      id: 'Sturnella_neglecta',
    // Downloaded mp3 file
      url: '_mp3/Sturnella_neglecta_XC103306.mp3'
    // Short recording from api
      // url: 'http://www.xeno-canto.org/sounds/uploaded/BCWZQTGMSO/bird340.mp3'
    // Long recording from api
       // url: 'http://www.xeno-canto.org/sounds/uploaded/CLKPHLYUHA/TMIItapeIVSturnella.mp3'

      // onload: function() { console.log('sound loaded!', this); }
      // other options here..
    });

    var w_Tanager = soundManager.createSound({
      id: 'Piranga_ludoviciana',
    // Downloaded mp3 file
      url: '_mp3/Piranga_ludoviciana_XC146083.mp3'
    });

    var am_Goldfinch = soundManager.createSound({
      id: 'Spinus_tristis',
    // Downloaded mp3 file
      url: '_mp3/Spinus_tristis_XC127600.mp3'
    });

    var mtn_Bluebird = soundManager.createSound({
      id: 'Siala_currucoides',
    // Downloaded mp3 file
      url: '_mp3/Siala_currucoides_XC100904.mp3'
    });

  },



  // optional: ontimeout() callback for handling start-up failure

  ontimeout: function() {

    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    // See the flashblock demo when you want to start getting fancy.

  }

});