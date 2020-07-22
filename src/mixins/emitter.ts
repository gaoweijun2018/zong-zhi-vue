import { Component, Vue } from 'vue-property-decorator';

function broadcast(componentName: string, eventName: string, params: any) {
    // @ts-ignore
    this.$children.forEach(child => {
        const name = child.$options.name;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // @ts-ignore
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}

@Component({
    name: 'Emitter'
})
export default class Emitter extends Vue {
    /**
     * 触发事件到某个父组件
     * @param componentName
     * @param eventName
     * @param params
     */
    dispatch(componentName: string, eventName: string, params?: any) {
        let parent = this.$parent || this.$root;
        // @ts-ignore
        let name = parent.$options.name;

        while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;

            if (parent) {
                // @ts-ignore
                name = parent.$options.name;
            }
        }
        if (parent) {
            // @ts-ignore
            parent.$emit.apply(parent, [eventName].concat(params));
        }
    }

    /**
     * 触发事件到某个子组件
     * @param componentName
     * @param eventName
     * @param params
     */
    broadcast(componentName: string, eventName: string, params?: any) {
        broadcast.call(this, componentName, eventName, params);
    }
}
