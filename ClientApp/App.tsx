import * as React from 'react';
import { render } from 'react-dom';
import { HomePage } from '../ClientApp/Home/Home';


const rootElement = document.getElementById('test');
render(<HomePage />, rootElement);
