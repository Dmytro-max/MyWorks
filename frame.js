function createTable(){
    return `<div class="params">
        <div id="SPECIAL">
            <h3>SPECIAL</h3><a id="stored"></a>
            <div id="Stats">
                <img src="Icons/Strength_icon.webp"><a id="sv"></a><a>Сила</a><button id="s_up">+</button><button
                    id="s_down">-</button>
                <img src="Icons/Perception_icon.webp"><a id="pv"></a><a>Восприятие</a><button id="p_up">+</button><button
                    id="p_down">-</button>
                <img src="Icons/Endurance_icon.webp"><a id="ev"></a><a>Выносливость</a><button id="e_up">+</button><button
                    id="e_down">-</button>
                <img src="Icons/Charisma_icon.webp"><a id="cv"></a><a>Харизма</a><button id="c_up">+</button><button
                    id="c_down">-</button>
                <img src="Icons/Intelligence_icon.webp"><a id="iv"></a><a>Интеллект</a><button id="i_up">+</button><button
                    id="i_down" value="-1">-</button>
                <img src="Icons/Agility_icon.webp"><a id="av"></a><a>Ловкость</a><button id="a_up">+</button><button
                    id="a_down">-</button>
                <img src="Icons/Luck_icon.webp"><a id="lv"></a><a>Удача</a><button id="l_up">+</button><button
                    id="l_down">-</button>
            </div>
        </div>
        <div id="Skills">
            <div id="head">
                <h2 id="bonus">Skills </h2>
                <div id="balance">
                    <a id="max">Skill points on the 50:</a><a id="need">Needed:</a>
                </div>
            </div>
       <div id="Stats">
            <div class="full unchecked"><div id="barter" class="main"><i></i> <img src="Icons/Barter.webp"><a id="barter_value"></a><a>Бартер</a></div>
                  <button id="b_up" value="+1">+</button> <button id="b_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="mw"class="main"><i></i> <img src="Icons/MeleeWeapons.webp"><a id="meleeweapons_value"></a><a>Холодное оружие</a></div>
                 <button id="mw_up" value="+1">+</button> <button id="mw_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="repair" class="main"><i></i> <img src="Icons/Repair.webp"><a id="repair_value"></a><a>Ремонт</a></div>
                 <button id="r_up" value="+1">+</button> <button id="r_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="science"class="main"><i></i> <img src="Icons/Science.webp"><a id="science_value"></a><a>Наука</a></div>
                 <button id="sc_up" value="+1">+</button> <button id="sc_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="guns" class="main"><i></i> <img src="Icons/Guns.webp"><a id="guns_value"></a><a>Оружие</a></div>
                 <button id="g_up" value="+1">+</button> <button id="g_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="sneak" class="main"><i></i> <img src="Icons/Sneak.webp"><a id="sneak_value"></a><a>Скрытность</a></div>
                 <button id="sn_up" value="+1">+</button> <button id="sn_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="speech" class="main"><i></i> <img src="Icons/Speech.webp"><a id="speech_value"></a><a>Красноречие</a></div>
                 <button id="sp_up" value="+1">+</button> <button id="sp_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="unarmed" class="main"><i></i> <img src="Icons/Unarmed.webp"><a id="unarmed_value"></a><a>Без оружия</a></div>
                 <button id="un_up" value="+1">+</button> <button id="un_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="ew" class="main"><i></i> <img src="Icons/EnergyWeapons.webp"><a id="energyweapons_value"></a><a>Энергооружие</a></div>
                 <button id="ew_up" value="+1">+</button> <button id="ew_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="explosives" class="main"><i></i> <img src="Icons/Explosives.webp"><a id="explosives_value"></a><a>Взрывчатка</a></div>
                 <button id="ex_up" value="+1">+</button> <button id="ex_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="lockpick" class="main"><i></i> <img src="Icons/Lockpick.webp"><a id="lockpick_value"></a><a>Взлом</a></div>
                 <button id="loc_up" value="+1">+</button> <button id="loc_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="medicine" class="main"><i></i> <img src="Icons/Medicine.webp"><a id="medicine_value"></a><a>Медицина</a></div>
                 <button id="m_up" value="+1">+</button> <button id="m_down" value="-1">-</button></div>
            <div class="full unchecked"><div id="survival" class="main"><i></i> <img src="Icons/Survival.webp"><a id="survival_value"></a><a>Выживание</a></div>
                 <button id="sur_up" value="+1">+</button> <button id="sur_down" value="-1">-</button></div>
        </div>
        </div>
    <div id="Traits">
        <h2>Особенности</h2>
        <div id="Stats">
           <div id="WW" class="main unchecked"><i></i> <img src="Icons/WildWasteland.webp"><a>Дикая Пустошь</a></div>
           <div id="GN" class="main unchecked"><i></i> <img src="Icons/GoodNatured.webp"></a><a>Добрая душа</a></div>
           <div id="Kamikaze" class="main unchecked"><i></i> <img src="Icons/Kamikaze.webp"></a><a>Камикадзе</a></div>
           <div id="LC" class="main unchecked"><i></i> <img src="Icons/LooseCannon.webp"></a><a>Непредсказуемый</a></div>
           <div id="BTD" class="main unchecked"><i></i> <img src="Icons/BuiltToDestroy.webp"></a><a>Создан разрушать</a></div>
           <div id="TD" class="main unchecked"><i></i> <img src="Icons/TriggerDiscipline.webp"></a><a>Стрельба навскидку</a></div>
           <div id="HH" class="main unchecked"><i></i> <img src="Icons/HeavyHanded.webp"><a>Тяжёлая рука</a></div>
           <div id="FE" class="main unchecked"><i></i> <img src="Icons/FourEyes.webp"><a>Четыре глаза</a></div>
           <div id="SF" class="main unchecked"><i></i> <img src="Icons/SmallFrame.webp"><a>Шустрик</a></div>
           <div id="HB" class="main unchecked"><i></i> <img src="Icons/HotBlooded.webp"><a>Горячая кровь</a></div>
           <div id="Claustrophobia" class="main unchecked"><i></i> <img src="Icons/Claustrophobia.webp"><a>Клаустрофобия</a></div>
           <div id="EB" class="main unchecked"><i></i> <img src="Icons/EarlyBird.webp"><a>Жаворонок</a></div>
           <div id="Skilled" class="main unchecked"><i></i> <img src="Icons/Skilled.webp"><a>Тренированный</a></div>
           <div id="LL" class="main unchecked"><i></i> <img src="Icons/LoganLoophole.webp"><a>Уловка Логана</a></div>
           <div id="Hoarder" class="main unchecked"><i></i> <img src="Icons/Hoarder.webp"><a>Скопидом</a></div>
        </div>
    </div>
    <div id="Description">
        <h2 id="Elem">What</h2>
        <p id="Text"></p>
    </div>`
}