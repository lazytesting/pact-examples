using System;
using Xunit;
using PactNet;
using PactNet.Mocks.MockHttpService;

public class ConsumerMyApiPact : IDisposable
{
  public IPactBuilder PactBuilder { get; private set; }
  public IMockProviderService MockProviderService { get; private set; }

  public int MockServerPort { get { return 9999; } }
  public string MockProviderServiceBaseUri { get { return String.Format("http://localhost:{0}", MockServerPort); } }

  public ConsumerMyApiPact()
  {
    PactBuilder = new PactBuilder(new PactConfig { SpecificationVersion = "2.0.0", PactDir = @"..\pacts", LogDir = @"..\logs" });

    PactBuilder
      .ServiceConsumer("beer-randomizer")
      .HasPactWith("beer-api");

    MockProviderService = PactBuilder.MockService(MockServerPort);
  }

  public void Dispose()
  {
    PactBuilder.Build();
  }
}