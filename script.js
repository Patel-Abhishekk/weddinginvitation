/**
 * Ritu & Bhavya - Shubh Vivah Wedding Website
 * Interactive Script: Bilingual Engine, Countdown, Calendar, Audio, Kankotri Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Translations Dictionary (Gujarati & English)
  const translations = {
    en: {
      site_title: "Ritu & Bhavya - Wedding Invitation",
      brand_title: "Ritu & Bhavya",
      nav_home: "Home",
      nav_story: "Our Story",
      nav_schedule: "Ceremonies",
      nav_venue: "Venue & Travel",
      nav_family: "Family",
      nav_faq: "FAQ",
      nav_kankotri: "Original Card",

      invocations: "।। Jai Yogeshwar ।। &nbsp;•&nbsp; ।। Shree Ganeshaya Namah ।। &nbsp;•&nbsp; ।। Jai Ashapuri Mataji ।।",
      shloka: "વક્રતુંડ મહાકાય સૂર્યકોટિ સમપ્રભ: । નિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા ॥",
      shloka_trans: "O Lord Ganesha of curved trunk and immense aura like a million suns, please make all our auspicious endeavors free of obstacles forever.",

      hero_tagline: "We're Getting Married!",
      hero_title: "Auspicious Wedding",
      couple_names: "Chi. Ritu & Chi. Bhavya",
      hero_date: "Saturday, January 2, 2027",
      hero_venue: "Bhavan's Party Plot, Vadodara",
      countdown_title: "Counting Down to Our Special Day",
      cd_days: "Days",
      cd_hours: "Hours",
      cd_mins: "Minutes",
      cd_secs: "Seconds",
      btn_schedule: "View Ceremonies",
      btn_calendar: "Add to Calendar",
      btn_kankotri: "View Original Kankotri",

      story_subtitle: "With the Blessings of Ashapuri Mata",
      story_title: "Our Next Chapter Begins",
      poem_trans: "“Your presence will fill the flowers with fragrant delight, birds will soar joyfully across the silver sky; when you grace our Didi's wedding, our hearts will rejoice with unbound joy.”",
      bride_tag: "The Bride",
      bride_name: "Chi. Ritu",
      bride_family: "Beloved Daughter of <strong>Shri Vijaybhai Rasikbhai Patel</strong> & <strong>A.Sau. Alkaben Vijaybhai Patel</strong><br>Granddaughter of Late Rasikbhai Ganpatbhai Patel & Gangs. Hansaben Patel<br>Native of Ganeshpura",
      groom_tag: "The Groom",
      groom_name: "Chi. Bhavya",
      groom_family: "Beloved Son of <strong>Shri Tarunbhai Mahendrabhai Patel</strong> & <strong>A.Sau. Jignaben Tarunbhai Patel</strong>",

      schedule_subtitle: "Ceremony & Celebrations",
      schedule_title: "Auspicious Events Itinerary",
      schedule_desc: "We cordially invite you and your family to join us in every blessed celebration.",
      day1_header: "Friday, January 1, 2027",
      day1_samvat: "Samvat 2083, Magsar Vad Nom",
      day2_header: "Saturday, January 2, 2027",
      day2_samvat: "Samvat 2083, Magsar Vad Dasam",

      event_ganesh_title: "Ganesh Sthapana",
      event_ganesh_desc: "Seeking divine blessings of Lord Ganesha for an auspicious start to the wedding festivities.",
      event_ganesh_time: "1:45 PM",
      event_ganesh_loc: "At Our Residence: 889-Vaikunth Society, Near Shree Ambe Vidyalaya, Waghodia Road, Vadodara",

      event_mosalu_title: "Mosalu (Mameru)",
      event_mosalu_desc: "Traditional welcoming of maternal relatives bearing blessings, auspicious gifts, and wedding jewelry.",
      event_mosalu_time: "7:30 AM",
      event_mosalu_loc: "Bhavan's Party Plot, Bapod, Vadodara",

      event_grahshanti_title: "Grah Shanti",
      event_grahshanti_desc: "Sacred Vedic fire ritual invoked to seek peace and harmony from the nine celestial planets.",
      event_grahshanti_time: "9:30 AM",
      event_grahshanti_loc: "Bhavan's Party Plot, Bapod, Vadodara",

      event_lunch_title: "Wedding Lunch (Priti Bhojan)",
      event_lunch_desc: "Traditional auspicious Gujarati wedding lunch banquet with family and guests.",
      event_lunch_time: "12:00 PM",
      event_lunch_loc: "Bhavan's Party Plot, Bapod, Vadodara",

      event_lagna_title: "Shubh Lagna & Hastamelap",
      event_lagna_desc: "Sacred Vedic wedding ceremony, Varmala exchange, Kanyadaan, Hastamelap, and Saptapadi vows.",
      event_lagna_time: "6:00 PM",
      event_lagna_loc: "Bhavan's Party Plot, Bapod, Vadodara",

      event_dinner_title: "Wedding Dinner (Priti Bhojan)",
      event_dinner_desc: "Grand festive wedding dinner reception celebrating the union of Ritu & Bhavya with family and friends.",
      event_dinner_time: "6:00 PM onwards",
      event_dinner_loc: "Bhavan's Party Plot, Bapod, Vadodara",

      venue_subtitle: "For Our Traveling Guests",
      venue_title: "Venues & Directions",
      venue_desc: "Detailed locations and convenient navigation links for our celebration venues in Vadodara.",
      venue1_type: "Main Wedding Venue",
      venue1_name: "Bhavan's Party Plot",
      venue1_addr: "Next to SSV-3 School, Bapod, Vadodara, Gujarat 390019",
      venue2_type: "Residence Venue (Ganesh Sthapana)",
      venue2_name: "Patel Family Residence",
      venue2_addr: "889-Vaikunth Society, Near Shree Ambe Vidyalaya, Waghodia Road, Vadodara, Gujarat 390019",
      btn_directions: "Open in Google Maps",

      travel_title: "Getting to Vadodara",
      travel_flight: "By Flight: Vadodara Airport (BDQ) is approximately 7 km away (approx 15-20 mins by cab).",
      travel_train: "By Train: Vadodara Junction (BRC) is approximately 7-8 km away with 24/7 taxi and auto service.",
      travel_road: "By Road: Easily accessible via NH 48, Waghodia Crossing, and Ajwa Road.",

      family_subtitle: "With Warm Greetings & Regards",
      family_title: "Hosts & Family Members",
      hosts_tag: "Warm Invitation From (નિમંત્રક)",
      hosts_names: "Shri Vijaybhai Rasikbhai Patel & A.Sau. Alkaben Vijaybhai Patel",
      hosts_addr: "889-Vaikunth Society, Near Shree Ambe Vidyalaya, Waghodia Road, Vadodara",
      snehathin_title: "Affectionately Yours (લિ. આપના સ્નેહાધિન)",
      darshan_title: "Welcomed by Loving Younger Generation & Cousins (લિ. આપના દર્શનાભિલાષી)",
      darshan_note: "Excitedly waiting to welcome everyone to our dear sister's wedding!",

      faq_subtitle: "You've Got Questions…",
      faq_title: "Guest Guide & FAQs",
      faq_q1: "What is the recommended dress code?",
      faq_a1: "Traditional Indian festive / ethnic wear! Elegant sarees, lehengas, anarkalis for ladies; kurta-pajamas, bandhgalas, or sherwanis for gentlemen.",
      faq_q2: "What is the policy regarding gifts?",
      faq_a2: "Your warm presence, love, and heartfelt blessings for Ritu & Bhavya are the greatest gifts we could ever ask for! (સહર્ષ આશીર્વાદ એ જ અમારી સૌથી મોટી ભેટ છે.)",
      faq_q3: "Is parking available at Bhavan's Party Plot?",
      faq_a3: "Yes, ample parking space is available at the venue premises for both four-wheelers and two-wheelers.",
      faq_q4: "Whom can we contact for assistance or accommodations?",
      faq_a4: "Feel free to call or WhatsApp our hosts Shri Vijaybhai (+91 98240 59163) or Alkaben (+91 96246 63102).",

      footer_monogram: "R & B",
      footer_tagline: "Together with our families, we thank you for your love & blessings",
      footer_date_venue: "Saturday, January 2, 2027 • Bhavan's Party Plot, Vadodara",
      footer_copy: "© 2027 Ritu & Bhavya Wedding Invitation. Lovingly crafted for our dear Didi."
    },
    gu: {
      site_title: "ચિ. રિતુ & ચિ. ભવ્ય - શુભવિવાહ નિમંત્રણ",
      brand_title: "રિતુ અને ભવ્ય",
      nav_home: "મુખ્ય પૃષ્ઠ",
      nav_story: "સ્નેહી શ્રી",
      nav_schedule: "મંગલ અવસર",
      nav_venue: "શુભ સ્થળ",
      nav_family: "પરિવાર",
      nav_faq: "પ્રશ્નોત્તરી",
      nav_kankotri: "મૂળ કંકોત્રી",

      invocations: "।। જય યોગેશ્વર ।। &nbsp;•&nbsp; ।। શ્રી ગણેશાય નમ: ।। &nbsp;•&nbsp; ।। જય આશાપુરી માતાજી ।।",
      shloka: "વક્રતુંડ મહાકાય સૂર્યકોટિ સમપ્રભ: । નિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા ॥",
      shloka_trans: "હે વક્રતુંડ, મહાકાય, કરોડો સૂર્ય સમાન તેજસ્વી ગણેશ ભગવાન, અમારા સર્વ કાર્યો હંમેશા નિર્વિઘ્ન પૂર્ણ કરો.",

      hero_tagline: "શુભવિવાહ મહોત્સવ",
      hero_title: "શુભવિવાહ",
      couple_names: "ચિ. રિતુ ✦ ચિ. ભવ્ય",
      hero_date: "શનિવાર, તા. ૦૨-૦૧-૨૦૨૭",
      hero_venue: "ભવન્સ પાર્ટી પ્લોટ, વડોદરા",
      countdown_title: "લગ્ન મહોત્સવની શુભ ઘડીઓ",
      cd_days: "દિવસ",
      cd_hours: "કલાક",
      cd_mins: "મિનિટ",
      cd_secs: "સેકન્ડ",
      btn_schedule: "કાર્યક્રમ જુઓ",
      btn_calendar: "કેલેન્ડરમાં ઉમેરો",
      btn_kankotri: "મૂળ કંકોત્રી જુઓ",

      story_subtitle: "આશાપુરી માતાની અસીમ કૃપાથી",
      story_title: "સ્નેહી શ્રી",
      poem_trans: "“થશે આપનું આગમન તો ફૂલોમાં સુગંધ પુરાઈ જશે, રૂપેરા આભમાં ખુશીથી પક્ષીઓ લહેરાઈ જશે, આપ પધારશો અમારી દીદીના લગ્નમાં તો હૈયું હરખાઈ જશે.”",
      bride_tag: "કન્યા (સુપુત્રી)",
      bride_name: "ચિ. રિતુ",
      bride_family: "ગણેશપુરા નિવાસી શ્રી રમેશભાઈ ચુનીલાલ પટેલ ના જય યોગેશ્વર.<br>અમારા કાકાશ્રી સ્વ. રસિકભાઈ ગણપતભાઈ પટેલ ના જ્યેષ્ઠ સુપુત્ર <strong>વિજયભાઈ રસિકભાઈ પટેલ</strong> તથા <strong>અ.સૌ. અલ્કાબેન વિજયભાઈ પટેલ</strong> ની સુપુત્રી",
      groom_tag: "વરરાજા (સુપુત્ર)",
      groom_name: "ચિ. ભવ્ય",
      groom_family: "<strong>શ્રી તરૂણભાઈ મહેન્દ્રભાઈ પટેલ</strong> તથા <strong>અ.સૌ. જીજ્ઞાબેન તરૂણભાઈ પટેલ</strong> ના સુપુત્ર સાથે નિર્ધાર્યા છે.",

      schedule_subtitle: "કાર્યક્રમની રૂપરેખા",
      schedule_title: "મંગલ અવસર",
      schedule_desc: "તો આ શુભ પ્રસંગે પધારી શોભામાં અભિવૃદ્ધિ કરશોજી.",
      day1_header: "શુક્રવાર, તા. ૦૧-૦૧-૨૦૨૭",
      day1_samvat: "સવંત ૨૦૮૩ માગશર વદ નોમ",
      day2_header: "શનિવાર, તા. ૦૨-૦૧-૨૦૨૭",
      day2_samvat: "સવંત ૨૦૮૩ માગશર વદ દસમ",

      event_ganesh_title: "ગણેશ સ્થાપના",
      event_ganesh_desc: "પ્રથમ પૂજ્ય શ્રી ગણેશજીની સ્થાપના કરી વિઘ્નહર્તાના આશીર્વાદ પ્રાપ્ત કરવાનો મંગલ અવસર.",
      event_ganesh_time: "બપોરે ૧.૪૫ કલાકે",
      event_ganesh_loc: "અમારા નિવાસ સ્થાને: ૮૮૯-વૈકુંઠ સોસાયટી, શ્રી અંબે વિદ્યાલય ની નજીક, વાઘોડિયા રોડ, વડોદરા.",

      event_mosalu_title: "મોસાળુ (મામેરું)",
      event_mosalu_desc: "મોસાળ પક્ષ તરફથી સ્નેહ, શુકન અને આશીર્વાદરૂપ ભેટ સોગાદોનું ભાવભર્યું સ્વાગત.",
      event_mosalu_time: "સવારે ૭.૩૦ કલાકે",
      event_mosalu_loc: "ભવન્સ પાર્ટી પ્લોટ, એસએસવી-૩ સ્કૂલની બાજુમાં, બાપોદ, વડોદરા.",

      event_grahshanti_title: "ગ્રહશાંતિ",
      event_grahshanti_desc: "નવગ્રહોની શાંતિ તથા દામ્પત્ય જીવનના મંગલ કલ્યાણ અર્થે વૈદિક હવન-પૂજન.",
      event_grahshanti_time: "સવારે ૯.૩૦ કલાકે",
      event_grahshanti_loc: "ભવન્સ પાર્ટી પ્લોટ, એસએસવી-૩ સ્કૂલની બાજુમાં, બાપોદ, વડોદરા.",

      event_lunch_title: "પ્રિતિ ભોજન (બપોરનું ભોજન - Lunch)",
      event_lunch_desc: "પરિવારજનો તથા આમંત્રિત સ્નેહીજનો માટે મંગલ બપોરનું પ્રિતિ ભોજન સમારોહ.",
      event_lunch_time: "બપોરે ૧૨.૦૦ કલાકે",
      event_lunch_loc: "ભવન્સ પાર્ટી પ્લોટ, એસએસવી-૩ સ્કૂલની બાજુમાં, બાપોદ, વડોદરા.",

      event_lagna_title: "શુભ લગ્ન (હસ્તમેળાપ)",
      event_lagna_desc: "વરમાળા, કન્યાદાન, હસ્તમેળાપ અને સપ્તપદીના મંગલ ફેરા સાથે પવિત્ર દાંપત્ય જીવનનો પ્રારંભ.",
      event_lagna_time: "સાંજે ૬.૦૦ કલાકે",
      event_lagna_loc: "ભવન્સ પાર્ટી પ્લોટ, એસએસવી-૩ સ્કૂલની બાજુમાં, બાપોદ, વડોદરા.",

      event_dinner_title: "પ્રિતિ ભોજન (સાંજનું ભોજન - Dinner)",
      event_dinner_desc: "સગાં-સ્નેહીજનો તથા આમંત્રિત મહેમાનો માટે સાંજનું ભવ્ય પ્રિતિ ભોજન સમારોહ.",
      event_dinner_time: "સાંજે ૬.૦૦ કલાકેથી શરૂ",
      event_dinner_loc: "ભવન્સ પાર્ટી પ્લોટ, એસએસવી-૩ સ્કૂલની બાજુમાં, બાપોદ, વડોદરા.",

      venue_subtitle: "મુલાકાતીઓ માટે માર્ગદર્શન",
      venue_title: "✦ શુભ સ્થળ ✦",
      venue_desc: "લગ્ન મહોત્સવ તથા ધાર્મિક વિધિઓના સ્થળની વિગતવાર માહિતી અને ગૂગલ મેપ્સ દિશા નિર્દેશ.",
      venue1_type: "શુભ સ્થળ (મુખ્ય લગ્ન સ્થળ)",
      venue1_name: "ભવન્સ પાર્ટી પ્લોટ",
      venue1_addr: "એસએસવી-૩ સ્કૂલની બાજુમાં, બાપોદ, વડોદરા",
      venue2_type: "અમારા નિવાસ સ્થાને (ગણેશ સ્થાપના)",
      venue2_name: "પટેલ પરિવાર નિવાસ સ્થાન",
      venue2_addr: "૮૮૯-વૈકુંઠ સોસાયટી, શ્રી અંબે વિદ્યાલય ની નજીક, વાઘોડિયા રોડ, વડોદરા",
      btn_directions: "ગૂગલ મેપ્સમાં જુઓ",

      travel_title: "વડોદરા પહોંચવાની સુવિધા",
      travel_flight: "વિમાન દ્વારા: વડોદરા એરપોર્ટ (BDQ) આશરે ૭ કિમી દૂર છે (કેબ દ્વારા ૧૫-૨૦ મિનિટ).",
      travel_train: "ટ્રેન દ્વારા: વડોદરા રેલ્વે જંક્શન (BRC) આશરે ૭-૮ કિમી દૂર છે, જ્યાંથી સરળતાથી ટેક્સી/રિક્ષા ઉપલબ્ધ છે.",
      travel_road: "રોડ દ્વારા: રાષ્ટ્રીય ધોરીમાર્ગ NH-48, વાઘોડિયા ચોકડી તથા આજવા રોડથી સીધો સુગમ રસ્તો.",

      family_subtitle: "પરિવારના આશીર્વાદ",
      family_title: "નિમંત્રક અને સ્નેહીજનો",
      hosts_tag: "નિમંત્રક",
      hosts_names: "શ્રી વિજયભાઈ રસિકભાઈ પટેલ તથા અ.સૌ. અલ્કાબેન વિજયભાઈ પટેલ",
      hosts_addr: "૮૮૯-વૈકુંઠ સોસાયટી, શ્રી અંબે વિદ્યાલય ની નજીક, વાઘોડિયા રોડ, વડોદરા.",
      snehathin_title: "લિ. આપના સ્નેહાધિન",
      darshan_title: "લિ. આપના દર્શનાભિલાષી",
      darshan_note: "અમારી વ્હાલી દીદીના લગ્નમાં આપ સૌનું હાર્દિક સ્વાગત છે!",

      faq_subtitle: "સામાન્ય પ્રશ્નો",
      faq_title: "મહેમાનો માટે માર્ગદર્શિકા",
      faq_q1: "લગ્ન પ્રસંગ માટે પહેરવેશ (Dress Code) શું છે?",
      faq_a1: "ભારતીય પારંપરિક ઉત્સવ પરિધાન - સાડી, ચણિયાચોળી, કુર્તા-પાયજામા, શેરવાની અથવા ફોર્મલ પોશાક.",
      faq_q2: "ભેટ સોગાદો અંગેની નીતિ શું છે?",
      faq_a2: "આપની સ્નેહપૂર્ણ ઉપસ્થિતિ અને નવદંપતીને આપના હૃદયપૂર્વકના આશીર્વાદ એ જ અમારી સૌથી અમૂલ્ય ભેટ છે.",
      faq_q3: "ભવન્સ પાર્ટી પ્લોટ ખાતે પાર્કિંગની સુવિધા છે?",
      faq_a3: "હા, વાહનોના પાર્કિંગ માટે પાર્ટી પ્લોટ પરિસરમાં પૂરતી વ્યવસ્થા રાખવામાં આવેલી છે.",
      faq_q4: "સંપર્ક અથવા સહાય માટે કોનો સંપર્ક કરવો?",
      faq_a4: "કોઈપણ પૂછપરછ માટે નિમંત્રક શ્રી વિજયભાઈ (૯૮૨૪૦૫૯૧૬૩) અથવા અલ્કાબેન (૯૬૨૪૬૬૩૧૦૨) નો સંપર્ક કરી શકો છો.",

      footer_monogram: "R & B",
      footer_tagline: "આપના પ્રેમ અને આશીર્વાદ બદલ આપનો ખૂબ ખૂબ આભાર",
      footer_date_venue: "શનિવાર, તા. ૦૨-૦૧-૨૦૨૭ • ભવન્સ પાર્ટી પ્લોટ, વડોદરા",
      footer_copy: "© ૨૦૨૭ રિતુ & ભવ્ય શુભવિવાહ. અમારી વ્હાલી દીદી માટે પ્રેમપૂર્વક સમર્પિત."
    }
  };

  let currentLang = localStorage.getItem('wedding_lang') || 'en';

  // Apply Language function
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);
    document.body.classList.toggle('lang-gu', lang === 'gu');

    const btnToggle = document.getElementById('btnLangToggle');
    if (btnToggle) {
      btnToggle.innerHTML = lang === 'en' 
        ? `<i class="fa-solid fa-language"></i> ગુજરાતી` 
        : `<i class="fa-solid fa-language"></i> English`;
    }

    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    if (lang === 'gu') {
      document.title = "ચિ. રિતુ & ચિ. ભવ્ય - શુભવિવાહ નિમંત્રણ (૦૨-૦૧-૨૦૨૭)";
    } else {
      document.title = "Ritu & Bhavya - Wedding Invitation (January 2, 2027)";
    }
  }

  const langBtn = document.getElementById('btnLangToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'gu' : 'en');
    });
  }

  // 2. Live Countdown Timer
  // Wedding Date: January 2, 2027, 07:30:00 IST
  const weddingDate = new Date('2027-01-02T07:30:00+05:30').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');
    const elDays = document.getElementById('days');
    const elHours = document.getElementById('hours');
    const elMins = document.getElementById('minutes');
    const elSecs = document.getElementById('seconds');

    if (elDays) elDays.textContent = pad(days);
    if (elHours) elHours.textContent = pad(hours);
    if (elMins) elMins.textContent = pad(minutes);
    if (elSecs) elSecs.textContent = pad(seconds);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 3. Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('btnMobileToggle');
  const mobileMenu = document.getElementById('mobileNavMenu');
  if (mobileBtn && mobileMenu) {
    function toggleMobileMenu(open) {
      const willOpen = open !== undefined ? open : !mobileMenu.classList.contains('active');
      mobileMenu.classList.toggle('active', willOpen);
      mobileBtn.innerHTML = willOpen 
        ? `<i class="fa-solid fa-xmark"></i>` 
        : `<i class="fa-solid fa-bars"></i>`;
    }

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });
  }

  // 4. FAQ Accordion
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // 5. Add to Calendar (Google Calendar)
  const btnCalendar = document.getElementById('btnAddToCalendar');
  if (btnCalendar) {
    btnCalendar.addEventListener('click', (e) => {
      e.preventDefault();
      const gcalUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + 
        encodeURIComponent("Shubh Vivah: Ritu & Bhavya's Wedding") + 
        "&dates=20270102T020000Z/20270102T160000Z" + 
        "&details=" + encodeURIComponent("Wedding ceremony and celebrations of Chi. Ritu & Chi. Bhavya.\nSchedule: Ganesh Sthapana (Jan 1, 1:45 PM at Residence).\nJan 2: Mosalu (7:30 AM), Grah Shanti (9:30 AM), Lunch (12:00 PM), Shubh Lagna (6:00 PM), Dinner (6:00 PM onwards).\nVenue: Bhavan's Party Plot, Near SSV-3 School, Bapod, Vadodara.") + 
        "&location=" + encodeURIComponent("Bhavan's Party Plot, Next to SSV-3 School, Bapod, Vadodara, Gujarat");

      window.open(gcalUrl, '_blank');
    });
  }

  // 6. Web Audio Auspicious Melody Synthesizer (Shehnai & Indian classical wedding mood)
  let audioCtx = null;
  let isPlayingMusic = false;
  let musicTimer = null;

  const btnMusic = document.getElementById('btnMusicToggle');

  function startIndianWeddingMelody() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Raag Yaman / Auspicious Wedding Swaras (Sa, Re, Ga, Ma', Pa, Dha, Ni, Sa')
    const baseFreq = 220; // A3 tanpura drone
    const notes = [
      baseFreq,        // Sa
      baseFreq * 1.125,// Re
      baseFreq * 1.25, // Ga
      baseFreq * 1.406,// Tivra Ma
      baseFreq * 1.5,  // Pa
      baseFreq * 1.687,// Dha
      baseFreq * 1.875,// Ni
      baseFreq * 2     // Sa'
    ];

    // Background Tanpura Drone
    const droneGain = audioCtx.createGain();
    droneGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    droneGain.connect(audioCtx.destination);

    const droneOsc1 = audioCtx.createOscillator();
    droneOsc1.type = 'triangle';
    droneOsc1.frequency.setValueAtTime(baseFreq / 2, audioCtx.currentTime);
    droneOsc1.connect(droneGain);
    droneOsc1.start();

    const droneOsc2 = audioCtx.createOscillator();
    droneOsc2.type = 'sine';
    droneOsc2.frequency.setValueAtTime(baseFreq * 1.5 / 2, audioCtx.currentTime);
    droneOsc2.connect(droneGain);
    droneOsc2.start();

    // Shehnai melody sequence (traditional celebratory phrase)
    const melodyPhrases = [
      [0, 2, 4, 3, 2, 0, 4, 6, 7],
      [7, 6, 4, 3, 2, 1, 0],
      [0, 4, 6, 7, 7, 6, 4, 6, 4, 2, 0]
    ];

    let phraseIdx = 0;
    let noteIdx = 0;

    function playNextNote() {
      if (!isPlayingMusic) {
        try {
          droneOsc1.stop();
          droneOsc2.stop();
        } catch(err) {}
        return;
      }

      const currentPhrase = melodyPhrases[phraseIdx];
      const noteDegree = currentPhrase[noteIdx];
      const freq = notes[noteDegree];

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Shehnai-like warm timber with harmonics
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.setTargetAtTime(freq * 1.008, audioCtx.currentTime + 0.15, 0.2);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.07, audioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.55);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.6);

      noteIdx++;
      if (noteIdx >= currentPhrase.length) {
        noteIdx = 0;
        phraseIdx = (phraseIdx + 1) % melodyPhrases.length;
        musicTimer = setTimeout(playNextNote, 1200);
      } else {
        musicTimer = setTimeout(playNextNote, 500);
      }
    }

    playNextNote();
  }

  function stopMusic() {
    isPlayingMusic = false;
    if (musicTimer) clearTimeout(musicTimer);
    if (audioCtx) {
      try { audioCtx.suspend(); } catch(e) {}
    }
  }

  if (btnMusic) {
    btnMusic.addEventListener('click', () => {
      isPlayingMusic = !isPlayingMusic;
      if (isPlayingMusic) {
        startIndianWeddingMelody();
        btnMusic.classList.add('playing');
        btnMusic.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
      } else {
        stopMusic();
        btnMusic.classList.remove('playing');
        btnMusic.innerHTML = `<i class="fa-solid fa-music"></i>`;
      }
    });
  }

  // 7. Original Kankotri Modal (hooking all modal trigger buttons)
  const modal = document.getElementById('kankotriModal');
  const btnOpenModal = document.getElementById('btnOpenKankotriModal');
  const btnOpenModalNav = document.getElementById('btnOpenKankotriModalNav');
  const btnOpenModalMobile = document.getElementById('btnOpenKankotriModalMobile');
  const btnCloseModal = document.getElementById('btnCloseKankotriModal');

  function openModal(e) {
    if (e) e.preventDefault();
    if (modal) modal.classList.add('open');
  }

  if (btnOpenModal) btnOpenModal.addEventListener('click', openModal);
  if (btnOpenModalNav) btnOpenModalNav.addEventListener('click', openModal);
  if (btnOpenModalMobile) btnOpenModalMobile.addEventListener('click', openModal);

  if (btnCloseModal && modal) {
    btnCloseModal.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  // Initialize Language
  setLanguage(currentLang);
});
