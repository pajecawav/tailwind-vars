import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const BLURS: Array<keyof DefaultTheme["blur"]> = ["sm", "md", "lg", "xl", "2xl", "3xl"];

export function buildBlurs(): string[] {
	const vars = [];

	for (const name of BLURS) {
		vars.push(`--blur-${name}: ${theme.blur[name]};`);
	}

	return vars;
}
