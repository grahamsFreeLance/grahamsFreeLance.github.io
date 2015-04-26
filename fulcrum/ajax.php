<?php

function safeEmail($from, $rEmail, $message)
	{
		$message = htmlentities($message);
		$rEmail = htmlentities($rEmail);
		$from = htmlentities($from);
		if (!(filter_var($rEmail, FILTER_VALIDATE_EMAIL))) {
    		echo "The email address: ".$rEmail." is not considered valid.";
		}
		else if($message != '' && $from != '') {
			mail("drc232@cornell.edu", 'New message from Fulcrum Speedworks from '.$from." at: ".$rEmail, $message."  ALL HAIL GRAHAM THE MIGHTY");
			echo('Your message has been sent');
		}
		else
		{
			echo "please include a subject and message";
		}
	}

if (isset($_POST["email"]))
{
	$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_STRING);
	$name = filter_input(INPUT_POST, "n", FILTER_SANITIZE_STRING);
	$message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRING);
	safeEmail($name, $email, $message);	
}
?>
