import React from "react";

import Header from "./Header";
import Rooms from "./Rooms";

const styles = {
    containerStyle: {
        maxWidth: '100%',
        margin: '20px auto',
    },
    titleStyle: {
        paddingLeft: 20
    }
};

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div id="container" style={styles.containerStyle}>
                <h1 style={styles.titleStyle}>Chat Server</h1>
                <Header />
                <Rooms />
            </div>
        );
    }
}

// const Layout = (props) => (
//     <div id="container" class="onepcssgrid-1000">
//          <h1>Chat Server</h1>
//          <Header />
//          <Rooms />
//     </div>
// );

// export default muiThemeable()(Layout);
