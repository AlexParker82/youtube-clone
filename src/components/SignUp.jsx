import { useState } from "react";
import { Stack, Box, TextField, Button, Typography } from "@mui/material";

const SignUp = ({ supabase }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSignup = async () => {
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		if (error) {
			setError(error);
			console.error(error.message);
		}
	};

	const handleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		console.log(data);
		if (error) {
			setError(error);
			console.error(error.message);
		}
	};

	return (
		<Stack
			className="signup"
			direction="column"
			justifyContent="center"
			alignItems="center"
			sx={{
				position: "absolute",
				top: "70px",
				right: "10px",
				backgroundColor: "whitesmoke",
				borderRadius: "5px",
				padding: "10px",
			}}
		>
			<Box>
				<Typography>Email:</Typography>
				<TextField
					variant="outlined"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Box>
			<Box>
				<Typography>Password:</Typography>
				<TextField
					variant="filled"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</Box>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Box sx={{ marginTop: "10px" }}>
					<Button onClick={() => handleLogin()}>Login</Button>
				</Box>
				<Box sx={{ marginTop: "10px" }}>
					<Button onClick={() => handleSignup()}>Signup</Button>
				</Box>
			</Stack>
			{error && <Typography>{error}</Typography>}
		</Stack>
	);
};

export default SignUp;
