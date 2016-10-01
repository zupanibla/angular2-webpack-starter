<?php

require_once 'blazev-site-scrapper.php';

class BlazevDictionary {
	const DB_PATH = __DIR__.'/words-by-query';

	public static function fetchWordFromWeb($word) {
		$dictionary_com = BlazevSiteScrapper::loadSite("http://dictionary.reference.com/browse/{$word}?s=t");

		$data = [];

		$entries = $dictionary_com->wrappedSections('<section class="luna-box">', '</section>');

		if(empty($entries)) return false;

		foreach($entries as $entry) {
			$d = [];
			$d['text']           = str_replace('·', '', $entry->wrappedString('data-syllable="', '"'));
			$d['pronunciation'] = strip_tags($entry->wrappedString('[', ']'));
			$d['definitions']    = array_values(array_filter(
				array_map('trim',
					array_map('strip_tags', $entry->wrappedStrings('<div class="def-content">', "</div>\r\n</div>"))
				), 
				function ($val) { return strlen($val) >= 4; 
			}));
			array_push($data, $d);
		}

		return $data;
	}

	public static function fetchWordFromDB($word) {
		$filename = self::DB_PATH . '/' . $word . '.json';
		if(!file_exists($filename)) return false;
		else return json_decode(file_get_contents($filename));
	}

	public static function saveWordToDB($word, $data) {
		$filename = self::DB_PATH . '/' . $word . '.json';
		file_put_contents($filename, json_encode($data));
	}

	public static function fetchWord($word) {
		$data = self::fetchWordFromDB($word);
		if($data === false) {
			$data = self::fetchWordFromWeb($word);
			if($data !== false)	self::saveWordToDB($word, $data);
		}

		return $data;
	}
}

?>