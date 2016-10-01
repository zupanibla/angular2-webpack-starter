<?php
require_once __DIR__.'/dictionary-dot-com.service.php';

class DictionaryService {
	const DB_PATH = __DIR__.'/words-by-query';

	private function getWordsDBPath($word) {
		return self::DB_PATH . '/' . $word . '.json';
	}

	public function getWordsFromDB($word) {
		$filename = $this->getWordsDBPath($word);
		if(!file_exists($filename)) return false;
		else return json_decode(file_get_contents($filename));
	}

	public function saveWordsToDB($word, $data) {
		$filename = $this->getWordsDBPath($word);
		file_put_contents($filename, json_encode($data));
	}

	public function getWords($query) {
		$data = $this->getWordsFromDB($query);
		if($data === false) {
			$webDictionary = new DictionaryDotComService();
			$data = $webDictionary->getWords($query);
			if($data !== false)	$this->saveWordsToDB($query, $data);
		}

		return $data;
	}
}

?>