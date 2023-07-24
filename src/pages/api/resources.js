import data from "./data.json";

// export default function (req, res) {
//     res.send(data)
// }

// call from server 3001 proxy the request
export default async function (req, res) {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();
  res.send(data);
}
