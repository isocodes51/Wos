var html="";
var html2="";

html2+="<table > <tr>";
html2+="<td id='eserAdi'>Kitap Adı</td>";
html2+="<td>ISBN</td>";
html2+="<td>Yazar</td>";
html2+="<td>Basım Tarihi</td>";
html2+="<td>Yayınevi</td>";
html2+="<td>Kategori</td>";
html2+="<td>Info Link</td>";
html2+="</tr></table>"; 
  

var getir = (e)=> {
  // html+="GELEN KAYITLAR:<br>";
  
  if (e.key === 'Enter') {
         
        const xhr =new XMLHttpRequest();
        const goster= document.querySelector("#goster");
        const baslikGoster = document.querySelector("#baslikGoster");
        const API_KEY="AIzaSyDduOV6aKeUgRLwWfH4SZHT8xhXQs6q_Os";
        const ISBN=document.getElementById("deger").value;
        const url= `https://www.googleapis.com/books/v1/volumes?q=+isbn:${ISBN}&key=${API_KEY}`;
      
        xhr.open('GET',url,true);
        xhr.onload = function(){
         if(this.readyState==4){
            if(this.status===200){
              
            var data = JSON.parse(this.responseText);
              html+="<table><tr>";
              html+=`<td id=eserAdi>${data.items[0].volumeInfo.title}  ${data.items[0].volumeInfo.subtitle}</td>`;
              html+=`<td>${data.items[0].volumeInfo.industryIdentifiers[1].identifier}</td>`;
              html+=`<td>${data.items[0].volumeInfo.authors}</td>`;
              html+=`<td>${data.items[0].volumeInfo.publishedDate}</td>`;
              html+=`<td>${data.items[0].volumeInfo.publisher}</td>`;
              html+=`<td>${data.items[0].volumeInfo.categories}</td>`;
              html+=`<td><a href=${data.items[0].volumeInfo.infoLink}>Link için tıkla</a></td>`;
              html+="</tr></table>";
            }
          }
            else
             {
               html+="Kayıt YOK";
             }
              // html+="</tr></tbody>";
           
        //    for (d in data.items[0].volumeInfo){
        //        html+=`<br>${d}`;
        //    }
        
         
         
         
         
         baslikGoster.innerHTML=html2;
         goster.innerHTML=html;
         
        }
        xhr.send();
        
         
        deger.value="";
       // console.log(deger.value);
    }
    
 };
 
 document.getElementById("deger").addEventListener("keypress", getir);
 