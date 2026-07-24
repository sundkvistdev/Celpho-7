import Device from "./simulator/Device";

async function main() {
	const device = new Device(document.getElementById("app")!);
	console.log(device);

	//test ui
	const disp = device.getDisplayElement();
	disp.innerHTML = await (await fetch(new URL("./celpho6/ui/HomeScreenGrid.html", import.meta.url).href)).text();
}

main();