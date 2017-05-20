document.addEventListener("DOMContentLoaded", function() {

  var $container = $('.container');
  var $nav = $container.find('#navbar');
  var $navitem = $nav.find('li');


$navitem.on('click', function(e) {
    e.preventDefault();
    $('.navbar li.active').removeClass('active');
    $('.navbar li div').removeClass('nav--activ');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
        $this.children('div').addClass('nav--activ');
    }

});



});
