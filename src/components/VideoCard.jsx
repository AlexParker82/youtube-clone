import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const VideoCard = ({ videoData }) => {
	console.log(videoData);
	return (
		<Card sx={{ maxWidth: 500 }}>
			<CardHeader
				title={videoData.snippet.title}
				subheader={videoData.snippet.channelTitle}
			/>
			<CardMedia
				component="img"
				image={videoData.snippet.thumbnails.high.url}
				height={videoData.snippet.thumbnails.high.height}
				width={videoData.snippet.thumbnails.high.width}
				sx={{ backgroundColor: "black" }}
			/>
		</Card>
	);
};

export default VideoCard;
