import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { logo } from "../../utils/constants";

const Navbar = () => (
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
	</Stack>
);

export default Navbar;
