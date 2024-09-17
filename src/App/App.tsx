import type {FC} from 'react';
import {useState} from 'react';

import {InputNumeric} from '@/InputNumeric';
import './index.css';

const App: FC = () => {
    const [value, setValue] = useState<string | undefined>();
    return (
        <div>
            <InputNumeric value={value} onChange={setValue} />
        </div>
    );
};

export default App;
