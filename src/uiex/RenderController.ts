import DisplayController from "./DisplayController";

export default class RenderController {
	private _canvas: HTMLCanvasElement;
	private _ctx: CanvasRenderingContext2D;
	private _dc: DisplayController;
	private _clock: ReturnType<typeof setInterval> | null;

	public constructor(canvas: HTMLCanvasElement) {
		this._canvas = canvas;
		this._ctx = canvas.getContext("2d")!;

		if (!this._ctx) {
			throw new Error("Canvas null");
		}

		this._dc = new DisplayController(canvas);
		this._clock = null;
	}

	public setupClock(frametimeMs: number) {
		if (this._clock !== null) return;
		this._clock = setInterval(() => this.update(), frametimeMs);
	}

	public stopClock() {
		if (this._clock === null) return;
		this._clock = (clearInterval(this._clock), null);
	}

	private drawHomeScreen() {
		const ctx = this._ctx;
		const pos = this._dc.pointerPosition;
		
		ctx.save();
		if (pos.x >= 10 && pos.x < 10+128 && pos.y >= 10 && pos.y < 10+128)
			ctx.fillStyle = "#bb00bb";
		else
			ctx.fillStyle = "#ff00ff";
		ctx.fillRect(10, 10, 128, 128);
		ctx.restore();
	}

	private update() {
		const ctx = this._ctx;
		const pos = this._dc.pointerPosition;

		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		this.drawHomeScreen();

		const crossSize = 24;
		const crossWidth = 2;
		ctx.beginPath();
		ctx.moveTo(pos.x - crossSize / 2, pos.y);
		ctx.lineTo(pos.x + crossSize / 2, pos.y);
		ctx.moveTo(pos.x, pos.y - crossSize / 2);
		ctx.lineTo(pos.x, pos.y + crossSize / 2);
		ctx.lineWidth = crossWidth;
		if (this._dc.isPointerDown)
			ctx.strokeStyle = "#ff0";
		else
			ctx.strokeStyle = "#f0f";
		ctx.stroke();

		this._dc.update();
	}
}