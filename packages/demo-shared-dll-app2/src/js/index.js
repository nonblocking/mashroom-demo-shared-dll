// @flow

import '../sass/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import type {MashroomPortalAppPluginBootstrapFunction} from "@mashroom/mashroom-portal/type-definitions";

const bootstrap: MashroomPortalAppPluginBootstrapFunction = (
    portalAppHostElement,
    portalAppSetup
) => {
    const { appConfig = {}, user: { username } } = portalAppSetup;

    ReactDOM.render(<App />, portalAppHostElement);

    return Promise.resolve({
        willBeRemoved: () => {
            ReactDOM.unmountComponentAtNode(portalAppHostElement);
        },
    });
};

global.startupDemoSharedDLLApp2 = bootstrap;



