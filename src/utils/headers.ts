export const headers = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.key_api_read_acess}`,
  },
};
