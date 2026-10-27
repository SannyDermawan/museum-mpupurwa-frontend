export type MediaStatus = "Lengkap" | "Belum ada video" | "Belum ada PDF" | "Belum ada video dan PDF";

export interface CollectionItem {
  id: string;
  nama: string;
  era: string;
  material: string;
  statusMedia: MediaStatus;
}
