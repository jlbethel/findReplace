describe('findReplace', function() {
  //questions for Dianne. Are these first three tests silly from a BDD stand point? I have to modify them to match my changing funtion
  it("will take a users string and search for a chosen word in that string. String is one letter long", function () {
    expect(findReplace('a', 'a')).to.equal('a does occur in your string');
  });

  it("will take a users string and search for a chosen word in that string. String is two words long", function () {
    expect(findReplace('the dog', 'dog')).to.equal('dog does occur in your string');
  });

  it("will look for a word in the user's string, find that it does not occur, and return appropriate response", function () {
    expect(findReplace('the dog', 'cat')).to.equal('cat does not occur in your string');
  });

  it("will lood for a word in user's string, if present, will replace it with user's chosen word", function() {
    expect(findReplace('the dog', 'dog', 'cat')).to.equal('the cat');
  });
});
