console.log('wired up!')
console.log($)

// var forEach = function(arr, cb){
//    for(var i = 0 ; i < arr.length; i+=1){
//       cb(arr[i], i, arr)
//    }
// }

var watchedContainer = document.querySelector('.watch-list');



// var userList = {
//    matt: {username: "Matt", showIds: [170,169,175,318,76,270, 255]},
//    ed: {username: "Ed", showIds: [5853,431,80,279,570,76,73,20540,83,17119]},
//    michelle: {username: "Michelle", showIds: [83,576,735,73,749,170,112,80]},
//    justin: {username: "Justin", showIds: [551,169,490,530,73,302, 547, 532]},
// }

// movieData = function(returnData){
//    console.log(returnData)
// }

var hashHandler = function(){

     var homeStr ='<div class = "col-md-3">'
         homeStr +='<a href="#matt" class="text-center thumbnail profile"><img src="https://flathash.com/matt">Matt</a>'
         homeStr +='</div>'
         homeStr +='<div class = "col-md-3">'
         homeStr +='<a href="#ed" class="text-center thumbnail profile"><img src="https://flathash.com/ed">Ed</a>'
         homeStr +='</div>'
         homeStr +='<div class = "col-md-3">'
         homeStr +='<a href="#michelle" class="text-center thumbnail profile"><img src="https://flathash.com/michelle">Michelle</a>'
         homeStr +='</div>'
         homeStr +='<div class = "col-md-3">'
         homeStr +='<a href="#justin" class="text-center thumbnail profile"><img src="https://flathash.com/justin">Justin</a>'
         homeStr +='</div>'


    watchedContainer.innerHTML += homeStr;

   window.addEventListener('hashchange', hashHandler);

}
//$.getJSON(' http://www.tvmaze.com/api/').then(movieData)
