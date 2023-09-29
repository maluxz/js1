<?php
printf("Abriendo archivo");
$archivo_url = fopen("archivo.txt","r");

$texto = "";

while ($fragmento = fgets($archivo_url)) {
    $texto = $fragmento;
}

printf($texto);
printf("<br>Haciendo otra cosa");
?>