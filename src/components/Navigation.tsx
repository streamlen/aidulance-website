import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Navigation() {
	return (
		<div>
			Navigation
			<Outlet />{" "}
			{/* // these can be home, about , services, plans section area */}
			<Footer />
		</div>
	);
}
