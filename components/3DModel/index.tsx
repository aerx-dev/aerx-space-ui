// pinata keys change reload tests
import '@google/model-viewer';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyElementAttributes;
    }
    interface MyElementAttributes {
      src: string;
      alt?: string;
      style?: any;
      autoplay?: boolean;
      'camera-controls'?: boolean;
    }
  }
}
const ThreeDModel = ({ src }: { src: string }) => {
  console.log(src);
  return (
    <model-viewer
      src={src}
      alt="test"
      style={{ width: '100%', height: '100%' }}
      autoplay
    ></model-viewer>
  );
};

export default ThreeDModel;
