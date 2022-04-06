import React from 'react';

import {FormInputLabel, Input, Group } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherOptions }) => {
    return (
        <Group>
            <Input {...otherOptions} />
            {
                label && (
                    <FormInputLabel shrink={otherOptions.value.length}>{label}</FormInputLabel>
                )
            }
        </Group>
    );
}

export default FormInput;