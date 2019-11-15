// @flow

import React from 'react';
import { NumberedButton } from '@mashroom/demo-ui-library';

type Props = {
}

const App = () => {

    return (
        <div className='demo-shared-dll-app2'>
            <p>
                Demo Shared DLL App 2
            </p>
            <NumberedButton />
        </div>
    );

};

App.displayName = 'Demo Shared DLL App 2';

export default App;
