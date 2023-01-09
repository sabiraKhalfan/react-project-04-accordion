import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {



  return  <main>
<div className='container'>

<h3>Questions and answers about login</h3>
<section  className='info'>
    {data.map((datum)=>{
      return <>
      <div>
        <SingleQuestion key={datum.id} {...datum}/>
      </div>
      </>
    })}
    </section>
    </div>
    </main>
}
export default App;
