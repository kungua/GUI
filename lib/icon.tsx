import * as React from 'react';
import './importIcons';
import './icon.scss';

interface iconProps {
  name: string,
  onClick: () => void
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <svg className="gui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;