import React from 'react'
import styled from '@emotion/styled'


const Gallery = () =>{

	const genres = ["Todo", "Dama", "Caballero", "Niños", "Bebes"];

	return(
		<GalleryContainer id="confection">
			<Title>Confeccionamos ropa para todos los gustos
				<br/>
				<StrongTitle>Diseños 100% #fashion</StrongTitle>
			</Title>
			
			<ClothesContainer>
				<ClothesItem1>
					<ClothesTitle>Damas</ClothesTitle>
				</ClothesItem1>

				<ClothesItem2>
					<ClothesTitle>Caballeros</ClothesTitle>
				</ClothesItem2>

				<ClothesItem3>
					<ClothesTitle>Niños</ClothesTitle>
				</ClothesItem3>

				<ClothesItem4>
					<ClothesTitle>Bebes</ClothesTitle>
				</ClothesItem4>
			</ClothesContainer>

		</GalleryContainer>
	);
}


export default Gallery


const GalleryContainer = styled.div`
	height: 40rem;
	background-color: #f5f5f5;
	text-align: center;
	margin-bottom: 6rem;
`;
const Title = styled.h2`
	font-family: 'Oswald', sans-serif;
	color: #FF0099;
	margin-top: 2rem;
	font-size: 4.3rem;

	font-weight: normal;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
`;
const StrongTitle = styled.strong`
	font-size: 2rem;
	color: #283c86;
	font-family: sans-serif;	
	text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.7);
`;
const ClothesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	margin-top: 4rem;
	height: 30rem;
	width: 100%;

	@media (max-width: 800px){
		display: flex;
		flex-direction: column;
		margin-top: 20rem;
	}
`
const ClothesItem1 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/dama.jpg);
	background-size: cover;
	border: 2px solid #FF0099;
	width: 8%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
		width: 20%;
		transition: 0.5s ease;
	}

	@media (max-width: 800px){
		width: 100%;

		:hover{
			width: 100%;
		}
	}
`;
const ClothesItem2 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/man.jpg);
	background-size: cover;
	border: 2px solid #283c86;
	width: 8%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
		width: 20%;
		transition: 0.5s ease;
	}

	@media (max-width: 800px){
		width: 100%;

		:hover{
			width: 100%;
		}
	}
`;
const ClothesItem3 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/kid.jpg);
	background-size: cover;
	border: 2px solid #f37335;
	width: 8%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
		width: 20%;
		transition: 0.5s ease;
	}

	@media (max-width: 800px){
		width: 100%;

		:hover{
			width: 100%;
		}
	}
`;
const ClothesItem4 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/bebebg.jpg);
	background-size: cover;
	border: 2px solid #FF0000;
	width: 8%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
		width: 20%;
		transition: 0.5s ease;
	}

	@media (max-width: 800px){
		width: 100%;

		:hover{
			width: 100%;
		}
	}
`;
const ClothesTitle = styled.h2`
	font-family: 'Oswald', sans-serif;
	color: #ffffff;
	margin-top: 8rem;
	
	writing-mode: vertical-lr;
	font-size: 3rem;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;