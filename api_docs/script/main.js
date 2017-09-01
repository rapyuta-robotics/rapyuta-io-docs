var SwaggerSnippet = window.SwaggerSnippet;
var $ = window.$;
var _ = window._;
var Prism = window.Prism;

var swaggerSpec = null;
var swaggerSpecLink = 'https://device-manager.ep.rapyuta.io/v0/spec';
var targets = ['shell_curl', 'go_native', 'python_python3', 'c_libcurl', 'javascript_xhr'];

var headerHeight = 103;
var windowHeight = $(window).height();
var sidebarHeight;
var $navigationLinks;
var $sections;
// var scrollAdded;
var sectionIdTonavigationLink;

var schemaTypesToPlaceholder = {
  object: '{}',
  string: '"string"',
  array: '[]',
  boolean: '"boolean"',
  integer: '"integer"',
};
var throttle = function(fn, interval){
  var lastCall;
  var timeoutId;
  return function(){
    var now = new Date().getTime();
    if (lastCall && now < (lastCall + interval)) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function(){
        lastCall = now;
        fn.call();
      }, interval - (now - lastCall));
    } else {
      lastCall = now;
      fn.call();
    }
  };
};
var highlightNavigation = function(){
  var scrollPosition = $(window).scrollTop();

  $sections.each(function callback() {
    var currentSection = $(this);
    var sectionTop = currentSection.offset().top;
    if (scrollPosition >= (sectionTop - 100)) {
      var id = currentSection.attr('id');
      var $navigationLink = sectionIdTonavigationLink[id];
      if (!$navigationLink.hasClass('active')) {
        $navigationLinks.removeClass('active');
        $navigationLink.addClass('active');
        // window.location.hash = id;
        // history.replaceState();
        history.replaceState({}, '', "#"+id);
      }
      return false;
    }
    return null;
  });
};

var scrollSidebar = function(){
  var scrollPosition = $(window).scrollTop();
  var scrollDif = (headerHeight + sidebarHeight) - windowHeight;
  if (scrollPosition < headerHeight) {
    $('#sidebar').css('top', (headerHeight - scrollPosition)+"px");
  } else if (scrollPosition < scrollDif) {
    $('#sidebar').css('top', (headerHeight - scrollPosition)+"px");
  } else if (scrollDif > 0) {
    $('#sidebar').css('top', (windowHeight - sidebarHeight)+"px");
  } else {
    $('#sidebar').css('top', '0px');
  }
};
var windowResize = function(){
  windowHeight = $(window).height();
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
      return _.replace(item.url, 'http://undefinedundefined', '');
    }
  );
  $.each(results, function(specKey, resultSpecItem){
    $.each(resultSpecItem, function(resultKey, resultItem){
      var method = resultItem.method;
      var description = resultItem.description;
      var url = resultItem.url;
      var snippets = resultItem.snippets;

      var params = _.groupBy(swaggerSpec.paths[specKey][method.toLowerCase()].parameters, 'in');
      $('#sidebarUl').append(
        "<li>\n" +
        "        <a href=\"#"+method+"_"+specKey+"\">\n" +
        "          <span class=\"methodSpan "+(method.toLowerCase())+"\">"+method+"</span>"+specKey+"\n" +
        "        </a>\n" +
        "      </li>"
      );
      $('#pageContents').append(
        "<div class=\"apiItem\" id=\""+method+"_"+specKey+"\">\n" +
        "        <h3 class=\"apiItemHead\">\n" +
        "        <span class=\"methodSpan "+(method.toLowerCase())+"\">"+method+"</span>"+specKey+"</h3>\n" +
        "        <p class=\"apiDetails\">\n" +
        "          "+(_.replace(url, 'undefinedundefined', '&lt;HOST&gt;:&lt;PORT&gt;'))+"<br />\n" +
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
        "      </div>"
      );
    });
  });

  sidebarHeight = $('#sidebar').height() + 40;

  $navigationLinks = $('#sidebarUl > li > a');
  $sections = $($('.apiItem').get().reverse());
  // scrollAdded = false;
  sectionIdTonavigationLink = {};
  $sections.each(function callback() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $("#sidebarUl>li>a[href=\"#"+id+"\"]");
  });

  if (window.location.hash) {
    var idDiv = document.getElementById(window.location.hash.substr(1));
    if(idDiv){
      $('html, body').animate({
        scrollTop: $(idDiv).offset().top - 50,
      }, 500);
    }
  }


  $(window).scroll(throttle(highlightNavigation, 100));
  // $(window).scroll(scrollSidebar);
  // $(window).on('resize', throttle(windowResize, 100));
  $('#pageContents').on('click', '.tabHeaderItem', function tabClickCallback() {
    var index = $(this).attr('data-id');
    var tabs = $(this).parent().next();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(tabs).children().removeClass('active');
    $(tabs).children().eq(index).addClass('active');
  });
  $($navigationLinks).on('click', function linkClickCallback(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(document.getElementById($(this).attr('href').substr(1))).offset().top - 50,
    }, 500);
  });
};

$(document).ready(function(){
  if(swaggerSpec){
    swaggerSuccessCallback(swaggerSpec);
  } else{
    $.get(swaggerSpecLink, function(response){
      swaggerSuccessCallback(response);
    });
  }
});
