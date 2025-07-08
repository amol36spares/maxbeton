const baseUrl = "https://www.maxbeton.in";
export const getProduct = (productId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${baseUrl}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId }),
      });

      if (response.ok) {
        const data = await response.json();
        resolve(data.product);
      } else {
        reject(new Error("Failed to Fetch Product"));
      }
    } catch (err) {
      reject(err);
    }
  });
};
