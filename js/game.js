
(() => {
  let bDiff1 = 0;
  let moveId1 = null;
  function move1() {
    bDiff1 = bDiff1 + 1;
    if (bDiff1 >= 380) {
      clearInterval(moveId1);
    }
    document.querySelector('#moved1').style.bottom = bDiff1 + 'px';
  }
  let bDiff2 = 0;
  let moveId2 = null;
  function move2() {
    bDiff2 = bDiff2 + 1;
    if (bDiff2 >= 380) {
      clearInterval(moveId2);
    }
    document.querySelector('#moved2').style.bottom = bDiff2 + 'px';
  }
  let bDiff3 = 0;
  let moveId3 = null;
  function move3() {
    bDiff3 = bDiff3 + 1;
    if (bDiff3 >= 380) {
      clearInterval(moveId3);
    }
    document.querySelector('#moved3').style.bottom = bDiff3 + 'px';
  }
  let bDiff4 = 0;
  let moveId4 = null;
  function move4() {
    bDiff4 = bDiff4 + 1;
    if (bDiff4 >= 380) {
      clearInterval(moveId4);
    }
    document.querySelector('#moved4').style.bottom = bDiff4 + 'px';
  }
  let bDiff5 = 0;
  let moveId5 = null;
  function move5() {
    bDiff5 = bDiff5 + 1;
    if (bDiff5 >= 380) {
      clearInterval(moveId5);
    }
    document.querySelector('#moved5').style.bottom = bDiff5 + 'px';
  }



  let popGame = document.querySelector('.js_pop_game');
  let counter = document.querySelector('.js_pop_game_countdown');
  let counterNum = document.querySelector('.js_pop_game_countdown_num');

  
  document.addEventListener('DOMContentLoaded', function () {
      popGame.classList.add('active');
      let deadLine = 5;
      let timerId = null;

      function countdownTimer() {
        const diff = deadLine - 1;
        if (diff <= 0) {
          clearInterval(timerId);
          draw();
          counter.classList.add('active');
          timerIdUp = setInterval(countUpTimer, 1000);
        }
        deadLine = diff;
        counterNum.innerHTML = diff;
      }
      timerId = setInterval(countdownTimer, 1000);
    })
  

  let earth = document.querySelector('.js_pop_game_earth');
  let oblako = document.querySelector('.js_pop_game_oblako');
  let pt3 = document.querySelector('.js_pop_game_pt3');
  let pt2 = document.querySelector('.js_pop_game_pt2');
  let pt1 = document.querySelector('.js_pop_game_pt1');
  let ob1 = document.querySelector('.js_pop_game_ob1');
  let ob1_1 = document.querySelector('.js_pop_game_ob1_1');
  let ob2 = document.querySelector('.js_pop_game_ob2');
  let ob3 = document.querySelector('.js_pop_game_ob3');
  let ob3_1 = document.querySelector('.js_pop_game_ob3_1');

  function draw() {
    earth.classList.add('active');
    oblako.classList.add('active');
    pt3.classList.add('active');
    pt2.classList.add('active');
    pt1.classList.add('active');
    ob1.classList.add('active');
    ob1_1.classList.add('active');
    ob2.classList.add('active');
    ob3.classList.add('active');
    ob3_1.classList.add('active');
    moveBallons();
  }

  let deadLineUp = 0;
  let timerIdUp = null;

  function countUpTimer(){
    const diff = deadLineUp + 1;
    if (diff >= 40) {
      console.log('1');
      clearInterval(timerIdUp);
      let sound = document.querySelector('.audio_game');
      sound.currentTime = 0;
      sound.pause();
    }
    deadLineUp = diff;
    counterNum.innerHTML = diff;

  }



  function moveBallons() {
    moveId1 = setInterval(move1, 85);
    moveId2 = setInterval(move2, 77);
    moveId3 = setInterval(move3, 80);
    moveId4 = setInterval(move4, 90);
    moveId5 = setInterval(move5, 100);

  }

})();