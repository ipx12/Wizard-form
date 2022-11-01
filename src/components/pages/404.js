import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <p style={{"textAlign" : 'center', 'fontWaight' : 'bold', 'fontSize' : '24px'}}>Page doesn't exist</p>
            <Link style={{'display' : 'block', 'textAlign' : 'center', 'fontWeight' : 'bold', 'fontSize' : '24px', 'marginTop' : '30px'}} to='/Wizard-form'>
                Back to main page
            </Link>
        </div>
    )
}

export default Page404;