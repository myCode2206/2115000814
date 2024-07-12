const express = require("express");
const router = express.Router();
// const axios = require("axios");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzgyNDE3LCJpYXQiOjE3MjA3ODIxMTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE3ODUwNTdmLTkzM2YtNGEzMS1iOTI0LTU1NjI3N2U1NjRjZCIsInN1YiI6InJhamF0Lmd1cHRhX2NzMjFAZ2xhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiIxNzg1MDU3Zi05MzNmLTRhMzEtYjkyNC01NTYyNzdlNTY0Y2QiLCJjbGllbnRTZWNyZXQiOiJKdFRVblFDZ05FZ2xkc3VkIiwib3duZXJOYW1lIjoiUmFqYXQgR3VwdGEiLCJvd25lckVtYWlsIjoicmFqYXQuZ3VwdGFfY3MyMUBnbGEuYWMuaW4iLCJyb2xsTm8iOiIyMTE1MDAwODE0In0.x4CawlanjiwH2mRladZd0r9piaE_Vxoe5EdQ2q0-hP4";

router.get("/categories/:categoryname/products", (req, res) => {
  const { categoryname } = req.params;
  fetch(
    `http://20.244.56.144/test/companies/${categoryname}/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => res.json(data))
    .catch((error) => {
      console.error("Fetch error:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    });
});

router.get("/categories/:categoryname/products/:productid", (req, res) => {
  const { categoryname } = req.params;
  const { productid } = req.params;

  fetch(
    `http://20.244.56.144/test/companies/${categoryname}/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`error in response`);
      }
      return response.json();
    })
    .then((data) => {
      const product = data.filter((item) => {
        return item.productName == productid;
      });
      if (product) {
        res.json(product);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    });
});

module.exports = router;
