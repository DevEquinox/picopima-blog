import logo from '../assets/logo.svg';
import '../styles/global.css';
import '../styles/signup.css';
import {useState} from 'react';

function SignUpPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // In react, arrow definition (usually to avoid using 'this') is not necessary when using a setThing hook,
    // but I'll keep it here as a reminder that there will be cases where I have to use... this.
    function handleUsernameInputChange(event) {
        setUsername(event.target.value);
        // TO-DO: While the user types, query to check if the username already exists.
    }

    const handlePasswordInputChange = (event) => {
        setPassword(event.target.value);
        var currentPassword = event.target.value; // etPassword change seemed to be lagging behind...

        document.getElementById("length").style.color = (currentPassword.length > 8 && currentPassword.length < 40) ? "black" : "red";
        document.getElementById("hasUppercaseAndLowercase").style.color = (/[A-Z]/.test(currentPassword) && /[a-z]/.test(currentPassword)) ? "black" : "red";
        document.getElementById("hasDigits").style.color = (/[0-9]/.test(currentPassword)) ? "black" : "red";
        document.getElementById("hasSymbols").style.color = (/[^A-Za-z0-9]/.test(currentPassword)) ? "black" : "red";
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        // TO-DO: ASYMMETRIC ENCRYPTION (elliptic curve ig?)
        // - Request the public key from the server
        // - Use it to encrypt the credentials
        // - Send the encrypted data to the backend server
        // - Decrypt the data with the private key in the backend server and query it into the table
    }

    return (
        <div>`
            <header>
                <img src={logo} className="site-logo" alt="logo" />
                <h1>Picopima</h1>
            </header>
            <div className="sign-up-box">
                <h2>Sign Up</h2>
                <form className="sign-up-box-contents" onSubmit={handleSignUp}>
                    <p style={{ fontWeight: 'bold' }}>Username</p>
                    <input required name="username" onChange={handleUsernameInputChange}/>
                    <p style={{ fontWeight: 'bold' }}>Password</p>
                    <input required name="password" onChange={handlePasswordInputChange}/>
                    <p className="password-requirement-text">Passwords must contain:</p>
                    <ul>
                        <li id="length">Between 10 and 40 characters</li>
                        <li id="hasUppercaseAndLowercase">At least one uppercase and one lowercase letter</li>
                        <li id="hasDigits">At least one number</li>
                        <li id="hasSymbols">At least one symbol</li>
                    </ul>
                    <button type="submit">Sign up</button>
                    <p>Already have an account? Log in</p>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
