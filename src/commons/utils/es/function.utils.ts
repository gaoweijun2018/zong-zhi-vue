/**
 * 函数节流
 * @param fn 节流函数
 * @param threshold 函数节流间隔
 */
export const throttle = (fn: Function, threshold?: number): Function => {
    let start: number = 0;
    threshold = threshold || 1000;
    return function() {
        // @ts-ignore
        const context: any = this;
        const current: number = new Date().getTime();

        if (!start || current - start >= <number>threshold) {
            fn.apply(context, arguments);
            start = current;
        }
    };
};

/**
 * 洋葱啊洋葱
 */
export class AOP {
    /**
     * aop before
     */
    static before(fn: Function, beforeFn: Function): Function {
        return function() {
            // @ts-ignore
            beforeFn.apply(this, arguments);
            // @ts-ignore
            return fn.apply(this, arguments);
        };
    }

    /**
     * aop after
     */
    static after(fn: Function, afterFn: Function) {
        return function() {
            // @ts-ignore
            const res = fn.apply(this, arguments);
            // @ts-ignore
            afterFn.apply(this, arguments);
            return res;
        };
    }
}
