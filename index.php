<?php


	if(isset($_GET['p'])) {
	    $url = $_GET['p'];
			$urlLower = strtolower($url);
			if($url != $urlLower) {

					//echo $url;
			   // unset($_GET['rewrite-strtolower-url']);
			    $params = http_build_query($_GET);
					//echo (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
					$p = strtolower("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");

			    // if(strlen($params)) {
			    //     $params = '?' . $params;
			    // }
			    header("Location: " . $p);
			    exit;
			};

	}




// if(isset($_GET['rewrite-strtolower-url'])) {
//     $url = $_GET['rewrite-strtolower-url'];
// 		echo $url;
//     unset($_GET['rewrite-strtolower-url']);
//     $params = http_build_query($_GET);
//     if(strlen($params)) {
//         $params = '?' . $params;
//     }
//     header('Location: http://' . $_SERVER['HTTP_HOST'] . '/' . strtolower($url) . $params, true, 301);
//     exit;
// }
// header("HTTP/1.0 404 Not Found");
// die('Error! Unable to convert the URL to lowercase.');

?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Page Title</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

</head>
<body>

	<div class="jumbotron">
	  <h1 class="display-3">Hello, world!</h1>
	  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
	  <hr class="my-4">
		<?php
			include_once('src/view/navbar.php');
		 ?>
	</div>
<content id='myContent'>

</content>

<!-- <script type="text/javascript" src="/node_modules/vanilla-router/index.js"></script> -->

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<script type="module" src="/src/main.js"></script>
</body>
</html>
