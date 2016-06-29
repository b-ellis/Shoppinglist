$(document).ready(function(){
	 $('.submit').on("click", function(event){
	 	event.preventDefault();
	 	var item = $('.searchbar').val();
	 	$('.items').append('<li><i class="fa fa-check"><i class="fa fa-trash">' + item + '</li>');
	 	console.log(this);
	 });
	 $('.fa-check').click(function() {
	 	var currentItem = $(this).parent('li');
	 	currentItem.appendTo('.cart .cart-items');
	 	console.log(this);
	 });
	 $('.fa-trash').on('click', function() {
	 	console.log(this);
	 	var currentItem = $(this).parent('li');
	 	currentItem.remove();
	 });

});