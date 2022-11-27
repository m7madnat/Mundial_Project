const Contact = () => {
  return (
    <div>
      <form name="contact" netlify netlify-honeypot="bot-field">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
};

export default Contact;
