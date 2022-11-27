const Contact = () => {
  return (
    <div>
      <form name="contact" action="/success" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
