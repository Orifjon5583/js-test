// Rasmdagi 4 ta mavzuga strictly moslashtirilgan 20 ta JavaScript savollari:
// 1. JavaScript nima?: Console, alert bilan muloqot
// 2. O'zgaruvchilar: let, const, string, number
// 3. Array va Object — ma'lumot turlari
// 4. Shartli operatorlar if, else, mantiqiy amallar

const questions = [
    // --- 1. Mavzu: JavaScript nima?: Console, alert bilan muloqot ---
    {
        question: "1. Brauzerda foydalanuvchiga ogohlantirish oynasini chiqarish uchun qaysi funksiya ishlatiladi?",
        options: ["alert()", "console.log()", "prompt()", "print()"],
        correct: 0
    },
    {
        question: "2. Brauzerning dasturchilar konsoliga (console) ma'lumot chiqarish uchun qaysi buyruq ishlatiladi?",
        options: ["alert()", "console.log()", "document.write()", "prompt()"],
        correct: 1
    },
    {
        question: "3. Foydalanuvchidan matnli ma'lumot qabul qilib olish uchun qaysi muloqot oynasidan foydalaniladi?",
        options: ["alert()", "confirm()", "prompt()", "console.info()"],
        correct: 2
    },
    {
        question: "4. confirm('Rozimisiz?') muloqot oynasida foydalanuvchi 'OK' tugmasini bossa, funksiya nimani qaytaradi?",
        options: ["'OK'", "true", "false", "undefined"],
        correct: 1
    },
    {
        question: "5. JavaScript kodlarini HTML hujjatiga ulash uchun qaysi teg ishlatiladi?",
        options: ["<js>", "<script>", "<link>", "<code>"],
        correct: 1
    },

    // --- 2. Mavzu: O'zgaruvchilar: let, const, string, number ---
    {
        question: "6. Qaysi kalit so'z bilan e'lon qilingan o'zgaruvchi qiymatini keyinchalik o'zgartirib bo'lmaydi (o'zgarmas)?",
        options: ["let", "var", "const", "static"],
        correct: 2
    },
    {
        question: "7. let x = 10; x = 20; kodlari bajarilgach, x ning yakuniy qiymati nechaga teng bo'ladi?",
        options: ["10", "20", "Xatolik beradi (Error)", "undefined"],
        correct: 1
    },
    {
        question: "8. typeof '123' ifodasining natijasi nima bo'ladi?",
        options: ["'number'", "'string'", "'boolean'", "'object'"],
        correct: 1
    },
    {
        question: "9. console.log(5 + '5') kodi bajarilganda natija nima chiqadi?",
        options: ["10", "'55'", "NaN", "TypeError"],
        correct: 1
    },
    {
        question: "10. Backtick (`) belgisi yordamida matn ichiga o'zgaruvchini `${o'zgaruvchi}` ko'rinishida joylash nima deyiladi?",
        options: ["String concatenation", "Template literals (Shablonli matn)", "String split", "Number parsing"],
        correct: 1
    },

    // --- 3. Mavzu: Array va Object — ma'lumot turlari ---
    {
        question: "11. Massivdagi (Array) elementlarning indeksi nechanchi sondan boshlanadi?",
        options: ["1", "0", "-1", "ixtiyoriy"],
        correct: 1
    },
    {
        question: "12. const mevalar = ['Olma', 'Banan', 'Uzum']; bo'lsa, mevalar[1] nimani qaytaradi?",
        options: ["'Olma'", "'Banan'", "'Uzum'", "undefined"],
        correct: 1
    },
    {
        question: "13. Massiv oxiriga yangi element qo'shish uchun qaysi metod ishlatiladi?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "14. const talaba = { ism: 'Ali', yosh: 20 }; obyektidan 'Ali' qiymatini olish uchun qanday yoziladi?",
        options: ["talaba[0]", "talaba.ism", "talaba.get('ism')", "talaba->ism"],
        correct: 1
    },
    {
        question: "15. Massivdagi elementlar sonini aniqlash uchun qaysi xususiyatdan foydalaniladi?",
        options: [".size", ".count", ".length", ".index"],
        correct: 2
    },

    // --- 4. Mavzu: Shartli operatorlar if, else, mantiqiy amallar ---
    {
        question: "16. Qaysi operator ikkita qiymatning ham qiymatini, ham ma'lumot turini qat'iy tengligini tekshiradi?",
        options: ["==", "===", "=", "!="],
        correct: 1
    },
    {
        question: "17. Mantiqiy VA (AND) operatori JavaScript-da qanday yoziladi?",
        options: ["||", "&&", "!", "&"],
        correct: 1
    },
    {
        question: "18. Mantiqiy YOKI (OR) operatorida (true || false) amali nimani qaytaradi?",
        options: ["true", "false", "null", "undefined"],
        correct: 0
    },
    {
        question: "19. Ternar operator: (yosh >= 18) ? 'Katta' : 'Kichik'; Agar yosh = 16 bo'lsa, natija nima chiqadi?",
        options: ["'Katta'", "'Kichik'", "true", "false"],
        correct: 1
    },
    {
        question: "20. Qaysi operator mantiqiy inkor (NOT - qiymatni teskarisiga o'girish) amalini bajaradi?",
        options: ["!", "~", "!=", "&&"],
        correct: 0
    }
];

// Dastur holati (State)
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let studentInfo = { fullname: "", group: "" };
let googleScriptUrl = "https://script.google.com/macros/s/AKfycbzy9LavGhyWg3jI3LkjbhrdM0DM42wKCic5VtjcTxix_md0Uui3h90FN0in_up2oxJTmA/exec";

// HTML Elementlari
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const userForm = document.getElementById("user-form");

const studentNameDisplay = document.getElementById("student-name-display");
const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
const restartBtn = document.getElementById("restart-btn");

// Results Elements
const resName = document.getElementById("res-name");
const resGroup = document.getElementById("res-group");
const resCorrect = document.getElementById("res-correct");
const resIncorrect = document.getElementById("res-incorrect");
const finalPercentage = document.getElementById("final-percentage");
const resGrade = document.getElementById("res-grade");
const sheetStatus = document.getElementById("sheet-status");
const statusText = document.getElementById("status-text");
const sheetSpinner = document.getElementById("sheet-spinner");

// Event Listener: Form submit
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value.trim();
    const group = document.getElementById("group").value.trim();
    const urlInput = document.getElementById("sheet-url").value.trim();

    if (!fullname || !group) return;

    studentInfo.fullname = fullname;
    studentInfo.group = group;
    if (urlInput) {
        googleScriptUrl = urlInput;
    }

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    studentNameDisplay.textContent = studentInfo.fullname;

    loadQuestion();
});

// Load question logic
function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = q.question;

    // Progress bar calculate
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Render options
    optionsContainer.innerHTML = "";
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn";
        if (userAnswers[currentQuestionIndex] === idx) {
            btn.classList.add("selected");
        }
        btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });

    // Button controls
    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add("hidden");
        finishBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        finishBtn.classList.add("hidden");
    }
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });
}

// Navigation Events
prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
});

finishBtn.addEventListener("click", () => {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    if (answeredCount < questions.length) {
        const confirmFinish = confirm(`Siz 20 ta savoldan ${answeredCount} tasiga javob berdingiz. Baribir yakunlaysizmi?`);
        if (!confirmFinish) return;
    }
    showResults();
});

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

// Calculate and show results
function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let correctCount = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === questions[idx].correct) {
            correctCount++;
        }
    });

    const incorrectCount = questions.length - correctCount;
    const percentage = Math.round((correctCount / questions.length) * 100);

    let grade = "";
    if (percentage >= 85) grade = "5 (A'lo)";
    else if (percentage >= 70) grade = "4 (Yaxshi)";
    else if (percentage >= 55) grade = "3 (Qoniqarli)";
    else grade = "2 (Qoniqarsiz)";

    resName.textContent = studentInfo.fullname;
    resGroup.textContent = studentInfo.group;
    resCorrect.textContent = correctCount;
    resIncorrect.textContent = incorrectCount;
    finalPercentage.textContent = `${percentage}%`;
    resGrade.textContent = grade;

    // Update score circle visual
    const circle = document.querySelector('.score-circle');
    circle.style.background = `conic-gradient(#3b82f6 ${percentage}%, #e5e7eb ${percentage}%)`;

    // Send data to Google Sheet
    sendToGoogleSheet({
        fullname: studentInfo.fullname,
        group: studentInfo.group,
        correct: correctCount,
        incorrect: incorrectCount,
        total: questions.length,
        percentage: `${percentage}%`,
        grade: grade,
        date: new Date().toLocaleString("uz-UZ")
    });
}

// Function to send data to Google Apps Script Web App
function sendToGoogleSheet(data) {
    if (!googleScriptUrl) {
        sheetStatus.classList.remove("error");
        sheetStatus.style.backgroundColor = "#fffbe6";
        sheetStatus.style.borderColor = "#ffe58f";
        sheetStatus.style.color = "#873800";
        statusText.textContent = "Google Script URL kiritilmagan. Natija faqat ekranda ko'rsatildi.";
        return;
    }

    sheetSpinner.classList.remove("hidden");
    sheetStatus.classList.remove("error");
    statusText.textContent = "Natija Google Sheet-ga saqlanmoqda...";

    const formData = new URLSearchParams();
    formData.append("fullname", data.fullname);
    formData.append("group", data.group);
    formData.append("correct", data.correct);
    formData.append("incorrect", data.incorrect);
    formData.append("total", data.total);
    formData.append("percentage", data.percentage);
    formData.append("grade", data.grade);
    formData.append("date", data.date);

    fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
    })
    .then(() => {
        sheetSpinner.classList.add("hidden");
        sheetStatus.classList.remove("error");
        sheetStatus.style.backgroundColor = "#f0fdf4";
        sheetStatus.style.borderColor = "#bbf7d0";
        sheetStatus.style.color = "#166534";
        statusText.textContent = "✅ Natijangiz Google Sheet jadvaliga muvaffaqiyatli saqlandi!";
    })
    .catch((error) => {
        console.error("Sheet Sync Error:", error);
        sheetSpinner.classList.add("hidden");
        sheetStatus.classList.add("error");
        statusText.textContent = "⚠️ Google Sheet-ga saqlashda xatolik yuz berdi.";
    });
}
