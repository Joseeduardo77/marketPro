import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Fale Conosco</h2>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;