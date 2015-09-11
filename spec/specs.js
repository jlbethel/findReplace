describe('findReplace', function() {
  it("will take a users string and search for a chosen word in that string. String is one letter long", funciton () {
    expect(findReplace('a', 'a')).to.equal('a does occur in your string');
  })
});
