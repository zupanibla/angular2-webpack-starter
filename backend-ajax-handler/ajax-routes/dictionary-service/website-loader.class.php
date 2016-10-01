<?php
require_once __DIR__.'/document-section.class.php';
require_once __DIR__.'/document-section.class.php';

class WebsiteLoader {

	public function load($url) {
		$curl_handle = curl_init();
		curl_setopt($curl_handle, CURLOPT_URL, $url);
		curl_setopt($curl_handle, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
		$htmlDocument = new HTMLDocument(curl_exec($curl_handle));
		curl_close($curl_handle);
		return $htmlDocument;
	}
}


class HTMLDocument {
	private $html;

	function __construct($html = '') {
		$this->html = $html;
	}

	function __toString() {
		return $this->html;
	}
}

?>