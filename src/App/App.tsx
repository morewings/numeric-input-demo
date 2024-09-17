import type {FC} from 'react';
import {useState} from 'react';

import {InputNumeric} from '@/InputNumeric';
import './index.css';

const App: FC = () => {
    const [value, setValue] = useState<string | undefined>();
    return (
        <div>
            <InputNumeric
                value={value}
                onChange={setValue}
                mode="natural"
                label="Natural numbers"
                placeholder="1234567890"
                errorMessage="Please enter natural number"
            />
            <InputNumeric
                value={value}
                onChange={setValue}
                mode="integer"
                label="Integer numbers"
                placeholder="-1234567890"
                errorMessage="Please enter valid integer"
            />
            <InputNumeric
                value={value}
                onChange={setValue}
                mode="floating"
                label="Floating numbers"
                placeholder="-123.456789"
                errorMessage="Please enter valid floating point number"
            />
            <InputNumeric
                value={value}
                onChange={setValue}
                mode="scientific"
                label="Scientific notation"
                placeholder="-123.45678e90"
                errorMessage="Please follow scientific notation rules"
            />
        </div>
    );
};

export default App;
