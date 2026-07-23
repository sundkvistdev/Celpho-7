import IVersion from "./IVersion";
import TText from "./TText";

/**
 * The primary Service Package Format (SPF)
 * package type definition once decompressed
 * from ZIP or loaded from elsewhere.
 */
export default interface ICelphoPack {
	readonly mainScript?: URL;
	readonly mainLayout?: URL;
	readonly id: string;
	readonly name: TText;
	readonly version: IVersion;
	readonly author: string;
	readonly description: TText;
	readonly appbtqShortDesc: TText;
	readonly icon?: URL;
}