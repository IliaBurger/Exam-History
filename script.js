// ========================================================
//  ГЛОБАЛЬНЫЙ ИНТЕРАКТИВНЫЙ ДВИЖОК ПЛАТФОРМЫ (V5.0)
// ========================================================

const russiaParagraphsList = ["Восточные славяне и их соседи (VI–IX вв.)", "Формирование Древнерусского государства. Первые Рюриковичи", "Владимир Святославич. Крещение Руси", "Расцвет Руси при Ярославе Мудром. «Русская Правда»", "Русь при Владимире Мономахе", "Главные центры раздробленности", "Культура и быт Древней Руси", "Монгольское завоевание и ордынское владычество", "Экспансия с Запада. Александр Невский", "Возвышение Москвы. Куликовская битва", "Создание единого Русского государства при Иване III", "Иван IV Грозный: реформы Избранной рады и Опричнина", "Культура Руси в XIV–XVI вв.", "Смутное время в России: причины, этапы, последствия", "Россия при первых Романовых. Бунташный век", "Церковный раскол в XVII в.", "Экономическое развитие России в XVII в. Освоение Сибири", "Эпоха Петра I: Северная война и создание империи", "Эпоха дворцовых переворотов", "Екатерина II и «просвещённый абсолютизм»", "Правление Павла I. Культура в XVIII в.", "Россия в первой половине XIX в. Александр I", "Движение декабристов: тайные общества и восстание", "Правление Николая I: консерватизм", "Александр II и Великие реформы 1860–1870-х гг.", "Общественные движения во второй половине XIX в.", "Правление Александра III: политика контрреформ", "Культура, наука и искусство России в XIX в.", "Россия на рубеже XIX–XX вв. Николай II", "Россия в Первой мировой войне. Кризис власти", "Гражданская война в России", "Образование СССР. Сталинская модернизация", "Великая Отечественная война (1941–1945 гг.)", "СССР во второй половине ХХ века", "Распад СССР. Создание РФ. Россия на рубеже ХХ–ХХI вв."];
const worldShortNamesList = {1: "Первобытное общество", 2: "Древний Египет", 3: "Древняя Греция", 4: "Древний Рим", 5: "Падение Римской империи", 6: "Великое переселение народов", 7: "Византийская империя", 8: "Возникновение ислама", 9: "Империя Карла Великого", 10: "Средневековый город", 11: "Католическая церковь и Крестовые походы", 12: "Столетняя война", 13: "Священная Римская империя", 14: "Османская экспансия", 15: "Культура Средневековья", 16: "Великие географические открытия", 17: "Эпоха Возрождения", 18: "Реформация. Мартин Лютер", 19: "Религиозные войны во Франции", 20: "Нидерландская революция", 21: "Английская буржуазная революция", 22: "Тридцатилетняя война", 23: "Абсолютизм во Франции", 24: "Эпоха Просвещения", 25: "Война за независимость и США", 26: "Великая французская революция", 27: "Наполеоновские войны", 28: "Промышленный переворот", 29: "Революции 1848 г.", 30: "Объединение Германии и Италии", 31: "Гражданская война в США", 32: "Колониальный раздел Азии", 33: "Китай в XIX в. Опиумные войны", 34: "Модернизация Японии. Реставрация Мэйдзи", 35: "Становление империализма", 36: "Блоки Первой мировой войны", 37: "Ход Первой мировой войны", 38: "Версальско-Вашингтонская система", 39: "Великая депрессия 1929-1933 гг.", 40: "Нацизм в Германии и Фашизм в Италии", 41: "Гражданская война в Испании", 42: "Мюнхенский сговор и начало Второй мировой", 43: "Ход Второй мировой войны", 44: "Конференции «Большой тройки»", 45: "Холодная война: НАТО и ОВД", 46: "Карибский кризис и Корейская война", 47: "Процесс деколонизации", 48: "Страны Запада во второй половине ХХ века", 49: "Крах соцлагеря в Европе", 50: "Глобализация и вызовы XXI века"};

let currentActiveExamType = "ege"; 
let currentActiveKIM = null;
let globalLoadedVariants = null; 

// ДВИЖОК НАВИГАЦИИ ПЛАТФОРМЫ
function switchPanel(panelId, btn) {
    document.getElementById('exam-simulation-panel').style.display = 'none';
    document.getElementById('platform-main-nav').style.display = 'grid';
    document.querySelectorAll('.edu-panel').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.edu-tab-btn').forEach(b => b.classList.remove('active'));
    
    const target = document.getElementById(panelId);
    if (target) target.style.display = 'block';
    if (btn) btn.classList.add('active');

    if (panelId === 'ege-panel') currentActiveExamType = "ege";
    if (panelId === 'oge-panel') currentActiveExamType = "oge";
}

function switchTheoryCategory(catId, btn) {
    document.querySelectorAll('.theory-list-panel').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.theory-sub-btn').forEach(b => b.classList.remove('active'));
    const target = document.getElementById(catId);
    if (target) target.style.display = 'block';
    if (btn) btn.classList.add('active');
}

function exitExamToMenu() {
    document.getElementById('exam-simulation-panel').style.display = 'none';
    document.getElementById('platform-main-nav').style.display = 'grid';
    const panelId = currentActiveExamType === "ege" ? "ege-panel" : "oge-panel";
    const btnId = currentActiveExamType === "ege" ? "nav-btn-ege" : "nav-btn-oge";
    document.querySelectorAll('.edu-panel').forEach(p => p.style.display = 'none');
    document.getElementById(panelId).style.display = 'block';
    document.getElementById(btnId).classList.add('active');
}

// РЕНДЕР ОНЛАЙН СДАЧИ КИМ
function startExamKIMSimulation(tier, variantNum) {
    const key = `${currentActiveExamType}_${tier}_${variantNum}`;
    
    const runRender = (dataBlock) => {
        currentActiveKIM = dataBlock;
        document.querySelectorAll('.edu-panel').forEach(p => p.style.display = 'none');
        document.getElementById('platform-main-nav').style.display = 'none';
        document.getElementById('exam-simulation-panel').style.display = 'block';
        document.getElementById('score-result-banner').style.display = 'none';
        document.getElementById('exam-title-display').innerHTML = `<span>${dataBlock.title}</span> <button class='btn-finish-exam' style='background:var(--primary-light); margin-left:15px;' onclick='printCurrentKIM()'><i class='fa-solid fa-print'></i> Печать КИМ</button>`;

        document.getElementById('kim-part1-container').innerHTML = dataBlock.part1.map(q => `
            <div class="task-card-kim" id="kim-card-q${q.id}">
                <div style="font-weight:800; color:var(--primary); margin-bottom:10px;">${q.num}</div>
                <div class="quiz-question">${q.text}</div>
                <input type="text" class="exam-input-kim" id="kim-input-ans-${q.id}" placeholder="Ответ...">
                <div class="criteria-box" id="kim-crit-block-${q.id}"></div>
            </div>
        `).join('');

        document.getElementById('kim-part2-container').innerHTML = dataBlock.part2.map(q => `
            <div class="task-card-kim" id="kim-card-q${q.id}">
                <div style="font-weight:800; color:var(--primary); margin-bottom:10px;">${q.num}</div>
                <div class="quiz-question">${q.text}</div>
                <textarea class="exam-textarea-kim" id="kim-textarea-ans-${q.id}" placeholder="Ваш ответ..."></textarea>
                <div class="criteria-box" id="kim-crit-block-${q.id}"></div>
            </div>
        `).join('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!globalLoadedVariants) {
        fetch('variants.json')
            .then(res => res.json())
            .then(data => {
                globalLoadedVariants = data;
                runRender(data[key] || data[`ege_easy_1`]);
            }).catch(() => alert('Ошибка чтения файла КИМ variants.json'));
    } else {
        runRender(globalLoadedVariants[key] || globalLoadedVariants[`ege_easy_1`]);
    }
}

function finishExamSimulation() {
    if (!currentActiveKIM) return;
    let part1Score = 0;

    currentActiveKIM.part1.forEach(q => {
        const input = document.getElementById(`kim-input-ans-${q.id}`);
        const card = document.getElementById(`kim-card-q${q.id}`);
        const crit = document.getElementById(`kim-crit-block-${q.id}`);
        if (!input || !card || !crit) return;

        if (input.value.trim().toLowerCase().replace(/\s+/g, '') === q.a.toLowerCase()) {
            part1Score++;
            card.className = "task-card-kim correct";
            input.className = "exam-input-kim input-correct";
        } else {
            card.className = "task-card-kim incorrect";
            input.className = "exam-input-kim input-incorrect";
        }
        crit.innerHTML = `<div class="criteria-title">🔑 Ответ КИМ:</div><b>${q.a.toUpperCase()}</b>`;
        crit.style.display = "block";
    });

    currentActiveKIM.part2.forEach(q => {
        const txt = document.getElementById(`kim-textarea-ans-${q.id}`);
        const crit = document.getElementById(`kim-crit-block-${q.id}`);
        if (txt) txt.disabled = true;
        if (crit) { crit.innerHTML = `${q.c}`; crit.style.display = "block"; }
    });

    document.getElementById('user-score-val').innerText = part1Score;
    document.getElementById('score-result-banner').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function printCurrentKIM() { window.print(); }


// ========================================================
// 4. ДВИЖОК ОНЛАЙН-ТРЕНАЖЁРА С РАЗДЕЛЕНИЕМ РОССИЯ / ВСЕМИРКА
// ========================================================
let currentTrainerSection = "russia"; // "russia" или "world"
let currentTrainerDiff = "easy";
let currentTrainerQuestion = null;
let globalLoadedQuestions = null; 

function selectTrainerSection(sect) {
    document.querySelectorAll('#sec-russia-btn, #sec-world-btn').forEach(b => b.classList.remove('selected'));
    currentTrainerSection = sect;
    document.getElementById(`sec-${sect}-btn`).classList.add('selected');
    initTrainerQuiz();
}

function selectTrainerDifficulty(diff, el) {
    currentTrainerDiff = diff;
    document.querySelectorAll('#diff-easy-btn, #diff-medium-btn, #diff-hard-btn').forEach(b => b.classList.remove('selected'));
    if (el) el.classList.add('selected');
    initTrainerQuiz();
}

function initTrainerQuiz() {
    if (!globalLoadedQuestions) {
        fetch('questions.json')
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                globalLoadedQuestions = data;
                renderSingleQuestion();
            })
            .catch(() => {
                // ФОЛБЭК-ЗАГЛУШКА НА СЛУЧАЙ ОТСУТСТВИЯ ЗАПОЛНЕННОГО ФАЙЛА QUESTIONS.JSON
                globalLoadedQuestions = {
                    "russia": {
                        "easy": [{ "q": "В каком году произошло Крещение Руси? (Введи цифрами)", "a": "988" }],
                        "medium": [{ "q": "В каком году было принято Соборное уложение Алексея Михайловича?", "a": "1649" }],
                        "hard": [{ "q": "Назовите кочевой народ, разгромленный Ярославом Мудрым в 1036 году у стен Киева.", "a": "печенеги" }]
                    },
                    "world": {
                        "easy": [{ "q": "В каком веке началась Реформация в Германии под руководством Мартина Лютера? (Римскими цифрами)", "a": "XVI" }],
                        "medium": [{ "q": "В каком году произошла Великая французская буржуазная революция?", "a": "1789" }],
                        "hard": [{ "q": "В каком году был подписан Вестфальский мирный договор, завершивший Тридцатилетнюю войну?", "a": "1648" }]
                    }
                };
                renderSingleQuestion();
            });
    } else {
        renderSingleQuestion();
    }
}

function renderSingleQuestion() {
    if (!globalLoadedQuestions) return;
    
    const pool = globalLoadedQuestions[currentTrainerSection]?.[currentTrainerDiff];
    if (!pool || pool.length === 0) {
        document.getElementById('quiz-question-text').innerText = "Пул вопросов для выбранного подраздела пуст. Допишите вопросы в questions.json!";
        return;
    }
    
    // Выбираем абсолютно случайный вопрос из массива
    const randomIndex = Math.floor(Math.random() * pool.length);
    currentTrainerQuestion = pool[randomIndex];
    
    const metaSectionName = currentTrainerSection === "russia" ? "История России" : "Всеобщая история";
    document.getElementById('quiz-meta-info').innerText = `${metaSectionName} • Уровень: ${currentTrainerDiff.toUpperCase()} • База вопросов: ${pool.length}`;
    document.getElementById('quiz-question-text').innerText = currentTrainerQuestion.q;
    
    const input = document.getElementById('quiz-user-input');
    input.value = ""; input.disabled = false; input.classList.remove('input-correct', 'input-incorrect');
    document.getElementById('main-quiz-card').classList.remove('state-correct', 'state-incorrect');
    document.getElementById('quiz-feedback-box').style.display = 'none';
    document.getElementById('quiz-sub-action').style.display = 'block';
    document.getElementById('quiz-next-action').style.display = 'none';
}

function checkTrainerAnswer() {
    if (!currentTrainerQuestion) return;
    const input = document.getElementById('quiz-user-input');
    const fb = document.getElementById('quiz-feedback-box');
    const val = input.value.trim().toLowerCase().replace(/\s+/g, '');
    if (!val) return;

    input.disabled = true;
    const cleanCorrectAnswer = currentTrainerQuestion.a.toLowerCase().replace(/\s+/g, '');

    if (val === cleanCorrectAnswer) {
        document.getElementById('main-quiz-card').classList.add('state-correct');
        input.classList.add('input-correct');
        fb.className = "quiz-feedback correct"; fb.innerHTML = "✓ Абсолютно верно! Ответ принят системой.";
    } else {
        document.getElementById('main-quiz-card').classList.add('state-incorrect');
        input.classList.add('input-incorrect');
        fb.className = "quiz-feedback incorrect"; fb.innerHTML = `✕ Ошибка. Ответ по критериям КИМ: <u>${currentTrainerQuestion.a.toUpperCase()}</u>`;
    }
    fb.style.display = "block";
    document.getElementById('quiz-sub-action').style.display = 'none';
    document.getElementById('quiz-next-action').style.display = 'block';
}


// 5. ПОДГРУЗКА УЧЕБНИКА (THEORY.JSON)
function openTheoryModal(sect, num) {
    const key = sect + '_' + num;
    fetch('theory.json')
        .then(res => res.json())
        .then(data => {
            const topic = data[key];
            if (topic) {
                document.getElementById('modalTitle').innerHTML = `Параграф №${num}. ${topic.title}`;
                document.getElementById('modalBody').innerHTML = topic.html;
                document.getElementById('theoryModal').style.display = 'flex';
            }
        });
}
function closeTheoryModal() { document.getElementById('theoryModal').style.display = 'none'; }

// СЕТКА ГЕНЕРАЦИИ СТАРТА
function runMainPlatformRender() {
    const generateRowsHTML = (tier, startIdx) => {
        let rows = [];
        for (let i = 0; i < 5; i++) {
            let currentNum = startIdx + i;
            rows.push(`<div class="variant-row" onclick="startExamKIMSimulation('${tier}', ${currentNum})"><span>Вариант №${currentNum}</span><i class="fa-solid fa-play" style="color:var(--success); font-size:12px;"></i></div>`);
        }
        return rows.join('');
    };
    document.getElementById('ege-easy-list').innerHTML = generateRowsHTML('easy', 1);
    document.getElementById('ege-medium-list').innerHTML = generateRowsHTML('medium', 6);
    document.getElementById('ege-hard-list').innerHTML = generateRowsHTML('hard', 11);
    document.getElementById('oge-easy-list').innerHTML = generateRowsHTML('easy', 1);
    document.getElementById('oge-medium-list').innerHTML = generateRowsHTML('medium', 6);
    document.getElementById('oge-hard-list').innerHTML = generateRowsHTML('hard', 11);

    document.getElementById('russia-paragraphs-container').innerHTML = russiaParagraphsList.map((p, i) => `<div class="paragraph-card" onclick="openTheoryModal('rus', ${i+1})"><div class="paragraph-num">${i+1}</div><div class="paragraph-title">${p}</div></div>`).join('');
    document.getElementById('world-paragraphs-container').innerHTML = Object.values(worldShortNamesList).map((p, i) => `<div class="paragraph-card" onclick="openTheoryModal('world', ${i+1})"><div class="paragraph-num">${i+1}</div><div class="paragraph-title">${p}</div></div>`).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    runMainPlatformRender();
    document.getElementById('oge-panel').style.display = 'none';
    initTrainerQuiz();
});
