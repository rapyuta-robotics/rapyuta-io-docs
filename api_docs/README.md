## Open the project
- Set env variable for the spec endpoint and endpoint string to be replaced
  Eg:
  ```
  export SPEC_ENDPOINT='https://device-manager.ep.rapyuta.io/v0/spec'
  ```
- Make sure that the spec follows Open API Specification and has the below fields
    host - eg.`localhost:8080`
    basePath - eg.`/`
    schemes: {
        'http',
    }

- Run the node script  
  `node index.js`

- Copy the following files to the folder to be served
  index.html  
  style/main.css  
  style/prism.css  
  script/main.js
