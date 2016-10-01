<?php
require_once __DIR__.'/document-section.class.php';
require_once __DIR__.'/website-loader.class.php';

class DictionaryDotComService {
	
	public function getWords($query) {
		$wl = new WebsiteLoader();
		$searchResults = $wl->load("http://dictionary.reference.com/browse/{$query}?s=t");
		$documentSection = new DocumentSection($searchResults, 0, strlen($searchResults));

		$data = [];

		$entries = $documentSection->wrappedSections('<section class="luna-box">', '</section>');

		if (empty($entries)) return false;

		foreach ($entries as $entry) {
			$d = [];
			$d['text']           = str_replace('·', '', $entry->wrappedSections('data-syllable="', '"', 1)[0]);
			$d['pronunciation'] = strip_tags($entry->wrappedSections('[', ']', 1)[0]);
			$d['definitions']    = array_values(array_filter(
				array_map('trim',
					array_map('strip_tags', $entry->wrappedSections('<div class="def-content">', "</div>\r\n</div>"))
				), 
				function ($val) { return strlen($val) >= 4; 
			}));
			array_push($data, $d);
		}

		return $data;
	}
}

?>