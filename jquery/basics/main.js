// $(document).ready(function () {
//     alert('Page is ready');
// });

var items = ['tea', 'coffee', 'milk'];
var flag = true;

$(document).ready(function () {

    $("button").addClass('btn btn-primary');

    $("button#b1").click(function () {
        alert('You clicked the button');
    });

    $("button#b2").click(function () {
        $('#para').addClass('text-danger');
    });

    $("button#b4").click(function () {
        flag = !flag;
        (flag) ? $('#card-body').show() : $('#card-body').hide();
    });

    mapList();

});

function mapList() {
    $('#list').html('');
    var listString = '';
    for (var i = 0; i < items.length; i++) {
        listString +=
            "<li class='list-group-item d-flex justify-content-between align-items-center'>" + items[i] +
            "<button id='b3' class='btn btn-link' onclick='deleteItem(" + i + ")'>remove</button>" +
            "</li>"
    }
    $('#list').html(listString);
}

function deleteItem(index) {
    this.items.splice(index, 1);
    mapList();
}

