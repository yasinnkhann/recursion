// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var str = '';
    obj.forEach(function(item) {
      str += stringifyJSON(item) + ',';
    });
    var ans = '[' + str.slice(0, str.length - 1) + ']';
    return ans;
  }

  if (!Array.isArray(obj) && typeof obj === 'object') {
    var str = '';
    for (var key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
        str += (stringifyJSON(key) + ':' + stringifyJSON(obj[key])) + ',';
      }
    }

    var ans = '{' + str.slice(0, str.length - 1) + '}';
    console.log(ans);
    return ans;
  }
};
