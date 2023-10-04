<?php
printf("Abriendo archivo<br>");

// Inicia el temporizador
$start_time = microtime(true);

$archivo = 'archivo.txt';
if (file_exists($archivo)) {
    // Abrir el archivo en modo lectura
    $handle = fopen($archivo, 'r');
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            // Mostrar cada línea leída
            echo $line;
        }
        // Cerrar el archivo
        fclose($handle);
    } else {
        echo "No se pudo abrir el archivo.";
    }
} else {
    echo "El archivo no existe.";
}

// Detén el temporizador
$end_time = microtime(true);

// Calcula el tiempo transcurrido en segundos
$execution_time = $end_time - $start_time;

// Imprime el resultado
echo "<br>Tiempo de ejecución: $execution_time segundos";

printf("<br>Haciendo otra cosa");
?>