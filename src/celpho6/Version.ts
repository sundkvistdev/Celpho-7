import IVersion, { EVersionScheme } from "./IVersion";

export default class Version implements IVersion {
	private _scheme: EVersionScheme;
	private _major: number;
	private _minor?: number;
	private _patch?: number;

	public get scheme() {
		return this._scheme;
	}

	public get major() {
		return this._major;
	}

	public get minor() {
		return this._minor;
	}

	public get patch() {
		return this._patch;
	}

	private constructor(
		scheme: EVersionScheme,
		major: number,
		minor?: number,
		patch?: number
	) {
		this._scheme = scheme;
		this._major = major;
		this._minor = minor;
		this._patch = patch;
	}

	public static create(version: string): Version;
	public static create(major: number): Version;
	public static create(major: number, minor: number): Version;
	public static create(major: number, minor: number, patch: number): Version;

	public static create(
		major: number | string,
		minor?: number,
		patch?: number
	): Version {
		if (typeof major === "string") {
			const vparts = major.split(".");

			switch (vparts.length) {
				case 1:
					return new Version(
						EVersionScheme.INTEGER,
						parseInt(vparts[0])
					);

				case 2:
					return new Version(
						EVersionScheme.MAJORMINOR,
						parseInt(vparts[0]),
						parseInt(vparts[1])
					);

				case 3:
					return new Version(
						EVersionScheme.MAJORMINORPATCH,
						parseInt(vparts[0]),
						parseInt(vparts[1]),
						parseInt(vparts[2])
					);

				default:
					throw new Error("Invalid version string!");
			}
		}

		if (minor !== undefined) {
			if (patch !== undefined) {
				return new Version(EVersionScheme.MAJORMINORPATCH, major, minor, patch);
			}
			return new Version(EVersionScheme.MAJORMINOR, major, minor);
		}
		return new Version(EVersionScheme.INTEGER, major);
	}
}