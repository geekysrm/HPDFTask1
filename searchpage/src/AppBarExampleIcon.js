import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
    <AppBar
        title="Twitter"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}
    />
);

export default AppBarExampleIcon;