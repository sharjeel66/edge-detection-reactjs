import { ImagePlus } from "lucide-react";

export default function FileUploadCard({
  handleFileChange,
}: {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className="hover:cursor-pointer absolute left-5 top-6"
      onClick={() => document.getElementById("fileInput")?.click()}
    >
      <ImagePlus className="w-8 h-8 text-primary hover:scale-105 transition" />
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
