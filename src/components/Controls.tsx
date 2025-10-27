import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type {
  AlgorithmType,
  ControlProps,
  SobelDirection,
} from "@/types/types";

const Controls = ({
  algorithm,
  params,
  onAlgorithmChange,
  onParamsChange,
}: ControlProps) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[320px] px-6 py-8 rounded-3xl shadow-none bg-card">
      {/* Algorithm Selection */}
      <div className="flex flex-col gap-3">
        <Label className="text-md">Algorithm</Label>
        <Select
          value={algorithm}
          onValueChange={(value) => onAlgorithmChange(value as AlgorithmType)}
        >
          <SelectTrigger className="border border-primary/60 w-32">
            <SelectValue placeholder="Select algorithm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Canny">Canny</SelectItem>
            <SelectItem value="Sobel">Sobel</SelectItem>
            <SelectItem value="Laplacian">Laplacian</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Canny Parameters */}
      {algorithm === "Canny" && (
        <>
          <div className="flex flex-col gap-3">
            <Label>Lower Threshold: {params.lower}</Label>
            <Slider
              min={0}
              max={255}
              value={[params.lower]}
              onValueChange={([v]) => onParamsChange({ ...params, lower: v })}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Upper Threshold: {params.upper}</Label>
            <Slider
              min={0}
              max={255}
              value={[params.upper]}
              onValueChange={([v]) => onParamsChange({ ...params, upper: v })}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Kernel Size: {params.ksize}</Label>
            <Slider
              min={1}
              max={7}
              step={2}
              value={[params.ksize]}
              onValueChange={([v]) => onParamsChange({ ...params, ksize: v })}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Sigma (Gaussian Blur): {params.sigma.toFixed(1)}</Label>
            <Slider
              min={0}
              max={5}
              step={0.1}
              value={[params.sigma]}
              onValueChange={([v]) => onParamsChange({ ...params, sigma: v })}
            />
          </div>
        </>
      )}

      {/* Sobel Parameters */}
      {algorithm === "Sobel" && (
        <>
          <div className="flex flex-col gap-3">
            <Label>Kernel Size: {params.ksize}</Label>
            <Slider
              min={1}
              max={7}
              step={2}
              value={[params.ksize]}
              onValueChange={([v]) => onParamsChange({ ...params, ksize: v })}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Gradient Direction</Label>
            <RadioGroup
              className="flex gap-4"
              value={params.direction || "Both"}
              onValueChange={(v) =>
                onParamsChange({ ...params, direction: v as SobelDirection })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="X" id="dir-x" />
                <Label htmlFor="dir-x">X</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Y" id="dir-y" />
                <Label htmlFor="dir-y">Y</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Both" id="dir-both" />
                <Label htmlFor="dir-both">Both</Label>
              </div>
            </RadioGroup>
          </div>
        </>
      )}

      {/* Laplacian Parameters */}
      {algorithm === "Laplacian" && (
        <div className="flex flex-col gap-3">
          <Label>Kernel Size: {params.ksize}</Label>
          <Slider
            min={1}
            max={7}
            step={2}
            value={[params.ksize]}
            onValueChange={([v]) => onParamsChange({ ...params, ksize: v })}
          />
        </div>
      )}
    </div>
  );
};

export default Controls;
