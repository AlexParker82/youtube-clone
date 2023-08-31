import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import videoSearchData from "../utils/fetch";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		(async () => {
			const videoData = await videoSearchData(
				`search?part=snippet&q=${selectedCategory}`,
			);
			const videoItems = videoData.items;
			setVideos(videoItems);
		})();
	}, [selectedCategory]);

	return (
		<Stack direction={{ sm: "column", md: "row" }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Typography
					color="whitesmoke"
					mt={1.5}
					className="copywrite"
					variant="body2"
				>
					Copywrite © 2023 AP Media
				</Typography>
			</Box>
			<Box
				p={2}
				sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
			>
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					color="whitesmoke"
				>
					{selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;
