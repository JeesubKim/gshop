import React from 'react';
import styled from 'styled-components';
import colors from '../../util/Color';
import responsive from '../../util/Device';
export type AppLayoutProps = { children: React.ReactNode };
function AppLayout({ children }: AppLayoutProps) {
	return <div>{children}</div>;
}

type HeaderLayoutProps = {
	children: React.ReactNode;
};
function HeaderLayout({ children }: HeaderLayoutProps) {
	return (
		<Header>
			<HeaderItemContainer>{children}</HeaderItemContainer>
		</Header>
	);
}
const Header = styled.header`
	background: ${colors['primary']};
	display: flex;
	height: 4rem;
	width: 100%;
`;
const HeaderItemContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	${responsive['desktop']} {
		max-width: 80rem;
		background: purple;
	}
`;

AppLayout.Header = HeaderLayout;

type BodyLayoutProps = {
	children: React.ReactNode;
};
function BodyLayout({ children }: BodyLayoutProps) {
	return <Body>{children}</Body>;
}
const Body = styled.article`
	width: 100%;
	height: calc(100vh - 4rem);
	background: ${colors['primary-background']};
	margin: 0 auto;

	${responsive['desktop']} {
		max-width: 80rem;
		background: red;
	}
	${responsive['tablet']} {
		width: 100%;
		background: green;
	}
	${responsive['smartphone']} {
		width: 100%;
		background: blue;
	}
`;

AppLayout.Body = BodyLayout;
export default AppLayout;
