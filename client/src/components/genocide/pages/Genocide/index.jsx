import React from "react";

import "./Genocide.scss";
import "../readMore.scss";

import IMG1 from "../../../../assets/genocide/img/Genocide.jpg";
import IMG2 from "../../../../assets/genocide/img/Genocide2.jpg";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";

function Genocide() {
  const { t } = useTranslation();
  const mainAnim = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  return (
    <div className="genocide" id="genocide">
      <motion.div
        initial="hidden"
        variants={mainAnim}
        whileInView="visible"
        className="genocide-content"
      >
        <div class="readMore">
          <input
            type="checkbox"
            class="read-more-checker"
            id="read-more-checker"
          />
          <h1 id="h1">{t("Геноцид белорусского народа")}</h1>

          <div class="limited l-800">
            <p id="p">
              {t(
                "Это была одна из самых трагических страниц Второй мировой и Великой Отечественной войн – депортация населения на принудительные работы в Германию. Всего было насильственно вывезено 5,3 мин. человек, в том числе около 400 тыс. из Беларуси. Согласно расовой доктрине нацизма население Восточной Европы считалось низшей категорией иностранной рабочей силы. За 150 граммов хлеба и миску баланды взрослых и детей заставляли по 12 – 14 часов в сутки выполнять тяжёлую работу. За невыполнение заданий угрожало тюремное заключение или расстрел. В результате бесчеловечного отношения к рабочим из Восточной Европы 2.2 млн. человек погибли, в том числе свыше 186 тыс. белорусов. В отдельную главу мы решили вынести анализ документального материала из сборника «Преступные цели – преступные средства». В главе «Рабско – крепостнические условия труда населения на оккупированных территориях Советского Союза и массовый угон советских людей на работу в Германию» собраны документы, раскрывающие истинные цели нацизма в отношении народов оккупированных стран. Ещё на уроках истории, знакомясь со стратегическими планами гитлеровцев по захвату СССР, нам рассказывали о самом человеконенавистническом плане в мировой истории – Генеральном плане «Ост»."
              )}
            </p>
            <p id="p">
              {t(
                "В одном из пунктов говорилось о перспективах славянских народов, и прежде всего – украинцев, белорусов и русских. Согласно этому плану 75% славянских народов надо было уничтожить, а оставшихся 25% наиболее молодых, трудоспособных – онемечить и превратить в рабов. Использовать бесплатный труд советских людей нацисты собирались непосредственно на оккупированной территории и в самой Германии. Причем, как мы выяснили из Письма группы по использованию рабочей силы оккупированных восточных областей от 13 декабря 1941 года: «Самой важной задачей ближайшего будущего является подготовка всей незанятой рабочей силы (гражданское население и военнопленные) для передачи в Германию». Именно в Германию собирались отправлять для рабского труда на военных объектах «…для удовлетворения нужд немецкой военной промышленности и всего военного хозяйства…ускорить темпы мобилизации русской рабочей силы и её отправку в империю» советскую молодёжь. Сначала гитлеровцы пытались делать это на добровольной основе, надеясь, что люди будут вербоваться. В этом же письме были инструкции «…рабочая сила, годная для использования, перед отправкой должна быть собрана в сборном лагере. Каждый завербованный рабочий должен пройти медицинский осмотр и дезинфекцию». Но такой план быстро провалился и уже в конце марта 1942 года появляется Телеграмма Заукеля рейхскомиссарам оккупированных восточных областей о применении самых суровых мер при вербовке рабочей силы: «Прошу Вас форсировать вербовку …всеми доступными мерами, включая самое суровое применение принципа принудительного труда, с тем, чтобы в кратчайший срок утроить количество завербованных». В феврале 1943 года вышло Распоряжение о принудительной отправке в Германию двух членов семьи, если отобранный ранее скрывался. Начиная с мая месяца 1942 года, в документах появляются сведения о трудовых лагерях на территории Германии и инструкции по содержанию советских людей в них. В Директиве генерального штаба сухопутных войск об ускорении темпов мобилизации русской рабочей силы для Германии от 11 мая 1942 года, в Циркулярном письме концерна «ИГ Фарбениндустрим» от 11 июля 1942 года, в Памятке об обращении с гражданскими иностранными рабочими в Германии от 1 октября 1942 года говорилось:"
              )}
              <p id="p">
                {t(
                  " - «Восточных рабочих содержать в закрытых лагерях, …под постоянной охраной часовых»,"
                )}
              </p>
              <p id="p">
                {t(
                  "- «Восточной рабочей силой считаются те, кто прибыл из районов Украины и Белорусии»,"
                )}
              </p>
              <p id="p">
                {t(
                  "- «…следить, чтобы восточные рабочие не соприкасались с рабочими других национальностей, …отделять их также в умывальных и в уборных,…на работу от бараков до ворот восточных рабочих должна сопровождать охрана»,"
                )}
              </p>
              <p id="p">
                {t("- «Посещение церкви восточным рабочим запрещено»,")}
              </p>
              <p id="p">
                {t(
                  "- «Рабочее время не связано ни с какими ограничениями. Его продолжительность зависит от производственной структуры лагеря и от рода выполняемой работы и устанавливается только самим комендантом лагеря»,"
                )}
              </p>
              <p id="p">
                {t(
                  "- «Все обстоятельства, могущие сократить рабочее время (время, отводимое на еду, перекличка и т.д.) следует урезать до минимума»."
                )}
              </p>
              <p id="p">
                {t(
                  "Служебная полицейская инструкция по охране лагеря, где содержатся русские рабочие, предписывала: «К малейшему проявлению непослушания и недисциплинированности следует относиться жестко и при сопротивлении беспощадно применять оружие». С конца 1943 года в Германии остро стала ощущаться нехватка рабочей силы и с этого момента массово отправлять в Германию оккупанты стали женщин с детьми. Наши собеседники тоже это подтвердили. Из Полоцка в это время эшелон за эшелоном увозили людей в Германию. В городе были постоянные облавы, часто людям не давали возможности взять с собой какие – то вещи и прямо с улицы везли на железнодорожный вокзал. В 1944 – 1945 годах гитлеровцы уже не обращали внимание на возраст, физическое состояние людей, стали вывозить не только молодёжь, но и целые семьи. Руководители концерна «Флик» в Письме инженеру Рису – служащему районного бюро по распределению рабочей силы с возмущением писали: «В одной группе восточных рабочих – 13 человек – подростки от 13 до 15 лет могут работать в шахтах, но в этой партии ещё 13 младенцев….В следующей партии 22 ребёнка в возрасте от 1 года до 14 лет…Они просто заполняют лагерь и на них уходят и без того скудные запасы продовольствия, а помощи от них никакой». Как свидетельствует официальная статистика: из Беларуси были вывезены в Германию 400 тыс. человек, из которых 260 тысяч не вернулись потом домой."
                )}
              </p>
            </p>
            <br />
            <br />
            <br />
            <div class="readMore-bottom"></div>
          </div>
          <label for="read-more-checker" class="read-more-button"></label>
        </div>
      </motion.div>
      <img className="img1" src={IMG1} alt="" />
      <img className="img2" src={IMG2} alt="" />
    </div>
  );
}

export default Genocide;
