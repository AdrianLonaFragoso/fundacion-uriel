<?php
// Configuración para caracteres especiales y codificación
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Correo de destino
    $to = "contacto@fundacionuriel.org";
    
    // Inicializar variables
    $subject = "";
    $body = "";
    $headers = "";
    
    // Obtener campos comunes y sanitizar
    $form_id = $_POST['form_id'] ?? '';
    
    if ($form_id == 'info_request') {
        // --- Formulario 1: Solicitud de Información ---
        
        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $case_details = filter_input(INPUT_POST, 'case_details', FILTER_SANITIZE_STRING);

        if (!$email) {
            echo "<script>alert('Por favor ingrese un correo electrónico válido.'); window.history.back();</script>";
            exit;
        }

        $subject = "Nueva Solicitud de Información: Tratamiento Láser CO2";
        
        $body  = "Se ha recibido una nueva solicitud de información desde el sitio web.\n\n";
        $body .= "--- Detalles del Contacto ---\n";
        $body .= "Nombre: " . $name . "\n";
        $body .= "Teléfono: " . $phone . "\n";
        $body .= "Correo: " . $email . "\n\n";
        $body .= "--- Caso ---\n";
        $body .= $case_details . "\n";
        
        $headers = "From: noreply@fundacionuriel.org" . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

    } elseif ($form_id == 'appointment_request') {
        // --- Formulario 2: Solicitud de Cita ---
        
        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
        $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
        $treatment = filter_input(INPUT_POST, 'treatment', FILTER_SANITIZE_STRING);
        $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

        if (!$email) {
            echo "<script>alert('Por favor ingrese un correo electrónico válido.'); window.history.back();</script>";
            exit;
        }

        $subject = "Nueva Solicitud de Cita: Tratamiento Estético Láser CO2";
        
        $body  = "Se ha recibido una nueva solicitud de cita desde el sitio web.\n\n";
        $body .= "--- Datos del Paciente ---\n";
        $body .= "Nombre: " . $name . "\n";
        $body .= "Correo: " . $email . "\n";
        $body .= "Teléfono: " . $phone . "\n\n";
        $body .= "--- Interés ---\n";
        $body .= "Tratamiento seleccionado: " . $treatment . "\n";
        $body .= "Mensaje adicional:\n" . $message . "\n";
        
        $headers = "From: noreply@fundacionuriel.org" . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
                   
    } else {
        // Formulario desconocido
        echo "Error: Tipo de formulario no reconocido.";
        exit;
    }

    // Envio del correo
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
                alert('Gracias por contactarnos. Tu información ha sido enviada correctamente.');
                window.location.href = '../tratamiento-laser-co2.html';
              </script>";
    } else {
        echo "<script>
                alert('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente más tarde o contáctanos directamente.');
                window.history.back();
              </script>";
    }
} else {
    // Si intentan acceder al archivo directamente
    header("Location: ../tratamiento-laser-co2.html");
    exit;
}
?>
