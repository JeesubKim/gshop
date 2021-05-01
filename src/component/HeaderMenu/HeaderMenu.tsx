import React from 'react';
import styled from 'styled-components';
export type HeaderMenuProps = {
	children: React.ReactNode;
};
function HeaderMenu({ children }: HeaderMenuProps) {
	return <List>{children}</List>;
}

const List = styled.ul`
	list-style: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
`;
export default HeaderMenu;
