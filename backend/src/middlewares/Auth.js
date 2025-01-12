import jsonwebtoken from "jsonwebtoken";

const JWT_SECRET = String(process.env.JWT_SECRET);

export let blacklistTokens = [];

export function authenticateToken(req, res, next) {
  //const token = req.headers["authorization"]?.split(" ")[1]; // "Bearer TOKEN"
  const token = req.headers["x-access-token"];


  if (!token) {
    return res.status(401).send({ message: "Token não fornecido!" });
  }

  if (blacklistTokens.includes(token)){
    return res.status(401).send({ message: "Token inutilizado!" });
  }

  jsonwebtoken.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Token inválido!" });
    }

    next();
  });
}
