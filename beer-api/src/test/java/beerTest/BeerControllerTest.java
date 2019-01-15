package beerTest;

import beer.Beer;
import beer.BeerController;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class BeerControllerTest {

  @Test
  public void testAllTheBeers() {
    BeerController bc = new BeerController();
    List<Beer> result = bc.get();
    assertNotNull(result);
  }
}