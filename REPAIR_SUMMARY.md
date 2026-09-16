# Box Office Mojo Client Frontend Repair Summary

- Login/Register now use the real `logo.png` and consistent high-position branding.
- Internal pages have an early auth gate plus backend JWT authorization.
- Desktop/tablet uses a fixed sidebar; mobile uses a compact bottom navigation.
- API configuration defaults to the production backend while allowing `BO_API_BASE`/`bo_api` override.
- Task screen now displays the authoritative VIP tier, commission rate, product count, reset allowance and live expected commission.
- Reduced unnecessary blur/animation pressure and added reduced-motion support.
