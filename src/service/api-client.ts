import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5f6e25d1c3ff4dac95e5467f21aecc05",
  },
});

