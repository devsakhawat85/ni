# Loqelo – Netlify Deployment Guide (via GitHub)

This website is pre-configured and 100% ready for instant deployment to **Netlify** via your GitHub repository.

---

### Step 1: Push Code to GitHub
If you haven't already pushed the code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial Loqelo Pre-Launch Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/loqelo-landing.git
git push -u origin main
```

---

### Step 2: Connect Repository to Netlify
1. Log in to [Netlify](https://app.netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize Netlify.
4. Choose your `loqelo-landing` repository.

---

### Step 3: Build Settings
Netlify will automatically detect the settings from `netlify.toml`:
- **Base directory:** *(leave blank / default)*
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Click **"Deploy Loqelo"**. Deployment will complete in under 1 minute!

---

### Step 4: Connect Your Custom Domain (`loqelo.com`)
1. In your Netlify site dashboard, go to **Site configuration** → **Domain management**.
2. Click **"Add custom domain"** and enter `loqelo.com`.
3. In your domain registrar DNS settings (GoDaddy, Namecheap, Cloudflare, etc.):
   - **A Record**: Point `@` to Netlify's load balancer IP: `75.2.60.5`
   - **CNAME Record**: Point `www` to `your-site-name.netlify.app`
4. Netlify will automatically provision a free, auto-renewing **Let's Encrypt SSL Certificate** (HTTPS).

---

### Key Pre-Configured Files Included:
- **`netlify.toml`**: Configures build command (`npm run build`), output folder (`dist`), and SPA URL rewrites.
- **`public/_redirects`**: Ensures single-page application URLs reload smoothly without 404s.
- **Pre-Optimized Assets**: Logo, promo video, and all high-resolution images are served from `/assets/` with immutable browser caching.
