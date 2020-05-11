import React from 'react';
import NavigationBar from './menubar'
import CaseForm from './caseform';
//import Footer from './footer'

let App=()=> {
  return (
    <div>      
      <NavigationBar />
      <CaseForm />
      {/* <Footer />       */}
    </div>
  );
}

export default App;
