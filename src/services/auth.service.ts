const checkIfAuthenticated = async (): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
};

export const authService = {
  checkIfAuthenticated,
};
