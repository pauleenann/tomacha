export const authenticateFirebase = (req, res, next)=>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(400).json({
                message: 'Authorization header empty'
            })
        }

        //get token from header ]
        const token = authHeader.substring(6);

        console.log(token)
    } catch (error) {
        return res.status(500).json({error: error})
    }
}