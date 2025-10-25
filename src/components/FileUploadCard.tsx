import { Card } from "@/components/ui/card";
import { ImagePlus } from "lucide-react";

export default function FileUploadCard({
  handleFileChange,
}: {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Card
      className="flex flex-col items-center justify-center gap-2 border-dashed border-2 border-primary/50 px-6 py-8 text-center hover:border-primary/70 hover:bg-muted/50 transition cursor-pointer"
      onClick={() => document.getElementById("fileInput")?.click()}
    >
      <ImagePlus className="w-8 h-8 text-primary/80" />
      <p className="text-sm text-muted-foreground">Click to upload an image</p>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </Card>
  );
}
