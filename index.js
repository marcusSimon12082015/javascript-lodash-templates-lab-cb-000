function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  debugger;
  var pageFn = _.template(pageTemplate);
  var pageHTML = pageFn;
  pageDiv.innerHTML += pageHTML;

  var postTemplate = document.getElementById('post-template');
}

function postComment(){

}
