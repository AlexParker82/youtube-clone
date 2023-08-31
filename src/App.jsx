import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	Navbar,
	Feed,
	ChannelDetail,
	SearchFeed,
	VideoDetail,
} from "./components/";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL,
	import.meta.env.VITE_SUPABASE_API_KEY,
);

const App = () => {
	const [session, setSession] = useState(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			console.log("Success:", session);
		});
	}, []);

	return (
		<BrowserRouter>
			<Box sx={{ backgroundColor: "#000" }}>
				<Navbar
					supabase={supabase}
					session={session}
				/>
				<Routes>
					<Route
						path="/"
						exact
						element={<Feed />}
					/>
					<Route
						path="/video/:id"
						element={<VideoDetail />}
					/>
					<Route
						path="/channel/:id"
						element={<ChannelDetail />}
					/>
					<Route
						path="/Search/:searchTerm"
						element={<SearchFeed />}
					/>
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default App;
