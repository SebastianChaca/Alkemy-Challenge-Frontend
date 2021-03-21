import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Public from './Routes/Routing/PublicRoutes/Public';
import Private from './Routes/Routing/PrivateRoutes/Private';

function App() {
  return (
    <Router>
      <Public />
      <Private />
    </Router>
  );
}

export default App;
