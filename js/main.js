


(() => {

  let coinMinus = document.querySelector('#coinMinus');
  let crystalsMinus = document.querySelector('#crystalsMinus');
  let coinPlus = document.querySelector('#coinPlus');
  let crystalsPlus = document.querySelector('#crystalsPlus');
  let popPlus = document.querySelector('.js_pop_up_plus');
  let popMinus = document.querySelector('.js_pop_up_minus')

  coinMinus.addEventListener('click', function () {
    popMinus.classList.add('active');
  })
  coinPlus.addEventListener('click', function () {
    popPlus.classList.add('active');
  })
  crystalsMinus.addEventListener('click', function () {
    popMinus.classList.add('active');
  })
  crystalsPlus.addEventListener('click', function () {
    popPlus.classList.add('active');
  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(popPlus);
    const gambLk = e.composedPath().includes(crystalsPlus);
    const gambLk2 = e.composedPath().includes(coinPlus);
    if (!lkEl && !gambLk) {
      if (!gambLk2) {
        popPlus.classList.remove('active');
      }
    }

  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(popMinus);
    const gambLk = e.composedPath().includes(crystalsMinus);
    const gambLk2 = e.composedPath().includes(coinMinus);
    if (!lkEl && !gambLk) {
      if (!gambLk2) {
        popMinus.classList.remove('active');
      }
    }

  })

})();

(() => {
  let detals = document.querySelector('.js_main_wrap_detals');
  let popDetals = document.querySelector('.js_pop_detals');

  if (detals) {
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
  }

})();

(() => {

  let box = document.querySelectorAll('.js_pop_up_head_body_input_box');

  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {
      let imgCoin = this.querySelector('.js_pop_up_head_body_input_box_coin');
      let srcCoin = imgCoin.getAttribute('src');
      if (srcCoin == './img/icon/ton_icon.svg') {
        imgCoin.src = './img/icon/crystals.svg';
        return;
      }
      if (srcCoin == './img/icon/crystals.svg') {
        imgCoin.src = './img/icon/ton_icon.svg';
        return;
      }
    })
  }

})();

(() => {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight();

  let audi = document.querySelector('#audio');
  let ctrl = document.querySelector('#audioControl span');

  ctrl.onclick = function () {
    ctrl.classList.toggle('active');
    if(ctrl.classList.contains('active')){
      audi.pause();
    }else{
      audi.play();
    }
  };


})();


(() => {
   
  let loader = document.querySelector('.js_preloader');
   
  setTimeout(function () {
    loader.classList.remove('active');
  }, 8000);


})();


