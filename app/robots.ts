import { MetadataRoute } from 'next'
import { siteConfig } from '@/configs/site.config'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  }
}