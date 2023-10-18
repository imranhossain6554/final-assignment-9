export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://tutorial-simple-server.vercel.app/"
  );
};
