export type DatepickerType = Date | null;

export type CropType = {
  id: number;
  name: string;
  isPlanted: boolean;
  seededAt: DatepickerType;
  harvestedAt: DatepickerType;
};

export type CropsType = {
  [id: number]: CropType;
};
