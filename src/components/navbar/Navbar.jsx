import React from 'react'
import styled from '@emotion/styled'


const Navbar = ({navbarLinks})=>{

	return(
		<NavbarContainer>

			<ListElements>
				{navbarLinks.map(item =>{
					return(
						<ListItems
							key={item.title}
						>
							<LinksItems 
								href={item.url}
							>
								{item.title}
							</LinksItems>
						</ListItems>
					); 	
				})}
			</ListElements>
		</NavbarContainer>
	)
}


export default Navbar


const NavbarContainer = styled.div`
	position: fixed;
	top: 25%;
	right: 0;
	font-size: 1.2rem;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 17rem;
	background-color: #f5f5f5;
	padding: 0.5rem;
	border-radius: 0.5rem;
	margin: 0 2rem;
	opacity: 0.8;
	z-index: 5;
	border-left: 5px solid #283c86;

	:hover{
		border-left: 5px solid #FF0099;	
	}

	@media (max-width: 800px){
		position: fixed;
		margin: 0;	
		top: 88%;
		
		height: 5rem;
		width: 100%;
		border-radius: 0;
	} 
`;
const ListElements = styled.ul`
	list-style: none;	
`;
const ListItems = styled.li`
	padding: 1rem;
	text-align: center;
	font-family: 'Oswald', sans-serif;

	@media (max-width: 800px){
		float: left;
		margin: 0 1rem;
		font-size: 1.6rem;
	} 
`;
const LinksItems = styled.a`
	text-decoration: none;
	color: #FF0099;
	font-size: 1.4rem;

	:hover{
		border-bottom: 1px solid #FF0099;
	}
`;
