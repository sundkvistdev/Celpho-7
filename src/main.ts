import Device from "./simulator/Device";
import RenderController from "./uiex/RenderController";

async function main() {
	const device = new Device(document.getElementById("app")!);
	console.log(device);

	//test ui
	const canvasDisplay = document.createElement("canvas");
	canvasDisplay.height = 960;
	canvasDisplay.width = 540;
	device.swapDisplayTo(canvasDisplay);

	const rc = new RenderController(canvasDisplay);
	rc.setupClock(100);
}

main();