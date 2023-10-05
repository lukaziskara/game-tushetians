// import { useMemo } from "react";

sentences = [
  {
    index: 16,
    sentence: "ბადრევ ლავეჼ ბაბ თაგვიეჼ.",
    translation: "ბავშვმა თოვლის პაპა გააკეთა.",
    words: "ბადრევ@ლავეჼ@პაპა@თაგვიეჼ",
    tWords: "ბავშვმა@თოვლის@პაპა@გააკეთა",
    picture: "სიტუაციები/4",
    theme: "სიტუაციები",
  },
  {
    index: 17,
    sentence: "ყარ ჲეჸეʹნ, ნახ დაჰࣿტატდიეჼ.",
    translation: "წვიმა მოვიდა და ხალხი დაასველა.",
    words: "ყარ@ჲეჸეʹნ@ნახ@დაჰࣿტატდიეჼ",
    tWords: "წვიმა@მოვიდა და@ხალხი@დაასველა",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 18,
    sentence: "დაჴₔოჼ ხი ლაქდალიʹნ, ნახ შუ-შუჲნ დატიჼ.",
    translation: "დიდი წყალი მოვარდა და ხალხი თავ-თავისთვის გაიქცა.",
    words: "დაჴₔოჼ@ხი@ლაქდალიʹნ@ნახ@შუ-შუჲნ@დატიჼ",
    tWords: "დიდი@წყალი@მოვარდა და@ხალხი@თავ-თავისთვის@გაიქცა",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 19,
    sentence: "მოხ ჰ,აჴიʹნ, ნახგო ქადბი-ქოლგი დატდიეჼ.",
    translation: "ქარმა დაუბერა და ადამიანებს ქუდ-ქოლგები მოსტაცა.",
    words: "მოხ@ჰაჴიʹნ@ნახგო@ქადბი-ქოლგი@დატდიეჼ",
    tWords: "ქარმა@დაუბერა და@ადამიანებს@ქუდ-ქოლგები@მოსტაცა",
    picture: "სიტუაციები/5",
    theme: "სიტუაციები",
  },
  {
    index: 20,
    sentence: "სეტყვ ჲოლეʹნ, ნახ სივჰࣿ-დივჰࣿაʹი έოფდალიჼ.",
    translation: "სეტყვა დაიწყო და ხალხი აქეთ-იქით შეეფარა.",
    words: "სეტყვ@ჲოლეʹნ@ნახ@სივჰࣿ-დივჰࣿაʹი@έოფდალიჼ",
    tWords: "სეტყვა@დაიწყო და@ხალხი@აქეთ-იქით@შეეფარა",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 21,
    sentence: "თაჼთევ ჩალ თეჴოდ.",
    translation: "ჭიანჭველა ჩალას მიათრევს.",
    words: "თაჼთევ@ჩალ@თეჴოდ",
    tWords: "ჭიანჭველა(მოქმ.)@ჩალას@მიათრევს",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 22,
    sentence: "თაჼთევ ხენეჼ ტავ დოტოდ.",
    translation: "ჭიანჭველას ხის ტოტი მიაქვს.",
    words: "თაჼთევ@ხენეჼ@ტავ@დოტოდ",
    tWords: "ჭიანჭველა(მოქმ.)@ხის@ტოტი@მიაქვს",
    picture: "სიტუაციები/6",
    theme: "სიტუაციები",
  },
  {
    index: 23,
    sentence: "თაჼთ თეჲლზივ ლელდანუჲც!",
    translation: "ჭიანჭველა ხურჯინით დადენილა აკი!",
    words: "თაჼთ@თეჲლზივ@ლელდანუჲც",
    tWords: "ჭიანჭველა@ხურჯინით@დადენილა აკი!",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 24,
    sentence: "თაჼთივ ჴორ კერჩობ.",
    translation: "ჭიანჭველები ვაშლს აგორებენ.",
    words: "თაჼთივ@ჴორ@კერჩობ",
    tWords: "ჭიანჭველები(მოქმ.)@ვაშლს@აგორებს",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 25,
    sentence: "კნათენ/ვაჰონ ფჰࣿუ დაკბეჸეჼ.",
    translation: "ბიჭს ძაღლი გაახსენდა.",
    words: "კნათენ/ვაჰონ@ფჰࣿუ@დაკბეჸეჼ",
    tWords: "ბიჭს@ძაღლი@გაახსენდა",
    picture: "სიტუაციები/7",
    theme: "სიტუაციები",
  },
  {
    index: 26,
    sentence: "კნათენ/ვაჰონ ჟელრეჼ ქორდაჼ ლეჸ.",
    translation: "ბიჭს ცხვრის შოვნა უნდა.",
    words: "კნათენ/ვაჰონ@ჟელრეჼ@ქორდაჼ@ლეჸ",
    tWords: "ბიჭს@ცხვრის@შოვნა@უნდა",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 27,
    sentence: "კნათ/ვოჰ ჩუჲხ ეცრეხ დაკლივ.",
    translation: "ბიჭი ბატკანის ყიდვას ფიქრობს.",
    words: "კნათ/ვოჰ@ჩუჲხ@ეცრეხ@დაკლივ",
    tWords: "ბიჭი@ბატკანის@ყიდვას@ფიქრობს",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 28,
    sentence: "კნათ/ვოჰ კუჲტ დოჸდაჼ ქჰࣿექლა.",
    translation: "ბიჭი კატის მოსაყვანად ემზადება.",
    words: "კნათ/ვოჰ@კუჲტ@დოჸდაჼ@ქჰࣿექლა",
    tWords: "ბიჭი@კატის@მოსაყვანად@ემზადება",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 29,
    sentence: "ფეშკრევ ფჰࣿარან დაყარ დალ‘იჼ.",
    translation: "ბალღმა ძაღლს საჭმელი მისცა.",
    words: "ფეშკრევ@ფჰࣿარან@დაყარ@დალ‘იჼ",
    tWords: "ბალღმა@ძაღლს@საჭმელი@მისცა",
    picture: "",
    theme: "სიტუაციები",
  },
  {
    index: 30,
    sentence: "ფეშკრევ ფჰࣿუ წურთნადბო.",
    translation: "ბალღი ძაღლს წვრთნის.",
    words: "ფეშკრევ@ფჰࣿუ@წურთნადბო",
    tWords: "ბალღმა@ძაღლს@წვრთნის",
    picture: "სიტუაციები/8",
    theme: "სიტუაციები",
  },
];
words = [
  {
    index: 241,
    word: "„ბადრაჼ",
    translation: "ბავშვების",
  },
  {
    index: 1046,
    word: "„თაჴჩ“",
    translation: "თაფჩა",
  },
  {
    index: 1039,
    word: "„კედლეჼ",
    translation: "კედლის",
  },
  {
    index: 1260,
    word: "„რთველ“",
    translation: "რთველი",
  },
  {
    index: 746,
    word: "„ხილუჼ",
    translation: "ხილის",
  },
  {
    index: 248,
    word: "⁀უმ",
    translation: "სათამაშო",
  },
  {
    index: 780,
    word: "⁀უმაჸ",
    translation: "ყველა",
  },
  {
    index: 541,
    word: "⁀უნახ(შ)ი",
    translation: "რაღაცეები",
  },
  {
    index: 793,
    word: "⁀უნახ(შ)ი",
    translation: "რამის",
  },
  {
    index: 866,
    word: "έაბიკ",
    translation: "კოვზი",
  },
  {
    index: 917,
    word: "έაბიკ",
    translation: "კოვზი",
  },
  {
    index: 751,
    word: "έალიხ",
    translation: "ზამთარში",
  },
  {
    index: 1207,
    word: "έალიხაʹჲ",
    translation: "ზამთარშიც",
  },
  {
    index: 1187,
    word: "έალუჲნ",
    translation: "ზამთარში",
  },
  {
    index: 233,
    word: "έარჭინ",
    translation: "შავი",
  },
  {
    index: 1253,
    word: "έარჭინაʹჲ",
    translation: "შავიც და",
  },
  {
    index: 1257,
    word: "έარჭინაʹჲ",
    translation: "შავიც",
  },
  {
    index: 1107,
    word: "έედაღ",
    translation: "ზის",
  },
  {
    index: 674,
    word: "έეფლა",
    translation: "ფარავს",
  },
  {
    index: 90,
    word: "έოფდალიჼ",
    translation: "შეეფარა",
  },
  {
    index: 1079,
    word: "έუნავ",
    translation: "მეცხვარემ",
  },
  {
    index: 1084,
    word: "έუნავ",
    translation: "მეცხვარე",
  },
  {
    index: 724,
    word: "აბინ",
    translation: "შეკერილი",
  },
  {
    index: 1011,
    word: "აბინ",
    translation: "შეკერილი",
  },
  {
    index: 720,
    word: "აბორ",
    translation: "ჩასაცმელს",
  },
  {
    index: 1233,
    word: "აგას",
    translation: "კრეფს",
  },
  {
    index: 1246,
    word: "აგას",
    translation: "ბებია",
  },
  {
    index: 1134,
    word: "ადგილ",
    translation: "ადგილი",
  },
  {
    index: 1165,
    word: "ადგილ",
    translation: "ადგილი",
  },
  {
    index: 584,
    word: "ადმიეჼ",
    translation: "ადამიანი",
  },
  {
    index: 589,
    word: "ადმიეჼ",
    translation: "ადამიანი",
  },
  {
    index: 468,
    word: "ადმინეგო",
    translation: "ადამიანს",
  },
  {
    index: 499,
    word: "ადმინეგო",
    translation: "ადამიანს",
  },
  {
    index: 195,
    word: "ადმინენ",
    translation: "ადამიანისთვის",
  },
  {
    index: 414,
    word: "ადმინეჼ",
    translation: "ადამიანის",
  },
  {
    index: 546,
    word: "ადმინეჼ",
    translation: "ადამიანის",
  },
  {
    index: 608,
    word: "ადმინეციჼ",
    translation: "ადამიანთან",
  },
  {
    index: 339,
    word: "აზია-აფრიკე",
    translation: "აზია-აფრიკის",
  },
  {
    index: 270,
    word: "ათₔიჼ",
    translation: "ძროხის",
  },
  {
    index: 716,
    word: "აკამზინმაქ",
    translation: "????",
  },
  {
    index: 736,
    word: "აკამზინმაქ",
    translation: "ამათაც",
  },
  {
    index: 733,
    word: "აკმაჲზლობ",
    translation: "საკუდე",
  },
  {
    index: 1034,
    word: "აკოშკ",
    translation: "ფანჯარა",
  },
  {
    index: 25,
    word: "აკუშ",
    translation: "ცვენისას",
  },
  {
    index: 978,
    word: "ალთაბ",
    translation: "თუნგი",
  },
  {
    index: 1278,
    word: "ალკოჰოლ",
    translation: "სპირტის",
  },
  {
    index: 45,
    word: "ამბუჲ",
    translation: "ამბავს",
  },
  {
    index: 639,
    word: "არჭიჼ",
    translation: "შავი",
  },
  {
    index: 269,
    word: "ას",
    translation: "ხბო",
  },
  {
    index: 309,
    word: "ას",
    translation: "ხბო",
  },
  {
    index: 465,
    word: "ასუჲ",
    translation: "ნაწილები",
  },
  {
    index: 1231,
    word: "ატამ",
    translation: "ბებია",
  },
  {
    index: 206,
    word: "აფეჩ",
    translation: "ყვითელი",
  },
  {
    index: 218,
    word: "აფსარნმაქ",
    translation: "მიწაზე",
  },
  {
    index: 216,
    word: "აფსტარნმაქაʹჲ",
    translation: "მიწაზეც",
  },
  {
    index: 329,
    word: "აქლემ",
    translation: "აქლემი",
  },
  {
    index: 363,
    word: "აქლემ",
    translation: "აქლემი",
  },
  {
    index: 698,
    word: "აღმართმაქ",
    translation: "აღმართზე",
  },
  {
    index: 550,
    word: "ახ",
    translation: "ახ",
  },
  {
    index: 276,
    word: "ახკუჲნ",
    translation: "მთხრელი",
  },
  {
    index: 258,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 262,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 350,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 361,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 406,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 438,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 447,
    word: "აჴ",
    translation: "ნადირი",
  },
  {
    index: 455,
    word: "აჴ",
    translation: "ცხოველი",
  },
  {
    index: 180,
    word: "აჴი",
    translation: "ცხოველები",
  },
  {
    index: 742,
    word: "აჴსბილუჲნ",
    translation: "სააღდგომოდ",
  },
  {
    index: 157,
    word: "აჰࣿ",
    translation: "გადა",
  },
  {
    index: 1230,
    word: "აჰࣿბეკიჼ",
    translation: "ჩამოცვივდა",
  },
  {
    index: 695,
    word: "აჰࣿოʹჲ",
    translation: "ქვემოთ და",
  },
  {
    index: 198,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 203,
    word: "ბა",
    translation: "არის და",
  },
  {
    index: 234,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 282,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 308,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 317,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 387,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 402,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 411,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 425,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 433,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 442,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 484,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 487,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 521,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 524,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 527,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 530,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 536,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 595,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 599,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 640,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 661,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 667,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 740,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 786,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 790,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 795,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 799,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 845,
    word: "ბა",
    translation: "სახლის",
  },
  {
    index: 870,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 880,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1022,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1028,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1130,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1137,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1226,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1251,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 1256,
    word: "ბა",
    translation: "არის",
  },
  {
    index: 69,
    word: "ბაბ",
    translation: "ბაბუა",
  },
  {
    index: 1234,
    word: "ბაბოს",
    translation: "პაპა",
  },
  {
    index: 271,
    word: "ბადერ",
    translation: "შვილი",
  },
  {
    index: 294,
    word: "ბადერ",
    translation: "შვილი",
  },
  {
    index: 303,
    word: "ბადერ",
    translation: "შვილი",
  },
  {
    index: 53,
    word: "ბადრევ",
    translation: "ბავშვმა",
  },
  {
    index: 57,
    word: "ბადრევ",
    translation: "ბავშვმა",
  },
  {
    index: 62,
    word: "ბადრევ",
    translation: "ბავშვმა",
  },
  {
    index: 67,
    word: "ბადრევ",
    translation: "ბავშვმა",
  },
  {
    index: 32,
    word: "ბადრენ",
    translation: "ბავშვს",
  },
  {
    index: 22,
    word: "ბადრი",
    translation: "ბავშვები",
  },
  {
    index: 26,
    word: "ბადრი",
    translation: "ბავშვები",
  },
  {
    index: 152,
    word: "ბადრი",
    translation: "ბავშვები",
  },
  {
    index: 149,
    word: "ბადრივ",
    translation: "ბავშვებმა",
  },
  {
    index: 155,
    word: "ბადრივ",
    translation: "ბავშვებმა",
  },
  {
    index: 246,
    word: "ბადრივ",
    translation: "ბავშვების",
  },
  {
    index: 160,
    word: "ბადრინ",
    translation: "ბავშვებს",
  },
  {
    index: 191,
    word: "ბადრინ",
    translation: "ბავშვებს",
  },
  {
    index: 961,
    word: "ბადრინ",
    translation: "ბავშვების",
  },
  {
    index: 1097,
    word: "ბადრინ",
    translation: "ბარტყებს",
  },
  {
    index: 1121,
    word: "ბადრინ",
    translation: "ბავშვებს",
  },
  {
    index: 566,
    word: "ბათₔლა",
    translation: "იწვება",
  },
  {
    index: 1249,
    word: "ბალ",
    translation: "ბალი",
  },
  {
    index: 844,
    word: "ბალკოჼ",
    translation: "აივანი",
  },
  {
    index: 441,
    word: "ბალნარეჼ",
    translation: "ბალნიანი",
  },
  {
    index: 424,
    word: "ბაჼჯგლარენაʹჲ",
    translation: "ბანჯგვლიანი",
  },
  {
    index: 1078,
    word: "ბაჟბაჼ",
    translation: "საბალახოდ",
  },
  {
    index: 1054,
    word: "ბაჟბიეჼ",
    translation: "აძოვა",
  },
  {
    index: 1228,
    word: "ბარ",
    translation: "იყო",
  },
  {
    index: 319,
    word: "ბარგ",
    translation: "ბარგის",
  },
  {
    index: 684,
    word: "ბარგ",
    translation: "ბარგის",
  },
  {
    index: 1150,
    word: "ბარეღდა",
    translation: "ბარში",
  },
  {
    index: 660,
    word: "ბარწინ",
    translation: "მძიმე",
  },
  {
    index: 207,
    word: "ბასიჼ",
    translation: "ფერის",
  },
  {
    index: 436,
    word: "ბასიჼ",
    translation: "წითელი",
  },
  {
    index: 1198,
    word: "ბასიჼ",
    translation: "ფერისა",
  },
  {
    index: 476,
    word: "ბატრი",
    translation: "ტუჩები",
  },
  {
    index: 528,
    word: "ბაქ",
    translation: "პირი",
  },
  {
    index: 687,
    word: "ბაქ",
    translation: "პირი",
  },
  {
    index: 486,
    word: "ბაცუჼ",
    translation: "მოკლე",
  },
  {
    index: 526,
    word: "ბაცუჼ",
    translation: "მოკლე",
  },
  {
    index: 136,
    word: "ბაწრევ",
    translation: "ბაწრით",
  },
  {
    index: 214,
    word: "ბახ",
    translation: "ცხოვრობს",
  },
  {
    index: 219,
    word: "ბახ",
    translation: "ცხოვრობს",
  },
  {
    index: 299,
    word: "ბახ",
    translation: "ცხოვრობს",
  },
  {
    index: 394,
    word: "ბახ",
    translation: "ცხოვრობს",
  },
  {
    index: 483,
    word: "ბახₔეჼ",
    translation: "გრძელი",
  },
  {
    index: 520,
    word: "ბახₔეჼ",
    translation: "გრძელი",
  },
  {
    index: 666,
    word: "ბახₔეჼ",
    translation: "გრძელი",
  },
  {
    index: 202,
    word: "ბახₔენაʹჲ",
    translation: "გრძელიც",
  },
  {
    index: 385,
    word: "ბაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 400,
    word: "ბაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 688,
    word: "ბაჴₔუჲშ",
    translation: "დიდზე",
  },
  {
    index: 340,
    word: "ბედენ",
    translation: "მეტი",
  },
  {
    index: 1101,
    word: "ბენეხ",
    translation: "ბუდეში",
  },
  {
    index: 1067,
    word: "ბეჲლ",
    translation: "უჭირავს",
  },
  {
    index: 1264,
    word: "ბერტყადჲო",
    translation: "ბერტყავენ",
  },
  {
    index: 717,
    word: "ბეფცლა;",
    translation: "იქსოვება;",
  },
  {
    index: 1060,
    word: "ბეფხობ",
    translation: "ცხენს",
  },
  {
    index: 671,
    word: "ბეჯ",
    translation: "თმა",
  },
  {
    index: 37,
    word: "ბეჸჩე",
    translation: "მოსვლისას",
  },
  {
    index: 1077,
    word: "ბიკ",
    translation: "ყავს",
  },
  {
    index: 177,
    word: "ბილბარ",
    translation: "დაბანა",
  },
  {
    index: 429,
    word: "ბიშალათ",
    translation: "წევს ხოლმე",
  },
  {
    index: 932,
    word: "ბოთლ-სტაქნი",
    translation: "ბოთლ-ჭიქები",
  },
  {
    index: 1152,
    word: "ბოლომციჼ",
    translation: "ბოლომდე",
  },
  {
    index: 1024,
    word: "ბოფცინოʹჲ",
    translation: "ფარდაგი",
  },
  {
    index: 1211,
    word: "ბუბუკ",
    translation: "ყვავილის",
  },
  {
    index: 884,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 891,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 896,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 915,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 930,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 944,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 971,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 976,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 981,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 985,
    word: "ბუნაგ",
    translation: "ჭურჭელი",
  },
  {
    index: 784,
    word: "ბუნგი",
    translation: "ჭურჭლის",
  },
  {
    index: 902,
    word: "ბუნგი",
    translation: "ჭურჭლები",
  },
  {
    index: 909,
    word: "ბუნგი",
    translation: "ჭურჭელი",
  },
  {
    index: 936,
    word: "ბუნგი",
    translation: "ჭურჭელი",
  },
  {
    index: 948,
    word: "ბუნგი",
    translation: "ჭურჭელი",
  },
  {
    index: 738,
    word: "ბურთ",
    translation: "ბურთი",
  },
  {
    index: 731,
    word: "ბუყ-მუჲღლ",
    translation: "მოსართავი",
  },
  {
    index: 220,
    word: "ბღაჯ",
    translation: "ზღარბი",
  },
  {
    index: 638,
    word: "ბჵარკ",
    translation: "თვალი",
  },
  {
    index: 466,
    word: "ბჵარკი",
    translation: "თვალები",
  },
  {
    index: 497,
    word: "ბჵარკი",
    translation: "თვალები",
  },
  {
    index: 841,
    word: "ბჵარჩეჸ",
    translation: "ყოველდღიური",
  },
  {
    index: 300,
    word: "ბჵოკ",
    translation: "ვაცი",
  },
  {
    index: 356,
    word: "ბჵორწ",
    translation: "მგელი",
  },
  {
    index: 408,
    word: "ბჵორწ",
    translation: "მგელი",
  },
  {
    index: 315,
    word: "გაბნი",
    translation: "გუბეების",
  },
  {
    index: 818,
    word: "გაბოყრბადჲოშე",
    translation: "გაბოყრებული",
  },
  {
    index: 741,
    word: "გაგაჼ",
    translation: "კვერცხს",
  },
  {
    index: 785,
    word: "გაგდანეჲნ",
    translation: "შესანახადა",
  },
  {
    index: 794,
    word: "გაგდანეჲნ",
    translation: "შესანახადა",
  },
  {
    index: 798,
    word: "გაგდანეჲნ",
    translation: "შესანახად",
  },
  {
    index: 929,
    word: "გაგდუჲნ",
    translation: "შესანახი",
  },
  {
    index: 947,
    word: "გაგდუჲნ",
    translation: "შესანახი",
  },
  {
    index: 1106,
    word: "გაგნინ",
    translation: "კვერცხებზე",
  },
  {
    index: 253,
    word: "გაგოდ",
    translation: "ინახავს",
  },
  {
    index: 321,
    word: "გაგოდ",
    translation: "ინახავს",
  },
  {
    index: 1086,
    word: "გაგოდ",
    translation: "უვლის",
  },
  {
    index: 697,
    word: "გაგუჲ",
    translation: "მუხლები",
  },
  {
    index: 680,
    word: "გაგუჲნ",
    translation: "მუხლებმა",
  },
  {
    index: 239,
    word: "გაზაჼ",
    translation: "თხის",
  },
  {
    index: 440,
    word: "გაზაჼ",
    translation: "თხა",
  },
  {
    index: 293,
    word: "გაზნეჼ",
    translation: "თხის",
  },
  {
    index: 301,
    word: "გაზნეჼ",
    translation: "თხის",
  },
  {
    index: 787,
    word: "გარდერობ",
    translation: "გარდერობი",
  },
  {
    index: 261,
    word: "გეზელ",
    translation: "მშიშარა",
  },
  {
    index: 636,
    word: "გოგრიჼ",
    translation: "მრგვალი",
  },
  {
    index: 217,
    word: "გომბეშ",
    translation: "გომბეშო",
  },
  {
    index: 1140,
    word: "გორნაკ",
    translation: "გორა",
  },
  {
    index: 1141,
    word: "გორნაკ",
    translation: "გორა",
  },
  {
    index: 174,
    word: "გოჩნადბო",
    translation: "ეფერება",
  },
  {
    index: 42,
    word: "გოჩნადო",
    translation: "ეფერება",
  },
  {
    index: 1074,
    word: "გოჩნადო",
    translation: "ეფერება",
  },
  {
    index: 1268,
    word: "გრილბადუჲნ",
    translation: "გამაგრილებელი",
  },
  {
    index: 749,
    word: "გუგრ",
    translation: "გოგრას",
  },
  {
    index: 60,
    word: "გუჼდ",
    translation: "გუნდა",
  },
  {
    index: 150,
    word: "გუნდაობ",
    translation: "გუნდაობას",
  },
  {
    index: 1103,
    word: "გუჲ",
    translation: "ხედავთ",
  },
  {
    index: 759,
    word: "გუჲზნაყ",
    translation: "გოზინაყი",
  },
  {
    index: 183,
    word: "და",
    translation: "არის",
  },
  {
    index: 186,
    word: "და",
    translation: "არის",
  },
  {
    index: 208,
    word: "და",
    translation: "არის",
  },
  {
    index: 222,
    word: "და",
    translation: "არის",
  },
  {
    index: 229,
    word: "და",
    translation: "არის",
  },
  {
    index: 238,
    word: "და",
    translation: "არის",
  },
  {
    index: 249,
    word: "და",
    translation: "რამაა",
  },
  {
    index: 259,
    word: "და",
    translation: "არის",
  },
  {
    index: 263,
    word: "და",
    translation: "არის",
  },
  {
    index: 272,
    word: "და",
    translation: "არის",
  },
  {
    index: 278,
    word: "და",
    translation: "არის",
  },
  {
    index: 295,
    word: "და",
    translation: "არის",
  },
  {
    index: 304,
    word: "და",
    translation: "არის",
  },
  {
    index: 311,
    word: "და",
    translation: "არის და",
  },
  {
    index: 336,
    word: "და",
    translation: "არის",
  },
  {
    index: 347,
    word: "და",
    translation: "არის",
  },
  {
    index: 351,
    word: "და",
    translation: "არის",
  },
  {
    index: 355,
    word: "და",
    translation: "არის",
  },
  {
    index: 362,
    word: "და",
    translation: "არის",
  },
  {
    index: 366,
    word: "და",
    translation: "არის",
  },
  {
    index: 374,
    word: "და",
    translation: "არის",
  },
  {
    index: 377,
    word: "და",
    translation: "არის",
  },
  {
    index: 407,
    word: "და",
    translation: "არის",
  },
  {
    index: 417,
    word: "და",
    translation: "არის",
  },
  {
    index: 421,
    word: "და",
    translation: "არის",
  },
  {
    index: 439,
    word: "და",
    translation: "არის",
  },
  {
    index: 448,
    word: "და",
    translation: "არის",
  },
  {
    index: 456,
    word: "და",
    translation: "არის",
  },
  {
    index: 463,
    word: "და",
    translation: "არის",
  },
  {
    index: 475,
    word: "და",
    translation: "არის",
  },
  {
    index: 481,
    word: "და",
    translation: "არის",
  },
  {
    index: 518,
    word: "და",
    translation: "არის",
  },
  {
    index: 539,
    word: "და",
    translation: "არის",
  },
  {
    index: 545,
    word: "და",
    translation: "არის",
  },
  {
    index: 553,
    word: "და",
    translation: "არის",
  },
  {
    index: 570,
    word: "და",
    translation: "არის",
  },
  {
    index: 574,
    word: "და",
    translation: "არის",
  },
  {
    index: 613,
    word: "და",
    translation: "არის",
  },
  {
    index: 623,
    word: "და",
    translation: "არის",
  },
  {
    index: 627,
    word: "და",
    translation: "არის",
  },
  {
    index: 647,
    word: "და",
    translation: "არის",
  },
  {
    index: 651,
    word: "და",
    translation: "და.",
  },
  {
    index: 654,
    word: "და",
    translation: "არის",
  },
  {
    index: 658,
    word: "და",
    translation: "არის",
  },
  {
    index: 726,
    word: "და",
    translation: "არის",
  },
  {
    index: 729,
    word: "და",
    translation: "არის",
  },
  {
    index: 779,
    word: "და",
    translation: "არსებობს და",
  },
  {
    index: 865,
    word: "და",
    translation: "არის",
  },
  {
    index: 892,
    word: "და",
    translation: "არის",
  },
  {
    index: 903,
    word: "და",
    translation: "არის",
  },
  {
    index: 910,
    word: "და",
    translation: "არის",
  },
  {
    index: 916,
    word: "და",
    translation: "არის",
  },
  {
    index: 931,
    word: "და",
    translation: "არის",
  },
  {
    index: 937,
    word: "და",
    translation: "არის",
  },
  {
    index: 949,
    word: "და",
    translation: "არის",
  },
  {
    index: 972,
    word: "და",
    translation: "არის",
  },
  {
    index: 977,
    word: "და",
    translation: "არის",
  },
  {
    index: 982,
    word: "და",
    translation: "არის",
  },
  {
    index: 986,
    word: "და",
    translation: "არის",
  },
  {
    index: 991,
    word: "და",
    translation: "არის",
  },
  {
    index: 995,
    word: "და",
    translation: "არის",
  },
  {
    index: 999,
    word: "და",
    translation: "არის",
  },
  {
    index: 1002,
    word: "და",
    translation: "არის",
  },
  {
    index: 1013,
    word: "და",
    translation: "არის",
  },
  {
    index: 1115,
    word: "და",
    translation: "არის",
  },
  {
    index: 1126,
    word: "და",
    translation: "დიდებისთვისაა",
  },
  {
    index: 1172,
    word: "და",
    translation: "არის",
  },
  {
    index: 1195,
    word: "და",
    translation: "და.",
  },
  {
    index: 1199,
    word: "და",
    translation: "არის",
  },
  {
    index: 1203,
    word: "და",
    translation: "არის",
  },
  {
    index: 1218,
    word: "და",
    translation: "არის",
  },
  {
    index: 1270,
    word: "და",
    translation: "არის",
  },
  {
    index: 1275,
    word: "და",
    translation: "არის",
  },
  {
    index: 1281,
    word: "და",
    translation: "არის",
  },
  {
    index: 1285,
    word: "და",
    translation: "არის",
  },
  {
    index: 1273,
    word: "დაგუშ",
    translation: "მქონე",
  },
  {
    index: 346,
    word: "დად-პატროჼ",
    translation: "პატრონი",
  },
  {
    index: 360,
    word: "დავდუჲნ",
    translation: "მხოცავი",
  },
  {
    index: 561,
    word: "დათₔლა",
    translation: "ცხვება",
  },
  {
    index: 1156,
    word: "დათხ",
    translation: "მიეწოდება",
  },
  {
    index: 162,
    word: "დათხარ",
    translation: "მოსვლისას",
  },
  {
    index: 21,
    word: "დათხეშ",
    translation: "მოსვლისას",
  },
  {
    index: 756,
    word: "დათხურ",
    translation: "დათხური",
  },
  {
    index: 106,
    word: "დაკბეჸეჼ",
    translation: "გაახსენდა",
  },
  {
    index: 114,
    word: "დაკლივ",
    translation: "ფიქრობს",
  },
  {
    index: 1212,
    word: "დაკრეჼ",
    translation: "გულიდან",
  },
  {
    index: 852,
    word: "დალ‘ანაჲნ",
    translation: "ასასვლელად",
  },
  {
    index: 122,
    word: "დალ‘იჼ",
    translation: "მისცა",
  },
  {
    index: 129,
    word: "დალ‘იჼ",
    translation: "მისცა",
  },
  {
    index: 994,
    word: "დანიშნულებეჼ",
    translation: "დანიშნულებისა",
  },
  {
    index: 998,
    word: "დანიშნულებეჼ",
    translation: "დანიშნულებისა",
  },
  {
    index: 13,
    word: "დაჟარ",
    translation: "ბალახი",
  },
  {
    index: 1070,
    word: "დაჟარ",
    translation: "ბალახი",
  },
  {
    index: 1215,
    word: "დაჟარ",
    translation: "ბალახი",
  },
  {
    index: 1094,
    word: "დაჟდაჼ",
    translation: "საბალახოდ",
  },
  {
    index: 1220,
    word: "დაჟრივაʹჲ",
    translation: "ბალახით",
  },
  {
    index: 327,
    word: "დარ",
    translation: "იყო",
  },
  {
    index: 885,
    word: "დარ",
    translation: "იყო",
  },
  {
    index: 897,
    word: "დარ",
    translation: "იყო",
  },
  {
    index: 85,
    word: "დატდიეჼ",
    translation: "მოსტაცა",
  },
  {
    index: 80,
    word: "დატიჼ",
    translation: "გაიქცა",
  },
  {
    index: 657,
    word: "დაფხეჼ",
    translation: "ცხელი",
  },
  {
    index: 869,
    word: "დაყანაჲნ",
    translation: "საჭმელადა",
  },
  {
    index: 121,
    word: "დაყარ",
    translation: "საჭმელი",
  },
  {
    index: 140,
    word: "დაყარ",
    translation: "საჭმელს",
  },
  {
    index: 166,
    word: "დაყარ",
    translation: "საჭმელს",
  },
  {
    index: 544,
    word: "დაყარ",
    translation: "საჭმელი",
  },
  {
    index: 868,
    word: "დაყარ",
    translation: "საჭმლის",
  },
  {
    index: 874,
    word: "დაყარ",
    translation: "საჭმელი",
  },
  {
    index: 906,
    word: "დაყარ",
    translation: "საჭმლის",
  },
  {
    index: 919,
    word: "დაყარ",
    translation: "საჭმლის",
  },
  {
    index: 925,
    word: "დაყარ",
    translation: "საკვების",
  },
  {
    index: 1098,
    word: "დაყარ",
    translation: "საჭმელი",
  },
  {
    index: 1217,
    word: "დაყარ/დაყურ",
    translation: "საკვები",
  },
  {
    index: 597,
    word: "დაყიშ",
    translation: "ხმელი",
  },
  {
    index: 920,
    word: "დაყოშ",
    translation: "საჭმელად",
  },
  {
    index: 926,
    word: "დაყოშ",
    translation: "ჭამისას",
  },
  {
    index: 900,
    word: "დაყრი",
    translation: "საჭმლის",
  },
  {
    index: 1175,
    word: "დაყრი",
    translation: "საჭმელებს",
  },
  {
    index: 573,
    word: "დაყუჲნ",
    translation: "საჭმელი",
  },
  {
    index: 1279,
    word: "დაშ",
    translation: "მქონე",
  },
  {
    index: 705,
    word: "დაჩო",
    translation: "მხოლოდ",
  },
  {
    index: 1164,
    word: "დაწუჲნ",
    translation: "მისაბმელი",
  },
  {
    index: 189,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 212,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 288,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 291,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 343,
    word: "დახ",
    translation: "ცხოვრობენ",
  },
  {
    index: 602,
    word: "დახ",
    translation: "ცხოვრობენ",
  },
  {
    index: 609,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 768,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 775,
    word: "დახ",
    translation: "ცხოვრობს და",
  },
  {
    index: 782,
    word: "დახ",
    translation: "ცხოვრობს",
  },
  {
    index: 772,
    word: "ࣿდახ",
    translation: "ცხოვრობს",
  },
  {
    index: 586,
    word: "დახₔეჩ",
    translation: "გრძელ",
  },
  {
    index: 879,
    word: "დახანაჲნ",
    translation: "ამოსაღებადა",
  },
  {
    index: 257,
    word: "დახინ",
    translation: "მცხოვრები",
  },
  {
    index: 386,
    word: "დახკ",
    translation: "თაგვი",
  },
  {
    index: 392,
    word: "დახკ",
    translation: "თაგვი",
  },
  {
    index: 401,
    word: "დახკ",
    translation: "თაგვი",
  },
  {
    index: 251,
    word: "დახკერჩ",
    translation: "თაგვების",
  },
  {
    index: 1102,
    word: "დახკუჲც",
    translation: "ბუდობენ",
  },
  {
    index: 875,
    word: "დახლა",
    translation: "ამოიღება",
  },
  {
    index: 179,
    word: "დახნ",
    translation: "საქონელი",
  },
  {
    index: 228,
    word: "დახნ",
    translation: "საქონელი",
  },
  {
    index: 237,
    word: "დახნ",
    translation: "საქონელი",
  },
  {
    index: 277,
    word: "დახნ",
    translation: "საქონელი",
  },
  {
    index: 359,
    word: "დახნ",
    translation: "საქონლის",
  },
  {
    index: 373,
    word: "დახნ",
    translation: "საქონელი",
  },
  {
    index: 462,
    word: "დახნ",
    translation: "საქონელი",
  },
  {
    index: 1216,
    word: "დახნოჼ",
    translation: "საქონლის",
  },
  {
    index: 1125,
    word: "დაჴₔეჩუჲშნეჲნ",
    translation: "მეტად",
  },
  {
    index: 64,
    word: "დაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 75,
    word: "დაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 419,
    word: "დაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 480,
    word: "დაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 517,
    word: "დაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 284,
    word: "დაჴₔუჲჩ",
    translation: "დიდ",
  },
  {
    index: 678,
    word: "დაჰ",
    translation: "უნდა",
  },
  {
    index: 811,
    word: "დაჰࣿ",
    translation: "შრატის",
  },
  {
    index: 1201,
    word: "დაჰࣿკორტუჲნ",
    translation: "მოსაბეზრებელი",
  },
  {
    index: 1005,
    word: "დაჰࣿოტინ",
    translation: "დაფენილი",
  },
  {
    index: 74,
    word: "დაჰࣿტატდიეჼ",
    translation: "დაასველა",
  },
  {
    index: 1148,
    word: "დებლლა",
    translation: "იწყება",
  },
  {
    index: 890,
    word: "დეთₔუჲნ",
    translation: "გადასასხმელი",
  },
  {
    index: 769,
    word: "დელფიჼ",
    translation: "დელფინი",
  },
  {
    index: 543,
    word: "დესერტეჼ",
    translation: "დესერტის",
  },
  {
    index: 1283,
    word: "დესერტეჼ",
    translation: "დესერტის",
  },
  {
    index: 737,
    word: "დეფცორ",
    translation: "ქსოვდნენ",
  },
  {
    index: 805,
    word: "დეფხდოშ",
    translation: "შედეგად",
  },
  {
    index: 980,
    word: "დეფხდუჲნ",
    translation: "გასაცხელებელი",
  },
  {
    index: 232,
    word: "დეღევ",
    translation: "ტანზე",
  },
  {
    index: 445,
    word: "დეღეჼ",
    translation: "ლამაზი",
  },
  {
    index: 464,
    word: "დეღეჼ",
    translation: "სხეულის",
  },
  {
    index: 171,
    word: "დეყₔოჲ",
    translation: "უსინჯავს",
  },
  {
    index: 193,
    word: "დეწ",
    translation: "უყვართ",
  },
  {
    index: 1122,
    word: "დეწ",
    translation: "უყვართ",
  },
  {
    index: 316,
    word: "დეწრიკ",
    translation: "მოყვარული",
  },
  {
    index: 861,
    word: "დეხკლა",
    translation: "კეთდება",
  },
  {
    index: 1071,
    word: "დეჸეჼ",
    translation: "მოუტანა",
  },
  {
    index: 1099,
    word: "დეჸეჼ",
    translation: "მოუტანეს",
  },
  {
    index: 984,
    word: "დითₔუჲნ",
    translation: "სარეცხი",
  },
  {
    index: 569,
    word: "დითხ",
    translation: "ხორცი",
  },
  {
    index: 579,
    word: "დითხოჼ",
    translation: "ხორცისგან",
  },
  {
    index: 615,
    word: "დითხოჼ",
    translation: "ხორცის",
  },
  {
    index: 1093,
    word: "დიკ",
    translation: "მიჰყავს",
  },
  {
    index: 1083,
    word: "დიკეჼ",
    translation: "სიტყვა",
  },
  {
    index: 231,
    word: "დიჼჩ",
    translation: "მთელ",
  },
  {
    index: 763,
    word: "დისჩე",
    translation: "დარჩება და",
  },
  {
    index: 598,
    word: "დიფშანეჲნ",
    translation: "დასაწოლი",
  },
  {
    index: 151,
    word: "დო",
    translation: "აკეთებენ",
  },
  {
    index: 243,
    word: "დო",
    translation: "ეძახიან",
  },
  {
    index: 748,
    word: "დო",
    translation: "ეძახიან",
  },
  {
    index: 547,
    word: "დოკ",
    translation: "გული",
  },
  {
    index: 556,
    word: "დოკარენაʹჲ",
    translation: "გულიანი და",
  },
  {
    index: 323,
    word: "დონ",
    translation: "ცხენი",
  },
  {
    index: 367,
    word: "დოჼ",
    translation: "ცხენი",
  },
  {
    index: 1053,
    word: "დოჼ",
    translation: "ცხენი",
  },
  {
    index: 1059,
    word: "დოჼ",
    translation: "კაცი",
  },
  {
    index: 1056,
    word: "დონაʹჲ",
    translation: "ცხენი",
  },
  {
    index: 732,
    word: "დონეჼ",
    translation: "და",
  },
  {
    index: 97,
    word: "დოტოდ",
    translation: "მიაქვს",
  },
  {
    index: 117,
    word: "დოჸდაჼ",
    translation: "მოსაყვანად",
  },
  {
    index: 676,
    word: "დროჰࣿ",
    translation: "დროულად",
  },
  {
    index: 1062,
    word: "დუჲ",
    translation: "კაცები",
  },
  {
    index: 1173,
    word: "დურმუსტენაʹჲ",
    translation: "მჟაუნასა და",
  },
  {
    index: 23,
    word: "დუღ-დაკალათ",
    translation: "ჟივილ-ხივილობენ ხოლმე",
  },
  {
    index: 459,
    word: "დუჴ",
    translation: "ბევრი",
  },
  {
    index: 629,
    word: "დუჴიჩ",
    translation: "ბევრი",
  },
  {
    index: 829,
    word: "დუჴნაირ",
    translation: "ბევრნაერი",
  },
  {
    index: 592,
    word: "დუჴნაჲრეჼ",
    translation: "მრავალნაირი",
  },
  {
    index: 778,
    word: "დუჴნეჲრეჼ",
    translation: "მრავალნაირი",
  },
  {
    index: 1001,
    word: "დუჴსეჲრთლილნი",
    translation: "მრავალსართულიანი",
  },
  {
    index: 644,
    word: "ე",
    translation: "ეს",
  },
  {
    index: 648,
    word: "ე",
    translation: "ე",
  },
  {
    index: 655,
    word: "ე",
    translation: "ეს",
  },
  {
    index: 735,
    word: "ებიაʹჲ",
    translation: "აღკაზმულობაა;",
  },
  {
    index: 1089,
    word: "ებწ",
    translation: "წველიან",
  },
  {
    index: 827,
    word: "ეგბოშ",
    translation: "გარევით",
  },
  {
    index: 934,
    word: "ეთₔდოჩ",
    translation: "დასადგმელი",
  },
  {
    index: 908,
    word: "ეთₔდუჲნ",
    translation: "დასადგმელი",
  },
  {
    index: 970,
    word: "ეთₔდუჲნ",
    translation: "დასაყენებელი",
  },
  {
    index: 383,
    word: "ეთₔლა",
    translation: "დგება",
  },
  {
    index: 857,
    word: "ეთₔლა",
    translation: "კეთდება",
  },
  {
    index: 1185,
    word: "ეთₔლა",
    translation: "ყენდება",
  },
  {
    index: 914,
    word: "ეთₔჲუჲნ",
    translation: "დასადგმელი(მისატანი)",
  },
  {
    index: 943,
    word: "ეთდუჲნ",
    translation: "მისატანი",
  },
  {
    index: 221,
    word: "ეკლარეჼ",
    translation: "ეკლიანი",
  },
  {
    index: 753,
    word: "ერკვერცხ",
    translation: "ერბოკვერცხი",
  },
  {
    index: 1016,
    word: "ეტუჲნ",
    translation: "დასაგები",
  },
  {
    index: 1239,
    word: "ეციჼ",
    translation: "იყიდა",
  },
  {
    index: 113,
    word: "ეცრეხ",
    translation: "ყიდვას",
  },
  {
    index: 286,
    word: "ეჴₔიჼჩ",
    translation: "ციცაბო",
  },
  {
    index: 1182,
    word: "ეჴუჲჼ",
    translation: "მისი",
  },
  {
    index: 911,
    word: "ვაზ",
    translation: "ვაზა",
  },
  {
    index: 683,
    word: "ვარაჼგი",
    translation: "მხრები",
  },
  {
    index: 706,
    word: "ვასერგო",
    translation: "კაცებს",
  },
  {
    index: 1064,
    word: "ვასერვ",
    translation: "აჭენებენ",
  },
  {
    index: 1057,
    word: "ვაშ(ბ)ინ",
    translation: "ერთმანეთს",
  },
  {
    index: 973,
    word: "ვედრ",
    translation: "სათლი",
  },
  {
    index: 649,
    word: "ვეჼ",
    translation: "ვეჼ",
  },
  {
    index: 942,
    word: "ვეჼ",
    translation: "სუფრაზე",
  },
  {
    index: 946,
    word: "ვეჼ",
    translation: "ღვინის",
  },
  {
    index: 1271,
    word: "ვეჼ",
    translation: "ღვინო",
  },
  {
    index: 928,
    word: "ვეჼ-არაყ",
    translation: "ღვინო-არაყის",
  },
  {
    index: 935,
    word: "ვენ-არაყეჼ",
    translation: "ღვინო-არყის",
  },
  {
    index: 181,
    word: "ვეფხ",
    translation: "ვეფხვი",
  },
  {
    index: 255,
    word: "ვეფხ",
    translation: "ვეფხვი",
  },
  {
    index: 418,
    word: "ვეფხ",
    translation: "ვეფხვი",
  },
  {
    index: 766,
    word: "ვეშაპ",
    translation: "ვეშაპი",
  },
  {
    index: 49,
    word: "ვილ",
    translation: "იცინის",
  },
  {
    index: 318,
    word: "ვირ",
    translation: "ვირს",
  },
  {
    index: 375,
    word: "ვირ",
    translation: "ვირი",
  },
  {
    index: 384,
    word: "ვირთაგვაჸ",
    translation: "ვირთაგვა",
  },
  {
    index: 182,
    word: "ზოლარეჼ",
    translation: "ზოლიანი",
  },
  {
    index: 380,
    word: "ზორაჲშ",
    translation: "ძალიან",
  },
  {
    index: 389,
    word: "ზორაჲშ",
    translation: "ძალიან",
  },
  {
    index: 404,
    word: "ზორაჲშ",
    translation: "ძალიან",
  },
  {
    index: 409,
    word: "ზორაჲშ",
    translation: "ძალიან",
  },
  {
    index: 1170,
    word: "ზორაჲშ",
    translation: "ძალიან",
  },
  {
    index: 192,
    word: "ზორეჲშ",
    translation: "ძალიან",
  },
  {
    index: 1158,
    word: "ზღვაჲლო",
    translation: "ზღვაში",
  },
  {
    index: 776,
    word: "ზღვეჲლოʹჰࣿ",
    translation: "ზღვაშიც",
  },
  {
    index: 771,
    word: "ზღვეჲჰ",
    translation: "ზღვაში",
  },
  {
    index: 1049,
    word: "თაგდიეჼჩ",
    translation: "გაკეთებულ",
  },
  {
    index: 70,
    word: "თაგვიეჼ",
    translation: "გააკეთა",
  },
  {
    index: 61,
    word: "თაგჲიეჼ",
    translation: "გააკეთა",
  },
  {
    index: 816,
    word: "თაგჲიენ",
    translation: "გაკეთებული",
  },
  {
    index: 98,
    word: "თაჼთ",
    translation: "ჭიანჭველა",
  },
  {
    index: 91,
    word: "თაჼთევ",
    translation: "ჭიანჭველამ",
  },
  {
    index: 94,
    word: "თაჼთევ",
    translation: "ჭიანჭველამ",
  },
  {
    index: 101,
    word: "თაჼთევ",
    translation: "ჭიანჭველამ",
  },
  {
    index: 552,
    word: "თარ‘ლ‘ენ",
    translation: "მსგავი",
  },
  {
    index: 410,
    word: "თარ’ლ‘ენ",
    translation: "მჰგავსი",
  },
  {
    index: 1050,
    word: "თაროხ",
    translation: "თაროს",
  },
  {
    index: 1000,
    word: "თარუჲ",
    translation: "თაროები",
  },
  {
    index: 268,
    word: "თეგლა",
    translation: "კეთდება",
  },
  {
    index: 580,
    word: "თეგლა",
    translation: "კეთდება",
  },
  {
    index: 755,
    word: "თეგლა",
    translation: "მზადდება",
  },
  {
    index: 758,
    word: "თეგლა",
    translation: "მზადდება",
  },
  {
    index: 761,
    word: "თეგლა",
    translation: "მზადდება",
  },
  {
    index: 806,
    word: "თეგლა",
    translation: "მზადდება",
  },
  {
    index: 808,
    word: "თეგლა",
    translation: "მზადდება",
  },
  {
    index: 814,
    word: "თეგლა",
    translation: "ახლად",
  },
  {
    index: 823,
    word: "თეგლა",
    translation: "რძე(ფხე)",
  },
  {
    index: 834,
    word: "თეგლა",
    translation: "მზადდება",
  },
  {
    index: 853,
    word: "თეგლა",
    translation: "კეთდება",
  },
  {
    index: 967,
    word: "თეგლა",
    translation: "კეთდება",
  },
  {
    index: 1004,
    word: "თეგლა",
    translation: "კეთდება",
  },
  {
    index: 1038,
    word: "თეგლა",
    translation: "კეთდება",
  },
  {
    index: 594,
    word: "თეგჲაჼ",
    translation: "საკეთებლადა",
  },
  {
    index: 952,
    word: "თეგჲუჲნ",
    translation: "გასაკეთებელი",
  },
  {
    index: 4,
    word: "თელ‘ანეჲნ",
    translation: "საჭმელად",
  },
  {
    index: 10,
    word: "თელ‘იჼ",
    translation: "აჭამა",
  },
  {
    index: 1248,
    word: "თელ‘ოთვაჲნ",
    translation: "გვაჭმევს",
  },
  {
    index: 461,
    word: "თელ‘უჲნ",
    translation: "მომცემი",
  },
  {
    index: 17,
    word: "თელაჼ",
    translation: "საჭმელად",
  },
  {
    index: 727,
    word: "თეჲლზი",
    translation: "ხურჯინი",
  },
  {
    index: 99,
    word: "თეჲლზივ",
    translation: "ხურჯინით",
  },
  {
    index: 679,
    word: "თეტაჼ",
    translation: "მოიჭრა",
  },
  {
    index: 864,
    word: "თეტანაჲნ",
    translation: "საჭრელადა",
  },
  {
    index: 1009,
    word: "თექ",
    translation: "თექა",
  },
  {
    index: 93,
    word: "თეჴოდ",
    translation: "მიათრევს",
  },
  {
    index: 549,
    word: "თიტეჼჩ",
    translation: "გაჭრილი",
  },
  {
    index: 395,
    word: "თრითიჼ",
    translation: "თრითინა",
  },
  {
    index: 893,
    word: "თუჼგ",
    translation: "თუნგი",
  },
  {
    index: 52,
    word: "თურქადბო",
    translation: "ტუქსავს",
  },
  {
    index: 1262,
    word: "კაკალ",
    translation: "კაკალს",
  },
  {
    index: 966,
    word: "კაკაუჲჼ",
    translation: "კაკაოსგან",
  },
  {
    index: 800,
    word: "კალტაʹჲ",
    translation: "კალტი",
  },
  {
    index: 757,
    word: "კალტოჼ",
    translation: "კალტით",
  },
  {
    index: 557,
    word: "კალტუნაʹჲ",
    translation: "ხაჭოიანი და",
  },
  {
    index: 230,
    word: "კამბეჩ",
    translation: "კამეჩი",
  },
  {
    index: 378,
    word: "კამბეჩ",
    translation: "კამეჩის",
  },
  {
    index: 426,
    word: "კამბეჩ",
    translation: "კამეჩი",
  },
  {
    index: 960,
    word: "კამფეტკ",
    translation: "კამფეტი",
  },
  {
    index: 1238,
    word: "კამფეტკი",
    translation: "კამფეტი",
  },
  {
    index: 423,
    word: "კანჭარენაʹჲ",
    translation: "კანჭიანი და",
  },
  {
    index: 1197,
    word: "კაპრაშ",
    translation: "ყვითელი",
  },
  {
    index: 390,
    word: "კატ(ე)კოშ",
    translation: "ნელა",
  },
  {
    index: 365,
    word: "კაჩარეჼ",
    translation: "ფეხებიანი",
  },
  {
    index: 1277,
    word: "კაძიკ",
    translation: "ცოტა",
  },
  {
    index: 244,
    word: "კაწ",
    translation: "ლეკვი",
  },
  {
    index: 44,
    word: "კაწეგ",
    translation: "ცოტა",
  },
  {
    index: 503,
    word: "კაწკანი",
    translation: "პატარები",
  },
  {
    index: 509,
    word: "კაწკანი",
    translation: "პატარები",
  },
  {
    index: 633,
    word: "კაწკანი",
    translation: "პატარები",
  },
  {
    index: 988,
    word: "კაწკოჼ",
    translation: "პატარა",
  },
  {
    index: 1143,
    word: "კაწკოჼ",
    translation: "პატარა",
  },
  {
    index: 1047,
    word: "კაწკუჲჩ",
    translation: "კედლის",
  },
  {
    index: 622,
    word: "კაწკუხ",
    translation: "პატარა",
  },
  {
    index: 1032,
    word: "კედელ",
    translation: "კედელი",
  },
  {
    index: 1041,
    word: "კედელ",
    translation: "კედლის",
  },
  {
    index: 1025,
    word: "კედლეხ",
    translation: "მოქსოვილი",
  },
  {
    index: 103,
    word: "კერჩობ",
    translation: "აგორებს",
  },
  {
    index: 859,
    word: "კეს",
    translation: "ჭერის",
  },
  {
    index: 560,
    word: "კეცმაქ",
    translation: "კეცზე",
  },
  {
    index: 754,
    word: "კეცმაქ",
    translation: "კეცზე",
  },
  {
    index: 764,
    word: "კეცმაქ",
    translation: "კეცზე",
  },
  {
    index: 1006,
    word: "კეჭ",
    translation: "მატყლის",
  },
  {
    index: 835,
    word: "კვერ",
    translation: "კვერი",
  },
  {
    index: 796,
    word: "კიდბაჼ",
    translation: "კიდობანი",
  },
  {
    index: 1015,
    word: "კიკალ",
    translation: "ქვეშ",
  },
  {
    index: 298,
    word: "კმატმნოხ",
    translation: "კლდეებში",
  },
  {
    index: 111,
    word: "კნათ/ვოჰ",
    translation: "ბიჭი",
  },
  {
    index: 115,
    word: "კნათ/ვოჰ",
    translation: "ბიჭი",
  },
  {
    index: 47,
    word: "კნათ/ვოჰࣿ",
    translation: "ბიჭი",
  },
  {
    index: 40,
    word: "კნათევ/ვაჰࣿოვ",
    translation: "ბიჭმა",
  },
  {
    index: 43,
    word: "კნათევ/ვაჰࣿოვ",
    translation: "ბიჭმა",
  },
  {
    index: 50,
    word: "კნათევ/ვაჰࣿოვ",
    translation: "ბიჭმა",
  },
  {
    index: 104,
    word: "კნათენ/ვაჰონ",
    translation: "ბიჭს",
  },
  {
    index: 107,
    word: "კნათენ/ვაჰონ",
    translation: "ბიჭს",
  },
  {
    index: 1266,
    word: "კოკა-კოლააʹჲ",
    translation: "კოკა-კოლა",
  },
  {
    index: 1282,
    word: "კონიაკ",
    translation: "კონიაკი",
  },
  {
    index: 139,
    word: "კოტინ",
    translation: "კატას",
  },
  {
    index: 147,
    word: "კოტიხ",
    translation: "კატას",
  },
  {
    index: 554,
    word: "კოტორ",
    translation: "კოტორი",
  },
  {
    index: 1247,
    word: "კოტორ",
    translation: "კოტორს",
  },
  {
    index: 551,
    word: "კოტრეხ",
    translation: "კოტრის",
  },
  {
    index: 855,
    word: "კოჭი",
    translation: "კოჭების",
  },
  {
    index: 858,
    word: "კოჭი",
    translation: "კოჭები",
  },
  {
    index: 1155,
    word: "კრან(ტ)ლენა",
    translation: "ონკანიდან",
  },
  {
    index: 1109,
    word: "კრუხეღ",
    translation: "კრუხად",
  },
  {
    index: 223,
    word: "კუვ",
    translation: "კუ",
  },
  {
    index: 388,
    word: "კუვ",
    translation: "კუ",
  },
  {
    index: 334,
    word: "კუზ",
    translation: "კუზის",
  },
  {
    index: 492,
    word: "კუიჼ",
    translation: "თეთრი",
  },
  {
    index: 669,
    word: "კუიჼ",
    translation: "თეთრი",
  },
  {
    index: 1252,
    word: "კუინაʹჲ",
    translation: "თეთრიც და",
  },
  {
    index: 938,
    word: "კუჲკრაჸუჲ",
    translation: "ხელადა",
  },
  {
    index: 41,
    word: "კუჲტ",
    translation: "კატას",
  },
  {
    index: 116,
    word: "კუჲტ",
    translation: "კატის",
  },
  {
    index: 135,
    word: "კუჲტ",
    translation: "კატას",
  },
  {
    index: 143,
    word: "კუჲტ",
    translation: "კატას",
  },
  {
    index: 190,
    word: "კუჲტ",
    translation: "კატა",
  },
  {
    index: 250,
    word: "კუჲტ",
    translation: "კატას",
  },
  {
    index: 420,
    word: "კუჲტ",
    translation: "კატა",
  },
  {
    index: 607,
    word: "კუჲტ",
    translation: "კატა",
  },
  {
    index: 1073,
    word: "კუჲტ",
    translation: "კატას",
  },
  {
    index: 1014,
    word: "კურტულ",
    translation: "ფარდაგი",
  },
  {
    index: 28,
    word: "ლაბწალათ",
    translation: "თამაშობენ ხოლმე",
  },
  {
    index: 739,
    word: "ლაბწბანეჲნ",
    translation: "სათამაშოდა",
  },
  {
    index: 137,
    word: "ლაბჴწოდ",
    translation: "ათამაშებს",
  },
  {
    index: 1179,
    word: "ლაგაზ",
    translation: "მოცვი",
  },
  {
    index: 20,
    word: "ლავ",
    translation: "თოვლის",
  },
  {
    index: 156,
    word: "ლავ",
    translation: "თოვლის",
  },
  {
    index: 161,
    word: "ლავ",
    translation: "თოვლის",
  },
  {
    index: 58,
    word: "ლავეჼ",
    translation: "თოვლის",
  },
  {
    index: 68,
    word: "ლავეჼ",
    translation: "თოვლის",
  },
  {
    index: 1136,
    word: "ლამ",
    translation: "მთა",
  },
  {
    index: 1145,
    word: "ლამ",
    translation: "მთა",
  },
  {
    index: 310,
    word: "ლამზურ",
    translation: "ლამაზი",
  },
  {
    index: 396,
    word: "ლამზურ",
    translation: "ლამაზი",
  },
  {
    index: 450,
    word: "ლამზურ",
    translation: "ლამაზი",
  },
  {
    index: 469,
    word: "ლამზურ",
    translation: "ლამაზი",
  },
  {
    index: 535,
    word: "ლამზურ",
    translation: "ლამაზი",
  },
  {
    index: 431,
    word: "ლამზურჩ",
    translation: "ლამაზი",
  },
  {
    index: 444,
    word: "ლამზურჩ",
    translation: "ტყის",
  },
  {
    index: 1147,
    word: "ლამუ",
    translation: "მთაში",
  },
  {
    index: 1177,
    word: "ლამუ",
    translation: "მთაში",
  },
  {
    index: 1128,
    word: "ლამუჼ",
    translation: "მთის",
  },
  {
    index: 1167,
    word: "ლამუჼ",
    translation: "მთის",
  },
  {
    index: 849,
    word: "ლაპ",
    translation: "კიბე",
  },
  {
    index: 247,
    word: "ლაპწდუჲნ",
    translation: "კარგი",
  },
  {
    index: 504,
    word: "ლარკი",
    translation: "ყურები",
  },
  {
    index: 632,
    word: "ლარკი",
    translation: "ყურები",
  },
  {
    index: 314,
    word: "ლაფ-ტჵაკი",
    translation: "ტალახ-წუმპეების",
  },
  {
    index: 428,
    word: "ლაფლო",
    translation: "ტალახში",
  },
  {
    index: 924,
    word: "ლაფსინ",
    translation: "მშრალი",
  },
  {
    index: 77,
    word: "ლაქდალიʹნ",
    translation: "მოვარდა და",
  },
  {
    index: 860,
    word: "ლაცბითანაჲნ",
    translation: "დასაკავებლად",
  },
  {
    index: 681,
    word: "ლაწრი",
    translation: "ტკივილი",
  },
  {
    index: 538,
    word: "ლახუჼ",
    translation: "დაბალი",
  },
  {
    index: 989,
    word: "ლახუჼ",
    translation: "დაბალი",
  },
  {
    index: 1144,
    word: "ლახუჼ",
    translation: "დაბალი",
  },
  {
    index: 474,
    word: "ლაჴეჼ",
    translation: "მაღალი",
  },
  {
    index: 1139,
    word: "ლაჴეჼ",
    translation: "მაღალი",
  },
  {
    index: 297,
    word: "ლაჴიჩ",
    translation: "მაღალ",
  },
  {
    index: 364,
    word: "ლაჴიჩ",
    translation: "მაღალ",
  },
  {
    index: 201,
    word: "ლაჰࣿ",
    translation: "გველი",
  },
  {
    index: 14,
    word: "ლაჰࣿდიეჼ",
    translation: "მოუკრიფა",
  },
  {
    index: 330,
    word: "ლე",
    translation: "ან",
  },
  {
    index: 332,
    word: "ლე",
    translation: "ან",
  },
  {
    index: 1017,
    word: "ლე",
    translation: "ან",
  },
  {
    index: 154,
    word: "ლებჟ",
    translation: "სრიალებენ",
  },
  {
    index: 391,
    word: "ლელ",
    translation: "დადის",
  },
  {
    index: 1151,
    word: "ლელ",
    translation: "მიედინება",
  },
  {
    index: 100,
    word: "ლელდანუჲც",
    translation: "დადენილა აკი!",
  },
  {
    index: 685,
    word: "ლელჲაჼ",
    translation: "სატარებლადა",
  },
  {
    index: 320,
    word: "ლელჲითაჼ",
    translation: "სატარებინებლად",
  },
  {
    index: 696,
    word: "ლელყელ",
    translation: "მოძრაობენ",
  },
  {
    index: 372,
    word: "ლეტინ",
    translation: "დამხმარე",
  },
  {
    index: 133,
    word: "ლექობ",
    translation: "აგდებს",
  },
  {
    index: 252,
    word: "ლეცდითაჼ",
    translation: "დასაჭერად",
  },
  {
    index: 856,
    word: "ლეცდითანეჲნ",
    translation: "დასაჭერად",
  },
  {
    index: 923,
    word: "ლეცლა",
    translation: "დაიჭირება(გამოიყენება)",
  },
  {
    index: 921,
    word: "ლეცობ",
    translation: "გამოიყენება",
  },
  {
    index: 145,
    word: "ლეცოდ",
    translation: "იჭერს",
  },
  {
    index: 1259,
    word: "ლეჰࣿჲარეხ",
    translation: "კრეფას",
  },
  {
    index: 1232,
    word: "ლეჰࣿოდ",
    translation: "ატამს",
  },
  {
    index: 110,
    word: "ლეჸ",
    translation: "უნდა",
  },
  {
    index: 1119,
    word: "ლიმონათ",
    translation: "ლიმონათი",
  },
  {
    index: 1265,
    word: "ლიმონათაʹჲ",
    translation: "ლიმონათი",
  },
  {
    index: 184,
    word: "ლომ",
    translation: "ლომი",
  },
  {
    index: 1081,
    word: "ლოუმ",
    translation: "მთაში",
  },
  {
    index: 159,
    word: "ლოჸდიეჼ",
    translation: "მოინდომეს",
  },
  {
    index: 178,
    word: "ლოჸდიეჼ",
    translation: "მოინდომა",
  },
  {
    index: 797,
    word: "მათₔიშ",
    translation: "ლოგინების",
  },
  {
    index: 1274,
    word: "მალ‘არ",
    translation: "სასმელი",
  },
  {
    index: 1280,
    word: "მალ‘არ",
    translation: "სასმელი",
  },
  {
    index: 1284,
    word: "მალ‘არ",
    translation: "სასმელი",
  },
  {
    index: 1269,
    word: "მალ‘რი",
    translation: "სასმელები",
  },
  {
    index: 1114,
    word: "მალ’არ",
    translation: "სასმელი",
  },
  {
    index: 700,
    word: "მალლა",
    translation: "იღლებიან",
  },
  {
    index: 831,
    word: "მაჲჟდარ",
    translation: "მჭადი",
  },
  {
    index: 289,
    word: "მაჲჩ",
    translation: "მაჩვი",
  },
  {
    index: 838,
    word: "მაჲჴ",
    translation: "პური",
  },
  {
    index: 840,
    word: "მაჲჴ",
    translation: "პური",
  },
  {
    index: 863,
    word: "მაჲჴ",
    translation: "პურის",
  },
  {
    index: 485,
    word: "მარ‘ლ‘",
    translation: "ცხვირი",
  },
  {
    index: 519,
    word: "მარ‘ლ‘",
    translation: "ცხვირი",
  },
  {
    index: 701,
    word: "მარ’ლ‘ოვ",
    translation: "ცხვირით",
  },
  {
    index: 376,
    word: "მარდლაკ",
    translation: "მწიხლავი",
  },
  {
    index: 1193,
    word: "მარშლეჼ",
    translation: "მარშლეჼ",
  },
  {
    index: 1168,
    word: "მარწყოʹჲ",
    translation: "მარწყვი",
  },
  {
    index: 612,
    word: "მასთხოვ",
    translation: "მტერი",
  },
  {
    index: 283,
    word: "მასორ",
    translation: "არჩვი",
  },
  {
    index: 1018,
    word: "მაქ",
    translation: "ზედ",
  },
  {
    index: 1208,
    word: "მაქ",
    translation: "ზედ",
  },
  {
    index: 715,
    word: "მაშ",
    translation: "შალი",
  },
  {
    index: 1021,
    word: "მაშ",
    translation: "შალი",
  },
  {
    index: 1027,
    word: "მაშ",
    translation: "შალი",
  },
  {
    index: 1036,
    word: "მაშარდანაʹჲ",
    translation: "გასანათებლად და",
  },
  {
    index: 718,
    word: "მაშეჼ",
    translation: "ადრე",
  },
  {
    index: 723,
    word: "მაშეჼ",
    translation: "შალისგან",
  },
  {
    index: 728,
    word: "მაშეჼ",
    translation: "შალის",
  },
  {
    index: 382,
    word: "მაწოჼ",
    translation: "მაწონი",
  },
  {
    index: 810,
    word: "მაწრ",
    translation: "რძისგან",
  },
  {
    index: 802,
    word: "მაწროʹჲ",
    translation: "შრატი",
  },
  {
    index: 953,
    word: "მაწროლ",
    translation: "ტკბილეული",
  },
  {
    index: 958,
    word: "მაწროლ",
    translation: "ტკბილეული",
  },
  {
    index: 963,
    word: "მაწროლ",
    translation: "ტკბილეული",
  },
  {
    index: 704,
    word: "მაჭ",
    translation: "ულვაში",
  },
  {
    index: 559,
    word: "მაჭკტი",
    translation: "მაჭკატები",
  },
  {
    index: 588,
    word: "მელ‘მი",
    translation: "რამდენიმე",
  },
  {
    index: 883,
    word: "მელ‘უჲნ",
    translation: "დასალევად",
  },
  {
    index: 196,
    word: "მეჼ",
    translation: "ზოგი",
  },
  {
    index: 199,
    word: "მეჼ",
    translation: "ზოგი",
  },
  {
    index: 747,
    word: "მეფ“",
    translation: "მეფეს",
  },
  {
    index: 1091,
    word: "მეღორეს",
    translation: "მეღორეს",
  },
  {
    index: 1209,
    word: "მეყ",
    translation: "რჩება",
  },
  {
    index: 725,
    word: "მეშოკ",
    translation: "ტომარა",
  },
  {
    index: 596,
    word: "მეჴ",
    translation: "ტახტი",
  },
  {
    index: 467,
    word: "მიჩ",
    translation: "ზოგ",
  },
  {
    index: 498,
    word: "მიჩ",
    translation: "ზოგ",
  },
  {
    index: 1205,
    word: "მიჩ",
    translation: "ზოგიერთ",
  },
  {
    index: 471,
    word: "მიჩგო",
    translation: "ზოგს",
  },
  {
    index: 502,
    word: "მიჩგო",
    translation: "ზოგს",
  },
  {
    index: 505,
    word: "მიჩგო",
    translation: "ზოგს",
  },
  {
    index: 508,
    word: "მიჩგო",
    translation: "ზოგს",
  },
  {
    index: 511,
    word: "მიჩგო",
    translation: "ზოგს",
  },
  {
    index: 514,
    word: "მიჩგო",
    translation: "ზოგს",
  },
  {
    index: 200,
    word: "მოსₔიჼ",
    translation: "ცუდი",
  },
  {
    index: 357,
    word: "მოსₔინ",
    translation: "ცუდი",
  },
  {
    index: 522,
    word: "მოტₔ",
    translation: "ენა",
  },
  {
    index: 955,
    word: "მოწ",
    translation: "თაფლი",
  },
  {
    index: 81,
    word: "მოხ",
    translation: "ქარმა",
  },
  {
    index: 1227,
    word: "მოხ",
    translation: "ქარი",
  },
  {
    index: 581,
    word: "მუჲლნეჴელბა",
    translation: "ნამდვილ",
  },
  {
    index: 950,
    word: "მურაბ",
    translation: "მურაბა",
  },
  {
    index: 646,
    word: "მურჯიჼ",
    translation: "მღვრიე",
  },
  {
    index: 398,
    word: "მუღ",
    translation: "კუდის",
  },
  {
    index: 144,
    word: "მუღეხ",
    translation: "კუდში",
  },
  {
    index: 675,
    word: "მჵარელჩ",
    translation: "ფრჩხილები",
  },
  {
    index: 432,
    word: "მჵაჸარეჼ",
    translation: "რქებიანი",
  },
  {
    index: 452,
    word: "მჵაჸი",
    translation: "დატოტვილი",
  },
  {
    index: 1003,
    word: "ნაბდურ",
    translation: "ნაბადი",
  },
  {
    index: 542,
    word: "ნამცხვარ",
    translation: "ნამცხვარი",
  },
  {
    index: 1244,
    word: "ნამცხვარ",
    translation: "ნამცხვარს",
  },
  {
    index: 828,
    word: "ნამცხვრი",
    translation: "ნამცხვარი",
  },
  {
    index: 307,
    word: "ნან",
    translation: "დედა",
  },
  {
    index: 1243,
    word: "ნანას",
    translation: "დედა",
  },
  {
    index: 1010,
    word: "ნაჲბდრეჼ",
    translation: "ნაბდისგან",
  },
  {
    index: 416,
    word: "ნაყბისტ",
    translation: "მეგობარი",
  },
  {
    index: 572,
    word: "ნაყროხ",
    translation: "უზმოზე",
  },
  {
    index: 267,
    word: "ნაჩხ",
    translation: "ყველი",
  },
  {
    index: 807,
    word: "ნაჩხ",
    translation: "ყველი",
  },
  {
    index: 817,
    word: "ნაჩხ",
    translation: "და",
  },
  {
    index: 618,
    word: "ნაჭერ",
    translation: "ნაჭერი",
  },
  {
    index: 38,
    word: "ნახ",
    translation: "ხალხი",
  },
  {
    index: 73,
    word: "ნახ",
    translation: "ხალხი",
  },
  {
    index: 78,
    word: "ნახ",
    translation: "ხალხი",
  },
  {
    index: 88,
    word: "ნახ",
    translation: "ხალხი",
  },
  {
    index: 83,
    word: "ნახგო",
    translation: "ადამიანებს",
  },
  {
    index: 1154,
    word: "ნახგო",
    translation: "ხალხს",
  },
  {
    index: 254,
    word: "ნახვ",
    translation: "ხალხი",
  },
  {
    index: 322,
    word: "ნახვ",
    translation: "ხალხი",
  },
  {
    index: 368,
    word: "ნახნ",
    translation: "ადამიანებისთვის",
  },
  {
    index: 822,
    word: "ნაჴელ",
    translation: "შედედებული",
  },
  {
    index: 809,
    word: "ნაჴლეგო",
    translation: "აჭრილი",
  },
  {
    index: 837,
    word: "ნეთხიჼ",
    translation: "თხელი",
  },
  {
    index: 862,
    word: "ნეკ",
    translation: "დანა",
  },
  {
    index: 1213,
    word: "ნექტარ",
    translation: "ნექტარს",
  },
  {
    index: 1037,
    word: "ნივბადანაʹჲ",
    translation: "გასანიავებლად",
  },
  {
    index: 1048,
    word: "ნიშე",
    translation: "ნიშაში",
  },
  {
    index: 1042,
    word: "ნიში",
    translation: "ნიშაში",
  },
  {
    index: 236,
    word: "ნიწყლიჼ",
    translation: "ღონიერი",
  },
  {
    index: 274,
    word: "ნუჩრევ",
    translation: "დინგით",
  },
  {
    index: 194,
    word: "ნჵან",
    translation: "ჭია",
  },
  {
    index: 132,
    word: "ნჵეჲჸ",
    translation: "გარეთ",
  },
  {
    index: 847,
    word: "ნჵეჲჸრეჼ",
    translation: "მხარე",
  },
  {
    index: 225,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 470,
    word: "ჲა",
    translation: "აქვს",
  },
  {
    index: 478,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 490,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 493,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 496,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 501,
    word: "ჲა",
    translation: "აქვს",
  },
  {
    index: 507,
    word: "ჲა",
    translation: "აქვს",
  },
  {
    index: 513,
    word: "ჲა",
    translation: "აქვს",
  },
  {
    index: 533,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 619,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 631,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 634,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 637,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 643,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 664,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 670,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 686,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 707,
    word: "ჲა",
    translation: "აქვთ",
  },
  {
    index: 711,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 839,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 843,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 954,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 959,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 964,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 1033,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 1135,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 1142,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 1166,
    word: "ჲა",
    translation: "არის",
  },
  {
    index: 734,
    word: "ჲა;",
    translation: "ცხენის",
  },
  {
    index: 1181,
    word: "ჲა;",
    translation: "არის",
  },
  {
    index: 558,
    word: "ჲათₔლა",
    translation: "ცხვება",
  },
  {
    index: 830,
    word: "ჲათₔლა",
    translation: "ცხვება",
  },
  {
    index: 1245,
    word: "ჲათₔოთვაჲნ",
    translation: "გვიცხობს",
  },
  {
    index: 515,
    word: "ჲაჲცნი",
    translation: "მოკლეები",
  },
  {
    index: 940,
    word: "ჲარ",
    translation: "იყო",
  },
  {
    index: 1188,
    word: "ჲაფხეჩ",
    translation: "თბილ",
  },
  {
    index: 752,
    word: "ჲაყოთვაჲ",
    translation: "ვჭამთ",
  },
  {
    index: 842,
    word: "ჲაყუჲნ",
    translation: "საჭმელი",
  },
  {
    index: 335,
    word: "ჲაშ",
    translation: "მქონე",
  },
  {
    index: 399,
    word: "ჲაშ",
    translation: "მქონე",
  },
  {
    index: 453,
    word: "ჲაშ",
    translation: "რქებიანის",
  },
  {
    index: 1031,
    word: "ჲაშ",
    translation: "მქონე",
  },
  {
    index: 532,
    word: "ჲაცუჼ",
    translation: "მოკლე",
  },
  {
    index: 642,
    word: "ჲაცუჼ",
    translation: "მოკლე",
  },
  {
    index: 512,
    word: "ჲახₔნი",
    translation: "გრძელები",
  },
  {
    index: 1118,
    word: "ჲახლა",
    translation: "იხდება",
  },
  {
    index: 500,
    word: "ჲაჴₔანი",
    translation: "დიდები",
  },
  {
    index: 506,
    word: "ჲაჴₔანი",
    translation: "დიდები",
  },
  {
    index: 59,
    word: "ჲაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 617,
    word: "ჲაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 1138,
    word: "ჲაჴₔოჼ",
    translation: "დიდი",
  },
  {
    index: 2,
    word: "ჲაჰࣿოვ",
    translation: "გოგონამ",
  },
  {
    index: 7,
    word: "ჲაჰࣿოვ",
    translation: "გოგონამ",
  },
  {
    index: 11,
    word: "ჲაჰࣿოვ",
    translation: "გოგონამ",
  },
  {
    index: 15,
    word: "ჲაჰࣿოვ",
    translation: "გოგონამ",
  },
  {
    index: 164,
    word: "ჲაჰࣿოვ",
    translation: "გოგონა",
  },
  {
    index: 168,
    word: "ჲაჰࣿოვ",
    translation: "გოგონა",
  },
  {
    index: 172,
    word: "ჲაჰࣿოვ",
    translation: "გოგონა",
  },
  {
    index: 175,
    word: "ჲაჰࣿოვ",
    translation: "გოგონამ",
  },
  {
    index: 1123,
    word: "ჲეგ",
    translation: "ლუდი",
  },
  {
    index: 1276,
    word: "ჲეგ",
    translation: "ლუდი",
  },
  {
    index: 226,
    word: "ჲეთₔ",
    translation: "ძროხა",
  },
  {
    index: 457,
    word: "ჲეთₔ",
    translation: "ძროხა",
  },
  {
    index: 1076,
    word: "ჲეთₔ",
    translation: "ძროხა",
  },
  {
    index: 714,
    word: "ჲეჲლ",
    translation: "უჭირავს",
  },
  {
    index: 677,
    word: "ჲეწ",
    translation: "საჭიროა",
  },
  {
    index: 962,
    word: "ჲეწინ",
    translation: "საყვარელი",
  },
  {
    index: 30,
    word: "ჲეჸეʹნ",
    translation: "მოვიდა და",
  },
  {
    index: 72,
    word: "ჲეჸეʹნ",
    translation: "მოვიდა და",
  },
  {
    index: 19,
    word: "ჲეჸეჼ",
    translation: "მოუტანა",
  },
  {
    index: 46,
    word: "ჲო",
    translation: "ყვება",
  },
  {
    index: 87,
    word: "ჲოლეʹნ",
    translation: "მოვიდა და",
  },
  {
    index: 275,
    word: "ჲოფსტ",
    translation: "მიწის",
  },
  {
    index: 712,
    word: "ჲუყ",
    translation: "წელი",
  },
  {
    index: 548,
    word: "ჲუყეღ(დ)ა",
    translation: "შუაზე",
  },
  {
    index: 495,
    word: "ჲუწინ",
    translation: "სავსე",
  },
  {
    index: 819,
    word: "ო",
    translation: "ყველის",
  },
  {
    index: 66,
    word: "ოთₔდიეჼ",
    translation: "დადგა",
  },
  {
    index: 56,
    word: "ოთₔჲიენ",
    translation: "დადგა",
  },
  {
    index: 1035,
    word: "ოთახ",
    translation: "ოთახის",
  },
  {
    index: 767,
    word: "ოკეანე",
    translation: "ოკეანეში",
  },
  {
    index: 1159,
    word: "ოკეანე",
    translation: "ოკეანეში",
  },
  {
    index: 774,
    word: "ოკეანეʹჰࣿ",
    translation: "ოკეანეშიც",
  },
  {
    index: 708,
    word: "ოლოკ",
    translation: "მხარი",
  },
  {
    index: 565,
    word: "ოხკინ",
    translation: "წამოცმული",
  },
  {
    index: 1012,
    word: "პალტ",
    translation: "პალტო",
  },
  {
    index: 1267,
    word: "პეპსი-კოლააʹჲ",
    translation: "პეპსი-კოლა",
  },
  {
    index: 628,
    word: "პჵეჼტერ",
    translation: "ნეკნები",
  },
  {
    index: 1088,
    word: "ჟაბ",
    translation: "ძროხებს",
  },
  {
    index: 264,
    word: "ჟე",
    translation: "ცხვრის",
  },
  {
    index: 1080,
    word: "ჟე",
    translation: "ცხვარი",
  },
  {
    index: 1085,
    word: "ჟე",
    translation: "ცხვარს",
  },
  {
    index: 108,
    word: "ჟელრეჼ",
    translation: "ცხვრის",
  },
  {
    index: 709,
    word: "რთულ",
    translation: "რთული",
  },
  {
    index: 210,
    word: "საბლეხიჼ",
    translation: "უმეტესად",
  },
  {
    index: 555,
    word: "საბლეხიჼ",
    translation: "მეტწილად",
  },
  {
    index: 563,
    word: "საბლეხიჼ",
    translation: "მეტწილად",
  },
  {
    index: 750,
    word: "საბლეხიჼ",
    translation: "უმეტესად",
  },
  {
    index: 770,
    word: "საბლეხიჼ",
    translation: "უმეტესად",
  },
  {
    index: 1120,
    word: "საბლეხიჼ",
    translation: "უმეტესად",
  },
  {
    index: 1124,
    word: "საბლეხიჼ",
    translation: "უფრო",
  },
  {
    index: 371,
    word: "საბუხ",
    translation: "კარგი",
  },
  {
    index: 449,
    word: "საგ",
    translation: "ირემი",
  },
  {
    index: 531,
    word: "საკერ",
    translation: "კისერი",
  },
  {
    index: 534,
    word: "საკერ",
    translation: "კისერი",
  },
  {
    index: 851,
    word: "საჲრთლენმაქ",
    translation: "სართულზე",
  },
  {
    index: 850,
    word: "საჲრთლენმაქრეჼ",
    translation: "სართულიდან",
  },
  {
    index: 836,
    word: "საფუვრეწიჼ",
    translation: "უსაფუარო",
  },
  {
    index: 593,
    word: "საქმ",
    translation: "საქმის",
  },
  {
    index: 369,
    word: "საქმულო",
    translation: "საქმეში",
  },
  {
    index: 710,
    word: "საჴსარ",
    translation: "სახსარი",
  },
  {
    index: 773,
    word: "სელაპ",
    translation: "სელაპი",
  },
  {
    index: 703,
    word: "სემსლა",
    translation: "იყნოსება.",
  },
  {
    index: 783,
    word: "სერვაჼტ",
    translation: "სერვანდი",
  },
  {
    index: 86,
    word: "სეტყვ",
    translation: "სეტყვა",
  },
  {
    index: 55,
    word: "სვეტ",
    translation: "სვეტი",
  },
  {
    index: 854,
    word: "სვეტი",
    translation: "სვეტი",
  },
  {
    index: 89,
    word: "სივჰࣿ-დივჰࣿაʹი",
    translation: "აქეთ-იქით",
  },
  {
    index: 281,
    word: "სიმბოლ",
    translation: "სიმბოლო",
  },
  {
    index: 1194,
    word: "სიმბოლუჲ",
    translation: "სიმბოლუჲ",
  },
  {
    index: 832,
    word: "სიმიჼდ",
    translation: "სიმინდის",
  },
  {
    index: 1,
    word: "სიტუაციეჲშ",
    translation: "სიტუაციები",
  },
  {
    index: 791,
    word: "სკივრ",
    translation: "სკივრი",
  },
  {
    index: 889,
    word: "სოდა",
    translation: "აქეთ-იქით",
  },
  {
    index: 188,
    word: "სორო",
    translation: "სოროში",
  },
  {
    index: 290,
    word: "სორო",
    translation: "სოროში",
  },
  {
    index: 393,
    word: "სორო",
    translation: "სოროში",
  },
  {
    index: 338,
    word: "სპილუჲ",
    translation: "სპილოები",
  },
  {
    index: 1272,
    word: "სპირტ",
    translation: "სპირტის",
  },
  {
    index: 663,
    word: "სტ(ჵ)ამიჼ",
    translation: "სქელი",
  },
  {
    index: 1061,
    word: "სტაკოვ",
    translation: "კაზმავს",
  },
  {
    index: 9,
    word: "სტაჲფლაჸ",
    translation: "სტაფილო",
  },
  {
    index: 337,
    word: "სუკი(ნ)მაქ",
    translation: "ზურგზე",
  },
  {
    index: 905,
    word: "სუფრე(ნ)მაქ",
    translation: "სუფრაზე",
  },
  {
    index: 933,
    word: "სუფრე(ნ)მაქ",
    translation: "სუფრაზე",
  },
  {
    index: 941,
    word: "სუფრე(ნ)მაქ",
    translation: "ღვინის",
  },
  {
    index: 912,
    word: "სუფრენმაქ",
    translation: "სუფრაზე",
  },
  {
    index: 1229,
    word: "სხალ",
    translation: "მსხალი",
  },
  {
    index: 620,
    word: "ტა",
    translation: "მხარი",
  },
  {
    index: 987,
    word: "ტაბურეტკ",
    translation: "ტაბურეტი",
  },
  {
    index: 65,
    word: "ტავ",
    translation: "ტოტი",
  },
  {
    index: 96,
    word: "ტავ",
    translation: "ტოტი",
  },
  {
    index: 451,
    word: "ტავნარეჼ",
    translation: "ტყის",
  },
  {
    index: 482,
    word: "ტარკ",
    translation: "თითი",
  },
  {
    index: 525,
    word: "ტარკ",
    translation: "თითი",
  },
  {
    index: 1007,
    word: "ტატჲოშაʹჲ",
    translation: "დასველებით",
  },
  {
    index: 1131,
    word: "ტაფ",
    translation: "ტაფობი",
  },
  {
    index: 881,
    word: "ტოლჩ",
    translation: "ტოლჩა(ჩამჩა)",
  },
  {
    index: 516,
    word: "ტოტ",
    translation: "ხელი",
  },
  {
    index: 1161,
    word: "ტოტ",
    translation: "ტოტი",
  },
  {
    index: 326,
    word: "ტრანსპორტ",
    translation: "ტრანსპორტი",
  },
  {
    index: 983,
    word: "ტრაშტ",
    translation: "ტაშტი",
  },
  {
    index: 260,
    word: "ტურ",
    translation: "ტურა",
  },
  {
    index: 434,
    word: "ტურ",
    translation: "ტურა",
  },
  {
    index: 211,
    word: "უდაბნო",
    translation: "უდაბნოში",
  },
  {
    index: 305,
    word: "უჲსთხ",
    translation: "ნერბი",
  },
  {
    index: 1020,
    word: "უხეშ",
    translation: "უხეში",
  },
  {
    index: 1023,
    word: "ფალაზ",
    translation: "კედლის",
  },
  {
    index: 185,
    word: "ფაფრალეჼ",
    translation: "ფაფრიანი",
  },
  {
    index: 848,
    word: "ფე",
    translation: "არის",
  },
  {
    index: 1129,
    word: "ფე",
    translation: "მხარი",
  },
  {
    index: 1058,
    word: "ფერბალა",
    translation: "ეფერებიან",
  },
  {
    index: 1127,
    word: "ფერდ",
    translation: "ფერდობი",
  },
  {
    index: 287,
    word: "ფერდოხ",
    translation: "ფერდობზე",
  },
  {
    index: 1132,
    word: "ფერდუჲჼ",
    translation: "ფერდობის",
  },
  {
    index: 1055,
    word: "ფეშკარაʹჲ",
    translation: "ბალღი და",
  },
  {
    index: 119,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 123,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 126,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 130,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 1052,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 1068,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 1237,
    word: "ფეშკრევ",
    translation: "ბალღმა",
  },
  {
    index: 1162,
    word: "ფოთლაჼ",
    translation: "ფოთლების",
  },
  {
    index: 24,
    word: "ფოთლი",
    translation: "ფოთლების",
  },
  {
    index: 1183,
    word: "ფოთლი",
    translation: "ფოთლები",
  },
  {
    index: 27,
    word: "ფოთლილო",
    translation: "ფოთლებში",
  },
  {
    index: 1204,
    word: "ფოთოლ",
    translation: "ფოთოლი",
  },
  {
    index: 1087,
    word: "ფსტეივ",
    translation: "ქალები",
  },
  {
    index: 235,
    word: "ფსტუ",
    translation: "ხარი",
  },
  {
    index: 1075,
    word: "ფსტუჲჼჩოვ",
    translation: "ქალს",
  },
  {
    index: 397,
    word: "ფუმფულ",
    translation: "ფუმფულა",
  },
  {
    index: 1210,
    word: "ფუტკრევ",
    translation: "ფუტკარი",
  },
  {
    index: 956,
    word: "ფუტკრივ",
    translation: "ფუტკრების",
  },
  {
    index: 153,
    word: "ფშეჲნმაქ",
    translation: "ყინულზე",
  },
  {
    index: 604,
    word: "ფხაკალ",
    translation: "კურდღელს",
  },
  {
    index: 3,
    word: "ფხაკლენ",
    translation: "კურდღლისთვის",
  },
  {
    index: 8,
    word: "ფხაკლენ",
    translation: "კურდღელს",
  },
  {
    index: 12,
    word: "ფხაკლენ",
    translation: "კურდღელს",
  },
  {
    index: 16,
    word: "ფხაკლენ",
    translation: "კურდღელს",
  },
  {
    index: 624,
    word: "ფხანერ",
    translation: "ბეჭი",
  },
  {
    index: 120,
    word: "ფჰࣿარან",
    translation: "ძაღლს",
  },
  {
    index: 127,
    word: "ფჰࣿარან",
    translation: "ძაღლს",
  },
  {
    index: 165,
    word: "ფჰࣿარან",
    translation: "ძაღლს",
  },
  {
    index: 169,
    word: "ფჰࣿარან",
    translation: "ძაღლს",
  },
  {
    index: 412,
    word: "ფჰࣿარახ",
    translation: "ძაღლის",
  },
  {
    index: 605,
    word: "ფჰࣿარახ",
    translation: "ძაღლის",
  },
  {
    index: 665,
    word: "ფჰࣿარს",
    translation: "მხარი",
  },
  {
    index: 213,
    word: "ფჰࣿიტ",
    translation: "ბაყაყი",
  },
  {
    index: 51,
    word: "ფჰࣿუ",
    translation: "ძაღლს",
  },
  {
    index: 105,
    word: "ფჰࣿუ",
    translation: "ძაღლი",
  },
  {
    index: 124,
    word: "ფჰࣿუ",
    translation: "ძაღლს",
  },
  {
    index: 131,
    word: "ფჰࣿუ",
    translation: "ძაღლს",
  },
  {
    index: 173,
    word: "ფჰࣿუ",
    translation: "ძაღლს",
  },
  {
    index: 176,
    word: "ფჰࣿუ",
    translation: "ძაღლის",
  },
  {
    index: 344,
    word: "ფჰࣿუ",
    translation: "ძაღლი",
  },
  {
    index: 413,
    word: "ფჰࣿუ",
    translation: "ძაღლი",
  },
  {
    index: 1066,
    word: "ფჰࣿუ",
    translation: "ძაღლი",
  },
  {
    index: 84,
    word: "ქადბი-ქოლგი",
    translation: "ქუდ-ქოლგები",
  },
  {
    index: 673,
    word: "ქალეხ",
    translation: "ქალას",
  },
  {
    index: 18,
    word: "ქანიზ",
    translation: "ყურძენი",
  },
  {
    index: 1258,
    word: "ქანიზ",
    translation: "ყურძნის",
  },
  {
    index: 719,
    word: "ქაჲრცხ",
    translation: "შალის",
  },
  {
    index: 699,
    word: "ქასტეჼ",
    translation: "მალე",
  },
  {
    index: 1090,
    word: "ქასტლაშ",
    translation: "გამალებით",
  },
  {
    index: 871,
    word: "ქატნივ",
    translation: "ქიტით",
  },
  {
    index: 876,
    word: "ქაფქირ",
    translation: "ქაფქირი",
  },
  {
    index: 6,
    word: "ქეკოდ",
    translation: "აქუცმაცებს",
  },
  {
    index: 788,
    word: "ქეჲრცხ",
    translation: "ტანსაცმლის",
  },
  {
    index: 692,
    word: "ქექალა",
    translation: "მოძრაობს",
  },
  {
    index: 1189,
    word: "ქვეყნი",
    translation: "ქვეყნებში",
  },
  {
    index: 328,
    word: "ქიქოჸ",
    translation: "ადრე",
  },
  {
    index: 898,
    word: "ქიქოჸ",
    translation: "წინათ",
  },
  {
    index: 1235,
    word: "ქლიავ",
    translation: "ქლიავს",
  },
  {
    index: 35,
    word: "ქოთₔდალიჼ",
    translation: "შეწუხდა",
  },
  {
    index: 39,
    word: "ქოთₔლა",
    translation: "წუხდება",
  },
  {
    index: 353,
    word: "ქოთმაჼ",
    translation: "ქათმების",
  },
  {
    index: 659,
    word: "ქოკ",
    translation: "ფეხი",
  },
  {
    index: 170,
    word: "ქოკი",
    translation: "ფეხებს",
  },
  {
    index: 510,
    word: "ქოკი",
    translation: "ფეხები",
  },
  {
    index: 641,
    word: "ქოკი",
    translation: "ფეხები",
  },
  {
    index: 302,
    word: "ქომუჼ",
    translation: "მამალი",
  },
  {
    index: 109,
    word: "ქორდაჼ",
    translation: "შოვნა",
  },
  {
    index: 1242,
    word: "ქორდიეჼ",
    translation: "იშოვნა",
  },
  {
    index: 672,
    word: "ქორთ",
    translation: "თავის",
  },
  {
    index: 945,
    word: "ქოცუჲ",
    translation: "ქვევრი",
  },
  {
    index: 1169,
    word: "ქუმელაʹჲ",
    translation: "ჟოლო",
  },
  {
    index: 610,
    word: "ქურციჼ",
    translation: "დედოფალა",
  },
  {
    index: 1214,
    word: "ქუჩადჲო",
    translation: "აგროვებს",
  },
  {
    index: 1160,
    word: "ქუჩალა",
    translation: "ქუჩდება",
  },
  {
    index: 1176,
    word: "ქჰࣿექდორ",
    translation: "ამზადებდნენ",
  },
  {
    index: 118,
    word: "ქჰࣿექლა",
    translation: "ემზადება",
  },
  {
    index: 957,
    word: "ქჰࣿექჲუჲნ",
    translation: "მომზადებული",
  },
  {
    index: 167,
    word: "ქჰࣿექოდ",
    translation: "უმზადებს",
  },
  {
    index: 197,
    word: "ღაზეჼ",
    translation: "კარგი",
  },
  {
    index: 266,
    word: "ღაზეჼ",
    translation: "კარგი",
  },
  {
    index: 325,
    word: "ღაზეჼ",
    translation: "კარგი",
  },
  {
    index: 415,
    word: "ღაზეჼ",
    translation: "კარგი",
  },
  {
    index: 1113,
    word: "ღაზენ",
    translation: "კარგი",
  },
  {
    index: 245,
    word: "ღაზეჼჭ",
    translation: "სწორედ",
  },
  {
    index: 744,
    word: "ღებადჲო",
    translation: "ღებავენ",
  },
  {
    index: 1174,
    word: "ღოლნენაʹჲ",
    translation: "ღოლოს",
  },
  {
    index: 163,
    word: "ღოსხეთ",
    translation: "უხარიათ",
  },
  {
    index: 33,
    word: "ღოსხეთიჼ",
    translation: "გაუხარდა",
  },
  {
    index: 1163,
    word: "ყაჼწბი",
    translation: "ყუნწების",
  },
  {
    index: 29,
    word: "ყარ",
    translation: "წვიმა",
  },
  {
    index: 71,
    word: "ყარ",
    translation: "წვიმა",
  },
  {
    index: 577,
    word: "ყაურბაჼ",
    translation: "ყაურმა",
  },
  {
    index: 689,
    word: "ყეტₔლა",
    translation: "იღება",
  },
  {
    index: 354,
    word: "ყუვ",
    translation: "ქურდი",
  },
  {
    index: 826,
    word: "შაბოშ",
    translation: "კვეთის",
  },
  {
    index: 564,
    word: "შამფურმაქ",
    translation: "შამფურზე",
  },
  {
    index: 801,
    word: "შარაჲ",
    translation: "დო",
  },
  {
    index: 1133,
    word: "შარეჼ",
    translation: "სწორი",
  },
  {
    index: 1186,
    word: "შაშუჲ",
    translation: "შაშვები",
  },
  {
    index: 443,
    word: "შველ",
    translation: "შველი",
  },
  {
    index: 333,
    word: "ში",
    translation: "ორი",
  },
  {
    index: 34,
    word: "შილღეჼ",
    translation: "მეორე კი",
  },
  {
    index: 730,
    word: "შინბჵარკლიჼ",
    translation: "ორთვალა",
  },
  {
    index: 1040,
    word: "შკაფ“",
    translation: "კარადა",
  },
  {
    index: 1044,
    word: "შკაფეხ",
    translation: "კარადას",
  },
  {
    index: 996,
    word: "შკაფი",
    translation: "კარადები",
  },
  {
    index: 965,
    word: "შოკოლად",
    translation: "შოკოლადი",
  },
  {
    index: 1241,
    word: "შოკოლად",
    translation: "შოკოლადი",
  },
  {
    index: 529,
    word: "შორიჼ",
    translation: "ფართე",
  },
  {
    index: 591,
    word: "შტოლ",
    translation: "მაგიდა",
  },
  {
    index: 992,
    word: "შტოლი",
    translation: "მაგიდები",
  },
  {
    index: 927,
    word: "შტოფ",
    translation: "ბოცა",
  },
  {
    index: 79,
    word: "შუ-შუჲნ",
    translation: "თავ-თავისკენ",
  },
  {
    index: 1104,
    word: "შუჼ",
    translation: "????!",
  },
  {
    index: 1096,
    word: "შუჲ",
    translation: "თავიანთ",
  },
  {
    index: 460,
    word: "შურ",
    translation: "რძის",
  },
  {
    index: 242,
    word: "შურ“",
    translation: "რძეს",
  },
  {
    index: 824,
    word: "შურელ",
    translation: "მზადდება",
  },
  {
    index: 265,
    word: "შურეჼ",
    translation: "რძისგან",
  },
  {
    index: 379,
    word: "შურეჼ",
    translation: "რძისგან",
  },
  {
    index: 240,
    word: "შურეხ",
    translation: "რძეს",
  },
  {
    index: 1029,
    word: "შუშაბაჼდ",
    translation: "შუშაბანდი",
  },
  {
    index: 1030,
    word: "შუში",
    translation: "მინების",
  },
  {
    index: 204,
    word: "შხამენაʹჲ",
    translation: "შხამიანიც",
  },
  {
    index: 348,
    word: "ჩა",
    translation: "დათვი",
  },
  {
    index: 422,
    word: "ჩა",
    translation: "დათვი",
  },
  {
    index: 1184,
    word: "ჩაიღაʹჲ",
    translation: "ჩაიდაც",
  },
  {
    index: 990,
    word: "ჩაკ",
    translation: "სკამი",
  },
  {
    index: 582,
    word: "ჩაკუჲნმაქ",
    translation: "სკამზე",
  },
  {
    index: 587,
    word: "ჩაკუჲნმაქ",
    translation: "სკამზე",
  },
  {
    index: 92,
    word: "ჩალ",
    translation: "ჩალას",
  },
  {
    index: 381,
    word: "ჩამლიჼ",
    translation: "გემრიელი",
  },
  {
    index: 576,
    word: "ჩამლიჼ",
    translation: "გემრიელი",
  },
  {
    index: 1171,
    word: "ჩამლიჼ",
    translation: "გემრიელი",
  },
  {
    index: 1180,
    word: "ჩამლიჼ",
    translation: "გემრიელი",
  },
  {
    index: 887,
    word: "ჩამჩ",
    translation: "ჩამჩა",
  },
  {
    index: 922,
    word: "ჩაჼგალ",
    translation: "ჩანგალი",
  },
  {
    index: 656,
    word: "ჩეჲ",
    translation: "ჩაი",
  },
  {
    index: 969,
    word: "ჩეჲ",
    translation: "ჩაის",
  },
  {
    index: 968,
    word: "ჩეჲნიკ",
    translation: "ჩაიდანი",
  },
  {
    index: 825,
    word: "ჩუ",
    translation: "რძეში",
  },
  {
    index: 1224,
    word: "ჩუვეჼ",
    translation: "შინაგანის",
  },
  {
    index: 112,
    word: "ჩუჲხ",
    translation: "ბატკანის",
  },
  {
    index: 279,
    word: "ჩუჲხ",
    translation: "ბატკანი",
  },
  {
    index: 358,
    word: "ჩურეჼ",
    translation: "შინაური",
  },
  {
    index: 578,
    word: "ჩუხ",
    translation: "ბატკნის",
  },
  {
    index: 306,
    word: "ჩუხოჼ",
    translation: "ბატკნის",
  },
  {
    index: 813,
    word: "ჩჰࣿოგ",
    translation: "ჩოგი",
  },
  {
    index: 491,
    word: "ცარკ",
    translation: "კბილი",
  },
  {
    index: 292,
    word: "ციკაჼ",
    translation: "ციკანი",
  },
  {
    index: 1069,
    word: "ციკნენ",
    translation: "ციკანს",
  },
  {
    index: 48,
    word: "ციყოხ",
    translation: "ციყვზე",
  },
  {
    index: 600,
    word: "ციყუჲ",
    translation: "ციყვები",
  },
  {
    index: 1190,
    word: "ცო",
    translation: "არ",
  },
  {
    index: 187,
    word: "ცოკალ",
    translation: "მელია",
  },
  {
    index: 352,
    word: "ცოკალ",
    translation: "მელია",
  },
  {
    index: 403,
    word: "ცოკალ",
    translation: "მელია",
  },
  {
    index: 342,
    word: "ცომიჩეჰࣿე",
    translation: "არსად",
  },
  {
    index: 583,
    word: "ცჰა",
    translation: "ერთი",
  },
  {
    index: 331,
    word: "ცჰࣿა",
    translation: "ერთი",
  },
  {
    index: 867,
    word: "ცჰࣿადარი",
    translation: "ზოგიერთი",
  },
  {
    index: 31,
    word: "ცჰაჲნ",
    translation: "ერთ",
  },
  {
    index: 625,
    word: "ცჰࣿაჲნ",
    translation: "ერთ",
  },
  {
    index: 488,
    word: "ძოლ",
    translation: "ძვალი",
  },
  {
    index: 668,
    word: "ძოლ",
    translation: "ძვალი",
  },
  {
    index: 626,
    word: "ძოლილიჼ",
    translation: "ძვლიანი",
  },
  {
    index: 630,
    word: "ძოლილიჼ",
    translation: "ძვლიანი",
  },
  {
    index: 146,
    word: "ძუძაკ",
    translation: "გოგონა",
  },
  {
    index: 1065,
    word: "ძუძკეგო",
    translation: "გოგონას",
  },
  {
    index: 134,
    word: "ძუძკეს",
    translation: "გოგონა",
  },
  {
    index: 138,
    word: "ძუძკეს",
    translation: "გოგონა",
  },
  {
    index: 142,
    word: "ძუძკეს",
    translation: "გოგონა",
  },
  {
    index: 1072,
    word: "ძუძკეს",
    translation: "გოგონა",
  },
  {
    index: 1240,
    word: "ძუძკეს",
    translation: "გოგონამ",
  },
  {
    index: 1236,
    word: "წამლოდო",
    translation: "წამლის",
  },
  {
    index: 693,
    word: "წამწამი",
    translation: "წამწამები",
  },
  {
    index: 650,
    word: "წაჲნ",
    translation: "წაჲნ",
  },
  {
    index: 803,
    word: "წარმაქ",
    translation: "ცეცხლზე",
  },
  {
    index: 1045,
    word: "წე",
    translation: "ჰქვია",
  },
  {
    index: 1051,
    word: "წე",
    translation: "ჰქვია",
  },
  {
    index: 1261,
    word: "წე",
    translation: "ჰქვია",
  },
  {
    index: 477,
    word: "წეგეჼ",
    translation: "წითელი",
  },
  {
    index: 523,
    word: "წეგეჼ",
    translation: "წითელი",
  },
  {
    index: 653,
    word: "წეგეჼ",
    translation: "წითელი",
  },
  {
    index: 1250,
    word: "წეგენაʹჲ",
    translation: "წითელიცა",
  },
  {
    index: 743,
    word: "წეგეშ",
    translation: "წითლად",
  },
  {
    index: 435,
    word: "წეგეჩ",
    translation: "ტყის",
  },
  {
    index: 760,
    word: "წელტინაჲნ",
    translation: "ახალწლისთვის",
  },
  {
    index: 1222,
    word: "წემლა",
    translation: "იწმინდება",
  },
  {
    index: 345,
    word: "წენიჼ",
    translation: "სახლის",
  },
  {
    index: 846,
    word: "წენიჼ",
    translation: "გარეთა",
  },
  {
    index: 1116,
    word: "წვენ",
    translation: "წვენი",
  },
  {
    index: 873,
    word: "წვენერეჼ",
    translation: "წვნიანი",
  },
  {
    index: 918,
    word: "წვენერეჼ",
    translation: "წვნიანი",
  },
  {
    index: 652,
    word: "წიგ",
    translation: "სისხლი",
  },
  {
    index: 662,
    word: "წიკ",
    translation: "მუხლი",
  },
  {
    index: 1196,
    word: "წიწბერაჸ",
    translation: "წიწკანა",
  },
  {
    index: 611,
    word: "წიწლაჼ",
    translation: "წიწილების",
  },
  {
    index: 562,
    word: "წოდ",
    translation: "მწვადი",
  },
  {
    index: 1225,
    word: "წომალ/წომოლ",
    translation: "წამალი",
  },
  {
    index: 812,
    word: "წურადოშ",
    translation: "გამოწურვით",
  },
  {
    index: 125,
    word: "წურთნადბო",
    translation: "წვრთნის",
  },
  {
    index: 1255,
    word: "წჵეგენაʹჲ",
    translation: "წითელიც",
  },
  {
    index: 479,
    word: "ჭამაღ",
    translation: "ლოყა",
  },
  {
    index: 494,
    word: "ჭამღი",
    translation: "ლოყები",
  },
  {
    index: 635,
    word: "ჭანიკ",
    translation: "ნიკაპი",
  },
  {
    index: 690,
    word: "ჭანიკ",
    translation: "ნიკაპი",
  },
  {
    index: 777,
    word: "ჭარი",
    translation: "თევზი",
  },
  {
    index: 1200,
    word: "ჭივჭ",
    translation: "ჭივჭავი",
  },
  {
    index: 489,
    word: "ჭჵაღოჼ",
    translation: "მაგარი",
  },
  {
    index: 614,
    word: "ხა",
    translation: "ბარკალი",
  },
  {
    index: 621,
    word: "ხავნიხ",
    translation: "ბარკალზე",
  },
  {
    index: 722,
    word: "ხაკ",
    translation: "ხაკი",
  },
  {
    index: 1263,
    word: "ხაჲრხევ",
    translation: "ხარიხით",
  },
  {
    index: 571,
    word: "ხაშ",
    translation: "ხაში",
  },
  {
    index: 567,
    word: "ხაშლამ",
    translation: "ხაშლამა",
  },
  {
    index: 1043,
    word: "ხაჸბიეჼჩ",
    translation: "გაკეთებულ",
  },
  {
    index: 1110,
    word: "ხაჸეჼ",
    translation: "დაჯდა",
  },
  {
    index: 601,
    word: "ხენბი(ნ)მაქ",
    translation: "ხეებზე",
  },
  {
    index: 1219,
    word: "ხენბივაʹჲ",
    translation: "ხეებით და",
  },
  {
    index: 1206,
    word: "ხენბინ",
    translation: "ხეებზე",
  },
  {
    index: 63,
    word: "ხენეჼ",
    translation: "ხის",
  },
  {
    index: 95,
    word: "ხენეჼ",
    translation: "ხის",
  },
  {
    index: 713,
    word: "ხერხემლეგო",
    translation: "ხერხემალს",
  },
  {
    index: 1063,
    word: "ხეხკ",
    translation: "ცხენებს",
  },
  {
    index: 682,
    word: "ხეჸ",
    translation: "იცის",
  },
  {
    index: 76,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 128,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 645,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 882,
    word: "ხი",
    translation: "წყლის",
  },
  {
    index: 888,
    word: "ხი",
    translation: "წყლის",
  },
  {
    index: 894,
    word: "ხი",
    translation: "წყლის",
  },
  {
    index: 974,
    word: "ხი",
    translation: "წყლის",
  },
  {
    index: 979,
    word: "ხი",
    translation: "წყლის",
  },
  {
    index: 1111,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 1146,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 1149,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 1153,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 1157,
    word: "ხი",
    translation: "წყალი",
  },
  {
    index: 913,
    word: "ხილ",
    translation: "ხილის",
  },
  {
    index: 1117,
    word: "ხილ-ბოსტნეგორენ",
    translation: "ხილ-ბოსტნისგან",
  },
  {
    index: 781,
    word: "ხილო",
    translation: "წყალში",
  },
  {
    index: 215,
    word: "ხილოჰࣿაʹჲ",
    translation: "წყალშიც",
  },
  {
    index: 951,
    word: "ხილუვ",
    translation: "ხუკუთ",
  },
  {
    index: 762,
    word: "ხიჼკალ",
    translation: "ხინკალი",
  },
  {
    index: 878,
    word: "ხიჼკლი",
    translation: "ხინკლის",
  },
  {
    index: 585,
    word: "ხიჸ",
    translation: "ჯდება",
  },
  {
    index: 590,
    word: "ხიჸ",
    translation: "ჯდება",
  },
  {
    index: 205,
    word: "ხლიკ",
    translation: "ხვლიკი",
  },
  {
    index: 36,
    word: "ხორხოშლაჸ",
    translation: "ხორხოშელას",
  },
  {
    index: 1254,
    word: "ხუმწ",
    translation: "მოცხარი",
  },
  {
    index: 765,
    word: "ხუხადო",
    translation: "ხუხავენ",
  },
  {
    index: 273,
    word: "ჴა",
    translation: "ღორი",
  },
  {
    index: 313,
    word: "ჴა",
    translation: "ღორი",
  },
  {
    index: 1092,
    word: "ჴარშ",
    translation: "ღრები",
  },
  {
    index: 1192,
    word: "ჴაჴერჩ",
    translation: "ჴაჴერჩ",
  },
  {
    index: 1019,
    word: "ჴებლუჲნ",
    translation: "დასახური",
  },
  {
    index: 1026,
    word: "ჴებწბუჲნაʹჲ",
    translation: "უხეშ",
  },
  {
    index: 285,
    word: "ჴევბე",
    translation: "ხევში",
  },
  {
    index: 540,
    word: "ჴენ-ჴენი",
    translation: "სხვადასხვა",
  },
  {
    index: 792,
    word: "ჴენჴენაჸ",
    translation: "სხვადასხვა",
  },
  {
    index: 141,
    word: "ჴეპტოდ",
    translation: "აწვდის",
  },
  {
    index: 54,
    word: "ჴერეჼ",
    translation: "ქვის",
  },
  {
    index: 405,
    word: "ჴერჴალეჼ",
    translation: "ხერხიანი",
  },
  {
    index: 341,
    word: "ჴეჩ",
    translation: "სხვაგან",
  },
  {
    index: 993,
    word: "ჴეჩჴეჲჩ",
    translation: "სხვადასხვა",
  },
  {
    index: 997,
    word: "ჴეჩჴეჲჩ",
    translation: "სხვადასხვა",
  },
  {
    index: 789,
    word: "ჴეხკდანეჲნ",
    translation: "ჩამოსაკიდადა",
  },
  {
    index: 568,
    word: "ჴეხკდიენ",
    translation: "მოხარშული",
  },
  {
    index: 901,
    word: "ჴეხკდუჲნ",
    translation: "მოსამზადებელი",
  },
  {
    index: 895,
    word: "ჴეჰࣿუჲნ",
    translation: "მოსატანი",
  },
  {
    index: 975,
    word: "ჴეჰࣿუჲნ",
    translation: "სატარებელი",
  },
  {
    index: 606,
    word: "ჴირ‘ლ‘",
    translation: "ეშინია",
  },
  {
    index: 102,
    word: "ჴორ",
    translation: "ვაშლს",
  },
  {
    index: 1223,
    word: "ჴორ",
    translation: "ვაშლი",
  },
  {
    index: 745,
    word: "ჴორეხ",
    translation: "ვაშლს",
  },
  {
    index: 5,
    word: "ჴორი",
    translation: "ვაშლებს",
  },
  {
    index: 427,
    word: "ჴშიროშ",
    translation: "ხშირად",
  },
  {
    index: 691,
    word: "ჴშიროშ",
    translation: "ხშირად",
  },
  {
    index: 224,
    word: "ჯავშნარეჼ",
    translation: "ჯავშნიანი",
  },
  {
    index: 904,
    word: "ჯამ-თეფში",
    translation: "ჯამ-ჭურჭელი",
  },
  {
    index: 148,
    word: "ჯარბალა",
    translation: "უჯავრდება",
  },
  {
    index: 209,
    word: "ჯოჯ",
    translation: "ჯოჯო",
  },
  {
    index: 472,
    word: "ჯუღურ",
    translation: "უშნო",
  },
  {
    index: 1221,
    word: "ჰაერ",
    translation: "ჰაერი",
  },
  {
    index: 815,
    word: "ჰࣿათგეჸ",
    translation: "სიტყვა",
  },
  {
    index: 907,
    word: "ჰࣿათხ",
    translation: "წინ",
  },
  {
    index: 721,
    word: "ჰࣿათხეჸ",
    translation: "კერავდნენ",
  },
  {
    index: 886,
    word: "ჰࣿათხეჸ",
    translation: "წინათ",
  },
  {
    index: 939,
    word: "ჰࣿათხეჸ",
    translation: "ადრე",
  },
  {
    index: 1178,
    word: "ჰࣿათხეჸ",
    translation: "უწინ",
  },
  {
    index: 473,
    word: "ჰࣿაკ",
    translation: "შუბლი",
  },
  {
    index: 537,
    word: "ჰࣿაკ",
    translation: "შუბლი",
  },
  {
    index: 804,
    word: "ჰࣿალ",
    translation: "გაცხელების",
  },
  {
    index: 820,
    word: "ჰࣿალ",
    translation: "მოზელვით",
  },
  {
    index: 1082,
    word: "ჰࣿალ",
    translation: "აიყვანა",
  },
  {
    index: 694,
    word: "ჰࣿალოʹჲ",
    translation: "ზემოთ და",
  },
  {
    index: 324,
    word: "ჰࣿამახეჸ",
    translation: "ყველაზე",
  },
  {
    index: 370,
    word: "ჰࣿამახეჸ",
    translation: "ყველაზე",
  },
  {
    index: 458,
    word: "ჰࣿამახეჸ",
    translation: "ყველაზე",
  },
  {
    index: 575,
    word: "ჰࣿამახეჸ",
    translation: "ყველაზე",
  },
  {
    index: 616,
    word: "ჰࣿამახეჸ",
    translation: "ყველაზე",
  },
  {
    index: 1112,
    word: "ჰࣿამახეჸ",
    translation: "ყველაზე",
  },
  {
    index: 227,
    word: "ჰაჼლუჼ",
    translation: "თვინიერი",
  },
  {
    index: 312,
    word: "ჰაჼლუჼ",
    translation: "თვინიერი",
  },
  {
    index: 280,
    word: "ჰაჼლუჩოჼ",
    translation: "ლმობიერების",
  },
  {
    index: 702,
    word: "ჰࣿაჲჭ",
    translation: "სუნი",
  },
  {
    index: 833,
    word: "ჰࣿარნიჼ",
    translation: "ფქვილისგან",
  },
  {
    index: 1105,
    word: "ჰࣿაწუკ",
    translation: "ჩიტი",
  },
  {
    index: 1108,
    word: "ჰࣿაწუკ",
    translation: "ჩიტი",
  },
  {
    index: 1202,
    word: "ჰࣿაწუკ",
    translation: "ჩიტი",
  },
  {
    index: 296,
    word: "ჰࣿახ",
    translation: "ჯიხვი",
  },
  {
    index: 430,
    word: "ჰࣿახ",
    translation: "ჯიხვი",
  },
  {
    index: 158,
    word: "ჰࣿაჴარ",
    translation: "ხვეტა",
  },
  {
    index: 82,
    word: "ჰაჴიʹნ",
    translation: "დაუბერა და",
  },
  {
    index: 821,
    word: "ჰࣿევოშ",
    translation: "მზადდება",
  },
  {
    index: 1008,
    word: "ჰࣿევოშაʹჲ",
    translation: "სიტყვა",
  },
  {
    index: 1100,
    word: "ჰࣿეჲწკი",
    translation: "ჩტები",
  },
  {
    index: 1095,
    word: "ჰࣿეჲწკივ",
    translation: "ჩიტებმა",
  },
  {
    index: 899,
    word: "ჰერწელჩ",
    translation: "ქვაბები",
  },
  {
    index: 877,
    word: "ჰერწნილეჼ",
    translation: "ქვაბიდან",
  },
  {
    index: 872,
    word: "ჰࣿერწნილეჼ",
    translation: "ქვაბიდან",
  },
  {
    index: 1191,
    word: "ჰࣿიბ",
    translation: "მიდიან",
  },
  {
    index: 256,
    word: "ჰࣿუნახ",
    translation: "ტყეში",
  },
  {
    index: 603,
    word: "ჰࣿუნახ",
    translation: "ტყეში",
  },
  {
    index: 349,
    word: "ჰࣿუნიჼ",
    translation: "ტყის",
  },
  {
    index: 437,
    word: "ჰࣿუნიჼ",
    translation: "ფერის",
  },
  {
    index: 446,
    word: "ჰࣿუნიჼ",
    translation: "ტანიანი",
  },
  {
    index: 454,
    word: "ჰࣿუნიჼ",
    translation: "მქონე",
  },
];
const SWP = sentences.filter((sentence) => sentence.picture);
const testWord = sentences[0].sentence.split(" ");
// console.log(SWP);
for (const sentence of sentences) {
  for (const bWord of sentence.sentence.split(" ")) {
    const testW = words.find((word) => word.word == bWord);
    console.log("bword", testW, bWord);
  }
  const someWords = words.filter((word) => word.word == testWord[0]);
}

// sentences.map((sentence) => {
//   const tword = words.filter((word) => word.word == "ჯარბალა");
//   // console.log("dwadgs", tword, tword.translation);
//   sentence.sentence.split(" ").map((bWord) => {
//     // console.log("bword", bWord);
//     // console.log("tword", bWord);
//     // const someWords = words.filter((word) => word.word == testWord[0]);
//   });
// });

// const myTimeout = setTimeout(myGreeting, 5000);

// function myGreeting() {
// }
