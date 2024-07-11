const translations = {
    en: {
        text11: "Home",
        text12: "About",
        text13: "Create your plan",
        greatMade: "Great coffee <br> made simple.",
        greatYour: "Start your mornings with the world’s best coffees. Try our <br> expertly curated artisan coffees from our <br> best roasters delivered directly to your door, at your schedule.",
        greatPlan: "Create your plan",
        itemText2_1: "Light and flavorful blend with cocoa <br> and black pepper for an intense <br> experience",
        itemText2_2: "Light and flavorful blend with cocoa <br> and black pepper for an intense <br> experience",
        itemText2_3: "Light and flavorful blend with cocoa <br> and black pepper for an intense <br> experience",
        itemText2_4: "Light and flavorful blend with cocoa <br> and black pepper for an intense <br> experience",
        itemText2_5: "Light and flavorful blend with cocoa <br> and black pepper for an intense <br> experience",
        itemText2_6: "Light and flavorful blend with cocoa <br> and black pepper for an intense <br> experience",
        whyText1: "Why choose us?",
        whyText2: "A large part of our role is choosing which particular coffees will be featured <br> in our range. This means working closely with the best coffee growers to give <br> you a more impactful experience on every level.",
        best1: "Best quality",
        artisan1: "Discover an endless variety of the <br> world’s best artisan coffee from each <br> of our roasters.",
        best2: "Exclusive benefits",
        artisan2: "Special offers and swag when you <br> subscribe, including 30% off your <br> first shipment.",
        best3: "Free shipping",
        artisan3: "We cover the cost and coffee is <br> delivered fast. Peak freshness: <br> guaranteed.",
        howText: "How it works",
        sonText1: "Pick your <br> coffee",
        sonText2_1: "Select from our evolving range of artisan coffees. <br> Our beans are ethically sourced and we pay fair <br> prices for them. There are new coffees in all <br> profiles every month for you to try out.",
        sonText2: "Choose the <br> frequency",
        sonText2_2: "Customize your order frequency, quantity, even <br> your roast style and grind type. Pause, skip or <br> cancel your subscription with no commitment <br> through our online portal.",
        sonText3: "Receive and <br> enjoy!",
        sonText2_3: "We ship your package within 48 hours, freshly <br> roasted. Sit back and enjoy award-winning world- <br>class coffees curated to provide a distinct tasting <br> experience.",
        howPlan: "Create your plan",
        footerText1: "Home",
        footerText2: "About",
        footerText3: "Create your plan"
    },
    uz: {
        text11: "Bosh sahifa",
        text12: "Biz haqimizda",
        text13: "Rejangizni yarating",
        greatMade: "Ajoyib qahva <br> oddiy qilingan.",
        greatYour: "Ertalablaringizni dunyoning eng yaxshi qahvalari bilan boshlang. Bizning <br> maxsus tayyorlangan hunarmand qahvalarimizni sinab ko'ring, <br> eng yaxshi qovuruvchilarimizdan bevosita eshigingizga yetkazib bering.",
        greatPlan: "Rejangizni yarating",
        itemText2_1: "Kakao va qora qalampir bilan engil va mazali aralashma <br> shiddatli tajriba uchun",
        itemText2_2: "Kakao va qora qalampir bilan engil va mazali aralashma <br> shiddatli tajriba uchun",
        itemText2_3: "Kakao va qora qalampir bilan engil va mazali aralashma <br> shiddatli tajriba uchun",
        itemText2_4: "Kakao va qora qalampir bilan engil va mazali aralashma <br> shiddatli tajriba uchun",
        itemText2_5: "Kakao va qora qalampir bilan engil va mazali aralashma <br> shiddatli tajriba uchun",
        itemText2_6: "Kakao va qora qalampir bilan engil va mazali aralashma <br> shiddatli tajriba uchun",
        whyText1: "Nega bizni tanlaysiz?",
        whyText2: "Bizning rolning katta qismi qaysi qahvalar bizning assortimentimizda namoyish etilishini tanlashdir. Bu shuni anglatadiki, biz sizga har bir darajada yanada ta'sirchan tajriba berish uchun eng yaxshi qahva yetishtiruvchilari bilan yaqindan hamkorlik qilamiz.",
        best1: "Eng yaxshi sifat",
        artisan1: "Dunyoning eng yaxshi hunarmand qahvalarining <br> cheksiz turini kashf eting.",
        best2: "Eksklyuziv imtiyozlar",
        artisan2: "Maxsus takliflar va obuna bo'lganingizda sovg'alar, shu jumladan birinchi jo'natmada 30% chegirma.",
        best3: "Bepul yetkazib berish",
        artisan3: "Biz xarajatlarni qoplaymiz va qahva tez yetkazib beriladi. Yangi pishirilgan: kafolatlangan.",
        howText: "Bu qanday ishlaydi",
        sonText1: "Qahvani tanlang",
        sonText2_1: "Bizning hunarmand qahvalarning evolyutsion assortimentidan tanlang. Bizning donalarimiz etik jihatdan yetishtiriladi va biz ular uchun adolatli narxlarni to'laymiz. Har oy siz uchun yangi profillar mavjud.",
        sonText2: "Tez-tezlikni tanlang",
        sonText2_2: "Buyurtmangizning chastotasini, miqdorini, hatto qovurish uslubini va maydalash turini moslashtiring. Obunangizni hech qanday majburiyliksiz to'xtating, o'tkazing yoki bekor qiling.",
        sonText3: "Qabul qiling va zavqlaning!",
        sonText2_3: "Biz sizning paketingizni 48 soat ichida jo'natamiz, yangi qovurilgan. O'tiring va dunyo darajasidagi mukofotga sazovor qahvalardan bahramand bo'ling.",
        howPlan: "Rejangizni yarating",
        footerText1: "Bosh sahifa",
        footerText2: "Biz haqimizda",
        footerText3: "Rejangizni yarating"
    }
};

document.getElementById('english').addEventListener('click', function () {
    setLanguage('en');
});

document.getElementById('uzbek').addEventListener('click', function () {
    setLanguage('uz');
});

function setLanguage(language) {
    document.getElementById('text11').innerHTML = translations[language].text11;
    document.getElementById('text12').innerHTML = translations[language].text12;
    document.getElementById('text13').innerHTML = translations[language].text13;
    document.getElementById('great-made').innerHTML = translations[language].greatMade;
    document.getElementById('great-your').innerHTML = translations[language].greatYour;
    document.getElementById('great-plan').innerHTML = translations[language].greatPlan;
    document.getElementById('item_text2-1').innerHTML = translations[language].itemText2_1;
    document.getElementById('item_text2-2').innerHTML = translations[language].itemText2_2;
    document.getElementById('item_text2-3').innerHTML = translations[language].itemText2_3;
    document.getElementById('item_text2-4').innerHTML = translations[language].itemText2_4;
    document.getElementById('item_text2-5').innerHTML = translations[language].itemText2_5;
    document.getElementById('item_text2-6').innerHTML = translations[language].itemText2_6;
    document.getElementById('why-text1').innerHTML = translations[language].whyText1;
    document.getElementById('why-text2').innerHTML = translations[language].whyText2;
    document.getElementById('best-1').innerHTML = translations[language].best1;
    document.getElementById('artisan-1').innerHTML = translations[language].artisan1;
    document.getElementById('best-2').innerHTML = translations[language].best2;
    document.getElementById('artisan-2').innerHTML = translations[language].artisan2;
    document.getElementById('best-3').innerHTML = translations[language].best3;
    document.getElementById('artisan-3').innerHTML = translations[language].artisan3;
    document.getElementById('how-text').innerHTML = translations[language].howText;
    document.getElementById('son-text-1').innerHTML = translations[language].sonText1;
    document.getElementById('son-text2-1').innerHTML = translations[language].sonText2_1;
    document.getElementById('son-text-2').innerHTML = translations[language].sonText2;
    document.getElementById('son-text2-2').innerHTML = translations[language].sonText2_2;
    document.getElementById('son-text-3').innerHTML = translations[language].sonText3;
    document.getElementById('son-text2-3').innerHTML = translations[language].sonText2_3;
    document.getElementById('how-plan').innerHTML = translations[language].howPlan;
    document.getElementById('footer-text-1').innerHTML = translations[language].footerText1;
    document.getElementById('footer-text-2').innerHTML = translations[language].footerText2;
    document.getElementById('footer-text-3').innerHTML = translations[language].footerText3;
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Simulating loading process
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000); // 3 sekund
});
