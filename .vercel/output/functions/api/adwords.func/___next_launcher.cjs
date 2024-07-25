"use strict";
process.chdir(__dirname);
const region = process.env.VERCEL_REGION || process.env.NOW_REGION;
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = region === "dev1" ? "development" : "production";
}
if (process.env.NODE_ENV !== "production" && region !== "dev1") {
  console.warn(
    `Warning: NODE_ENV was incorrectly set to "${process.env.NODE_ENV}", this value is being overridden to "production"`
  );
  process.env.NODE_ENV = "production";
}
// @preserve pre-next-server-target
const NextServer = require("next/dist/server/next-server.js").default;
// @preserve next-server-preload-target
const conf = {"env":{},"webpack":null,"webpackDevMiddleware":null,"eslint":{"ignoreDuringBuilds":false},"typescript":{"ignoreBuildErrors":false,"tsconfigPath":"tsconfig.json"},"distDir":".next","cleanDistDir":true,"assetPrefix":"","configOrigin":"next.config.js","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"target":"server","poweredByHeader":true,"compress":false,"analyticsId":"","images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[],"disableStaticImages":false,"minimumCacheTTL":60,"formats":["image/webp"],"dangerouslyAllowSVG":false,"contentSecurityPolicy":"script-src 'none'; frame-src 'none'; sandbox;","remotePatterns":[],"unoptimized":false},"devIndicators":{"buildActivity":true,"buildActivityPosition":"bottom-right"},"onDemandEntries":{"maxInactiveAge":15000,"pagesBufferLength":2},"amp":{"canonicalBase":""},"basePath":"","sassOptions":{},"trailingSlash":false,"i18n":null,"productionBrowserSourceMaps":false,"optimizeFonts":true,"excludeDefaultMomentLocales":true,"serverRuntimeConfig":{},"publicRuntimeConfig":{"version":"2.0.2"},"reactStrictMode":true,"httpAgentOptions":{"keepAlive":true},"outputFileTracing":true,"staticPageGenerationTimeout":60,"swcMinify":false,"output":"standalone","experimental":{"optimisticClientCache":true,"manualClientBasePath":false,"legacyBrowsers":true,"browsersListForSwc":false,"newNextLinkBehavior":false,"cpus":11,"sharedPool":true,"profiling":false,"isrFlushToDisk":true,"workerThreads":false,"pageEnv":false,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"externalDir":false,"disableOptimizedLoading":false,"gzipSize":true,"swcFileReading":true,"craCompat":false,"esmExternals":true,"appDir":false,"isrMemoryCacheSize":52428800,"serverComponents":false,"fullySpecified":false,"outputFileTracingRoot":"C:\\Users\\Admin\\Desktop\\serpbear2\\serpbear","swcTraceProfiling":false,"forceSwcTransforms":false,"largePageDataBytes":128000,"adjustFontFallbacks":false,"trustHostHeader":true},"configFileName":"next.config.js"};
const nextServer = new NextServer({
  conf,
  dir: ".",
  minimalMode: true,
  customServer: false
});
const serve = (handler) => async (req, res) => {
  try {
    // @preserve entryDirectory handler
    await handler(req, res);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = serve(nextServer.getRequestHandler());
if (conf.experimental?.ppr && "getRequestHandlerWithMetadata" in nextServer && typeof nextServer.getRequestHandlerWithMetadata === "function") {
  module.exports.getRequestHandlerWithMetadata = (metadata) => serve(nextServer.getRequestHandlerWithMetadata(metadata));
}
if (process.env.NEXT_PRIVATE_PRELOAD_ENTRIES) {
  module.exports.preload = nextServer.unstable_preloadEntries.bind(nextServer);
}
