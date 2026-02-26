# 🏥 HealthBridge: The Unified Patient-Provider Ecosystem

[![Python](https://img.shields.io/badge/Backend-Python%203.10+-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/API-FastAPI-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/Frontend-React%2018-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Flutter](https://img.shields.io/badge/Mobile-Flutter-02569B?style=for-the-badge&logo=flutter)](https://flutter.dev/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql)](https://www.mysql.com/)

**HealthBridge** is a modern, full-stack healthcare platform designed to bridge the gap between patients and medical providers. It features a real-time mobile experience for patients and a data-rich dashboard for doctors.

## 👨‍💻 Author
M.A.Chalini Kaushalya
---

## 🏗️ The Ecosystem Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Mobile App** | **Flutter** | Patient vitals tracking, symptom logging, and real-time chat. |
| **Web Dashboard** | **React + TypeScript** | Doctor portal for patient analytics, scheduling, and records. |
| **Backend API** | **Python (FastAPI)** | Secure data processing, business logic, and PDF report generation. |
| **Real-time Engine** | **Google Firestore** | Live messaging and instant health alerts. |
| **Relational Data** | **MySQL** | Strict storage for medical history, billing, and user auth. |

---

## 📁 Project Structure

This project is organized as a **Monorepo** to keep all components in sync:

```text
healthbridge/
├── healthbridge-api/       # Python FastAPI Backend
├── healthbridge-web/       # React (TypeScript) Admin Dashboard
├── healthbridge-mobile/    # Flutter Mobile Application
├── docker/                 # Database & Environment configurations
└── docs/                   # Documentation & API Blueprints
```
# 🚀 Getting Started

## 📌 Prerequisites

Make sure you have the following installed before running the project:

- **Python 3.10+** (for API)
- **Node.js & npm** (for React Web App)
- **Flutter SDK** (for Mobile App)
- **Docker Desktop** (to run MySQL)

---

## 💻 Local Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ChaliniKK/HealthBridge.git
cd HealthBridge
```
### 2️⃣ Setup the API (FastAPI)
```bash
cd healthbridge-api
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```
### 3️⃣ Setup the Web App (React)
```bash
cd healthbridge-web
npm install
npm start
```
### 4️⃣ Setup the Mobile App (Flutter)
```bash
cd healthbridge-mobile
flutter pub get
flutter run
```
---

## 🛠️ Roadmap & Progress

 - Phase 1: Monorepo Setup & Authentication Logic (FastAPI + MySQL)

 - Phase 2: Patient Vitals Input (Flutter + Firestore)

 - Phase 3: Provider Analytics Dashboard (React + Chart.js)

 - Phase 4: Telemedicine Chat & Video Integration

---

### ⚠️ Disclaimer

This project is developed for educational purposes only and is not intended for actual clinical use.
