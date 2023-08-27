import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
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
						<span
							style={{
								color:
									category.name === selectedCategory ? "whitesmoke" : "red",
								marginRight: "15px",
							}}
						>
							{category.icon}
						</span>
						<span
							style={{
								opacity: category.name === selectedCategory ? "1" : "0.8",
							}}
						>
							{category.name}
						</span>
					</button>
				);
			})}
		</Stack>
	);
};

export default Sidebar;
