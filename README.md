# 🧠 Computer Vision Edge Detection Application

## 📘 Project Overview
This project is an **interactive web-based edge detection tool** that allows users to visually experiment with popular image processing algorithms using **OpenCV.js** in a **Reactjs** app.  
Users can upload an image, select an edge detection algorithm (Sobel, Laplacian, or Canny), adjust parameters dynamically, and instantly view the effects.

The application is designed to provide an **educational and visual understanding** of how edge detection algorithms work and how their parameters affect results.

---

## 🎯 Features

### 🖼️ Image Upload
- Upload images directly from your local device.  
- Supports common formats: **JPG**, **PNG**, **BMP**.  
- Automatically displays the uploaded image side-by-side with the output.

---

### 🖥️ User Interface
- Clean, minimal UI using **shadcn/ui**, **Lucide React icons**, and **Tailwind CSS**.  
- Side-by-side display:
  - **Left:** Original Image  
  - **Right:** Processed Image  
- Includes buttons for:
  - Uploading Image  
  - Applying Algorithm  
  - Clearing Canvas  

---

## 🚀 Tech Stack
| Category | Tools Used |
|-----------|-------------|
| Frontend Framework | React 19 |
| Styling | Tailwind CSS + shadcn/ui |
| Image Processing | OpenCV.js |
| Icons | Lucide React |
| Package Manager | pnpm |

---

## 🧠 How to Run the Application

### 1. Install NodeJS (v22 or later)
Make sure you have Node.js installed on your system.

### 2. Install pnpm
After cloning this repository, open a terminal window in the newly created directory and run the following commands:
```bash
npm i pnpm
```

### 3. Install all the dependencies
```bash
pnpm i
```

### 4. Run the application
```bash
pnpm run dev
```

### 5. Open in browser
Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure

```
edge-detection-reactjs/
├── src/
│   ├── components/
│   │   ├── ui/            # UI componenets from shadcn
│   │   ├── FileUploadCard.tsx    # File upload functionality
│   │   ├── EdgeDetection.tsx     # Contains the algorithms for edge detection
│   │   ├── Controls.tsx          # Contains the controls like slider and radio button
│   │   └── ImageDisplay.tsx      # Contains the Input Image and Output Image Component
│   ├── hooks/
│   │   └── useOpenCV.ts          # Enables the use of OpenCV.js
│   ├── lib/
│   │   └── util.ts               # Utility for shadcn
│   ├── types/
│   │   └── types.ts              # Contains the types for typescript
│   ├── App.tsx                   # Starts the App and Calls the EdgeDetection Component
│   ├── main.tsx                  # Injects the React app to the html page
│   └── index.css                 # Contains the CSS variables for tailwind css
│
├── package.json
└── README.md
```

---

## 🧮 Algorithms Implemented

### 🔹 Canny Edge Detection
Performs:
1. Gaussian smoothing  
2. Gradient computation  
3. Non-maximum suppression  
4. Hysteresis thresholding  

**Parameters:**  
- Lower Threshold  
- Upper Threshold  
- Kernel Size  
- Sigma (for Gaussian blur)

---

### 🔹 Sobel Operator
Computes gradients along **X**, **Y**, or **Both** directions and combines them to visualize edges.

**Parameters:**  
- Kernel Size  
- Direction (X, Y, Both)

---

### 🔹 Laplacian Operator
Uses the second derivative of the image to detect rapid intensity changes.

**Parameters:**  
- Kernel Size

---

## 🧑‍💻 Developer Information

**Sharjeel Ahmed**  
**Roll No:** 0022-BSCS-22  
**Government College University, Lahore**

---
