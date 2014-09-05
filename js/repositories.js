$(document).ready(function() {
  var dataxu = new Gh3.User('dataxu');
  var repositories = new Gh3.Repositories(dataxu);
  var source = $('#repository-template').html();
  var template = Handlebars.compile(source);

  $.get('https://api.github.com/users/dataxu/repos', function(data) {
    _.each(data, function(repo) {
      repo.language = repo.language.toLowerCase();
      var html = template(repo);
      $('.repositories').append(html);
    });
  });
});
