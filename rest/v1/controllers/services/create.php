<?php
$conn = null;
$conn = checkDbConnection();
$services = new services($conn);
if (array_key_exists("servicesid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$services->services_title = checkIndex($data, "services_title");
$services->services_image = checkIndex($data, "services_image");
$services->services_description = checkIndex($data, "services_description");
$services->services_is_active = 1;
$services->services_created = date("Y-m-d H:i:s");
$services->services_datetime = date("Y-m-d H:i:s");

// isNameExist($student, $student->student_name);

$query = checkCreate($services);
returnSuccess($services, "services", $query);