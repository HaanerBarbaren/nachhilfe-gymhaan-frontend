import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"; 

function LoginPage() {
		const [name, setName] = useState("");
		const [password, setPassword] = useState("");
		const [pwType, setPwType] = useState("password");

		const changePwType = () => {
				if (pwType != "password") setPwType("password");
				else setPwType("text");
		}
		

		return (
				<div id="login">
				<h1>Login</h1>
				<input type="username" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required
				/>
				<input type={pwType} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passwort" required/>
				<button onClick={(e) => {e.preventDefault(); changePwType()}}>
				<FontAwesomeIcon icon={pwType == "password" ? faEye : faEyeSlash} />
				</button>
				<input type="submit" value="Login" />
				</div>
		)
} 

export default LoginPage;
