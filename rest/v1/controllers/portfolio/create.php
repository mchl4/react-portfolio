<?php
$conn = null;
$conn = checkDbConnection();
$portfolio = new portfolio($conn);
if (array_key_exists("portfolioid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$portfolio->portfolio_title = checkIndex($data, "portfolio_title");
$portfolio->portfolio_image = checkIndex($data, "portfolio_image");
$portfolio->portfolio_description = checkIndex($data, "portfolio_description");
$portfolio->portfolio_link = checkIndex($data, "portfolio_link");
$portfolio->portfolio_is_active = 1;
$portfolio->portfolio_created = date("Y-m-d H:i:s");
$portfolio->portfolio_datetime = date("Y-m-d H:i:s");

// isNameExist($student, $student->student_name);

$query = checkCreate($portfolio);
returnSuccess($portfolio, "portfolio", $query);