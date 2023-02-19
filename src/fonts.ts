import theme from "tailwindcss/defaultTheme";
import { DefaultTheme } from "tailwindcss/types/generated/default-theme";

const FONTS: Array<keyof DefaultTheme["fontFamily"]> = ["sans", "serif", "mono"];

export function buildFonts(): string[] {
	const vars = [];

	for (const name of FONTS) {
		vars.push(`--font-${name}: ${theme.fontFamily[name].join(", ")};`);
	}

	return vars;
}
