import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    emptyOutDir: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon-48.png',
        'favicon-192.png',
        'favicon-512.png',
        'apple-touch-icon.png',
        'favicon.svg',
        'icons.svg',
        'og-image.png',
      ],
      manifest: {
        name: 'GenelKultur.com.tr',
        short_name: 'GenelKultur',
        lang: 'tr-TR',
        start_url: '/',
        display: 'standalone',
        background_color: '#041329',
        theme_color: '#6d28d9',
        description:
          'Genel kültür soruları, bilgi yarışması turları ve hızlı quiz deneyimi sunan modern genel kültür sitesi.',
        icons: [
          {
            src: '/favicon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/favicon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Only precache the app shell — assets JS/CSS + root HTML
        globPatterns: ['assets/*.{js,css}', 'index.html', 'manifest.webmanifest'],
        // Don't precache huge files
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        // Runtime caching rules
        runtimeCaching: [
          {
            // Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Google Fonts webfont files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Same-origin images
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
        // SPA fallback — serve index.html for navigation requests
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [
          /^\/robots\.txt$/,
          /^\/sitemap\.xml$/,
          /^\/news-sitemap\.xml$/,
          /^\/rss\.xml$/,
          /^\/ads\.txt$/,
        ],
      },
    }),
  ],
})
