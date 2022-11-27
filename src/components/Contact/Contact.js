import './Contact.css'

const Contact = () => {
  return (
    <div className="full-cont">
      <div className="con-left">
        <h1>CONTACT</h1>
        <p>Have a question or comment? We'd love to hear from you!</p>
        <p>Send us a message and we'll respond as soon as possible.</p>
        <p>if you want mail : m7madnatseh1999@gmail.com</p>
        <p>if you want hear my voice: +972586217666</p>                        
      </div>
      <div className="con-right">
        <form className="contact" name="contact" method="post">        
        <h1>Get in touch</h1>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label> <br />
          <input className="inpt" type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label> <br />
          <input className="inpt" type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea className="inpt" id="message" name="message" required></textarea>
        </p>
        <p>
          <input className="sbmt" type="submit" value="Submit message" />
        </p>
      </form>
      </div>
    </div>
  );
};

export default Contact;
