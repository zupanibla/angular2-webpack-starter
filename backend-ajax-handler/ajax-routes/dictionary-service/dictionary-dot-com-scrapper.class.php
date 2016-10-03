<?php
require_once __DIR__.'/document-section.class.php';

class DictionaryDotComScrapper {

	public function scrapWordSearchResults($htmlDocument) {
		$documentSection = new DocumentSection($htmlDocument, 0, strlen($htmlDocument));

		$words = [];

		$wordSections = $documentSection->getSubsectionsAfterDelimiter('<section class="luna-box">');

		if (empty($wordSections)) return false;

		foreach ($wordSections as $wordSection) {
			$word = [];

			// TEXT
			$word['text'] = str_replace('·', '', $wordSection->getWrappedSubsections(
				'data-syllable="',
				'"',
			1)[0]->textContent());

			// PRONUNCIATION
			$spell = $wordSection->getWrappedSubsections(
				'<span class="pron spellpron">[',
				']',
			1)[0]->textContent();

			$ipa = $wordSection->getWrappedSubsections(
				'<span class="pron ipapron">/',
				'/ </span>',
			1)[0]->textContent();

			$word['pronunciation'] = [
				'spell' => $spell,
				'ipa'   => $ipa
			];

			// USAGES
			$usages = [];

			$usageSections = $wordSection->getWrappedSubsections(
				'<section class="def-pbk ce-spot"',
				'</section>'
			);

			foreach ($usageSections as $section) {
				$usageType = $section->getWrappedSubsections(
					'<span class="dbox-pg">',
					'</span>',
					1
				)[0]->textContent();

				$definitionSections = $section->getWrappedSubsections('<div class="def-content">', '</div>');

				$meanings = [];
				foreach ($definitionSections as $section) {
					$exampleSections = $section->getWrappedSubsections(
						'<span class="dbox-example">',
						'</span>',
					1);
					if (isset($exampleSections[0])) {
						$meaning = [
							'example' => $exampleSections[0]->textContent(),
							'definition' => $section->getSubsection( // TODO remove trailing ':'
								null,
								$exampleSections[0]->getBeginning()
							)->textContent()
						];
					} else {
						$meaning = ['definition' => $section->textContent()];
					}
					array_push($meanings, $meaning);
				}

				array_push($usages, [
					'type'     => $usageType,
					'meanings' => $meanings
				]);
			}
			
			$word['usages'] = $usages; 
			
			array_push($words, $word);
		}

		return $words;
	}
}

?>
