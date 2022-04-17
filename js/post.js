function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += "<p style='background-color:white; margin-top:20px; padding-top:15px; height:auto;'>"+addEventName+'</p>';          
    a.value=a.defaultValue;
}
//Enter your code here
var like = 0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML='<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked!';
    like = like+1;
    if(like == 1){
        document.getElementById("commentCount").innerHTML=1 + " person likes this!";
    }
    else{
        document.getElementById("commentCount").innerHTML=like + " people have liked this!";
    }
    
    
}

