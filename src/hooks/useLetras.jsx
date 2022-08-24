import { useContext } from 'react';
import LetrasContext from '../contexts/LetrasProvider';

const useLetras = () => {
	return useContext(LetrasContext);
};
export default useLetras;
