export default {
  '*.{ts,tsx}': () => ['pnpm typecheck', 'pnpm lint', 'pnpm format'],
  '*.{js,jsx,css,scss,json,jsonc}': () => ['pnpm format'],
}
