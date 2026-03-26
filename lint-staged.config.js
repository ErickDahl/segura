export default {
  '*.{ts,tsx}': () => ['pnpm typecheck', 'pnpm lint', 'pnpm format'],
  '*.{css,json,jsonc}': () => ['pnpm format'],
}
