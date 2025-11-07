# 🧠 Contelizer v1.0.0  
**Frontend React Recruitment Project**

Contelizer is a small web application built as part of a React recruitment challenge.  
It demonstrates the ability to work with **React, TypeScript, SCSS, and data handling** through practical coding tasks.  
Each task showcases a different aspect of frontend development — from file parsing and validation to API integration and state management using React Query.

---
## 🦊 Live Demo  

🔗 **[Visit Contelizer on Vercel](https://contelizer-qbrj.vercel.app)**

[![Live](public/screenshot.png)](https://contelizer-qbrj.vercel.app/)


## 🧩 Tasks Overview

### **Task One**
A text processing task.  
The user can upload a `.txt` file, and the app shuffles letters inside each word (keeping the first and last letter in place).  
The solution properly handles punctuation, uppercase/lowercase letters, multiline text, and Polish diacritics.

📁 **Key features:**
- File upload and preview  
- Shuffling algorithm  
- Proper handling of Polish characters  
- Option to download a sample `.txt` file  

---

### **Task Two**
A validation task (for example, PESEL or form validation).  
The task demonstrates clean, testable logic with clear UI feedback and error handling.

📁 **Key features:**
- Input validation logic  
- Error and success messages  
- Unit tests for validation  

---

### **Task Three**
An API integration task using the public API from **https://gorest.co.in/**.  
The app fetches a list of users and allows editing user details inside a form (mockup version currently without backend update).

📁 **Key features:**
- Fetching users with **React Query**  
- Editable user cards with a form  
- Controlled components and form states  
- Local mock update and console logging  

---

## 🛠 Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/react%20query-%23FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

## :camel: Project structure
```
Contelizer
├── public
│ ├── favicon.svg
│ └── index.html
├── src
│ ├── components
│ ├── types
│ ├── utils
│ ├── views
│ │ ├── TaskOne
│ │ ├── TaskTwo
│ │ └── TaskThree
│ ├── App.tsx
│ ├── main.tsx
│ └── styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```
## 🦄 Installation and Setup

**Clone the project:**
```
git clone https://github.com/OllaWilk/contelizer.git
```
**Go to the project directory:**
```
cd contelizer
```
**Install dependencies:**
```
npm install
```
**Start the server:**
```
npm run dev
```
## 🧾 Next Steps

- [ ] Move PATCH user update logic to the parent component (`TaskThree`)  
- [ ] Improve UX in Task Two (avoid showing messages on empty input)  
- [ ] Fix minor RWD inconsistencies  
- [ ] Add better API error handling in Task Three  
- [ ] Fix one unit test in Task Two  
- [ ] Update validation logic so the error message does not appear when the input is empty  

---

## 🌱 Contact

If you'd like to know more about this project or discuss my work — feel free to reach out.  
I'm always happy to talk about React, TypeScript, and frontend development.  

📧 **Email:**  alex.dev.wilk@gmail.com
💼 **LinkedIn:** [Aleksandra Wilk](linkedin.com/in/alex-wilk)  
🐙 **GitHub:** [OllaWilk](https://github.com/OllaWilk)
