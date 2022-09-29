window.onload = function(){
          const xhr =new XMLHttpRequest();
          const url='https://wos-api.clarivate.com/api/woshttps://wos-api.clarivate.com/api/wos/?databaseId=WOS&lang=English&usrQuery=%C5%9EE%C5%9EEN%2C%20YAS%C4%B0N&count=100&firstRecord=1';
          const API_KEY ='8b88d28c52323732785d0490e30b0ff42986d01d';
         
         
          xhr.open('GET',url,true);
          xhr.setRequestHeader("X-API-Key", API_KEY);
          xhr.onload = function(){
           if(this.readyState==4){
              if(this.status===200){
               var data = JSON.parse(this.responseText);
             
              html+=data;
            console.log("Data: "+data);
          }
         
            }
              else
               {
                 html+="Kayıt YOK";
               
               }
              
           
           
           
           
           baslikGoster.innerHTML=html2;
           goster.innerHTML=html;
           
          }
          xhr.send();
          
           
          
          
     
      
   };


 
 