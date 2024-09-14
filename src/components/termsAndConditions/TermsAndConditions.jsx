import style from "./TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={style.div__terms}>
      <input className={style.input__checkbox} type="checkbox" name="agreeTerms" value={true} />
      <span className={style.span__terms}>He leído y acepto los <strong>Términos del Servicio</strong> y <strong>Política de Privacidad</strong></span>
    </div>
  );
};

export default TermsAndConditions;
