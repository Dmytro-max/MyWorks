class FNVChar{
  constructor(){
    this.Strength={
      name:"Сила",
      Description:"Сила определяет ваши физические возможности.От нее зависит, какой груз вы можете нести, насколько хорошо вы бьетесь в рукопашной, и насколько успешно вы используете тяжелое оружие.",
      value: 5
    }
    this.Perception={
      name:"Восприятие",
      Description:'Высокое восприятие улучшает навыки "Взрывчатка", "Взлом", "Энергооружие", а также ускоряет появление красных полосок на компасе, обозначающих присутствие врагов',
      value: 5
    }
    this.Endurance={
      name:"Виносливость",
      Description:'Выносливость - мера вашей физичкской подготовки. Високая виносливость дает прибавку к здоровью, навикам "Без Оружия" и "Выживание" и устойчивости к вредным воздействиям.',
      value: 5
    }
    this.Charisma={
      name:"Харизма",
      Description:'Высокая харизма улучшает отношение других людей к вам',
      value: 5
    }
    this.Intelligence={
      name:"Интелект",
      Description:'',
      value:5
    }
    this.Agility={
      name:"Ловкость",
      Description:'',
      value: 5
    }
    this.Luck={
      name:"Удача",
      Description:'',
      value:5
    }

    this.inup_level=0
    this.im_ave=0
    this.Bonus=5
    this.skill_b=3
    this.total_b=0

    this.skills_b=[this.bar_bonus=0,
    this.e_w_bonus=0,
    this.exp_bonus=0,
    this.gun_bonus=0,
    this.loc_bonus=0,
    this.med_bonus=0,
    this.m_w_bonus=0,
    this.rep_bonus=0,
    this.sci_bonus=0,
    this.sne_bonus=0,
    this.spe_bonus=0,
    this.sur_bonus=0,
    this.una_bonus=0]
    this.trait_n=2

    this.traits=[this.wildwasteland={
      name: "Дикая пустошь",
      Description:"Дикая пустошь влечёт самых странных и даже безумных обитателей постапокалиптической Америки. Не для слабых духом и не для слишком серьёзных.",
    },
    this.GoodNatured={
      name: "Добрая душа",
      Description:'Обладая доброй душой вы предпочитаите решать вопросы мирным путем. Вы получаете +5 к навыкам "Бартер", "Медицина", "Ремонт", "Наука",  и "Красноречие", но -5 к навыкам "Энергооружие", "Взрывчатка","Оружие", "Холодное оружие" и "Без оружия".',
    },
    this.kamikaze={
      name: "Камикадзе",
      Description:"Вы получаете 10 очков действия но ваша неосторожность приводит к уменьшению порога урона на 2.",
    },
    this.loosecannon={
      name: "Непредсказуемый",
      Description:"От гранат до копий - вы бросаете все на 30 %, но страдает дальность броска,она меньше на 25 %.",
    },
    this.btd={
      name: "Создан разрушать",
      Description:"Если огонь горит в два раза ярче, то он и погаснет в два раза быстрее. Любое оружие получает +3% к шансу критического урона, но снаряжение изнашиваеться 15% быстрее.",
    },
    this.fastshot={
      name: "Стрельба навскидку",
      Description:"Используя обычное и энергетическое оружие вы стреляете на 20% быстрее,но и на 20% менее точно",
    },
    this.triggerdiscipline={
      name: "Техника спуска",
      Description:"Используя обычное и энергетическое оружие вы стреляете на 20% медленнее,но на 20% точнее",
    },
    this.heavyhanded={
      name: "Тяжёлая рука",
      Description:"Атаки холодным оружием и при без оружия наносят больше урона, но меньше критического урона.",
    },
    this.foureyes={
      name: "Четыре глаза",
      Description:"Надев очки любового типа, вы получаете прибавку к восприятию +1, а сняв очки - штраф -1",
    },
    this.smallframe={
      name: "Шустрик",
      Description:"Субтильное телосложение позволяет вам получить +1 к ловкости, но вы легко повреждаете конечности.",
    },
    this.hotblooded={
      name: "Горячая кровь",
      Description:"Когда уровень здоровья падает ниже 50% от нормы, вы получаете +10% к урону, но на 2 единицы снижаются ловкость и восприятие.",
    },
    this.claustrophobia={
      name: "Клаустрофобия",
      Description:"Вы боитесь замкнутых пространств (возможно, потому что там живут мутанты). Вы получаете бонус +1 ко всем параметрам SPECIAL при нахождении на улице, но в помещениях вы получаете штраф -1.",
    },
    this.earlybird={
      name: "Жаворонок",
      Description:"Привет жаворонкам! Вы получаете +2 ко всем атрибутам S.P.E.C.I.A.L. с 6 утра до 12 дня, но с 6 вечера до 6 утра, когда вы не на пике формы, все атрибуты снижаются на 1.",
    },
    this.skilled={
      name: "Тренированный",
      Description:"Вы обладаете умениями, но не опытом. Вы получаете + 5 очков к каждому навыку, но с этого момента зарабатываете опыта на 10 % меньше.",
    },
    this.logansloophole={
      name: "Уловка Логана",
      Description:"Вас никогда не отправят в дом престарелых, вы будете вечно молоды (не выше 30 уровня)! Вам не грозит зависимость от химикатов, и все препараты будут действовать вдвое дольше... но после 30 — прощайте опыт, способности и очки навыков!",
    },
    this.hoarder={
      name: "Скопидом",
      Description:"Вы можете нести на 25 фунтов больше обычного, но все атрибуты S.P.E.C.I.A.L. снижаются на единицу, если в вашем рюкзаке меньше 160 фунтов",
    }]
  }
    skillscount(){
    this.skills=[
    this.Barter={
      name:'Бартер',
      Description:'Навик "Бартер" влияет на то, по каким ценам вы будете покупать и продавать. В общем случае, чем выше ваш навык "Бартера", тем дешевле вам удасться что-то купить.',
      value:  Math.ceil(2+(this.Charisma.value*2)+(this.Luck.value/2))
    },
    this.E_W={
      name:'Энергооружие',
      Description:'Навык Оружия определяет, сколь хорошо вы владеете оружиием, использующим следующие боеприпасы: малые энергетические и микроядерные батареи, электронные заряды и топливо для огнемета',
      value:  Math.ceil(2+(this.Perception.value*2)+(this.Luck.value/2))
    },
    this.Explosives={
      name:'Взрывчатка',
      Description:'Навык "Взрывчатка" определяет, эфективность обезврежывания вами вражеских мин и эфективность использования взрывчатых веществ в том или ином виде (мин, гранат, гранатометов, "Толстяка" и пр.)',
      value:  Math.ceil(2+(this.Perception.value*2)+(this.Luck.value/2))
    },
    this.Guns={
      name:'Оружие',
      Description:'Навык Оружия определяет, насколько эффективно вы можете пользоваться всеми видами оружия, использующего обычные боеприпасы (.22 LR, .357 „Магнум“, 5 мм, 10 мм, .308, 45-70 и пр.)',
      value:  Math.ceil(2+(this.Agility.value*2)+(this.Luck.value/2))
    },
    this.Lockpick={
      name:'Взлом',
      Description:'',
      value:  Math.ceil(2+(this.Perception.value*2)+(this.Luck.value/2))
    },
    this.Medicine={
      name:'Медицина',
      Description:'Навык "Медицина" определяет, сколько очков здоровья вы восстанавливаете при использовании стимуляторов, а также эфективность рад-Х и Антирадина.',
      value:  Math.ceil(2+(this.Intelligence.value*2)+(this.Luck.value/2))
    },
    this.M_W={
      name:'Холодное оружие',
      Description:'',
      value:  Math.ceil(2+(this.Strength.value*2)+(this.Luck.value/2))
    },
    this.Repair={
      name:'Ремонт',
      Description:'Навык "Ремонт" позволяет вам поддерживать оружие и снаряжение в исправном состоянии. Кроме того, навык ремонта позволяет вам создавать предметы и боеприпасы на верстаке для патронов.',
      value:  Math.ceil(2+(this.Intelligence.value*2)+(this.Luck.value/2))
    },
    this.Science={
      name:'Наука',
      Description:'Навык "Наука" представляет общий уровень ваших познаний и используеться в первую очередь для взлома компъютерных терминалов. Этот навык также дает возможность вторичной переработки боеприпасов для энергетического оружия на верстаке.',
      value:  Math.ceil(2+(this.Intelligence.value*2)+(this.Luck.value/2))
    },
    this.Sneak={
      name:'Скрытность',
      Description:'Чем выше навык "Скрытность", тем легче вам спрятаться, что-то украсть или залезть кому-то в карман. При успешной атаке с использованием этого навыка вам автоматически засчитываеться критическое попадание.',
      value:  Math.ceil(2+(this.Agility.value*2)+(this.Luck.value/2))
    },
    this.Speech={
      name:'Красноречие',
      Description:'Навык "Красноречие" определяет насколько вы можете влиять на собеседника во время разгововора, и получать доступ к информации, которая иначе осталась бы для вас тайной.',
      value:  Math.ceil(2+(this.Charisma.value*2)+(this.Luck.value/2))
    },
    this.Surv={
      name:'Выживание',
      Description:'Навык "Выживание" определяет, сколько очков здоровья вы восстанавливаете употребляя пищу и напитки. Он также помогает вам готовить пищу у лагерного костра.',
      value:  Math.ceil(2+(this.Endurance.value*2)+(this.Luck.value/2))
    },
    this.Unarmed={
      name:'Без оружия',
      Description:'Навык "Без оружия" используеться в схватке без оружия или с таким оружием, как обычные или силовые и перчатки вытеснители.',
      value:  Math.ceil(2+(this.Endurance.value*2)+(this.Luck.value/2))
    }]
    this.need_sp=1300
    for(let i=0;i<13;i++){
      this.need_sp-=this.skills_b[i]+this.skills[i].value
      }
    this.derived=[
    this.hp={
      name:"Очки здоровья",
      Description:"Какой урон может перенести ваш персонаж перед тем, как погибнуть. Если уровень здоровья достиг 0 или меньше, вы умерли.",
      value: 95+this.Endurance.value*20
    },
    this.ap={
      name:"Очки действия",
      Description:"Число действий, которые персонаж-игрок может выполнить за один ход во время боя",
      value: 65+this.Agility.value*3
    },
    this.weight={
      name:"Максимальный груз",
      Description:"Максимальный вес снаряжения, который может переносить ваш персонаж, в фунтах.",
      value: 150+this.Strength.value*10
    },
    this.md={
      name:"Урон холодным оружием",
      Description:"Количество дополнительных очков урона, наносимых вашим персонажем в рукопашном бою.",
      value: this.Strength.value/2
    },
    this.dr={
      name:"Сопротивляемость урону",
      Description:"Любой получаемый урон уменьшается на эту цифру. Сопротивляемость урону повышается при ношении брони.",
      value: 0
    },
    this.rr={
      name:"Сопротивляемость радиации",
      Description:"Облучение радиацией снижается на этот процент. Сопротивляемость радиации может быть изменена в зависимости от надетой брони и принятых антирадиационных химикатов.",
      value:(this.Endurance.value-1)*2
    },
    this.pr={
      name:"Сопротивляемость ядам",
      Description:"Уменьшает урон от отравления на этот показатель.",
      value:(this.Endurance.value-1)*5
    },
    this.rs={
      name:"Скорость восстановления",
      Description:"В конце каждого дня ваш персонаж восстановит единицу здоровья за каждое очко показателя Скорости восстановления. Когда вы спите, вы восстанавливаете здоровье каждые шесть часов.",
      value: this.Endurance.value/3
    },
    this.cs={
      name:"Шанс критического удара",
      Description:"Шансы нанести критический удар в бою увеличиваются при повышении этого показателя.",
      value: this.Luck.value,
    }]
 }
}
let char
const fnv=document.querySelector(".FNV")
fnv.addEventListener("click",()=>FNV(Special,Skills,char=new FNVChar));
function Elem_desc(Desc,el){
  Desc.querySelector("#Elem").textContent=el.name
  Desc.querySelector("#Text").textContent=el.Description
}
function Choose_prize(sk,bon,t){
  if (t.classList.contains("checked")){
    if(bon-15>=0){
      t.classList.add("unchecked")
      t.classList.remove("checked")
      char.skill_b+=1
      char.need_sp-=15
      return bon-=15
    }
  }
  else{
  if(100-sk.value+bon>=15){
    if(char.skill_b>0){
    char.skill_b-=1
    char.need_sp+=15
    t.classList.remove("unchecked")
    t.classList.add("checked")
    return bon+=15
  }
}
  return bon
}
}
function Skill_up(sk,bon,it){
  if(sk.value+bon<100){
    char.total_b-=1
    return bon+=1
  }
  return bon
}
function Skill_down(bon,it){
  if(bon>0){
    char.total_b+=1
    return bon-=1
  }
  return bon
}
function Special_up(it){
  if (char.Bonus>=1 && it<=10){
    it+=1
    char.Bonus-=1
  }
  return it
}
function Special_down(it){
  if (it>=1){
    it-=1
    char.Bonus+=1
  }
  return it
}
function Choose_Skilled(char,elem){
  if(elem.classList.contains("unchecked") && char.trait_n>=1){
    elem.classList.remove("unchecked");
    elem.classList.add("checked");
    char.trait_n-=1
    char.bar_bonus+=5,char.rep_bonus+=5,char.sci_bonus+=5,char.spe_bonus+=5,char.med_bonus+=5,char.m_w_bonus+=5,
    char.e_w_bonus+=5,char.exp_bonus+=5,char.gun_bonus+=5,char.loc_bonus+=5,char.sne_bonus+=5,char.sur_bonus+=5,char.una_bonus+=5
  }
  else if(elem.classList.contains("checked")){
    console.log(elem)
    elem.classList.remove("checked");
    elem.classList.add("unchecked");
    char.trait_n+=1
    char.bar_bonus-=5,char.rep_bonus-=5,char.sci_bonus-=5,char.spe_bonus-=5,char.med_bonus-=5,char.m_w_bonus-=5,
    char.e_w_bonus-=5,char.exp_bonus-=5,char.gun_bonus-=5,char.loc_bonus-=5,char.sne_bonus-=5,char.sur_bonus+-5,char.una_bonus-=5
  }
}
function Choose_GN(char,elem){
  if(elem.classList.contains("unchecked") && char.trait_n>=1){
    elem.classList.remove("unchecked");
    elem.classList.add("checked");
    char.trait_n-=1
    char.bar_bonus+=5,char.rep_bonus+=5,char.sci_bonus+=5,char.spe_bonus+=5,char.med_bonus+=5
  }
  else if(elem.classList.contains("checked")){
    elem.classList.remove("checked");
    elem.classList.add("unchecked");
    char.trait_n+=1
    char.bar_bonus-=5,char.rep_bonus-=5,char.sci_bonus-=5,char.spe_bonus-=5,char.med_bonus-=5
  }
}
function Choose_trait(it,elem){
  console.log(elem)
  if(elem.classList.contains("unchecked") && it.trait_n>=1){
    elem.classList.remove("unchecked");
    elem.classList.add("checked");
    it.trait_n-=1
  }
  else if(elem.classList.contains("checked")){
    elem.classList.remove("checked");
    elem.classList.add("unchecked");
    it.trait_n+=1
  }
}
function Special_implant(stat,char,status){
  if (status.classList.contains("unChosen")){
      if (char.Endurance - char.im_ave)
      char.im_ave += 1
      status.classList.add("Chosen")
      status.classList.remove("unChosen")
      return stat += 1
  }
  else{
      char.im_ave-=1
      status.classList.add("unChosen")
      status.classList.remove("Chosen")
      return stat -= 1
  }
}
function Int_implant(stat,char,status){
  if (status.value>0) {
      if (char.Endurance - char.im_ave) {
        if(status.classList.contains("unchecked")){
          char.im_ave += 1
          status.classList.add("checked")
          status.classList.remove("unchecked")
          char.inup_level=status.value
          return stat+=1
        }
          char.inup_level=status.value
          return stat
      }
  }
  else{
      char.im_ave-=1
      char.inup_level=status.value
      status.classList.add("unchecked")
      status.classList.remove("checked")
      return stat-=1

  }
  }
function FNV(stats,skills,it){
  sv.textContent=it.Strength.value
  pv.textContent=it.Perception.value
  ev.textContent=it.Endurance.value
  cv.textContent=it.Charisma.value
  iv.textContent=it.Intelligence.value
  av.textContent=it.Agility.value
  lv.textContent=it.Luck.value
  stored.textContent=it.Endurance.value-it.im_ave
  special.textContent=`Special ${it.Bonus}`
  it.skillscount()
  it.total=Math.ceil(it.inup_level*(10+it.Intelligence.value/2)+(10+(it.Intelligence.value+1)/2)*(49-it.inup_level))
  barter_v.textContent=it.Barter.value+it.bar_bonus
  meleeweapons_v.textContent=it.M_W.value+it.m_w_bonus
  repair_v.textContent=it.Repair.value+it.rep_bonus
  science_v.textContent=it.Science.value +it.sci_bonus
  guns_v.textContent=it.Guns.value +it.gun_bonus
  sneak_v.textContent=it.Sneak.value+it.sne_bonus
  speech_v.textContent=it.Speech.value +it.spe_bonus
  unarmed_v.textContent=it.Unarmed.value+it.una_bonus
  energyweapons_v.textContent=it.E_W.value+it.e_w_bonus
  explosives_v.textContent=it.Explosives.value +it.exp_bonus
  lockpick_v.textContent=it.Lockpick.value+it.loc_bonus
  medicine_v.textContent=it.Medicine.value+it.med_bonus
  survival_v.textContent=it.Surv.value+ it.sur_bonus

  bonus.textContent="Skills"+it.skill_b+"/3"
  max.textContent='Skill points on the 50:'+(it.total)
  need.textContent='Needed:'+it.need_sp

  hp.textContent=it.hp.value
  ap.textContent=it.ap.value
  weight.textContent=it.weight.value
  md.textContent=it.md.value
  dr.textContent=it.dr.value
  rr.textContent=it.rr.value
  pr.textContent=it.pr.value
  cs.textContent=it.cs.value
  event.preventDefault()
}
// let F3Char={
//     Strength:5,
//     Perception:5,
//     Endurance:5,
//     Charisma:5,
//     Intelligence:5,
//     Agility:5,
//     Luck:5,

// }

// let F4Char={
//     Strength: 1,
//     Perception:1,
//     Endurance:1,
//     Charisma:1,
//     Intelligence:1,
//     Agility:1,
//     Luck:1,
// }
// let F1Char={
//     Strength:5,
//     Perception:5,
//     Endurance:5,
//     Charisma:5,
//     Intelligence:5,
//     Agility:5,
//     Luck:5,
    // this.derived=[
    //   this.hp={
    //     name:"Очки здоровья",
    //     Description:"Какой урон может перенести ваш персонаж перед тем, как погибнуть. Если уровень здоровья достиг 0 или меньше, вы умерли.",
    //     value: 15+this.Strength+this.Endurance*2
    //   },
    //   this.ap={
    //     name:"Очки действия",
    //     Description:"Число действий, которые персонаж-игрок может выполнить за один ход во время боя",
    //     value: 5+this.Agility/2
    //   },
    //   this.ac={
    //     name:"Класс брони",
    //     Description:"Изменяет шансы попасть в этого конкретного персонажа.",
    //     value:this.Agility
    //   },
    //   this.mw={
    //     name:"Максимальный груз",
    //     Description:"Максимальный вес снаряжения, который может переносить ваш персонаж, в фунтах.",
    //     value: 25+this.Strength*25
    //   },
    //   this.md={
    //     name:"Урон холодным оружием",
    //     Description:"Количество дополнительных очков урона, наносимых вашим персонажем в рукопашном бою.",
    //     value: (function(){
      // if(this.Strength-5<1){
      //   return 1}
      // else {
      //   return this.Strength-5
      // }})
    //   },
    //   this.dr={
    //     name:"Сопротивляемость урону",
    //     Description:"Любой получаемый урон уменьшается на эту цифру. Сопротивляемость урону повышается при ношении брони.",
    //     value: 0
    //   },
    //   this.rr={
    //     name:"Сопротивляемость радиации",
    //     Description:"Облучение радиацией снижается на этот процент. Сопротивляемость радиации может быть изменена в зависимости от надетой брони и принятых антирадиационных химикатов.",
    //     value:this.Endurance*2
    //   },
    //   this.pr={
    //     name:"Сопротивляемость ядам",
    //     Description:"Уменьшает урон от отравления на этот показатель.",
    //     value:this.Endurance*5
    //   },
    //   this.seq={
    //     name:"Реакция",
    //     Description:"Определяет очерёдность хода персонажа во время боя.",
    //     value:this.Perception*2
    //   },
    //   this.rs={
    //     name:"Скорость восстановления",
    //     Description:"В конце каждого дня ваш персонаж восстановит единицу здоровья за каждое очко показателя Скорости восстановления. Когда вы спите, вы восстанавливаете здоровье каждые шесть часов.",
    //     value: this.Endurance/3
    //   },
    //   this.cs={
    //     name:"Шанс критического удара",
    //     Description:"Шансы нанести критический удар в бою увеличиваются при повышении этого показателя.",
    //     value: this.Luck,
    //   }]
// }
// let F2Char={
//     Strength:5,
//     Perception:5,
//     Endurance:5,
//     Charisma:5,
//     Intelligence:5,
//     Agility:5,
//     Luck:5,
// }