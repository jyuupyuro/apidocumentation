// utils/codeHighlighter.js
import { getHighlighter } from 'shiki';

let highlighter;

export async function highlight(code, lang = 'javascript') {
  if (!highlighter) {
    highlighter = await getHighlighter({
      theme: 'github-light', // or 'material-theme-palenight'
    });
  }

  return highlighter.codeToHtml(code, { lang });
}
