###
Created by Orlando on 29/7/2014.
###
angular.module('MainCtrl', []).controller 'MainController', [
  '$scope'
  '$ionicPopup'
  ($scope, $ionicPopup) ->
    $scope.theText = 'orlando default text'
    $scope.toShare = ->
      window.plugins.socialsharing.share $scope.theText
      return

    $scope.takeScreenshot = ->
      navigator.screenshot.save ((e, r) ->
        if e
          $ionicPopup.alert
            title: 'Error!'
            template: 'Screenshot unsuccessful'

        else
          $ionicPopup.confirm(
            title: 'Screenshot successful'
            template: 'Click OK to share'
          ).then (res) ->
            if res
              window.plugins.socialsharing.share null, null, 'file://' + r.filePath
            else
              $ionicPopup.alert
                title: 'Error!'
                template: 'Could not share'

            return

        return
      ), 'jpg', 50, 'randomScreenshot'
      return
]
