import Draw from "../components/DrawGift/index"
import Login from "../components/Login/index"

const DrawContainer = () => {
    if(localStorage.getItem('Authorization')) {
        return( <>
            <Draw />
            </>
            )
    } else {
        return (
            <>
            <Login/>
            </>
        )
    }

    
}

export default DrawContainer;