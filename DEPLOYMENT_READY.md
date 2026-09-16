# Box Office Mojo Client Frontend — Deployment Ready

- Cloudflare Pages build command: `npm run build`
- Build output directory: `dist`
- API base: `https://boxoffice-platform-production.up.railway.app` (override with `BO_API_BASE` if required)
- Desktop/tablet: fixed sidebar navigation; mobile: bottom navigation.
- Internal pages have an early client-side session gate plus backend JWT authorization.
- Task commission rules are server-authoritative: VIP1 0.70% / 30 products, VIP2 0.80% / 40, VIP3 1.40% / 50, VIP4 1.60% / 60; each level supports 3 resets per day.
