// Text Button
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function() {
    fetchTextData();
})

//Fetch Text Data
let fetchTextData = () => {
    fetch('./data/message.txt').then((response) => {
        if(response.status !== 200){
            console.log(`Something went wrong : ${response.status}`)
            return;
        }
        response.text().then((data) => {
            let htmlTemplate = `<h3>${data}</h3>`
            document.querySelector('#text-card').innerHTML = htmlTemplate
        });
    });
};

// Json Button
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function() {
    fetchJsonData();
});

// Fetch Json Data
let fetchJsonData = () => {
    fetch('./data/mobile.json').then((response) => {
        if(response.status !== 200){
            console.log(`Some went wrong : ${response.status}`);
            return;
        }
        response.json().then((data) => {
            let htmlTemplate = `<ul class="list-group">
                                <li class="list-group-item">ID : ${data.id}</li>
                                <li class="list-group-item">Brand : ${data.brand}</li>
                                <li class="list-group-item">Color : ${data.color}</li>
                                <li class="list-group-item">Price : ${data.price}</li>
                                </ul>`
            document.querySelector('#json-card').innerHTML = htmlTemplate;
        });
    });
};

// API Button
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener("click", function() {
    fetchApiData();
});
// Fetch API Data
let fetchApiData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        if(response.status !== 200){
            console.log(`Something went wrong : ${response.status}`);
            return;
        }
        response.json().then((data) => {
            let users = data;
            let htmlTemplate = ""
            for(let user of users){
                htmlTemplate += `<ul class="list-group mt-1">
                                <li class="list-group-item">ID : ${user.id}</li>
                                <li class="list-group-item">NAME : ${user.name}</li>
                                <li class="list-group-item">EMAIL : ${user.email}</li>
                                <li class="list-group-item">STREET : ${user.address.street}</li>
                                <li class="list-group-item">WEBSITE : ${user.website}</li>
                                </ul>`
            }
            document.querySelector('#api-card').innerHTML = htmlTemplate;
        });
    });
};
