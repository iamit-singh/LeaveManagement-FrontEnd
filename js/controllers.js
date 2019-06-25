var lmApp = angular.module('lmController',[]);

//a1.controller('LoginController', function($scope, $http, $window,  $rootScope) {
//    $scope.user = {};
//    $scope.loginUser = function() {
//        $http({
//            method : 'POST',
//            url : 'http://localhost:8080/TechFestAJ/auth/login',
//            data : $scope.user
//        }).then(function (response) {
//            $rootScope.isLogin=true;
//            $window.sessionStorage['token'] =response.data.token;
//            console.log(response.data.token);
//            $window.location.href = '/TechFestClient/index.html#/add_event';
//      }, function errorCallback(response) {
//            console.log("err");
//            console.log($scope);
//          $scope.err="Invalid info!";
////          $window.location.href = '/NetBeansTechFestClient/index.html#/login';
//       });
//    };
//});

lmApp.controller('LoginSignupController', function($scope, $http , $window, $rootScope){
    
    if($rootScope.isLogin){
        
        if($rootScope.isForAS){
            $window.location.href = '/NetBeans/LeaveManagement/index.php#/home';
        }else{
            $window.location.href = '/NetBeans/LeaveManagement/index.php#/notification2';
        }
    };
    
    
    
    $scope.user1 ={};
    $scope.user ={};
    
    $scope.success_alert = function() {};
    $scope.success_alert.msg = function(message) {
                $('#sAlert_placeholder').html('<div class="alert alert-success alert-dismissable fade in text-center"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
            };

    $scope.loginErr_alert = function() {};
    $scope.loginErr_alert.msg = function(message) {
                $('#eLAlert_placeholder').html('<div class="alert alert-danger text-center"><span>'+message+'</span></div>');
            };
    
    $scope.submitErr_alert = function() {};
    $scope.submitErr_alert.msg = function(message) {
                $('#eSAlert_placeholder').html('<div class="alert alert-danger text-center"><span>'+message+'</span></div>');
            };
            
    $scope.submitErr_alert.reset = function() {
                $('#eSAlert_placeholder').html('');
            };
    
    
    $scope.loginUser = function(){
        $http({
            method : 'POST',
            url : 'http://localhost:8080/LeaveMngmt/auth/login/',
            data : $scope.user1
        }).then(function (response){
            $rootScope.isLogin=true;
            $scope.rsp = response.data.resp;
            //$window.sessionStorage['token'] = $scope.rsp.token; 
            localStorage.setItem('usereid', $scope.user1.eid);
            localStorage.setItem('designation', $scope.rsp.designation);
            localStorage.setItem('fRank',$scope.rsp.fRank);
            localStorage.setItem('token', $scope.rsp.token);
            localStorage.setItem('timestamp', new Date());
            if(localStorage.fRank ==1){
                $rootScope.isForAS = true;
                $window.location.href = '/NetBeans/LeaveManagement/index.php#/home';
            }else{
                localStorage.setItem('gB', false);
                $rootScope.isForAS = false;
                $window.location.href = '/NetBeans/LeaveManagement/index.php#/notification2';
            };
            
        }, function (response){
            $scope.loginErr_alert.msg(response.data.msg);
        });
    };
    $scope.branch = ["Applied Geology","Architecture","Bio Medical Engineering","Bio Technology","Chemical Engineering","Civil Engineering","Computer Science and Engineering","Department of Chemistry","Department of Mathematics","Department of Physics","Department of Humanities & Social Science","Electrical Engineering","Electronics & Telecom. Engineering","Information Technology","Master in Computer Application","Mechanical Engineering","Mining Engineering","Metallurgical Engineering","Workshop"];
    $scope.des = ["Administrative Staff","Faculty","HOD","Registrar","Director"];
    
    
    $scope.checkDes = function(){
        if( $scope.user.designation === "Registrar" || $scope.user.designation === "Director" || $scope.user.designation === "Administrative Staff"){
            $scope.is_RorD = true;
            $scope.user.department = "";
        }else{
            $scope.is_RorD = false;
        };
    };
    
    
    $scope.signupUser = function(){
       
        
        if($scope.user.mno !=null && ($scope.user.mno.toString().length !== 0 && $scope.user.mno.toString().length !== 10)){
            $scope.submitErr_alert.msg('Mobile number should be of 10 digits');
            return;
        };
        
        if($scope.user.password.length < 5){
            $scope.submitErr_alert.msg('Password must be of 5 characters');
            return;
        }
        
        if($scope.user.eid.length > 10){
            $scope.submitErr_alert.msg('EmployeeID must be less than 10 characters');
            return;
        }
        
        if($scope.user.password !== $scope.repwd){
            $scope.submitErr_alert.msg('Retyped password not matched!');
            return;
        }
        
       $http({
            method : 'POST',
            url : 'http://localhost:8080/LeaveMngmt/auth/signup/',
            data : $scope.user
        }).then(function (response){
            $scope.success_alert.msg(response.data.msg);
            $window.scrollTo(0, 0);
            $scope.reset();
        }, function (response){
            $scope.submitErr_alert.msg(response.data.msg);
        }); 
       
    };
    
    $scope.reset = function(){
        $scope.user = {};
        $scope.repwd = "";
        $scope.submitErr_alert.reset();
    };
    
});


lmApp.controller('HomeController',function($scope, $http, $rootScope, $window){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    if(!$rootScope.isForAS){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/notification2';
    }

      $scope.app = {};
      $scope.tp =[];
      $scope.faculties = [];
      $scope.fac = {};
      $scope.selectedFac = {};
      $scope.rep ={};
      $scope.allFac = [];
      $scope.ar = [];
      $scope.repSubmitSccessMsg = "";
      
      
      $scope.appSubErr_alert = function() {};
      $scope.appSubErr_alert.msg = function(message) {
                $('#appSubmitErr_placeholder').html('<div class="alert alert-danger text-center"><span>'+message+'</span></div>');
            };
      $scope.appSubErr_alert.reset = function() {
                $('#appSubmitErr_placeholder').html('');
            };
      
      $scope.appSubSuccess_alert = function() {};
      $scope.appSubSuccess_alert.msg = function(message) {
                $('#appSubmitSuccess_placeholder').html('<div class="alert alert-success alert-dismissable fade in text-center"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
            };      
      $scope.appSubSuccess_alert.reset = function(message) {
                $('#appSubmitSuccess_placeholder').html('');
            };
            
      $scope.repSubErr_alert = function() {};
      $scope.repSubErr_alert.msg = function(message) {
                $('#repSubmitErr_placeholder').html('<div class="alert alert-danger text-center"><span>'+message+'</span></div>');
            };
      $scope.repSubErr_alert.reset = function() {
                $('#repSubmitErr_placeholder').html('');
            };
            
      $scope.repSubSuccess_alert = function() {};
      $scope.repSubSuccess_alert.msg = function(message) {
                $scope.repSubmitSccessMsg = $scope.repSubmitSccessMsg +" "+ message;
                $('#repSubmitSuccess_placeholder').html('<div class="alert alert-success fade in text-center"><span>'+$scope.repSubmitSccessMsg+'</span></div>');
            };      
      $scope.repSubSuccess_alert.reset = function() {
                $scope.repSubmitSccessMsg = "";
                $('#repSubmitSuccess_placeholder').html('');
            };
      
      
    
    
    
    $http.get("http://localhost:8080/LeaveMngmt/leave/"+localStorage.usereid)
            .then( function(response){
                $scope.ar = response.data.resp;
            });
            
            
      
      
    var dp1 = $("#datePicker1");
    var dp2 = $("#datePicker2");
    var dp3 = $("#datePicker3");
    var dp4 = $("#datePicker4");
    
    $scope.stdate = function(){
        var d = new Date().getTime();
        d+=86400000;
        var p = new Date(d);
        var s = p.getMonth()+1;
        var date = p.getFullYear()+"-"+s+"-"+p.getDate();
        return date;
    };
            
    dp1.datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        startDate: $scope.stdate(),
        daysOfWeekDisabled: [0,6]
    }).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        dp2.datepicker('setStartDate', minDate);
        dp3.datepicker('setStartDate', minDate);
        dp4.datepicker('setStartDate', minDate);
    });

    dp2.datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        daysOfWeekDisabled: [0,6]
    }).on('changeDate', function (selected) {
        var maxDate = new Date(selected.date.valueOf());
        dp1.datepicker('setEndDate', maxDate);
        dp3.datepicker('setEndDate', maxDate);
        dp4.datepicker('setEndDate', maxDate);
    });
    
    
    dp3.datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        daysOfWeekDisabled: [0,6]
    });
     
    dp4.datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
        daysOfWeekDisabled: [0,6]
    });
    
    
      $scope.init = function () {
          $scope.reset();
          $scope.done = false;
          $scope.repSubSuccess_alert.reset();
          $scope.appSubSuccess_alert.reset();
          
          $scope.rleave = true;
          var k =0;
            for(var i=0;i<5;i++){
                if($scope.ar[i].available>0){
                    $scope.tp[k++] = $scope.ar[i].type;
                };
            };
            
            $scope.leaveForm = true;
      };
      
      $scope.getNoOfDays = function(x,y){
          var p = new Date(x);
          var q = new Date(y);
          
          var d1 = p.getTime();
          var d2 = q.getTime();
          
          var d = (d2-d1)/86400000 + 1;
          
          var m = parseInt(d/7);
          var n = (d/7);
          
          d = parseInt(d/7)*5;
          
          if(p.getDay()>q.getDay() && m!=n){
              d = d+ q.getDay() - p.getDay() + 6;
          }else{
              d = d+ q.getDay() - p.getDay() + 1;
          };
          return d;
      };
      
      $scope.submitApplication = function(){
          if($scope.app.type_of_leave == null){
              $scope.appSubErr_alert.msg('Type of leave field should not be empty');
              return;
          };
          
          if($scope.app.from_date == null){
              $scope.appSubErr_alert.msg('From date field should not be empty');
              return;
          };
          
          if($scope.app.to_date == null){
              $scope.appSubErr_alert.msg('To date field should not be empty');
              return;
          };
          
          $scope.app.days = $scope.getNoOfDays($scope.app.from_date,$scope.app.to_date);
          
          for(var i=0;i<5;i++){
                if($scope.ar[i].type === $scope.app.type_of_leave){
                    $scope.app.available = $scope.ar[i].available;
                    break;
                };
          };
          
          if($scope.app.days>$scope.app.available){
              $scope.appSubErr_alert.msg($scope.app.days + " days "+ $scope.app.type_of_leave +" leave not available!");
              return;
          };
          
          
          var today = new Date();
          var d = today.getMonth()+1;
          $scope.app.apply_date = today.getFullYear()+"-"+d+"-"+today.getDate();
          
            $http({
                method : 'POST',
                url : 'http://localhost:8080/LeaveMngmt/application/',
                data : $scope.app
            }).then(function (response){
                $scope.app.application_id = response.data.resp.application_id;
                $scope.appSubSuccess_alert.msg(response.data.msg);
                $scope.leaveForm = false;
                $scope.replacementForm = true;
                $scope.appSubErr_alert.reset();
                $scope.initRep();
            }, function (response){
                $scope.appSubErr_alert.msg(response.data.msg);
            }); 
          
      };
      
      $scope.reset = function(){
          $scope.app = {};
          $scope.appSubErr_alert.reset();
      };


    $http.get("http://localhost:8080/LeaveMngmt/profile/all/")
            .then( function(response){
                $scope.allFac = response.data.resp;
                for(var i=0;i<$scope.allFac.length;i++){
                    if($scope.allFac[i].eid !== localStorage.usereid){
                        $scope.fac.label = $scope.allFac[i].fname +" "+ $scope.allFac[i].lname +" ("+$scope.allFac[i].eid+")";
                        $scope.fac.eid = $scope.allFac[i].eid;
                        $scope.faculties.push(angular.copy($scope.fac));
                    };
                };
            });
    
            
    $scope.initRep = function () {
            $scope.resetRep();
            $scope.replacementForm = true;
      };

    $scope.submitRep = function(){
          if($scope.selectedFac.label == null){
              $scope.repSubErr_alert.msg('Faculty field should not be empty');
              return;
          };
          
          if($scope.rep.from_date == null){
              $scope.repSubErr_alert.msg('From date field should not be empty');
              return;
          };
          
          if($scope.rep.to_date == null){
              $scope.repSubErr_alert.msg('To date field should not be empty');
              return;
          };
          
          var d1 = new Date($scope.rep.from_date).getTime();
          var d2 = new Date($scope.rep.to_date).getTime();
          
          if(d1>d2){
              $scope.repSubErr_alert.msg('From date is after To date!');
              return;
          };
          
          $scope.rep.days = $scope.getNoOfDays($scope.rep.from_date,$scope.rep.to_date);
          
          $scope.rep.application_id = $scope.app.application_id;
          $scope.rep.surrogate_eid = $scope.selectedFac.eid;
          
          $http({
                method : 'POST',
                url : 'http://localhost:8080/LeaveMngmt/replacement/',
                data : $scope.rep
            }).then(function (response){
                $scope.repSubSuccess_alert.msg(response.data.msg);
                $scope.resetRep();
            },function (response){
                $scope.repSubErr_alert.msg(response.data.msg);
            });
        
    };
    
    $scope.resetRep = function(){
        $scope.selectedFac = {};
        $scope.rep = {};
        $scope.repSubErr_alert.reset();
        
    };
    
    $scope.doneRep = function(){
        $scope.rep = {};
        $scope.app = {};
        $scope.repSubErr_alert.reset();
        $scope.replacementForm = false;
        $scope.done = true;
        $scope.rleave = false;
    };
    
});


lmApp.controller('NtfController',function($scope, $rootScope, $http, $window){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    if(!$rootScope.isForAS){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/notification2';
    }
    
    $scope.arr = {};
    $http({
        method : 'GET',
        url : 'http://localhost:8080/LeaveMngmt/notification/'
    }).then(function (response){
        $scope.arr = response.data.resp;
        if($scope.arr.length == 0){
            $scope.isNew = false;
        }else{
            $scope.isNew = true;
        };
    });

    $scope.getDetail = function(){
        $window.location.href = "/NetBeans/LeaveManagement/index.php#/details/"+ this.it.application.application_id;
    };
    
});

lmApp.controller('DetController',function($scope, $rootScope, $window, $http, $routeParams){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    if(!$rootScope.isForAS){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/notification2';
    }
    
    $scope.appId = $routeParams.appId;
    $scope.app = {};
    
    $http({
        method : 'GET',
        url : "http://localhost:8080/LeaveMngmt/application/appId/"+$scope.appId
    }).then(function (response){
        $scope.app = response.data.resp;
    });
    
    $http({
        method : 'GET',
        url : "http://localhost:8080/LeaveMngmt/replacement/" + $scope.appId
    }).then(function (response){
        $scope.rep = response.data.resp;
        if($scope.rep.length!==0){
            $scope.isRep = true;
        };
    });
    
});

lmApp.controller('NtfController2',function($scope, $rootScope, $http, $window){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    if($rootScope.isForAS){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/home';
    }
    
    $scope.arr = {};
    
    localStorage.gB = "false";
    
    $http({
        method : 'GET',
        url : 'http://localhost:8080/LeaveMngmt/notification/'
    }).then(function (response){
        $scope.arr = response.data.resp;
        if($scope.arr.length == 0){
            $scope.isNew = false;
        }else{
            $scope.isNew = true;
        };
    });

    $scope.getDetail = function(){
        $window.location.href = "/NetBeans/LeaveManagement/index.php#/details2/"+ this.it.application.application_id +"/"+ this.it.notification.notification_id;
    };
    
});

lmApp.controller('DetController2',function($scope, $rootScope, $http, $window, $routeParams){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    if($rootScope.isForAS){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/home';
    }
    
    $scope.appId = $routeParams.appId;
    $scope.app = {};
    $scope.fac = {};
    $scope.ar = {};
    $scope.rep = {};
    $scope.ntf = {};
    
    
    if(localStorage.gB == "false"){
        $scope.goBack = false;
    }else{
        $scope.goBack = true;
    }
    
    $scope.success_alert = function() {};
    $scope.success_alert.msg = function(message) {
                $('#Alert_placeholder').html('<div class="alert alert-success text-center"><span>'+message+'</span></div>');
            };
    
    $scope.ntf.notification_id = $routeParams.ntfId;
    
    $http({
        method : 'GET',
        url : "http://localhost:8080/LeaveMngmt/application/appId/"+$scope.appId
    }).then(function (response){
        $scope.app = response.data.resp;
        
        $http({
            method : 'GET',
            url : "http://localhost:8080/LeaveMngmt/leave/" + $scope.app.eid
        }).then(function (response){
            $scope.ar = response.data.resp;
        });
        
        $http({
            method : 'GET',
            url : "http://localhost:8080/LeaveMngmt/profile/" + $scope.app.eid
        }).then(function (response){
            $scope.fac = response.data.resp;
        });
    });
    
    $http({
        method : 'GET',
        url : "http://localhost:8080/LeaveMngmt/replacement/" + $scope.appId
    }).then(function (response){
        $scope.rep = response.data.resp;
        if($scope.rep.length!==0){
            $scope.isRep = true;
        };
    });
    
    $scope.grant = function(){
        $scope.des = localStorage.designation;
        $scope.ntf.designation = $scope.des;
        
        if($scope.des == 'HOD'){
            $scope.app.status = "Approved by HOD, Waiting for Director's approval";
        }else if($scope.des == 'Director'){
            $scope.app.status = "Approved by Director, Leave Granted";
        }else if($scope.des == 'Registrar'){
            $scope.app.status = "Approved by Registrar, Leave Granted";
        };
        
        $http({
            method : 'PUT',
            url : "http://localhost:8080/LeaveMngmt/application/" + $scope.appId,
            data : $scope.app
        }).then(function (response){
            $scope.ntf.recipient_designation = "";
            $scope.ntf.recipient_eid = "";
            $scope.ntf.application_id = $scope.appId;
            $scope.ntf.sender_eid = $scope.app.eid;
            
            $http({
            method : 'PUT',
            url : "http://localhost:8080/LeaveMngmt/notification/",
            data : $scope.ntf
            }).then(function (response){
                $scope.success_alert.msg("You approved the application, response has been sent.");
                $scope.goBack = true;
                localStorage.gB = true;
            });
        });
        
    };
    
    $scope.decline = function(){
        $scope.des = localStorage.designation;
        $scope.ntf.designation = $scope.des;
        
        if($scope.des == 'HOD'){
            $scope.app.status = "Declined by HOD, Leave Canceled";
        }else if($scope.des == 'Director'){
            $scope.app.status = "Declined by Director, Leave Canceled";
        }else if($scope.des == 'Registrar'){
            $scope.app.status = "Declined by Registrar, Leave Canceled";
        };
        
        $http({
            method : 'PUT',
            url : "http://localhost:8080/LeaveMngmt/application/" + $scope.appId,
            data : $scope.app
        }).then(function (response){
            $scope.ntf.recipient_designation = "";
            $scope.ntf.recipient_eid = "";
            $scope.ntf.application_id = $scope.appId;
            $scope.ntf.sender_eid = $scope.app.eid;
            
            $http({
            method : 'PUT',
            url : "http://localhost:8080/LeaveMngmt/notification/",
            data : $scope.ntf
            }).then(function (response){
                $scope.success_alert.msg("You declined the application, response has been sent.");
                $scope.goBack = true;
                localStorage.gB = true;
            });
        });
        
    };

    
});

lmApp.controller('LogoutController',function($window, $rootScope){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    localStorage.removeItem('usereid');
    localStorage.removeItem('designation');
    localStorage.removeItem('fRank');
    localStorage.removeItem('token');
    localStorage.removeItem('timestamp');
    localStorage.removeItem('gB');
    $rootScope.isLogin = false;
    
    $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
});

lmApp.controller('ProfileController', function($scope, $rootScope, $window, $http){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    if(localStorage.designation == "Director" || localStorage.designation == "Registrar" || localStorage.designation == "Administrative Staff"){
        $scope.doShow = false;
    }else{
        $scope.doShow = true;
    };
    
    $http({
        method : 'GET',
        url : "http://localhost:8080/LeaveMngmt/profile/" + localStorage.usereid
    }).then(function (response){
            $scope.fac = response.data.resp;
    });
    
    
    $scope.err_alert = function() {};
    $scope.err_alert.msg = function(message) {
                $('#eAlert_placeholder').html('<div class="alert alert-danger text-center"><span>'+message+'</span></div>');
            };
    $scope.err_alert.reset = function() {
                $('#eAlert_placeholder').html('');
            };
            
    $scope.success_alert = function() {};
    $scope.success_alert.msg = function(message) {
                $('#sAlert_placeholder').html('<div class="alert alert-success alert-dismissable fade in text-center"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
            };
        
    $scope.submit = function(){
        
        if($scope.oldPass != $scope.fac.password){
            $scope.err_alert.msg('Old password is incorrect');
            return;
        }
        
        
        if($scope.newPass.length < 5){
            $scope.err_alert.msg('New Password must be of 5 characters');
            return;
        }
        
        if($scope.newPass !== $scope.rePass){
            $scope.err_alert.msg('Retyped password not matched!');
            return;
        }
        
        if($scope.newPass == $scope.oldPass){
            $scope.err_alert.msg('New and Old passwords are same!');
            return;
        }
        
        $scope.fac.password = $scope.newPass;
        
        $http({
            method : 'PUT',
            url : "http://localhost:8080/LeaveMngmt/profile/",
            data : $scope.fac
        }) .then(function(){
            $scope.success_alert.msg("Password changed successfully.");
            $scope.close();
            $("#myModal").modal('hide');
        });
        
    };
    
    $scope.close = function(){
        $scope.oldPass = "";
        $scope.newPass = "";
        $scope.rePass = "";
        $scope.err_alert.reset();
    };
    
});

lmApp.controller('editProfileController', function($scope, $rootScope, $window, $http){
    
    if(!$rootScope.isLogin){
        $window.location.href = '/NetBeans/LeaveManagement/index.php#/login';
    };
    
    $http({
        method : 'GET',
        url : "http://localhost:8080/LeaveMngmt/profile/" + localStorage.usereid
    }).then(function (response){
            $scope.fac = response.data.resp;
    });
    
    $scope.err_alert = function() {};
    $scope.err_alert.msg = function(message) {
                $('#eAlert_placeholder').html('<div class="alert alert-danger text-center"><span>'+message+'</span></div>');
            };
    $scope.err_alert.reset = function() {
                $('#eAlert_placeholder').html('');
            };
            
    $scope.success_alert = function() {};
    $scope.success_alert.msg = function(message) {
                $('#sAlert_placeholder').html('<div class="alert alert-success alert-dismissable fade in text-center"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
            };
    
    $scope.edit = function(){
        
        if($scope.fac.mno !=null && ($scope.fac.mno.toString().length !== 0 && $scope.fac.mno.toString().length !== 10)){
            $scope.err_alert.msg('Mobile number should be of 10 digits');
            return;
        };
        
        $http({
            method : 'PUT',
            url : "http://localhost:8080/LeaveMngmt/profile/",
            data : $scope.fac
        }) .then(function(response){
            $scope.success_alert.msg("All changes are saved.");
            $scope.reset();
        });
    };
    
    $scope.reset = function(){
        
        $http({
            method : 'GET',
            url : "http://localhost:8080/LeaveMngmt/profile/" + localStorage.usereid
        }).then(function (response){
                $scope.fac = response.data.resp;
                $scope.err_alert.reset();
        });
    };
});

lmApp.controller('ContactusController', function($scope, $http){
    
    data : $scope.cntct ={};
    
    $scope.success_alert = function() {};
    $scope.success_alert.msg = function(message) {
                $('#sAlert_placeholder').html('<div class="alert alert-success alert-dismissable fade in text-center"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
            };
    
    $scope.submit = function(){
        
        $http({
            method : 'POST',
            url : "http://localhost:8080/LeaveMngmt/contact/",
            data : $scope.cntct
        }) .then(function(response){
            $scope.success_alert.msg(response.data.msg);
        });
        
    };
    
    $scope.reset = function(){
        $scope.cntct = {};
    };
    
});