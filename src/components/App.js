import Box from "@mui/material/Box";

import './App.css';
import Sidebar from "./global/Sidebar.js";
import Topbar from "./global/Topbar.js";

function App() {
	return (
		<Box sx={{display: 'flex', backgroundColor: '#B1A296'}}>
			<Sidebar />
			<Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
				<Topbar />
				{/* insert content here */}
			</Box>
		</Box>
	);
}

export default App;
