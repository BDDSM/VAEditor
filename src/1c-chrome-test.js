window.onload = () => {
  if (['file:', 'http:'].includes(window.location.protocol)) {
    VanessaGherkinProvider.setKeywords('["и","когда","тогда","затем","дано","функция","функционал","функциональность","свойство","предыстория","контекст","сценарий","структура сценария","примеры","допустим","пусть","если","иначеесли","иначе","то","к тому же","также","но","а","feature","functionality","business need","ability","background","scenario outline","scenario","examples","given","when","then","and","but","if","elseif","else"]');

    let steps = [
      { "ИмяШага": "Если Версия платформы \">=\" \"8.3.6\" Тогда", "ОписаниеШага": "Условие. Проверяет версию платформы", "ПолныйТипШага": "Прочее.Версия платформы" },
      { "ИмяШага": "И видеовставка \"Текст\"", "ОписаниеШага": "Выводит в автовидеоинструкцию нужный текст в виде вставки. Белые буквы на черном фоне.", "ПолныйТипШага": "Прочее.Автоинструкции" },
      { "ИмяШага": "И видеовставка картинки \"ИмяКартинки\" \"ТекстДиктора\"", "ОписаниеШага": "Добавляет в видео вставку из указанной картинки с указанным текстом диктора.", "ПолныйТипШага": "Прочее.SikuliX" },
      { "ИмяШага": "И В командном интерфейсе я выбираю \"ИмяКомандыПанелиРазделов\" \"ИмяКомандыПанелиФункций\"", "ОписаниеШага": "Нажатие кнопки на панели разделов, затем в панели функций.", "ПолныйТипШага": "UI.Командный интерфейс.Панель разделов" },
      { "ИмяШага": "Когда в логе сообщений TestClient есть сообщения только из списка\n\t| 'Сообщение1' |\n\t| 'Сообщение2' |", "ОписаниеШага": "Проверяет, что с сообщениях пользователя есть только те сообщения, которые указаны в списке. Порядок сообщений неважен.", "ПолныйТипШага": "UI.Сообщения пользователю.Проверка текста сообщений" },
      { "ИмяШага": "Когда в логе сообщений TestClient есть строка \"Нужное сообщение пользователю\"", "ОписаниеШага": "Проверяет в логе сообщений наличие нужной строки.", "ПолныйТипШага": "UI.Сообщения пользователю.Проверка текста сообщений" }
    ];
    VanessaGherkinProvider.setStepList(JSON.stringify(steps));

    let variables = {
      "ИмяКоманды": "ЗаписатьИЗакрыть",
      "ИмяКнопки": "ФормаЗаписать",
      "ИмяТаблицы": "Номенклатура",
      "ИмяРеквизита": "Количество",
    };
    VanessaGherkinProvider.setVariables(JSON.stringify(variables));

    createVanessaEditor('', 'turbo-gherkin');
  }
}
