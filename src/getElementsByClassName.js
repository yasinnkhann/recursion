// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];
  var bodyTag = document.body;

  var hasClass = function(elem) {
    if (elem.classList !== undefined) {
      if (elem.classList.contains(className)) {
        result.push(elem);
      }
    }

    elem.childNodes.forEach(function(childNode) {
      hasClass(childNode);
    });
  };

  hasClass(bodyTag);
  // console.log(result);
  return result;
};


// // Alternatively using node's hasChildNodes()
// var getElementsByClassName = function(className) {
//   var bodyTag = document.body;
//   var result = [];

//   var hasClass = function(elem) {
//     if (elem.classList && elem.classList.contains(className)) {
//       result.push(elem);
//     }
//     if (elem.hasChildNodes()) {
//       elem.childNodes.forEach(function(childNode) {
//         hasClass(childNode);
//       });
//     }
//   };

//   hasClass(bodyTag);
//   return result;
// };