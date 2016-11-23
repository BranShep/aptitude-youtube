angular.module('aptitude-test').controller('mainCtrl', function($scope, mainService, $sce){

  $scope.test = 'Hello angular';

  $scope.getVideos = function(search) {
    console.log(search);
    mainService.getVideos(search).then(function(response){
      $scope.videos = response.data.items;
      console.log($scope.videos);
    });
  }

  $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }


  $scope.playVideo = function(id) {
    console.log(id);
    $scope.videoId = "https://www.youtube.com/embed/" + id;
  }

  $scope.getLanguages = function() {
    mainService.getLanguages().then(function(response){
      $scope.languages = response.data;
      console.log($scope.languages);
    });
  }

  $scope.getLanguages();


$scope.videos;

//javascript http GET request to pull data from youtube api
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://www.googleapis.com/youtube/v3/search?part=snippet&q=lingotek&maxResults=10&type=video&videoCaption=closedCaption&key=AIzaSyCkFJ3H_h8b6QfMr3DXkdtn2jv3r3yC_dI", true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      $scope.videos = JSON.parse(xhr.responseText);
      $scope.videos = $scope.videos.items
      console.log($scope.videos);
    }
  }



//javascript http GET request to lingotek site
  var poo = new XMLHttpRequest();
  poo.open('GET', "http://gmc.lingotek.com/language", true);
  poo.send();
  poo.addEventListener("readystatechange", processLanguage, false);

  function processLanguage(e) {
    if (poo.readyState == 4 && poo.status == 200) {
      $scope.response = JSON.parse(poo.responseText);
      console.log($scope.response);
    }
  }



});
