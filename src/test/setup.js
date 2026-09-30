import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import { transferableAbortController } from "node:util";

// React Router's native Request must receive Node's AbortSignal, not jsdom's.
const nativeController = transferableAbortController();
vi.stubGlobal('AbortController', nativeController.constructor);
vi.stubGlobal('AbortSignal', nativeController.signal.constructor);

window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
