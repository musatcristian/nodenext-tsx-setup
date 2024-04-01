import { fileURLToPath } from "url";

export const getFileName = (meta: string) => {
  return fileURLToPath(meta);
};
