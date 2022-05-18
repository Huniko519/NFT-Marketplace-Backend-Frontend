(function($){
  // Check if dom element really exits before call
  $.fn.exists = function () {
    return this.length > 0;
  };


  var  moonstartoken = {

      carousel:function(){
        $('.carousel').flickity({
          // options
          cellAlign: 'left',
          contain: true,
          pageDots: false
        });
    },

    AOSinit: function(){
      AOS.init();
    }, 

    dropZoneInit: function(){
      $(".dropzone").dropzone({ url: "/file/post" });
    }
    
  }

$(document).ready(function(){
  moonstartoken.carousel();
  moonstartoken.AOSinit();
});



  // menu control 
  $('.hamburger, .dropdown-menu a').on("click", function(){
    $('.hamburger').toggleClass('is-active');
  }); 


 $('select').select2({
   minimumResultsForSearch: -1
 });




})(jQuery)