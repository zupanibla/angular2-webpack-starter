export interface Word {
	text: string;
	pronunciation: Pronunciation;
	usages: Array<Usage>;
}

export interface Pronunciation {
	spell: string;
	ipa: string;
}

export interface Usage {
	type: string;
	meanings: Array<Meaning>;
}

export interface Meaning {
	definition: string;
	example?: string;
}
