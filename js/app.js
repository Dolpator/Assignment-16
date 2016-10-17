console.log('wired up!')
console.log($)

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}


var hashHandler = function(){
var userProfile = window.location.hash.slice(1)

   if(userProfile.length === 0){
      showHomeView()
      return
   }
   console.log(userProfile)
   profilePage(userProfile)
}


var showHomeView = function(){
     var homeStr =   '<div class = "row text-left users-container">'
         homeStr +=     "<h1 >  Whos Watching? </h1>"
      for (var propValue in userList){
         homeStr +=   '<div class = "col-xs-6 col-sm-3 text-center">'
         homeStr +=       '<a href = "#'+ propValue +'">'
         homeStr +=        '<img src="https://flathash.com/' + propValue +'" alt="">'
         homeStr +=        '<h3>'+ userList[propValue].username +'</h3>'
         homeStr +=        '</a>'
         homeStr +=   '</div>'
      }

         homeStr += '</div>'
         appContainer.innerHTML = homeStr;
}


var profilePage = function(usr){
   var userObj = userList[usr]
   var userProfileStr = '<div class ="container">'
       userProfileStr += '<h2> <span class = "bg-primary"> '+ userObj.username + '\'s </span> List </h2>'
       userProfileStr += '<div class="row watch-list"> </div>'
       userProfileStr += '</div>'
       appContainer.innerHTML = userProfileStr

forEach(userObj.showIds, function(showEl){

   $.getJSON("http://api.tvmaze.com/shows/" + showEl ).then(function(returnData){


         var profileContainer = document.querySelector('.watch-list')

         var profileStr =    '<div class = "col-xs-6 col-sm-3">'
             profileStr +=     "<img src ='" + returnData.image.medium + "'>"
             profileStr +=     "<h4>" + returnData.name + "</h4>"
             profileStr +=   '</div>'

   profileContainer.innerHTML += profileStr
         })
      })
}


   var userList = {
      matt: {username: "Matt", showIds: [170,169,175,318,76,270, 255]},
      ed: {username: "Ed", showIds: [5853,431,80,279,570,76,73,20540,83,17119]},
      michelle: {username: "Michelle", showIds: [83,576,735,73,749,170,112,80]},
      justin: {username: "Justin", showIds: [551,169,490,530,73,302, 547, 532]},
   }

   // var showIdEl = function(obj){
   // var queryString = '';
   //
   //    var propName = obj[propValue];
   //    console.log(propName.showIds);
   //    var showIds = propName.showIds;
   //    var userNames = propName.username;
   // }
   //
   // return queryString
   // }

var appContainer = document.querySelector('#app-container')

window.addEventListener('hashchange', hashHandler);
hashHandler()
