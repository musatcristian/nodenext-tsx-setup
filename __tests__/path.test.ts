import { getDirName } from "../src/utils/dirname";
import { getFileName } from "../src/utils/filename";

describe("utils", () => {
  test("is __dirname", () => {
    // const t = "file:///Volumes/Macintosh%20HD%20-%20Data/personal/node/2023/ts-node/tests/dirname.test.ts";
    const d = `file://${__dirname}/dirname.test.ts`;
    const dirName = getDirName(d);
    expect(__dirname).toBe(dirName);
  });

  test("is __filename", () => {
    const f = `file://${__filename}`;
    const fileName = getFileName(f);
    expect(__filename).toBe(fileName);
  });
});
