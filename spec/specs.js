describe("titleCase", function(){
  it("capitalize the first letter of a word", function(){
    expect(titleCase("dog")).to.equal("Dog");
  });

  it("converts a word in all uppercase to title case", function() {
    expect(titleCase("DOG")).to.equal("Dog");
  });

  it("capitilizes the first letter in each word of a two word title", function(){
    expect(titleCase("blue dog")).to.equal("Blue Dog");
  });

  it("will not capitalize exception words", function() {
    expect(titleCase("blue the dog")).to.equal("Blue the Dog");
  });
});
