<div align="center">

# 🚀 Alexis Mialon - Portfolio

A modern, responsive personal portfolio built with React and TypeScript.

[**🌐 Live demo**](https://vorpalin.github.io) · [**🐛 Report a bug**](https://github.com/Vorpalin/Vorpalin.github.io/issues)

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
[![Prettier](https://img.shields.io/badge/code_style-prettier-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)
![License](https://img.shields.io/badge/license-MIT-8245ec)

![Preview](./docs/preview.png)

</div>

---

## ✨ Features

- 🌗 **Dark / light mode**, with system preference detection and saved choice
- 📱 **Fully responsive**, from mobile to large desktop screens
- 🎯 **Animated background** made of moving dots (canvas)
- 🗂️ **Sections**: About, Skills, Experience, Projects, Education, Contact
- 🖼️ **Project modal** with description, tags, code and live links
- ✉️ **Working contact form** with toast notifications
- 📄 **Downloadable CV**

## 🛠️ Tech stack

| Category     | Tools                   |
| ------------ | ----------------------- |
| Framework    | React 19, TypeScript    |
| Build tool   | Vite                    |
| Styling      | Tailwind CSS v4         |
| Icons        | React Icons             |
| Contact form | EmailJS, React Toastify |
| Formatting   | Prettier                |

## 🚀 Getting started

```bash
# Clone the repository
git clone https://github.com/Vorpalin/Vorpalin.github.io.git
cd Vorpalin.github.io

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the build locally
npm run format    # format the code with Prettier
```

## 🔐 Environment variables

Create a `.env` file at the root for the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project structure

```
src/
├── assets/         # images and logos
├── components/     # About, Skills, Experience, Projects, ...
├── constants.tsx      # data (skills, projects, experiences, education)
├── App.tsx
└── index.css       # Tailwind config and theme tokens
```

## 🗺️ Roadmap

- [x] Responsive layout
- [x] Dark / light mode
- [ ] Multilingual support (FR / EN)

## 📬 Contact

**Alexis Mialon**
[LinkedIn](https://www.linkedin.com/in/alexis-mialon-79117b329/) · [GitHub](https://github.com/Vorpalin)

---

## 🙏 Credits

- Original design and structure inspired by [codingmastr/Tarun-s-Portfolio](https://github.com/codingmastr/Tarun-s-Portfolio/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Contact form powered by [EmailJS](https://www.emailjs.com/)
- Badges by [Shields.io](https://shields.io/)

<div align="center">Made with 💜 by Alexis Mialon</div>
