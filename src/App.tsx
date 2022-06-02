import PropTypes from 'prop-types';
import { Person } from './types';

interface Props {
  list: Person[];
}

export function App(props: Props) {
  return <h1>Build a tree and display it (cf. README.md)</h1>;
}

App.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      parent: PropTypes.string,
    })
  ),
};
