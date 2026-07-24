export default class UIBuilder {
	public static createElement<T extends keyof HTMLElementTagNameMap>(
		tag: T,
		className: string,
		id?: string
	) {
		const element = document.createElement(tag);
		
		element.className = className;
		if (id) {
			element.id = id;
		}

		return element;
	}
}