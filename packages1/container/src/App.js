import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter  } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";

const generateClassname = createGenerateClassName({
  productionPrefix : 'co' ,
});



export default () => {
  return <StylesProvider createGenerateClassName = {generateClassname}> 
<BrowserRouter>
  <div>
    <Header/>
    <MarketingApp />
  </div>;
  </BrowserRouter>
  </StylesProvider>
};
