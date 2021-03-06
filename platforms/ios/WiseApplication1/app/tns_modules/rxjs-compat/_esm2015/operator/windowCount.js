import { windowCount as higherOrder } from 'rxjs/operators';
export function windowCount(windowSize, startWindowEvery = 0) {
    return higherOrder(windowSize, startWindowEvery)(this);
}
//# sourceMappingURL=windowCount.js.map