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

			// DEFINITIONS
			$definitionGroups = [];

			$definitionGroupSections = $wordSection->getWrappedSubsections(
				'<section class="def-pbk ce-spot"',
				'</section>'
			);

			foreach ($definitionGroupSections as $section) {
				$definitionGroupType = $section->getWrappedSubsections(
					'<span class="dbox-pg">',
					'</span>',
					1
				)[0]->textContent();

				$definitionSections = $section->getWrappedSubsections('<div class="def-content">', '</div>');

				$definitionGroupElements = [];
				foreach ($definitionSections as $section) {
					$exampleSections = $section->getWrappedSubsections(
						'<span class="dbox-example">',
						'</span>',
					1);
					if (isset($exampleSections[0])) {
						$definitionGroupElement = [
							'example' => $exampleSections[0]->textContent(),
							'definition' => $section->getSubsection( // TODO remove trailing ':'
								null,
								$exampleSections[0]->getBeginning()
							)->textContent()
						];
					} else {
						$definitionGroupElement = ['definition' => $section->textContent()];
					}
					array_push($definitionGroupElements, $definitionGroupElement);
				}

				array_push($definitionGroups, [
					'type'     => $definitionGroupType,
					'elements' => $definitionGroupElements
				]);
			}
			
			$word['definitionGroups'] = $definitionGroups; 
			
			array_push($words, $word);
		}

		return $words;
	}
}

?>
