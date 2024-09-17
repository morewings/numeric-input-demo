import type {FC, KeyboardEvent, ChangeEvent} from 'react';
import {useCallback, useId} from 'react';

// List of available numeric modes
enum Modes {
    natural = 'natural',
    integer = 'integer',
    floating = 'floating',
    scientific = 'scientific',
}

type Value = string;

export type Props = {
    /** Set controlled value */
    value?: Value;
    /** Provide a callback to capture changes */
    onChange?: (value?: Value) => void;
    /**
     * Define a number to increase or decrease input value
     * when user clicks arrow keys
     */
    step?: number;
    /** Set a maximum value available for arrow stepping */
    max?: number;
    /** Set a minimum value available for arrow stepping */
    min?: number;
    /** Select a mode of numeric input */
    mode?: keyof typeof Modes;
    /** Attach a text label to the input */
    label?: string;
    /** Set at a placeholder text for the input */
    placeholder?: string;
    /** Provide an error hint for the user*/
    errorMessage?: string;
};

const patternMapping = {
    [Modes.natural]: '(?:0|[1-9]\\d*)',
    [Modes.integer]: '[+\\-]?(?:0|[1-9]\\d*)',
    [Modes.floating]: '[+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d+)?',
    [Modes.scientific]: '[+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+\\-]?\\d+)?',
};

export const InputNumeric: FC<Props> = ({
    value,
    step = 1,
    max = Infinity,
    min = -Infinity,
    onChange = () => {},
    mode = Modes.scientific,
    label = 'Numeric input',
                                            placeholder,
                                            errorMessage = 'error!',
}) => {
    const id = useId();
    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            const inputValue = (event.target as HTMLInputElement).value;
            if (event.key === 'ArrowUp') {
                const nextValue = Number(inputValue || 0) + step;
                if (nextValue <= max) {
                    onChange(nextValue.toString());
                }
            }
            if (event.key === 'ArrowDown') {
                const nextValue = Number(inputValue || 0) - step;
                if (nextValue >= min) {
                    onChange(nextValue.toString());
                }
            }
        },
        [max, min, onChange, step]
    );
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        },
        [onChange]
    );
    const pattern = patternMapping[mode];
    return (
        <fieldset className="w-96">
            <label htmlFor={id} className="mb-2 flex cursor-pointer items-center text-sm font-medium text-gray-600">
                {label}
            </label>
            <input
                inputMode="decimal"
                autoComplete="off"
                pattern={pattern}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={value !== undefined ? value : ''}
                type="text"
                id={id}
                className="peer block w-48 rounded-full border-2 border-gray-300 bg-transparent px-4 py-2 text-right text-sm font-normal tabular-nums text-gray-900 placeholder:text-gray-400 invalid:border-red-600 focus:border-blue-300 focus:bg-white focus:outline-none focus:outline-0"
                placeholder={placeholder}
                aria-describedby={`${id}-helper-text`}
            />
            <div className="invisible mt-2 text-xs text-red-600 peer-[:invalid]:visible" id={`${id}-helper-text`}>
                {errorMessage}
            </div>
        </fieldset>
    );
};
