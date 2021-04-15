const socket = io()

let message = document.getElementById('message')
let username = document.getElementById('username')
let btn = document.getElementById('sumbit')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

btn.addEventListener('click', function(){
    socket.emit('chat:message', {
        username: username.value,
        message: message.value
    })
})

socket.on('chat:message', function(data){
    output.innerHTML += `<p>
    <strong>${data.username}</strong> ${data.message}
    </p>`
})

// $(function () {

//     const socket = io()

//     elementos del DOM
//     const $messageForm = $('#message-form')
//     const $messageBox = $('#message')
//     const $chat = $('#chat')

//     eventos
//     $messageForm.sumbit( e => {
//         e.preventDefault()
//         socket.emit('send message', $messageBox.val())
//         $messageBox.val('')
//     })
// })


