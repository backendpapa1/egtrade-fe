

class NetworkHttp {

    constructor() {

    }


    post(url:string,data: any,query?: string){
     return new Promise((resolve, reject) => {
         fetch(url,{
             body: JSON.stringify(data),
             method:"POST"
         }).then(async (data) => {
             console.log(data.json(),"fkk")
                 resolve(data.json())

         }).catch((err) => {
             reject(err);
         })
     })
    }
}
export default NetworkHttp;