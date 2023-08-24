import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Box sx={{ backgroundColor: "#000" }}>
				<Routes>
					<Route
						path="/"
						exact
						element={Feed}
					/>
				</Routes>
			</Box>
		</BrowserRouter>
	);
}

export default App;
