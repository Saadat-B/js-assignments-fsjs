const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq(id) {
  document.querySelectorAll("p")[id].classList.toggle("hidden");
}

function createFaq() {
  const element = document.createElement("div");
  const header = document.createElement("div");
  const title = document.createElement("h3");
  const ans = document.createElement("p");
  const button = document.createElement("div");

  element.setAttribute("class", "faq");
  header.setAttribute("class", "faq_header");
  ans.setAttribute("class", "hidden");
  button.setAttribute("class", "show_btn");

  return { element, header, title, ans, button };
}

faqData.forEach((e) => {
  const faqhtml = createFaq();

  faqhtml.title.innerText = e.question;
  faqhtml.ans.innerText = e.answer;
  faqhtml.button.innerText = "+";

  accordianBody.append(faqhtml.element);

  faqhtml.element.append(faqhtml.header);
  faqhtml.header.append(faqhtml.title);
  faqhtml.header.append(faqhtml.button);
  faqhtml.element.append(faqhtml.ans);
});

function btnStatusUpdate() {
  const btn = document.querySelectorAll(".show_btn");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      showFaq(i);
    });
  }
}

btnStatusUpdate();
createFaq();

// console.log("hey");
