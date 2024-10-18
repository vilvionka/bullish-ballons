


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
      if(!gambLk2){
        popPlus.classList.remove('active');
      }
    }

  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(popMinus);
    const gambLk = e.composedPath().includes(crystalsMinus);
    const gambLk2 = e.composedPath().includes(coinMinus);
    if (!lkEl && !gambLk) {
      if(!gambLk2){
        popMinus.classList.remove('active');
      }
    }

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
