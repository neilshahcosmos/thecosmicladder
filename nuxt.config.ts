export default defineNuxtConfig({
  extends: ['docus'],
  css: ['~/assets/css/math.css'],
  site: {
    name: 'The Cosmic Ladder',
    url: 'https://thecosmicladder.com'
  },
  content: {
    build: {
      markdown: {
        remarkPlugins: { 'remark-math': {} },
        rehypePlugins: {
          'rehype-mathjax': {
            options: {
              tex: {
                tags: 'ams',
                macros: {
                  RR: '\\mathbb{R}',
                  NN: '\\mathbb{N}',
                  ZZ: '\\mathbb{Z}',
                  norm: ['\\left\\lVert #1 \\right\\rVert', 1]
                }
              }
            }
          }
        }
      }
    }
  }
})
