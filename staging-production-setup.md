# 🚀 Staging & Production Setup

## 📋 Overview

Setup environment untuk development, staging, dan production.

## 🌍 Environment Structure

### **1. Development (Local)**

- **URL**: `http://localhost:3000` (jika ada server)
- **Branch**: `develop`
- **Purpose**: Development dan testing lokal

### **2. Staging (Vercel - Recommended)**

- **URL**: `https://pioneer-solve-staging.vercel.app`
- **Branch**: `staging` atau `develop`
- **Purpose**: Testing sebelum production
- **Setup**: Otomatis via Vercel

### **3. Production (Hostinger)**

- **URL**: `https://pioneersolve.com`
- **Branch**: `main`
- **Purpose**: Live website
- **Setup**: Manual atau GitHub Actions

## 🛠️ Setup Instructions

### **Option A: Vercel + Hostinger (Recommended)**

#### **Staging di Vercel:**

1. **Connect Vercel ke GitHub:**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login ke Vercel
   vercel login

   # Deploy ke Vercel
   vercel
   ```

2. **Setup Vercel Project:**

   - Buka [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Set branch `staging` untuk preview
   - Set branch `main` untuk production

3. **Environment Variables di Vercel:**
   ```
   NODE_ENV=staging
   BASE_URL=https://pioneer-solve-staging.vercel.app
   ```

#### **Production di Hostinger:**

- Menggunakan GitHub Actions yang sudah dibuat
- Deploy otomatis saat push ke `main`

### **Option B: Hostinger Subdomain**

#### **Staging Subdomain:**

1. **Buat subdomain di Hostinger:**

   - `staging.pioneersolve.com`
   - Upload ke folder `staging/`

2. **GitHub Secrets untuk Staging:**
   ```
   STAGING_FTP_SERVER = ftp.yourdomain.com
   STAGING_FTP_USERNAME = your_username
   STAGING_FTP_PASSWORD = your_password
   ```

#### **Production Domain:**

- `pioneersolve.com` (main domain)
- Upload ke folder `public_html/`

## 🔄 Workflow

### **Development Workflow:**

```bash
# 1. Buat feature branch
git checkout -b feature/new-feature

# 2. Develop dan test lokal
# ... coding ...

# 3. Push ke staging
git checkout staging
git merge feature/new-feature
git push origin staging
# → Auto deploy ke Vercel staging

# 4. Test di staging
# https://pioneer-solve-staging.vercel.app

# 5. Merge ke production
git checkout main
git merge staging
git push origin main
# → Auto deploy ke Hostinger production
```

### **Branch Strategy:**

```
main (production)
├── staging (staging)
│   ├── develop (development)
│   │   ├── feature/new-feature
│   │   └── feature/bug-fix
│   └── hotfix/urgent-fix
└── release/v1.0.0
```

## 📊 Monitoring

### **Staging Monitoring:**

- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: Track staging traffic
- **Lighthouse**: Performance testing

### **Production Monitoring:**

- **Google Search Console**: SEO monitoring
- **Google Analytics**: Traffic analysis
- **Hostinger Analytics**: Server performance
- **Uptime Monitoring**: Website availability

## 🔧 Configuration Files

### **Environment-specific Configs:**

#### **Staging (.env.staging):**

```env
NODE_ENV=staging
BASE_URL=https://pioneer-solve-staging.vercel.app
GOOGLE_ANALYTICS_ID=GA_STAGING_ID
```

#### **Production (.env.production):**

```env
NODE_ENV=production
BASE_URL=https://pioneersolve.com
GOOGLE_ANALYTICS_ID=GA_PRODUCTION_ID
```

## 🚨 Rollback Strategy

### **Vercel Rollback:**

1. Buka Vercel Dashboard
2. Pilih deployment sebelumnya
3. Klik "Promote to Production"

### **Hostinger Rollback:**

1. Git revert ke commit sebelumnya
2. Push ke main branch
3. Auto-deploy via GitHub Actions

## 📱 Testing Checklist

### **Staging Testing:**

- [ ] Responsive design
- [ ] Cross-browser compatibility
- [ ] Performance testing
- [ ] SEO optimization
- [ ] Form functionality
- [ ] Social media sharing

### **Production Testing:**

- [ ] SSL certificate
- [ ] Domain redirects
- [ ] Analytics tracking
- [ ] Search console indexing
- [ ] Mobile usability
- [ ] Loading speed

## 🎯 Recommended Setup

### **Untuk Project Ini:**

1. **Staging**: Vercel (gratis, otomatis)
2. **Production**: Hostinger (domain yang sudah dibeli)
3. **CI/CD**: GitHub Actions

### **Benefits:**

- ✅ Staging gratis di Vercel
- ✅ Auto-deploy untuk staging
- ✅ Production di hosting yang sudah dibeli
- ✅ Backup dan rollback mudah
- ✅ Performance monitoring

---

**Next Steps:**

1. Setup Vercel untuk staging
2. Test deployment workflow
3. Configure environment variables
4. Setup monitoring tools
