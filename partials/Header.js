import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import icons from '../styles/iconMapper';

import { Spacing, Colors, FontSizes } from '../styles/system';
import { Button, Device, Icon, Spacer } from '../styles/shared';
import useTranslation from '../hooks/useTranslations';
import Picker from '../components/Picker';
import useLanguage from '../hooks/useLanguage';
import Profile from '../components/Profile';

const pages = [
	{
		name: "HOMEPAGE",
		url: "/",
		isHomePage: true
	},
	{
		name: "CONTACT_US",
		url: "/contact-us",
	}
];

export default function Header(props) {
	const translations = useTranslation();
	const router = useRouter();

	const { languages, onLanguageChange } = useLanguage([
		{
			label: "Türkçe",
			code: "tr",
		},
		{
			label: "English",
			code: "en",
		}
	]);

	const [menuActive, setMenuActive] = useState(false);

	const onMenuActive = useCallback(() => {
		setMenuActive(p => !p);
	}, []);

	return (
		<>
			<Device.Desktop>
				<Container>
					<LeftSide>
						<Icon icon={icons.black.InfoCircle}></Icon>
						<Spacer size={Spacing.xsmall} />
						<Title>{translations[props.title] || props.title}</Title>
					</LeftSide>
					<RightSide>
						{pages.map(page =>
							<React.Fragment key={page.name}>
								<Link
									href={page.url}
									active={page.url === router.route}
								>
									{translations[page.name] || page.name}
								</Link>
								<Spacer size={Spacing.xsmall} />
							</React.Fragment>
						)}
						<Spacer size={Spacing.xxsmall} />
						<Profile />
						<Spacer size={Spacing.xsmall} />
						<Picker list={languages} onSelect={onLanguageChange} />
					</RightSide>
				</Container>
			</Device.Desktop>

			<Device.Mobile>
				<Container mobile>
					<Row>
						<LeftSide>
							<Icon icon={icons.black.InfoCircle}></Icon>
							<Spacer size={Spacing.xsmall} />
							<Title>{translations[props.title] || props.title}</Title>
						</LeftSide>
						<RightSide>
							<Button isActive={menuActive} onClick={onMenuActive}>
								<Icon icon={icons.black.More} />
								<Spacer size={Spacing.xxsmall} />
								{translations.MENU}
							</Button>
						</RightSide>
					</Row>
					{menuActive && <Menu>
						{pages.map(page =>
							<MenuItem key={page.name}>
								<MobileLink
									href={page.url}
									active={page.url === router.route}
								>
									{translations[page.name] || page.name}
								</MobileLink>
							</MenuItem>
						)}
						<Spacer size={Spacing.xxsmall} column />
						<Row center>
							<Profile />
							<Spacer size={Spacing.xxsmall} />
							<Picker list={languages} onSelect={onLanguageChange} />
						</Row>
					</Menu>}
				</Container>
			</Device.Mobile>
		</>
	);
}

const Container = styled.div`
  display: flex;
	flex-direction: ${({ mobile = false }) => mobile ? "column" : "row"};
	justify-content: space-between;
  align-items: center;
  padding: ${Spacing.large}rem;
  border-bottom: 1px solid ${Colors.border};
`;

const Row = styled.div`
  display: flex;
	justify-content: ${({ center }) => center ? "center" : "flex-start"};
  align-items: center;
	width: 100%;
`;

const Menu = styled.div`
  display: flex;
	flex-direction: column;
  align-items: center;
	width: 100%;
  margin-top: ${Spacing.large}rem;
  padding: ${Spacing.large}rem;
  border-top: 1px solid ${Colors.border};
`;

const MenuItem = styled.div`
  display: flex;
	flex-direction: row;
	justify-content: center;
  align-items: center;
  padding: ${Spacing.xsmall}rem;
`;

const LeftSide = styled.div`
	display: flex;
	align-items: center;
`;

const RightSide = styled(LeftSide)`
	margin-left: auto;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: ${FontSizes.normal}rem;
`;

const Link = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	pointer-events: ${({ active }) => active ? "none" : "auto"};

	&:after {
		content: "";
		opacity: 0;
		width: 6px;
		height: 6px;
		border-radius: 6px;
		transition: .15s;
		position: absolute;
		bottom: -${Spacing.small}rem;
		background-color: ${Colors.link};
	}
	&:hover:after {
		opacity: 1;
		width: 100%;
		height: 3px;
		bottom: -${Spacing.xxsmall}rem;
	}
	&:after {
		opacity: ${({ active }) => active ? 1 : 0};
	}
`;

const MobileLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	pointer-events: ${({ active }) => active ? "none" : "auto"};
	text-decoration: ${({ active }) => active ? "underline" : "none"};
`;