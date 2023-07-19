const Message = ({ children, customClass }) => {
  return <p className={customClass || ""}>{children}</p>;
};

export default Message;
