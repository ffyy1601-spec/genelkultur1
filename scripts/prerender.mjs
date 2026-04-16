import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const server = await createServer({
  root: rootDir,
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const [{ AppContent }, { ROUTES }] = await Promise.all([
    server.ssrLoadModule("/src/App.tsx"),
    server.ssrLoadModule("/src/lib/routes.ts"),
  ]);

  const prerenderRoutes = [
    ROUTES.home,
    ROUTES.categories,
    ROUTES.contentHub,
    ROUTES.genelKulturSorulari,
    ROUTES.genelKulturSorulariCevaplari,
    ROUTES.genelKulturTesti,
    ROUTES.zorGenelKulturSorulari,
    ROUTES.tarihSorulari,
    ROUTES.tarihSorulariCevaplari,
    ROUTES.bilimSorulari,
    ROUTES.bilimSorulariCevaplari,
    ROUTES.sanatSorulari,
    ROUTES.sanatSorulariCevaplari,
    ROUTES.about,
    ROUTES.contact,
    ROUTES.privacy,
    ROUTES.cookies,
    ROUTES.contentPolicy,
    ROUTES.adsDisclosure,
    ROUTES.terms,
  ];

  const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

  for (const route of prerenderRoutes) {
    const helmetContext = {};
    const app = React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(
        MemoryRouter,
        { initialEntries: [route] },
        React.createElement(AppContent, { includeRouteEffects: false }),
      ),
    );

    const appHtml = renderToString(app);
    const helmet = helmetContext.helmet;
    const rootStart = appHtml.indexOf('<div class="bg-background');
    const inlineHead = rootStart >= 0 ? appHtml.slice(0, rootStart) : "";
    const bodyMarkup = rootStart >= 0 ? appHtml.slice(rootStart) : appHtml;
    const head = [
      helmet?.title?.toString() ?? "",
      helmet?.meta?.toString() ?? "",
      helmet?.link?.toString() ?? "",
      helmet?.script?.toString() ?? "",
      inlineHead,
    ].join("");

    const html = template
      .replace("<!--app-head-->", head)
      .replace('<div id="root"></div>', `<div id="root">${bodyMarkup}</div>`);

    const targetPath =
      route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route.slice(1), "index.html");

    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, html, "utf8");
  }
} finally {
  await server.close();
}
