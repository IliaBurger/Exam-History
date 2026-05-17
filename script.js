// АСИНХРОННЫЙ ДВИЖОК ПОДГРУЗКИ ТЕОРИИ ИЗ JSON
function openTheoryModal(sect, num) {
    const key = sect + '_' + num;
    
    fetch('theory.json')
        .then(response => {
            if (!response.ok) throw new Error('Ошибка загрузки базы данных теории');
            return response.json();
        })
        .then(data => {
            const topic = data[key];
            const mTitle = document.getElementById('modalTitle');
            const mBody = document.getElementById('modalBody');
            const mOverlay = document.getElementById('theoryModal');

            if (topic && mTitle && mBody && mOverlay) {
                mTitle.innerHTML = `Параграф №${num}. ${topic.title}`;
                mBody.innerHTML = topic.html;
                mOverlay.style.display = 'flex';
            } else {
                // Если темы еще нет в JSON, создаем адаптивную заглушку-карточку
                mTitle.innerHTML = `Параграф №${num}`;
                mBody.innerHTML = `<div style="background:#f8fafc; border-left:4px solid var(--primary-light); padding:20px; border-radius:8px;"><h4 style="margin:0 0 10px 0; color:var(--primary); font-weight:800;">📚 Конспект ФИПИ к теме №${num}</h4><p>Полный текст параграфа кодификатора находится на стадии публикации.</p></div>`;
                mOverlay.style.display = 'flex';
            }
        })
        .catch(err => {
            console.error(err);
            alert('Не удалось загрузить лекцию. Проверьте файл theory.json в корне репозитория.');
        });
}

function closeTheoryModal() {
    const mOverlay = document.getElementById('theoryModal');
    if (mOverlay) mOverlay.style.display = 'none';
}

// КОНСТАНТЫ И БАЗЫ ДАННЫХ ПЛАТФОРМЫ
const russiaParagraphsList = ["Восточные славяне и их соседи (VI–IX вв.)", "Формирование Древнерусского государства. Первые Рюриковичи", "Владимир Святославич. Крещение Руси", "Расцвет Руси при Ярославе Мудром. «Русская Правда»", "Русь при Владимире Мономахе", "Главные центры раздробленности", "Культура и быт Древней Руси", "Монгольское завоевание и ордынское владычество", "Экспансия с Запада. Александр Невский", "Возвышение Москвы. Куликовская битва", "Создание единого Русского государства при Иване III", "Иван IV Грозный: реформы Избранной рады и Опричнина", "Культура Руси в XIV–XVI вв.", "Смутное время в России: причины, этапы, последствия", "Россия при первых Романовых. Бунташный век", "Церковный раскол в XVII в.", "Экономическое развитие России в XVII в. Освоение Сибири", "Эпоха Петра I: Северная война и создание империи", "Эпоха дворцовых переворотов", "Екатерина II и «просвещённый абсолютизм»", "Правление Павла I. Культура в XVIII в.", "Россия в первой половине XIX в. Александр I", "Движение декабристов: тайные общества и восстание", "Правление Николая I: консерватизм", "Александр II и Великие реформы 1860–1870-х гг.", "Общественные движения во второй половине XIX в.", "Правление Александра III: политика контрреформ", "Культура, наука и искусство России в XIX в.", "Россия на рубеже XIX–XX вв. Николай II", "Россия в Первой мировой войне. Кризис власти", "Гражданская война в России", "Образование СССР. Сталинская модернизация", "Великая Отечественная война (1941–1945 гг.)", "СССР во второй половине ХХ века", "Распад СССР. Создание РФ. Россия на рубеже ХХ–ХХI вв."];
const worldShortNamesList = {1: "Первобытное общество", 2: "Древний Египет", 3: "Древняя Греция", 4: "Древний Рим", 5: "Падение Римской империи", 6: "Великое переселение народов", 7: "Византийская империя", 8: "Возникновение ислама", 9: "Империя Карла Великого", 10: "Средневековый город", 11: "Католическая церковь и Крестовые походы", 12: "Столетняя война", 13: "Священная Римская empire", 14: "Османская экспансия", 15: "Культура Средневековья", 16: "Великие географические открытия", 17: "Эпоха Возрождения", 18: "Реформация. Мартин Лютер", 19: "Религиозные войны во Франции", 20: "Нидерландская революция", 21: "Английская буржуазная революция", 22: "Тридцатилетняя война", 23: "Абсолютизм во Франции", 24: "Эпоха Просвещения", 25: "Война за независимость и США", 26: "Великая французская революция", 27: "Наполеоновские войны", 28: "Промышленный переворот", 29: "Революции 1848 г.", 30: "Объединение Германии и Италии", 31: "Гражданская война в США", 32: "Колониальный раздел Азии", 33: "Китай в XIX в. Опиумные войны", 34: "Модернизация Японии. Реставрация Мэйдзи", 35: "Становление империализма", 36: "Блоки Первой мировой войны", 37: "Ход Первой мировой войны", 38: "Версальско-Вашингтонская система", 39: "Великая депрессия 1929-1933 гг.", 40: "Нацизм в Германии и Фашизм в Италии", 41: "Гражданская война в Испании", 42: "Мюнхенский сговор и начало Второй мировой", 43: "Ход Второй мировой войны", 44: "Конференции «Большой тройки»", 45: "Холодная война: НАТО и ОВД", 46: "Карибский кризис и Корейская война", 47: "Процесс деколонизации", 48: "Страны Запада во второй половине ХХ века", 49: "Kрах соцлагеря в Европе", 50: "Глобализация и вызовы XXI века"};

window.trainerThemesList = {
    rus: [{ key: "rus_early", name: "Древняя Русь (IX-XII вв.)" }, { key: "rus_moscow", name: "Возвышение Москвы (XIII-XVII вв.)" }],
    world: [{ key: "world_ancient", name: "Античность и Средневековье" }, { key: "world_modern", name: "Новое и Новейшее время" }]
};

window.trainerQuestionsDatabase = {
    rus_early: {
        easy: [{ q: "В каком году произошло летописное призвание варягов на Русь? (Введите цифрами)", a: "862" }, { q: "В каком году князь Владимир крестил Древнюю Русь?", a: "988" }],
        medium: [{ q: "Какой свод законов Древнерусского государства начал создаваться при Ярославе Мудром?", a: "русская правда" }, { q: "Какая киевская княгиня провела налоговую реформу, установив уроки и погосты?", a: "ольга" }],
        hard: [{ q: "Назовите кочевой народ, разгромленный Ярославом Мудрым в 1036 году под стенами Киева.", a: "печенеги" }]
    },
    rus_moscow: {
        easy: [{ q: "В каком году произошло стояние на реке Угре?", a: "1480" }], medium: [{ q: "При каком великом князе был принят первый общерусский Судебник 1497 года?", a: "иван третий" }], hard: [{ q: "Назовите кодекс законов XVII века, юридически оформивший крепостное право.", a: "соборное уложение" }]
    }
};

window.officialDemoKIM2026 = {
    title: "Экзаменационный КИМ",
    part1: [
        { id: 1, num: "Задание 1 (Хронология)", text: "Установите соответствие между событиями и годами:\nА) вхождение Крыма в состав РФ\nБ) включение Пскова в состав Русского государства\nВ) вхождение Финляндии в состав Российской империи\nГ) освобождение Севастополя\nГоды: 1) 1485; 2) 1510; 3) 1809; 4) 1942; 5) 1944; 6) 2014.", a: "6235" },
        { id: 2, num: "Задание 2 (Последовательность)", text: "Расположите в хронологической последовательности исторические события:\n1) Открытие Васко да Гамой морского пути в Индию\n2) Взятие крепости Измаил А.В. Суворовым\n3) Освобождение Москвы от поляков ополчением Минина и Пожарского", a: "132" },
        { id: 3, num: "Задание 3 (Процессы)", text: "Установите соответствие между процессами и фактами:\nА) Формирование Древнерусского государства\nБ) Реформы Избранной рады\nВ) Новая экономическая политика (нэг)\nГ) Внутренняя политика Николая I\nФакты: 1) Ограничение местничества; 2) Денежная реформа Сокольникова; 3) Объединение Киева и Новгорода; 4) Издание Жалованной грамоты дворянству; 5) Принятие Новоторгового устава; 6) Кодификация законодательства Российской империи.", a: "3126" },
        { id: 4, num: "Задание 4 (Таблица)", text: "Заполните пропуски в хронологической таблице ФИПИ. Соответствие: Нижний Новгород, река Шелонь, Архангельская губерния.\nВведите строку правильной комбинации цифр (6 цифр подряд)", a: "361254" },
        { id: 5, num: "Задание 5 (Персоналии)", text: "Установите соответствие между событиями и участниками:\nА) Ледовое побоище\nБ) Полтавская битва\nВ) Разгром Хазарского каганата\nГ) Московская битва (1941)\nУчастники: 1) Святослав Игоревич; 2) Александр Невский; 3) И.В. Панфилов; 4) Петр I; 5) М.И. Кутузов; 6) Алексей Михайлович.", a: "2413" },
        { id: 6, num: "Задание 6 (Источник)", text: "Прочтите отрывок из манифеста: «Объявляем всем верным подданным... Крепостное право на крестьян отменяется навсегда...».\nКакому государю принадлежит данный документ?", a: "александр второй" },
        { id: 7, num: "Задание 7 (Культура)", text: "Установите соответствие между памятниками культуры и их характеристиками:\nА) Слово о полку Игореве\nБ) Храм Покрова на Нерли\nВ) Роман 'Тихий Дон'\nГ) Картина 'Боярыня Морозова'\nХарактеристики: 1) Автор получил Нобелевскую премию; 2) Посвящено походу против половцев; 3) Шедевр владимиро-суздальского зодчества (XII в.); 4) Посвящено событиям церковного раскола; 5) Создано в стиле барокко.", a: "2314" },
        { id: 8, num: "Задание 8 (Иллюстрация ВОВ)", text: "Заполните пропуск в предложении: 'Всеобщую известность в ходе Сталинградской битвы получил дом, который обороняла группа бойцов под руководством старшего сержанта Я.Ф. __________.' (В ответе укажите только фамилию)", a: "павлова" },
        { id: 9, num: "Задание 9 (КАРТА)", text: "<div class='textbook-map-wrapper'><img class='textbook-map-img' src='https://upload.wikimedia.org/wikipedia/commons/e/e2/Razin_map.jpg'><div class='textbook-map-caption'>Карта КИМ к заданиям 9–12</div></div>Рассмотрите схему восстания XVII века. Укажите имя предводителя этого движения.", a: "степанразин" },
        { id: 10, num: "Задание 10 (КАРТА — Город)", text: "Укажите название города на Волге под цифрой '2', затяжная осада которого стала кульминацией восстания (бывший Симбирск).", a: "симбирск" },
        { id: 11, num: "Задание 11 (КАРТА — Река)", text: "Укажите название реки, в нижнем течении которой находился главный опорный пункт восставших — Астрахань.", a: "волга" },
        { id: 12, num: "Задание 12 (КАРТА — Суждения)", text: "Какие суждения по карте верны?\n5) Царские войска нанесли поражение восставшим под Симбирском.\n6) Правителем России в этот период был Алексей Михайлович.\n(Введите цифры в порядке возрастания, без пробелов)", a: "56" }
    ],
    part2: [
        { id: 13, num: "Задание 13", text: "Из летописи: 'В лето 6731. Придоша языци незнаеми... на землю Половецкую...'. Укажите название битвы, о которой идет речь, век и имя киевского князя.", c: "🔑 <b>Критерии ФИПИ (Задание 13):</b><br>1) Битва на реке Калке.<br>2) Век: XIII век (1223 г.).<br>3) Киевский князь: Мстислав Романович." },
        { id: 18, num: "Задание 18", text: "Назовите три последствия издания Петром I 'Устава о наследии престола' 1722 года в политической жизни России.", c: "🔑 <b>Критерии ФИПИ (Задание 18):</b><br>1) Нарушение traditional престолонаследия. 2) Начало эпохи Дворцовых переворотов. 3) Колоссальный рост влияния гвардии." }
    ]
};

// ЛОГИКА ОТРИСОВКИ СТРАНИЦЫ
function runMainPlatformRender() {
    const rusContainer = document.getElementById('russia-paragraphs-container');
    const worldContainer = document.getElementById('world-paragraphs-container');
    if (!rusContainer || !worldContainer) return;

    rusContainer.innerHTML = russiaParagraphsList.map((p, i) => `
        <div class="paragraph-card" onclick="openTheoryModal('rus', ${i+1})">
            <div class="paragraph-num">${i+1}</div><div class="paragraph-title">${p}</div>
        </div>
    `).join('');

    const worldArray = Object.values(worldShortNamesList);
    worldContainer.innerHTML = worldArray.map((p, i) => `
        <div class="paragraph-card" onclick="openTheoryModal('world', ${i+1})">
            <div class="paragraph-num">${i+1}</div><div class="paragraph-title">${p}</div>
        </div>
    `).join('');

    const generateFiveRows = (prefix) => [1,2,3,4,5].map(i => `
        <div class="variant-row" onclick="startExamKIMSimulation('${prefix} ${i}')">
            <span>Вариант №${i} (${prefix})</span>
            <i class="fa-solid fa-play" style="color:var(--success); font-size:12px;"></i>
        </div>
    `).join('');

    const lists = {
        'ege-easy': 'ЕГЭ База', 'ege-medium': 'ЕГЭ Профи', 'ege-hard': 'ЕГЭ Эксперт',
        'oge-easy': 'ОГЭ База', 'oge-medium': 'ОГЭ Профи', 'oge-hard': 'ОГЭ Эксперт'
    };

    Object.keys(lists).forEach(id => {
        const el = document.getElementById(`${id}-list`); if (el) el.innerHTML = generateFiveRows(lists[id]);
    });
}

// ДВИЖОК ТРЕНАЖЁРА
let trainerSection = null; let trainerTheme = null; let trainerDiff = null; let trainerPool = []; let trainerIdx = 0; let trainerAns = "";
function selectTrainerSection(sec) { trainerSection = sec; document.querySelectorAll('#sec-rus-btn, #sec-world-btn').forEach(b => b.classList.remove('selected')); document.getElementById(`sec-${sec}-btn`).classList.add('selected'); document.getElementById('quiz-block').style.display = 'none'; trainerTheme = null; document.getElementById('trainer-themes-container').innerHTML = trainerThemesList[sec].map(t => `<button class="selector-btn theme-btn" id="theme-btn-${t.key}" onclick="selectTrainerTheme('${t.key}', this)"><span>${t.name}</span><i class="fa-solid fa-chevron-right"></i></button>`).join(''); }
function selectTrainerTheme(theme, el) { trainerTheme = theme; document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('selected')); el.classList.add('selected'); initTrainerQuiz(); }
function selectTrainerDifficulty(diff, el) { trainerDiff = diff; document.querySelectorAll('#diff-easy-btn, #diff-medium-btn, #diff-hard-btn').forEach(b => b.classList.remove('selected')); el.classList.add('selected'); initTrainerQuiz(); }
function initTrainerQuiz() { if(!trainerTheme || !trainerDiff) return; const src = trainerQuestionsDatabase[trainerTheme]?.[trainerDiff] || [{q:"В каком веке произошло Ледовое побоище? (Ответ цифрой)", a:"13"}]; trainerPool = [...src].sort(() => Math.random() - 0.5); trainerIdx = 0; generateTrainerQuestion(); }
function generateTrainerQuestion() { if(trainerIdx >= trainerPool.length) trainerIdx = 0; const q = trainerPool[trainerIdx]; trainerAns = q.a; document.getElementById('quiz-meta-info').innerText = `Сложность: ${trainerDiff.toUpperCase()}`; document.getElementById('quiz-question-text').innerText = q.q; const input = document.getElementById('quiz-user-input'); input.value = ""; input.disabled = false; document.getElementById('main-quiz-card').classList.remove('state-correct', 'state-incorrect'); input.classList.remove('input-correct', 'input-incorrect'); document.getElementById('quiz-feedback-box').style.display = 'none'; document.getElementById('quiz-sub-action').style.display = 'block'; document.getElementById('quiz-next-action').style.display = 'none'; document.getElementById('quiz-block').style.display = 'block'; }
function checkTrainerAnswer() { const input = document.getElementById('quiz-user-input'); const fb = document.getElementById('quiz-feedback-box'); const val = input.value.trim().toLowerCase(); if(!val) return; input.disabled = true; if(val === trainerAns.toLowerCase()) { document.getElementById('main-quiz-card').classList.add('state-correct'); input.classList.add('input-correct'); fb.className = "quiz-feedback correct"; fb.innerHTML = "✓ Абсолютно верно!"; } else { document.getElementById('main-quiz-card').classList.add('state-incorrect'); input.classList.add('input-incorrect'); fb.className = "quiz-feedback incorrect"; fb.innerHTML = `✕ Ошибка. Ответ по КИМ: <u>${trainerAns.toUpperCase()}</u>`; } document.getElementById('quiz-sub-action').style.display = 'none'; document.getElementById('quiz-next-action').style.display = 'block'; trainerIdx++; }

// СИМУЛЯТОР КИМ
let countdownIntervalKIM = null;
function startExamKIMSimulation(vTitle) {
    document.querySelectorAll('.edu-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('platform-main-nav').style.display = 'none'; document.getElementById('exam-simulation-panel').style.display = 'block';
    document.getElementById('score-result-banner').style.display = 'none'; document.querySelector('.exam-sticky-bar').style.display = 'flex';
    document.getElementById('exam-title-display').innerText = `КИМ: ${vTitle}`;

    document.getElementById('kim-part1-container').innerHTML = window.officialDemoKIM2026.part1.map(q => `
        <div class="task-card-kim" id="kim-card-q${q.id}">
            <div style="font-weight:800; color:var(--primary); margin-bottom:10px;">${q.num}</div><div class="quiz-question">${q.text}</div>
            <input type="text" class="exam-input-kim" id="kim-input-ans-${q.id}" placeholder="Ответ...">
            <div class="criteria-box" id="kim-crit-block-${q.id}"></div>
        </div>
    `).join('');

    document.getElementById('kim-part2-container').innerHTML = window.officialDemoKIM2026.part2.map(q => `
        <div class="task-card-kim" id="kim-card-q${q.id}">
            <div style="font-weight:800; color:var(--primary); margin-bottom:10px;">${q.num}</div><div class="quiz-question">${q.text}</div>
            <textarea class="exam-textarea-kim" id="kim-textarea-ans-${q.id}" placeholder="Ваш ответ..."></textarea>
            <div class="criteria-box" id="kim-crit-block-${q.id}"></div>
        </div>
    `).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function finishExamSimulation() {
    clearInterval(countdownIntervalKIM); let part1Score = 0;
    window.officialDemoKIM2026.part1.forEach(q => {
        const input = document.getElementById(`kim-input-ans-${q.id}`); const card = document.getElementById(`kim-card-q${q.id}`); const crit = document.getElementById(`kim-crit-block-${q.id}`);
        if(input.value.trim().toLowerCase().replace(/\s+/g, '') === q.a.toLowerCase()) {
            part1Score++; card.className = "task-card-kim correct"; input.className = "exam-input-kim input-correct";
        } else { card.className = "task-card-kim incorrect"; input.className = "exam-input-kim input-incorrect"; }
        let bit = `<div class="criteria-title">🔑 Ответ КИМ:</div><b>${q.a.toUpperCase()}</b>`; if (crit) crit.innerHTML = bit; crit.style.display = "block";
    });
    window.officialDemoKIM2026.part2.forEach(q => {
        document.getElementById(`kim-textarea-ans-${q.id}`).disabled = true;
        document.getElementById(`kim-crit-block-${q.id}`).innerHTML = `${q.c}`; document.getElementById(`kim-crit-block-${q.id}`).style.display = "block";
    });
    document.getElementById('user-score-val').innerText = part1Score; document.getElementById('score-result-banner').style.display = 'block'; document.querySelector('.exam-sticky-bar').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = function() { runMainPlatformRender(); };
setTimeout(runMainPlatformRender, 400);

function switchPanel(panelId, btn) { document.getElementById('exam-simulation-panel').style.display = 'none'; document.getElementById('platform-main-nav').style.display = 'grid'; document.querySelectorAll('.edu-panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.edu-tab-btn').forEach(b => b.classList.remove('active')); document.getElementById(panelId).classList.add('active'); if (btn) btn.classList.add('active'); }
function switchTheoryCategory(catId, btn) { document.querySelectorAll('.theory-list-panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.theory-sub-btn').forEach(b => b.classList.remove('active')); document.getElementById(catId).classList.add('active'); btn.classList.add('active'); }
