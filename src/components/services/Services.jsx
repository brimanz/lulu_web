import React from 'react'
import styled from '@emotion/styled'
import {GrCoatCheck, GrCut} from "react-icons/gr";


const Services = () =>{
	return(
		<ServicesContainer id="services">
			<Title>Ofrecemos los mejores servicios en:</Title>

			<ServicesContent>
				<Service1>
					<ServicesIcon1/>
					<ServiceText>Confección de Prendas</ServiceText>
				</Service1>

				<Service2>
					<ServicesIcon2/>
					<ServiceText>Arreglos de Ropa</ServiceText>
				</Service2>

			</ServicesContent>
		</ServicesContainer>
	);
}


export default Services


const ServicesContainer = styled.div`
	height: 24rem;
	background-color: f5f5f5;
	text-align: center;

	@media (max-width: 1100px){
		margin-top: 10rem;
		margin-bottom: 5rem;
	}

	@media (max-width: 780px){
		margin-top: 9rem;
		margin-bottom: 13rem;
	} 

	@media (max-width: 517px){
		margin-top: 4rem;
	} 
`;
const Title = styled.h2`
	font-family: 'Oswald', sans-serif;
	color: #FF0099;
	margin-top: 2rem;
	font-size: 4.3rem;
	font-weight: normal;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);

	@media (max-width: 780px){
		font-size: 4rem;
	} 

	@media (max-width: 517px){
		font-size: 2.8rem;
	} 
`;
const ServicesContent = styled.div`
	background-color: #ffffff;
	margin-top: 4rem;
	background: #C9D6FF;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to left, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to left, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 780px){
		height: 10rem;	
		margin-top: 6.7rem;
	} 

	@media (max-width: 517px){
		height: 7rem;		
	} 
`;
const Service1 = styled.div`
	margin: 0 2rem;
	background-color: #b91d73;
	height: 15rem;
	width: 15rem;
	color: #f5f5f5;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0.8;

	:hover{
		opacity: 1;
		transition: 0.7s ease;
	}

	@media (max-width: 1100px){
		width: 13rem;
		height: 13rem;
	}

	@media (max-width: 780px){
		width: 10rem;
		height: 10rem;
	}

	@media (max-width: 517px){
		height: 7rem;		
	}
`;
const Service2 = styled.div`
	margin: 0 2rem;
	background-color: #283c86;
	height: 15rem;
	width: 15rem;
	color: #f5f5f5;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0.8;

	:hover{
		opacity: 1;
		transition: 0.7s ease;
	}

	@media (max-width: 1100px){
		width: 13rem;
		height: 13rem;
	}

	@media (max-width: 780px){
		width: 10rem;
		height: 10rem;
	}

	@media (max-width: 517px){
		height: 7rem;		
	}
`
const ServicesIcon1 = styled(GrCoatCheck)`
	font-size: 6rem;
	opacity: 0.4;
	padding: 1rem 0;
`;
const ServicesIcon2 = styled(GrCut)`
	font-size: 6rem;
	opacity: 0.4;
	padding: 1rem 0;
`;
const ServiceText = styled.p`
	color: #f5f5f5;
	font-family: sans-serif;
	font-weight: bold;

	@media (max-width: 780px){
		padding: 0.3 2rem;		
	}

	@media (max-width: 517px){
		height: 4rem;		
	}
`;
