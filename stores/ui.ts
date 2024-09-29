import { defineStore, acceptHMRUpdate } from "pinia";
import type { Toast } from "~/types/intefaces/UiInterface";
interface UiState {
  pageLoader: boolean;
  loadingScreen: boolean;
  toast: Toast;
}
const useUiStore = defineStore("uiStore", {
  state: (): UiState => {
    return {
      pageLoader: false,
      loadingScreen: false,
      toast: {
        show:false,
        message: '',
        type: 'success'
      }
    };
  },
  actions: {
    setPageLoader(value: boolean) {
      this.pageLoader = value;
    },
    setLoadingScreen(value: boolean) {
      this.loadingScreen = value;
    },
    setToast(value: Toast){
      this.toast = value
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}

export default useUiStore;
