<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen veriler
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Alıcı e-posta adresi
    $to = "husnakatilmis@gmail.com";

    // E-posta konusu ve içeriği
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad: $name\n";
    $body .= "E-posta: $email\n";
    $body .= "Mesaj:\n$message";

    // E-posta başlıkları
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // E-posta gönderimi
    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi!";
    } else {
        echo "Mesaj gönderilirken bir hata oluştu.";
    }
} else {
    echo "Form doğru bir şekilde gönderilmedi.";
}
?>  