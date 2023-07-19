const Message = ({ children, customClass }) => {
  return (
    <p style={{ color: 'white', padding: '16px' }} className={customClass || ''}>
      {children}
    </p>
  );
};

export default Message;
