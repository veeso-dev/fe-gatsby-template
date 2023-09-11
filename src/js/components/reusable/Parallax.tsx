import * as React from 'react';
import LazyLoad from 'react-lazyload';

interface Props extends React.HTMLProps<HTMLDivElement> {
  height: string;
  width: string;
  image: string;
  children?: JSX.Element | JSX.Element[] | string;
}

const Parallax = (props: Props) => {
  const parallaxStyle = {
    backgroundImage: `url(${props.image})`,
    width: props.width,
    height: props.height,
  };

  return (
    <div className={`${props.className} h-auto w-full relative`}>
      <LazyLoad className="lazyload-wrapper--parallax">
        <div
          className="overflow-hidden bg-fixed bg-center bg-no-repeat bg-cover"
          style={parallaxStyle}
        >
          {props.children}
        </div>
      </LazyLoad>
    </div>
  );
};

export default Parallax;
