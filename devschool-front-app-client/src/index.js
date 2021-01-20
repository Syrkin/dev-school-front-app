import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import {unregister}  from './registerServiceWorker';
import {Provider} from 'react-redux';

import StudentsDialog from 'components/StudentsDialog/';
import SchoolsDialog from 'components/SchoolsDialog/';
import StartDialog from 'components/StartDialog/';
import CoursesDialog from 'components/CoursesDialog/';
import MentorsDialog from 'components/MentorsDialog/';
import browserHistory from './history';
import store from './store';
import * as routes from 'constants/routes';

ReactDOM.render(
    <Provider store={store}>
            <Router history={browserHistory}>
                <Switch>
                    <Route path={routes.MENTORS_DIALOG} component={MentorsDialog}/>
                    <Route path={routes.COURSES_DIALOG} component={CoursesDialog}/>
                    <Route path={routes.SCHOOLS_DIALOG} component={SchoolsDialog}/>
                    <Route path={routes.STUDENTS_DIALOG} component={StudentsDialog}/>
                    <Route path={routes.START_DIALOG} component={StartDialog}/>
                </Switch>
            </Router>
    </Provider>,
    document.getElementById('root')
);

unregister();
