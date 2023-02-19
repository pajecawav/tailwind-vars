import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const RADIUSES: Array<keyof DefaultTheme["borderRadius"]> = [
	"sm",
	"md",
	"lg",
	"xl",
	"2xl",
	"3xl",
	"full",
];

export function buildRadiuses(): string[] {
	const vars = [];

	for (const name of RADIUSES) {
		vars.push(`--radius-${name}: ${theme.borderRadius[name]};`);
	}

	return vars;
}
