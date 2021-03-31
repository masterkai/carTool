import React, {memo} from 'react';
import PropTypes from 'prop-types'

const ToolHeader = memo(({headerText}) => {
  console.log('render tool header');
  return (
    <header>
      <h1>{headerText}</h1>
    </header>
  );
});
ToolHeader.defaultProps = {
  headerText: 'The Tool'
}
ToolHeader.propTypes = {
  headerText: PropTypes.string,
}
export default ToolHeader;