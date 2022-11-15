<?php
$input =json_decode (file_get_contents('php://input')); //request: recepciona el cuerpo metodo post y decodifica

//model funtions
funtion calculate ($expression)
{
    $result = eval ('return'.$expression.';');
    return $result;
}

//simulation of requested resource
$response = calculate($input);

//json response
echo json_encode ( 'Fuera de servicio');