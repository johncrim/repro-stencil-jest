import { Observable, NEVER } from 'rxjs';

/**
 * Returns an `Observable` that emits when any of the elements are resized.
 *
 * @param elts An element or array of elements.
 * @param options {@link ResizeObserverOptions} - ResizeObserver options
 * @returns An `Observable` that emits whenever the specified elements are resized.
 */
function resizeObservable(elts, options) {
  const eltArray = Array.isArray(elts) ? elts : [elts];
  if (!window.ResizeObserver) {
    return NEVER;
  }
  return new Observable((subscriber) => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        subscriber.next(entry);
      }
    });
    for (const e of eltArray) {
      observer.observe(coerceElement(e), options);
    }
    return () => {
      observer.disconnect();
    };
  });
}

export { resizeObservable };
