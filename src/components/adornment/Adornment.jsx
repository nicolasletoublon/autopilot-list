import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../svg-icon';
import Avatar from '../avatar';

const CrossIcon = (props) => (
  <SvgIcon {...props} className="svg-icon">
    <path d="M36.440013,32.0000358 L63.0803642,58.640387 C63.8735026,59.4335253 64.1832584,60.5895496 63.8929496,61.6729968 C63.6026408,62.7564439 62.7563723,63.6027124 61.6729252,63.8930212 C60.589478,64.18333 59.4334537,63.8735742 58.6403154,63.0804358 L31.9999642,36.4400846 L5.35961303,63.0804358 C4.13352741,64.3065214 2.14564984,64.3065214 0.919564218,63.0804358 C-0.306521406,61.8543502 -0.306521406,59.8664726 0.919564218,58.640387 L27.5599154,32.0000358 L0.919564218,5.35968464 C-0.306521406,4.13359901 -0.306521406,2.14572145 0.919564218,0.919635821 C2.14564984,-0.306449804 4.13352741,-0.306449804 5.35961303,0.919635821 L31.9999642,27.559987 L58.6403154,0.919635821 C59.4334537,0.126497436 60.589478,-0.183258385 61.6729252,0.107050386 C62.7563723,0.397359156 63.6026408,1.24362771 63.8929496,2.32707485 C64.1832584,3.41052199 63.8735026,4.56654632 63.0803642,5.35968464 L36.440013,32.0000358 Z"></path>
  </SvgIcon>
);

CrossIcon.displayName = 'CrossIcon';

const Adornment = ({ avatar, name }) => {
  if (avatar) {
    return (
      <Avatar size={25}>
        <img src={avatar} alt={`Avatar of ${name}`} />
      </Avatar>
    );
  }

  return <CrossIcon color="#343434" size={15} />;
};

Adornment.defaultProps = {
  avatar: undefined,
};

Adornment.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Adornment.displayName = "Adornment";

export default Adornment;
