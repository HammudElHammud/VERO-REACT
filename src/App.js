import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-tooltip/dist/react-tooltip.css'

import '../src/assets/style.css'

const Home = React.lazy(() => import('../src/Views/pages/Home'));


function App() {

    const loading = (
        <div className="pt-3 text-center">
            <div className="sk-spinner sk-spinner-pulse"/>
        </div>
    )

    return (
        <BrowserRouter basename={process.env.REACT_APP_BASE_DASHBOARD_URL}>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route path="/" render={(props: object) => <Home/>}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;
