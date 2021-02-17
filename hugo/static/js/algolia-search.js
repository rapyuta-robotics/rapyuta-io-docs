
  Number.prototype.number_with_delimiter = function(delimiter) {
    var number = this + '', delimiter = delimiter || ',';
    var split = number.split('.');
    split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + delimiter);
    return split.join('.');
  };
  
  // faceting global variables
  var refinements = {};
  function toggleRefinement(facet, value) {
    var refine = facet + ':' + value;
    refinements[refine] = !refinements[refine];
    search();
  }
  
  // strip HTML tags + keep <em>, <p>, <b>, <i>, <u>, <strong>
  function stripTags(v) {
    return $('<textarea />').text(v).html()
      .replace(/&lt;(\/)?(em|p|b|i|u|strong)&gt;/g, '<$1$2>');
  }
  
  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };
  
  function escapeHTML (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }
  
  function escapeHTMLAttr(str) {
    return str
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&quot;');
  }
  
  //helper attribute multiple (ie: categories)
  function objToString(obj) {
    var str = '';
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str += str === '' ? '' : ' - ';
        str += obj[p];
      }
    }
    return str;
  }
  
  // attribute to skip every time
  var skip = [
    'objectID',
    '_highlightResult'
  ];
  
  // attribute to skip at the end since it can be multi-attribute
  var attributeToSkip = [];
  if ('title' !== ''){
    attributeToSkip.push('title');
  };
  if ('description' !== ''){
    attributeToSkip.push('description');
  };
  if ('content' !== ''){
    attributeToSkip.push('');
  };
  
  // retrieve all keys and remove skipped ones
  function retrieveAllAttributes(hit){
    var i = 0;
    var allkeys = [];
    iterate(hit, '' , allkeys);
    for (var attr in attributeToSkip){
      var s = allkeys.indexOf(attributeToSkip[attr]);
      if(s != -1) {
        allkeys.splice(s, 1);
      }
    }
    return allkeys;
  }
  
  // recursively find keys in object
  function iterate(obj, stack , allkeys) {
    var dot = stack === '' ? '' : '.';
    for (var property in obj) {
      if ( obj.hasOwnProperty(property) && skip.indexOf(property) === -1 ) {
        if (typeof obj[property] === "object") {
          if (Object.prototype.toString.call(obj[property]) === '[object Array]') {
            if (obj[property].length > 0 && typeof obj[property][0] === 'object') {
              iterate(obj[property], stack + dot + property, allkeys);
            } else {
              allkeys.push(stack + dot + property);
            }
          } else {
            iterate(obj[property], stack + dot + property, allkeys);
          }
        } else {
          allkeys.push(stack + dot + property);
        }
      }
    }
  }
  
  function urlMatch(url) {
    var urlRegex = new RegExp(
      "^" +
        // protocol identifier
        "(?:(?:https?|ftp)://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
          // IP address exclusion
          // private & local networks
          "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
          "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
          // host name
          "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
          // domain name
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
          // TLD identifier
          "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
          // TLD may end with dot
          "\\.?" +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
      "$", "i"
    );
  
    return !!String(url).match(urlRegex);
  }
  
  // return attribute or highlighted attribute
  function getAttributeValue(attr_string, hit) {
    var v = getStringAttributeFromObject(attr_string, hit._highlightResult);
    return v ? v : getStringAttributeFromObject(attr_string, hit);
  }
  
  function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  
  // handle attribute from tree
  function getStringAttributeFromObject(attr_string, hit){
    var attr_array = attr_string.split(".");
    var attr = hit;
    $.each(attr_array, function(i){
      attr = attr && attr[attr_array[i]];
    });
    if (!attr) {
      return false;
    }
    if (attr.value) {
      // we're on a highlighted form
      return attr.value;
    }
    if (Object.prototype.toString.call(attr) === '[object Array]') {
      var str = [];
      $.each(attr, function(i, e) {
        if (e && typeof e === 'string') {
          str.push(e);
        } else if (e && e.value) {
          str.push(e.value);
        } else if (e) {
          str.push(objToString(e));
        }
      });
      return str.join(', ');
    }
    if (typeof attr === 'object') {
      attr = objToString(attr);
    }
    return '' + attr;
  }
  
  // function called on each keystroke
  function searchCallback(error, content) {
    if (error) {
      return;
    }
    let query = $("#inputfield input").val().trim();
    if (query === "") {
      // no results or empty query
      $('#stats').empty();
      $('#facets').empty();
      $('#hits').empty();
      return;
    }
    var res = '';


    const hit_tempalte = (hit) => {
      let {url, title, content, tags} = hit
      return `
      <a href="${url}" class="flex-col move-focus">
          <div class="hit flex-col">
            <span class="primary-attribute">${title} </span>
          <div class="flex-col">
            
            <span class="secondary-attribute">${content} </span>
          </div>
          
        </div>
        </a>
          
      `
    }

    const group_template = (tag, hits) => {
      let res = ''
      hit_html = hits.map(x => hit_tempalte(x)).join('')
      return `
      <div class="group-hit flex-row grow">
        <div class="group flex-col flex-2"><span class="ais-tag">${tag} (${hits.length || 0})</span></div>
        <div class="results flex-col flex-10">${hit_html}</div>
      </div>
      `
    } 

    hit_to_dict = hit => {
      var url = stripTags(getStringAttributeFromObject('url',hit));
      var title = stripTags(getAttributeValue('title',hit))
      var content = stripTags(getAttributeValue('content',hit))
      var tags = getAttributeValue('tags',hit)
      return  {url, title, content, tags}
    }


    const empty_template = (query) => `
      <div class="group-hit flex-row grow">
          <div class="group flex-col flex-2"><span class="ais-tag">No results found for query: 
          <span class="primary-attribute">${query}  </span></div>
      </div>
    `
    console.log(content.hits)
    if(content.hits.length == 0) {
       res = empty_template(query);
    }
    else {
      const grouped_results = content.hits
            .map(hit => hit_to_dict(hit))
            .reduce((acc,hit)=> {
              let {url, title, content, tags} = hit
              let tag = tags
              if(tag && tag.trim() === "")
                tag = "Others"
              if(tag === false)
                tag = "Others"
              if(!acc[tag])
                acc[tag] = []
              
              acc[tag].push(hit)
              return acc
            }, {})

      //['Introduction', 'Getting Started', 'How to', 'Deep Dive', 'Tutorials', 'Others'] 
      res = Object.keys(grouped_results)
            .map(category => {
              if(!grouped_results[category])
                return null
              const hits = grouped_results[category]
              return group_template(category, hits)
            })
            .filter(x => x).join('')
      }
    
    $('#hits').html(res);
  }
  
  $(function() {
    var algolia = algoliasearch('F5AKYNMQ5U', 'fe88a1287ebcf1462e5d3774c2009cab');
    var index = algolia.initIndex('rapyuta-docs');
  
    window.search = function() {
      var facetFilters = [];
      for (var refine in refinements) {
        if (refinements[refine]) {
          facetFilters.push(refine);
        }
      }
      index.search($("#inputfield input").val(), {
        hitsPerPage: 10,
        facets: '*',
        maxValuesPerFacet: 10,
        facetFilters: facetFilters
      }, searchCallback);
    }
  
    $("#inputfield input").keyup(function() {
      refinements = {};
      window.search();
    }).focus();
  
    if ($("#inputfield input").val() === '') {
      window.search();
    }
  
    $('#facets').on('click', '.facet-value', function(e) {
      var facetName = $(e.target).attr('data-facet-name');
      var facetNumber = $(e.target).attr('data-facet-index');
      var facet = $('#facets').data(facetName + '-' + facetNumber);
  
      toggleRefinement(facet.name, facet.value);
    });
  }); 
  