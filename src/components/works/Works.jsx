import React from 'react'

import {bebe, bebe2, bebe3, bebe4, bebe5}  from '../../../public/assets'


const Works = () =>{

	let data = [
		{
			id: 1,
			imgSrc: bebe
		},
		{
			id: 2,
			imgSrc: bebe2
		},
		{
			id: 3,
			imgSrc: bebe3
		},
		{
			id: 4,
			imgSrc: bebe4
		},
		{
			id: 5,
			imgSrc: bebe5
		}
	]

	return(
		<div id="works">
			<h2>Nuestra galería</h2>

			{data.map((item, index) => {
				return(
					<div key={index}>
						<img src={item.imgSrc}/>
					</div>
				)
			})}			
		</div>
	);
}


export default Works