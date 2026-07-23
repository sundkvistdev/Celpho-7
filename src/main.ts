import Device from "./simulator/Device";
import "./style.css";

async function main() {
	const device = new Device(document.getElementById("app")!);
	console.log(device);
}

main();