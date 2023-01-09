<?php
 if(isset($_POST['submit_form']))
			{ 
          $name=$_POST['name']; 
       $email=$_POST['email']; 
        $msg=$_POST['msg']; 
       $FromName="Portfolio Website";
$FromEmail="info@barbaragiacomelli.github.io";
$ReplyTo=$email;
$toemail="barbaragiacomelli1996@gmail.com";
$subject="Contact form"; 
$message='Name:-'.$name.'<br>Email :-' .$email.'<br> Message:-'.$msg;
$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: ".$FromName." <".$FromEmail.">\n";
$headers .= "Reply-To: ".$ReplyTo."\n";
$headers .= "X-Sender: <".$FromEmail.">\n";
$headers .= "X-Mailer: PHP\n";
$headers .= "X-Priority: 1\n";
$headers .= "Return-Path: <".$FromEmail.">\n";
   if(mail($toemail, $subject, $message, $headers,'-f'.$FromEmail) ){
          $hide=1;
        
         echo '<div class="success"><center><span style="font-size:100px;">&#9989;</span></center> <br> Thank you <strong>'.$name.',</strong> Your message has been sent. I will reply soon as possible. </div> '; 
	      
	} else {
		echo "The server failed to send the message. Please try again later or make sure you are using a correct email.";
} 

			}
		
		?>  