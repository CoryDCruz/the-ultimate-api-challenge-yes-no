// API
const API_ENDPOINT = 'https://yesno.wtf/api';
const button = document.getElementById("button")
const ball = document.getElementById("ball")

function loadingState () {
    ball.classList.add("shake__ball")
}
function cleanUp () {
    setTimeout(() => {
        document.getElementById("answer").innerHTML = ""
    },3000)
}

function renderAnswer(data){
const answer = data.answer
setTimeout(() => {
    document.getElementById("answer").innerHTML = `<p>${answer}</p>`
    ball.classList.remove("shake__ball")
    cleanUp()
}, 1000)


}

function fetchAnswer (){
    loadingState()
    fetch(API_ENDPOINT)
    .then (res => {
        return res.json()
    })
    .then (res => {
        renderAnswer(res)
    })
    .catch(err => {
        console.log(err)
    })
}

button.addEventListener('click',fetchAnswer)
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
