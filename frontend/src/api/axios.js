import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
/*   'X-CSRF-TOKEN'ó: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
 */
});
