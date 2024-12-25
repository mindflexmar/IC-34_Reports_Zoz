
function loadLab(labNumber) {
    let leftMenu = document.getElementById("left-menu");

 
    let labs = {
        1: `
            <button><a href="/lab1/description.html" target="content-frame">Опис предметного середовища</a></button>
            <button><a href="/lab1/topic.html" target="content-frame">Тема Мета Місце розташування </a></button>
            <button><a href="/lab1/structure.html" target="content-frame">СТРУКТУРА ДОКУМЕНТА</a></button>
            <button><a href="/lab1/table.html" target="content-frame">HTML-код ТАБЛИЦІ</a></button>
            <button><a href="/lab1/form.html" target="content-frame">HTML-код ФОРМИ</a></button>
            <button><a href="/lab1/images.html" target="content-frame">HTML-код ЗОБРАЖЕННЯ</a></button>
            <button><a href="/lab1/conclusion.html" target="content-frame">ВИСНОВКИ</a></button>
        `,
        2: `
            <button><a href="/lab2/topic.html" target="content-frame">Тема, мета ЛР №2 Місце розташування сайту, звіту</a></button>
            <button><a href="/lab2/styles.html" target="content-frame">Способи підключення стилів</a></button>
            <button><a href="/lab2/selectors.html" target="content-frame">СЕЛЕКТОРИ</a></button>
            <button><a href="/lab2/tag-selectors.html" target="content-frame">Селектори тегу</a></button>
            <button><a href="/lab2/class-selectors.html" target="content-frame">Селектори класу</a></button>
            <button><a href="/lab2/id-selectors.html" target="content-frame">Селектори ідентифікаторів</a></button>
            <button><a href="/lab2/others-selectors.html" target="content-frame">Інші селектори</a></button>
            <button><a href="/lab2/css.html" target="content-frame">CSS: Шрифт Текст Таблиці Фон Контур Списки CSS Просунутий</a></button>
            <button><a href="/lab2/conclusion.html" target="content-frame">ВИСНОВКИ до ЛР №2</a></button>
        `,
        3: `
        <button><a href="/lab3/topic.html" target="content-frame">Тема Мета Місце розташування</a></button>
        <button><a href="/lab3/task1.html" target="content-frame">ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету</a></button>
        <button><a href="/lab3/task2.html" target="content-frame">ЗАВДАННЯ №2</a></button>
        <button><a href="/lab3/gumtable.html" target="content-frame">Гумова таблична верстка</a></button>
        <button><a href="/lab3/task3.html" target="content-frame">ЗАВДАННЯ №3 FLEXBOX</a></button>
        <button><a href="/lab3/screen.html" target="content-frame">Скріншот сторінки (Flexbox)</a></button>
        <button><a href="/lab3/htmlcode.html" target="content-frame">HTML-код (Flexbox)</a></button>
        <button><a href="/lab3/csscode.html" target="content-frame">CSS-код (Flexbox)</a></button>
        <button><a href="/lab3/conclusion.html" target="content-frame">ВИСНОВКИ</a></button>
        `,

        6: `
        <button><a href="/lab6/topic.html" target="content-frame">Тема ЛР №6</a></button>
        <button><a href="/lab6/task1.html" target="content-frame">Завдання№1</a></button>
        <button><a href="/lab6/task3.html" target="content-frame">Завдання№3</a></button>
        <button><a href="/lab6/task5.html" target="content-frame">Завдання№5</a></button>
        <button><a href="/lab6/task7.html" target="content-frame">Завдання№7</a></button>
        <button><a href="/lab6/task9.html" target="content-frame">Завдання№9</a></button>
        <button><a href="/lab6/task10.html" target="content-frame">Завдання№10</a></button>
        `,
        7: `
        <button><a href="/lab7/topic.html" target="content-frame">Тема ЛР №7</a></button>
        <button><a href="/lab7/task1.html" target="content-frame">Завдання№1</a></button>
        <button><a href="/lab7/task3.html" target="content-frame">Завдання№3</a></button>
        <button><a href="/lab7/task5.html" target="content-frame">Завдання№5</a></button>
        <button><a href="/lab7/task7.html" target="content-frame">Завдання№7</a></button>
        <button><a href="/lab7/task8.html" target="content-frame">Завдання№8</a></button>
        <button><a href="/lab7/task9.html" target="content-frame">Завдання№9</a></button>
        <button><a href="/lab7/task10.html" target="content-frame">Завдання№10</a></button>
        `
    };

    
    if (labs[labNumber]) {
        leftMenu.innerHTML = labs[labNumber];
    }
}
