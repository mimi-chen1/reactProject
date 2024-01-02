
import { makeObservable, observable,action, computed ,runInAction} from "mobx";
import axios from "axios";

class BusinessDeatails {
   business = {
    id: "1",
    name: "mimi",
    address: "zirelzon 5",
    phone: "0548572355",
    owner: "mimi",
    logo: "dhufr",
    description: "frgh",
};
   
   constructor(){
    makeObservable(this,{business:observable,postBuisness:action});

      }
      initialBuisness = async () => {
        
       await axios.get("http://localhost:8787/businessData").then((result) => {
          runInAction(() => {
            if (!result.data.name)
            this.postBuisness(this.business);
        else
            this.business = result.data;
          });
        });
    
      }

   postBuisness=async(data)=>{
          fetch("http://localhost:8787/businessData", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json",},
    }).then((res)=>
    {this.business=data;
    console.log("business: ",this.business)})
    .catch((e)=>{
      console.log("error")
    })
  }
  
  
   }
  
 export default new BusinessDeatails();