export default class Device {
	private _deviceElement: HTMLElement;
	private _displayElement: HTMLElement;
	private homeButtonElement: HTMLElement;

	private homeButtonDownStartTime: number;

	public getDisplayElement() {
		return this._displayElement;
	}

	public constructor(deviceElement: HTMLElement) {
		this._deviceElement = deviceElement;

		const displayElement = deviceElement.querySelector(".device-display");
		if (!displayElement || !(displayElement instanceof HTMLElement)) {
			throw new Error("Device has no display or the display is invalid!");
		}

		this._displayElement = displayElement;

		const homeButtonElement = deviceElement.querySelector(".device-bottom > .home-button");
		if (!homeButtonElement || !(homeButtonElement instanceof HTMLElement)) {
			throw new Error("Device has no home button or the home button is invalid!");
		}

		this.homeButtonPointerDownHandler =
			this.homeButtonPointerDownHandler.bind(this);
		this.homeButtonPointerUpHandler =
			this.homeButtonPointerUpHandler.bind(this);

		homeButtonElement.addEventListener("pointerdown", this.homeButtonPointerDownHandler);
		homeButtonElement.addEventListener("pointerup", this.homeButtonPointerUpHandler);

		this.homeButtonElement = homeButtonElement;
		this.homeButtonDownStartTime = 0;

		void this._deviceElement;
		void this._displayElement;
	}

	private homeButtonPointerDownHandler(ev: PointerEvent) {
		this.homeButtonDownStartTime = performance.now();
		this.homeButtonElement.setPointerCapture(ev.pointerId);
		console.log("HomeButton Start");
	}

	private homeButtonPointerUpHandler(ev: PointerEvent) {
		this.homeButtonElement.releasePointerCapture(ev.pointerId);
		const duration = performance.now() - this.homeButtonDownStartTime;
		console.log("HomeButton End: " + duration + "ms");
	}
}