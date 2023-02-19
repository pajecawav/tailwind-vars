import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const LETTER_SPACINGS: Array<keyof DefaultTheme["letterSpacing"]> = [
	"tighter",
	"tight",
	"normal",
	"wide",
	"wider",
	"widest",
];

export function buildLetterSpacing(): string[] {
	const vars = [];

	for (const name of LETTER_SPACINGS) {
		vars.push(`--tracking-${name}: ${theme.letterSpacing[name]};`);
	}

	return vars;
}
