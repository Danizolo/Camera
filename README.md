# 📷 Camera Dashboard – React Frontend Assignment

A responsive and user-friendly camera management dashboard built with **React**. This project fetches camera data from a provided API and displays it in a searchable, filterable, and paginated table.

---

## DEMO URL

https://camera-two-jet.vercel.app/

## 🚀 Features

* ✅ Fetch and display camera data from API
* ✅ Frontend pagination
* ✅ Search functionality
* ✅ Status filter dropdown (Active / Inactive)
* ✅ Toggle camera status
* ✅ Delete camera entries (frontend only)
* ✅ Responsive modern UI
* ✅ Clean and modular React architecture

---



## 🛠 Tech Stack

* **React (JavaScript)**
* **Vite**
* **Tailwind CSS**
* **Axios**

---

## 📂 Project Structure

```
src/
├── api/
│   └── cameraApi.js
├── components/
│   ├── CameraTable.jsx
│   ├── SearchBar.jsx
│   └── Pagination.jsx
├── pages/
│   └── Dashboard.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repository-url>
cd camera-dashboard
```

### 2. Install dependencies

```
npm install
```



The app will run at:

```
http://localhost:3000
```

---

## 🌐 API Integration

### Fetch Cameras

```
GET https://hiring-assignment.wobot.ai/api/v1/fetch/cameras
```

### Update Status

```
POST https://hiring-assignment.wobot.ai/api/v1/update/camera/status
```

Payload:

```
{
  id: number,
  status: "Active" | "Inactive"
}
```

Authentication is handled using Bearer token in Axios configuration.

---

## 🎯 Usage

* Use the **search bar** to filter cameras by name
* Use the **status dropdown** to filter Active/Inactive cameras
* Toggle camera status using the status button
* Delete rows using the delete action
* Navigate through pages using pagination controls

---

## 🚀 Deployment

This project can be deployed using:

* **Vercel**
* **Netlify**
* **GitHub Pages**

### Build project

```
npm run build
```

Upload the generated `dist/` folder to your hosting platform.

---

## 📌 Future Improvements

* Sorting columns
* Loading skeletons
* Error handling UI
* Toast notifications
* Dark mode
* Virtualized table for large datasets

---

## 👨‍💻 Author

**Dhanush**

Frontend React Assignment – Camera Dashboard

---

## 📄 License

This project is for assignment/demo purposes only.
