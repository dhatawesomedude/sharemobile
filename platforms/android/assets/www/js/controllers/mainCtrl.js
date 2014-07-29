/**
 * Created by Orlando on 29/7/2014.
 */

angular.module('MainCtrl', [])
    .controller('MainController',['$scope', '$ionicPopup', function($scope, $ionicPopup)
    {
        $scope.theText = 'orlando default text';
        $scope.toShare = function(){

            window.plugins.socialsharing.share($scope.theText);

         };

        $scope.takeScreenshot = function(){

            navigator.screenshot.save(function(e, r){
                if(e){
                    $ionicPopup.alert({title:'Error!', template:'Screenshot unsuccessful'});


                }
                else
                {
                    //$ionicPopup.alert({title:'Success!', template:'Screenshot saved'})
                    $ionicPopup.confirm({title: 'Screenshot successful', template:'Click OK to share'})
                        .then(function(res){
                            if (res){
                                var html = '<img style="width:50%;" src="'+r.URI+'">';
                                window.plugins.socialsharing.share(null, null, 'file://'+r.filePath);
                            }
                            else
                            {
                                $ionicPopup.alert({title:'Error!', template:'Couldn not share'});
                            }
                        })
                }
            }, 'jpg', 50, 'randomScreenshot');


        }

    }

    ]);