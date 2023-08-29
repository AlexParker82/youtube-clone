import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
	return (
		<Stack
			direction="row"
			gap={2}
			flexWrap="wrap"
			justifyContent="start"
		>
			{videos.map((video) => {
				return (
					<VideoCard
						key={video.id.videoId}
						videoData={video}
					/>
				);
			})}
		</Stack>
	);
};

export default Videos;
