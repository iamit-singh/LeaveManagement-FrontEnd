<!DOCKTYPE html>
<html ng-app="lm">
    <head>
        <title>Leave Management</title>
        <link href="vendor/bs/css/bootstrap.min.css" type="text/css" rel="stylesheet">
        <script src="vendor/jquery-3.1.0.min.js"></script>
        <script src="vendor/bs/js/bootstrap.min.js"></script>
        <script src="vendor/angular/angular.min.js"></script>
        <script src="vendor/angular/angular-route.min.js"></script>
        
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker3.min.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
        
        <script src="js/app.js"></script>
        <script src="js/controllers.js"></script>
        <link href="stylesheet1.css" type="text/css" rel="stylesheet">
        <link href="stylesheet2.css" type="text/css" rel="stylesheet">
    </head>

    <body>
        <?php include_once './title.php'; ?>
        <div ng-show="isLogin">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li ng-if="isForAS"><a href="#/home"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                        <li ng-if="isForAS"><a href="#/notification"><span class="glyphicon glyphicon-file"></span> Application</a></li>
                        <li ng-if="!isForAS"><a href="#/notification2"><span class="glyphicon glyphicon-bell"></span> Notification</a></li>
                        <li><a href="#/profile"><span class="glyphicon glyphicon-user"></span> Profile</a></li> 
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        
        
        <ng-view>
            
        </ng-view>
      
        
        <?php include_once './footer.php'; ?>
    </body>
    
    
</html>

