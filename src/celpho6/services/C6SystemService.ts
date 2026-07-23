import ICelphoService from "../ICelphoService";

export default class C6SystemService implements ICelphoService {
	serviceStart(): void {
		console.log("Service start! Using api version", cl6.apiVersion);
	}
	serviceUpdate(): void {
		//console.log("Service Update!!!");
	}
	serviceEnd(): void {
		console.log("Service end!");
	}
}