function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  var pageFn = _.template(pageTemplate);
  var pageHTML = pageFn({'postsTitle': "Matija Posts"});
  pageDiv.innerHTML += pageHTML;

  //get values from form post
  

}

function postComment(){

}
