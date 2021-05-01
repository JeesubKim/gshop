import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import color from '../../util/Color';
export type HeaderMenuItemProps = {
	children: React.ReactNode;
	to: string;
};
function HeaderMenuItem({ children, to }: HeaderMenuItemProps) {
	return (
		<ListItem>
			<StyledNavLink to={to}>{children}</StyledNavLink>
		</ListItem>
	);
}
const ListItem = styled.li`
	cursor: pointer;
	margin-right: 2rem;
	text-align: center;
`;
const StyledNavLink = styled(NavLink)`
	width: 100%;
	height: 100%;
	min-width: 7.5rem;
	border-radius: 1rem;
	padding: 1rem 2rem;
	text-decoration: none;
	color: ${color['material']['white']};
	transition: 0.2s;
	&:hover {
		background: rgba(200, 200, 200, 0.3);
		transition: 0.2s;
	}
`;
export default HeaderMenuItem;
