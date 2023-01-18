<?php
/**
 * Copyright (c) 2022 Emi Suarez All rights reserved.
 * Contact: thiagofcabrera00@gmail.com
 * Released under the GPLv3
 * https://www.gnu.org/licenses/gpl-3.0
 **/

include_once "../lib/GroupMemberHandler.php";


try
{
    //Execute API Class Method/Procedure
    $groupMemberHandler = new GroupMemberHandler();
    $response= $groupMemberHandler->getAllUsers();
    //build client response
    $status = array( 'status'=>'ok ', 'response'=>$response );
    echo json_encode($status);

} catch(Exception $Exception){
    throw new Exception("Error", 1);

    $status = array( 'status'=>'ERROR', 'response'=>'Error');
    echo json_encode($status);
}

?>