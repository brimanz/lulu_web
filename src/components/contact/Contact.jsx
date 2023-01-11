import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai";


const Services = () =>{
	return(
		<ServicesContainer id="contact">
			<Title>Contáctanos a través de:</Title>

			<ServicesContent>
				<Service1>
					<LinkIcon href="mailto:brimanz2014@gmail.com">
						<ServicesIcon1/>
					</LinkIcon>
				</Service1>

				<Service2>
					<LinkIcon href="https://wa.link/u3duye">
						<ServicesIcon2/>
					</LinkIcon>
				</Service2>

				<Service3>
					<LinkIcon href="#">
						<ServicesIcon3/>
					</LinkIcon>
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

	@media (max-width: 1100px){
		margin-top: 15rem;
	}

	@media (max-width: 780px){
		margin-top: 50rem;
	}

	@media (max-width: 517px){
		margin-top: 43rem;
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
	margin-top: 4rem;
	background: #C9D6FF;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to left, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to left, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	width: 100%;
	height: 15rem;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 1100px){
		height: 13rem;
		margin-top: 4.6rem;
	}

	@media (max-width: 780px){
		height: 10rem;	
		margin-top: 8.7rem;
	} 

	@media (max-width: 517px){
		height: 7rem;		
	} 
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
const LinkIcon = styled.a`
	text-decoration: none;
	color: #f5f5f5f5;
`;
const ServicesIcon1 = styled(AiOutlineMail)`
	font-size: 10rem;
	opacity: 0.4;
	padding: 2rem 0;
	cursor: pointer;

	@media (max-width: 517px){
		height: 4rem;		
	}
`;
const ServicesIcon2 = styled(AiOutlineWhatsApp)`
	font-size: 10rem;
	opacity: 0.4;
	padding: 2rem 0;

	@media (max-width: 517px){
		height: 4rem;		
	}
`;
const ServicesIcon3 = styled(AiOutlineInstagram)`
	font-size: 10rem;
	opacity: 0.4;
	padding: 2rem 0;

	@media (max-width: 517px){
		height: 4rem;		
	}
`;
