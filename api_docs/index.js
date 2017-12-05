var fs = require('fs');
var path = require('path');

var SwaggerSnippet = require('swagger-snippet');
var _ = require('lodash');
var request = require('request');
var Prism = require('prismjs');

require('./script/prism-bash');
require('./script/prism-go');
require('./script/prism-python');
require('./script/prism-clike');
require('./script/prism-javascript');

var swaggerSpecLink = process.env.SPEC_ENDPOINT;
var replaceString = process.env.REPLACE_STRING;
var targets = ['shell_curl', 'go_native', 'python_python3', 'c_libcurl', 'javascript_xhr'];

var schemaTypesToPlaceholder = {
  object: '{}',
  string: '"string"',
  array: '[]',
  boolean: '"boolean"',
  integer: '"integer"'
};

var formatParams = function(paramArray, paramType){
  var paramString = "<h3>"+paramType+" params</h3><div class=\"paramBody\">";
  _.each(paramArray, function(paramItem){
    paramString += "<div class=\"paramBodyItem\">\n" +
      "        <div class=\"paramName\">\n" +
      "          "+paramItem.name+"\n" +
      "          <div class=\"paramRequired\">"+(paramItem.required ? 'required' : '')+"</div>\n" +
      "        </div>\n" +
      "        <div class=\"paramType\">\n" +
      "          "+(paramItem.type)+"\n" +
      "          <div class=\"paramDescription\">"+(paramItem.description || '')+"</div>\n" +
      "        </div>\n" +
      "      </div>";
  });
  paramString += '</div>';
  return paramString;
};
var getBodyParamsSchemaJson = function(schemaProperties){
  var paramString = '';
  if (_.has(schemaProperties, 'properties')) {
    _.each(schemaProperties.properties, function(schemaItem, schemaIndex){
      paramString += "&emsp;"+schemaIndex+" : "+schemaTypesToPlaceholder[schemaItem.type]+",<br />";
    });
  } else if (schemaProperties.type === 'array') {
    paramString += "&emsp;["+schemaTypesToPlaceholder[schemaProperties.items.type]+"],<br />";
  }
  return paramString;
}
var formatBodyParams = function(paramArray, paramType){
  if (_.has(paramArray[0], 'schema')) {
    var paramString = "<h3>"+paramType+" params</h3><div class=\"paramBody\">";
    _.each(paramArray, function(paramItem){
      paramString += "<div class=\"paramBodyItem\">\n" +
        "          <div class=\"paramName\">\n" +
        "            "+paramItem.name+"\n" +
        "            <div class=\"paramRequired\">"+(paramItem.required ? 'required' : '')+"</div>\n" +
        "          </div>\n" +
        "          <div class=\"paramType\">\n" +
        "            json\n" +
        "            <div class=\"paramDescription\">\n" +
        "              "+(paramItem.description || '')+"<br />\n" +
        "              {<br />\n" +
        "              "+(getBodyParamsSchemaJson(paramArray[0].schema))+"\n" +
        "              }\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>";
    });
    paramString += '</div>';
    return paramString;
  }
  return formatParams(paramArray, paramType);
};

var swaggerSuccessCallback = function(swaggerSpec){
  var results = _.groupBy(
    SwaggerSnippet.getSwaggerSnippets(swaggerSpec, targets),
    function(item){
      return _.replace(item.url, replaceString, '');
    }
  );
  var sidebarHtml = '';
  var pageContentsHtml = '';

  _.each(results, function(resultSpecItem, specKey){
    _.each(resultSpecItem, function(resultItem, resultKey){
      var method = resultItem.method;
      var description = resultItem.description;
      var url = resultItem.url;
      var snippets = resultItem.snippets;
      var params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');
      sidebarHtml +=
        "<li>\n" +
        "        <a href=\"#"+method+"_"+specKey+"\">\n" +
        "          <span class=\"methodSpan "+(method.toLowerCase())+"\">"+method+"</span>"+specKey+"\n" +
        "        </a>\n" +
        "      </li>";
      pageContentsHtml +=
        "<div class=\"apiItem\" id=\""+method+"_"+specKey+"\">\n" +
        "        <h3 class=\"apiItemHead\">\n" +
        "        <span class=\"methodSpan "+(method.toLowerCase())+"\">"+method+"</span>"+specKey+"</h3>\n" +
        "        <p class=\"apiDetails\">\n" +
        "          "+(_.replace(url, replaceString, '&lt;HOST&gt;:&lt;PORT&gt;'))+"<br />\n" +
        "          "+description+"\n" +
        "        </p>\n" +
        "        <p>\n" +
        "          "+(_.has(params, 'path') ? formatParams(params.path, 'Path') : '')+"\n" +
        "          "+(_.has(params, 'query') ? formatParams(params.query, 'Query') : '')+"\n" +
        "          "+(_.has(params, 'body') ? formatBodyParams(params.body, 'Body') : '')+"\n" +
        "        </p>\n" +
        "        <div class=\"apiCodeEmbed\">\n" +
        "          <ul>\n" +
        "            <li class=\"tabHeaderItem active\" data-id=\"0\">Shell</li>\n" +
        "            <li class=\"tabHeaderItem\" data-id=\"1\">Go</li>\n" +
        "            <li class=\"tabHeaderItem\"  data-id=\"2\">Python</li>\n" +
        "            <li class=\"tabHeaderItem\"  data-id=\"3\">C</li>\n" +
        "            <li class=\"tabHeaderItem\"  data-id=\"4\">Javascript</li>\n" +
        "          </ul>\n" +
        "          <div>\n" +
        "            <div class=\"tabContentItem active\">\n" +
        "              <pre><code>"+(_.replace(Prism.highlight(decodeURIComponent(snippets[0].content), Prism.languages.bash), 'undefinedundefined', '&lt;HOST&gt;:&lt;PORT&gt;'))+"</code></pre>\n" +
        "            </div>\n" +
        "            <div class=\"tabContentItem\">\n" +
        "              <pre><code>"+(_.replace(Prism.highlight(decodeURIComponent(snippets[1].content), Prism.languages.go), 'undefinedundefined', '&lt;HOST&gt;:&lt;PORT&gt;'))+"</code></pre>\n" +
        "            </div>\n" +
        "            <div class=\"tabContentItem\">\n" +
        "              <pre><code>"+(_.replace(Prism.highlight(decodeURIComponent(snippets[2].content), Prism.languages.python), 'undefinedundefined', '&lt;HOST&gt;:&lt;PORT&gt;'))+"</code></pre>\n" +
        "            </div>\n" +
        "            <div class=\"tabContentItem\">\n" +
        "              <pre><code>"+(_.replace(Prism.highlight(decodeURIComponent(snippets[3].content), Prism.languages.clike), 'undefinedundefined', '&lt;HOST&gt;:&lt;PORT&gt;'))+"</code></pre>\n" +
        "            </div>\n" +
        "            <div class=\"tabContentItem\">\n" +
        "              <pre><code>"+(_.replace(Prism.highlight(decodeURIComponent(snippets[4].content), Prism.languages.javascript), 'undefinedundefined', '&lt;HOST&gt;:&lt;PORT&gt;'))+"</code></pre>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "      </div>";
    });
  });
  return {
    sidebarHtml: sidebarHtml,
    pageContentsHtml: pageContentsHtml
  };
};

try {
  // var results = SwaggerSnippet.getSwaggerSnippets(swagger, targets);

  var options = {
    url: swaggerSpecLink,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  request(options, function(error, response, body) {
    if (response && (response.statusCode === 200 || response.statusCode === 201)) {
      if(!error){
        var swaggerHtml = swaggerSuccessCallback(JSON.parse(body));
        const htmlFilePath = path.join(__dirname, 'index_template.html');

        fs.readFile( htmlFilePath, 'utf8', function(err, htmlData){
          if(err){
            console.error(err);
          } else {
            var renderedHtml = htmlData
              .replace('<!-- sidebar_contents -->', swaggerHtml.sidebarHtml)
              .replace('<!-- page_contents -->', swaggerHtml.pageContentsHtml);
            fs.writeFile(path.join(__dirname, 'index.html'), renderedHtml, function(errWrite) {
              if(errWrite) {
                return console.log(errWrite);
              }
              console.log("The file was written!");
            });
          }
        });
      }
    }
  });

} catch (err) {
  console.error(err);
}