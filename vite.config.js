import vue from '@vitejs/plugin-vue'

//vue.config.jsと同じ

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  },
	
	//npm run build で作成されるファイルのディレクトリ
  build: {
    outDir: 'docs',
		mode: 'production'
  },
	base: './',
	// publicDir: true
}

// ブログ
// https://zenn.dev/junseinagao/scraps/a4e6b1413ff26e 参照

// Viteのドキュメント
// https://ja.vitejs.dev/config/