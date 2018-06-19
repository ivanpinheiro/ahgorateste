app.controller('youtubeController', function($scope,$http,$filter) {
$scope.diaSemana = [
    {dia:'Segunda-feira'},
    {dia:'Terça-feira'},
    {dia:'Quarta-feira'},
    {dia:'Quinta-feira'},
    {dia:'Sexta-feira'},
    {dia:'Sábado'},
    {dia:'Domingo'}
];
 $scope.youtubeData = [];
    $scope.nextPage = "";
    $scope.duration = "";
    $scope.youtubeSearchText = "";
    $scope.getYoutubeData = function(searchText){
        $scope.durationVideo= [];
        console.log(searchText);
        $http.get('https://www.googleapis.com/youtube/v3/search', {
           params: {
                key: "AIzaSyA3c2Vg24IZdrZR3Pdaxx_t4rpkNcrplI4",
                type: 'video',
                maxResults: '12',
                pageToken: $scope.nextPage ? $scope.nextPage : '',
                part: 'snippet,id',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
                q: searchText
            }
        }).success( function (data) {
            console.log(data);
            if (data.items.length === 0) {
                $scope.youtubeData = 'Não foram encontrados resultados!';
            }
            angular.forEach(data.items, function(value, key){
                console.log(value.id.videoId);
        //        $scope.durationVideo = $scope.getVideoDuration(value.id.videoId); 
                //$scope.videoDuration = $scope.getVideoDuration(value.id.videoId);
                console.log($scope.getVideoDuration(value.id.videoId));         

            });
            console.log($scope.videoDuration);         
            $scope.youtubeSearchText = searchText;
            $scope.youtubeData = data.items;
            $scope.nextPageToken = data.nextPageToken;
            $scope.prevPageToken = data.prevPageToken;
        });
    };
    
    $scope.getVideoDuration = function(paramTeste){
        $http.get('https://www.googleapis.com/youtube/v3/videos', {
           params: {
                key: "AIzaSyA3c2Vg24IZdrZR3Pdaxx_t4rpkNcrplI4",
                id: paramTeste,
                part: 'contentDetails',
        }
        }).then(function(response) {
            $scope.videoDuration = response;
        },
        function(err){
            return err; // Wrong
        }); 
    };


    $scope.checkDataLength = function(data){
        return (data.length >=1);
    };

    $scope.callNextPageFn = function(nextPage){
        $scope.nextPage = nextPage;
        $scope.getYoutubeData($scope.youtubeSearchText);
    };

});