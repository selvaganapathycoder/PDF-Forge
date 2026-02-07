# 📄 PDF Forge

<div align="center">

![PDF Forge Demo](./public/pdf.gif.gif)

**Transform your text into professional PDFs instantly with a stunning glassmorphic interface.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-00D9FF?style=for-the-badge&logo=vercel&logoColor=white)](https://pdf-forge-4zgrebs6r-selvaganapathys-projects-840a79fb.vercel.app)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## ✨ Features

### 🎨 **Premium Glassmorphic UI**
- **Stunning Visual Design**: Modern glassmorphism with neon accents and smooth gradients
- **Animated Background**: Dynamic floating blobs and grid patterns for a futuristic feel
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices

### 🚀 **Core Functionality**
- **📝 Text-to-PDF Conversion**: Instantly convert any text content into professional PDF documents
- **📁 Drag & Drop Support**: Upload `.txt` files with an intuitive drag-and-drop interface
- **✏️ Custom File Naming**: Name your PDFs exactly how you want them
- **📄 Multi-Page Support**: Automatically handles content overflow with intelligent pagination
- **⚡ Instant Download**: Generate and download PDFs in milliseconds

### 💡 **User Experience**
- **Auto-Resizing Text Area**: Intelligent textarea that grows with your content
- **File Validation**: Built-in validation ensures only `.txt` files are accepted
- **Success Animations**: Delightful feedback with animated success states
- **Toast Notifications**: Real-time feedback using react-hot-toast
- **Loading States**: Professional loading indicators during PDF generation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19.2** | Modern UI library with latest features |
| **Vite 7.2** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4.1** | Utility-first CSS framework for rapid styling |
| **Framer Motion 12.33** | Production-ready animation library |
| **jsPDF 4.1** | Client-side PDF generation |
| **react-dropzone 14.4** | Drag-and-drop file upload functionality |
| **react-hot-toast 2.6** | Beautiful toast notifications |
| **Lucide React** | Modern icon library |

---

## 🎯 Key Highlights

### 🎨 **Design Philosophy**
This project demonstrates mastery of modern web design principles:
- **Glassmorphism**: Translucent cards with backdrop blur effects
- **Neon Aesthetics**: Vibrant cyan, purple, and blue color palette
- **Micro-interactions**: Hover effects, transitions, and state-based animations
- **Dark Mode First**: Designed for optimal viewing in low-light environments

### 💻 **Code Quality**
- **Component-Based Architecture**: Modular, reusable React components
- **Clean Code Practices**: Well-organized file structure and naming conventions
- **Performance Optimized**: Efficient rendering with React best practices
- **ESLint Integration**: Consistent code quality and style enforcement

### 🚀 **Production Ready**
- **Deployed on Vercel**: Continuous deployment with automatic builds
- **Optimized Bundle**: Vite's tree-shaking and code-splitting for fast load times
- **Error Handling**: Graceful error states and user feedback
- **Cross-Browser Compatible**: Works seamlessly across modern browsers

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git for version control

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/pdf-forge.git

# Navigate to project directory
cd pdf-forge

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

---

## 🎮 Usage

1. **Enter Text**: Type or paste your content into the auto-resizing text area
2. **Or Upload File**: Drag and drop a `.txt` file into the drop zone
3. **Name Your PDF**: Enter a custom filename (without extension)
4. **Generate**: Click the "Generate PDF" button
5. **Download**: Your PDF will automatically download to your device

---

## 📁 Project Structure

```
pdf-forge/
├── public/
│   └── pdf.gif.gif          # Demo GIF
├── src/
│   ├── components/
│   │   ├── DropZone.jsx     # Drag-and-drop file upload
│   │   ├── FileNameInput.jsx # Custom filename input
│   │   ├── GenerateButton.jsx # Animated action button
│   │   ├── GlassCard.jsx    # Glassmorphic container
│   │   └── TextInput.jsx    # Auto-resizing textarea
│   ├── utils/
│   │   └── generatePDF.js   # PDF generation logic
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

---

## 🎨 Design Tokens

### Color Palette
```css
Primary Gradient: cyan-400 → blue-400 → purple-500
Background: #0a0a0f (Deep Space Black)
Glass Effect: rgba(255, 255, 255, 0.05) with backdrop-blur
Accents: Cyan (#00D9FF), Purple (#A855F7), Blue (#3B82F6)
```

### Animations
- **Blob Animation**: Floating background elements with 7s duration
- **Fade In**: Initial page load with 0.8s transition
- **Hover Effects**: Scale transforms and glow effects
- **Success State**: Checkmark animation with color transitions

---

## 🌟 Why This Project Stands Out

### 1. **Modern Design Trends**
Implements cutting-edge design patterns including glassmorphism, neon aesthetics, and micro-interactions that are highly sought after in 2026.

### 2. **Production-Grade Code**
Not just a demo—this is a fully functional, production-ready application with proper error handling, loading states, and user feedback.

### 3. **Performance Focused**
Built with Vite for optimal build times and bundle sizes. Implements React best practices for efficient rendering.

### 4. **User-Centric**
Every interaction is thoughtfully designed with the user in mind—from drag-and-drop convenience to instant visual feedback.

### 5. **Scalable Architecture**
Component-based structure makes it easy to extend functionality and maintain code quality as the project grows.

---

## 🚀 Future Enhancements

- [ ] **Rich Text Editor**: Add formatting options (bold, italic, headings)
- [ ] **Custom Styling**: Allow users to customize fonts, colors, and margins
- [ ] **Template Library**: Pre-designed PDF templates for different use cases
- [ ] **Cloud Storage**: Integration with Google Drive or Dropbox
- [ ] **Batch Processing**: Convert multiple files at once
- [ ] **PDF Preview**: Live preview before download
- [ ] **Export Options**: Support for different page sizes and orientations

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 About the Developer

Built with ❤️ by **Selvaganapathy**

This project showcases expertise in:
- Modern React development with hooks and functional components
- Advanced CSS techniques (Glassmorphism, animations, gradients)
- User experience design and micro-interactions
- Production deployment and DevOps (Vercel)
- Clean code architecture and best practices

---


<div align="center">

**If you found this project helpful, please consider giving it a ⭐!**

Made with React, Tailwind CSS, and a lot of ☕

</div>
