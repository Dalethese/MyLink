import axios from "axios";
import { BITLY_KEY } from "@env";

export const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${BITLY_KEY}`,
  },
});
