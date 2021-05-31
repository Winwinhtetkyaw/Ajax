export class BrainHttp{
    constructor(){

    }
    // Get Request
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    // POST Request
    static post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            }).then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    // PUT Request
    static put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    // DELETE Request
    static delete(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }
}
