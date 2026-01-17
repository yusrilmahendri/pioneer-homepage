# 🚀 Deployment Configuration untuk Hostinger

## 1. Setup GitHub Repository

### Langkah-langkah:

1. **Push code ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit with SEO optimization"
   git branch -M main
   git remote add origin https://github.com/username/pioneer-solve.git
   git push -u origin main
   ```

## 2. GitHub Secrets Configuration

### Masuk ke GitHub Repository Settings:

1. Buka repository di GitHub
2. Klik **Settings** → **Secrets and variables** → **Actions**
3. Klik **New repository secret**

### Secrets yang perlu ditambahkan:

#### Untuk FTP Deployment:

```
FTP_SERVER = 151.106.117.26
FTP_USERNAME = u462762732
FTP_PASSWORD = your_ftp_password
```

#### Untuk SSH Deployment (jika tersedia):

```
SSH_HOST = yourdomain.com
SSH_USERNAME = your_ssh_username
SSH_PRIVATE_KEY = your_private_key
SSH_PORT = 22
```

## 3. Hostinger Configuration

### FTP Credentials:

1. Login ke Hostinger Control Panel
2. Buka **Files** → **File Manager**
3. Catat informasi FTP:
   - **FTP Host**: ftp.yourdomain.com
   - **FTP Username**: (dari Hostinger)
   - **FTP Password**: (dari Hostinger)
   - **Port**: 21 (default)

### SSH Access (jika tersedia):

1. Di Hostinger Control Panel
2. Buka **Advanced** → **SSH Access**
3. Enable SSH access
4. Generate SSH key pair

## 4. Domain Configuration

### DNS Settings:

1. **A Record**: Point ke Hostinger IP
2. **CNAME**: www → yourdomain.com
3. **MX Records**: Untuk email (jika ada)

### SSL Certificate:

1. Enable **Free SSL Certificate** di Hostinger
2. Force HTTPS redirect di .htaccess

## 5. Testing Deployment

### Manual Test:

1. Push perubahan ke GitHub
2. Cek GitHub Actions tab
3. Monitor deployment logs
4. Test website di browser

### Troubleshooting:

- Cek FTP credentials
- Verify file permissions
- Monitor error logs
- Test local build

## 6. Alternative Deployment Methods

### Option A: Direct Git Push (SSH)

```bash
# Setup SSH key di Hostinger
ssh-keygen -t rsa -b 4096
# Add public key ke Hostinger SSH keys

# Clone repository di server
git clone https://github.com/username/pioneer-solve.git public_html

# Auto-deploy script
#!/bin/bash
cd public_html
git pull origin main
```

### Option B: Manual Upload

1. Build project locally
2. Upload via File Manager
3. Extract files ke public_html

### Option C: Hostinger Git Integration

1. Enable Git di Hostinger
2. Connect GitHub repository
3. Auto-deploy on push

## 7. Performance Optimization

### Post-Deployment:

1. **Enable Gzip Compression** ✅ (sudah di .htaccess)
2. **Browser Caching** ✅ (sudah di .htaccess)
3. **CDN Setup** (jika diperlukan)
4. **Database Optimization** (jika ada)

### Monitoring:

1. **Google PageSpeed Insights**
2. **GTmetrix**
3. **Google Search Console**
4. **Hostinger Analytics**

## 8. Security Checklist

### Pre-Deployment:

- [ ] Remove sensitive files (.env, config files)
- [ ] Set proper file permissions
- [ ] Enable SSL certificate
- [ ] Configure security headers ✅

### Post-Deployment:

- [ ] Test all forms and functionality
- [ ] Verify SSL certificate
- [ ] Check mobile responsiveness
- [ ] Test loading speed

## 9. Backup Strategy

### Automated Backups:

1. **GitHub**: Code versioning
2. **Hostinger**: Daily backups
3. **Local**: Regular downloads

### Manual Backup:

```bash
# Backup website files
wget -r -np -k https://yourdomain.com/

# Backup database (jika ada)
mysqldump -u username -p database_name > backup.sql
```

---

**Next Steps:**

1. Setup GitHub repository
2. Configure GitHub Secrets
3. Test deployment workflow
4. Monitor performance
5. Setup monitoring tools
