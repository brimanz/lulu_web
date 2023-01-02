import React from 'react'
import styled from '@emotion/styled'


const Gallery = () =>{

	const genres = ["Todo", "Dama", "Caballero", "Niños", "Bebes"];

	return(
		<GalleryContainer>
			<Title>Observa nuestro trabajo:</Title>


			<ButtonsContianer>
				{genres.map(item => (
					<Button>{item}</Button>
				))}	
			</ButtonsContianer>
			
		</GalleryContainer>
	);
}


export default Gallery


const GalleryContainer = styled.div`
	height: 60rem;
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
const ButtonsContianer = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1;
	justify-content: center;
`;
const Button = styled.button`
	padding: 0.5rem;
	margin: 1rem 1rem;
	width: 5rem;

	background-color: #283c86;
	color: #f5f5f5;
	font-weight: bold;
	border: none;
	border-radius: 0.4rem;
	cursor: pointer;

	&.active{
		background-color: #b91d73;
	}

	:hover{
		background-color: #b91d73;
		box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.3);
	}
`;