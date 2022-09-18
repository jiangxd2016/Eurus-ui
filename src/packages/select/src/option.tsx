import { defineComponent, inject, onMounted } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';

export default defineComponent({
  props: {
    value: String,
    label: String,
    disabled: Boolean,
    className: String
  },
  setup(props) {
    const prefixCls = getPrefixCls('select-option');

    const GetChildOption = inject(`${prefixCls}GetChildOption`, (...args: any) => { });
    onMounted(() => {
      GetChildOption && GetChildOption({
        label: props.label,
        value: props.value,
        disabled: props.disabled,
        className: props.className
      });
    });
  },
  render() {
    return null;
  }
});