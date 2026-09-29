import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const proxy = process.env.PI_HEADROOM_URL ?? "http://127.0.0.1:8787";

export default function headroom(pi: ExtensionAPI): void {
	if (process.env.PI_HEADROOM !== "1") return;

	process.env.ANTHROPIC_BASE_URL = proxy;
	pi.registerProvider("openai", { baseUrl: `${proxy}/v1` });
	pi.registerProvider("anthropic", { baseUrl: proxy });
	pi.registerProvider("google", { baseUrl: `${proxy}/v1beta` });
	pi.registerProvider("google-vertex", { baseUrl: proxy });
}
