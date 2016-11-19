<?php 

if (!isset($_GET['a'])) {
    header($_SERVER["SERVER_PROTOCOL"].' 400 Bad Request');exit;
}

require_once __DIR__.'/router/router.php';
$routeName = $_GET['a'];

$router = new Router(json_decode(file_get_contents(__DIR__.'/ajax-routes.json'), true), __DIR__.'/ajax-routes');
$router->route($routeName);

?>
