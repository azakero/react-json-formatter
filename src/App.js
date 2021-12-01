import { useState } from 'react';
import './App.css';

function App() {

    const [input, setInput]   = useState( '' );
    const [output, setOutput] = useState( '' );

    const handleInputChange = ( e ) => {
        setInput( e.target.value );
    }

    const beautifyHandler = () => {
        if ( input ) {
            const inputParsed     = JSON.parse( input );
            const beautifiedInput = JSON.stringify( inputParsed, null, 4 );
            setOutput( beautifiedInput );
        }
    }

    const minifyHandler = () => {
        if ( input ) {
            const inputParsed   = JSON.parse( input );
            const minifiedInput = JSON.stringify( inputParsed );
            setOutput( minifiedInput );
        }
    }

    const clearHandler = () => {
        setInput( '' );
        setOutput( '' );
    }

    return (
        <div className="App">

            <textarea 
                value={input} 
                onChange={handleInputChange}
                placeholder="paste your JSON here..."
            ></textarea>

            <div>
                <button type="button" onClick={beautifyHandler}>Beautify</button>
                <button type="button" onClick={minifyHandler}>Minify</button>
                <button type="button" onClick={clearHandler}>Clear</button>
            </div>

            <textarea 
                value={output} 
                readOnly 
                placeholder="formatted JSON..."
            ></textarea>

        </div>
    )
}
export default App;