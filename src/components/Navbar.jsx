import { useState } from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import SignUp from "./SignUp";
import { logo } from "../utils/constants";
import { Login, Logout } from "@mui/icons-material";

const Navbar = ({ supabase, session }) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			p={2}
			sx={{ position: "sticky", background: "#000", top: 0 }}
		>
			<Link
				to="/"
				style={{ display: "flex", alignItems: "center" }}
			>
				<img
					src={logo}
					alt="logo"
					height={45}
				/>
			</Link>
			<Searchbar />
			{session && <Typography color="whitesmoke">Welcome!</Typography>}
			<Box
				sx={{
					backgroundColor: "whitesmoke",
					borderRadius: "100%",
					width: "50px",
					height: "50px",
				}}
			/>
			{session ? <Logout /> : <SignUp />}
			<SignUp supabase={supabase} />
		</Stack>
	);
};

export default Navbar;
