import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const FONT_SIZES: Array<keyof DefaultTheme["fontSize"]> = [
	"xs",
	"sm",
	"base",
	"lg",
	"xl",
	"2xl",
	"3xl",
	"4xl",
	"5xl",
	"6xl",
	"7xl",
	"8xl",
	"9xl",
];

export function buildFontSizes(): string[] {
	const vars = [];

	for (const name of FONT_SIZES) {
		vars.push(`--font-size-${name}: ${theme.fontSize[name][0]};`);
	}

	return vars;
}
