using Elasticsearch.Net;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace WosDeneme
{
    public class Connection
    {
       
        public void Conn()
        {
            HttpWebRequest xhr = (HttpWebRequest)HttpWebRequest.Create("https://wos-api.clarivate.com/api/wos/?databaseId=WOS&lang=English&usrQuery=%C5%9EE%C5%9EEN%2C%20YAS%C4%B0N&count=100&firstRecord=1");
            HttpWebResponse res = xhr.GetResponse() as HttpWebResponse;
            xhr.Method = "GET";
            xhr.Headers["X-API-Key"] = "8b88d28c52323732785d0490e30b0ff42986d01d";

            StreamReader sr = new StreamReader(res.GetResponseStream());
            string data = sr.ReadToEnd();
            sr.Close();
            xhr.ContentType = "text/xml";
            Console.WriteLine(data);
           
            //using (Stream requestStream = xhr.GetRequestStream())
            //{
            //    //  Console.WriteLine("Veri alınma çalışacak gibi");
            //    requestStream.Read(;
            //}
            

        }

        public void Conn2()
        {
            HttpClient client = new HttpClient();

            HttpRequestMessage request = new HttpRequestMessage(System.Net.Http.HttpMethod.Get, "https://wos-api.clarivate.com/api/wos/?databaseId=WOS&lang=English&usrQuery=%C5%9EE%C5%9EEN%2C%20YAS%C4%B0N&count=100&firstRecord=1");

            request.Headers.Add("accept", "application/json");
            request.Headers.Add("X-ApiKey", "8b88d28c52323732785d0490e30b0ff42986d01d");

            //HttpResponseMessage response = await client.SendAsync(request);
            //response.EnsureSuccessStatusCode();
            //string responseBody = await response.Content.ReadAsStringAsync();
        }
       
    }
}
