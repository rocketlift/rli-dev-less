// Destroys the localStorage copy of CSS that less.js creates
// https://gist.github.com/1346280

function destroyLessCache(pathToCss) { // e.g. '/css/' or '/stylesheets/'

  if (!window.localStorage || !less || less.env !== 'development') {
    return;
  }
  var host = window.location.host;
  var protocol = window.location.protocol;
  var keyPrefix = protocol + '//' + host + pathToCss;
  
  for (var key in window.localStorage) {
    if (key.indexOf(keyPrefix) === 0) {
      delete window.localStorage[key];
    }
  }
}

destroyLessCache( '/css/' );
