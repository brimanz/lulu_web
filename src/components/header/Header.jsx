import React from 'react'
import styled from '@emotion/styled'


const Header = ({imageSrc}) =>{
	return(
		<HeaderContainer id="home">
			<ImgBg src={imageSrc}/>

			<Content>
				<Title>
					<Brand>Lulú </Brand> 
					Confecciones
				</Title>
				<Subtitle>Donde hacemos tus ideas realidad</Subtitle>

				<Button href="#services">Mas sobre...</Button>
			</Content>
		</HeaderContainer>
	);
}


export default Header


const HeaderContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
`;
const Content = styled.div`
	position: absolute;
	top: 25%;
	margin: 0 5rem;

	@media (max-width: 517px){
		text-align: center;
		margin: 0;
	}
`;
const Brand = styled.span`
	font-family: 'Dancing Script', cursive;
	font-size: 8.8rem;
	color: #ED213A;
	font-weight: bold;

	@media (max-width: 1100px){
		font-size: 6.7rem;
	}

	@media (max-width: 780px){
		font-size: 6rem;
	}

	@media (max-width: 517px){
		font-size: 4.5rem;
	}
`;
const Title = styled.h2`
	margin: 1rem 0;
	color: #FF0099;
	font-weight: normal;
	text-shadow: 1px 3px 1px rgba(255, 255, 255, 0.7);
	
	font-size: 6.8rem;
	font-family: 'Oswald', sans-serif;
	letter-spacing: 1px;

	@media (max-width: 1100px){
		font-size: 5.7rem;
	}

	@media (max-width: 780px){
		font-size: 5rem;
	}

	@media (max-width: 517px){
		font-size: 3.3rem;
		margin-right: 1.3rem;
	}
`;
const Subtitle = styled.p`
	font-size: 2rem;
	font-family: sans-serif;

	margin-bottom: 4rem;
	color: #f5f5f5;
	text-shadow: 1px 3px 1px rgba(0, 0, 0, 0.6);
	letter-spacing: 0.8px;

	@media (max-width: 1100px){
		font-size: 2rem;
	}

	@media (max-width: 780px){
		font-size: 1.5rem;
	}

	@media (max-width: 517px){
		font-size: 1rem;
		letter-spacing: 0.5px;
		margin-right: 1.3rem;
	}
`;
const Button = styled.a`
	padding: 1.2rem;
	border: none;
	background: #283c86;

	font-weight: bold;
	font-family: sans-serif;
	font-size: 1.4rem;
	color: #f5f5f5;
	text-decoration: none;

	:hover{
		transition: 0.5s ease;
		background: #f5f5f5;	
		cursor: pointer;
		color: #FF0099;
	}

	@media (max-width: 780px){
		width: 11rem;
		font-size: 1.2rem;
	}

	@media (max-width: 517px){
		font-size: 1rem;
		padding: 1rem;
	}
`;
const ImgBg = styled.img`
	position; relative;
	background-size: cover;
	background-position: center;
	width: 100%;
	opacity: 0.8;
`;