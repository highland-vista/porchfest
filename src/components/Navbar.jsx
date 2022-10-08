import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<Box>
			<NavLink activeClassName="active" to="/">
				Home
			</NavLink>
			<NavLink activeClassName="active" to="/stages/stage1">
				Stage 1
			</NavLink>
			<NavLink activeClassName="active" to="/stages/stage2">
				Stage 2
			</NavLink>
		</Box>
	);
};

export default Navbar;
