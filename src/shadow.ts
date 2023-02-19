import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const SHADOWS: Array<keyof DefaultTheme["boxShadow"]> = ["sm", "md", "lg", "xl", "2xl", "inner"];

export function buildShadows(): string[] {
	const vars = [`--shadow-base: ${theme.boxShadow["DEFAULT"]};`];

	for (const name of SHADOWS) {
		vars.push(`--shadow-${name}: ${theme.boxShadow[name]};`);
	}

	return vars;
}
