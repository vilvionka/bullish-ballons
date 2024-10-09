(() => {
  let coin = document.querySelector('#coin');
  let crystals = document.querySelector('#crystals');
  let coinMinus = document.querySelector('#coinMinus');
  let crystalsMinus = document.querySelector('#crystalsMinus');
  let coinPlus = document.querySelector('#coinPlus');
  let crystalsPlus = document.querySelector('#crystalsPlus');

  coinMinus.addEventListener('click', function(){
    let numCoin = Number(coin.innerHTML);
    coin.innerHTML = numCoin - 1;
  }) 
  coinPlus.addEventListener('click', function(){
    let numCoin = Number(coin.innerHTML);
    coin.innerHTML = numCoin + 1;
  }) 
  crystalsMinus.addEventListener('click', function(){
    let numcrystals = Number(crystals.innerHTML);
    crystals.innerHTML = numcrystals - 1;
  }) 
  crystalsPlus.addEventListener('click', function(){
    let numcrystals = Number(crystals.innerHTML);
    crystals.innerHTML = numcrystals + 1;
  }) 

})();

(() => {
  let detals = document.querySelector('.js_main_wrap_detals');
  let popDetals = document.querySelector('.js_pop_detals');
  
  detals.addEventListener('click', function(){
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