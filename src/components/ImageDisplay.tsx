import type { RefObject } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Props {
  inputRef: RefObject<HTMLImageElement | null>;
  outputRef: RefObject<HTMLCanvasElement | null>;
  imageSrc: string | null;
}

const ImageDisplay = ({ inputRef, outputRef, imageSrc }: Props) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      <Card className="text-center">
        <CardHeader className="font-semibold">Input Image</CardHeader>
        <CardContent>
          {imageSrc ? (
            <img
              ref={inputRef}
              src={imageSrc}
              alt="Input"
              className="border rounded-lg w-full aspect-square object-cover"
            />
          ) : (
            <p className="text-sm text-muted-foreground">Upload an image</p>
          )}
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardHeader className="font-semibold">Output Image</CardHeader>
        <CardContent>
          <canvas
            ref={outputRef}
            width={256}
            height={256}
            className="border rounded-lg w-full aspect-square"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageDisplay;
