export const signInWithGoogle = (req, res)=>{
    try {
        console.log('hello')
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Cannot sign in with Google'
        })
    }
}