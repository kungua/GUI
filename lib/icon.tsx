import * as React from 'react';
import './importIcons';

interface iconProps {
  name: string
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;