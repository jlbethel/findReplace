describe('findReplace', function() {
  //questions for Dianne. Are these first two tests silly from a BDD stand point? I have to comment them out as I add functionality. I decided to leave them commented out rather than remove them so I remember to ask you.
  // it("will take a users string and search for a chosen word in that string. String is one letter long", function () {
  //   expect(findReplace('a', 'a')).to.equal('a does occur in your string');
  // });
  //
  // it("will take a users string and search for a chosen word in that string. String is two words long", function () {
  //   expect(findReplace('the dog', 'dog')).to.equal('dog does occur in your string');
  // });

  it("will look for a word in the user's string, find that it does not occur, and return appropriate response", function () {
    expect(findReplace('the dog', 'cat')).to.equal('cat does not occur in your string');
  });

  it("will look for a word in user's string, if present, will replace it with user's chosen word", function() {
    expect(findReplace('the dog', 'dog', 'cat')).to.equal('the cat');
  });

  it("will look for a word in a user's string, will find multiple instances of it, ane replace them all with the user's chosen word", function () {
    expect(findReplace('the dog met the other dog and wagged her tail', 'dog', 'cat')).to.equal('the cat met the other cat and wagged her tail');
  });

  it("will ignore case", function() {
    expect(findReplace('The Dog met the other dog and wagged her tail.', 'dog', 'cat')).to.equal('The cat met the other cat and wagged her tail.');
  });
  it("will ignore punctuation", function() {
    expect(findReplace('The dog is a dog.', 'dog', 'cat')).to.equal('The cat is a cat.');
  });
});
