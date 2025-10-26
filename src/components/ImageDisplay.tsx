import type { RefObject } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Props {
  inputRef: RefObject<HTMLImageElement | null>;
  outputRef: RefObject<HTMLCanvasElement | null>;
  imageSrc: string | null;
}

const ImageDisplay = ({ inputRef, outputRef, imageSrc }: Props) => {
  return (
    <div className="grid w-[300px] md:w-full md:px-12 max-w-7xl sm:grid-cols-1 md:grid-cols-2 gap-8 justify-center">
      <Card className="text-center border-none shadow-none gap-1 rounded-3xl">
        <CardHeader className="text-xl">Input Image</CardHeader>
        <CardContent>
          {imageSrc ? (
            <img
              ref={inputRef}
              src={imageSrc}
              alt="Input"
              className="rounded-3xl w-full aspect-square object-cover"
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
