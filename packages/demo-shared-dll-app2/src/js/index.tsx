
import '../sass/style.scss';

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import type {MashroomPortalAppPluginBootstrapFunction} from "@mashroom/mashroom-portal/type-definitions";

const bootstrap: MashroomPortalAppPluginBootstrapFunction = (
    portalAppHostElement,
    portalAppSetup
) => {
    const { appConfig = {}, user: { username } } = portalAppSetup;

    const root = createRoot(portalAppHostElement);
    root.render(<App />);

    return Promise.resolve({
        willBeRemoved: () => {
            root.unmount();
        },
    });
};

// @ts-ignore
global.startupDemoSharedDLLApp2 = bootstrap;



