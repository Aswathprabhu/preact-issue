import { h } from 'preact';
import ContextHugger from './context';
import Modal from './modal';

const App = () => (
	<div id="app">
    <ContextHugger>
      <Modal />
    </ContextHugger>
	</div>
)

export default App;
