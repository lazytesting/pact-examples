using System;
using Xunit;
using PactNet.Mocks.MockHttpService;
using PactNet.Mocks.MockHttpService.Models;
using Consumer;
using System.Collections.Generic;

public class BeerApiPactTest : IClassFixture<PactFixture>
{
  private IMockProviderService _mockProviderService;
  private string _mockProviderServiceBaseUri;

  public BeerApiPactTest(PactFixture fixture)
  {
    _mockProviderService = fixture.MockProviderService;
    _mockProviderService.ClearInteractions();
    _mockProviderServiceBaseUri = fixture.MockProviderServiceBaseUri;
  }

  [Fact]
  public void GetSomething_WhenTheTesterSomethingExists_ReturnsTheSomething()
  {
    //Arrange
    _mockProviderService
      .Given("There is a something with id 'tester'")
      .UponReceiving("A GET request to retrieve the something")
      .With(new ProviderServiceRequest
      {
        Method = HttpVerb.Get,
        Path = "/somethings/tester",
        Headers = new Dictionary<string, object>
        {
          { "Accept", "application/json" }
        }
      })
      .WillRespondWith(new ProviderServiceResponse
      {
        Status = 200,
        Headers = new Dictionary<string, object>
        {
          { "Content-Type", "application/json; charset=utf-8" }
        },
        Body = new //NOTE: Note the case sensitivity here, the body will be serialised as per the casing defined
        {
          id = "tester",
          firstName = "Totally",
          lastName = "Awesome"
        }
      }); //NOTE: WillRespondWith call must come last as it will register the interaction

    var consumer = new SomethingApiClient(_mockProviderServiceBaseUri);

    //Act
    var result = consumer.GetSomething("tester");

    //Assert
    Assert.Equal("tester", result.id);

    _mockProviderService.VerifyInteractions(); //NOTE: Verifies that interactions registered on the mock provider are called at least once
  }
}