import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { generateFlatTree } from './utils';

ReactDOM.render(
  <App list={generateFlatTree()} />,
  document.getElementById('root')
);
