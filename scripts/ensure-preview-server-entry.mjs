import { access, writeFile } from "node:fs/promises";
import path from "node:path";

const distServerDir = path.resolve("dist/server");
const indexEntry = path.join(distServerDir, "index.js");
const previewEntry = path.join(distServerDir, "server.js");

async function ensurePreviewEntry() {
  await access(indexEntry);

  // Vite preview for this stack looks for dist/server/server.js.
  // TanStack build currently outputs dist/server/index.js.
  await writeFile(previewEntry, "export { default } from './index.js';\n", "utf8");
}

ensurePreviewEntry().catch((error) => {
  console.error("Failed to create dist/server/server.js for preview.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
