import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  gridSizes = {
    1536: 4,
    1200: 3,
    900: 2,
    600: 1,
  };

  sizes = Object.entries(this.gridSizes).sort(
    (a, b) => Number(b[0]) - Number(a[0])
  );

  setBreakpoint(width: number) {
    let currentSize = 4;
    this.sizes.forEach(([breakpoint, size]) => {
      if (width <= Number(breakpoint)) {
        currentSize = size;
      }
    });

    return currentSize;
  }
}
