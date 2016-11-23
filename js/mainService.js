angular.module('aptitude-test').service('mainService', function($http){

  this.getVideos = function(search){
    return $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search + "&chart=mostPopular&maxResults=10&type=video&videoCaption=closedCaption&key=AIzaSyCkFJ3H_h8b6QfMr3DXkdtn2jv3r3yC_dI").then(function(response){
      console.log(response);
      return response;
    });
  };

  this.getLanguages = function(search){
    return $http.get("http://gmc.lingotek.com/language").then(function(response){
      console.log(response);
      return response;
    });
  };

});
