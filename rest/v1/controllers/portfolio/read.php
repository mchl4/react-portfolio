<?php
$conn = null;
$conn = checkDbConnection();
$portfolio= new Portfolio($conn);
$error = [];
$returnData = [];

// if (array_key_exists("feeid", $_GET)) {
//     $fee->fee_aid = $_GET['feeid'];
//     checkId($fee->fee_aid);
//     $query = checkReadById($fee);
//     http_response_code(200);
//     getQueriedData($query);
// }

if (empty($_GET)) {
    $query = checkReadAll($portfolio);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();