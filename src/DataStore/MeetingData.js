
import { makeObservable, observable,action, computed,runInAction } from "mobx";
import axios from "axios";

class MeetingData
{
     listMeeting=[

     ];

    constructor(){
        makeObservable(this,{listMeeting:observable,postmeeting:action});
    
          }
           initialMeetings = async () => {
            axios.get("http://localhost:8787/appointments").then((result) => {
               runInAction(() => {
               this.listMeeting = result.data;
               
              });
            });
        
          }
       
   
       postmeeting=async(data)=>{
       
        this.id+=1;;
        data.id=this.id;
        console.log(data);
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
        });
        if(response.status===200){
          this.listMeeting.push(data);
          console.log(response.status)
        }
       
        
       }
      
     

}

export default new MeetingData();