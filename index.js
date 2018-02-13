function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  var pageFn = _.template(pageTemplate);
  var pageHTML = pageFn;
  pageDiv.innerHTML += pageHTML;

}

function postComment(){

}
