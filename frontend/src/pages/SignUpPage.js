import logo from '../assets/logo.svg';
import '../styles/global.css';
import '../styles/signup.css';

function SignUpPage() {

    function SignUp({username, password}) {
        window.alert("Submitting new user:" + username + "and" + password); // THIS IS ONLY FOR DEBUGGING PURPOSES
        // TO-DO: ASYMMETRIC ENCRYPTION (elliptic curve ig?)
        // - Request the public key from the server
        // - Use it to encrypt the credentials
        // - Send the encrypted data to the backend server
        // - Decrypt the data with the private key in the backend server and query it into the table
    }

    // TO-DO: Check table of usernames to avoid repetition

    return (
        <div>
            <header>
                <img src={logo} className="site-logo" alt="logo" />
                <h1>Picopima</h1>
            </header>
            <div className="sign-up-box">
                <h2>Sign Up</h2>
                <div className="sign-up-box-contents">
                    <p style={{ fontWeight: 'bold' }}>Username</p>
                    <input/>
                    <p style={{ fontWeight: 'bold' }}>Password</p>
                    <input/>
                    <p className="password-requirement-text">Passwords must contain:</p>
                    <ul>
                        <li>Between 10 and 40 characters</li>
                        <li>At least one uppercase and one lowercase letter</li>
                        <li>At least one number</li>
                        <li>At least one symbol</li>
                    </ul>
                    <button>Sign up</button>
                    <p>Already have an account? Log in</p>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
