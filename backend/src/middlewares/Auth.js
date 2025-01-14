import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt"

export const JWT_SECRET = process.env.JWT_SECRET;
export const salt_rounds = process.env.SALT_ROUNDS;

export async function crypt(senha){
    return await bcrypt.hash(senha, Number(salt_rounds));
}

// export let blacklistTokens = [];

export function authenticateToken(req, res, next) {
  //const token = req.headers["authorization"]?.split(" ")[1]; // "Bearer TOKEN"
  const headers = req.headers["x-access-token"];
  
  const token = headers && headers.split(" ")[1];
  const bearer = headers && headers.split(" ")[0];


  if (!token) {
    return res.status(401).send({ message: "Token não fornecido!" });
  }
  
  if(!bearer || bearer !== "Bearer"){
    return res.status(400).send({ message: 'Token Inválido'});
  }

  // if (blacklistTokens.includes(token)){
  //   return res.status(401).send({ message: "Token inutilizado!" });
  // }

  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    
    if (err) {
      return res.status(403).send({ message: "Token inválido!" });
    }
    req.role = decoded.role;

    next();
  });
}

export function authorizeTypes(allowedTypes) {
  return (req, res, next) => {
      if (!allowedTypes.includes(req.role)) {
          return res.status(400).send({
            message: 'Usuario não autorizado'
          });
      }
      next();
  };
}
