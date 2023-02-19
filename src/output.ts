import { writeFileSync } from "fs";
import path from "path";

export function writeCssVariables(vars: string[], file: string) {
	const css = `
:root {
${vars.map(v => "\t" + v).join("\n")}
}
    `.trim();

	writeFileSync(path.join("dist", file), css);
}
