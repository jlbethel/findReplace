describe('findReplace', function() {
  it("will take a users string and search for a chosen word in that string. String is one letter long", function () {
    expect(findReplace('a', 'a')).to.equal('a does occur in your string');
  });

  it("will take a users string and search for a chosen word in that string. String is two words long", function () {
    expect(findReplace('the dog', 'dog')).to.equal('dog does occur in your string');
  });
});
