// ========================================================
//  ГЛОБАЛЬНЫЙ ДВИЖОК ПЛАТФОРМЫ АКАДЕМИЯ ИСТОРИИ (V15.0)
// ========================================================

// 1. КОНСТАНТЫ И МАССИВЫ ДЛЯ УЧЕБНИКА И НАВИГАЦИИ
const russiaParagraphsList = [
    "Восточные славяне и их соседи (VI–IX вв.)", 
    "Формирование Древнерусского государства. Первые Рюриковичи", 
    "Владимир Святославич. Крещение Руси", 
    "Расцвет Руси при Ярославе Мудром. «Русская Правда»", 
    "Русь при Владимире Мономахе", 
    "Главные центры раздробленности", 
    "Культура и быт Древней Руси", 
    "Монгольское завоевание и ордынское владычество", 
    "Экспансия с Запада. Александр Невский", 
    "Возвышение Москвы. Куликовская битва", 
    "Создание единого Русского государства при Иване III", 
    "Иван IV Грозный: реформы Избранной рады и Опричнина", 
    "Культура Руси в XIV–XVI вв.", 
    "Смутное время в России: причины, этапы, последствия", 
    "Россия при первых Романовых. Бунташный век", 
    "Церковный раскол в XVII в.", 
    "Экономическое развитие России в XVII в. Освоение Сибири", 
    "Эпоха Петра I: Северная война и создание империи", 
    "Эпоха дворцовых переворотов", 
    "Екатерина II и «просвещённый абсолютизм»", 
    "Правление Павла I. Культура в XVIII в.", 
    "Россия в первой половине XIX в. Александр I", 
    "Движение декабристов: тайные общества и восстание", 
    "Правление Николая I: консерватизм", 
    "Александр II и Великие реформы 1860–1870-х гг.", 
    "Общественные движения во второй половине XIX в.", 
    "Правление Александра III: политика контрреформ", 
    "Культура, наука и искусство России в XIX в.", 
    "Россия на рубеже XIX–XX вв. Николай II", 
    "Россия в Первой мировой войне. Кризис власти", 
    "Гражданская война в России", 
    "Образование СССР. Сталинская модернизация", 
    "Великая Отечественная война (1941–1945 гг.)", 
    "СССР во второй половине ХХ века", 
    "Распад СССР. Создание РФ. Россия на рубеже ХХ–ХХI вв."
];

const worldShortNamesList = {
    1: "Первобытное общество", 2: "Древний Египет", 3: "Древняя Греция", 4: "Древний Рим", 
    5: "Падение Римской империи", 6: "Великое переселение народов", 7: "Византийская империя", 
    8: "Возникновение ислама", 9: "Империя Карла Великого", 10: "Средневековый город", 
    11: "Католическая церковь и Крестовые походы", 12: "Столетняя война", 13: "Священная Римская империя", 
    14: "Османская экспансия", 15: "Культура Средневековья", 16: "Великие географические открытия", 
    17: "Эпоха Возрождения", 18: "Реформация. Мартин Лютер", 19: "Религиозные войны во Франции", 
    20: "Нидерландская революция", 21: "Английская буржуазная революция", 22: "Тридцатилетняя война", 
    23: "Абсолютизм во Франции", 24: "Эпоха Просвещения", 25: "Война за независимость и США", 
    26: "Великая французская революция", 27: "Наполеоновские войны", 28: "Промышленный переворот", 
    29: "Революции 1848 г.", 30: "Объединение Германии и Италии", 31: "Гражданская война в США", 
    32: "Колониальный раздел Азии", 33: "Китай в XIX в. Опиумные войны", 34: "Модернизация Японии. Реставрация Мэйдзи", 
    35: "Становление империализма", 36: "Блоки Первой мировой войны", 37: "Ход Первой мировой войны", 
    38: "Версальско-Вашингтонская система", 39: "Великая депрессия 1929-1933 гг.", 40: "Нацизм в Германии и Фашизм в Италии", 
    41: "Гражданская война в Испании", 42: "Мюнхенский сговор и начало Второй мировой", 43: "Ход Второй мировой войны", 
    44: "Конференции «Большой тройки»", 45: "Холодная война: НАТО и ОВД", 46: "Карибский кризис и Корейская война", 
    47: "Процесс деколонизации", 48: "Страны Запада во второй половине ХХ века", 49: "Крах соцлагеря в Европе", 
    50: "Глобализация и вызовы XXI века"
};

window.trainerPeriodsList = {
    "russia": [
        { key: "rus_ancient", name: "Древняя Русь (IX-XII вв.)" },
        { key: "rus_horde", name: "Раздробленность и Русь (1136-1510 гг.)" },
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

// 2. БАЗА ДАННЫХ ВАРИАНТОВ КИМ ЕГЭ
window.examVariantsDatabase = {
    "easy": {
        1: {
            title: "Вариант №1 (ЕГЭ База — Полный КИМ ФИПИ 2026)",
            part1: [
                { 
                    id: 1, 
                    type: "matching",
                    num: "Задание 1", 
                    text: "Установите соответствие между событиями и годами: к каждой позиции первого столбца подберите соответствующую позицию из второго столбца.",
                    col1_title: "СОБЫТИЯ",
                    col2_title: "ГОДЫ",
                    col1: ["А) вхождение Крыма в состав Российской Федерации", "Б) включение Псковской земли в состав Русского государства", "В) вхождение Финляндии в состав Российской империи", "Г) освобождение Севастополя от немецко-фашистских захватчиков"],
                    col2: ["1) 1485 г.", "2) 1510 г.", "3) 1809 г.", "4) 1942 г.", "5) 1944 г.", "6) 2014 г."],
                    a: "6235" 
                },
                { 
                    id: 2, 
                    type: "standard",
                    num: "Задание 2", 
                    text: "Расположите в хронологической последовательности исторические события. Запишите цифры, которыми обозначены исторические события, в правильной последовательности в поле ответа:\n1) открытие Васко да Гамой морского пути в Индию\n2) взятие Измаила русскими войсками под командованием А.В. Суворова\n3) освобождение Москвы от польско-литовских интервентов", 
                    a: "132" 
                },
                { 
                    id: 3, 
                    type: "matching",
                    num: "Задание 3", 
                    text: "Установите соответствие между процессами (явлениями, событиями) и фактами, относящимися к этим процессам (явлениями, событиям): к каждой позиции первого столбца подберите соответствующую позицию из второго столбца.",
                    col1_title: "ПРОЦЕССЫ (ЯВЛЕНИЯ, СОБЫТИЯ)",
                    col2_title: "ФАКТЫ",
                    col1: ["А) формирование Древнерусского государства", "Б) реформы Избранной рады", "В) проведение большевиками новой экономической политики (нэп)", "Г) внутренняя политика Николая I"],
                    col2: ["1) ограничение местничества на время военных действий", "2) финансовая реформа Г.Я. Сокольникова", "3) объединение Киева и Новгорода под властью одного князя", "4) издание жалованной грамоты дворянству", "5) издание Новоторгового устава", "6) издание Свода законов Российской империи"],
                    a: "3126" 
                },
                { 
                    id: 4, 
                    type: "table",
                    num: "Задание 4", 
                    text: "Заполните пустые ячейки таблицы, используя приведённый ниже список пропущенных элементов: для каждого пропуска, обозначенного буквой, выберите номер нужного элемента.",
                    headers: ["Географический объект", "Событие (явление, процесс)", "Время, когда произошло событие"],
                    rows: [
                        ["Донецк", "(А)", "2020-е гг."],
                        ["(Б)", "Строительство Транссибирской магистрали", "(В)"],
                        ["Деревня Андрусово", "Подписание перемирия между Россией и Речью Посполитой", "(Г)"],
                        ["(Д)", "(Е)", "1910-е гг."]
                    ],
                    list: "<b>Пропущенные элементы:</b>\n1) Петроград, 2) Севастополь, 3) 1890-е гг., 4) Владивосток, 5) 1660-е гг., 6) ввод в эксплуатацию первой в мире АЭС, 7) деятельность Всероссийского Учредительного собрания, 8) 1790-е гг., 9) вхождение в состав Российской Федерации.",
                    a: "943517" 
                },
                { 
                    id: 5, 
                    type: "matching",
                    num: "Задание 5", 
                    text: "Установите соответствие между событиями (явлениями, процессами) и участниками этих событий: к каждой позиции первого столбца подберите соответствующую позицию из второго столбца.",
                    col1_title: "СОБЫТИЯ (ЯВЛЕНИЯ, ПРОЦЕССЫ)",
                    col2_title: "УЧАСТНИКИ",
                    col1: ["А) деятельность Посольского приказа в период правления Алексея Михайловича", "Б) Специальная военная операция (СВО)", "В) деятельность Верховной распорядительной комиссии", "Г) битва за Берлин"],
                    col2: ["1) А.М. Курбский", "2) М.Т. Лорис-Меликов", "3) З.А. Космодемьянская", "4) А.С. Матвеев", "5) М.В. Кантария", "6) Б.Б. Цыдыпов."],
                    a: "4625" 
                },
                { 
                    id: 6, 
                    type: "standard",
                    num: "Задание 6", 
                    text: "Прочтите отрывок из записок исторического деятеля:\n«Верховный Совет торжествовал победу. Власть перемещалась из рук государя в руки 12 неограниченных правителей. Деспотизм заменялся олигархией. Дворянство не могло, не хотело и не должно было согласиться на это... По заранее обдуманному плану императрица пригласила членов Верховного Совета к обеду... Обернувшись к Долгорукову, государыня сказала ему: \"Василий Лукич, ты меня, стало быть, обманул?\" и разорвала бумагу...».\n\nИспользуя отрывок и знания по истории, выберите в приведённом списке верные суждения:\n1) Упоминаемая в отрывке петиция дворянства содержала требование роспуска Сената.\n2) По свидетельству автора, победа верховников означала установление в России олигархического правления.\n3) Государственный орган, упоминаемый в первом абзаце, был создан в годы правления Петра I.\n4) Императрица, имя которой дважды пропущено в тексте, была дочерью брата первого российского императора.\n5) Современниками описываемых в отрывке событий были Э.И. Бирон и А.И. Остерман.\n6) Из слов автора следует, что в борьбе с верховниками сторонники самодержавия соединились с конституционалистами.", 
                    a: "2456" 
                },
                { 
                    id: 7, 
                    type: "matching",
                    num: "Задание 7", 
                    text: "Установите соответствие между памятниками культуры и их краткими характеристиками: к каждой позиции первого столбца подберите соответствующую позицию из второго столбца.",
                    col1_title: "ПАМЯТНИКИ КУЛЬТУРЫ",
                    col2_title: "ХАРАКТЕРИСТИКИ",
                    col1: ["А) «История о великом князе Московском»", "Б) роман «Братья Карамазовы»", "В) «Слово о законе и благодати»", "Г) трилогия «Хождение по мукам»"],
                    col2: ["1) Произведение посвящено Отечественной войне 1812 г.", "2) Автор — митрополит Иларион.", "3) Произведение создано в период Смутного времени.", "4) Автор — А.Н. Толстой.", "5) Автор — Ф.М. Достоевский.", "6) Произведение создано в XVI в."],
                    a: "6524" 
                },
                { 
                    id: 8, 
                    type: "standard",
                    num: "Задание 8", 
                    text: "<div style='text-align:center; margin:15px 0;'><img src='images/road_of_life.jpg' style='max-width:380px; width:100%; border-radius:6px; box-shadow:var(--shadow-md);'><br></div>Заполните пропуск в предложении:\n«Этот номер фронтовой газеты «Советский боец», сообщающий о взятии Варшавы, вышел в тысяча девятьсот ______________ году». (Ответ запишите словом в нижнем регистре)", 
                    a: "сорокпятом" 
                },
                { 
                    id: 9, 
                    type: "standard",
                    num: "Задание 9", 
                    text: "<div class='textbook-map-wrapper'><img class='textbook-map-img' src='images/razin.jpg'></div>Рассмотрите схему и выполните задание. Укажите правителя России в период, когда произошли события, обозначенные на схеме стрелками:", 
                    a: "алексеймихайлович" 
                },
                { id: 10, type: "standard", num: "Задание 10", text: "Укажите название города, обозначенного на схеме цифрой «2», в период, когда произошли отраженные события:", a: "симбирск" },
                { id: 11, type: "standard", num: "Задание 11", text: "Прочтите текст о событиях и укажите название города, дважды пропущенное в тексте:\n«Восставшие окружили Царицын, но город не сдавался... В Царицыне состоялся военный совет, на котором решили идти на юг, чтобы захватить стоящий в дельте Волги торговый город — ___________. Миновав Чёрный Яр, восставшие вскоре подошли к ___________ и при поддержке бедноты захватили город».", a: "астрахань" },
                { id: 12, type: "standard", num: "Задание 12", text: "Какие суждения, относящиеся к схеме, являются верными?\n1) Флажком на схеме обозначено место казни предводителя восстания.\n2) На схеме отмечена река, переименованная сразу после подавления восстания.\n3) В подавлении восстания принимал участие А.В. Суворов.\n4) Предводитель восстания называл себя воеводой царя Дмитрия Ивановича.\n5) Саратов находился на территории, охваченной восстанием.\n6) В городе под цифрой «1» (Нижний Новгород) было сформировано Второе народное ополчение.", a: "56" }
            ],
            part2: [
                { id: 13, num: "Задание 13", text: "Прочтите отрывок из исторического источника (доклад к Пленуму ЦК КПСС). Укажите год Пленума, пропущенную фамилию (Хрущёв) и Председателя Совета Министров СССР в этом десятилетии.", c: "🔑 <b>Критерии ФИПИ (№13):</b><br>1) Год — 1964 г.<br>2) Фамилия — Хрущёв.<br>3) Исторический деятель — А.Н. Косыгин." },
                { id: 14, num: "Задание 14", text: "В чём состоит правда о развитии экономики СССР в ходе «великого десятилетия»? Как автор охарактеризовал профессиональные качества людей, подготовивших Программу КПСС? Как автор характеризует сроки в Программе?", c: "🔑 <b>Критерии ФИПИ (№14):</b><br>1) Экономика резко ухудшила показатели.<br>2) «Знающие экономику в теоретическом плане, но очень далёкие от жизни».<br>3) Сроки нереальные." },
                { id: 15, num: "Задание 15", text: "<div style='text-align:center; margin:15px 0;'><img src='images/medal_northern_war.jpg' style='max-width:400px; width:100%; border-radius:8px;'><br></div>Укажите князя, имя которого заретушировано на памятной медали. Приведите одно обоснование Вашего ответа.", c: "🔑 <b>Критерии ФИПИ (№15):</b> Д.М. Пожарский. Обоснование: на медали назван К. Минин и Нижний Новгород, где было создано Второе ополчение во главе с Д.М. Пожарским." },
                { id: 16, num: "Задание 16", text: "<div style='text-align:center; margin:15px 0;'><img src='images/architecture_options.jpg' style='max-width:550px; width:100%; border-radius:8px;'><br></div>Какой из представленных памятников был возведён после событий, отображённых на медали? В ответе запишите цифру и укажите город.", c: "🔑 <b>Критерии ФИПИ (№16):</b> Цифра — 4 (Исаакиевский собор). Город — Санкт-Петербург." },
                { id: 17, num: "Задание 17", text: "Прочтите фрагмент воспоминаний о Сталинградской битве. Укажите год событий, командующего Юго-Западным фронтом и отрицательное последствие катастрофы для вермахта.", c: "🔑 <b>Критерии ФИПИ (№17):</b> 1) 1943 г. 2) Н.Ф. Ватутин. 3) Отнимала у гитлеровцев всякую надежду на дальнейшие наступательные действия на юге." },
                { id: 18, num: "Задание 18", text: "Укажите три предпосылки (причины) объединения русских земель в единое государство в XIII-XV вв.: а) внешнеполитический фактор; б) экономическую причину; в) позицию РПЦ.", c: "🔑 <b>Критерии ФИПИ (№18):</b> а) Необходимость свержения ига Орды; б) Развитие экономических связей княжеств; в) Церковь стремилась сохранить единую структуру." },
                { id: 19, num: "Задание 19", text: "Раскройте смысл понятия «восточный вопрос» применительно к истории России. Приведите один исторический факт, конкретизирующий данное понятие.", c: "🔑 <b>Критерии ФИПИ (№19):</b> Смысл: комплекс противоречий конца XVIII — начала XX в., связанных с упадком Османской империи и разделом её земель. Факты: обострение вопроса вызвало Крымскую войну." },
                { id: 20, num: "Задание 20", text: "Запишите тезис о сходстве внешней политики Екатерины ІІ и Александра ІІІ по какому-либо признаку. Приведите два обоснования этого тезиса.", c: "🔑 <b>Критерии ФИПИ (№20):</b> Тезис: оба монарха укрепляли сословные привилегии дворянства. Обоснование: Екатерина II издала Жалованную грамоту дворянству; Александр III учредил Государственный дворянский земельный банк." },
                { id: 21, num: "Задание 21", text: "Приведите аргументы, что в России (конец 1910-х гг.) и в Китае (1940-х гг.) в ходе гражданских войн страны Запада поддерживали сторону, которая проиграла.", c: "🔑 <b>Критерии ФИПИ (№21):</b> 1) Для России: страны Антанты помогали Белому движению, но белые проиграли красным. 2) Для Китая: США снабжали Гоминьдан (Чан Кайши), но победила КПК Мао Цзэдуна." }
            ]
        }
    }
};

// Глубокий клониратор вариантов
for (let v = 2; v <= 5; v++) { window.examVariantsDatabase.easy[v] = JSON.parse(JSON.stringify(window.examVariantsDatabase.easy[1])); window.examVariantsDatabase.easy[v].title = `Вариант №${v} (Базовый уровень)`; }
window.examVariantsDatabase.medium = { 6: JSON.parse(JSON.stringify(window.examVariantsDatabase.easy[1])) }; window.examVariantsDatabase.medium[6].title = "Вариант №6 (Профильный уровень)";
window.examVariantsDatabase.hard = { 11: JSON.parse(JSON.stringify(window.examVariantsDatabase.easy[1])) }; window.examVariantsDatabase.hard[11].title = "Вариант №11 (Олимпиадный уровень)";
for (let v = 7; v <= 10; v++) { window.examVariantsDatabase.medium[v] = JSON.parse(JSON.stringify(window.examVariantsDatabase.medium[6])); window.examVariantsDatabase.medium[v].title = `Вариант №${v} (Профильный уровень)`; }
for (let v = 12; v <= 15; v++) { window.examVariantsDatabase.hard[v] = JSON.parse(JSON.stringify(window.examVariantsDatabase.hard[11])); window.examVariantsDatabase.hard[v].title = `Вариант №${v} (Олимпиадный уровень)`; }

let currentActiveExamType = "ege"; let currentActiveKIM = null; let currentTrainerSection = "russia"; let currentTrainerPeriod = "rus_ancient"; let currentTrainerDiff = "easy"; let currentTrainerQuestion = null; let globalLoadedQuestions = null;

// НАВИГАЦИЯ МЕЖДУ ПАНЕЛЯМИ
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

// РЕНДЕРИНГ ВАРИАНТОВ КИМ
function startExamKIMSimulation(tier, variantNum) {
    const dataBlock = window.examVariantsDatabase[tier]?.[variantNum];
    if (!dataBlock) return;
    currentActiveKIM = dataBlock;
    document.querySelectorAll('.edu-panel').forEach(p => p.style.display = 'none');
    document.getElementById('platform-main-nav').style.display = 'none';
    document.getElementById('exam-simulation-panel').style.display = 'block';
    document.getElementById('score-result-banner').style.display = 'none';
    document.getElementById('exam-title-display').innerHTML = `<span>${dataBlock.title}</span> <button class='btn-finish-exam' style='background:var(--primary-light); margin-left:15px;' onclick='printCurrentKIM()'><i class='fa-solid fa-print'></i> Печать КИМ</button>`;

    document.getElementById('kim-part1-container').innerHTML = dataBlock.part1.map(q => {
        let questionContentHTML = `<div class="task-text-fipi">${q.text}</div>`;
        let answerGridHTML = "";

        if (q.type === "matching") {
            questionContentHTML += `
                <div class="kim-table-grid">
                    <div class="kim-table-column">
                        <div class="kim-col-title">${q.col1_title}</div>
                        ${q.col1.map(item => `<div class="kim-table-row">${item}</div>`).join('')}
                    </div>
                    <div class="kim-table-column">
                        <div class="kim-col-title">${q.col2_title}</div>
                        ${q.col2.map(item => `<div class="kim-table-row">${item}</div>`).join('')}
                    </div>
                </div>
            `;
            answerGridHTML = `
                <div class="fipi-letters-row" style="margin-bottom:8px;">
                    ${q.col1.map(item => `<div class="fipi-letter-box">${item[0]}</div>`).join('')}
                </div>
            `;
        }

        if (q.type === "table") {
            questionContentHTML += `
                <table class="fipi-data-table">
                    <thead>
                        <tr>${q.headers.map(h => `<th>${h}</th>`).join('')}</tr>
                    </thead>
                    <tbody>
                        ${q.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                    </tbody>
                </table>
                <div class="task-text-fipi" style="background:#f8fafc; padding:15px; border-radius:6px; border:1px solid #e2e8f0; font-size:14px; white-space:pre-line;">${q.list}</div>
            `;
            answerGridHTML = `
                <div class="fipi-letters-row" style="margin-bottom:8px;">
                    <div class="fipi-letter-box">А</div><div class="fipi-letter-box">Б</div><div class="fipi-letter-box">В</div><div class="fipi-letter-box">Г</div><div class="fipi-letter-box">Д</div><div class="fipi-letter-box">Е</div>
                </div>
            `;
        }

        return `
            <div class="task-card-kim" id="kim-card-q${q.id}">
                <div class="task-title-fipi">${q.num}</div>
                ${questionContentHTML}
                <div class="fipi-answer-block">
                    <div>
                        ${answerGridHTML}
                        <input type="text" class="exam-input-kim" id="kim-input-ans-${q.id}" placeholder="Ответ...">
                    </div>
                </div>
                <div class="criteria-box" id="kim-crit-block-${q.id}"></div>
            </div>
        `;
    }).join('');

    document.getElementById('kim-part2-container').innerHTML = dataBlock.part2.map(q => `
        <div class="task-card-kim" id="kim-card-q${q.id}">
            <div class="task-title-fipi">${q.num}</div>
            <div class="task-text-fipi">${q.text}</div>
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
        const Math_calc = document.getElementById(`kim-crit-block-${q.id}`);
        if (!input || !card || !Math_calc) return;
        if (input.value.trim().toLowerCase().replace(/\s+/g, '') === q.a.toLowerCase()) {
            part1Score++; card.style.borderLeft = "6px solid var(--success)"; input.className = "exam-input-kim input-correct";
        } else { card.style.borderLeft = "6px solid var(--danger)"; input.className = "exam-input-kim input-incorrect"; }
        Math_calc.innerHTML = `<div class="criteria-title">🔑 Ответ КИМ:</div><b>${q.a.toUpperCase()}</b>`; Math_calc.style.display = "block";
    });
    currentActiveKIM.part2.forEach(q => {
        const txt = document.getElementById(`kim-textarea-ans-${q.id}`);
        const Math_calc = document.getElementById(`kim-crit-block-${q.id}`);
        if (txt) txt.disabled = true;
        if (Math_calc) { Math_calc.innerHTML = `${q.c}`; Math_calc.style.display = "block"; }
    });
    document.getElementById('user-score-val').innerText = part1Score;
    document.getElementById('score-result-banner').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function printCurrentKIM() { window.print(); }

// ОНЛАЙН ТРЕНАЖЕР С ВОПРОСАМИ
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
        "rus_ancient": {
            "easy": [
                { "q": "В каком году летопись сообщает о «призвании варягов»? (Введите цифрами)", "a": "862" },
                { "q": "Как звали варяжского князя, призванного править в Новгород?", "a": "рюрик" },
                { "q": "Кто из князей в 882 году захватил Киев и объединил Новгород и Киев?", "a": "олег" },
                { "q": "Как назывался главный торговый путь из Скандинавии в Византию?", "a": "изварягвгреки" },
                { "q": "Как звали киевского князя, совершившего поход на Царьград в 907 году?", "a": "олег" },
                { "q": "Какой князь заключил выгодный торговый договор с Византией в 911 году?", "a": "олег" },
                { "q": "Как звали жену князя Игоря, отомстившую древлянам?", "a": "ольга" },
                { "q": "Как называлась форма сбора дани князем (объезд земель)?", "a": "полюдье" },
                { "q": "Что ввела княгиня Ольга вместо полюдья (налоговая реформа)?", "a": "урокиипогосты" },
                { "q": "Как назывались фиксированные размеры дани при Ольге?", "a": "уроки" },
                { "q": "Как назывались места сбора дани, установленные Ольгой?", "a": "погосты" },
                { "q": "В каком году княгиня Ольга приняла христианство (по летописи)? (Введите цифрами)", "a": "957" },
                { "q": "Как звали сына Ольги и Игоря, знаменитого полководца?", "a": "святослав" },
                { "q": "Какое государство разгромил Святослав в 965 году?", "a": "хазарскийкаганат" },
                { "q": "Как называлась столица Хазарского каганата, взятая Святославом?", "a": "итиль" },
                { "q": "В каком году погиб князь Святослав у днепровских порогов? (Введите цифрами)", "a": "972" },
                { "q": "В каком году произошло Крещение Руси (условная дата)? (Введите цифрами)", "a": "988" },
                { "q": "В каком городе принял крещение Владимир Святой (Корсунь)?", "a": "корсунь" },
                { "q": "В каком году Ярослав Мудрый разбил печенегов под Киевом? (Введите цифрами)", "a": "1036" },
                { "q": "В честь победы над печенегами был построен собор... (какой?)", "a": "софийский" },
                { "q": "Как назывался первый письменный свод законов на Руси?", "a": "русскаяправда" },
                { "q": "Как назывался штраф за убийство свободного человека (по «Русской Правде»)?", "a": "вира" },
                { "q": "Как называлось народное собрание в Древней Руси?", "a": "вече" },
                { "q": "Как назывался налог в пользу церкви (десятая часть доходов)?", "a": "десятина" },
                { "q": "Как называлась первая каменная церковь в Киеве?", "a": "десятинная" },
                { "q": "В каком году состоялся Любечский съезд князей? (Введите цифрами)", "a": "1097" }
            ],
            "medium": [
                { "q": "Сравните норманнскую и антинорманнскую теории происхождения Руси. Какое племя отрицает славянские корни государства в норманнской концепции?", "a": "варяги" },
                { "q": "Каковы были реальные причины объединения Новгорода и Киева Олегом? Назовите этот ключевой торговый путь:", "a": "изварягвгреки" },
                { "q": "В чем заключалась реформа полюдья княгиней Ольгой? Назовите фиксированные пункты сбора налогов, установленные ею:", "a": "погосты" },
                { "q": "Каковы были последствия разгрома Хазарского каганата для Восточной Европы? Нашествие каких новых кочевников на южные границы Руси это спровоцировало?", "a": "печенеги" },
                { "q": "Каковы причины первой усобицы между сыновьями Святослава? Кто из братьев в итоге занял Киевский престол?", "a": "владимир" },
                { "q": "Проанализируйте «языческую реформу» Владимира Святого 980 г. Какого бога грома и молнии он поставил во главе пантеона?", "a": "перун" },
                { "q": "Почему в «Правде Ярославичей» была полностью отменена кровная месть? Каким денежным штрафом в пользу князя её заменили?", "a": "вира" },
                { "q": "Каков был правовой статус закупа по «Уставу Владимира Мономаха»? Как называлась ссуда, за долги по которой отрабатывал закуп?", "a": "купа" },
                { "q": "В каком городе в 1119 году был построен знаменитый каменный Георгиевский собор Юрьева монастыря?", "a": "новгород" }
            ],
            "hard": [
                { "q": "Разберите гипотезу о «Русском каганате» в Среднем Поднепровье. К какому веку относятся первые задокументированные упоминания титула 'хакан' у русов в Бертинских анналах? (Ответ римской цифрой)", "a": "IX" },
                { "q": "Как звали византийского императора, чья дочь вышла замуж за Всеволода Ярославича, дав рождение Владимиру Мономаху?", "a": "константинмономах" },
                { "q": "Как называлась высшая уголовно-правовая мера по Русской Правде, каравшая за конокрадство и разбой полной конфискацией имущества и изгнанием?", "a": "потокиразграбление" },
                { "q": "Как называлась древнейшая рукописная книга, созданная на Руси в 1056-1057 гг. по заказу посадника Остромира?", "a": "остромировоевангелие" },
                { "q": "Кто был автором богословского трактата 'Слово о Законе и Благодати', ставшего первым русским митрополитом?", "a": "иларион" }
            ]
        },
        "rus_horde": {
            "easy": [
                { "q": "В каком году в Новгороде произошло восстание, приведшее к изгнанию князя Всеволода и установлению боярской республики?", "a": "1136" },
                { "q": "В каком году войска хана Батыя взяли и разорили Рязань, положив начало нашествию на Русь?", "a": "1237" },
                { "q": "В каком году произошло Ледовое побоище под руководством Александра Невского?", "a": "1242" },
                { "q": "В каком году войско под руководством Дмитрия Донского разгромило Мамая на Куликовом поле?", "a": "1380" },
                { "q": "В каком году произошло Стояние на реке Угре, завершившееся падением ордынского ига?", "a": "1480" },
                { "q": "В каком году великий князь Иван III Васильевич ликвидировал независимость Новгородской республики?", "a": "1478" },
                { "q": "В каком году Псковская земля была официально включена в состав единого Русского государства?", "a": "1510" }
            ],
            "medium": [
                { "q": "Как назывался первый письменный общерусский судебный кодекс, изданный Иваном III в 1497 году?", "a": "судебник" },
                { "q": "Какое название носила ордынская грамота, дававшая русским князьям право на великое княжение?", "a": "ярлык" },
                { "q": "Назовите реку, на которой в 1378 году русское войско нанесло первое крупное поражение отряду мурзы Бегича:", "a": "вожа" }
            ],
            "hard": [
                { "q": "В каком году произошло первое столкновение коалиции русских князей с монголами на реке Калке?", "a": "1223" },
                { "q": "Как назывался особый налог (сбор), введенный Иваном III для содержания наместников на местах?", "a": "кормление" },
                { "q": "Назовите имя преподобного монаха, основателя Троицкого монастыря, благословившего Дмитрия Донского на битву:", "a": "сергийрадонежский" }
            ]
        },
        "rus_tsardom": { "easy": [{ "q": "В каком году Иван Грозный венчался на царство?", "a": "1547" }] },
        "rus_empire": { "easy": [{ "q": "В каком году Пётр Великий провозгласил Россию Империей?", "a": "1721" }] },
        "rus_ussr": { "easy": [{ "q": "В каком году Гагарин полетел в космос?", "a": "1961" }] },
        "rus_modern": { "easy": [{ "q": "В каком году Крым вернулся в состав РФ?", "a": "2014" }] },
        "world_ancient": { "easy": [{ "q": "В каком веке пал Древний Рим?", "a": "V" }] },
        "world_middle": { "easy": [{ "q": "В каком году Колумб открыл Америку?", "a": "1492" }] },
        "world_new": { "easy": [{ "q": "В каком году началась Французская революция?", "a": "1789" }] },
        "world_recent": { "easy": [{ "q": "В каком году началась Первая мировая война?", "a": "1914" }] }
    };
    renderSingleQuestion();
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
