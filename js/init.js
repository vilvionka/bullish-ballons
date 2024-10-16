$('.main_wrap_box_sliderBallons').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.main_wrap_box_sliderBallons_nav_prev'),
  nextArrow: $('.main_wrap_box_sliderBallons_nav_next'),
  speed: 300,
  slidesToShow: 3,
 
});


$('.main_wrap_box_sliderCoin').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.main_wrap_box_sliderCoin_nav_prev'),
  nextArrow: $('.main_wrap_box_sliderCoin_nav_next'),
  speed: 300,
  slidesToShow: 3,
});


$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.faq_accordion_item_header');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.faq_accordion_item_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.faq_accordion'), false);
});

