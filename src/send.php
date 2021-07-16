<?php

$userPhone = $_POST['userPhone'];
$days = $_POST['days'];
$discount = $_POST['discount'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = ${{ FROM_EMAIL }};                     // SMTP username
    $mail->Password   = ${{ FROM_EMAIL_PASSWORD }};                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom(${{ FROM_EMAIL }}, Василий);
    $mail->addAddress(${  TO_EMAIL });     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New application from the site';
    $mail->Body    = "User phone: {userPhone}, Number of days: {days}, discount: - {discount}%";

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "The email was not sent, there is an error. Error code: {mail-> ErrorInfo}";
    }

} catch (Exception $e) {
    echo "The email was not sent, there is an error. Error code: {mail-> ErrorInfo}";
}
