import ReactDOM from 'react-dom';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App list={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
