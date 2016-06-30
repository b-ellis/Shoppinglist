$(document).ready(function(){
	 $('.submit').on("click", function(event){
	 	event.preventDefault();
	 	var item = $('.searchbar').val();
	 	$('.items').append('<li><i class="fa fa-check"></i><i class="fa fa-trash"></i>' + item + '</li>');
	 	console.log(this);
	 });

	 $('.parent').on('click', '.fa-check', function() {
		 var currentItem = $(this).parent('li');
		 currentItem.appendTo('.cart .cart-items');
		 console.log(this);
	 });

	 $('.parent').on('click', '.fa-trash', function() {
	 	console.log(this);
	 	var currentItem = $(this).parent('li');
	 	currentItem.remove();
	 });
	 $('.cart').dblclick('.fa-check', function() {
	 	$('.cart li').wrap('<strike>');
	 });
});
