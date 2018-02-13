function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  var pageFn = _.template(pageTemplate);
  var pageHTML = pageFn;
  pageDiv.innerHTML += pageHTML;
  //debugger;



  var postTemplate = document.getElementById('post-template');

}

function postComment(){

}
