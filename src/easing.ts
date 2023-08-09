import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const EASINGS: Array<keyof DefaultTheme["transitionTimingFunction"]> = ["in", "out", "in-out"];

export function buildEasings(): string[] {
	const vars = [];

	for (const name of EASINGS) {
		vars.push(`--ease-${name}: ${theme.transitionTimingFunction[name]};`);
	}

	return vars;
}
