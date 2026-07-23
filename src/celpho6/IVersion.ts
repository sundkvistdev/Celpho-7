/**
 * A Celpho 7 version descriptor
 */
export default interface IVersion {
	readonly scheme: EVersionScheme;
	readonly major: number;
	readonly minor?: number;
	readonly patch?: number;
}

/**
 * An enum describing which version
 * scheme a version is using, either
 * an integer (major only), `major.minor`
 * or `major.minor.patch`.
 */
export enum EVersionScheme {
	INTEGER,
	MAJORMINOR,
	MAJORMINORPATCH,
}