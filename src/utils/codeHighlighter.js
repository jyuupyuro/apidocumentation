import { createHighlighter } from 'shiki';

let highlighter;

export async function highlight(code, lang = 'javascript,', theme = 'plastic') {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['plastic', 'one-dark-pro'], // ✅ preload both
      langs: [lang], // You can also preload multiple langs if needed
    });
  }

  return highlighter.codeToHtml(code, {
    lang,
    theme,
  });
}
