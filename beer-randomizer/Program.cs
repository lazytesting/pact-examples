using System;
using System.Threading.Tasks;

namespace beer_randomizer
{
    class Program
    {
        static Random random = new Random();

        static async Task Main(string[] args)
        {
            var client = new BeerClient();
            var beers = await client.GetAllTheBeers();
            var randomBeer = beers[random.Next(beers.Count)];
            
            Console.WriteLine("You should drink a "+ randomBeer.name + " made by " + randomBeer.brewery);
        }

    }
}
