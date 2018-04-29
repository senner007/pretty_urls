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
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
<script type="module" src="/src/main.js"></script>
<script type="module" src="/src/controller/about.js"></script>
</body>
</html>
