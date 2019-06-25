<!DOCKTYPE html>
<html>
    <head>
        <title>Login/Sign up</title>
        <link href="vendor/bs/css/bootstrap.min.css" type="text/css" rel="stylesheet">
        <script src="vendor/jquery-3.1.0.min.js"></script>
        <script src="vendor/bs/js/bootstrap.min.js"></script>
        <link href="stylesheet2.css" type="text/css" rel="stylesheet">
    </head>

    <body>
        <?php include_once './title.php'; ?>
        <?php include_once  './header.php'; ?>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-offset-2 col-sm-6">
                    <div class="h1-a">
                        <h1>Contact Us</h1>
                    </div>
                    <h3>We are here to help.</h3>
                    <p>Please fill out this simple form and somebody will get back to you shortly.</p>
                    <br>
                    <form>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-3">
                                    <label for="name">Your Name</label>
                                </div>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control in-box" id="name">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-3">
                                    <label for="name">Your Email</label>
                                </div>
                                <div class="col-sm-9">
                                    <input type="email" class="form-control in-box" id="email">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-3">
                                    <label for="name">Subject</label>
                                </div>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control in-box" id="sub">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-3">
                                    <label for="name">Message</label>
                                </div>
                                <div class="col-sm-9">
                                    <textarea class="form-control" rows="4" id="message"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <br>
        <?php include_once './footer.php'; ?>
    </body>
</html>
