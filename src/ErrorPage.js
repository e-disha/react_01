import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h2>Si duket ke humbur...</h2>
            <p>Pa merak, <Link to='/'>kthehu ne shtepi</Link></p>
        </div>
    );
}
 
export default ErrorPage;