## Open the project
- Set env variable for the spec endpoint and endpoint string to be replaced
  Eg:
  ```
  export SPEC_ENDPOINT='https://device-manager.ep.rapyuta.io/v0/spec'
  ```
- Make sure that the spec follows Open API Specification and has all the mandatory fields as specified in the link below
  https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#fixed-fields
  Add the following fields to the spec even if they are non-mandatory
    host - eg.`http`
    basePath - eg.`/`

- Run the node script  
  `node index.js`

- Copy the following files to the folder to be served
  index.html  
  style/main.css  
  style/prism.css  
  script/main.js
