
import { fetchData, type UserDataType } from '@/services/api';

interface Data {
  userData: UserDataType,
  isLoading: boolean
}

export default {
  data: ():Data => ({
    userData: {},
    isLoading: false,
  }),
  async mounted() {
    this.isLoading = true;
    const userData:UserDataType = await fetchData();
    this.userData = userData;
    this.isLoading = false;
  },
  render(h) {
    const slotNode = this.$scopedSlots.default({
      userData: this.userData,
      isLoading: this.isLoading,
    });
    if (Array.isArray(slotNode)) {
      if (slotNode.length > 1) {
        return h('div', { class: 'fetchDataScoped' }, slotNode);
      }
      return slotNode[0];
    }
    return slotNode;
  },
};
