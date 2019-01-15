package beer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/beers")
public class BeerController {


    @GetMapping("/")
    public List<Beer> get() {
      BeerDataAccess beerDataAccess = new BeerDataAccess();
      List<Beer> result = beerDataAccess.get();
      return result;
    }
}