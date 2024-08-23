
import App from './App.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'

// function MyApp(){
//   return(
//     <div>
//     <h1>My custom App</h1>
//     </div>
//   )
// }

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Click me to go to Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
