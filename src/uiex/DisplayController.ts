export default class DisplayController {
	private _canvas: HTMLCanvasElement;
	private _pointerData: {
		x: number,
		y: number,
		prev: boolean,
		press: boolean,
	};

	public get pointerPosition() {
		return {
			x: this._pointerData.x,
			y: this._pointerData.y,
		};
	}

	public get isPointerDown() {
		return this._pointerData.press;
	}

	public constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._pointerData = {
			x: 0,
			y: 0,
			prev: false,
			press: false,
		};

		this.pointerDownHandler = this.pointerDownHandler.bind(this);
		this.pointerMoveHandler = this.pointerMoveHandler.bind(this);
		this.pointerUpHandler = this.pointerUpHandler.bind(this);

		canvas.addEventListener("pointerdown", this.pointerDownHandler);
		canvas.addEventListener("pointermove", this.pointerMoveHandler);
		canvas.addEventListener("pointerup", this.pointerUpHandler);
	}

	public update() {
		this._pointerData.prev = this._pointerData.press;
	}

	public isPressed() {
		return !this._pointerData.prev && this._pointerData.press;
	}

	public isReleased() {
		return this._pointerData.prev && !this._pointerData.press;
	}

	private pointerDownHandler(ev: PointerEvent) {
		if (this._pointerData.press)
			return;
		this._canvas.setPointerCapture(ev.pointerId);
		this._pointerData.press = true;
	}

	private pointerMoveHandler(ev: PointerEvent) {
		const rect = this._canvas.getBoundingClientRect();
		const scaleX = this._canvas.width / rect.width;
		const scaleY = this._canvas.height / rect.height;
		this._pointerData.x = (ev.x - rect.left) * scaleX;
		this._pointerData.y = (ev.y - rect.top) * scaleY;
	}

	private pointerUpHandler(ev: PointerEvent) {
		if (!this._pointerData.press)
			return;
		this._pointerData.press = false;
		this._canvas.releasePointerCapture(ev.pointerId);
	}
}