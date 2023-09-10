export {
  CIRCULAR_REF,
  clearPrimitiveCaches,
  Cmd,
  Dict,
  EOF,
  isCmd,
  isDict,
  isName,
  isRefsEqual,
  Name,
  Ref,
  RefSet,
  RefSetCache,
} from "./src/core/primitives.js";
export { LocalPdfManager, NetworkPdfManager } from "./src/core/pdf_manager.js";
export { NullStream, Stream, StringStream } from "./src/core/stream.js";
export { Page, PDFDocument } from "./src/core/document.js";
