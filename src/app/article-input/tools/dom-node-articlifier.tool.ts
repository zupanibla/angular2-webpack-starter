export class DOMNodeArticlifier {

	articlify(domNode: Node): Article {
		let wordNodes = [];
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
					wordNodes.push(wordNode);
					newNode.appendChild(wordNode);
				} else {
					while(i < text.length && !this.isWordCharacter(text[i])) i++;
					newNode.appendChild(document.createTextNode(text.substring(startI, i)));
				}
			}

			node.parentNode.replaceChild(newNode, node);
		}
		return {domNode, wordNodes};
	}
	
	isWordCharacter(character: string) {
		let charCode = character.charCodeAt(0);
		return (95 < charCode && charCode < 123) ||
			(64 < charCode && charCode < 91) ||
			charCode == 45 || charCode == 39;
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
	wordNodes: Array<Node>;
}