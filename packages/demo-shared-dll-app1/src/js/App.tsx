
import React from 'react';
import { NumberedButton } from '@mashroom/demo-ui-library';

type Props = {
    name: string,
}

const App = ({ name }: Props) => {

    return (
        <div className='demo-shared-dll-app1'>
            <p>
                Demo Shared DLL App 1
            </p>
            <NumberedButton />
        </div>
    );

};

App.displayName = 'Demo Shared DLL App 1';

export default App;
