import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const SPACINGS: Array<keyof DefaultTheme["spacing"]> = [
	"0.5",
	"1",
	"1.5",
	"2",
	"2.5",
	"3",
	"3.5",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"14",
	"16",
	"20",
	"24",
	"28",
	"32",
	"36",
	"40",
	"44",
	"48",
	"52",
	"56",
	"60",
	"64",
	"72",
	"80",
	"96",
];

const SCREENS: Array<keyof DefaultTheme["screens"]> = ["sm", "md", "lg", "xl", "2xl"];

export function buildSizes(): string[] {
	const vars = [];

	for (const name of SPACINGS) {
		vars.push(`--size-${name.replace(".", "\\.")}: ${theme.spacing[name]};`);
	}

	vars.push("--size-prose: 65ch;");

	for (const name of SCREENS) {
		vars.push(`--size-screen-${name}: ${theme.screens[name]};`);
	}

	return vars;
}
