import React, { CSSProperties, FunctionComponent } from 'react';

import Select, { ClearIndicatorProps, ContainerProps } from 'react-select';
import { CSSObject } from '@emotion/serialize';
import { ColourOption, colourOptions } from './data.ts';

const CustomClearText: FunctionComponent = () => <><div style={{position: 'absolute', top: '10px', right: '-15px'}}><div>LOL</div></div></>;
const ClearIndicator = (props: ClearIndicatorProps<ColourOption, true>) => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
    >
      <div className='input' style={{}}>{children}</div>
    </div>
  );
};

const ClearIndicatorStyles = (
  base: CSSObject,
  state: ClearIndicatorProps<ColourOption>
): CSSObject => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
});

export default function CustomClearIndicator() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={{ ClearIndicator }}
      styles={{ clearIndicator: ClearIndicatorStyles }}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}