// @flow

import React, { PureComponent } from 'react';
import {
  change,
  reduxForm,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initNumberPool from '../helper/init';
import KillThreeSection from '../components/KillThreeSection';
import KeepThreeSection from '../components/KeepThreeSection';
import KillFourSection from '../components/KillFourSection';
import KeepFourSection from '../components/KeepFourSection';
import ResultSection from '../components/ResultSection';
import { MAIN_FORM } from '../shared/form';
import { NO_RESULT } from '../shared/message';
import { FILTER_ACTIONS } from '../shared/actions';

const selector = formValueSelector(MAIN_FORM);

const styles = {
  wrapper: {
    height: 650,
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  main: {
    flex: 1,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
};

type Props = {
  handleSubmit: Function,
  changeResultNumber: Function,
  failFrom: number,
  failTo: number,
}

class KillKeepThreeFourPage extends PureComponent<Props> {
  static ACTIONS = FILTER_ACTIONS;

  state = {
    runningOptions: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      runningOptions,
    } = this.state;

    if (!prevState.runningOptions && runningOptions) {
      const {
        changeResultNumber,
        failFrom,
        failTo,
      } = this.props;

      setTimeout(() => {
        const result = KillKeepThreeFourPage.ACTIONS
          .reduce((prev, curr) => curr(prev, runningOptions), initNumberPool())
          .filter(num => (
            num.killFailedCount >= failFrom && failTo >= num.killFailedCount));

        if (!result.length) {
          changeResultNumber([NO_RESULT]);
        } else {
          changeResultNumber(result);
        }

        this.setState({ runningOptions: null });
      }, 0);
    }
  }

  submit(options) {
    this.setState({ runningOptions: options });
  }

  render() {
    const {
      handleSubmit,
    } = this.props;

    const {
      runningOptions,
    } = this.state;

    return (
      <form style={styles.wrapper} onSubmit={handleSubmit(d => this.submit(d))}>
        <div style={styles.main}>
          <KillThreeSection />
          <KeepThreeSection />
          <KillFourSection />
          <KeepFourSection />
        </div>
        <ResultSection isRunning={!!runningOptions} />
      </form>
    );
  }
}

const formHook = reduxForm({
  form: MAIN_FORM,
  destroyOnUnmount: false,
});

const reduxHook = connect(
  state => ({
    failFrom: selector(state, 'failFrom'),
    failTo: selector(state, 'failTo'),
  }),
  dispatch => bindActionCreators({
    changeResultNumber: value => change(MAIN_FORM, 'resultNumber', value),
  }, dispatch),
);

export default formHook(reduxHook(KillKeepThreeFourPage));
