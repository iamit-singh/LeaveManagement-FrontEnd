<!DOCKTYPE html>
<html>
    <head>
        <title>Home</title>
        <link href="vendor/bs/css/bootstrap.min.css" type="text/css" rel="stylesheet">
        <script src="vendor/jquery-3.1.0.min.js"></script>
        <script src="vendor/bs/js/bootstrap.min.js"></script>
        <link href="stylesheet2.css" type="text/css" rel="stylesheet">        
    </head>

    <body>
        <?php include_once  './title.php'; ?>
        
        <?php include_once  './header.php'; ?>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-offset-3 col-sm-6">
                    <div class="panel panel-info text-center">
                        <div class="panel-heading"><h2 style="display: inline">Amit</h2>
                            <h2 style="display: inline"> </h2>
                            <h2 style="display: inline">Singh</h2>
                            
                        </div>
                        <div class="panel-body"><h4>amit123</h4></div>
                        <div class="panel-body"><h4>Faculty</h4></div>
                        <div class="panel-body"><h4>Computer Science and Engineering</h4></div>
                        <div class="panel-body"><h4>one.amitsingh@gmail.com</h4></div>
                        <div class="panel-body"><h4>8223856241</h4></div>  
                        <div class="panel-footer">
                            <div class="row">
                                <div class="col-xs-6">
                                    <button style="width:30%" class="btn btn-info">Edit</button>
                                </div>
                                <div class="col-xs-6">
                                    <button class="btn btn-danger" data-toggle="modal" data-target="#myModal">Change Password</button>
                                    
                                    <div class="modal fade" id="myModal">
                                        <div class="modal-dialog modal-sm">
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                                              <h4 class="modal-title">Change Password</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <input type="password" placeholder="Old Password" class="form-control in-box" id="opwd">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" placeholder="New Password" class="form-control in-box" id="npwd">
                                                </div>
                                                
                                                <input type="password" placeholder="Re-Type Password" class="form-control in-box" id="rnpwd">
                                                
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-success" style="float: left;width: 30%" >Save</button>
                                              <button type="button" class="btn btn-default" data-dismiss="modal" style="width: 30%">Close</button>
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <br>
            </div>
        </div>
        
        
        <?php include_once './footer.php'; ?>
    </body>
</html>


