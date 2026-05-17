// ========================================================
//  ГЛОБАЛЬНЫЙ АВТОНОМНЫЙ ДВИЖОК ПЛАТФОРМЫ (ВЕРСИЯ 6.5)
// ========================================================

window.examVariantsDatabase = {
    "easy": {
        1: {
            title: "Вариант №1 (ЕГЭ База — ФИПИ)",
            part1: [
                { id: 1, num: "Задание 1", text: "Сопоставьте события и годы:\nА) Крещение Руси, Б) Ливонская война, В) Полтава, Г) Снос Берлинской стены.\nГоды: 1) 988, 2) 1242, 3) 1558, 4) 1709, 5) 1914, 6) 1989.", a: "1346" },
                { id: 6, num: "Задание 6", text: "«Повелел князь Владимир опрокинуть идолы...». Какое событие описано? (Два слова без пробела)", a: "крещениеруси" },
                { id: 8, num: "Задание 8", text: "<div style='text-align:center; margin:15px 0;'><img src='images/road_of_life.jpg' style='max-width:300px; border-radius:8px;'><br><b>Магистраль ВОВ</b></div>Заполните пропуск: Магистраль по Ладожскому озеру — Дорога ___________.", a: "жизни" },
                { id: 9, num: "Задание 9", text: "<div class='textbook-map-wrapper'><img class='textbook-map-img' src='images/razin.jpg'></div>Укажите лидера казачьего бунта на схеме:", a: "степанразин" }
            ],
            part2: [{ id: 13, num: "Задание 13", text: "Укажите битву на Калке и век.", c: "🔑 Битва на реке Калке. XIII век." }]
        }
    },
    "medium": { 6: { title: "Вариант №6 (Профильный уровень)", part1: [{ id: 1, num: "Задание 1", text: "Сопоставьте: А) Угра, Б) Медный бунт.\nГоды: 1) 1480, 2) 1649, 3) 1662, 4) 1762.", a: "13" }], part2: [{ id: 18, num: "Задание 18", text: "Причины лидерства Москвы.", c: "🔑 Церковь, география, Калита." }] } },
    "hard": { 11: { title: "Вариант №11 (Олимпиадный уровень)", part1: [{ id: 6, num: "Задание 6", text: "Тип иммунитетных грамот Руси для монастырей?", a: "тарханнаяграмота" }], part2: [{ id: 21, num: "Задание 21", text: "Влияние революции во Франции на Россию.", c: "🔑 Цензура Екатерины II, ссылка Радищева." }] } }
};

for (let v = 2; v <= 5; v++) { window.examVariantsDatabase.easy[v] = { title: `Вариант №${v} (Базовый уровень)`, part1: [...window.examVariantsDatabase.easy[1].part1], part2: [...window.examVariantsDatabase.easy[1].part2] }; }
for (let v = 7; v <= 10; v++) { window.examVariantsDatabase.medium[v] = { title: `Вариант №${v} (Профильный уровень)`, part1: [...window.examVariantsDatabase.medium[6].part1], part2: [...window.examVariantsDatabase.medium[6].part2] }; }
for (let v = 12; v <= 15; v++) { window.examVariantsDatabase.hard[v] = { title: `Вариант №${v} (Олимпиадный уровень)`, part1: [...window.examVariantsDatabase.hard[11].part1], part2: [...window.examVariantsDatabase.hard[11].part2] }; }

const russiaParagraphsList = ["Восточные славяне и их соседи (VI–IX вв.)", "Формирование Древнерусского государства. Первые Рюриковичи", "Владимир Святославич. Крещение Руси", "Расцвет Руси при Ярославе Мудром. «Русская Правда»", "Русь при Владимире Мономахе", "Главные центры раздробленности", "Культура и быт Древней Руси", "Монгольское завоевание и ордынское владычество", "Экспансия с Запада. Александр Невский", "Возвышение Москвы. Куликовская битва", "Создание единого Русского государства при Иване III", "Иван IV Грозный: реформы Избранной рады и Опричнина", "Культура Руси в XIV–XVI вв.", "Смутное время в России: причины, этапы, последствия", "Россия при первых Романовых. Бунташный век", "Церковный раскол в XVII в.", "Экономическое развитие России в XVII в. Освоение Сибири", "Эпоха Петра I: Северная война и создание империи", "Эпоха дворцовых переворотов", "Екатерина II и «просвещённый абсолютизм»", "Правление Павла I. Культура в XVIII в.", "Россия в первой половине XIX в. Александр I", "Движение декабристов: тайные общества и восстание", "Правление Николая I: консерватизм", "Александр II и Великие реформы 1860–1870-х гг.", "Общественные движения во второй половине XIX в.", "Правление Александра III: политика контрреформ", "Культура, наука и искусство России в XIX в.", "Россия на рубеже XIX–XX вв. Николай II", "Россия в Первой мировой войне. Кризис власти", "Гражданская война в России", "Образование СССР. Сталинская модернизация", "Великая Отечественная война (1941–1945 гг.)", "СССР во второй половине ХХ века", "Распад СССР. Создание РФ. Россия на рубеже ХХ–ХХI вв."];
const worldShortNamesList = {1: "Первобытное общество", 2: "Древний Египет", 3: "Древняя Греция", 4: "Древний Рим", 5: "Падение Римской империи", 6: "Великое переселение народов", 7: "Византийская империя", 8: "Возникновение ислама", 9: "Империя Карла Великого", 10: "Средневековый город", 11: "Католическая церковь и Крестовые походы", 12: "Столетняя война", 13: "Священная Римская империя", 14: "Османская экспансия", 15: "Культура Средневековья", 16: "Великие географические открытия", 17: "Эпоха Возрождения", 18: "Реформация. Мартин Лютер", 19: "Религиозные войны во Франции", 20: "Нидерландская революция", 21: "Английская буржуазная революция", 22: "Тридцатилетняя война", 23: "Абсолютизм во Франции", 24: "Эпоха Просвещения", 25: "Война за независимость и США", 26: "Великая французская революция", 27: "Наполеоновские войны", 28: "Промышленный переворот", 29: "Революции 1848 г.", 30: "Объединение Германии и Италии", 31: "Гражданская война в США", 32: "Колониальный раздел Азии", 33: "Китай в XIX в. Опиумные войны", 34: "Модернизация Японии. Реставрация Мэйдзи", 35: "Становление империализма", 36: "Блоки Первой мировой войны", 37: "Ход Первой мировой войны", 38: "Версальско-Вашингтонская система", 39: "Великая депрессия 1929-1933 гг.", 40: "Нацизм в Германии и Фашизм в Италии", 41: "Гражданская война в Испании", 42: "Мюнхенский сговор и начало Второй мировой", 43: "Ход Второй мировой войны", 44: "Конференции «Большой тройки»", 45: "Холодная война: НАТО и ОВД", 46: "Карибский кризис и Корейская война", 47: "Процесс деколонизации", 48: "Страны Запада во второй половине ХХ века", 49: "Крах соцлагеря в Европе", 50: "Глобализация и вызовы XXI века"};

window.trainerPeriodsList = {
    "russia": [
        { key: "rus_ancient", name: "Древняя Русь (IX-XII вв.)" },
        { key: "rus_horde", name: "Раздробленность и Орда (XII-XV вв.)" },
        { key: "rus_tsardom", name: "Русское царство (XVI-XVII вв.)" },
        { key: "rus_empire", name: "Российская империя (XVIII-XIX вв.)" },
        { key: "rus_ussr", name: "СССР и Советская эпоха (XX в.)" },
        { key: "rus_modern", name: "Новейшая история РФ (XXI в.)" }
    ],
    "world": [
        { key: "world_ancient", name: "Древний мир (До V в. н.э.)" },
        { key: "world_middle", name: "Средние века (V-XV вв.)" },
        { key: "world_new", name: "Новое время (XVI-XIX вв.)" },
        { key: "world_recent", name: "Новейшая история (XX-XXI вв.)" }
    ]
};

let currentActiveExamType = "ege"; let currentActiveKIM = null; let currentTrainerSection = "russia"; let currentTrainerPeriod = "rus_ancient"; let currentTrainerDiff = "easy"; let currentTrainerQuestion = null; let globalLoadedQuestions = null;

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

function startExamKIMSimulation(tier, variantNum) {
    const dataBlock = window.examVariantsDatabase[tier]?.[variantNum];
    if (!dataBlock) return;
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
            part1Score++; card.className = "task-card-kim correct"; input.className = "exam-input-kim input-correct";
        } else { card.className = "task-card-kim incorrect"; input.className = "exam-input-kim input-incorrect"; }
        crit.innerHTML = `<div class="criteria-title">🔑 Ответ КИМ:</div><b>${q.a.toUpperCase()}</b>`; crit.style.display = "block";
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

function selectTrainerSection(sect) {
    document.querySelectorAll('#sec-russia-btn, #sec-world-btn').forEach(b => b.classList.remove('selected'));
    currentTrainerSection = sect;
    document.getElementById(`sec-${sect}-btn`).classList.add('selected');
    renderTrainerPeriods();
}

function renderTrainerPeriods() {
    const container = document.getElementById('trainer-themes-container');
    if (!container) return;
    const periods = window.trainerPeriodsList[currentTrainerSection];
    currentTrainerPeriod = periods[0].key;
    container.innerHTML = periods.map((p, idx) => `
        <button class="selector-btn theme-btn ${idx === 0 ? 'selected' : ''}" id="period-btn-${p.key}" onclick="selectTrainerPeriod('${p.key}', this)">
            <span>${p.name}</span><i class="fa-solid fa-chevron-right"></i>
        </button>
    `).join('');
    initTrainerQuiz();
}

function selectTrainerPeriod(periodKey, el) {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('selected'));
    currentTrainerPeriod = periodKey;
    if (el) el.classList.add('selected');
    initTrainerQuiz();
}

function selectTrainerDifficulty(diff, el) {
    currentTrainerDiff = diff;
    document.querySelectorAll('#diff-easy-btn, #diff-medium-btn, #diff-hard-btn').forEach(b => b.classList.remove('selected'));
    if (el) el.classList.add('selected');
    initTrainerQuiz();
}

function initTrainerQuiz() {
    globalLoadedQuestions = {
        "rus_ancient": { "easy": [{ "q": "В каком году произошло летописное призвание варягов на Русь? (Введите цифрами)", "a": "862" }, { "q": "В каком году князь Владимир крестил Древнюю Русь?", "a": "988" }], "medium": [{ "q": "Какой свод законов Древнерусского государства начался при Ярославе Мудром?", "a": "русская правда" }], "hard": [{ "q": "Назовите кочевой народ, разгромленный Ярославом Мудрым в 1036 году у стен Киева.", "a": "печенеги" }] },
        "rus_horde": { "easy": [{ "q": "В каком году произошло Стояние на реке Угре?", "a": "1480" }], "medium": [{ "q": "При каком великом князе был принят первый Судебник 1497 года?", "a": "ивантретий" }], "hard": [{ "q": "В каком году произошла битва на Калке? (Цифрами)", "a": "1223" }] },
        "rus_tsardom": { "easy": [{ "q": "В каком году Иван Грозный венчался на царство?", "a": "1547" }], "medium": [{ "q": "В каком году было принято Соборное уложение Алексея Михайловича?", "a": "1649" }], "hard": [{ "q": "Назовите систему распределения должностей по знатности рода, отмененную в 1682 г.", "a": "местничество" }] },
        "rus_empire": { "easy": [{ "q": "В каком году Александр II отменил крепостное право?", "a": "1861" }], "medium": [{ "q": "Как назывался мирный договор 1721 года, завершивший Северную войну?", "a": "ништадтский" }], "hard": [{ "q": "Назовите фамилию министра финансов, введшего золотой рубль в 1897 г.", "a": "витте" }] },
        "rus_ussr": { "easy": [{ "q": "В каком году был официально образован СССР? (Введите цифрами)", "a": "1922" }], "medium": [{ "q": "Укажите кодовое название советской контрнаступательной операции под Сталинградом 1942 г.", "a": "уран" }], "hard": [{ "q": "Какое название в советской историографии получила наступательная операция 1944 г. в Карелии?", "a": "пятысталинскийудар" }] },
        "rus_modern": { "easy": [{ "q": "В каком году Крым и Севастополь официально вернулись в состав Российской Федерации?", "a": "2014" }], "medium": [{ "q": "В каком году в РФ была проведена масштабная Конституционная реформа?", "a": "2020" }], "hard": [{ "q": "В каком году произошел дефолт технического долга ГКО?", "a": "1998" }] },
        "world_ancient": { "easy": [{ "q": "В каком веке произошло падение Западной Римской империи? (Римской цифрой, например: V)", "a": "V" }], "medium": [{ "q": "Имя древнеегипетского фараона, построившего самую большую пирамиду в Гизе.", "a": "хеопс" }], "hard": [{ "q": "В каком году произошел великий раскол христианской церкви на католическую и православную?", "a": "1054" }] },
        "world_middle": { "easy": [{ "q": "В каком году завершилась Столетняя война?", "a": "1453" }], "medium": [{ "q": "В каком году экспедиция Христофора Колумба впервые открыла побережье Америки?", "a": "1492" }], "hard": [{ "q": "Назовите затяжную серию религиозно-военных походов европейских рыцарей на Ближний Восток.", "a": "крестовыепоходы" }] },
        "world_new": { "easy": [{ "q": "В каком году началась Великая французская буржуазная революция?", "a": "1789" }], "medium": [{ "q": "В каком веке в Англии начался Промышленный переворот? (Римской цифрой)", "a": "XVIII" }], "hard": [{ "q": "В каком году был подписан Вестфальский мир, завершивший Тридцатилетнюю войну?", "a": "1648" }] },
        "world_recent": { "easy": [{ "q": "В каком году началась Первая мировая война? (Введите цифрами)", "a": "1914" }], "medium": [{ "q": "Как называлась мировая экономическая депрессия, начавшаяся с краха биржи США в 1929 году?", "a": "великаядепрессия" }], "hard": [{ "q": "В каком году был создан Североатлантический альянс (НАТО)?", "a": "1949" }] }
    };
    renderSingleQuestion();
}

function renderSingleQuestion() {
    if (!globalLoadedQuestions) return;
    const pool = globalLoadedQuestions[currentTrainerPeriod]?.[currentTrainerDiff];
    const quizBlock = document.getElementById('quiz-block');
    if (!pool || pool.length === 0) {
        document.getElementById('quiz-question-text').innerText = "Для этого периода банк вопросов будет расширен."; return;
    }
    if (quizBlock) quizBlock.style.display = "block";
    currentTrainerQuestion = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById('quiz-meta-info').innerText = `Период: ${currentTrainerPeriod.toUpperCase()} • Уровень: ${currentTrainerDiff.toUpperCase()}`;
    document.getElementById('quiz-question-text').innerText = currentTrainerQuestion.q;
    const input = document.getElementById('quiz-user-input');
    input.value = ""; input.disabled = false; input.classList.remove('input-correct', 'input-incorrect');
    document.getElementById('main-quiz-card').classList.remove('state-correct', 'state-incorrect');
    document.getElementById('quiz-feedback-box').style.display = 'none';
    document.getElementById('quiz-sub-action').style.display = 'block'; document.getElementById('quiz-next-action').style.display = 'none';
}

function checkTrainerAnswer() {
    if (!currentTrainerQuestion) return;
    const input = document.getElementById('quiz-user-input'); const fb = document.getElementById('quiz-feedback-box');
    const val = input.value.trim().toLowerCase().replace(/\s+/g, ''); if (!val) return;
    input.disabled = true;
    if (val === currentTrainerQuestion.a.toLowerCase().replace(/\s+/g, '')) {
        document.getElementById('main-quiz-card').classList.add('state-correct'); input.classList.add('input-correct');
        fb.className = "quiz-feedback correct"; fb.innerHTML = "✓ Абсолютно верно!";
    } else {
        document.getElementById('main-quiz-card').classList.add('state-incorrect'); input.classList.add('input-incorrect');
        fb.className = "quiz-feedback incorrect"; fb.innerHTML = `✕ Ошибка. Ответ по КИМ: <u>${currentTrainerQuestion.a.toUpperCase()}</u>`;
    }
    fb.style.display = "block"; document.getElementById('quiz-sub-action').style.display = 'none'; document.getElementById('quiz-next-action').style.display = 'block';
}

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
    renderTrainerPeriods();
});
