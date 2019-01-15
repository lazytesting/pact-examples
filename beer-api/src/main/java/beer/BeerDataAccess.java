package beer;

import java.util.ArrayList;
import java.util.List;

public class BeerDataAccess {
  public BeerDataAccess() {
    beers = new ArrayList<Beer>();
    beers.add(new Beer("kaapse-harrie","Kaapse Harrie", "Kaapse Brouwers"));
  }
  private List<Beer> beers;

  public  List<Beer> get() {
    return beers;
  }
}
