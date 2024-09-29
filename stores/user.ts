import { defineStore, acceptHMRUpdate } from "pinia";
import type { User } from "~/types/intefaces/User.interface";
interface UserState {
  user: User;
}

const useUserStore = defineStore("userStore", {
  state: (): UserState => {
    return {
      user: {
        id: "",
        app_metadata: {},
        user_metadata: {},
        aud: "",
        created_at: "",
        updated_at: "",
      },
    };
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
  }
  
  export default useUserStore;