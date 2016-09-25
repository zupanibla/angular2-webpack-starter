<?php

isset($_GET['query']) or die('{"err":"nisi dal queryja bumbar!"}');

$query = $_GET['query'];

require_once __DIR__.'/blazev-dictionary.php';

$data = BlazevDictionary::fetchWord($query);

echo json_encode($data);

?>
