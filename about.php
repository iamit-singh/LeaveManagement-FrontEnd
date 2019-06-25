<!DOCKTYPE html>
<html>
    <head>
        <title>Login/Sign up</title>
        <link href="vendor/bs/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
        <script src="vendor/jquery-3.1.0.min.js"></script>
        <script src="vendor/bs/js/bootstrap.min.js"></script>
        <link href="stylesheet2.css" type="text/css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <style>
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          max-width: 300px;
          margin: auto;
          text-align: center;
          font-family: arial;
        }
        .title {
          color: grey;
          font-size: 18px;
        }

        .a1 {
          text-decoration: none;
          font-size: 22px;
          color: black;
        }
        </style>
    </head>

    <body>
        <?php include_once './title.php'; ?>
        <?php include_once  './header.php'; ?>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-8">
                    <div class="h1-a">
                        <h1>About</h1>
                    </div>
                    <br>
                    <p class="text-justify" style="font-size: large">Automation is one of the most hotshot approaches to solve basic regular requirements. Office
automation makes it possible for organizations to improve their productivity and recognize easier
ways to do regular tasks in easier ways. Such systems help in optimizing the existing office
procedures by saving time, money and human efforts. Faculty and staff constitute an important part
of an educational institution. Their proper working is essential to ensure stability in the institution.
Hence leaves are necessary. The faculty leave management is an approach to automate the task of
application of leaves by the staff and faculty in the institute.</p>
                    
                    <div class="h1-a">
                        <h1>Team</h1>
                    </div>
                    <br>
                    
                    <div class="card">
                        <img src="img/me.JPG" alt="John" style="width:100%">
                        <div class="container-fluid">
                        <h1>Amit Singh</h1>
                        <p class="title">CS Undergraduate</p>
                        <p>NIT Raipur</p>
                        <div style="margin: 24px 0;">
                            <a href="https://www.linkedin.com/in/amit-singh-3637a898/" target="_blank"><i class="fa fa-linkedin a1" ></i></a>
                        </div>
                        <p><button data-toggle="collapse" href="#collapse1" class="btn btn-primary" style="width: 100%">Contact</button></p>
                        <div id="collapse1" class="panel-collapse collapse">
                            <div class="panel-body">
                                <p><span class="glyphicon glyphicon-phone"></span> +918223856241</p>
                                <p><span class="glyphicon glyphicon-envelope"></span> one.amitsingh@gmail.com</p>
                            </div>
                            <div class="panel-footer"><span class="glyphicon glyphicon-home"></span> Raipur, Chhattisgarh, India</div>
                        </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
        
        <?php include_once './footer.php'; ?>
    </body>
</html>
