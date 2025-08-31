# Rohit Kamlesh Chauhan - React Portfolio

A modern, responsive React portfolio website showcasing the skills and projects of Rohit Kamlesh Chauhan, a MERN Stack Developer.

## 🌟 Features

### Design & UI
- **Modern Gradient Design**: Beautiful purple-blue gradient theme
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations and React interactions
- **Glass Morphism**: Modern glass effect navigation bar
- **Floating Graphics**: Animated background shapes and elements
- **Interactive Elements**: Hover effects and smooth transitions

### Sections
1. **Hero Section**: Introduction with animated typing effect
2. **About Section**: Personal information with statistics
3. **Skills Section**: Organized by categories (Frontend, Backend, Other)
4. **Projects Section**: Showcase of completed projects
5. **Contact Section**: Contact form with EmailJS integration

### Interactive Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: React Scroll navigation between sections
- **Email Integration**: Contact form sends emails via EmailJS
- **Scroll to Top**: Floating button to return to top
- **Hover Effects**: Interactive hover animations
- **Framer Motion**: Advanced animations and transitions

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **Framer Motion**: Animation library
- **React Scroll**: Smooth scrolling
- **React Icons**: Icon library
- **EmailJS**: Email service integration
- **CSS3**: Modern styling with Flexbox and Grid

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd rohit-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure EmailJS** (for contact form functionality):
   
   a. Sign up at [EmailJS](https://www.emailjs.com/)
   
   b. Create an email service (Gmail, Outlook, etc.)
   
   c. Create an email template with variables:
      - `to_email`: Your email address
      - `from_name`: Sender's name
      - `from_email`: Sender's email
      - `subject`: Email subject
      - `message`: Email message
   
   d. Update the EmailJS configuration in `src/App.js`:
      ```javascript
      // Replace these with your actual EmailJS credentials
      emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
      
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Your EmailJS template ID
        {
          to_email: 'fakerohitchauhan6232@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );
      ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## 🎨 Customization

### Colors
The main color scheme uses CSS gradients:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Background: `#f5f7fa` (Light Gray)

### Content Updates
To update the content:

1. **Personal Information**: Edit the hero section in `src/App.js`
2. **Skills**: Modify the skills section with your expertise
3. **Projects**: Add or modify project cards
4. **Contact**: Update contact information

### Styling
- Modify `src/App.css` for design changes
- Update gradients, colors, and animations
- Adjust responsive breakpoints as needed

## 📋 Projects Showcased

1. **Payroll Management System**
   - Java + MySQL
   - Employee management and salary calculations

2. **Student Management System**
   - Java + MySQL + JSP
   - Student data and grade management

3. **Medicoo - Medical App**
   - React Native + SQLite
   - Medical data CRUD operations

4. **Modern Web Applications**
   - HTML + CSS + JavaScript
   - Responsive web applications

## 🌐 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify

## 🔧 EmailJS Setup Guide

1. **Create EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**:
   - Go to Email Services
   - Add Gmail, Outlook, or other email service
   - Note down the Service ID

3. **Create Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use variables: `{{to_email}}`, `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Note down the Template ID

4. **Get Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update Code**:
   - Replace placeholders in `src/App.js` with your actual credentials

## 📄 License

This project is created for personal portfolio use. Feel free to customize and use for your own portfolio.

## 🤝 Contact

For any questions or suggestions, feel free to reach out:
- Email: fakerohitchauhan6232@gmail.com
- Phone: +91 7024756186

---

**Note**: This portfolio is inspired by modern design trends but created with unique styling and functionality to avoid copyright issues.
