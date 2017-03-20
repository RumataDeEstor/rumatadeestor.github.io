import { connect } from 'react-redux';
import ResourcesPanel from '../../ResourcesPanel';
import provider from '../../GlobalProvider';

const mapStateToProps = (state, ownProps) => {
  return {
    food: provider.foodSupply(), // FIXME: repeated
    gold: provider.gold(),
  }
};

const PanelContainer = connect(
  mapStateToProps
)(ResourcesPanel);

export default PanelContainer;
