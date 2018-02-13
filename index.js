function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  debugger;
  var pageFn = _.template(pageTemplate);


  var pageHTML = pageFn;
  pageDiv.innerHTML += pageHTML;
}

function postComment(){

}
