import { useEffect, useState } from "react";
import style from "./Message.module.css";

const Message = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`${style.success__message} ${visible ? style.visible : ""}`}
    >
      <span className={style.span__success}>
      {message}
      </span>
    </div>
  );
};

export default Message;
