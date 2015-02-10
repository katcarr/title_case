var titleCase = function(title) {
  title = title.toLowerCase();
  var wordSplit = title.split(" ");
  var titleProper = [];
  var exceptions = ["a", "an", "the", "at", "by", "for", "in", "of", "on", "to", "and", "as", "but", "it", "or", "nor"]

  wordSplit.forEach(function(word) {
    titleProper.push(word[0].toUpperCase() + word.substr(1));
  });

  return titleProper.join(" ");
}
