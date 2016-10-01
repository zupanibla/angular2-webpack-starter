<?php

class DocumentSection {

	private $document, $beginning, $end;

	public function __construct($document, $beginning, $end) {
		$this->document  = $document;
		$this->beginning = $beginning;
		$this->end       = $end;
	}

	public function wrappedSections($wrapOpener, $wrapCloser, $limit = -1) {
		$sections         = [];
		$i                = $this->beginning;
		$wrapOpenerLength = strlen($wrapOpener);
		$wrapCloserLength = strlen($wrapCloser);

		for ($sectionsLeft = $limit; $sectionsLeft != 0; $sectionsLeft--) {
			$wrapOpenerPos = strpos($this->document, $wrapOpener, $i);
			if ($wrapOpenerPos === false) break;
			$sectionBeginning = $wrapOpenerPos + $wrapOpenerLength;

			$sectionEnd = strpos($this->document, $wrapCloser, $sectionBeginning);
			if ($sectionEnd === false) error_log('$wrapCloser not found');
			if ($sectionEnd > $this->end) break;

			array_push($sections, new self($this->document, $sectionBeginning, $sectionEnd));

			$i = $sectionEnd + $wrapCloserLength;
		}

		return $sections;
	}

	public function textContent() {
		return strip_tags($this);
	}
	
	public function textContentUtf8() {
		return strip_tags(mb_substr(
			$this->document,
			$this->beginning,
			$this->end - $this->beginning,
			'UTF-8'
		));
	}

	function __toString() {
		return substr(
			$this->document,
			$this->beginning,
			$this->end - $this->beginning
		);
	}
}

?>
