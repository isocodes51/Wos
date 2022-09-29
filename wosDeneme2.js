function getir(){
    fetch('https://wos-api.clarivate.com/api/wos/?databaseId=WOS&lang=English&usrQuery=%C5%9EE%C5%9EEN%2C%20YAS%C4%B0N&count=100&firstRecord=1', 
    {
     headers: {
        'accept': 'application/json',
        'X-ApiKey': '8b88d28c52323732785d0490e30b0ff42986d01d'
     }
    });
}
getir();

