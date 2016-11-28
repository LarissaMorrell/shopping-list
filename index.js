

var state = {
    items: []
}

//State modification functions
var addItem = function(state, item) {
    state.items.push(item);
}

var checkItem = function(item) {

    console.log(item);
    item.toggleClass("shopping-item__checked");
}

var deleteItem = function(state, item) {

    //for loop to find state.items[i]
    for (var i = 0; i < state.items.length; i++) {
        //once item === state.items[i]
        if(item.text() === state.items[i]){
        	state.items.splice(i, 1);
        	break;
        }
    }
}


//Render functions
var renderItem = function(state, element) {
    var itemsHTML = state.items.map(function(item) {

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
    $('#js-shopping-list-form').on('click', 'button', function(event) {

        event.preventDefault(); 
        addItem(state, $('#shopping-list-entry').val());
        renderItem(state, $('.js-shopping-list'));
    });


    //check off the items
    $(document).on('click', '.shopping-item-toggle', function(event) {

        event.preventDefault(); 
        checkItem($(this).closest('li').find('.shopping-item'));

    });

    //delete and item
    $(document).on('click', '.shopping-item-delete', function(event){
        event.preventDefault(); 

        //this button find closest parent li and then the shopping-item child
        deleteItem(state, $(this).closest('li').find('.shopping-item'));
        renderItem(state, $('.js-shopping-list'));
    });
});
