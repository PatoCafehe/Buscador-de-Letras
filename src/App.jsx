import AppLetras from './components/AppLetras';
import { LetrasProvider } from './contexts/LetrasProvider';
function App() {
	return (
		<LetrasProvider>
			<AppLetras />
		</LetrasProvider>
	);
}

export default App;
