$(document).ready(() => {

$('.change-devoured').on('click', function (event) {
    var id = $(this).data('id')

    $.ajax('/api/icecream/' + id, {
        type: 'PUT',
        data: { devoured: 1 }
    }).then(
        function (response) {
            console.log(response)
            console.log('Changed ' + id)

            window.location = '/'
        }
    )
})

$('#new-icecream').on('submit', function (event) {
    event.preventDefault()

    var newName = $('#name').val().trim()

    $.ajax('/api/icecream', {
        type: 'POST',
        data: { icecream_name: newName, devoured: 0 }
    }).then(
        function () {
            console.log('Created a new ice cream in the database!')

            window.location = '/'
        }
    )
})


})