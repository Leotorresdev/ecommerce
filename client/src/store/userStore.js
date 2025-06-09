// En tu userStore.js
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  token: null,
  login: (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
  hydrate: () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (token && user) {
    set({ token, user: JSON.parse(user) });
  } else if (token) {
    set({ token });
  }
}
}));

export default useUserStore;