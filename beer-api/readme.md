# Example PACT provider

## build
```
mvn package
```

## run
```
java -jar target/beer-api-0.1.0.jar
```
And see it running on http://localhost:9999

## Run PACT test
Make sure that you started the pact broker.
```
mvn test -Dpact.verifier.publishResults=true
```