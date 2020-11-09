import { connect } from 'react-redux';
import ModalFood from 'src/components/Dashboard/Trackers/ModalFood';
import {
  fetchFoodList,
  setTrackerFood,
} from '../actions/trackers';

const mapStateToProps = (state) => ({
  foodTypeList: state.tracker.food,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoodList: () => {
    dispatch(fetchFoodList());
  },
  setTrackerFood: (foodQuantity, foodType) => {
    // console.log('container setTrackerSport');
    const object = {
      foodQuantity,
      foodType,
    };
    dispatch(setTrackerFood(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFood);
