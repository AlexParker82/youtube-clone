import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
	return (
		<Stack direction={{ sm: "column", md: "row" }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar />
				<Typography
					color="whitesmoke"
					mt={1.5}
					className="copywrite"
					variant="body2"
				>
					Copywrite © 2023 AP Media
				</Typography>
			</Box>
		</Stack>
	);
};

export default Feed;
