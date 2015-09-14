// describe('isATriangle', function() {
//
//   it("returns false when not a triangle", function() {
//     expect(isATriangle(2,1,8)).to.equal(false);
//   });
//
// });

describe('cryptosquare', function() {

  it("removes punctuation and capitalization", function() {
    expect(cryptosquare("My Butt\'s on fire!!!\"\"")).to.equal("my butts on fire");
  });

  it("split turns it into an array", function() {
    expect(cryptosquare("my butts on fire")).to.equal(13);
  });



});
