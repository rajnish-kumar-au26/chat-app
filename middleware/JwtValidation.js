const jwt = require("jsonwebtoken");
const { secret_key } = process.env;

class JwtService {
  createToken = async ({ userId }) => {
    try {
      if (!userId) {
        throw { message: "UserId is Required" };
      }
      const token = await jwt.sign({ userid }, secret_key, {
        expiresIn: "2h",
      });
      return { message: "Token Gernerte Successfully", token: token };
    } catch (error) {
      return { message: error.message, status: 400, error: true };
    }
  };
  verifyToken = (req, res, next) => {
    try {
      const token = req.headers["authorization"];
      var data = jwt.verify(token, secret_key);
      req.userId = data.userId;
      next();
    } catch (error) {
      res.status(400).send({
        message: "invalid token id",
        error: true,
      });
    }
  };
}

module.exports = new JwtService();
