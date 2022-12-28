import React from 'react'
import styled from '@emotion/styled'


const Header = ({imageSrc}) =>{
	return(
		<HeaderContainer>
			<ImgBg src={imageSrc}/>

			<Content>
				<Title>Confecciones Lulù</Title>
				<Subtitle>Donde hacemos tus ideas realidad</Subtitle>

				<Button>Mas sobre...</Button>
			</Content>
		</HeaderContainer>
	);
}


export default Header


const HeaderContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: darkred;

	display: flex;
`;
const Content = styled.div`
	position: absolute;
	top: 25%;
	margin: 2rem;
`;
const Title = styled.h2`
	font-size: 5.3rem;
	color: white;
	text-shadow: 1px 3px 1px rgba(0, 0, 0, 0.6);
	margin: 2rem 0;
`;
const Subtitle = styled.p`
	font-size: 2rem;
	color: pink;
	text-shadow: 1px 3px 1px rgba(0, 0, 0, 0.6);
	letter-spacing: 0.8px;
`;
const Button = styled.button`
	padding: 1rem;
	width: 14rem;
	border: none;
	background: pink;

	margin: 3rem 0;
	font-weight: bold;
	font-size: 1.5rem;

	:hover{
		background: white;
	}
`;
const ImgBg = styled.img`
	position; relative;
	background-size: cover;
	width: 100%;
`;