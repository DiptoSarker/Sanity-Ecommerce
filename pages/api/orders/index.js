import axios from "axios";
import nc from "next-connect";
import { isAuth } from "../../../utils/auth";
//import config from "../../../utils/config";

const handler = nc();

handler.use(isAuth);

handler.post(async (req, res) => {
  const projectId = "v3vmw53j";
  const dataset = "production";
  const tokenWithWriteAccess =
    "skILyQPSlU66y2bEaapODHetuOPdzOTfVyZBWHhT4SdwVDY9qi890E3YH34KEwoOAcSa0fRiXKRWLhqxUu7QFzKhgXq7Uj5fJbUObiwfQslFokxKr0n3w0ExD3XYlUhEjUwuoDAG6Pz9MHqy7WNvIYasZ15yyza4dDuhyTYk1c7eueRAEq4w";
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    {
      mutations: [
        {
          create: {
            _type: "order",
            createdAt: new Date().toISOString(),
            ...req.body,
            userName: req.user.name,
            user: {
              _type: "reference",
              _ref: req.user._id,
            },
          },
        },
      ],
    },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );

  res.status(201).send(data.results[0].id);
});
export default handler;
