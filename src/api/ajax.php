<?php

function respond($data) {
  $data["method"] = $_SERVER["REQUEST_METHOD"];
  echo json_encode($data);
  exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $post = json_decode(file_get_contents("php://input"), true);
  respond($post);
} else if ($_SERVER["REQUEST_METHOD"] === "GET") {
  respond($_GET);
}

?>