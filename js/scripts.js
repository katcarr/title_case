var titleCase = function(title) {
  var wordSplit = title.toLowerCase().split(" ");
  var titleProper = [];
  var index = 0;
  var exceptions = ["a", "an", "the", "at", "by", "for", "in", "of", "on", "to", "and", "as", "but", "it", "or", "nor"];

  wordSplit.forEach(function(word) {
    if ((exceptions.indexOf(word) === -1) || (index === 0)) {
      titleProper.push(word[0].toUpperCase() + word.substr(1));
      index += 1;
    } else {
      titleProper.push(word);
      index += 1;
    }
  });
  return titleProper.join(" ");
}

  $(document).ready(function() {
    $("form#title-form").submit(function(event) {
      var title = $("input#title").val();
      var result = titleCase(title);

      $(".transform").text(result);

      $("#result").show();
      event.preventDefault();
    });
  });
