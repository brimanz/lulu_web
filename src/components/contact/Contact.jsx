import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai";


const Services = () =>{
	return(
		<ServicesContainer id="contact">
			<Title>Contáctanos a través de:</Title>

			<ServicesContent>
				<Service1>
					<ServicesIcon1/>
				</Service1>

				<Service2>
					<ServicesIcon2/>
				</Service2>

				<Service3>
					<ServicesIcon3/>
				</Service3>

			</ServicesContent>
		</ServicesContainer>
	);
}


export default Services


const ServicesContainer = styled.div`
	height: 24rem;
	background-color: f5f5f5;
	text-align: center;

	@media (max-width: 800px){
		margin-top: 50rem;
	} 
`;
const Title = styled.h2`
	font-family: 'Oswald', sans-serif;
	color: #FF0099;
	margin-top: 2rem;
	font-size: 4.3rem;
	font-weight: normal;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
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
`;
const Service1 = styled.div`
	margin: 0 2rem;
	background-color: #f37335;
	height: 15rem;
	width: 15rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0.8;

	:hover{
		opacity: 1;
		transition: 0.7s ease;
	}
`;
const Service2 = styled.div`
	margin: 0 2rem;
	background-color: #45B649;
	height: 15rem;
	width: 15rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0.8;

	:hover{
		opacity: 1;
		transition: 0.7s ease;
	}
`
const Service3 = styled.div`
	margin: 0 2rem;
	background-color: #FF0099;
	height: 15rem;
	width: 15rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	opacity: 0.8;

	:hover{
		opacity: 1;
		transition: 0.7s ease;
	}
`
const ServicesIcon1 = styled(AiOutlineMail)`
	font-size: 6rem;
	opacity: 0.4;
	padding: 2rem 0;
`;
const ServicesIcon2 = styled(AiOutlineWhatsApp)`
	font-size: 6rem;
	opacity: 0.4;
	padding: 2rem 0;
`;
const ServicesIcon3 = styled(AiOutlineInstagram)`
	font-size: 6rem;
	opacity: 0.4;
	padding: 2rem 0;
`;