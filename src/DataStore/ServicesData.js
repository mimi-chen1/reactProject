
import { makeObservable, observable,action, computed } from "mobx";
import axios from "axios";
import { runInAction } from "mobx";
class ServicesData{
listServices=[];
 

constructor(){
    makeObservable(this,{listServices:observable,postservice:action});

      }
      initialServices = async () => {
        axios.get("http://localhost:8787/services").then((result) => {
          runInAction(() => {
            this.listServices = result.data;
          });
        });
    
      }
   
     async postservice(data)
      {
      
          await  fetch('http://localhost:8787/service',{
          method: 'POST',
                  body: JSON.stringify(data),
                  headers:{
                    'Content-Type':'application/json'
                  }
              }).then((res)=>{
                  console.log(res.status);
                  if(res.status==200)
                 this.listServices.push(data);
                 
                  console.log(this.listServices)
              }).catch((e) => {
                console.log("error");
            });
      
         
   }
 
   
  
//  get  getservice() {
//     return this.listServices;
//   }

}
export default new ServicesData();