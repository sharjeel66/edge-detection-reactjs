import type { RefObject } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CircleX } from "lucide-react";
import FileUploadCard from "./FileUploadCard";

interface Props {
  inputRef: RefObject<HTMLImageElement | null>;
  outputRef: RefObject<HTMLCanvasElement | null>;
  imageSrc: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearFn: () => void;
}

const ImageDisplay = ({
  inputRef,
  outputRef,
  imageSrc,
  clearFn,
  handleFileChange,
}: Props) => {
  return (
    <div className="grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      <Card className="text-center border-none shadow-none gap-1 rounded-3xl relative">
        <CardHeader className="text-xl">
          <FileUploadCard handleFileChange={handleFileChange} />
          Input Image
          <div
            className="hover:cursor-pointer absolute px-1 right-4"
            onClick={clearFn}
          >
            {" "}
            <CircleX />
          </div>
        </CardHeader>
        <CardContent>
          {imageSrc ? (
            <img
              ref={inputRef}
              src={imageSrc}
              alt="Input"
              className="mt-2 rounded-3xl w-full aspect-square object-cover"
            />
          ) : (
            <p className="text-sm text-muted-foreground">
              No image has been selected
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="text-center border-none gap-1 rounded-3xl shadow-none">
        <CardHeader className="text-lg">OUTPUT IMAGE</CardHeader>
        <CardContent>
          <canvas
            ref={outputRef}
            width={256}
            height={256}
            className="rounded-3xl w-full aspect-square"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageDisplay;
