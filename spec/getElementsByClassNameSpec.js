var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv">'
  + '<span class="targetClassName">yay</span>'
  + '</div></div></div>',
  '<div class="container"><div class="targetClassName randomClass"></div></div>',
  '<div class="paragraph text targetClassName"><p class="intro targetClassName">text!</p></div>'
];

describe('getElementsByClassName', function() {

  describe('should match the results of calling the built-in function', function() {
    htmlStrings.forEach(function(htmlString, index) {
      it(htmlString, function() {
        if (index % 2 === 0) {
          $('body').addClass('targetClassName');
        }
        var $rootElement = $(htmlString);
        $('body').append($rootElement);

        var result = getElementsByClassName('targetClassName');
        var expectedNodeList = document.getElementsByClassName('targetClassName');
        var expectedArray = Array.prototype.slice.apply(expectedNodeList);
        var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
        
        expect(equality).to.equal(true);

        $('body').removeClass('targetClassName');
        $rootElement.remove();
      });
    });
  });

});
