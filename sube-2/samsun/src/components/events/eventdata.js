const speakersdata = [
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/cengiz-peklevan.jpg?v=6',
        title: "Doğal ve Yapay Zekanın Uygulamalı Matematiği",
        name: "Dr. Cengiz PEHLEVAN",
        date: "10 Ocak 2024 Çarşamba",
        time: "16.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/eren-gunhan-ulusoy.jpg?v=6',
        title: "Doğal ve Yapay Zekanın Uygulamalı Matematiği",
        name: "Dr. Eren Günhan ULUSOY",
        date: "11 Ocak 2024 Perşembe",
        time: "11.00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/adnan-celik.jpg?v=6',
        title: "Türkiye Yüzyılında Savunma ve Uzay",
        name: "Adnan ÇELİK",
        date: "10 Ocak 2024 Çarşamba",
        time: "15.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ilkay-sengul.jpg?v=6',
        title: "Sektör Kampüste Programı Uygulamasının Tanıtımı",
        name: "İlkay ŞENGÜL",
        date: "10 Ocak 2024 Çarşamba",
        time: "15.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/jenny-m-divleli.jpg?v=6',
        title: "Çocuk Edebiyatının Önemi ve Etisi",
        name: "Jenny M. DİVLELİ",
        date: "10 Ocak 2024 Çarşamba",
        time: "15.00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/kemal-yuksek.jpg?v=6',
        title: "Yeni Sivil Havacılık Modeli",
        name: "Prof. Dr. Kemal YÜKSEK",
        date: "10 Ocak 2024 Çarşamba",
        time: "14.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/mahmut-muhiddin-keskin.jpg?v=6',
        title: "Cumhurbaşkanlığı Yatırım Ofisi Faaliyetleri",
        name: "Mahmut Muhiddin KESKİN",
        date: "10 Ocak 2024 Çarşamba",
        time: "14.00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/nihat-selim-ozge-oniz.jpg?v=6',
        title: "Otokoç Otomotivde Kariyer Olanakları",
        name: "Nihat Selim Birleşik ve Özge ÖNİZ",
        date: "10 Ocak 2024 Çarşamba",
        time: "12.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/serdar-kizil1.jpg?v=6',
        title: "Sağlık Bakanlığı Personel İstihdamı ve Kariyer İmkanları",
        name: "Serdar KIZIL",
        date: "10 Ocak 2024 Çarşamba",
        time: "13.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ugur-karaboga.jpg?v=6',
        title: "İş Arama Süreçlerinde Değişim ve Yapay Zeka",
        name: "Uğur KARABOĞA",
        date: "10 Ocak 2024 Çarşamba",
        time: "11.00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/volkan-mutlu-coskun.jpg?v=6',
        title: "Meteoroloji Alanında Kariyer",
        name: "Volkan Mutlu ÇOŞKUN",
        date: "10 Ocak 2024 Çarşamba",
        time: "12.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/mehmet-teyfik-nane.jpg?v=6',
        title: "Havayolu İşletmeciliğinde Liderlik",
        name: "Mehmet Tevfik NANE",
        date: "11 Ocak 2024 Perşembe",
        time: "10.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/hayati-akbas.jpg?v=6',
        title: "Sağlık Sektöründe Kariyer ve Girişimlik",
        name: "Prof. Dr. Hayati AKBAŞ",
        date: "10 Ocak 2024 Çarşamba",
        time: "16.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/umit-dedezade.jpg?v=6',
        title: "Küçük Bir Evin Mutfağında Başlayan Başarı Hikayesi",
        name: "Ümit DEDEZADE",
        date: "10 Ocak 2024 Çarşamba",
        time: "15.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/oguz-dokur.jpg?v=6',
        title: "İnsan Kaynaklarının Fonksiyonları ve Kariyer Yolculuğu",
        name: "Oğuz DOKUR",
        date: "10 Ocak 2024 Çarşamba",
        time: "11.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/abdulkerim-cay.jpg?v=6',
        title: "Türk Hava Yollarında İnsan Kaynakları Yönetimi ve İstihdam Süreci",
        name: "Abdulkerim ÇAY",
        date: "11 Ocak 2024 Perşembe",
        time: "15.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ahmet-akca1.jpg?v=6',
        title: "Geleceğin İnşasında Eğitim ve Gençlik",
        name: "Ahmet AKÇA",
        date: "11 Ocak 2024 Perşembe",
        time: "14:00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ahmet-faruk-aysen.jpg?v=6',
        title: "Paranın Yeniden İcadı: Dijital Paralar",
        name: "Prof. Dr. Ahmet Faruk AYSAN",
        date: "11 Ocak 2024 Perşembe",
        time: "13.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ali-dost.jpg?v=6',
        title: "Hızla Değişen Dünyada Girişimcilik",
        name: "Ali DOST",
        date: "11 Ocak 2024 Perşembe",
        time: "16.00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/busra-gok-irem-yagci.jpg?v=6',
        title: "BTK Akademi",
        name: "Büşra GÖK ve İrem YAĞCI",
        date: "11 Ocak 2024 Perşembe",
        time: "11.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/cemalettin-komurcu.jpg?v=6',
        title: "Yarınların İnşasında Kaynakların Verimli Kullanımı",
        name: "Cemalettin Kömürcü",
        date: "11 Ocak 2024 Perşembe",
        time: "11:00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/davut-hanbay.jpg?v=6',
        title: "Yapay Zekanın Geleceği ve Yaşama Etkisi",
        name: "Prof. Dr. Davut HANBAY",
        date: "11 Ocak Perşembe",
        time: "11:00",
        hall: "Samsun Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ilyas-likoglu1.jpg?v=6',
        title: "Mülakat Deneyimleri",
        name: "İlyas Likoğlu",
        date: "11 Ocak Perşembe",
        time: "12.00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ismail-hakki-genc.jpg?v=6',
        title: "Samsun'dan Teksas ve Dubai'ye Uzanan Ekonomi ve Kariyer Yolculuğu",
        name: "Prof. Dr. İsmail Hakkı GENÇ",
        date: "11 Ocak Perşembe",
        time: "14.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/koray-sevindi.jpg?v=6',
        title: "Animasyon Eğitimi",
        name: "Doç. Dr. Koray SEVİNDİ",
        date: "11 Ocak Perşembe",
        time: "13.00",
        hall: "Samsun Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/muhiddin-sahin1.jpg?v=6',
        title: "Kariyer Fırsatları ve Kamu İktisadi Teşebbüsü",
        name: "Muhiddin ŞAHİN",
        date: "11 Ocak 2024 Perşembe",
        time: "13:00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/muhammet-saymaz.jpg?v=6',
        title: "Milli Teknoloji Hamlesi Yolculuğunda T3 Vakfı ve Teknofest",
        name: "Muhammet SAYMAZ",
        date: "11 Ocak 2024 Perşembe",
        time: "12:00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/murat-siviloglu.jpg?v=6',
        title: "Yapay zeka Çağında Tarihçiliğin Geleceği",
        name: "Murat ŞİVİLOĞLU",
        date: "11 Ocak 2024 Perşembe",
        time: "15:00",
        hall: "Samsun Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/mustafa-yagli.jpg?v=6',
        title: "Girişimcilik Üretim Yatırım",
        name: "Mustafa YAĞLI",
        date: "11 Ocak 2024 Perşembe",
        time: "10:00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/pinar-gundor-sonmez.jpg?v=6',
        title: "Eğitim ve Kariyer Yolculuğu",
        name: "Pınar GÜNGÖR SÖNMEZ",
        date: "11 Ocak 2024 Perşembe",
        time: "15:00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/selen-alkim.jpg?v=6',
        title: "Otomotiv Sektörü Nereye Gidiyor",
        name: "Selen ALKIM",
        date: "11 Ocak 2024 Perşembe",
        time: "13:00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/serkan-karabacak.jpg?v=6',
        title: "Sermaye Piyasalarında Lisanslama Sınavları",
        name: "Serkan KARABACAK",
        date: "11 Ocak 2024 Perşembe",
        time: "15:00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/alptuh-ahmet-guney.jpg?v=6',
        title: "Almanyada Türk Tarihi Çalışmaları",
        name: "Alptuğ Ahmet GÜNEY",
        date: "11 Ocak 2024 Perşembe",
        time: "10:00",
        hall: "Samsun Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/aydin-zaim.jpg?v=6',
        title: "Türksat Uyduları ve Kariyer Fırsatları",
        name: "Aydın ZAİM",
        date: "10 Ocak 2024 Çarşamba",
        time: "13:00",
        hall: "Samsun Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/cemre-cinar.jpg?v=6',
        title: "Kariyer Yolculuğuna Başlarken",
        name: "Cemre ÇINAR",
        date: "10 Ocak 2024 Çarşamba",
        time: "16:00",
        hall: "19 Mayıs Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/emine-yurdusay.jpg?v=6',
        title: "Samsun Üniversitesinden Baykar'a Kariyer Yolculuğu",
        name: "Emine YURDUSAY",
        date: "11 Ocak Perşembe",
        time: "12.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ismet-akcay.jpg?v=6',
        title: "Sporun Kişisel Gelişim ve Toplumsal Gelişimdeki Yeri",
        name: "Opt. Dr. İsmet AKÇAY",
        date: "11 Ocak Perşembe",
        time: "16.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/murat-mustafa-gencey.jpg?v=6',
        title: "Dijital Dönüşüm Ekosistemi Türkiye Örneği",
        name: "Murat Mustafa GENCEL",
        date: "11 Ocak Perşembe",
        time: "10.00",
        hall: "Karadeniz Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/nebahat-demir.jpg?v=6',
        title: "ARGE Merkezi Yolculuğumuz",
        name: "Nebahat Demir",
        date: "11 Ocak Perşembe",
        time: "16.00",
        hall: "Bandırma Salonu"
    },
    {
        src: 'https://okaf.samsun.edu.tr/assets/konusmacilar/ramazan-terzi.jpg?v=6',
        title: "Dijital Genç Yapay Zeka Ekosistemi ile Geleceğimizi Şekillendiriyoruz",
        name: "Dr. Ramazan TERZİ",
        date: "10 Ocak Çarşamba",
        time: "13.00",
        hall: "Bandırma Salonu"
    }
];

export default speakersdata;