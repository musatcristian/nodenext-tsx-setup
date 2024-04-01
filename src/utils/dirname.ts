import * as path from "path";
import { fileURLToPath } from "url";

export const getDirName = (meta: string) => {
  const filename = fileURLToPath(meta);
  return path.dirname(filename);
};
