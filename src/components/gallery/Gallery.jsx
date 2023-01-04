import React from 'react'
import styled from '@emotion/styled'
import Man from '../../.././public/assets/man.png'


const Gallery = () =>{

	const genres = ["Todo", "Dama", "Caballero", "Niños", "Bebes"];

	return(
		<GalleryContainer id="confection">
			<Title>Confeccionamos ropa para todos los gustos</Title>
			
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
`;
const Title = styled.h2`
	font-family: 'Oswald', sans-serif;
	color: #FF0099;
	margin-top: 2rem;
	font-size: 2.3rem;
	font-weight: normal;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
`;
const ClothesContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	margin-top: 4rem;
	height: 30rem;
	width: 100%;
`
const ClothesItem1 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/woman.png);
	background-size: cover;
	border: 2px solid #FF0099;
	width: 20%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
	}
`;
const ClothesItem2 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/man.png);
	background-size: cover;
	border: 2px solid #283c86;
	width: 20%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
	}
`;
const ClothesItem3 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/kid.png);
	background-size: cover;
	border: 2px solid #f37335;
	width: 20%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
	}
`;
const ClothesItem4 = styled.div`
	height: 20rem;
	background-image: url(../../.././public/assets/baby.png);
	background-size: cover;
	border: 2px solid #FF0000;
	width: 20%;
	opacity: 0.9;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
		opacity: 1;
	}
`;
const ClothesTitle = styled.h2`
	font-family: 'Oswald', sans-serif;
	color: #ffffff;
	margin-top: 8rem;
	
	font-size: 3rem;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;