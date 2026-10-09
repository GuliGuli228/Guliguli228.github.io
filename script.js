/* ==========================================================================
   1. ДАННЫЕ  ←  РЕДАКТИРУЙТЕ ЗДЕСЬ
   ========================================================================== */

const META = { title:'Инженер АСУ ТП → Industry 4.0', subtitle:'Интерактивная дорожная карта' };

/* --- Цвета ТЕМ (карточек-узлов) --- */
const PALETTE = {
  slate:'#64748b', amber:'#f59e0b', blue:'#3b82f6', purple:'#a855f7',
  violet:'#8b5cf6', rose:'#f43f5e', teal:'#14b8a6', cyan:'#06b6d4',
  indigo:'#6366f1', green:'#22c55e', pink:'#ec4899', sky:'#0ea5e9',
  lime:'#84cc16', orange:'#f97316', emerald:'#10b981', red:'#ef4444'
};

/* --- Уровни ОБЯЗАТЕЛЬНОСТИ подтем: настройте цвета под себя --- */
const LEVELS = {
  must : { label:'Обязательно', color:'#18c75b' },
  core : { label:'Важно',       color:'#ffe608' },
  extra: { label:'По желанию',  color:'#64748b' },
  bonus: { label:'Бонус',       color:'#8b5cf6' }
};
const DEFAULT_LEVEL = 'core';

/* --- Узлы --- */
const NODES = [

{ id:'start', title:'Старт', kind:'milestone', row:0, color:'blue', width:250,
  summary:'Точка входа в профессию',
  desc:'Дорожная карта инженера АСУ ТП: от базовой электроники, метрологии и программирования ПЛК — до SCADA, промышленных протоколов, цифровых двойников, IIoT-данных и Индустрии 5.0. Двигайтесь сверху вниз.',
  items:[] },

/* ---------- РЯД 1 ---------- */
{ id:'foundation', title:'Фундамент', kind:'topic', row:1, color:'amber', width:200,
  leavesSide:'left', leafWidth:190, summary:'Базовые инженерные дисциплины',
  desc:'То, без чего автоматизатор превращается в «нажимателя кнопок в среде разработки»: физика процесса, сигнал, погрешность и математический аппарат.',
  items:[
    { title:'Схемотехника', level:'must',
      desc:'Аналоговая и цифровая схемотехника: резисторы, конденсаторы, диоды, транзисторы, ОУ, логические элементы, компараторы, АЦП/ЦАП. Умение читать электрические принципиальные схемы.',
      links:[{label:'Электроника — Вики',url:'https://ru.wikipedia.org/wiki/Электроника'}] },
    { title:'Физика процессов', level:'must',
      desc:'Физические принципы измеряемых величин: давление, расход, уровень, температура, масса. Гидравлика, теплообмен, электромагнетизм, механика. Понимание объекта управления важнее знания конкретного ПЛК.',
      links:[{label:'Теплообмен',url:'https://ru.wikipedia.org/wiki/Теплообмен'}] },
    { title:'Сигналы и метрология', level:'must',
      desc:'Аналоговые и цифровые сигналы: 4–20 мА, 0–10 В, NAMUR, дискретные входы. Погрешности, классы точности, калибровка, поверка, диапазон и предел измерения.',
      links:[{label:'Метрология',url:'https://ru.wikipedia.org/wiki/Метрология'}] },
    { title:'Математика', level:'core',
      desc:'Линейная алгебра, дифференциальные уравнения, теория вероятностей и статистика, преобразования Лапласа и Фурье, численные методы, основы оптимизации.',
      links:[{label:'Преобразование Лапласа',url:'https://ru.wikipedia.org/wiki/Преобразование_Лапласа'}] }
  ] },

{ id:'programming', title:'Программирование', kind:'topic', row:1, color:'blue', width:200,
  leavesSide:'right', leafWidth:190, summary:'Код как инженерный артефакт',
  desc:'Не «написать работающую программу», а спроектировать поддерживаемый, тестируемый и переиспользуемый код ПЛК.',
  items:[
    { title:'Архитектура кода', level:'must',
      desc:'Структура проекта: слои (оборудование / логика / HMI-интерфейс), модульность, соглашения об именовании, версионирование, повторяемость между линиями и цехами.',
      links:[{label:'SOLID',url:'https://ru.wikipedia.org/wiki/SOLID'}] },
    { title:'ФБ, интерфейсы, функции', level:'must',
      desc:'IEC 61131-3: FUNCTION_BLOCK, FUNCTION, PROGRAM, интерфейсы, структуры, перечисления, VAR_IN_OUT. Собственные библиотеки и их переиспользование.',
      links:[{label:'IEC 61131-3',url:'https://en.wikipedia.org/wiki/IEC_61131-3'}] },
    { title:'Общее программирование', level:'core',
      desc:'Типы данных, алгоритмы и структуры, ООП, паттерны проектирования, отладка, юнит-тестирование, работа с Git и code review.',
      links:[{label:'Паттерны проектирования',url:'https://refactoring.guru/ru/design-patterns'}] },
    { title:'Конечные автоматы', level:'must',
      desc:'State Machine: состояния, переходы, события, иерархические автоматы. Реализация на ST/LD, связь с PackML-состояниями машины.',
      links:[{label:'Конечный автомат',url:'https://ru.wikipedia.org/wiki/Конечный_автомат'}] }
  ] },

{ id:'docs', title:'Документы', kind:'topic', row:1, color:'purple', width:200,
  leavesSide:'left', leafWidth:190, summary:'Нормативка и оформление',
  desc:'Проект без документации не принимается и не эксплуатируется. Умение читать и выпускать рабочую документацию — половина работы инженера.',
  items:[
    { title:'Нормативная база', level:'must',
      desc:'ФЗ №116 «О промышленной безопасности», ПУЭ, ПТЭЭП, ПТБ, технические регламенты ТР ТС, отраслевые нормы и правила.',
      links:[{label:'ПУЭ',url:'https://ru.wikipedia.org/wiki/Правила_устройства_электроустановок'}] },
    { title:'Рабочая документация', level:'must',
      desc:'Стадии «П» и «Р», состав комплектов: схемы электрические принципиальные и подключения, кабельные журналы, спецификации, планы трасс, листы общих данных.',
      links:[{label:'Проектная документация',url:'https://ru.wikipedia.org/wiki/Проектная_документация'}] },
    { title:'ЕСКД', level:'core',
      desc:'Единая система конструкторской документации (ГОСТ 2.x): форматы, масштабы, линии, обозначения, правила выполнения схем и чертежей.',
      links:[{label:'ЕСКД',url:'https://ru.wikipedia.org/wiki/ЕСКД'}] },
    { title:'ГОСТ 34', level:'core',
      desc:'Стандарты на автоматизированные системы: ГОСТ 34.601 (стадии создания), 34.201 (виды документов), 34.321, РД 50-34.698 (требования к ТЗ).',
      links:[{label:'ГОСТ 34.601',url:'https://docs.cntd.ru/document/1200007064'}] }
  ] },

/* ---------- РЯД 2 ---------- */
{ id:'core', title:'Ядро АСУ ТП', kind:'hub', row:2, color:'rose', width:230,
  leavesSide:'split', leafWidth:210, summary:'Центральная компетенция уровня цеха',
  desc:'Связка «объект → датчик → контроллер → регулятор → исполнительный механизм». Здесь формируется инженер, способный сам спроектировать и настроить контур управления.',
  items:[
    { title:'ТАУ и ПИД', level:'must', side:'left',
      desc:'Теория автоматического управления: объект регулирования, статические и динамические характеристики, передаточные функции, устойчивость, качество переходного процесса. ПИД-регулятор, методы настройки (Зиглер–Никольс, Cohen–Coon), каскадные и соотносительные схемы, feed-forward, anti-windup.',
      links:[{label:'ПИД-регулятор',url:'https://ru.wikipedia.org/wiki/ПИД-регулятор'},{label:'ТАУ',url:'https://ru.wikipedia.org/wiki/Теория_автоматического_управления'}] },
    { title:'ПЛК', level:'must', side:'left',
      desc:'Программируемые логические контроллеры: CPU и модули ввода-вывода, цикл сканирования, задачи и приоритеты, память и области данных, диагностика, горячее резервирование, online-изменения.',
      links:[{label:'ПЛК',url:'https://ru.wikipedia.org/wiki/Программируемый_логический_контроллер'}] },
    { title:'Логика управления оборудованием', level:'must', side:'left',
      desc:'Блокировки и защиты, последовательности пуска и останова, управление агрегатами (насос, вентилятор, задвижка), режимы работы (ручной / автоматический / местный / дистанционный), обработка отказов.',
      links:[{label:'Блокировка',url:'https://ru.wikipedia.org/wiki/Блокировка_(автоматика)'}] },
    { title:'КИПиА и полевой уровень', level:'must', side:'right',
      desc:'Датчики и исполнительные механизмы: расходомеры, уровнемеры, датчики давления и температуры, анализаторы. Регулирующие и отсечные клапаны, ЧРП и софт-стартеры, шкафы автоматики, искробезопасные цепи.',
      links:[{label:'КИПиА',url:'https://ru.wikipedia.org/wiki/Контрольно-измерительные_приборы'}] },
    { title:'Моделирование', level:'core', side:'right',
      desc:'Модель объекта или всей установки для отладки логики без реального железа: симуляторы, виртуальный ввод в эксплуатацию, проверка ПИД-настроек на модели.',
      links:[{label:'Virtual commissioning',url:'https://en.wikipedia.org/wiki/Virtual_commissioning'}] },
    { title:'Функциональная безопасность', level:'core', side:'right',
      desc:'SIL и уровни полноты безопасности, МЭК 61508 / 61511, функции безопасности (SIF), PFD/PFH, безопасные ПЛК и приводы, валидация и периодическая проверка.',
      links:[{label:'IEC 61511',url:'https://en.wikipedia.org/wiki/IEC_61511'},{label:'SIL',url:'https://ru.wikipedia.org/wiki/Уровень_полноты_безопасности'}] }
  ] },

/* ---------- РЯД 3 ---------- */
{ id:'scada', title:'SCADA', kind:'topic', row:3, color:'teal', width:200,
  leavesSide:'left', leafWidth:190, summary:'Верхний уровень диспетчеризации',
  desc:'Операторский интерфейс предприятия: мнемосхемы, тренды, аварии, отчёты и отказоустойчивость серверной части.',
  items:[
    { title:'Аварии и журналы', level:'must',
      desc:'Alarm management по ISA-18.2: приоритеты и классы, шельвинг, подавление штормов сигналов, журнал событий SOE с миллисекундной меткой, квитирование.',
      links:[{label:'ISA-18.2',url:'https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa18'}] },
    { title:'HMI: лучшие практики', level:'must',
      desc:'Ситуационная осведомленность, высокопроизводительная графика (High Performance HMI), серая палитра и цвет только для аномалий, иерархия экранов, ISA-101.',
      links:[{label:'HMI',url:'https://en.wikipedia.org/wiki/Human%E2%80%93machine_interface'}] },
    { title:'Резервирование', level:'core',
      desc:'Горячий резерв серверов и каналов связи, синхронизация истории и конфигурации, переключение без потери данных, отказоустойчивые кластеры.',
      links:[{label:'Резервирование',url:'https://ru.wikipedia.org/wiki/Резервирование_(техника)'}] },
    { title:'Отчёты', level:'core',
      desc:'Сменные, суточные и месячные отчёты, автоматическая генерация и рассылка, электронные журналы, печать, выгрузка в Excel/PDF.', links:[] },
    { title:'РСУ', level:'core',
      desc:'Распределённая система управления: архитектура контроллеров и серверов, инженерные и операторские станции, сетевая инфраструктура, масштабирование на тысячи тегов.',
      links:[{label:'РСУ',url:'https://ru.wikipedia.org/wiki/Распределённая_система_управления'}] }
  ] },

{ id:'protocols', title:'Протоколы', kind:'topic', row:3, color:'cyan', width:200,
  leavesSide:'right', leafWidth:200, summary:'Как устройства понимают друг друга',
  desc:'От последовательных шин до промышленного Ethernet и унифицированных информационных моделей.',
  items:[
    { title:'MODBUS RTU / TCP', level:'must',
      desc:'Модель регистров, коды функций, адресация, таймауты и повторные запросы, ограничения длины кадра, маппинг адресов, диагностика обмена.',
      links:[{label:'modbus.org',url:'https://modbus.org/specs.php'}] },
    { title:'PROFIBUS, CANopen, HART', level:'core',
      desc:'Полевые шины: PROFIBUS DP/PA и GSD-файлы, CANopen с SDO/PDO и объектным словарём, HART — цифровая коммуникация поверх аналогового сигнала 4–20 мА.',
      links:[{label:'PROFIBUS',url:'https://www.profibus.com/'},{label:'CANopen',url:'https://www.can-cia.org/'},{label:'HART',url:'https://en.wikipedia.org/wiki/Highway_Addressable_Remote_Transducer_Protocol'}] },
    { title:'Промышленный Ethernet: PROFINET, EtherNet/IP', level:'must',
      desc:'PROFINET (GSDML, классы RT/IRT, изохронный режим) и EtherNet/IP (EDS, CIP, явный и неявный обмен). Топологии, коммутаторы, диагностика.',
      links:[{label:'PROFINET',url:'https://www.profibus.com/profinet'},{label:'EtherNet/IP',url:'https://www.ethernet-ip.org/'}] },
    { title:'OPC UA', level:'must',
      desc:'Клиент-серверная модель, адресное пространство и узлы, информационные модели и companion specifications, PubSub, профили безопасности, сертификаты.',
      links:[{label:'OPC Foundation',url:'https://opcfoundation.org/developer-tools/specifications-unified-architecture'}] },
    { title:'TCP/IP', level:'core',
      desc:'Стек OSI, адресация и маски, VLAN, маршрутизация, NAT, диагностика (ping, traceroute, Wireshark), настройка промышленных сетей.',
      links:[{label:'Wireshark',url:'https://www.wireshark.org/'}] },
    { title:'RS-232 / RS-485', level:'extra',
      desc:'Физический уровень последовательной связи: терминирование, топология шины, количество узлов, преобразователи интерфейсов, гальваническая развязка.',
      links:[{label:'RS-485',url:'https://ru.wikipedia.org/wiki/RS-485'}] }
  ] },

{ id:'standards', title:'Стандарты', kind:'topic', row:3, color:'indigo', width:200,
  leavesSide:'left', leafWidth:190, summary:'Общий язык отрасли',
  desc:'Международные стандарты, определяющие архитектуру, языки программирования, HMI и безопасность автоматизированных систем.',
  items:[
    { title:'ISA-95', level:'must',
      desc:'Модель уровней предприятия (0–4) и интеграции бизнес-систем с производственными: B2M, объекты производства, персонал, оборудование, материал.',
      links:[{label:'ISA-95',url:'https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa95'}] },
    { title:'ISA-88', level:'core',
      desc:'Партионное (batch) управление: модель оборудования, процедурные элементы, рецептуры и их типы, фазы, связь с ISA-95.',
      links:[{label:'ISA-88',url:'https://en.wikipedia.org/wiki/ISA-88'}] },
    { title:'МЭК 61131-3', level:'must',
      desc:'Языки программирования ПЛК: LD, FBD, ST, SFC, IL; модель ПО, задачи, конфигурации, типы данных, POUs.',
      links:[{label:'IEC 61131-3',url:'https://en.wikipedia.org/wiki/IEC_61131-3'}] },
    { title:'МЭК 61131-6', level:'extra',
      desc:'Требования к функциональной безопасности программируемых электронных систем управления, связь с IEC 61508.',
      links:[{label:'IEC 61131',url:'https://en.wikipedia.org/wiki/IEC_61131'}] },
    { title:'IEC 61499', level:'extra',
      desc:'Функциональные блоки для распределённых систем управления: событийная модель, порты, переносимость между устройствами, агенты управления.',
      links:[{label:'IEC 61499',url:'https://en.wikipedia.org/wiki/IEC_61499'}] },
    { title:'PackML / ISA-TR88', level:'core',
      desc:'Модель состояний машины, режимы работы единицы (unit modes), OMAC, унификация интерфейсов упаковочного оборудования.',
      links:[{label:'PackML',url:'https://en.wikipedia.org/wiki/PackML'}] },
    { title:'ISA-101', level:'core',
      desc:'Стандарт на человеко-машинные интерфейсы: принципы проектирования мнемосхем, цветовая кодировка, приоритеты сигнализации, навигация.',
      links:[{label:'ISA-101',url:'https://www.isa.org/products/ansi-isa-101-00-01-2015-human-machine-interfaces'}] },
    { title:'МЭК 62443', level:'must',
      desc:'Кибербезопасность АСУ ТП: модель зон и каналов, уровни безопасности SL, роли (владелец / интегратор / поставщик), требования к процессам, системе и компонентам.',
      links:[{label:'IEC 62443',url:'https://en.wikipedia.org/wiki/IEC_62443'}] },
    { title:'МЭК 61511', level:'core',
      desc:'Функциональная безопасность приборных систем безопасности (ПБС/SIS) для процессных производств: SIF, SIL, жизненный цикл безопасности, валидация.',
      links:[{label:'IEC 61511',url:'https://en.wikipedia.org/wiki/IEC_61511'}] }
  ] },

/* ---------- РЯД 4 ---------- */
{ id:'i40', title:'Ядро Industry 4.0', kind:'hub', row:4, color:'green', width:240,
  leavesSide:'split', leafWidth:215, summary:'Четвёртая промышленная революция',
  desc:'Переход от «автоматизированной линии» к «цифровому предприятию»: вертикальная и горизонтальная интеграция, семантика данных, децентрализованные решения и безопасные архитектуры.',
  items:[
    { title:'Киберфизические системы и smart factory', level:'must', side:'left',
      desc:'CPS: физический объект + цифровая модель + сетевой доступ. Умная фабрика как сеть взаимодействующих киберфизических активов.',
      links:[{label:'Киберфизическая система',url:'https://ru.wikipedia.org/wiki/Киберфизическая_система'}] },
    { title:'Модульное производство: MTP, PackML', level:'core', side:'left',
      desc:'Module Type Package — описание модуля как самодокументируемой единицы с сервисами. Оркестрация модулей, быстрая переналадка линии.',
      links:[{label:'MTP / ZVEI',url:'https://www.zvei.org/en/press-and-media/module-type-package-mtp/'}] },
    { title:'Безопасность архитектур: зоны и каналы, IEC 62443', level:'must', side:'left',
      desc:'Применение IEC 62443 к архитектуре Индустрии 4.0: сегментация, conduit, DMZ для OT, управление доступом, защита от lateral movement.',
      links:[{label:'IEC 62443',url:'https://en.wikipedia.org/wiki/IEC_62443'}] },
    { title:'Эволюция индустрии от 1.0 до 5.0', level:'core', side:'left',
      desc:'Механизация → электрификация и конвейер → автоматизация и ПЛК → киберфизические системы и данные → человек в центре и устойчивость.',
      links:[{label:'Индустрия 4.0',url:'https://ru.wikipedia.org/wiki/Индустрия_4.0'}] },
    { title:'Принципы: интероперабельность, виртуализация, децентрализация, real-time, модульность, сервисы', level:'must', side:'left',
      desc:'Шесть дизайн-принципов Industry 4.0, на которых держится любая референсная архитектура.',
      links:[{label:'Design principles',url:'https://en.wikipedia.org/wiki/Industry_4.0'}] },
    { title:'Данные как продукт: от сигнала к семантике, digital thread', level:'core', side:'left',
      desc:'Путь «от сигнала к семантической информации»: качество данных, владение, контракт данных, сквозная цифровая нить жизненного цикла изделия.',
      links:[{label:'Digital thread',url:'https://en.wikipedia.org/wiki/Digital_thread'}] },

    { title:'Пирамида автоматизации и её размытие. NAMUR NOA', level:'must', side:'right',
      desc:'Классическая пирамида уровней 0–4 и почему она размывается. NAMUR Open Architecture: второй канал данных для мониторинга и аналитики в обход ядра АСУ ТП.',
      links:[{label:'NAMUR NOA',url:'https://www.namur.net/en/focus-topics/namur-open-architecture/'}] },
    { title:'OPC UA как хребет Индустрии 4.0; companion specs', level:'must', side:'right',
      desc:'Единая семантика обмена: companion specifications (PackML, Robotics, Machine Tool, Plastics), PubSub, информационное моделирование.',
      links:[{label:'OPC UA Companion Specs',url:'https://opcfoundation.org/markets-collaboration/'}] },
    { title:'Архитектуры IIoT: edge / fog / cloud', level:'core', side:'right',
      desc:'Распределение вычислений: полевой уровень, edge-шлюзы, туманный уровень цеха, облако. Задержки, автономность, стоимость трафика.',
      links:[{label:'Edge computing',url:'https://en.wikipedia.org/wiki/Edge_computing'}] },
    { title:'AAS — оболочка актива, цифровой паспорт', level:'core', side:'right',
      desc:'Asset Administration Shell: цифровой паспорт актива, submodels, свойства и события, серверы AAS, связь с RAMI 4.0.',
      links:[{label:'IDTA / AAS',url:'https://industrialdigitaltwin.org/'}] },
    { title:'RAMI 4.0 и референсные модели', level:'extra', side:'right',
      desc:'Reference Architectural Model Industrie 4.0 — трёхмерная карта: уровни иерархии × жизненный цикл × слои представления. Аналоги: IIRA, IVRA.',
      links:[{label:'RAMI 4.0',url:'https://en.wikipedia.org/wiki/Reference_Architectural_Model_Industrie_4.0'}] },
    { title:'Индустрия 5.0: human-centric, устойчивость, резилиентность', level:'bonus', side:'right',
      desc:'Human-centric подход, устойчивость (sustainability) и резилиентность производства: коботы, благополучие оператора, экологичность.',
      links:[{label:'Industry 5.0 — EC',url:'https://research-and-innovation.ec.europa.eu/research-and-innovation-overview/industry-50_en'}] }
  ] },

/* ---------- РЯД 5 ---------- */
{ id:'analytics', title:'Аналитика', kind:'topic', row:5, color:'pink', width:180,
  leavesSide:'left', leafWidth:178, summary:'Ценность из накопленных данных',
  desc:'Превращение истории тегов в решения: качество, прогнозы, отклонения, наглядность.',
  items:[
    { title:'Предиктивное обслуживание', level:'core',
      desc:'Прогноз остаточного ресурса оборудования по вибрации, температуре, току двигателя. RUL, стратегии обслуживания CBM/PdM.',
      links:[{label:'Predictive maintenance',url:'https://en.wikipedia.org/wiki/Predictive_maintenance'}] },
    { title:'Machine Learning', level:'core',
      desc:'Регрессия и классификация, обучение на исторических данных, признаки из временных рядов, валидация, деплой модели на edge.',
      links:[{label:'scikit-learn',url:'https://scikit-learn.org/stable/'}] },
    { title:'SPC', level:'extra',
      desc:'Статистическое управление процессом: контрольные карты Шухарта, Cp/Cpk, анализ способности процесса, правила разладки.',
      links:[{label:'SPC',url:'https://en.wikipedia.org/wiki/Statistical_process_control'}] },
    { title:'Детектирование аномалий', level:'extra',
      desc:'Выявление отклонений без явных порогов: статистические методы, изолирующий лес, автоэнкодеры, анализ корреляций между тегами.',
      links:[{label:'Anomaly detection',url:'https://en.wikipedia.org/wiki/Anomaly_detection'}] },
    { title:'Дашборды и визуализация', level:'must',
      desc:'Графики трендов, тепловые карты, панель OEE. Принципы визуализации данных, Grafana, BI-системы.',
      links:[{label:'Grafana',url:'https://grafana.com/'}] }
  ] },

{ id:'twin', title:'Цифровой двойник', kind:'topic', row:5, color:'violet', width:180,
  leavesSide:'right', leafWidth:178, summary:'Виртуальный аналог установки',
  desc:'Модель, живущая вместе с реальным объектом: отладка логики до пусконаладки, обучение персонала, оптимизация.',
  items:[
    { title:'Создание моделей: FreeCAD', level:'extra',
      desc:'Параметрическое 3D-моделирование, сборка механизма, экспорт в форматы для симуляции.',
      links:[{label:'FreeCAD',url:'https://www.freecad.org/'}] },
    { title:'FMU и FMI', level:'core',
      desc:'Functional Mock-up Interface: обмен моделями между средами симуляции, FMU-пакет, co-simulation и model exchange.',
      links:[{label:'fmi-standard.org',url:'https://fmi-standard.org/'}] },
    { title:'Виртуальная отладка', level:'must',
      desc:'Подключение реального кода ПЛК к 3D-модели: проверка логики, последовательностей и блокировок до монтажа оборудования.',
      links:[{label:'Virtual commissioning',url:'https://en.wikipedia.org/wiki/Virtual_commissioning'}] },
    { title:'SIL и HIL', level:'core',
      desc:'Software-in-the-Loop — контроллер эмулируется; Hardware-in-the-Loop — реальный ПЛК и виртуальный объект. Стенды, сигналы, синхронизация времени.',
      links:[{label:'HIL',url:'https://en.wikipedia.org/wiki/Hardware-in-the-loop_simulation'}] },
    { title:'Modelica и Simulink', level:'extra',
      desc:'Языки и среды физического моделирования: библиотеки компонентов, гибридные системы, генерация кода для контроллера.',
      links:[{label:'Modelica',url:'https://modelica.org/'},{label:'Simulink',url:'https://www.mathworks.com/products/simulink.html'}] },
    { title:'Factory I/O', level:'core',
      desc:'3D-симулятор производственной линии для обучения и отладки: конвейеры, роботы, датчики, драйверы для ПЛК.',
      links:[{label:'Factory I/O',url:'https://factory-io.com/'}] }
  ] },

{ id:'data', title:'Данные', kind:'topic', row:5, color:'sky', width:180,
  leavesSide:'left', leafWidth:186, summary:'Инфраструктура данных предприятия',
  desc:'Где живут данные, как они движутся и в каком формате доступны потребителю.',
  items:[
    { title:'SQL', level:'must',
      desc:'Реляционные СУБД: SELECT/JOIN/агрегаты, индексы, транзакции, нормализация, хранимые процедуры, PostgreSQL.',
      links:[{label:'PostgreSQL',url:'https://www.postgresql.org/'},{label:'SQL',url:'https://ru.wikipedia.org/wiki/SQL'}] },
    { title:'Time-series: InfluxDB, TimescaleDB', level:'core',
      desc:'Специализированные БД метрик: схемы хранения, retention policy, downsampling, непрерывные агрегаты, сжатие.',
      links:[{label:'InfluxDB',url:'https://www.influxdata.com/'},{label:'TimescaleDB',url:'https://www.timescale.com/'}] },
    { title:'Историки (historians)', level:'core',
      desc:'Промышленные базы исторических данных: сбор с миллисекундным разрешением, сжатие по мёртвой зоне, архивы, резервирование.',
      links:[{label:'Historian',url:'https://en.wikipedia.org/wiki/Historian_(computing)'}] },
    { title:'Kafka', level:'extra',
      desc:'Потоковая передача событий: топики, партиции, продюсеры и консьюмеры, Kafka Connect, гарантии доставки, retention.',
      links:[{label:'Apache Kafka',url:'https://kafka.apache.org/'}] },
    { title:'UNS — Unified Namespace', level:'core',
      desc:'Единое пространство имён как источник правды: MQTT-брокер в центре, публикация/подписка, структура по ISA-95, отказ от point-to-point.',
      links:[{label:'MQTT',url:'https://mqtt.org/'}] },
    { title:'OPC UA: инфомодели, PubSub · MQTT + Sparkplug · REST/JSON', level:'must',
      desc:'Семантические транспортные контракты: OPC UA companion specs и PubSub, MQTT + Sparkplug B (метрики, рождение/смерть узла), REST/JSON для веб-сервисов.',
      links:[{label:'Sparkplug',url:'https://sparkplug.eclipse.org/'},{label:'OPC UA PubSub',url:'https://opcfoundation.org/markets-collaboration/pubsub/'}] }
  ] },

{ id:'integration', title:'Интеграция', kind:'topic', row:5, color:'lime', width:180,
  leavesSide:'right', leafWidth:186, summary:'Вертикальная и горизонтальная связность',
  desc:'Цех должен говорить с бизнес-системой на понятном ей языке: заказы, выпуск, качество, себестоимость.',
  items:[
    { title:'MES / ERP', level:'must',
      desc:'Уровни 3 и 4 по ISA-95: производственные заказы, диспетчирование, учёт выработки, качество, материалы, планирование.',
      links:[{label:'MES',url:'https://en.wikipedia.org/wiki/Manufacturing_execution_system'},{label:'ERP',url:'https://ru.wikipedia.org/wiki/ERP'}] },
    { title:'OEE', level:'core',
      desc:'Общая эффективность оборудования: доступность × производительность × качество. Методика расчёта, причины потерь, сбор данных с линии.',
      links:[{label:'OEE',url:'https://en.wikipedia.org/wiki/Overall_equipment_effectiveness'}] },
    { title:'Рецепты и трассируемость', level:'core',
      desc:'Управление рецептурами по ISA-88, электронная подпись, отслеживание партии от сырья до отгрузки (track & trace), генеалогия изделия.',
      links:[{label:'ISA-88',url:'https://en.wikipedia.org/wiki/ISA-88'}] },
    { title:'1С / SAP', level:'extra',
      desc:'Практика обмена с учётными системами: интерфейсы, маппинг справочников, очереди сообщений, типовой обмен производственными данными.',
      links:[{label:'1С',url:'https://1c.ru/'},{label:'SAP',url:'https://www.sap.com/'}] },
    { title:'Edge / Cloud: шлюзы, контейнеры, облачные платформы', level:'core',
      desc:'Edge-шлюзы и протоколы, контейнеризация (Docker, K3s), облачные IoT-платформы, гибридные схемы, OTA-обновления, безопасность канала.',
      links:[{label:'Docker',url:'https://www.docker.com/'},{label:'Azure IoT',url:'https://azure.microsoft.com/products/iot/'}] }
  ] },

{ id:'smart', title:'Умное управление', kind:'topic', row:5, color:'orange', width:180,
  leavesSide:'left', leafWidth:186, summary:'Продвинутые функции контроллера',
  desc:'Глубокая специализация на современной платформе: безопасное движение, сеть реального времени, многозадачность.',
  items:[
    { title:'TwinSAFE / FSoE: STO, SS1, SLS', level:'core',
      desc:'Безопасная автоматизация Beckhoff: функции STO, SS1, SLS, SBC; протокол FSoE, безопасные входы и выходы, валидация и документирование.',
      links:[{label:'TwinSAFE',url:'https://www.beckhoff.com/en-en/products/automation/twinsafe/'}] },
    { title:'TwinCAT XAE: VS, runtime, real-time, задачи', level:'must',
      desc:'Среда разработки: Visual Studio, runtime-система, real-time ядро, задачи и их приоритеты, PLC/Motion/NC, лицензирование, deployment.',
      links:[{label:'TwinCAT',url:'https://www.beckhoff.com/en-en/products/automation/twincat/'}] },
    { title:'EtherCAT: топологии, DC, диагностика, hot connect', level:'must',
      desc:'Топологии (линия, кольцо, звезда), Distributed Clocks и синхронизация, диагностика сети, hot connect, slave-устройства и ESI-файлы.',
      links:[{label:'ethercat.org',url:'https://www.ethercat.org/'}] },
    { title:'Motion: PLCopen, серво, синхронизация', level:'core',
      desc:'Функциональные блоки движения PLCopen, сервопривод и его режимы, кулачковые и редукторные профили, электронная синхронизация осей, интерполяция.',
      links:[{label:'PLCopen',url:'https://plcopen.org/'}] }
  ] },

/* ---------- РЯД 6 ---------- */
{ id:'i50', title:'Индустрия 5.0', kind:'hub', row:6, color:'emerald', width:250,
  leavesSide:'split', leafWidth:250, summary:'Человек, устойчивость, инженерная культура',
  desc:'Технологии освоены — дальше зрелость процессов и человеческий фактор. Код под версионным контролем, изменения управляемы, оператор в центре системы, производство устойчиво и ресурсоэффективно.',
  items:[
    { title:'Git, CI/CD для ПЛК, автотесты, код-ревью, change management', level:'must', side:'left',
      desc:'Версионирование проекта ПЛК, ветвление, code review, автоматическая сборка и проверка, unit-тесты логики, управление изменениями, окружения dev / test / prod.',
      links:[{label:'Git',url:'https://git-scm.com/'},{label:'CI/CD',url:'https://ru.wikipedia.org/wiki/Непрерывная_интеграция'}] },
    { title:'Human-centric: коботы, адаптивные HMI, энергоэффективность, резилиентность', level:'core', side:'right',
      desc:'Коллаборативные роботы и безопасность рядом с человеком, адаптивные HMI под роль оператора, энергоэффективность и углеродный след, способность производства восстанавливаться после сбоев.',
      links:[{label:'Индустрия 5.0',url:'https://research-and-innovation.ec.europa.eu/research-and-innovation-overview/industry-50_en'},{label:'Кобот',url:'https://ru.wikipedia.org/wiki/Коллаборативный_робот'}] }
  ] }
];

/* --- Связи между темами (пунктирные связи «тема → подтема» строятся сами) --- */
const EDGES = [
  { from:'start', to:'foundation' },
  { from:'start', to:'programming' },
  { from:'start', to:'docs' },

  { from:'foundation',  to:'core' },
  { from:'programming', to:'core' },
  { from:'docs',        to:'standards', kind:'skip', side:'right' },

  { from:'core', to:'scada' },
  { from:'core', to:'protocols' },
  { from:'core', to:'standards' },

  { from:'scada',     to:'i40' },
  { from:'protocols', to:'i40' },
  { from:'standards', to:'i40' },

  { from:'i40', to:'analytics' },
  { from:'i40', to:'twin' },
  { from:'i40', to:'data' },
  { from:'i40', to:'integration' },
  { from:'i40', to:'smart' },

  { from:'analytics',   to:'i50' },
  { from:'twin',        to:'i50' },
  { from:'data',        to:'i50' },
  { from:'integration', to:'i50' },
  { from:'smart',       to:'i50' }
];

/* ==========================================================================
   2. НАСТРОЙКИ РАСКЛАДКИ
   ========================================================================== */
const CFG = {
  cardWidth:200, leafWidth:186,
  leafGap:34, colGap:56, rowGap:118, vGap:12, pad:100, corner:13,
  minZoom:.1, maxZoom:2.8
};
const STORAGE_KEY = 'roadmap-asutp-i40-v2';

/* ==========================================================================
   3. ЯДРО — ниже править обычно не требуется
   ========================================================================== */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=t=>esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`(.+?)`/g,'<code>$1</code>');
const slug=s=>String(s).toLowerCase().replace(/[^a-zа-яё0-9]+/gi,'-').replace(/^-|-$/g,'');
const plural=(n,a,b,c)=>{const m=n%100,k=n%10;return m>10&&m<20?c:k>1&&k<5?b:k===1?a:c;};
const lvlOf=k=>LEVELS[k]||LEVELS[DEFAULT_LEVEL]||{label:'',color:'#94a3b8'};
const accentOf=n=>PALETTE[n.color]||PALETTE.slate;

/* ---------- состояние ---------- */
const State={done:new Set(),notes:{},folded:new Set(),theme:'light',zoom:1,tx:0,ty:0};
const NODE_MAP=new Map();
const ALL_ITEMS=[];

function loadState(){
  try{ const raw=localStorage.getItem(STORAGE_KEY); if(!raw) return;
    const d=JSON.parse(raw);
    if(Array.isArray(d.done)) State.done=new Set(d.done);
    if(d.notes&&typeof d.notes==='object') State.notes=d.notes;
    if(d.theme) State.theme=d.theme;
  }catch(e){ console.warn('Сохранение не прочитано',e); }
}
let saveT;
function saveState(){ clearTimeout(saveT); saveT=setTimeout(()=>{
  try{ localStorage.setItem(STORAGE_KEY,JSON.stringify({done:[...State.done],notes:State.notes,theme:State.theme,v:2})); }catch(e){}
},180); }

function prepare(){
  NODES.forEach(n=>{
    n.w = n.width || CFG.cardWidth;
    n.lw = n.leafWidth || CFG.leafWidth;
    n.side = n.leavesSide || 'right';
    n.items = (n.items||[]).map((it,i)=>{
      const o = (typeof it==='string') ? {title:it} : Object.assign({},it);
      o.key  = n.id+'::'+(o.id||slug(o.title));
      o.level= o.level||DEFAULT_LEVEL;
      o.links= o.links||[];
      o._i=i; o._node=n;
      return o;
    });
    // распределение по сторонам
    const half = Math.ceil(n.items.length/2);
    n.items.forEach((o,i)=>{
      if(n.side==='split') o._side = o.side || (i<half?'left':'right');
      else o._side = n.side;
    });
    n.L = n.items.filter(o=>o._side==='left');
    n.R = n.items.filter(o=>o._side==='right');
    n.h=0;n.x=0;n.y=0;
    NODE_MAP.set(n.id,n);
    n.items.forEach(o=>ALL_ITEMS.push(o));
  });
}

const ICO={
  check:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  chev:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>',
  sun:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/></svg>',
  moon:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>'
};

/* ==========================================================================
   4. ПОСТРОЕНИЕ DOM
   ========================================================================== */
const nodesEl=$('#nodes'), edgesEl=$('#edges'), worldEl=$('#world'), stageEl=$('#stage');

function build(){
  nodesEl.innerHTML='';
  NODES.forEach(n=>{
    const c=document.createElement('article');
    c.className='card card--'+n.kind; c.dataset.id=n.id;
    c.style.setProperty('--accent',accentOf(n)); c.style.width=n.w+'px';
    const t=n.items.length;
    c.innerHTML=`
      <header class="card__head" data-open="${n.id}">
        <div style="flex:1;min-width:0">
          <h3 class="card__ttl">${esc(n.title)}</h3>
          <div class="card__sub">${t?`${t} ${plural(t,'подтема','подтемы','подтем')} · <span data-cnt>0/${t}</span>`:esc(n.summary||'')}</div>
        </div>
        ${t?`<div class="ringwrap"><svg class="ring" viewBox="0 0 36 36"><circle class="bg" cx="18" cy="18" r="15.9"/><circle class="fg" cx="18" cy="18" r="15.9" pathLength="100" stroke-dasharray="0 100"/></svg><span class="ringtxt">0</span></div>
        <button class="fold" data-fold="${n.id}" title="Свернуть подтемы">${ICO.chev}</button>`:''}
      </header>
      ${t?`<div class="card__bar"><i></i></div>`:''}`;
    nodesEl.appendChild(c); n.el=c;

    n.items.forEach(it=>{
      const lv=lvlOf(it.level);
      const d=document.createElement('div');
      d.className='leaf'; d.dataset.key=it.key; d.dataset.node=n.id;
      d.style.setProperty('--lv',lv.color); d.style.width=n.lw+'px';
      d.title = lv.label + (it.desc?' · есть описание':'');
      d.innerHTML=`<span class="leaf__lv">${esc(lv.label)}</span>
        <span class="leaf__box">${ICO.check}</span>
        <span class="leaf__lb">${esc(it.title)}</span>
        ${(it.desc||it.links.length)?`<span class="leaf__dot"></span>`:''}`;
      nodesEl.appendChild(d); it.el=d;
    });
  });
}

/* ==========================================================================
   5. РАСКЛАДКА (ортогональная, ряды + боковые колонки подтем)
   ========================================================================== */
function measure(){
  NODES.forEach(n=>{
    n.el.style.visibility='hidden'; n.el.style.left='0px'; n.el.style.top='0px';
    n.items.forEach(it=>{ it.el.style.visibility='hidden'; it.el.style.left='0px'; it.el.style.top='0px';
      it.el.style.display = State.folded.has(n.id)?'none':'flex'; });
  });
  void nodesEl.offsetHeight;
  NODES.forEach(n=>{
    n.h=n.el.offsetHeight; n.el.style.visibility='';
    n.items.forEach(it=>{ it.h=it.el.offsetHeight; it.el.style.visibility=''; });
  });
}
function colH(list){ return list.length? list.reduce((s,i)=>s+i.h,0)+CFG.vGap*(list.length-1) : 0; }

function layout(){
  measure();
  const rows=new Map();
  NODES.forEach(n=>{ if(!rows.has(n.row)) rows.set(n.row,[]); rows.get(n.row).push(n); });
  const ordered=[...rows.entries()].sort((a,b)=>a[0]-b[0]);

  // ширина блоков и общая ширина ряда — чтобы отцентрировать
  ordered.forEach(([,list])=>{
    list.forEach(n=>{
      const lw = (State.folded.has(n.id)||!n.L.length)?0:(n.lw+CFG.leafGap);
      const rw = (State.folded.has(n.id)||!n.R.length)?0:(CFG.leafGap+n.lw);
      n._bw = lw + n.w + rw; n._lw = lw;
    });
  });

  let y=0;
  ordered.forEach(([,list])=>{
    // выравнивание тем по верхней линии ряда с учётом «свеса» колонок
    let over=0;
    list.forEach(n=>{
      if(State.folded.has(n.id)) return;
      over=Math.max(over,(colH(n.L)-n.h)/2,(colH(n.R)-n.h)/2);
    });
    over=Math.max(0,over);
    const hubY=y+over;

    const totalW=list.reduce((s,n)=>s+n._bw,0)+CFG.colGap*(list.length-1);
    let x=-totalW/2;
    list.forEach(n=>{
      n.x=x+n._lw; n.y=hubY; n._bx=x; x+=n._bw+CFG.colGap;
      const cy=hubY+n.h/2;
      const place=(arr,side)=>{
        if(!arr.length||State.folded.has(n.id)) return;
        const h=colH(arr); let ly=cy-h/2;
        const lx = side==='left' ? n.x-CFG.leafGap-n.lw : n.x+n.w+CFG.leafGap;
        arr.forEach(it=>{ it.x=lx; it.y=ly; ly+=it.h+CFG.vGap; });
      };
      place(n.L,'left'); place(n.R,'right');
    });
    // низ ряда
    let bottom=hubY;
    list.forEach(n=>{
      bottom=Math.max(bottom,n.y+n.h);
      n.items.forEach(it=>{ if(!State.folded.has(n.id)) bottom=Math.max(bottom,it.y+it.h); });
    });
    y=bottom+CFG.rowGap;
  });

  // границы + запас под внешние шины skip-связей
  let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  NODES.forEach(n=>{
    minX=Math.min(minX,n.x);maxX=Math.max(maxX,n.x+n.w);minY=Math.min(minY,n.y);maxY=Math.max(maxY,n.y+n.h);
    n.items.forEach(it=>{ if(State.folded.has(n.id))return;
      minX=Math.min(minX,it.x);maxX=Math.max(maxX,it.x+n.lw);minY=Math.min(minY,it.y);maxY=Math.max(maxY,it.y+it.h); });
  });
  const hasSkipR=EDGES.some(e=>e.kind==='skip'&&e.side!=='left');
  const hasSkipL=EDGES.some(e=>e.kind==='skip'&&e.side==='left');
  const padL=CFG.pad+(hasSkipL?70:0), padR=CFG.pad+(hasSkipR?70:0);
  const ox=-minX+padL, oy=-minY+CFG.pad;
  NODES.forEach(n=>{ n.x+=ox;n.y+=oy; n.items.forEach(it=>{it.x+=ox;it.y+=oy;}); });
  const W=(maxX-minX)+padL+padR, H=(maxY-minY)+CFG.pad*2;
  NODES.forEach(n=>{ n.el.style.left=n.x+'px'; n.el.style.top=n.y+'px';
    n.items.forEach(it=>{ it.el.style.left=it.x+'px'; it.el.style.top=it.y+'px'; }); });
  worldEl.style.width=W+'px'; worldEl.style.height=H+'px';
  edgesEl.setAttribute('width',W); edgesEl.setAttribute('height',H);
  edgesEl.setAttribute('viewBox',`0 0 ${W} ${H}`);
}

/* ==========================================================================
   6. ЛИНИИ: ортогональные со скруглёнными углами 90°
   ========================================================================== */
function dedupe(p){ return p.filter((q,i)=> i===0 || Math.abs(q[0]-p[i-1][0])>.05 || Math.abs(q[1]-p[i-1][1])>.05 ); }
function ortho(pts,r){
  pts=dedupe(pts);
  if(pts.length<2) return '';
  if(pts.length===2) return `M${pts[0][0]},${pts[0][1]}L${pts[1][0]},${pts[1][1]}`;
  let d=`M${pts[0][0]},${pts[0][1]}`;
  for(let i=1;i<pts.length-1;i++){
    const [px,py]=pts[i-1],[cx,cy]=pts[i],[nx,ny]=pts[i+1];
    const d1=Math.hypot(cx-px,cy-py)||1, d2=Math.hypot(nx-cx,ny-cy)||1;
    const rr=Math.min(r,d1/2,d2/2);
    d+=`L${(cx+(px-cx)/d1*rr).toFixed(1)},${(cy+(py-cy)/d1*rr).toFixed(1)}`
     + `Q${cx},${cy} ${(cx+(nx-cx)/d2*rr).toFixed(1)},${(cy+(ny-cy)/d2*rr).toFixed(1)}`;
  }
  const l=pts[pts.length-1]; d+=`L${l[0]},${l[1]}`; return d;
}

function drawEdges(){
  // границы рядов
  const rb=new Map();
  NODES.forEach(n=>{
    if(!rb.has(n.row)) rb.set(n.row,{top:n.y,bot:n.y+n.h});
    const b=rb.get(n.row); b.top=Math.min(b.top,n.y); b.bot=Math.max(b.bot,n.y+n.h);
    n.items.forEach(it=>{ if(State.folded.has(n.id))return;
      b.top=Math.min(b.top,it.y); b.bot=Math.max(b.bot,it.y+it.h); });
  });
  let minX=Infinity,maxX=-Infinity;
  NODES.forEach(n=>{minX=Math.min(minX,n.x);maxX=Math.max(maxX,n.x+n.w);
    n.items.forEach(it=>{if(State.folded.has(n.id))return;minX=Math.min(minX,it.x);maxX=Math.max(maxX,it.x+n.lw);});});
  const railR=maxX+62, railL=minX-62;

  // маркеры по цветам
  const colors=new Set(); NODES.forEach(n=>colors.add(accentOf(n)));
  let defs='<defs>';
  defs+=`<marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,1 L9.4,5 L0,9 z" fill="var(--edge)"/></marker>`;
  colors.forEach(c=>{
    const id='a'+c.replace('#','');
    defs+=`<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1.4 L9,5 L0,8.6 z" fill="${c}"/></marker>`;
  });
  defs+='</defs>';
  const mk=c=>'url(#a'+c.replace('#','')+')';

  let s=defs;
  // пунктир: тема → подтема
  NODES.forEach(n=>{
    if(State.folded.has(n.id)||!n.items.length) return;
    const acc=accentOf(n), cy=n.y+n.h/2;
    n.items.forEach(it=>{
      const left=it._side==='left';
      const busX= left ? n.x-CFG.leafGap/2 : n.x+n.w+CFG.leafGap/2;
      const iy=it.y+it.h/2;
      const pts= left
        ? [[n.x,cy],[busX,cy],[busX,iy],[it.x+n.lw,iy]]
        : [[n.x+n.w,cy],[busX,cy],[busX,iy],[it.x,iy]];
      s+=`<path class="br" d="${ortho(pts,9)}" stroke="${acc}" data-hub="${n.id}" data-leaf="${it.key}" marker-end="${mk(acc)}"/>`;
    });
  });
  // сплошные: поток
  EDGES.forEach(e=>{
    const a=NODE_MAP.get(e.from), b=NODE_MAP.get(e.to); if(!a||!b) return;
    let pts, cls='flow';
    if(e.kind==='skip'){
      const right=e.side!=='left';
      const sx=right?a.x+a.w:a.x, sy=a.y+a.h/2;
      const tx=right?b.x+b.w:b.x, ty=b.y+b.h/2;
      const rail=right?railR:railL;
      pts=[[sx,sy],[rail,sy],[rail,ty],[tx,ty]];
      cls='flow skip';
    }else{
      const ra=rb.get(a.row), rbb=rb.get(b.row);
      const busY=(ra.bot+rbb.top)/2;
      const sx=a.x+a.w/2, sy=a.y+a.h, tx=b.x+b.w/2, ty=b.y;
      pts=[[sx,sy],[sx,busY],[tx,busY],[tx,ty]];
    }
    s+=`<path class="${cls}" d="${ortho(pts,CFG.corner)}" data-from="${e.from}" data-to="${e.to}" marker-end="url(#arw)"/>`;
  });
  edgesEl.innerHTML=s;
}

/* ==========================================================================
   7. ПРОГРЕСС
   ========================================================================== */
function nodeProgress(n){
  const t=n.items.length; if(!t) return {done:0,total:0,pct:0};
  const d=n.items.filter(i=>State.done.has(i.key)).length;
  return {done:d,total:t,pct:Math.round(d/t*100)};
}
function refreshProgress(){
  let D=0,T=0;
  NODES.forEach(n=>{
    const p=nodeProgress(n); D+=p.done; T+=p.total;
    if(!n.el) return;
    n.el.classList.toggle('folded',State.folded.has(n.id));
    const fg=$('.ring .fg',n.el), rt=$('.ringtxt',n.el), bar=$('.card__bar i',n.el), cnt=$('[data-cnt]',n.el);
    if(fg) fg.setAttribute('stroke-dasharray',`${p.pct} 100`);
    if(rt) rt.textContent=p.pct;
    if(bar) bar.style.width=p.pct+'%';
    if(cnt) cnt.textContent=`${p.done}/${p.total}`;
    n.items.forEach(it=>it.el&&it.el.classList.toggle('done',State.done.has(it.key)));
  });
  const pct=T?Math.round(D/T*100):0;
  $('#progRing').setAttribute('stroke-dasharray',`${pct} 100`);
  $('#progVal').textContent=pct+'%';
  $('#progLbl').textContent=`${D} / ${T} ${plural(T,'тема','темы','тем')}`;
  if(panelOpen&&panelNode) renderPanel(panelNode.id,panelItem);
}
function toggleItem(k){ State.done.has(k)?State.done.delete(k):State.done.add(k); saveState(); refreshProgress(); }

/* ==========================================================================
   8. ВИД
   ========================================================================== */
function apply(){
  worldEl.style.transform=`translate(${State.tx}px,${State.ty}px) scale(${State.zoom})`;
  const g=24*State.zoom;
  stageEl.style.backgroundSize=`${g}px ${g}px`;
  stageEl.style.backgroundPosition=`${State.tx}px ${State.ty}px`;
  $('#zVal').textContent=Math.round(State.zoom*100)+'%';
}
function fit(mode){
  const sw=stageEl.clientWidth, sh=stageEl.clientHeight;
  const W=parseFloat(worldEl.style.width)||1, H=parseFloat(worldEl.style.height)||1;
  const k= mode==='width' ? clamp((sw-70)/W,CFG.minZoom,1.15)
                          : clamp(Math.min((sw-70)/W,(sh-70)/H),CFG.minZoom,1.15);
  State.zoom=k; State.tx=(sw-W*k)/2; State.ty= mode==='width'?36:(sh-H*k)/2; apply();
}
function zoomAt(cx,cy,f){
  const k2=clamp(State.zoom*f,CFG.minZoom,CFG.maxZoom);
  const wx=(cx-State.tx)/State.zoom, wy=(cy-State.ty)/State.zoom;
  State.tx=cx-wx*k2; State.ty=cy-wy*k2; State.zoom=k2; apply();
}
function centerOn(n){
  const sw=stageEl.clientWidth, sh=stageEl.clientHeight;
  State.zoom=clamp(Math.max(State.zoom,.6),CFG.minZoom,1.2);
  State.tx=sw/2-(n.x+n.w/2)*State.zoom; State.ty=sh/2-(n.y+n.h/2)*State.zoom; apply();
}

/* ==========================================================================
   9. ПАНЕЛЬ
   ========================================================================== */
let panelOpen=false, panelNode=null, panelItem=null;
function openPanel(nodeId,itemKey){
  panelNode=NODE_MAP.get(nodeId); if(!panelNode) return;
  panelItem=itemKey||null; panelOpen=true;
  $('#panel').classList.add('open'); $('#panel').setAttribute('aria-hidden','false'); $('#scrim').classList.add('on');
  renderPanel(nodeId,itemKey);
  $$('.leaf').forEach(l=>l.classList.toggle('sel',!!itemKey&&l.dataset.key===itemKey));
}
function closePanel(){
  panelOpen=false; $('#panel').classList.remove('open'); $('#panel').setAttribute('aria-hidden','true');
  $('#scrim').classList.remove('on'); $$('.leaf.sel').forEach(l=>l.classList.remove('sel'));
}
function renderPanel(nodeId,itemKey){
  const n=NODE_MAP.get(nodeId); if(!n) return;
  const acc=accentOf(n), p=nodeProgress(n);
  $('#panelHead').style.setProperty('--accent',acc);
  const it=itemKey?n.items.find(i=>i.key===itemKey):null;
  $('#panelHead').innerHTML=`
    <div style="flex:1;min-width:0">
      <div class="panel__crumb">${esc(n.title)}${p.total?` · ${p.done}/${p.total}`:''}</div>
      <h2 class="panel__ttl">${esc(it?it.title:n.title)}</h2>
    </div>
    <button class="panel__x" id="panelX" title="Закрыть (Esc)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>`;
  $('#panelX').onclick=closePanel;

  let h='';
  if(it){
    const lv=lvlOf(it.level);
    h+=`<span class="p-badge" style="background:${lv.color}">${esc(lv.label)}</span>`;
    if(it.desc) h+=`<p class="p-desc">${fmt(it.desc)}</p>`;
    h+=`<div class="p-btns"><button class="p-btn ${State.done.has(it.key)?'pri':''}" data-toggle="${esc(it.key)}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>
        ${State.done.has(it.key)?'Выполнено':'Отметить выполненным'}</button></div>`;
    if(it.links.length){
      h+=`<div class="p-sec">Материалы</div><div class="p-links">`+it.links.map(l=>
        `<a class="p-link" href="${esc(l.url)}" target="_blank" rel="noopener">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>
         ${esc(l.label)}</a>`).join('')+`</div>`;
    }
    h+=`<div class="p-sec">Мои заметки</div>
      <textarea class="p-note" id="noteBox" placeholder="Что пройдено, какие вопросы остались, ссылки на свои конспекты…">${esc(State.notes[it.key]||'')}</textarea>
      <div class="p-btns"><span class="saved" id="savedFlag">Сохранено ✓</span></div>`;
    const idx=n.items.findIndex(i=>i.key===it.key);
    h+=`<div class="p-nav">
      <button class="p-btn" data-nav="${idx>0?esc(n.items[idx-1].key):''}" ${idx<=0?'disabled':''}>← Назад</button>
      <button class="p-btn" data-nav="${idx+1<n.items.length?esc(n.items[idx+1].key):''}" ${idx>=n.items.length-1?'disabled':''}>Далее →</button></div>`;
  }else{
    if(n.desc) h+=`<p class="p-desc">${fmt(n.desc)}</p>`;
    else if(n.summary) h+=`<p class="p-desc">${fmt(n.summary)}</p>`;
    if(n.items.length){
      h+=`<div class="p-sec">Подтемы · ${p.done} из ${p.total}</div><ul class="p-list">`+
        n.items.map(i=>{const lv=lvlOf(i.level);return `
        <li class="li ${State.done.has(i.key)?'done':''}" data-key="${esc(i.key)}" data-node="${n.id}" style="--lv:${lv.color}">
          <span class="li__box">${ICO.check}</span><span class="li__lb">${esc(i.title)}</span>
          <span style="width:9px;height:9px;border-radius:50%;background:${lv.color};flex:none;margin-top:6px" title="${esc(lv.label)}"></span>
        </li>`;}).join('')+`</ul>`;
      h+=`<div class="p-btns"><button class="p-btn" data-all="1">Отметить всё</button>
          <button class="p-btn" data-all="0">Снять всё</button></div>`;
    }
  }
  $('#panelBody').innerHTML=h; $('#panelBody').scrollTop=0;
  const note=$('#noteBox');
  if(note) note.addEventListener('input',()=>{
    State.notes[it.key]=note.value; saveState();
    const f=$('#savedFlag'); f.classList.add('on'); clearTimeout(note._t); note._t=setTimeout(()=>f.classList.remove('on'),1100);
  });
}
$('#panelBody').addEventListener('click',e=>{
  const tg=e.target.closest('[data-toggle]'); if(tg){toggleItem(tg.dataset.toggle);return;}
  const nv=e.target.closest('[data-nav]'); if(nv&&nv.dataset.nav){openPanel(panelNode.id,nv.dataset.nav);return;}
  const all=e.target.closest('[data-all]');
  if(all&&panelNode){ panelNode.items.forEach(i=>all.dataset.all==='1'?State.done.add(i.key):State.done.delete(i.key)); saveState(); refreshProgress(); return; }
  const li=e.target.closest('.li');
  if(li){
    if(e.target.closest('.li__box')){ toggleItem(li.dataset.key); }
    else openPanel(li.dataset.node,li.dataset.key);
  }
});

/* ==========================================================================
   10. СОБЫТИЯ ХОЛСТА
   ========================================================================== */
let dragged=false;
nodesEl.addEventListener('click',e=>{
  if(dragged) return;
  const f=e.target.closest('[data-fold]');
  if(f){ const id=f.dataset.fold; State.folded.has(id)?State.folded.delete(id):State.folded.add(id); relayout(); return; }
  const lf=e.target.closest('.leaf');
  if(lf){
    if(e.target.closest('.leaf__box')) toggleItem(lf.dataset.key);
    else openPanel(lf.dataset.node,lf.dataset.key);
    return;
  }
  const h=e.target.closest('[data-open]'); if(h) openPanel(h.dataset.open);
});
function setHi(id,on){
  $$('#edges path').forEach(p=>{
    const hit = p.dataset.hub===id || p.dataset.from===id || p.dataset.to===id;
    p.classList.toggle('hi', on&&hit);
  });
}
nodesEl.addEventListener('mouseover',e=>{
  const c=e.target.closest('.card'); if(!c) return;
  setHi(c.dataset.id,true);
});
nodesEl.addEventListener('mouseout',e=>{ if(e.target.closest('.card')) setHi(null,false); });
stageEl.addEventListener('mouseleave',()=>setHi(null,false));

let panning=false,sx=0,sy=0,stx=0,sty=0;
const activeTouches=new Map();
let pinching=false,pinchDistance=0,pinchMidpoint=null;
function getTouchMidpoint(){
  const points=[...activeTouches.values()];
  return {x:(points[0].x+points[1].x)/2,y:(points[0].y+points[1].y)/2};
}
stageEl.addEventListener('pointerdown',e=>{
  if(e.pointerType==='mouse'&&e.button!==0) return;
  if(e.pointerType==='touch'){
    if(e.target.closest('button,input,textarea,a')) return;
    activeTouches.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(activeTouches.size===2){
      panning=false;pinching=true;dragged=true;stageEl.classList.remove('dragging');
      const r=stageEl.getBoundingClientRect(),mid=getTouchMidpoint();
      pinchMidpoint={x:mid.x-r.left,y:mid.y-r.top};
      pinchDistance=Math.hypot(activeTouches.get([...activeTouches.keys()][0]).x-activeTouches.get([...activeTouches.keys()][1]).x,
        activeTouches.get([...activeTouches.keys()][0]).y-activeTouches.get([...activeTouches.keys()][1]).y);
      e.preventDefault();return;
    }
    if(activeTouches.size>1) return;
  }
  if(e.target.closest('button,input,textarea,a,.leaf')) { panning=false; return; }
  panning=true;dragged=false;sx=e.clientX;sy=e.clientY;stx=State.tx;sty=State.ty;
  stageEl.classList.add('dragging');
  if(e.pointerType==='mouse') stageEl.setPointerCapture(e.pointerId);
});
stageEl.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch'&&activeTouches.has(e.pointerId)){
    activeTouches.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pinching&&activeTouches.size>=2){
      const r=stageEl.getBoundingClientRect(),mid=getTouchMidpoint();
      const nextMid={x:mid.x-r.left,y:mid.y-r.top};
      const keys=[...activeTouches.keys()],a=activeTouches.get(keys[0]),b=activeTouches.get(keys[1]);
      const nextDistance=Math.hypot(a.x-b.x,a.y-b.y);
      const worldX=(pinchMidpoint.x-State.tx)/State.zoom,worldY=(pinchMidpoint.y-State.ty)/State.zoom;
      const nextZoom=clamp(State.zoom*(pinchDistance?nextDistance/pinchDistance:1),CFG.minZoom,CFG.maxZoom);
      State.tx=nextMid.x-worldX*nextZoom;State.ty=nextMid.y-worldY*nextZoom;State.zoom=nextZoom;
      pinchDistance=nextDistance;pinchMidpoint=nextMid;apply();e.preventDefault();return;
    }
  }
  if(!panning) return;
  const dx=e.clientX-sx, dy=e.clientY-sy;
  if(Math.abs(dx)+Math.abs(dy)>6) dragged=true;
  State.tx=stx+dx; State.ty=sty+dy; apply();
});
['pointerup','pointercancel'].forEach(ev=>stageEl.addEventListener(ev,e=>{
  if(e.pointerType==='touch'){
    activeTouches.delete(e.pointerId);
    if(pinching&&activeTouches.size<2){
      pinching=false;panning=false;pinchDistance=0;pinchMidpoint=null;stageEl.classList.remove('dragging');
      if(!activeTouches.size)setTimeout(()=>dragged=false,0);
    }else if(panning){
      panning=false;stageEl.classList.remove('dragging');setTimeout(()=>dragged=false,0);
    }
    return;
  }
  if(panning){panning=false;stageEl.classList.remove('dragging');setTimeout(()=>dragged=false,0);}
}));
stageEl.addEventListener('wheel',e=>{
  e.preventDefault();
  const r=stageEl.getBoundingClientRect();
  zoomAt(e.clientX-r.left,e.clientY-r.top,Math.exp(-e.deltaY*(e.ctrlKey?.008:.0016)));
},{passive:false});
stageEl.addEventListener('dblclick',e=>{ if(!e.target.closest('.card,.leaf')) fit('all'); });

/* ==========================================================================
   11. ПОИСК
   ========================================================================== */
const searchInput=$('#search'), searchWrap=$('#searchWrap');
function runSearch(q){
  q=q.trim().toLowerCase(); searchWrap.classList.toggle('has-q',!!q);
  let hits=0;
  NODES.forEach(n=>{
    const cm=!q||n.title.toLowerCase().includes(q)||(n.summary||'').toLowerCase().includes(q)||(n.desc||'').toLowerCase().includes(q);
    let im=false;
    n.items.forEach(i=>{
      const m=!!q&&(i.title.toLowerCase().includes(q)||(i.desc||'').toLowerCase().includes(q));
      i.el.classList.toggle('hit',m);
      i.el.classList.toggle('dim',!!q&&!m&&!cm);
      if(m){im=true;hits++;}
    });
    if(q&&cm&&!im) hits++;
    n.el.classList.toggle('hit',!!q&&cm&&!im);
    n.el.classList.toggle('dim',!!q&&!cm&&!im);
  });
  $('#searchCnt').textContent=q?(hits?hits+' совп.':'нет совпадений'):'';
}
searchInput.addEventListener('input',()=>runSearch(searchInput.value));
searchInput.addEventListener('keydown',e=>{
  if(e.key==='Enter'){ const f=$$('.card:not(.dim), .leaf:not(.dim)')[0];
    if(f){ const id=f.dataset.id||f.dataset.node; centerOn(NODE_MAP.get(id)); } }
  if(e.key==='Escape'){ searchInput.value='';runSearch('');searchInput.blur(); }
});
$('#searchClr').onclick=()=>{searchInput.value='';runSearch('');searchInput.focus();};

/* ==========================================================================
   12. ТУЛБАР
   ========================================================================== */
function setTheme(t){ State.theme=t; document.documentElement.dataset.theme=t; $('#btnTheme').innerHTML=t==='dark'?ICO.sun:ICO.moon; saveState(); }
$('#btnTheme').onclick=()=>setTheme(State.theme==='dark'?'light':'dark');

const menu=$('#menu');
$('#btnMenu').onclick=e=>{e.stopPropagation();menu.classList.toggle('open');};
document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.classList.remove('open');});
menu.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]'); if(!b) return;
  const a=b.dataset.act; if(a!=='import') menu.classList.remove('open');
  if(a==='expand'){ State.folded.clear(); relayout(); }
  if(a==='collapse'){ NODES.forEach(n=>{if(n.items.length)State.folded.add(n.id);}); relayout(); }
  if(a==='export'){
    const blob=new Blob([JSON.stringify({done:[...State.done],notes:State.notes,theme:State.theme,exported:new Date().toISOString()},null,2)],{type:'application/json'});
    const l=document.createElement('a'); l.href=URL.createObjectURL(blob); l.download='roadmap-progress.json'; l.click(); URL.revokeObjectURL(l.href);
    toast('Прогресс выгружен в файл');
  }
  if(a==='reset' && confirm('Сбросить весь прогресс и заметки?')){
    State.done.clear(); State.notes={}; saveState(); refreshProgress(); toast('Прогресс сброшен');
  }
});
$('#fileIn').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=()=>{ try{ const d=JSON.parse(r.result);
      State.done=new Set(Array.isArray(d.done)?d.done:[]);
      State.notes=(d.notes&&typeof d.notes==='object')?d.notes:{};
      if(d.theme) setTheme(d.theme);
      saveState(); refreshProgress(); menu.classList.remove('open'); toast('Прогресс загружен');
    }catch(err){toast('Ошибка чтения файла');} };
  r.readAsText(f); e.target.value='';
});
$('#zIn').onclick=()=>zoomAt(stageEl.clientWidth/2,stageEl.clientHeight/2,1.28);
$('#zOut').onclick=()=>zoomAt(stageEl.clientWidth/2,stageEl.clientHeight/2,.78);
$('#zFit').onclick=()=>fit('all');
$('#zWidth').onclick=()=>fit('width');
$('#zTop').onclick=()=>fit('width');

const modal=$('#modal');
$('#btnHelp').onclick=()=>modal.classList.add('on');
modal.addEventListener('click',e=>{if(e.target.closest('[data-close]')||e.target===modal)modal.classList.remove('on');});
const legend=$('#legend');
$('#legendTg').onclick=()=>legend.classList.toggle('min');
let toastT; function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),2200);}

document.addEventListener('keydown',e=>{
  if(/INPUT|TEXTAREA/.test(document.activeElement.tagName)){ if(e.key==='Escape')document.activeElement.blur(); return; }
  const k=e.key.toLowerCase();
  if(k==='escape'){ modal.classList.contains('on')?modal.classList.remove('on'):closePanel(); }
  if(k==='f') fit('all');
  if(k==='w') fit('width');
  if(k==='t') setTheme(State.theme==='dark'?'light':'dark');
  if(k==='h') modal.classList.toggle('on');
  if(k==='/'||k==='у'){ e.preventDefault(); searchInput.focus(); }
  if(k==='home') fit('width');
  if(k==='+'||k==='=') $('#zIn').click();
  if(k==='-') $('#zOut').click();
});
$('#scrim').onclick=closePanel;

/* ==========================================================================
   13. ЛЕГЕНДА УРОВНЕЙ + ЗАПУСК
   ========================================================================== */
function buildLegend(){
  $('#legendLevels').innerHTML=Object.entries(LEVELS).map(([k,v])=>
    `<div class="row"><span class="sw" style="background:color-mix(in srgb,${v.color} 16%,var(--card));border-color:${v.color}"></span>
     <span style="color:var(--text);font-weight:600">${esc(v.label)}</span>
     <span style="margin-left:auto;font-family:'JetBrains Mono Variable',monospace;font-size:11px;opacity:.7">${k}</span></div>`).join('');
}
function relayout(){ layout(); drawEdges(); refreshProgress(); }

function init(){
  loadState(); setTheme(State.theme||'light');
  $('#brandTitle').textContent=META.title; $('#brandSub').textContent=META.subtitle;
  document.title=META.title+' — roadmap';
  buildLegend(); prepare(); build(); layout(); drawEdges(); refreshProgress();
  requestAnimationFrame(()=>{
    NODES.forEach(n=>setTimeout(()=>n.el.classList.add('in'),70+n.row*95));
    ALL_ITEMS.forEach((it,i)=>setTimeout(()=>it.el.classList.add('in'),160+(it._node.row*95)+i*10));
  });
  setTimeout(()=>fit('width'),80);
  window.addEventListener('resize',()=>apply());
}
init();
document.fonts.ready.then(relayout);

