function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  debugger;
  var pageFn = _.template(pageTemplate);

  var pageDiv = document.getElementById('page');

  var pageHTML = pageFn;
  pageDiv.innerHTML += pageHTML;
}

function postComment(){

}
