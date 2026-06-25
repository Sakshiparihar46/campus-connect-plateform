import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    const tokenFromHeader = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    const token = req.headers.token || tokenFromHeader;

    if (!token) {
        return res.status(401).json({ success: false, message: "not authorized login first" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: tokenDecode.id, ...tokenDecode };
        req.userId = tokenDecode.id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default authMiddleware;