import * as core from "../src/index.js";
import { promises as fs } from "fs";

test("try test", async () => {
  const pdf = await fs.readFile("./tests/data/test_1.pdf");
  const manager = new core.LocalPdfManager({
    disableAutoFetch: false,
    docBaseUrl: null,
    docId: "test",
    enableXfa: false,
    evaluatorOptions: {},
    handler: null,
    length: 0,
    password: null,
    rangeChunkSize: 0,
    source: pdf,
  });

  const pdfDocument = manager.pdfDocument;

  pdfDocument.parseStartXRef();
  pdfDocument.parse();

  const xref = pdfDocument.xref;
  expect(xref).not.toBeNull();
  const root = xref.trailer;
  expect(root).not.toBeNull();
});
