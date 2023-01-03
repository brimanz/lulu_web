import React from 'react'
import styled from '@emotion/styled'


const Gallery = () =>{

	const genres = ["Todo", "Dama", "Caballero", "Niños", "Bebes"];

	return(
		<GalleryContainer>
			<Title>Confeccionamos ropa para todos los gustos</Title>
			
			<ClothesContainer>
				<ClothesItem1>
					<p>Ropa para</p>
					<h2>Damas</h2>
					<img/>
				</ClothesItem1>
				<ClothesItem2>
					<p>Ropa para</p>
					<h2>Caballeros</h2>
					<img/>
				</ClothesItem2>
				<ClothesItem3>
					<p>Ropa para</p>
					<h2>Niños</h2>
					<img/>
				</ClothesItem3>
				<ClothesItem4>
					<p>Ropa para</p>
					<h2>Bebes</h2>
					<img/>
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
	background-color: #ffffff;
	border: 2px solid #FF0099;
	width: 20%;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
	}
`;
const ClothesItem2 = styled.div`
	height: 20rem;
	background-color: #ffffff;
	border: 2px solid #283c86;
	width: 20%;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
	}
`;
const ClothesItem3 = styled.div`
	height: 20rem;
	background-color: #ffffff;
	border: 2px solid #f37335;
	width: 20%;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
	}
`;
const ClothesItem4 = styled.div`
	height: 20rem;
	background-color: #ffffff;
	border: 2px solid #FF0000;
	width: 20%;

	:hover{
		box-shadow: 6px 4px rgba(0, 0, 0, 0.25);
	}
`;
