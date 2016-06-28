$(document).ready(function() {
  //all work goes here
  $('.fa-check').click(function() {
    var currentItem = $(this).parent('li');
    currentItem.appendTo('.cart .cart-items');
  });

  $('.fa-trash').click(function() {
    var currentItem = 10;
  });

});
