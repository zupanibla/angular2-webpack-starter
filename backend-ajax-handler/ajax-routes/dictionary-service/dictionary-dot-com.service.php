<?php
require_once __DIR__.'/dictionary-dot-com-scrapper.class.php';
require_once __DIR__.'/website-loader.class.php';

class DictionaryDotComService {
	
	public function getWords($query) {
		$wl       = new WebsiteLoader();
		$scrapper = new DictionaryDotComScrapper();

		$searchResults = $wl->load("http://dictionary.reference.com/browse/{$query}?s=t");

		return $scrapper->scrapWordSearchResults($searchResults);
	}
}

?>
