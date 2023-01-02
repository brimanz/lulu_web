import React from 'react'
import styled from '@emotion/styled'


const Gallery = () =>{
	return(
		<GalleryContainer>
			<Title>Observa nuestro trabajo:</Title>
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