import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site:"https://veiga-management.com",
  integrations: [react(), sitemap({
    filter:(page)=>{
      if(page =='https://veiga-management.com/preview/'){
        return false
      }
      if(page =='https://veiga-management.com/blog/page/1/'){
        return false
      }
      return true
    }
  })],
  vite: {
    plugins: [basicSsl()]
  }
});