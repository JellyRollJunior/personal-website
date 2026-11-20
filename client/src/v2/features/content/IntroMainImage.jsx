import me from './../../assets/images/me.JPG';

const IntroMainImage = ({ className }) => {
  return (
    <img
      className={['image-content', className ? className : ''].join(' ')}
      src={me}
    />
  );
};

export { IntroMainImage };
