require('dotenv').config()

const api_key = process.env.MISHAS_API_KEY;

console.log(api_key);

function clickForm(){
    
}

function startForm() {
    window.location.href = 'form.html';
}

function apikey(){
    return process.env[MISHAS_API_KEY]
}
