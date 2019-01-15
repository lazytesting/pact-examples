package Pact;

import au.com.dius.pact.provider.junit.PactRunner;
import au.com.dius.pact.provider.junit.Provider;
import au.com.dius.pact.provider.junit.State;
import au.com.dius.pact.provider.junit.loader.PactBroker;
import au.com.dius.pact.provider.junit.target.HttpTarget;
import au.com.dius.pact.provider.junit.target.Target;
import au.com.dius.pact.provider.junit.target.TestTarget;
import beer.Application;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.boot.SpringApplication;
import org.springframework.web.context.ConfigurableWebApplicationContext;


@RunWith(PactRunner.class)
@Provider("beer-api")
@PactBroker(host = "localhost", port = "5000")
public class PactTest {

  @TestTarget
  public final Target target = new HttpTarget("http", "localhost", 9999, "/");

  private static ConfigurableWebApplicationContext application;

  @BeforeClass
  public static void start() {
    application = (ConfigurableWebApplicationContext)SpringApplication.run(Application.class);
  }

  @State("there are some beers")
  public void ensureBeers() {
    // there is beer
  }
}