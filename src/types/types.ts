import type * as cv from "@opencvjs/types";

export type OpenCV = typeof cv;

export type AlgorithmType = "Canny" | "Sobel" | "Laplacian";

export type SobelDirection = "X" | "Y" | "Both";

export interface EdgeParams {
  lower: number;
  upper: number;
  ksize: number;
  sigma: number;
  direction?: SobelDirection;
}

export interface ControlProps {
  algorithm: AlgorithmType;
  params: EdgeParams;
  onAlgorithmChange: (algo: AlgorithmType) => void;
  onParamsChange: (params: EdgeParams) => void;
}
