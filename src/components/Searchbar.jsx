import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<Paper
			component="form"
			onSubmit={(e) => {
				e.preventDefault();
				console.log(inputValue);
			}}
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<IconButton
				type="submit"
				sx={{ p: "10px", color: "red" }}
			>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default Searchbar;
