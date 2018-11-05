$(document).ready(() => {

$('#change-devoured').on(click, function (event) {
    var id = $(this).data('id')
    var newDevour = $(this).data('newdevour')

    var newDevourState = {
        devoured: newDevour
    }

    $.ajax('/api/icecream' + id, {
        type: 'PUT',
        data: newDevourState
    }).then(
        function () {
            console.log('Changed ' + id + ' to ' + newDevour)

            location.reload()
        }
    )
})


})