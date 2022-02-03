import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:8080/api/user", (req, res, context) => {
    return res(context.status(200), context.json({ username: "Putra Satria" }));
  }),
  rest.get("http://localhost:8080/api/posts", (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        id: 1,
        title: "Post satu",
        desc: "Get Post satu",
      })
    );
  }),
];

export { handlers, rest };
