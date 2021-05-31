let serverURL = `http://127.0.0.1:3000/api`;
// Get Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function(){
    fetchEmployee();
});

// Fetch Employee
let fetchEmployee = () => {
    let url = `${serverURL}/employees`;
    axios.get(url).then((response) => {
        let employees = response.data;
        let employeeRows = ''
        for(let employee of employees){
            employeeRows += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.first_name}</td>
                            <td>${employee.last_name}</td>
                            <td>${employee.email}</td>
                            <td>${employee.gender}</td>
                            <td>${employee.ip_address}</td>
                            </tr>`
        }
        document.querySelector('#table-body').innerHTML = employeeRows;
    }).catch((err) => {
        console.error(err);
    });
}

// POST Button
let postButton = document.querySelector('#post-btn')
postButton.addEventListener('click', function(){
    let url = `${serverURL}/employees`;
    let newEmployee = {
        first_name: 'Jon',
        last_name: 'Bishop',
        email: 'jonbishop@gmail.com',
        gender: 'Male',
        ip_address: '123.123.23.34'
    }
    axios.post(url,newEmployee).then((response) => {
        console.log(response.data);
        fetchEmployee();
    }).catch((err) => {
        console.error(err);
    });
});

// PUT Button
let putButton = document.querySelector('#put-btn')
putButton.addEventListener('click', function(){
    let empID = '_asfdff';
    let url = `${serverURL}/employees/${empID}`;
    let updateEmployee = {
        first_name: 'John',
        last_name: 'Wilson',
        email: 'johnwilson@gmail.com',
        gender: 'Male',
        ip_address: '255.255.255.255'
    }
    axios.put(url, updateEmployee).then((response) => {
        console.log(response.data);
        fetchEmployee();
    }).catch((err) => {
        console.error(err);
    });
});

// DELETE Button
let deleteButton = document.querySelector('#delete-btn')
deleteButton.addEventListener('click', function(){
    let empID = '_askdkd';
    let url = `${serverURL}/employees/${empID}`;
    axios.delete(url).then((response) => {
        console.log(response.data);
        fetchEmployee();
    }).catch((err) => {
        console.error(err);
    });
    
});