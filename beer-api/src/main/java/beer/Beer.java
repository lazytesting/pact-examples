package beer;

public class Beer {
  private final String code;
  private final String name;
  private final String brewery;

  public Beer(String code, String name, String brewery) {
    this.code = code;
    this.name = name;
    this.brewery = brewery;
  }

  public String getCode() {
    return code;
  }

  public String getName() {
    return name;
  }

  public String getBrewery() {
    return brewery;
  }
}
