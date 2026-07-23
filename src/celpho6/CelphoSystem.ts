import ICelphoPack from "./ICelphoPack";
import IVersion from "./IVersion";
import TText from "./TText";
import Version from "./Version";

export default class CelphoSystem implements ICelphoPack {
	private _mainScript: URL;
	private _id: string;
	private _name: TText;
	private _version: IVersion;
	private _author: string;
	private _description: TText;

	public get mainScript() {
		return this._mainScript;
	}

	public get mainLayout() {
		return undefined;
	}

	public get id() {
		return this._id;
	}

	public get name() {
		return this._name;
	}

	public get version() {
		return this._version;
	}

	public get author() {
		return this._author;
	}

	public get description() {
		return this._description;
	}

	public get appbtqShortDesc() {
		return "";
	}

	public get icon() {
		return undefined;
	}

	constructor() {
		this._mainScript = new URL("./services/C6SystemService.js", import.meta.url);
		this._id = "samsoft_sidegigs.celpho6";
		this._name = {
			"en-US": "Celpho 7 System Manager",
			"fi-FI": "Celpho 7 Järjestelmänhallitsija",
			"sv-SE": "Celpho 7 Systemhanterare",
		};
		this._version = Version.create(1, 0, 0);
		this._author = "Samsoft Sidegigs Co.";
		this._description = {
			"en-US": "System Manager",
			"fi-FI": "Järjestelmänhallitsija",
			"sv-SE": "Systemhanterare",
		};
	}
}