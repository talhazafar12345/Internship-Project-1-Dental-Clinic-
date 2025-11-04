
const testimonials = [
  {
    name: "Ali Khan",
    role: "Web Developer",
    text: "This service is absolutely amazing! It helped me improve my projects significantly.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Ahmed",
    role: "Graphic Designer",
    text: "I loved the clean design and smooth functionality. Highly recommend it!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Usman Malik",
    role: "Marketing Expert",
    text: "Fantastic experience. The team was supportive and professional throughout.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Fatima Noor",
    role: "UI/UX Designer",
    text: "A perfect solution for anyone looking for quality and creativity together!",
    img: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    name: "Hassan Raza",
    role: "Entrepreneur",
    text: "Very happy with the results. It exceeded all my expectations!",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Zara Iqbal",
    role: "App Developer",
    text: "The platform is extremely user-friendly and creative. Loved it!",
    img: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Adeel Sheikh",
    role: "Photographer",
    text: "Best experience ever. Customer support was very responsive.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Maryam Javed",
    role: "SEO Expert",
    text: "My productivity doubled after using this service. Highly impressed!",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

function Hero12() {
  return (
    <div className="testimonials-section">
      <div className="testimonials-slider">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.img} alt={item.name} />
            <p>"{item.text}"</p>
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero12;