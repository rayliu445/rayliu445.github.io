import type { MarkdownOptions } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';
import footnote from 'markdown-it-footnote';

export const markdown: MarkdownOptions = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed'
  },
  // lineNumbers: true, // 启用行号

  config: (md) => {
    md.use(mathjax3);
    md.use(footnote);

    // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><ArticleMetadata v-if="($frontmatter?.aside ?? true) && ($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" /></ClientOnly>`;
      return htmlResult;
    };
    
    // 添加 MySQL 语言别名为 SQL，这样 MySQL 代码块就会使用 SQL 的高亮
    const fence = md.renderer.rules.fence!;
    md.renderer.rules.fence = (tokens, idx, options, env, renderer) => {
      const token = tokens[idx];
      if (token.info.trim() === 'mysql') {
        token.info = 'sql';
      }
      return fence(tokens, idx, options, env, renderer);
    };
  },
};