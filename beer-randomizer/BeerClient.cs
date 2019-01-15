using System.Threading.Tasks;
using System.Net.Http;
using System.Collections.Generic;
using System.Runtime.Serialization.Json;

namespace beer_randomizer
{
    class BeerClient
    {
        public async Task<List<BeerItem>> GetAllTheBeers() {
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync("http://localhost:9999/");
            response.EnsureSuccessStatusCode();
            var responseStream = await response.Content.ReadAsStreamAsync();
            var serializer = new DataContractJsonSerializer(typeof(List<BeerItem>));
            return serializer.ReadObject(responseStream) as List<BeerItem>;
        }
    }

    public class BeerItem {
        public string code;
        public string name;
        public string brewery;
    }
}