import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.hboxdigital.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/static/',
          '/_next/image/',
          '/api/',
        ],
      },
      // AI Crawlers - Explicitly allow
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'ClaudeBot',
          'Google-Extended',
          'PerplexityBot',
          'Bytespider',
          'Diffbot',
          'cohere-ai',
        ],
        allow: '/',
      },
      // Google Image Bot
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}