import styled from 'styled-components';
import color from '../../util/Color';
export type HeaderIconProps = {};
function HeaderIcon({}: HeaderIconProps) {
	return <Name>G#</Name>;
}

const Name = styled.span`
	font-weight: 900;
	font-size: 2rem;
	color: white;
	text-shadow: ${color['primary-background']} 0.0625rem 0.0625rem;
	margin-right: 1rem;
`;

export default HeaderIcon;
