import React, { Fragment } from 'react' 

const Membre = ({nom, age, poids, mesure, children}) => {
//const name = 'theo'
//const name = props.nom 

	return (

		<Fragment>

		<h2 style={{ 

			backgroundColor: age < 20 ? 'orange' : 'purple', 
			color: age > 25 ? 'black' : 'white' }} > 

			{nom.toUpperCase()} 

		: {age} , { poids } { mesure }</h2>

		{ children ? <p> {children} </p> : <Fragment />}

		<p> {children} </p>

		</Fragment>

	)
}

export default Membre 