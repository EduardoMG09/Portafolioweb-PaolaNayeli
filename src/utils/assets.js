// Resolves asset URLs from hints stored in JSON using Vite's import.meta.glob
// Usage: resolveAsset('blog/1') will match src/assets/blog/1.(webp|jpg|jpeg|png)
// Also supports explicit paths like 'blog/imagen.jpg' or absolute '/assets/...'

const files = import.meta.glob('../assets/**/*', { eager: true });

// Build lookup by relative path and by basename without extension
const lookup = {};
for (const [key, mod] of Object.entries(files)) {
  const url = mod?.default || '';
  const rel = key.replace('../assets/', ''); // e.g., 'blog/1.jpg'
  const base = rel.replace(/\.[^.]+$/, ''); // e.g., 'blog/1'
  if (url) {
    lookup[rel] = url;
    lookup[base] = url;
  }
}

// Try to use a common fallback if present; else empty string
const FALLBACK = lookup['logo-1.webp'] || '';

export function resolveAsset(hint) {
  if (!hint) return FALLBACK;
  // Allow absolute or external URLs
  if (/^(https?:\/\/|\/)/.test(hint)) return hint;
  // Normalize to assets-relative
  const clean = hint.replace(/^assets\//, '').replace(/^\/+/, '');
  // Direct match or basename match
  return lookup[clean] || lookup[clean.replace(/\.[^.]+$/, '')] || FALLBACK;
}

export default resolveAsset;
