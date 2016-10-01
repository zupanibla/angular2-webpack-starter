<?php

class DocumentSection { // TODO chekiri al je inclusive/exclusive range

	private $document, $beginning, $end;

	public function __construct($document, $beginning, $end) {
		$this->document  = $document;
		$this->beginning = $beginning;
		$this->end       = $end;
	}

	public function getSubsection($beginning = null, $end = null) {
		return new self(
			$this->document,
			(empty($beginning)) ? $this->beginning : $beginning,
			(empty($end))       ? $this->end       : $end
		);
	}

	public function getBeginning() { return $this->beginning; }
	public function getEnd()       { return $this->end; }

	public function getWrappedSubsections($wrapOpener, $wrapCloser, $limit = -1) {
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

	public function getSubsectionsAfterDelimiter($delimiter, $limit = -1) {
		$sections = [];
		$delimiterLength = strlen($delimiter);

		$i = strpos($this->document, $delimiter, $this->beginning) + $delimiterLength;
		if ($i == false or $i >= $this->end) return [];

		for ($sectionsLeft = $limit; $sectionsLeft != 0; $sectionsLeft--) {
			$end = strpos($this->document, $delimiter, $i);
			if ($end == false or $end >= $this->end) {
				array_push($sections, new self($this->document, $i, $this->end));
				break;
			}
			array_push($sections, new self($this->document, $i, $end));
			$i = $end + $delimiterLength;
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
