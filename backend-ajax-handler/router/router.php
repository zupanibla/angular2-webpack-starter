<?php

class Router {
	private $routes, $routesRoot;

	function __construct($routes, $routesRoot) {
		$this->routes     = $routes;
		$this->routesRoot = $routesRoot;
	}

	function route($routeName) {
		if (!isset($this->routes[$routeName])) {
		    header($_SERVER["SERVER_PROTOCOL"].' 404 Not Found');exit;
		}
		$route = $this->routes[$routeName];
		$routePath = $this->routesRoot . '/' . $route . '.php';

		if (!file_exists($routePath)) {
			header($_SERVER["SERVER_PROTOCOL"].' 500 Internal Server Error');exit;
		}

		require($routePath);
	}
}

?>
