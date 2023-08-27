import React, { useState } from "react";
import { Stack } from "@mui/material";

import { categories } from "../../utils/constants";

const Sidebar = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");

	return (
		<Stack
			direction={{ sx: "row", md: "column" }}
			sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" } }}
		>
			{categories.map((category) => {
				return (
					<button
						key={category.name}
						className="category-btn"
						style={{
							background: category.name === selectedCategory && "#FC1503",
							color: "whitesmoke",
						}}
						onClick={() => {
							setSelectedCategory(category.name);
						}}
					>
						<span>{category.icon}</span>
						<span>{category.name}</span>
					</button>
				);
			})}
		</Stack>
	);
};

export default Sidebar;
