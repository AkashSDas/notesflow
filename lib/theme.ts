export const getThemeFromLocalStorage = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }

    localStorage.setItem("theme", "dark");
    return "dark";
  }

  return null;
};

export const setThemeInLocalStorage = (theme) => {
  if (typeof window !== undefined) {
    localStorage.setItem("theme", theme);
  }
};
