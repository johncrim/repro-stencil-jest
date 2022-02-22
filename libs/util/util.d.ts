import { Observable } from 'rxjs';

/**
 * Returns an `Observable` that emits when any of the elements are resized.
 *
 * @param elts An element or array of elements.
 * @param options {@link ResizeObserverOptions} - ResizeObserver options
 * @returns An `Observable` that emits whenever the specified elements are resized.
 */
export declare function resizeObservable(elts: Element | Element[], options?: ResizeObserverOptions): Observable<ResizeObserverEntry>;
