export class DOMNodeArticlifier {

	articlify(domNode: Node): Article {
		let wordContainers: Array<HTMLSpanElement> = [];
		let textNodes: Array<Node> = this.getTextNodesUnder(domNode);
		for (let node of textNodes) {
			let text = node.textContent;
			let newNode = document.createDocumentFragment();
			for (let i = 0; i < text.length; ) {
				
				let startI = i;
				if (this.isWordCharacter(text[i])) {
					while(i < text.length && this.isWordCharacter(text[i])) i++;
					let wordNode = document.createElement('span');
					wordNode.innerHTML = text.substring(startI, i);
					wordContainers.push(wordNode);
					newNode.appendChild(wordNode);
				} else {
					while(i < text.length && !this.isWordCharacter(text[i])) i++;
					newNode.appendChild(document.createTextNode(text.substring(startI, i)));
				}
			}

			node.parentNode.replaceChild(newNode, node);
		}
		return {domNode, wordContainers};
	}
	
	isWordCharacter(character: string) {
		let charCode = character.charCodeAt(0);
		return  (95 < charCode && charCode < 123) ||                      // alphabet
				(64 < charCode && charCode < 91)  ||                      // ALPHABET
				charCode === 45  || charCode === 39  ||                   // ' ', '\n'
				charCode === 269 || charCode === 353 || charCode === 382; // č, ž, š
	}

	getTextNodesUnder(node: Node): Array<Node> {
	    var walker = document.createTreeWalker(
	        node,
	        NodeFilter.SHOW_TEXT,
	        null,
	        false
	    );

	    var textNodes = [];

	    while(node = walker.nextNode()) {
	        textNodes.push(node);
	    }

	    return textNodes;
	}
}

export interface Article {
	domNode: Node;
	wordContainers: Array<HTMLSpanElement>;
}