/**
 * The default interface for Celpho
 * services.
 */
export default interface ICelphoService {
	serviceStart(): void;
	serviceUpdate(): void;
	serviceEnd(): void;
}