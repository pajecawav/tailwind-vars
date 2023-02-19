import colors from "tailwindcss/colors";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import convert from "color-convert";

const COLOR_NAMES: Array<keyof DefaultColors> = [
	"amber",
	"blue",
	"cyan",
	"emerald",
	"fuchsia",
	"gray",
	"green",
	"indigo",
	"lime",
	"neutral",
	"orange",
	"pink",
	"purple",
	"red",
	"rose",
	"sky",
	"slate",
	"stone",
	"teal",
	"violet",
	"yellow",
	"zinc",
];

export function buildColors(): string[] {
	const vars: string[] = [];

	// rgb
	for (const name of COLOR_NAMES) {
		const values = colors[name];

		for (const [num, rgb] of Object.entries(values)) {
			vars.push(`--${name}-${num}: ${rgb};`);
		}
	}

	// TODO: make HSL colors optional
	// hsl
	// for (const name of COLOR_NAMES) {
	// 	const values = colors[name];
	// 	for (const [num, rgb] of Object.entries(values)) {
	// 		const [h, s, l] = convert.hex.hsl(rgb);
	// 		const hsl = `${h} ${s}% ${l}%`;
	// 		vars.push(`--${name}-${num}-hsl: ${hsl};`);
	// 	}
	// }

	return vars;
}
