


(() => {
  let coin = document.querySelector('#coin');
  let crystals = document.querySelector('#crystals');
  let coinMinus = document.querySelector('#coinMinus');
  let crystalsMinus = document.querySelector('#crystalsMinus');
  let coinPlus = document.querySelector('#coinPlus');
  let crystalsPlus = document.querySelector('#crystalsPlus');

  coinMinus.addEventListener('click', function () {
    let numCoin = Number(coin.innerHTML);
    coin.innerHTML = numCoin - 1;
  })
  coinPlus.addEventListener('click', function () {
    let numCoin = Number(coin.innerHTML);
    coin.innerHTML = numCoin + 1;
  })
  crystalsMinus.addEventListener('click', function () {
    let numcrystals = Number(crystals.innerHTML);
    crystals.innerHTML = numcrystals - 1;
  })
  crystalsPlus.addEventListener('click', function () {
    let numcrystals = Number(crystals.innerHTML);
    crystals.innerHTML = numcrystals + 1;
  })

})();

(() => {
  let detals = document.querySelector('.js_main_wrap_detals');
  let popDetals = document.querySelector('.js_pop_detals');

  detals.addEventListener('click', function () {
    popDetals.classList.toggle('active');
  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(popDetals);
    const gambLk = e.composedPath().includes(detals);
    if (!lkEl && !gambLk) {
      popDetals.classList.remove('active');
    }

  })

})();

(() => {
  let race = document.querySelectorAll('.js_race');
  let popGame = document.querySelector('.js_pop_game');
  let counter = document.querySelector('.js_pop_game_countdown');
  let counterNum = document.querySelector('.js_pop_game_countdown_num');

  for (let i = 0; i < race.length; i++) {
    race[i].addEventListener('click', function () {
      popGame.classList.add('active');
      let deadLine = 5;
      let timerId = null;

      function countdownTimer() {
        const diff = deadLine - 1;
        if (diff <= 0) {
          clearInterval(timerId);
          draw();
          counter.classList.add('active');
        }
        deadLine = diff;
        counterNum.innerHTML = diff;
      }
      timerId = setInterval(countdownTimer, 1000);
    })
  }

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



  function moveBallons() {
    moveId1 = setInterval(move1, 50);
    moveId2 = setInterval(move2, 70);
    moveId3 = setInterval(move3, 60);
    moveId4 = setInterval(move4, 40);
    moveId5 = setInterval(move5, 30);
   
  }

})();