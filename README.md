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

### 🧩 Algorithms Supported
1. **Sobel Operator**
   - Detects gradients in X, Y, or both directions.  
   - Adjustable **kernel size**.
2. **Laplacian Operator**
   - Detects intensity changes using the Laplacian of the image.  
   - Adjustable **kernel size**.
3. **Canny Edge Detection**
   - Multi-stage algorithm using Gaussian blur + gradient detection.  
   - Adjustable **lower/upper thresholds**, **kernel size**, and **sigma**.

### ⚙️ Parameter Controls
- Real-time interactive sliders and dropdowns for:
  - Canny: `lower`, `upper`, `ksize`, `sigma`
  - Sobel: `ksize`, `direction (X, Y, Both)`
  - Laplacian: `ksize`
- Parameters update live or via an **“Apply” button**.

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

### 1. Install NodeJS (atleast NodeJS v24) 
### 2. Install all the dependencies
```bash npm i pnpm ```
```bash pnpm i ```
### 3. Run the application

