import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
