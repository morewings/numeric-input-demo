import type {FC} from 'react';
import {useState} from 'react';

import {InputNumeric} from '@/InputNumeric';
import './index.css';

const App: FC = () => {
    const [naturalValue, setNaturalValue] = useState<string | undefined>();
    const [integerValue, setIntegerValue] = useState<string | undefined>();
    const [floatingValue, setFloatingValue] = useState<string | undefined>();
    const [scientificValue, setScientificValue] = useState<string | undefined>();
    return (
        <div>
            <InputNumeric
                value={naturalValue}
                onChange={setNaturalValue}
                mode="natural"
                label="Natural numbers"
                placeholder="1234567890"
                errorMessage="Please enter natural number"
            />
            <InputNumeric
                value={integerValue}
                onChange={setIntegerValue}
                mode="integer"
                label="Integer numbers"
                placeholder="-1234567890"
                errorMessage="Please enter valid integer"
            />
            <InputNumeric
                value={floatingValue}
                onChange={setFloatingValue}
                mode="floating"
                label="Floating numbers"
                placeholder="-123.456789"
                errorMessage="Please enter valid floating point number"
            />
            <InputNumeric
                value={scientificValue}
                onChange={setScientificValue}
                mode="scientific"
                label="Scientific notation"
                placeholder="-123.45678e90"
                errorMessage="Please follow scientific notation rules"
            />
        </div>
    );
};

export default App;
