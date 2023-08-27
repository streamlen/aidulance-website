import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Plan from "./pages/Plan";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/service" element={<Service />} />
					<Route path="/plan" element={<Plan />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
