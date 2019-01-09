<?php
$name=$_POST["name"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$country=$_POST["country"];
$message=$_POST["textarea"];
$subject="Systrust Solution";
$to="libingeorge3@gmail.com";
$header ="From: ".$name." <".$email.">\r\n";
$from="From: $name<$email>\r\nReturn-path: $email";
$txt="You Have received an E-mail from ".$name. ".\n".$phone.".\n".$country.".\n\n".$message;
mail($to,$subject,$txt,$header);
header("Location: index.html");
?>
