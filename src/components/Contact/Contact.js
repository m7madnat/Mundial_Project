const Contact = () => {
  return (
    <div>      
      <form 
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact"/>

      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label>First name<br />
            <input type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label>Last name<br />
            <input type="text" name="last-name" />
        </label>
      </div>

      <div>
        <label htmlFor="email" >Email</label><br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>Any Comments?<br />
          <textarea name="comments"></textarea>
        </label>
      </div>

      <button type="submit">Submit The Results</button>

    </form>
    </div>
  );
};

export default Contact;
