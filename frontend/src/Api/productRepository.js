import axios from 'axios'

export class ProductRepository {
    url = 'http://localhost:8000';
// TODO: Create API calls for the things below

    getAssignments(id){
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/assignment/user/${id}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

//    addAppointment(form) {
//        return new Promise((resolve, reject) => {
//            axios.post(`${this.url}/api/assignments`, form, this.config)
//                .then(x => resolve(x.data))
//                .catch(x => {
//                    alert(x);
//                    reject(x);
//                })
//        })
//    }

}