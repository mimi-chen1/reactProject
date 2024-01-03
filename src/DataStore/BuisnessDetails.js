
import { makeObservable, observable,action, computed ,runInAction} from "mobx";
import axios from "axios";

class BusinessDeatails {
   business = {
    id: "1",
    name: "Inbal Lenin",
    address: "Anatot 3 Tel Aviv",
    phone: "0542474047",
    owner: "Inbal Lenin",
    logo: "https://get-marketing.co.il/wp-content/uploads/2022/03/logo-design-for-architect-interior-design-inbal-levin-pic1-2.jpg",
    description: "Professional and courteous service",
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