//Text file Data
let textButton = document.querySelector('#text-btn')
textButton.addEventListener('click', function(){
    // Create Ajax Request
    let xhr = new XMLHttpRequest()

    // Prepare the Request
    xhr.open('GET', './data/message.txt', true)
    

    // Send Request
   xhr.send();

    // Process the Request
    xhr.onload = () => {
        if (xhr.status === 200){
            let data = xhr.responseText;
            console.log(data);
            displayTextData(data);
        }
    }
})

//Display TextData
let displayTextData = (data) => {
    document.querySelector('#text-card').innerHTML = `<h3>${data}</h3>`
}

//Json Data File
let jsonButton = document.querySelector('#json-btn')
jsonButton.addEventListener('click', function() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', './data/mobile.json', true)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText
            let loadData = JSON.parse(data)
            displayJsonData(loadData)
        }
    }

})
//Display Json Data
function displayJsonData(loadData) {
    let htmlTemplate = ''
    htmlTemplate = `<ul class="list-group">
                        <li class="list-group-item">ID: ${loadData.id}</li>
                        <li class="list-group-item">BRAND: ${loadData.brand}</li>
                        <li class="list-group-item">COLOR: ${loadData.color}</li>
                        <li class="list-group-item">PRICE: ${loadData.price}</li>
                        </ul>`
    document.querySelector('#json-card').innerHTML = htmlTemplate
}

// API Data
let apiButtom = document.querySelector("#api-btn")
apiButtom.addEventListener("click",function() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText
            let users = JSON.parse(data)
            displayApiData(users)
        }
    }
})
//Dispaly API Data
let displayApiData = (users) => {
    let htmlTemplate = ''
    for (let user of users) {
        htmlTemplate += `<ul class="list-group mt-1 bg-success">
                        <li class="list-group-item">ID: ${user.id}</li>
                        <li class="list-group-item">NAME: ${user.name}</li>
                        <li class="list-group-item">EMAIL: ${user.email}</li>
                        <li class="list-group-item">STREET: ${user.address.street}</li>
                        <li class="list-group-item">CITY: ${user.address.city}</li>
                        </ul>`
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate
}
