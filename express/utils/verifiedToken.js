const jwt = require("jsonwebtoken");

function verifiedToken(req, res, next) {

    try {

        const authHeader = req.cookies.token;

        // Authorization header check
        if (!authHeader) {
            return res.status(401).json({
                status: false,
                message: "Authorization header not found"
            });
        }

        // Check Bearer format
        const parts = authHeader.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({
                status: false,
                message: "Invalid authorization format"
            });
        }

        const token = parts[1];

        console.log("TOKEN:", token);

        jwt.verify(
            token,
            process.env.JWT_SECRET_TOKEN,
            (err, decoded) => {

                if (err) {
                    console.log("JWT ERROR:", err.message);

                    return res.status(401).json({
                        status: false,
                        message: "Invalid or expired token"
                    });
                }

                console.log("DECODED:", decoded);

                req.user = decoded;

                next();
            }
        );

    } catch (error) {

        console.log("Middleware Error:", error.message);

        return res.status(500).json({
            status: false,
            message: "Internal server error"
        });
    }
}

module.exports = verifiedToken;