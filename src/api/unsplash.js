import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6f147a0971199ea89da0a9658a893531e7693e6540e9ccf58dea7299622e5cc6",
  },
});
