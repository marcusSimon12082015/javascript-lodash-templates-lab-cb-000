function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  var pageFn = _.template(pageTemplate);
  var pageHTML = pageFn({'postsTitle': "Matija Posts"});
  pageDiv.innerHTML += pageHTML;

  //get values from form post
  var postTitle = document.getElementById('postTitle').value;
  var postBody = document.getElementById('postBody').value;
  var postAuthor = document.getElementById('postAuthor').value;

  var postTemplate = document.getElementById('post-template').innerHTML;
  var pagePostDiv = document.getElementById('post');
  var postFunction = _.template(postTemplate);
  var postHTML = postFunction({'postTitle':postTitle,'postBody':postBody,'postAuthor': postAuthor});
  pagePostDiv.innerHTML += postHTML;


}

function postComment(){

}
