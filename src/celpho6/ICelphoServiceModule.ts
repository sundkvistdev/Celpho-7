import ICelphoService from "./ICelphoService";

export type TCelphoServiceConstructor = new () => ICelphoService;

export default interface ICelphoServiceModule {
	default: TCelphoServiceConstructor;
}