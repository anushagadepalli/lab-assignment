    describe("qrcode", function() {
        beforeEach(module('QRCode'));
        
        var $controller;
        
        beforeEach(inject(function function_name (_$controller_) {
            $controller = _$controller_;
        }));
        
        describe('qrcode' , function() {
            it('tests the login name', function() {
                var $scope = {};
                var controller = $controller('qrcode', {$scope: $scope});
                expect($scope.username).toEqual('admin');
            });
        });
        
        describe('qrcode' , function() {
                 it('tests the length of the id number', function() {
                     var $scope = {};
                     var controller = $controller('qrcode',{$scope: $scope});
                     expect(($scope.idno.length).toEqual('8'));
            });
        });
      