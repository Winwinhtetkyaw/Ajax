//Text file Data
let textButton = document.querySelector('#text-btn')
textButton.addEventListener('click', function(){
        fetchTextData();
    });

//Display TextData
let fetchTextData = () => {
    axios.get('./data/message.txt').then((response) => {
        if(response.status !== 200){
            console.log(`Something Went Wrong ${response.status}`);
            return;
        }
        let fileContent = response.data;
        document.querySelector('#text-card').innerHTML = `<h3>${fileContent}</h3>`
    }).catch((err) => {
        console.error(err);
    });
}

//Json Data File
let jsonButton = document.querySelector('#json-btn')
jsonButton.addEventListener('click', function() {
   axios.get('./data/mobile.json').then((response) => {
       if(response.status !== 200){
        console.log(`Something Went Wrong ${response.status}`);
        return; 
       }
       let loadData = response.data;
       displayJsonData(loadData);
   }).catch((err) => {
       console.error(err);
   });
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
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        if(response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
        }
        let data = response.data;
        displayApiData(data);
    }).catch((err) => {
        console.error(err);
    });
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
