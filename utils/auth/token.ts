import type { AuthPayload } from "./models/auth.model";
import jwt from "jsonwebtoken";

export async function generateJWToken(
  payload: AuthPayload,
  secret: string,
  expireTime: number
): Promise<any> {
  return jwt.sign(payload, secret, { expiresIn: `${expireTime}m` });
}

export async function checkToken(token: string, secret: string): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        reject(err); // Reject with the error object
      } else {
        resolve(data); // Resolve with the decoded data
      }
    });
  });
}
