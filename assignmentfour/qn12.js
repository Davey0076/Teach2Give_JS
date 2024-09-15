12. //Write a JavaScript function to parse an URL.

function parseURL(url) {
    var parser = new URL(url);
    return {
      protocol: parser.protocol,
      hostname: parser.hostname,
      pathname: parser.pathname,
      search: parser.search
    };
  }
  
  console.log(parseURL('https://www.example.com/path?name=value'));
  