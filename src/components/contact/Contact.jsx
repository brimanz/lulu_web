import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai";


const Services = () =>{
	return(
		<ServicesContainer id="contact">
			<Title>Contáctanos a través de:</Title>

			<ServicesContent>
				<div>
					<LinkIcon href="mailto:brimanz2014@gmail.com">
						<ServicesIcon1/>
					</LinkIcon>
				</div>

				<div>
					<LinkIcon href="https://wa.me/+5804247319070">
						<ServicesIcon2/>
					</LinkIcon>
				</div>

				<div>
					<LinkIcon href="#">
						<ServicesIcon3/>
					</LinkIcon>
				</div>

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

	@media (max-width: 320px){
		margin-top: 34rem;
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
		font-size: 2.4rem;
	} 

	@media (max-width: 320px){
		font-size: 1.4rem;
	} 
`;
const ServicesContent = styled.div`
	margin-top: 4rem;
	background: #C9D6FF;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to left, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to left, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1100px){
		margin-top: 4.6rem;
	}

	@media (max-width: 780px){
		margin-top: 8.7rem;
	} 
`;
const LinkIcon = styled.a`
	text-decoration: none;
	color: #FF0099;
	margin: 1rem 4rem;

	:hover{
		color: #283c86;		
	}

	@media (max-width: 517px){
		margin: 1rem 1rem;
	} 

	@media (max-width: 320px){
		margin: 0 0.5rem;	
	}
`;
const ServicesIcon1 = styled(AiOutlineMail)`
	font-size: 5rem;
	opacity: 0.4;
	cursor: pointer;

	@media (max-width: 517px){
		font-size: 4rem;		
	}

	@media (max-width: 320px){
		height: 2.6rem;		
	}
`;
const ServicesIcon2 = styled(AiOutlineWhatsApp)`
	font-size: 5rem;
	opacity: 0.4;

	@media (max-width: 517px){
		height: 4rem;		
	}

	@media (max-width: 320px){
		height: 2.6rem;		
	}
`;
const ServicesIcon3 = styled(AiOutlineInstagram)`
	font-size: 5rem;
	opacity: 0.4;

	@media (max-width: 517px){
		height: 4rem;		
	}

	@media (max-width: 320px){
		height: 2.6rem;		
	}
`;
