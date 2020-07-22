import { UserModule } from '@/store/modules/user';
import { DirectiveOptions } from 'vue/types/options';
import { coerceTruthyValueToArray } from '@/commons/utils/es/array.utils';

const permissionDirective: DirectiveOptions = {
    inserted(el, binding) {
        let { value: guardPermissions } = binding;
        const { permissions: userPermissions } = UserModule;
        let { arg } = binding;
        arg || (arg = 'includes');
        if (arg === 'includes') {
            guardPermissions = coerceTruthyValueToArray(guardPermissions) as Array<string>;
            const deleting = !guardPermissions.some((item: string) => userPermissions.includes(item));
            deleting && el.parentNode && el.parentNode.removeChild(el);
        } else if (arg === 'excludes') {
            const deleting = userPermissions.includes(guardPermissions);
            deleting && el.parentNode && el.parentNode.removeChild(el);
        } else if (arg === 'every') {
            guardPermissions = coerceTruthyValueToArray(guardPermissions);
            const deleting = !guardPermissions.every((item: string) => { userPermissions.includes(item); });
            deleting && el.parentNode && el.parentNode.removeChild(el);
        } else {
            throw new Error('请传入正确的指令参数，只能为includes或excludes');
        }
    }
};

export default permissionDirective;
