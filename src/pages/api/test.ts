import getHandler from "src/handler";

const handler = getHandler();

handler.get((req, res) => {
  res.status(200).json({ message: "you are /test endpoint" });
});

//NOTE: handler should be the default export in any api handler
export default handler;
