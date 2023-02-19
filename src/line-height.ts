import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const LINE_HEIGHTS: Array<keyof DefaultTheme["lineHeight"]> = [
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"tight",
	"snug",
	"normal",
	"relaxed",
	"loose",
];

export function buildLineHeights(): string[] {
	const vars = [];

	for (const name of LINE_HEIGHTS) {
		vars.push(`--leading-${name}: ${theme.lineHeight[name]};`);
	}

	return vars;
}
