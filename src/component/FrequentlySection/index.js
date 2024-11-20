import "./index.css";

const questions = [
  { id: 1, question: "Can i chanage my plan later ?" },
  { id: 2, question: "What is your cancellation policy ?" },
  { id: 3, question: "Can other info be added to an invoice ?" },
  { id: 4, question: "How does billing works ?" },
];

const FrequentlySection = () => (
  <div className="questions-main-containeer">
    <h1>Frequently asked questions</h1>
    <p>Everything you need to know about the Product and billing </p>
    <div>
      <p className="questions">is there a free trail available ?</p>

      <p>
        Yes, you can try us for 30 days, if you want, we'll provide you with a
        free, personalized 30-minute onboarding call to get you up and running
        as soon as possible
      </p>
      <ul className="questions-ul">
        {questions.map((each) => (
          <li className="questions-li" key={each.id}>
            {each.question}
          </li>
        ))}
      </ul>
    </div>
    <div className="susyphus-main-container">
      <div className="sisyphus-container">
        <img
          src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1732025398/Logomark_7_h7cpab.png"
          alt="logo"
        />
        <p>Sisyphus</p>
      </div>
      <h1 className="susyphus-head">Still have queations?</h1>
      <div className="avatar-continer">
        <p className="avatar-name">
          Can't find the answer you're looking for? Please chat to our friendly
          team
        </p>
        <button className="get-in-button" type="button">
          Get in touch
        </button>
      </div>
    </div>
  </div>
);

export default FrequentlySection;
