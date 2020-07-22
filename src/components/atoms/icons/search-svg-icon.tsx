import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SearchSvgIcon: FC<Props> = props => {
  return (
    <svg
      width={props.width}
      height={props.width}
      viewBox={`0 0 ${props.width} ${props.height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color || `currentColor`}
    >
      <path d="M8.87 8.16l3.25 3.25-.7.71-3.26-3.25a5 5 0 1 1 .7-.7zM5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
    </svg>
  );
};

SearchSvgIcon.defaultProps = {
  width: 13,
  height: 13
};

export default SearchSvgIcon;
