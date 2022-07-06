import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'redux/contact/contact-actions';
import { Label, LabelName, Input } from './Filter.styled';

function Filter({ filterValue, onFilterChange }) {
  return (
    <Label>
      <LabelName>Find contact by name</LabelName>
      <Input
        type="search"
        name="filter"
        autoComplete="off"
        value={filterValue}
        onChange={onFilterChange}
      />
    </Label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({
  filterValue: filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: ({ currentTarget }) =>
    dispatch(actions.changeFilter(currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
