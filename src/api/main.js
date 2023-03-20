const userData = [
  { userName: "demo01", password: "Hello123" },
  { userName: "demo02", password: "Hello123" },
  { userName: "demo03", password: "Hello123" },
];

export const handleLogin = (data) => {
  const isMatched = userData.some((u) => {
    if (u.userName === data.userName && u.password === data.password) {
      return true;
    } else {
      return false;
    }
  });
  return isMatched ? 200 : 400;
};
