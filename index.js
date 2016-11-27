'use strict';

var state = {
    items: []
}

//State modification functions
var addItem = function(state, item) {
    state.items.push(item);
}

var deleteItem = function(state, item) {

	//for loop to find state.items[i]

}


//Render functions
var renderItem = function(state, element) {
    var itemsHTML = state.items.map(function(item) {

        //var elemStr = '<li> <span class="shopping-item">' + item + '</span>';
        //elemStr += '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';

        return '<li> <span class="shopping-item">' + item + '</span>' +
            '<div class="shopping-item-controls">' +
            '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
            '</button>' +
            '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
            '</button>' +
            '</div>' +
            '</li>';
    });
    element.html(itemsHTML);
}

$(document).ready(function() {


    //Event listeners
    //$('.js-shopping-list-form').submit( function(event) {
    $('button').click(function(event) {
    //$('.js-shopping-list-form').on('click', 'button', function(event) {

        event.preventDefault();    //but what default action are we preventing?
        addItem(state, $('#shopping-list-entry').val());
        renderItem(state, $('.js-shopping-list'));
    });



    $('.shopping-item-toggle').click(function(event) {
    	event.preventDefault();  //needed?


    });



    $('shopping-item-delete').click(function(event) {
    	event.preventDefault();  //needed?

    	deleteItem(state, $(this)); 


    });
});
