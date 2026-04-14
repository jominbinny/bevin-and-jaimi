import { access, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distClientDir = path.resolve("dist/client");
const distServerEntry = path.resolve("dist/server/index.js");
const outputHtml = path.join(distClientDir, "index.html");

async function generateStaticIndex() {
  await access(distServerEntry);

  const serverModule = await import(pathToFileURL(distServerEntry).href);
  const serverEntry = serverModule.default;

  if (!serverEntry || typeof serverEntry.fetch !== "function") {
    throw new Error("Expected dist/server/index.js default export to include a fetch() handler.");
  }

  let requestUrl = "http://localhost/";
  let response = null;

  for (let i = 0; i < 5; i += 1) {
    // The app may redirect from / to a canonical URL before returning HTML.
    response = await serverEntry.fetch(new Request(requestUrl));

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) {
        throw new Error(`Redirect response ${response.status} without Location header.`);
      }
      requestUrl = new URL(location, requestUrl).toString();
      continue;
    }

    break;
  }

  if (!response || !response.ok) {
    throw new Error(`Server render failed with status ${response ? response.status : "unknown"}`);
  }

  const html = await response.text();
  await writeFile(outputHtml, html, "utf8");
}

generateStaticIndex().catch((error) => {
  console.error("Failed to generate dist/client/index.html for static hosting.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
