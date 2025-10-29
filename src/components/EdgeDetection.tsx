"use client";

import { useEffect, useRef, useState } from "react";
import { useOpenCV } from "@/hooks/useOpenCV";
import type { EdgeParams, AlgorithmType } from "@/types/types";
import ImageDisplay from "@/components/ImageDisplay";
import Controls from "@/components/Controls";

const EdgeDetection = () => {
  const { cv, loading } = useOpenCV();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [algorithm, setAlgorithm] = useState<AlgorithmType>("Canny");
  const [params, setParams] = useState<EdgeParams>({
    lower: 50,
    upper: 150,
    ksize: 3,
    sigma: 1.0,
  });

  const inputRef = useRef<HTMLImageElement | null>(null);
  const outputRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (loading || !cv || !imageSrc) return;

    const imgEl = inputRef.current;
    const canvasEl = outputRef.current;
    if (!imgEl || !canvasEl) return;

    imgEl.decode().then(() => {
      const src = cv.imread(imgEl);
      let gray = new cv.Mat();
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

      if (params.sigma > 0) {
        const blurred = new cv.Mat();
        const ksize = new cv.Size(params.ksize, params.ksize);
        cv.GaussianBlur(
          gray,
          blurred,
          ksize,
          params.sigma,
          params.sigma,
          cv.BORDER_DEFAULT
        );
        gray.delete();
        gray = blurred;
      }

      let dst = new cv.Mat();

      switch (algorithm) {
        case "Canny":
          cv.Canny(gray, dst, params.lower, params.upper, params.ksize, true);
          break;

        case "Sobel": {
          const { direction = "Both", ksize } = params;

          if (direction === "X") {
            cv.Sobel(gray, dst, cv.CV_8U, 1, 0, ksize);
          } else if (direction === "Y") {
            cv.Sobel(gray, dst, cv.CV_8U, 0, 1, ksize);
          } else {
            const gradX = new cv.Mat();
            const gradY = new cv.Mat();

            cv.Sobel(gray, gradX, cv.CV_8U, 1, 0, ksize);
            cv.Sobel(gray, gradY, cv.CV_8U, 0, 1, ksize);

            const absX = new cv.Mat();
            const absY = new cv.Mat();
            cv.convertScaleAbs(gradX, absX);
            cv.convertScaleAbs(gradY, absY);

            cv.addWeighted(absX, 1, absY, 1, 0, dst);

            gradX.delete();
            gradY.delete();
            absX.delete();
            absY.delete();
          }
          break;
        }

        case "Laplacian":
          cv.Laplacian(gray, dst, cv.CV_8U, params.ksize);
          break;
      }

      cv.imshow(canvasEl, dst);
      src.delete();
      gray.delete();
      dst.delete();
    });
  }, [cv, imageSrc, algorithm, params]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageSrc(URL.createObjectURL(file));
  };

  const clearFn = () => {
    if (imageSrc) {
      URL.revokeObjectURL(imageSrc);
      setImageSrc(null);
    }

    if (inputRef.current) {
      inputRef.current.src = "";
    }

    const canvas = outputRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      canvas.width = canvas.width;
    }
  };
  return (
    <div className="bg-background w-full">
      <div className="p-8 flex flex-col gap-8 items-center">
        <h1 className="mt-18 mb-6 text-4xl font-bold">Edge Detection</h1>

        <Controls
          algorithm={algorithm}
          params={params}
          onAlgorithmChange={setAlgorithm}
          onParamsChange={setParams}
        />

        <ImageDisplay
          inputRef={inputRef}
          outputRef={outputRef}
          imageSrc={imageSrc}
          clearFn={clearFn}
          handleFileChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default EdgeDetection;
