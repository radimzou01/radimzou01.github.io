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

export enum Status {
  Empty = "empty",
  Creating = "creating",
  Editing = "editing",
  Deleting = "deleting",
  Inhabited = "inhabited",
}
