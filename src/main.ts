import { mkdirSync } from "fs";
import { buildBlurs } from "./blur";
import { buildColors } from "./color";
import { buildFontSizes } from "./font-size";
import { buildFonts } from "./fonts";
import { buildLetterSpacing } from "./letter-spacing";
import { buildLineHeights } from "./line-height";
import { writeCssVariables } from "./output";
import { buildRadiuses } from "./radius";
import { buildShadows } from "./shadow";
import { buildSizes } from "./size";

mkdirSync("dist");

const vars = [
	...buildBlurs(),
	...buildColors(),
	...buildFontSizes(),
	...buildFonts(),
	...buildLetterSpacing(),
	...buildLineHeights(),
	...buildRadiuses(),
	...buildShadows(),
	...buildSizes(),
];

writeCssVariables(vars, "index.css");
