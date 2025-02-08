import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
        "name": "GreenBasket",
        "short_name": "GreenBasket",
        "description": "GreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
        "icons":[
            {"src":"/icon-16x16.png","sizes":"16x16","type":"image/png"},
            {"src":"/icon-32x32.png","sizes":"32x32","type":"image/png"},
            {"src":"/icon-192x192.png","sizes":"192x192","type":"image/png"},
            {"src":"/icon-512x512.png","sizes":"512x512","type":"image/png"}
        ],
        "scope": "/",
        "start_url": "/",
        "theme_color":"#064f38",
        "background_color":"#ffffff",
        "display":"standalone"
    }
}