import React from 'react';

import { CountProvider } from './contexts/State.count_context'
import {NumberProvider} from './contexts/Reduce.count_context'
import {InputValueProvider} from './contexts/Input.context'

//components
import A from './components/A'




const  App = () =>{


	return (

		<div className="App" style={{ marginTop:'100px',}}
			>
			<CountProvider>
				<NumberProvider>
					<InputValueProvider>
						<A/>
					</InputValueProvider>
				</NumberProvider>
			</CountProvider>

		</div>

	);
}

export default App;
