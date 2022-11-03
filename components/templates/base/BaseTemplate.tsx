export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className={'bg-gradient-to-r from-cyan-500 to-blue-500'}>
      <h1>{sampleTextProp}</h1>
    </div>
  );
};

export default BaseTemplate;
