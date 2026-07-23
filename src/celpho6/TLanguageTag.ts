/**
 * ISO Text Language String Tag
 */
type TLanguageTag =
	"en-US"			|
	"en-GB"			|
	(string & {})	; // Remove once sufficient (or don't)

export default TLanguageTag;