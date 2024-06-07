"use strict"

const questions = [
  {
    question: "Что нужно снимать при входе в&nbsp;транспорт?",
    answer: "г) Рюкзаки или другие вещи, мешающие пассажирам",
    options: [
      "а) Головные уборы",
      "б) Видеообзоры",
      "в) Рюкзаки",
      "г) Рюкзаки или другие вещи, мешающие пассажирам",
    ],
    advices: {
      correct:
        "Верно!<br>При нахождении в&nbsp;транспорте нужно снимать рюкзаки и&nbsp;другие вещи, мешающие остальным пассажирам",
      incorrect:
        "Неверно!<br>При нахождении в&nbsp;транспорте нужно снимать рюкзаки и&nbsp;другие вещи, мешающие остальным пассажирам",
    },
  },
  {
    question: "Кому следует уступать место в&nbsp;транспорте?",
    answer:
      "г) Пожилым, беременным женщинам, маломобильным и&nbsp;пассажирам с&nbsp;детьми",
    options: [
      "а) Старшим и&nbsp;знакомым",
      "б) Грустным пассажирам",
      "в) Уставшим пассажирам",
      "г) Пожилым, беременным женщинам, маломобильным и&nbsp;пассажирам с&nbsp;детьми",
    ],
    advices: {
      correct:
        "Верно!<br>Нужно уступать место пожилым людям, беременным женщинам, людям с&nbsp;ограниченными возможностями и&nbsp;пассажирам с&nbsp;детьми",
      incorrect:
        "Неверно!<br>Нужно уступать место пожилым людям, беременным женщинам, людям с&nbsp;ограниченными возможностями и&nbsp;пассажирам с&nbsp;детьми",
    },
  },
  {
    question: "Как правильно заходить в&nbsp;транспорт?",
    answer: "б) Перед входом пропустить всех выходящих пассажиров",
    options: [
      "а) Расталкивать выходящих пассажиров",
      "б) Перед входом пропустить всех выходящих пассажиров",
      "в) Никого не&nbsp;пропускать, заходить первым",
      "г) Заходить в&nbsp;момент закрытия дверей",
    ],
    advices: {
      correct:
        "Верно!<br>Сначала пропускайте выходящих пассажиров и&nbsp;только потом заходите в&nbsp;транспорт",
      incorrect:
        "Неверно!<br>Сначала пропускайте выходящих пассажиров и&nbsp;только потом заходите в&nbsp;транспорт",
    },
  },
  {
    question: "Как поступить после входа в&nbsp;транспорт?",
    answer:
      "в) Пройти в&nbsp;центр салона и&nbsp;сесть на&nbsp;свободное место",
    options: [
      "а) Встать перед входом у&nbsp;самых дверей",
      "б) Зайти и&nbsp;бежать к&nbsp;свободному месту",
      "в) Пройти в&nbsp;центр салона и&nbsp;сесть на&nbsp;свободное место",
      "г) Если свободных мест нет, можно сесть на&nbsp;пол",
    ],
    advices: {
      correct:
        "Верно!<br>Не&nbsp;задерживайтесь у&nbsp;входа, проходите сразу в&nbsp;центр салона, чтобы не&nbsp;мешать другим пассажирам",
      incorrect:
        "Неверно!<br>Не&nbsp;задерживайтесь у&nbsp;входа, проходите сразу в&nbsp;центр салона, чтобы не&nbsp;мешать другим пассажирам",
    },
  },
  {
    question: "Нужно&nbsp;ли соблюдать чистоту в&nbsp;транспорте?",
    answer: "а) Да, не&nbsp;следует оставлять после себя мусор",
    options: [
      "а) Да, не&nbsp;следует оставлять после себя мусор",
      "б) Мусор можно оставить в&nbsp;салоне, его&nbsp;уберут работники транспорта",
      "в) Если случайно забыл мусор, то&nbsp;ничего страшного",
      "г) Если некуда деть мусор, можно&nbsp;выкинуть его&nbsp;в&nbsp;окно",
    ],
    advices: {
      correct:
        "Верно!<br>Соблюдайте порядок и&nbsp;чистоту в&nbsp;городском транспорте",
      incorrect:
        "Неверно!<br>Соблюдайте порядок и&nbsp;чистоту в&nbsp;городском транспорте",
    },
  },
  {
    question: "Как вести себя по&nbsp;отношению к&nbsp;другим пассажирам?",
    answer: "б) Нужно быть вежливым, разговаривать уважительно",
    options: [
      "а) Действовать в&nbsp;зависимости от&nbsp;своего настроения",
      "б) Нужно быть вежливым, разговаривать уважительно",
      "в) Если тебе нагрубили, можно ответить тем&nbsp;же",
      "г) С&nbsp;другими пассажирами разговаривать нельзя",
    ],
    advices: {
      correct:
        "Верно!<br>Будьте вежливыми и&nbsp;уважительными к&nbsp;другим пассажирам",
      incorrect:
        "Неверно!<br>Будьте вежливыми и&nbsp;уважительными к&nbsp;другим пассажирам",
    },
  },
  {
    question: "Можно&nbsp;ли шуметь в&nbsp;транспорте?",
    answer: "в) Нет, нужно уважать других и&nbsp;не&nbsp;шуметь",
    options: [
      "а) Конечно! Шуметь, бегать и&nbsp;веселиться!",
      "б) Кричать нельзя, но&nbsp;громко говорить можно",
      "в) Нет, нужно уважать других и&nbsp;не&nbsp;шуметь",
      "г) Меня поймут, если я&nbsp;захочу громко посмеяться или что&#8209;то спеть",
    ],
    advices: {
      correct: "Верно!<br>Не&nbsp;шумите, чтобы не&nbsp;мешать окружающим",
      incorrect: "Неверно!<br>Не&nbsp;шумите, чтобы не&nbsp;мешать окружающим",
    },
  },
  {
    question:
      "Могут&nbsp;ли пассажиры слушать громкую музыку без&nbsp;наушников?",
    answer:
      "а) Нет, следует всегда использовать наушники, чтобы&nbsp;никому не&nbsp;мешать!",
    options: [
      "а) Нет, следует всегда использовать наушники, чтобы&nbsp;никому не&nbsp;мешать!",
      "б) Конечно! Вдруг им&nbsp;не&nbsp;нравится надевать наушники?",
      "в) Могут, если они спросят разрешения у&nbsp;пассажиров рядом",
      "г) Да, так они поднимают настроение другим",
    ],
    advices: {
      correct:
        "Верно!<br>Всегда используйте в&nbsp;транспорте наушники, чтобы&nbsp;не&nbsp;беспокоить окружающих",
      incorrect:
        "Неверно!<br>Всегда используйте в&nbsp;транспорте наушники, чтобы&nbsp;не&nbsp;беспокоить окружающих",
    },
  },
  {
    question: "Как следует сидеть в&nbsp;транспорте?",
    answer: "г) Нужно сидеть аккуратно, не&nbsp;мешая другим пассажирам",
    options: [
      "а) Можно широко расставить ноги или&nbsp;вытянуть их&nbsp;в&nbsp;проход",
      "б) Как угодно. Главное, чтобы было комфортно",
      "в) Лучше всего встать на&nbsp;сиденье на&nbsp;коленки и&nbsp;смотреть в&nbsp;окно",
      "г) Нужно сидеть аккуратно, не&nbsp;мешая другим пассажирам",
    ],
    advices: {
      correct:
        "Верно!<br>Не&nbsp;сидите с&nbsp;раздвинутыми ногами, не&nbsp;выдвигайте&nbsp;их, чтобы&nbsp;не&nbsp;мешать другим пассажирам",
      incorrect:
        "Неверно!<br>Не&nbsp;сидите с&nbsp;раздвинутыми ногами, не&nbsp;выдвигайте&nbsp;их, чтобы&nbsp;не&nbsp;мешать другим пассажирам",
    },
  },
  {
    question:
      "Следует&nbsp;ли предупреждать стоящих перед вами пассажиров о&nbsp;том, что&nbsp;вы собираетесь выйти?",
    answer:
      "в) Да, перед выходом необходимо заранее предупреждать других пассажиров",
    options: [
      "а) Ещё чего! Зачем им&nbsp;это знать?",
      "б) Нельзя беспокоить других пассажиров вопросами",
      "в) Да, перед выходом необходимо заранее предупреждать других пассажиров",
      "г) Необязательно. Если что, можно начать толкаться&nbsp;&mdash; они сами отойдут",
    ],
    advices: {
      correct:
        "Верно!<br>Предупреждайте стоящих перед вами пассажиров о&nbsp;своём намерении выйти",
      incorrect:
        "Неверно!<br>Предупреждайте стоящих перед вами пассажиров о&nbsp;своём намерении выйти",
    },
  },
  {
    question: "Надо&nbsp;ли следить за&nbsp;своими вещами в&nbsp;транспорте?",
    answer: "б) Всегда нужно следить за&nbsp;своими вещами",
    options: [
      "а) Нет, везде дежурит полиция&nbsp;&mdash; это&nbsp;их&nbsp;работа",
      "б) Всегда нужно следить за&nbsp;своими вещами",
      "в) Пассажиры должны следить за&nbsp;вещами друг друга",
      "г) Лучше ездить в&nbsp;транспорте без вещей",
    ],
    advices: {
      correct: "Верно!<br>Следите за&nbsp;своими вещами",
      incorrect: "Неверно!<br>Следите за&nbsp;своими вещами",
    },
  },
  {
    question: "Можно&nbsp;ли разглядывать других пассажиров?",
    answer: "в) Нет, это некультурно и&nbsp;может смутить пассажира",
    options: [
      "а) Да, это очень увлекательно",
      "б) Нужно смотреть прямо в&nbsp;глаза",
      "в) Нет, это некультурно и&nbsp;может смутить пассажира",
      "г) Можно, если пассажир необычно одет или как-то выделяется",
    ],
    advices: {
      correct:
        "Верно!<br>Разглядывать других пассажиров невежливо, а&nbsp;также может их&nbsp;напугать",
      incorrect:
        "Неверно!<br>Разглядывать других пассажиров невежливо, а&nbsp;также может их&nbsp;напугать",
    },
  },
  {
    question:
      "Можно&nbsp;ли заглядывать в&nbsp;телефон или книгу рядом сидящего пассажира?",
    answer: "а) Нет, это неприлично",
    options: [
      "а) Нет, это неприлично",
      "б) Да, интересно посмотреть, что читают другие",
      "в) Да, подсматривать&nbsp;&mdash; это весело",
      "г) Можно, если он&nbsp;этого не&nbsp;замечает",
    ],
    advices: {
      correct:
        "Верно!<br>Неуместно заглядывать в&nbsp;телефон или&nbsp;книгу пассажира, который сидит или&nbsp;стоит рядом с&nbsp;вами",
      incorrect:
        "Неверно!<br>Неуместно заглядывать в&nbsp;телефон или&nbsp;книгу пассажира, который сидит или&nbsp;стоит рядом с&nbsp;вами",
    },
  },
  {
    question:
      "Можно&nbsp;ли провозить открытые еду и&nbsp;напитки в&nbsp;транспорте?",
    answer: "в) Нет, так есть риск кого-нибудь испачкать",
    options: [
      "а) Да, в&nbsp;этом нет ничего страшного",
      "б) Можно, если рядом мало пассажиров",
      "в) Нет, так есть риск кого-нибудь испачкать",
      "г) Если пассажир очень голодный, то&nbsp;конечно можно",
    ],
    advices: {
      correct:
        "Верно!<br>Не&nbsp;надо брать с&nbsp;собой в&nbsp;транспорт мороженое, напитки и&nbsp;любую другую еду, которой можно испачкать других пассажиров",
      incorrect:
        "Неверно!<br>Не&nbsp;надо брать с&nbsp;собой в&nbsp;транспорт мороженое, напитки и&nbsp;любую другую еду, которой можно испачкать других пассажиров",
    },
  },
  {
    question: "Можно&nbsp;ли занимать в&nbsp;транспорте больше одного сиденья?",
    answer: "б) Нет, один пассажир может занять только одно сиденье",
    options: [
      "а) Да, если с&nbsp;собой много вещей",
      "б) Нет, один пассажир может занять только одно сиденье",
      "в) Если пассажир очень устал, он&nbsp;может прилечь на&nbsp;сиденья",
      "г) Можно занимать максимум 2&nbsp;сиденья",
    ],
    advices: {
      correct: "Верно!<br>Не&nbsp;занимайте больше одного сиденья",
      incorrect: "Неверно!<br>Не&nbsp;занимайте больше одного сиденья",
    },
  },
  {
    question:
      "Можно&nbsp;ли стряхнуть снег или капли дождя с&nbsp;одежды или зонта после входа в&nbsp;транспорт?",
    answer:
      "в) Нет, так он&nbsp;может испачкать салон и&nbsp;других пассажиров",
    options: [
      "а) Да, в&nbsp;этом нет ничего плохого",
      "б) Если пассажир очень торопится, то&nbsp;да",
      "в) Нет, так он&nbsp;может испачкать салон и&nbsp;других пассажиров",
      "г) Конечно, где ещё это делать, если&nbsp;не&nbsp;в&nbsp;транспорте?",
    ],
    advices: {
      correct:
        "Верно!<br>В&nbsp;городском транспорте нельзя стряхивать снег или капли дождя с&nbsp;одежды",
      incorrect:
        "Неверно!<br>В&nbsp;городском транспорте нельзя стряхивать снег или капли дождя с&nbsp;одежды",
    },
  },
]

const results = [
  {
    percentText: "0-49% правильных ответов",
    rang: "Этикет, ясельная группа",
    comment:
      "Эх! В&nbsp;этот раз не&nbsp;получилось. Советую тебе ещё раз изучить все правила поведения в&nbsp;транспорте, чтобы стать настоящим доктором этикетных наук!",
    image: "result0.png",
  },
  {
    percentText: "50-69% правильных ответов",
    rang: "Пятый класс гимназии транспортного этикета",
    comment:
      "Ты&nbsp;знаком с&nbsp;базовыми правилами поведения в&nbsp;транспорте, но&nbsp;твои знания точно могут стать лучше. Давай попробуем ещё раз?",
    image: "result50.png",
  },
  {
    percentText: "70-89% правильных ответов",
    rang: "Выпускник института хороших манер",
    comment:
      "Поздравляю! Ты&nbsp;хорошо знаешь правила поведения в&nbsp;транспорте. До&nbsp;высшего балла не&nbsp;хватило совсем чуть-чуть. Уверен, у&nbsp;тебя всё получится!",
    image: "result70.png",
  },
  {
    percentText: "90-100% правильных ответов",
    rang: "Доктор этикетных наук",
    comment:
      "Браво! Горжусь твоими знаниями! Ты&nbsp;отлично знаешь правила транспортного этикета и&nbsp;легко можешь объяснить их&nbsp;своим друзьям и&nbsp;знакомым.",
    image: "result90.png",
  },
]

const img_wait = "waiting.svg"
const img_correct = "happy.svg"
const img_incorrect = "unhappy2.svg"

const take = document.querySelector.bind(document)

const quiz = take(".quiz")
const warning = take(".warning")
const btnNext = document.querySelectorAll(".quiz__next-btn")
const coach = take(".quiz_coach .quiz_advice")
const coachContainer = take(".quiz_coach")
const coachAdvice = document.querySelectorAll(".quiz_advice")
const coachImg = document.querySelectorAll(".quiz_coach_img")
const result = take(".result")
const footer = take(".quiz__footer")
const popup = take(".quiz__popup")

const totalResultForm = take("[name=результат]")

let uniqueFormId

let attempt = 1
let count = 0
let userScore = 0

let screenWidth = window.innerWidth
let sizeTablet = 1024
let sizeMobile = 475
let finishBtnText = "Следующий вопрос"

if (screenWidth > sizeMobile && screenWidth <= sizeTablet)
  finishBtnText = "Далее"

//* Проверка на существование обьекта с вопросами и наличие самих вопросов
if (typeof questions !== "undefined" && questions.length > 0) {
  quiz.classList.remove("hidden")
  showQuestions(count)
} else {
  warning.classList.remove("hidden")
}

btnNext.forEach((el) => el.addEventListener("click", nextQuestion))

//* показываем вопрос и список ответов из массива, а также вешаем функцию обработчик клика на каждый ответ
function showQuestions(index) {
  const quizTitle = take(".quiz__header-title")
  const title = take(".quiz__title")
  const list = take(".quiz__list")
  const total = take(".quiz__total")

  const quizContent = take(".quiz__content .quiz__list")
  quizContent.classList.add("extra_mobile_space")

  title.innerHTML = `${questions[index].question}`
  list.innerHTML = ""
  questions[index].options.forEach((item, i) => {
    let li = document.createElement("li")
    li.classList.add("quiz__option")
    li.style.animationDelay = `${i * 50}ms`
    li.innerHTML = item

    list.appendChild(li)
  })

  const options = list.querySelectorAll(".quiz__option")
  options.forEach((item) =>
    item.setAttribute("onclick", "optionSelected(this)")
  )

  quizTitle.innerHTML = `Вопрос ${index + 1}`
  total.innerHTML = `${index + 1}/${questions.length}`

  if (index == questions.length - 1) {
    btnNext.forEach((el) => {
      el.setAttribute("goToResults", "")
      el.innerText = "К результатам"
      el.removeEventListener("click", nextQuestion)
      el.addEventListener("click", showResults)
    })
  }
}

function submitForm() {
  showResults()

  const idOrderNum = take("[name=id]")
  if (attempt == 1) {
    uniqueFormId = idOrderNum.value
  } else {
    idOrderNum.value = `${uniqueFormId}_${attempt}`
  }

  totalResultForm.value = `${userScore}/${questions.length}`

  const submitButtonTilda = document.querySelector(".uc-tildaForm .t-submit")

  setTimeout(() => {
    submitButtonTilda.click()
  }, 100)

  btnNext.forEach((el) => {
    el.removeEventListener("click", submitForm)
    el.addEventListener("click", nextQuestion)
  })
}

function optionSelected(answer) {
  const userAnswer = answer.innerHTML
  const correctAnswer = questions[count].answer
  const options = document.querySelectorAll(".quiz__option")
  const coachAdviceText = document.querySelectorAll(".quiz_advice_text")

  const quizContent = take(".quiz__content .quiz__list")
  quizContent.classList.remove("extra_mobile_space")

  let questionsFormSend = take(`[name=вопрос_${count + 1}]`)

  //варианты ответа
  options.forEach((item) => {
    if (item.innerHTML == correctAnswer) {
      setTimeout(() => {
        item.classList.add("correct")
      }, 250)
    } else {
      setTimeout(() => {
        item.classList.add("incorrect")
      }, 250)
    }

    item.classList.add("disabled")
  })
  answer.classList.add("answered")

  //наставник и счет
  if (userAnswer == correctAnswer) {
    userScore += 1
    coachAdvice.forEach((el) => el.classList.add("correct"))
    coachAdviceText.forEach(
      (el) => (el.innerHTML = questions[count].advices.correct)
    )

    // questionsFormSend.value = 1

    coachImg.forEach((coachImg) => {
      coachImg.src = `https://coddmac.store/KIDSTRANSPORT/${img_correct}`
    })
  } else {
    coachAdvice.forEach((el) => el.classList.remove("correct"))
    coachAdviceText.forEach(
      (el) => (el.innerHTML = questions[count].advices.incorrect)
    )

    // questionsFormSend.value = 0

    coachImg.forEach((coachImg) => {
      coachImg.setAttribute("incorrect", "")
      coachImg.src = `https://coddmac.store/KIDSTRANSPORT/${img_incorrect}`
    })
  }

  coach.classList.remove("hidden")
  footer.classList.remove("hidden")
  popup.classList.remove("hidden")

  if (window.innerWidth <= 475) openPopup()

  coachContainer.classList.add("hideOnMobile")
}

function nextQuestion() {
  const option = take(".quiz__option")

  coachImg.forEach((coachImg) => {
    coachImg.removeAttribute("incorrect")
    coachImg.src = `https://coddmac.store/KIDSTRANSPORT/${img_wait}`
  })

  coach.classList.add("hidden")
  footer.classList.add("hidden")

  popup.classList.add("hidden")
  if (window.innerWidth <= 475) closePopup()

  coachContainer.classList.remove("hideOnMobile")

  if (option.classList.contains("disabled")) {
    count++
    showQuestions(count)
  } else {
    alert("Ответь на вопрос, перед тем, как идти дальше)")
  }
}

const restartQuiz = () => {
  attempt++
  count = 0
  userScore = 0

  btnNext.forEach((el) => {
    el.removeAttribute("goToResults")
  })

  take("body").style.minHeight = "100vh"
  coach.classList.add("hidden")
  result.classList.add("hidden")
  quiz.classList.remove("hidden")
  footer.classList.add("hidden")
  coachContainer.classList.remove("hideOnMobile")

  coachImg.forEach((coachImg) => {
    coachImg.removeAttribute("incorrect")
    coachImg.src = `https://coddmac.store/KIDSTRANSPORT/${img_wait}`
  })

  btnNext.forEach((el) => {
    el.innerText = finishBtnText
  })
  showQuestions(count)

  const lightnings = document.querySelectorAll(".lightning")
  lightnings.forEach((light) => (light.style.animation = "none"))
}

const showResults = () => {
  const percentText = take(".result__percent b")
  const rang = take(".result__text h1")
  const comment = take(".result__text b")
  const resultImage = take(".result__img img")
  const restartButton = take(".result__restart")

  closePopup()

  const percent = Math.ceil((userScore / questions.length) * 100)
  let index = 0

  if (percent > 89) {
    index = 3
  } else if (percent > 69) {
    index = 2
  } else if (percent > 49) {
    index = 1
  } else {
    index = 0
  }

  if (results[index]) {
    percentText.innerHTML = results[index].percentText
    rang.innerHTML = results[index].rang
    comment.innerHTML = results[index].comment
    resultImage.src = `https://coddmac.store/KIDSTRANSPORT/${results[index].image}`
  }

  if (attempt === 1)
    take(".result__exit").addEventListener("click", () => {
      window.location.href = "https://i.transport.mos.ru/kids?played"
      return
    })

  take("body").style.minHeight = "100vh"

  popup.classList.add("hidden")
  quiz.classList.add("hidden")

  resultImage.onload = () => {
    const lightnings = document.querySelectorAll(".lightning")
    lightnings[0].style.animation = "lightning_1 1s ease-in-out forwards"
    lightnings[1].style.animation = "lightning_2 1s ease-in-out forwards"
    lightnings[2].style.animation = "lightning_3 1s ease-in-out forwards"

    result.classList.remove("hidden")
  }
  restartButton.addEventListener("click", restartQuiz)

  return
}

// Для отключения скролла (работает в Safari)
let bodyOverflow = document.querySelector("body")
let scrollPosition = 0

function closePopup() {
  bodyOverflow.style.removeProperty("overflow")
  bodyOverflow.style.removeProperty("position")
  bodyOverflow.style.removeProperty("top")
  bodyOverflow.style.removeProperty("width")
  window.scrollTo(0, scrollPosition)
}

function openPopup() {
  scrollPosition = window.scrollY
  bodyOverflow.style.overflow = "hidden"
  bodyOverflow.style.position = "fixed"
  bodyOverflow.style.top = `-${scrollPosition}px`
  bodyOverflow.style.width = "100%"
}

const setHeight = () => {
  if (window.innerWidth <= 1024) {
    document.querySelector("body").style.minHeight = window.innerHeight + "px"
  } else {
    document.querySelector("body").style.minHeight = "100vh"
  }
}

window.addEventListener("resize", setHeight)
