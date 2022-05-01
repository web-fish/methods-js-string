import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import legacy from '@vitejs/plugin-legacy';


export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'build',
  },
  plugins: [
    ViteAliases(),
    legacy({
      targets: ['defaults'],
    })
  ],
});



// export default defineConfig({
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "./scss/_reset.scss";
//           @import "./scss/_vars.scss";
//           @import "./scss/_template.scss";`
//       },
//     },
//   },
// });