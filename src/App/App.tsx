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
        <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-3">
                <InputNumeric
                    value={naturalValue}
                    onChange={setNaturalValue}
                    mode="natural"
                    label="Natural number"
                    placeholder="1234567890"
                    errorMessage="Please enter natural number"
                />
                <InputNumeric
                    value={integerValue}
                    onChange={setIntegerValue}
                    mode="integer"
                    label="Integer number"
                    placeholder="-1234567890"
                    errorMessage="Please enter valid integer"
                />
            </div>
            <div className="flex flex-col gap-3">
                <InputNumeric
                    value={floatingValue}
                    onChange={setFloatingValue}
                    mode="floating"
                    label="Floating number"
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
        </div>

    );
};

export default App;
