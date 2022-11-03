import style from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className={style.container}>
      <h1>{sampleTextProp}</h1>
    </div>
  );
};

export default BaseTemplate;
