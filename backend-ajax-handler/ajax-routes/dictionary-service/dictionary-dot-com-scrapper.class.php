<?php
require_once __DIR__.'/document-section.class.php';

class DictionaryDotComScrapper {
	
	public function scrapWordSearchResults($htmlDocument) {
		$documentSection = new DocumentSection($htmlDocument, 0, strlen($htmlDocument));

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
