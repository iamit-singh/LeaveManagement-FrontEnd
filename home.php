<!DOCKTYPE html>
<html>
    <head>
        <title>Home</title>
        <link href="vendor/bs/css/bootstrap.min.css" type="text/css" rel="stylesheet">
        <script src="vendor/jquery-3.1.0.min.js"></script>
        <script src="vendor/bs/js/bootstrap.min.js"></script>
        <link href="stylesheet2.css" type="text/css" rel="stylesheet">
        <style>
            .btn{
                font-size: x-large;
                font-weight: bolder;
            }
        </style>
            
    </head>

    <body>
        <?php include_once  './title.php'; ?>
        
        <?php include_once  './header.php'; ?>
        
        <div class="container-fluid">
            <div class="row">
            <div class="col-sm-offset-2 col-sm-8">
                <div class="h1-a">
                    <h1>Leave Details</h1>
                </div>
                <br>        
                <table class="table table-striped ">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Total</th>
                      <th>Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Medical</td>
                      <td>10</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Earned</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Casual</td>
                      <td>8</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Restricted Holiday</td>
                      <td>3</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Study Leave</td>
                      <td>15</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <br>
                <button class="btn btn-primary btn-block" data-toggle="collapse" data-target="#leaveform">Request Leave</button>
                <div id="leaveform" class="collapse fade">
                    <br><br>
                    <form>
                       <div class="row " >
                        <div class="col-xs-6">
                           <div class="form-group">
                                <label for="first name">From:</label>
                                <input type="text" class="form-control in-box" id="fName">
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <label for="last name">To:</label>
                                <input type="text" class="form-control in-box" id="lName">
                            </div>
                        </div>
                    </div>
                       <div class="form-group">
                         <label for="sel1">Type of Leave:</label>
                            <select class="form-control" id="sel1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                        </div>
                       <div class="form-group">
                            <label for="name">Reason:</label>        
                            <textarea class="form-control" rows="4" id="message"></textarea>
                       </div>
                   </form>
                </div>
                <br><br>
              </div>  
            </div>
        </div>
        

        
        <?php include_once './footer.php'; ?>
    </body>
</html>


