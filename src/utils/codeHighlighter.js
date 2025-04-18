import { createHighlighter } from 'shiki';

let highlighter;

export async function highlight(code, lang = 'javascript', theme = 'plastic') {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['plastic', 'one-dark-pro'],
      langs: [
        'php',
        'javascript',
        'json',     // ✅ lowercase
        'jsx',
        'plsql',
        'typescript' // ✅ lowercase
      ],
    });
  }

  return highlighter.codeToHtml(code, {
    lang, // ✅ normalize the input
    theme,
  });
}
