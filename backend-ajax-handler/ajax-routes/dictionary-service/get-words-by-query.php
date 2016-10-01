<?php

isset($_GET['query']) or die('{"err":"nisi dal queryja bumbar!"}');

$query = $_GET['query'];

require_once __DIR__.'/dictionary.class.php';

$dictionary = new DictionaryService();
$words = $dictionary->getWords($query);

echo json_encode($words);

?>
