import { IAppProps } from './App';
import { FETCH_USER } from '../../store/user/user.actions';
import { connect } from 'react-redux';
import App from './App';
import { fetchUserFulfilled, fetchUserCancel } from '../../store/user/user.epics';

const mapStateToProps = (state: any, props: IAppProps) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
    onSearch: (e: string) => {
        dispatch({ type: FETCH_USER, payload: e });
    },
    onChange: (e: any) => {
        dispatch(fetchUserCancel());
        dispatch(fetchUserFulfilled({ login: e.target.value }));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);