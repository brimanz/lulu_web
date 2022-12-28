import React from 'react'
import styled from '@emotion/styled'


const Navbar = () =>{
	return(
		<NavbarContainer>
			<h2>logo</h2>

			<NavbarElements>
				<NavbarList>
					<NavbarLinks href="#home">Home</NavbarLinks>
				</NavbarList>
				<NavbarList>
					<NavbarLinks href="#services">Servicios </NavbarLinks>
				</NavbarList>
				<NavbarList>
					<NavbarLinks href="#gallery">Galería</NavbarLinks>
				</NavbarList>
				<NavbarList>
					<NavbarLinks href="#contact">Contacto</NavbarLinks>
				</NavbarList>
			</NavbarElements>
		</NavbarContainer>
	);
}


export default Navbar


const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 4rem;
	background: #f5f5f5:
`;
const NavbarElements = styled.ul`
	display: flex;
	color: #FF0099; 
	list-style: none;
	margin-right: 2rem;
`;
const NavbarList = styled.li`
	margin-left: 1.5rem;
	font-size: 1.2rem;
	font-family: 'Oswald', sans-serif;
`;
const NavbarLinks = styled.a`
	text-decoration: none;
	color: #FF0099;

	:hover{
		border-bottom: 1px solid #FF0099;
		opacity: 0.7;		
	}
`;
