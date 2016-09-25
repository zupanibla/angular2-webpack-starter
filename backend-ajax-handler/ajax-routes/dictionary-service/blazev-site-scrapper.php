<?php

class BlazevSiteScrapper {

	private $html = '';

	private function __construct($html) {
		$this->html = $html;
	}

	public function getHTML() {
		return $this->html;
	}

	public static function loadSite($url) {
		$curl_handle = curl_init();
		curl_setopt($curl_handle, CURLOPT_URL, $url);
		curl_setopt($curl_handle, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
		$me = new self(curl_exec($curl_handle));
		curl_close( $curl_handle );
		return new SiteSection($me, 0, strlen($me->getHTML()));
	}
}

class SiteSection {

	private $site, $open_pos, $close_pos;

	public function __construct($site, $open_pos, $close_pos) {
		$this->site                = $site;
		$this->open_pos             = $open_pos;
		$this->close_pos            = $close_pos;
	}

	public function getSiteHTML() {
		return $this->site->getHTML();
	}

	public function wrappedString($wrap_open, $wrap_close) {
		$str_pos   = strpos($this->getSiteHTML(), $wrap_open, $this->open_pos); if($str_pos === false or $str_pos > $this->close_pos) return 'N/A';
		$open_pos  = $str_pos + strlen($wrap_open);
		$close_pos = strpos($this->getSiteHTML(), $wrap_close, $open_pos); if($close_pos === false or $close_pos > $this->close_pos) return 'N/A';
		return substr($this->getSiteHTML(), $open_pos, $close_pos - $open_pos);
	}

	public function wrappedStrings($wrap_open, $wrap_close) {
		$strings        = [];
		$index          = $this->open_pos;
		$wrap_open_len  = strlen($wrap_open);
		$wrap_close_len = strlen($wrap_close);

		while(true) {
			$str_pos = strpos($this->getSiteHTML(), $wrap_open, $index);
			if($str_pos === false) break;
			$open_pos = $str_pos + $wrap_open_len;
			$close_pos = strpos($this->getSiteHTML(), $wrap_close, $open_pos);
			if($close_pos === false) error_log('$wrap_close not found');
			if($close_pos > $this->close_pos) break;
			array_push($strings, substr($this->getSiteHTML(), $open_pos, $close_pos - $open_pos));
			$index = $close_pos + $wrap_close_len;
		}

		return $strings;
	}

	public function wrappedSections($wrap_open, $wrap_close) {
		$sections       = [];
		$index          = $this->open_pos;
		$wrap_open_len  = strlen($wrap_open);
		$wrap_close_len = strlen($wrap_close);

		while(true) {
			$str_pos = strpos($this->getSiteHTML(), $wrap_open, $index);
			if($str_pos === false) break;
			$open_pos = $str_pos + $wrap_open_len;
			$close_pos = strpos($this->getSiteHTML(), $wrap_close, $open_pos);
			if($close_pos === false) error_log('$wrap_close not found');
			if($close_pos > $this->close_pos) break;

			array_push($sections, new self($this->site, $open_pos, $close_pos));
			$index = $close_pos + $wrap_close_len;
		}

		return $sections;
	}

	public function toString() {
		return substr($this->getSiteHTML(), $this->open_pos, $this->close_pos - $this->open_pos);
	}
}

?>