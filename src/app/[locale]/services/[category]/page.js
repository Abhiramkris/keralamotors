"use client";

import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { translations } from "@/components/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceDetails = {
  en: {
    "general-maintenance": {
      title: "General Maintenance",
      tagline: "Comprehensive care to keep your vehicle performing at its best.",
      desc: "Routine, proactive maintenance is vital to the lifespan and integrity of a luxury vehicle. Our technicians carry out thorough, factory-compliant servicing that mirrors the standards of authorized dealers.",
      features: [
        { name: "Periodic Vehicle Service", desc: "Scheduled intervals aligned with manufacturer requirements to keep warranties active." },
        { name: "Minor Service", desc: "Lube, filter updates, and general performance diagnostics." },
        { name: "Major Service", desc: "In-depth checks including spark plugs, engine components, and comprehensive system tests." },
        { name: "Oil & Filter Change", desc: "Using high-grade full synthetic lubricants (Castrol/Mobil 1) matched to your engine's spec." },
        { name: "Multi-Point Vehicle Inspection", desc: "A rigorous bumper-to-bumper check covering electronics, structure, and mechanics." },
        { name: "Fluid Top-Up & Replacement", desc: "Testing and replacing coolant, steering fluid, and washer fluids to safeguard systems." }
      ]
    },
    "engine-repair": {
      title: "Engine Services",
      tagline: "Advanced diagnostics and complete engine block restorations.",
      desc: "Your premium car has a complex power plant requiring specialized diagnostic platforms and mechanical skills. From simple leaks to complete engine overhauls, we manage every step with precision.",
      features: [
        { name: "Engine Diagnostics", desc: "Using specialized platforms like BMW ISTA and Mercedes Xentry to locate sensor or timing errors." },
        { name: "Engine Repair & Overhaul", desc: "Complete engine dismantling, component block machining, and blueprint rebuilds." },
        { name: "Timing Belt/Chain Replacement", desc: "Preventative and reactive replacements to avoid catastrophic engine crashes." },
        { name: "Cooling System Service", desc: "Thermostats, coolant pumps, and expansion tanks flushed and upgraded." },
        { name: "Radiator Repair & Replacement", desc: "Fixing system pressure drops and heat dissipation leaks." }
      ]
    },
    "transmission-service": {
      title: "Transmission Services",
      tagline: "Calibrated transmission repairs, gearbox coding, and oil flushes.",
      desc: "Dual-clutch (DCT), torque-converter, and multi-speed luxury gearboxes demand highly trained technicians. We carry out preventative transmission servicing and full gearbox rebuilds.",
      features: [
        { name: "Automatic Transmission Service", desc: "Comprehensive clutch, torque converter, and pressure solenoid checks." },
        { name: "Gearbox Diagnostics", desc: "Electronic module scanning to isolate gear slippage or shifts delays." },
        { name: "Transmission Oil Change", desc: "Pan, seal, and filter replacements with specialized manufacturer transmission fluids." },
        { name: "Automatic Transmission Repair & Overhaul", desc: "Dismantling mechanical gear sets and replacing worn clutches, bands, and seals." }
      ]
    },
    "brake-repair": {
      title: "Brake Services",
      tagline: "High-performance braking system checks and replacements.",
      desc: "Safety is paramount. We handle everything from basic pad changes to rebuilding electronic parking brakes and complex multi-piston calipers using OEM or OE-quality brake parts.",
      features: [
        { name: "Brake Pad Replacement", desc: "Installing low-dust premium ceramic or semi-metallic friction pads." },
        { name: "Brake Disc/Rotor Replacement", desc: "High-carbon brake discs fitted to minimize heat deformation and judder." },
        { name: "Brake Fluid Flush", desc: "Removing moisture-rich old fluid and pressure-flushing fresh DOT fluid." },
        { name: "ABS Diagnostics & Repair", desc: "Solenoid block, speed sensor, and pressure control module troubleshooting." },
        { name: "Complete Brake System Inspection", desc: "Inspecting lines, vacuum hoses, master cylinders, and parking brakes." }
      ]
    },
    "suspension-steering": {
      title: "Suspension & Steering",
      tagline: "Expert repair of advanced Airmatic and Hydraulic suspension systems.",
      desc: "Luxury passenger cars feature sophisticated ride systems that guarantee ultimate comfort. We possess the rare tools and expertise to repair these complex setups.",
      features: [
        { name: "Suspension Repair", desc: "Replacing control arms, ball joints, bushings, and sway bar links." },
        { name: "Shock Absorber Replacement", desc: "Specialized diagnostics and replacement of pneumatic air springs and active hydraulic dampening systems." },
        { name: "Steering System Repair", desc: "Fixing EPS steering racks, fluid pumps, high-pressure lines, and inner/outer tie rods." },
        { name: "Wheel Alignment", desc: "Multi-axis laser alignment matching strict manufacturer ride-height specifications." },
        { name: "Wheel Balancing", desc: "Correcting tire mass distribution to eliminate high-speed steering vibration." }
      ]
    },
    "electrical-electronics": {
      title: "Electrical & Electronics",
      tagline: "ECU programming, SCN coding, and software diagnostic sweeps.",
      desc: "Modern German and European automobiles are rolling supercomputers. We have licensed software capabilities equivalent to local dealerships to code, update, and program modules.",
      features: [
        { name: "Computer Diagnostics", desc: "Complete code sweeps mapping localized network communication status." },
        { name: "Battery Testing & Replacement", desc: "Testing cranking voltage and registering new AGM/Li-Ion batteries to the vehicle." },
        { name: "Starter Motor & Alternator Repair", desc: "Overhauling primary starting solenoids and electrical power generators." },
        { name: "ECU Programming", desc: "Updating engine control software mapping to resolve driveability faults." },
        { name: "VGS 3&4 Programming", desc: "Specialized transmission module calibration and security adaptations." },
        { name: "TCU / SCN Coding", desc: "Software Calibration Number coding and Transmission Control Module synchronization." }
      ]
    },
    "air-conditioning": {
      title: "Air Conditioning",
      tagline: "Precision climate control service keeping you cool in Oman's heat.",
      desc: "Oman's extreme climate calls for a perfectly functioning A/C system. We provide system diagnosis, recharging, leak testing, and deep-dash repairs.",
      features: [
        { name: "A/C Performance Check", desc: "Testing discharge temperature, blower speeds, and vent actuator movement." },
        { name: "A/C Gas Recharge", desc: "Evacuating moisture and recharging refrigerant using strict digital scales." },
        { name: "Compressor Repair", desc: "Replacing magnetic clutches, control valves, or complete compressor assemblies." },
        { name: "Cabin Filter Replacement", desc: "Replacing filters with active carbon variants to guarantee clean cabin air." },
        { name: "A/C Leak Detection", desc: "Injecting UV dye and vacuum-testing lines to isolate trace gas leaks." },
        { name: "A/C Evaporator Changing", desc: "Expert dashboard disassembly and structural reassembly to replace leaking evaporators." }
      ]
    },
    "body-paint": {
      title: "Body & Paint",
      tagline: "Showroom-grade painting, paint protection, and dent restoration.",
      desc: "Restore the exterior finish of your luxury automobile. Our paint facility utilizes color spectrophotometers and premium clear coats for matching finish quality.",
      features: [
        { name: "Dent Repair", desc: "Traditional dent pulling and panel beating back to smooth factory curvatures." },
        { name: "Premium Painting & Refinishing", desc: "Multi-stage base-coat / clear-coat painting matching luxury paint specs." },
        { name: "Scratch Removal & Paint Correction", desc: "Compounding and polishing paint surfaces to clear micro-scratches." },
        { name: "Ceramic Coating", desc: "Adding multi-year molecular barrier coatings to guard paint against UV rays and heat." },
        { name: "Accident Repair", desc: "Replacing bumpers, fenders, grilles, and structural components after minor or major impacts." },
        { name: "Engine Bay Cleaning", desc: "Safe degreasing and detailed cleaning of plastic covers and engine brackets." }
      ]
    }
  },
  ar: {
    "general-maintenance": {
      title: "صيانة عامة",
      tagline: "رعاية شاملة للحفاظ على أفضل أداء لسيارتك.",
      desc: "الصيانة الدورية الاستباقية أمر حيوي لعمر مركبتك الفاخرة وسلامتها. يقوم الفنيون لدينا بإجراء فحص شامل متوافق مع معايير الوكيل لمطابقة المعايير الرسمية.",
      features: [
        { name: "خدمة المركبة الدورية", desc: "فترات مجدولة متوافقة مع متطلبات الشركة المصنعة للحفاظ على الضمان نشطًا." },
        { name: "صيانة صغرى", desc: "تحديثات الفلاتر، وتزييت المحرك، وتشخيصات الأداء العامة." },
        { name: "صيانة كبرى", desc: "فحوصات عميقة تشمل شمعات الاحتراق ومكونات المحرك واختبارات النظام الكاملة." },
        { name: "تغيير الزيت والفلتر", desc: "باستخدام زيوت محركات تخليقية بالكامل عالية الجودة (كاسترول/موبيل 1) مطابقة لمواصفات محركك." },
        { name: "فحص متعدد النقاط للمركبة", desc: "فحص دقيق وشامل من المصد إلى المصد يغطي الإلكترونيات والهيكل والميكانيكا." },
        { name: "تعبئة واستبدال السوائل", desc: "اختبار واستبدال سائل التبريد وسائل التوجيه وسوائل الغسيل لحماية الأنظمة." }
      ]
    },
    "engine-repair": {
      title: "خدمات المحرك",
      tagline: "تشخيصات متقدمة وتوضيب كامل لكتل المحركات.",
      desc: "تحتوي سيارتك الفاخرة على محرك معقد يتطلب منصات تشخيص متخصصة ومهارات ميكانيكية دقيقة. نقوم بإدارة كل خطوة بدقة متناهية.",
      features: [
        { name: "تشخيص المحرك", desc: "باستخدام منصات متخصصة مثل BMW ISTA و Mercedes Xentry لتحديد أخطاء الحساسات والتوقيت." },
        { name: "إصلاح وتوضيب المحرك", desc: "تفكيك كامل للمحرك، وتجليخ أسطوانات المحرك، وإعادة البناء بالكامل." },
        { name: "استبدال سير/جنزير الكاتينة", desc: "استبدال وقائي وتفاعلي لتجنب تلف المحرك الكارثي عند انقطاع السير." },
        { name: "صيانة نظام التبريد", desc: "غسيل وتحديث منظمات الحرارة ومضخات التبريد وخزانات التمدد." },
        { name: "إصلاح واستبدال الراديتر", desc: "معالجة انخفاض ضغط النظام وتسريبات تبديد الحرارة." }
      ]
    },
    "transmission-service": {
      title: "خدمات ناقل الحركة",
      tagline: "إصلاح ناقل الحركة ومعايرة علبة التروس وغسيل الزيوت.",
      desc: "تتطلب علب التروس الفاخرة مزدوجة القابض ومزدوجة السرعة فنيين مدربين تدريباً عالياً. نقوم بإجراء الصيانات الوقائية وإعادة البناء الكامل للتروس.",
      features: [
        { name: "صيانة ناقل الحركة الأوتوماتيكي", desc: "فحوصات شاملة للقابض ومحول عزم الدوران وصمامات الضغط." },
        { name: "تشخيص علبة التروس", desc: "مسح الوحدات الإلكترونية لعزل انزلاق التروس أو تأخر تبديل السرعة." },
        { name: "تغيير زيت ناقل الحركة", desc: "استبدال الفلتر والوجه وسوائل ناقل الحركة الخاصة بالشركة المصنعة." },
        { name: "إصلاح وتوضيب ناقل الحركة", desc: "تفكيك مجموعات التروس الميكانيكية واستبدال الكلتشات والحشوات المهترئة." }
      ]
    },
    "brake-repair": {
      title: "خدمات الفرامل",
      tagline: "فحوصات واستبدال أنظمة الكبح عالية الأداء.",
      desc: "السلامة هي الأهم. نتعامل مع كل شيء من تغيير الفحمات البسيطة إلى إعادة بناء فرامل اليد الإلكترونية والكليبرات متعددة المكابس باستخدام قطع غيار عالية الجودة.",
      features: [
        { name: "استبدال فحمات الفرامل", desc: "تركيب فحمات سيراميك فاخرة قليلة الغبار أو فحمات شبه معدنية." },
        { name: "استبدال ديسكات/أقراص الفرامل", desc: "تركيب ديسكات فرامل عالية الكربون لتقليل تشوه الحرارة والاهتزاز." },
        { name: "غسيل سائل الفرامل", desc: "إزالة السائل القديم المشبع بالرطوبة وضغط سائل DOT الجديد بالكامل." },
        { name: "تشخيص وإصلاح نظام ABS", desc: "استكشاف أخطاء وحدة ABS وحساسات السرعة ووحدة التحكم بالضغط وإصلاحها." },
        { name: "فحص كامل لنظام الفرامل", desc: "فحص خطوط الزيت، وخراطيم تفريغ الهواء، والسلندر الرئيسي، وفرامل اليد." }
      ]
    },
    "suspension-steering": {
      title: "نظام التعليق والتوجيه",
      tagline: "إصلاح خبير لأنظمة التعليق الهوائي (Airmatic) والهيدروليكي المتقدمة.",
      desc: "تتميز السيارات الفاخرة بأنظمة تعليق متطورة تضمن الراحة القصوى في الركوب. نمتلك الأدوات النادرة والخبرة لإصلاح هذه الأنظمة المعقدة.",
      features: [
        { name: "إصلاح نظام التعليق", desc: "استبدال مقصات التحكم، وجوزات التعليق، والجلد، ووصلات قضيب التوازن." },
        { name: "استبدال مساعدات التعليق الهوائي والهيدروليكي", desc: "تشخيص واستبدال مساعدات الهواء المضغوط (Airmatic) وأنظمة المخمدات الهيدروليكية النشطة." },
        { name: "إصلاح نظام التوجيه", desc: "إصلاح علبة التوجيه الكهربائية والهيدروليكية ومضخات الزيت ووصلات التوجيه." },
        { name: "محاذاة العجلات بالليزر", desc: "محاذاة العجلات متعددة المحاور لتطابق مواصفات ارتفاع الركوب الصارمة للشركة المصنعة." },
        { name: "موازنة العجلات (الترصيص)", desc: "تصحيح توزيع كتلة الإطارات للقضاء على اهتزاز التوجيه على السرعات العالية." }
      ]
    },
    "electrical-electronics": {
      title: "الأنظمة الكهربائية والإلكترونية",
      tagline: "برمجة ECU وترميز SCN وتحديثات برمجيات السيارة بالكامل.",
      desc: "السيارات الأوروبية الحديثة هي كمبيوترات متنقلة. لدينا قدرات برمجية مرخصة تعادل الوكلاء لبرمجة وتحديث وحدات التحكم المختلفة.",
      features: [
        { name: "تشخيصات الكمبيوتر", desc: "فحص شامل للأكواد والبروتوعولات لتتبع حالة الاتصال بالشبكة المحلية للمركبة." },
        { name: "فحص واستبدال البطارية", desc: "فحص بطاريات AGM/Li-Ion وتسجيل وتفعيل البطاريات الجديدة على نظام السيارة." },
        { name: "إصلاح السلف والدينامو", desc: "توضيب ملفات التشغيل الرئيسية والمولدات الكهربائية وتغيير الفحمات." },
        { name: "برمجة عقول السيارات (ECU)", desc: "تحديث برمجيات التحكم في المحرك لحل مشكلات استجابة القيادة والأداء." },
        { name: "برمجة بوابة المركبة (VGS 3&4)", desc: "معايرة وحدة ناقل الحركة المتخصصة وتعديلات الحماية الأمنية." },
        { name: "تحديث TCU وترميز SCN", desc: "ترميز أرقام معايرة البرامج لمطابقة علبة التروس والتزامن الكامل." }
      ]
    },
    "air-conditioning": {
      title: "تكييف الهواء",
      tagline: "خدمة تحكم مناخي دقيقة تبقيك بارداً في أجواء عمان الحارة.",
      desc: "يتطلب مناخ سلطنة عمان القاسي نظام تكييف يعمل بشكل مثالي. نحن نقدم تشخيص النظام، إعادة الشحن، اختبارات التسريب والاصلاحات العميقة.",
      features: [
        { name: "فحص أداء مكيف الهواء", desc: "اختبار درجات حرارة الهواء الخارج وسرعات المروحة وحركة بوابات الهواء." },
        { name: "شحن غاز المكيف", desc: "تفريغ الرطوبة وإعادة شحن غاز الفريون باستخدام مقاييس رقمية دقيقة." },
        { name: "إصلاح الكومبريسور", desc: "استبدال الكلتش المغناطيسي، صمامات التحكم، أو تركيب كومبريسور كامل جديد." },
        { name: "استبدال فلتر المقصورة", desc: "استبدال فلاتر الكربون النشط لضمان نقاء وجودة الهواء داخل المقصورة." },
        { name: "اكتشاف تسريب غاز المكيف", desc: "حقن صبغة الأشعة فوق البنفسجية واختبار تفريغ خراطيم التكييف لعزل التسريب الدقيق." },
        { name: "استبدال ثلاجة المكيف الداخلية", desc: "فك لوحة القيادة (الداشبورد) بالكامل بشكل خبير وتغيير ثلاجة المكيف التالفة." }
      ]
    },
    "body-paint": {
      title: "هيكل وطلاء السيارات",
      tagline: "طلاء بجودة المعرض، تصحيح الطلاء، وتعديل هيكل السيارة.",
      desc: "استعد المظهر الخارجي لسيارتك الفاخرة. تستخدم ورشة الطلاء لدينا أجهزة مطابقة الألوان بالكمبيوتر وطبقات حماية فاخرة مطابقة لجودة المصنع.",
      features: [
        { name: "تعديل الضربات (السمكرة)", desc: "سحب الصاج وتعديل هياكل السيارات المتضررة وإعادتها لانحناءات المصنع الناعمة." },
        { name: "طلاء وتجديد دهان السيارات", desc: "رش الدهان متعدد المراحل ومطابقة طلاء السيارات الفاخرة بدقة متناهية." },
        { name: "إزالة الخدوش وتصحيح الطلاء", desc: "صقل وتلميع أسطح الطلاء لإزالة الخدوش الدقيقة والبهتان." },
        { name: "حماية النانو سيراميك", desc: "إضافة طبقة حماية جزيئية لحماية دهان السيارة من الأشعة فوق البنفسجية والحرارة الشديدة." },
        { name: "إصلاح صدمات الحوادث", desc: "استبدال المصدات والرفارف والشبكات والقطع الهيكلية التالفة بعد الحوادث." },
        { name: "تنظيف وتلميع حوض المحرك", desc: "إزالة الشحوم بأمان وتلميع الأغطية البلاستيكية ومثبتات المحرك بشكل تفصيلي." }
      ]
    }
  }
};

const categoryMedia = {
  "general-maintenance": {
    index: "01",
    leftImg: "/service_general.jpg",
    rightImg: "/service_engine.jpg",
    leftTitle: { en: "THOROUGH CARE", ar: "رعاية شاملة" },
    leftDesc: { en: "Detailed inspections and expert maintenance for peak performance.", ar: "عمليات فحص مفصلة وصيانة خبراء للحصول على أفضل أداء." },
    rightTitle: { en: "LASTING PERFORMANCE", ar: "أداء مستدام" },
    rightDesc: { en: "Preventive maintenance that enhances reliability and extends your car's life.", ar: "صيانة وقائية تعزز الموثوقية وتطيل عمر سيارتك." }
  },
  "engine-repair": {
    index: "02",
    leftImg: "/service_engine.jpg",
    rightImg: "/service_ecu.jpg",
    leftTitle: { en: "DIAGNOSTIC ACCURACY", ar: "دقة التشخيص" },
    leftDesc: { en: "Pinpointing complex mechanical faults using dealer-certified code scanners.", ar: "تحديد الأعطال الميكانيكية المعقدة باستخدام أجهزة فحص معتمدة." },
    rightTitle: { en: "BLOCK RESTORATION", ar: "توضيب كامل" },
    rightDesc: { en: "Complete blueprints rebuilds and block overhauls restoring compression.", ar: "إعادة بناء وتوضيب المحركات بالكامل استعادة للضغط الطبيعي." }
  },
  "transmission-service": {
    index: "03",
    leftImg: "/service_transmission.jpg",
    rightImg: "/service_general.jpg",
    leftTitle: { en: "GEAR CALIBRATION", ar: "معايرة التروس" },
    leftDesc: { en: "Isolating solenoids, torque converter faults and shifting delays.", ar: "عزل الصمامات، وعيوب محول عزم الدوران، وتأخير التبديل." },
    rightTitle: { en: "PREVENTIVE FLUSHING", ar: "غسيل وقائي" },
    rightDesc: { en: "Replacing seals, fluids, and pan filters with factory quality replacements.", ar: "استبدال الحشوات والسوائل وفلاتر الكرتير بجودة المصنع الأصلي." }
  },
  "brake-repair": {
    index: "04",
    leftImg: "/service_brake.jpg",
    rightImg: "/service_general.jpg",
    leftTitle: { en: "STOPPING POWER", ar: "قوة كبح كاملة" },
    leftDesc: { en: "High-grade hydraulic line pressure checks and full caliper services.", ar: "فحص ضغط خطوط الفرامل الهيدروليكية وصيانة الكليبرات بالكامل." },
    rightTitle: { en: "CERAMIC UPGRADES", ar: "فحمات سيراميك" },
    rightDesc: { en: "Installing low-dust ceramic pads and carbon-alloy brake rotors.", ar: "تركيب فحمات سيراميك قليلة الغبار وديسكات مكابح عالية الكربون." }
  },
  "suspension-steering": {
    index: "05",
    leftImg: "/service_general.jpg",
    rightImg: "/service_transmission.jpg",
    leftTitle: { en: "AIRMATIC SERVICES", ar: "أنظمة تعليق هوائية" },
    leftDesc: { en: "Specialized diagnosis and calibration of active air springs and dampers.", ar: "تشخيص ومعايرة متخصصة لمساعدات العجلات ومساعدات الهواء النشطة والمخمدات." },
    rightTitle: { en: "STEERING PRECISION", ar: "دقة التوجيه" },
    rightDesc: { en: "Laser aligned steering racks and high pressure hydraulic repairs.", ar: "إصلاح علب التوجيه هيدروليكياً ومحاذاة التوجيه بالليزر." }
  },
  "electrical-electronics": {
    index: "06",
    leftImg: "/service_ecu.jpg",
    rightImg: "/service_engine.jpg",
    leftTitle: { en: "SOFTWARE CODING", ar: "برمجة السوفتوير" },
    leftDesc: { en: "SCN coding and software gateway calibrations matching local dealers.", ar: "ترميز SCN ومعايرة بوابات السوفتوير لمطابقة الوكالات المحلية." },
    rightTitle: { en: "MODULE DIAGNOSTICS", ar: "تشخيصات الوحدات" },
    rightDesc: { en: "Advanced network communication scans isolating short-circuit faults.", ar: "فحص متقدم لاتصالات شبكة السيارة لعزل أعطال الدوائر القصيرة." }
  },
  "air-conditioning": {
    index: "07",
    leftImg: "/service_ac.jpg",
    rightImg: "/service_general.jpg",
    leftTitle: { en: "CLIMATE CALIBRATION", ar: "معايرة التكييف" },
    leftDesc: { en: "Recharging R-134a & R-1234yf refrigerants using precise digital scales.", ar: "إعادة شحن غاز الفريون R-134a و R-1234yf بمقاييس رقمية دقيقة." },
    rightTitle: { en: "EVAPORATOR CHANGING", ar: "تغيير ثلاجة المكيف" },
    rightDesc: { en: "Expert dashboard removals to service hidden lines and leak points.", ar: "فك الداشبورد باحترافية لصيانة الخطوط المخفية ونقاط التسريب." }
  },
  "body-paint": {
    index: "08",
    leftImg: "/service_general.jpg",
    rightImg: "/service_ecu.jpg",
    leftTitle: { en: "SHADE MATCHING", ar: "مطابقة درجات الألوان" },
    leftDesc: { en: "Color spectrophotometer scans for precise factory paint matches.", ar: "فحص بأجهزة مطابقة الألوان بالكمبيوتر لمطابقة طلاء المصنع." },
    rightTitle: { en: "CERAMIC PROTECTION", ar: "حماية النانو سيراميك" },
    rightDesc: { en: "Adding molecular barrier guards shield paint against UV rays and heat.", ar: "إضافة طبقات حماية جزيئية لحماية دهان السيارة من الشمس والحرارة." }
  }
};

const getFeatureIcon = (category, index) => {
  const icons = {
    "general-maintenance": [
      // Periodic Vehicle Service
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="3" y="4" width="18" height="17" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><circle cx="9" cy="15" r="2" /><path d="M15 13l1.5 1.5L19.5 11" /></svg>,
      // Minor Service
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /><circle cx="18" cy="6" r="1.25" fill="currentColor" /><line x1="7.5" y1="16.5" x2="10.5" y2="13.5" /></svg>,
      // Major Service
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
      // Oil & Filter Change
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.2 16.2l2.8 2.8M2 12h4M18 12h4" /><path d="M12 8a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0v-2a4 4 0 0 1 4-4z" /><circle cx="12" cy="13" r="1" fill="currentColor" /></svg>,
      // Multi-Point Vehicle Inspection
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 2h6M9 9h6M9 13h4" /><circle cx="15" cy="15" r="3" /><line x1="17.1" y1="17.1" x2="19" y2="19" /></svg>,
      // Fluid Top-Up & Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M10 2h4l1 4v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6l1-4z" /><line x1="7" y1="10" x2="17" y2="10" /><circle cx="12" cy="14" r="1.5" fill="currentColor" /></svg>
    ],
    "engine-repair": [
      // Engine Diagnostics
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 6V4M16 6V4M4 12h16M12 6v12M9 10h6" /><circle cx="12" cy="15" r="1.5" fill="currentColor" /></svg>,
      // Engine Repair & Overhaul
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="6" y="3" width="12" height="6" rx="1" /><line x1="8" y1="5" x2="16" y2="5" /><line x1="8" y1="7" x2="16" y2="7" /><path d="M12 9v9" /><circle cx="12" cy="18" r="3" /><circle cx="12" cy="18" r="1" fill="currentColor" /></svg>,
      // Timing Belt/Chain Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="8" cy="12" r="3" /><circle cx="16" cy="12" r="4" /><path d="M8 8h8M8 16h8" /><circle cx="8" cy="12" r="1" fill="currentColor" /><circle cx="16" cy="12" r="1.5" fill="currentColor" /></svg>,
      // Cooling System Service
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" /><circle cx="12" cy="12" r="3" fill="#ffffff" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>,
      // Radiator Repair & Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="3" y="4" width="18" height="16" rx="2" /><line x1="7" y1="4" x2="7" y2="20" /><line x1="12" y1="4" x2="12" y2="20" /><line x1="17" y1="4" x2="17" y2="20" /><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="16" x2="21" y2="16" /></svg>
    ],
    "transmission-service": [
      // Automatic Transmission Service
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /><path d="M16 8l2-2M8 16l-2 2M16 16l2 2M8 8l-2-2" /></svg>,
      // Gearbox Diagnostics
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="6" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><path d="M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2" /><rect x="9" y="9" width="6" height="6" rx="1" /></svg>,
      // Transmission Oil Change
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M6 3h12v12H6z" /><path d="M12 15v4" /><circle cx="12" cy="20" r="1.5" fill="currentColor" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" /></svg>,
      // Automatic Transmission Repair & Overhaul
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="6" r="1.5" fill="currentColor" /><circle cx="12" cy="18" r="1.5" fill="currentColor" /><circle cx="6" cy="12" r="1.5" fill="currentColor" /><circle cx="18" cy="12" r="1.5" fill="currentColor" /></svg>
    ],
    "brake-repair": [
      // Brake Pad Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="4" y="7" width="16" height="10" rx="2" /><line x1="8" y1="7" x2="8" y2="17" /><line x1="16" y1="7" x2="16" y2="17" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="12" r="0.75" fill="currentColor" /></svg>,
      // Brake Disc/Rotor Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="7" r="0.75" fill="currentColor" /><circle cx="12" cy="17" r="0.75" fill="currentColor" /><circle cx="7" cy="12" r="0.75" fill="currentColor" /><circle cx="17" cy="12" r="0.75" fill="currentColor" /><circle cx="8.5" cy="8.5" r="0.75" fill="currentColor" /><circle cx="15.5" cy="15.5" r="0.75" fill="currentColor" /><circle cx="8.5" cy="15.5" r="0.75" fill="currentColor" /><circle cx="15.5" cy="8.5" r="0.75" fill="currentColor" /></svg>,
      // Brake Fluid Flush
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="6" y="8" width="12" height="12" rx="2" /><path d="M9 8V4h6v4M12 11v6" /><circle cx="12" cy="14" r="1.5" fill="currentColor" /></svg>,
      // ABS Diagnostics & Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="8" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5l1.5 1.5M5 19l1.5-1.5M17.5 6.5l1.5 1.5" /><circle cx="12" cy="12" r="4" fill="rgba(225,29,72,0.15)" /></svg>,
      // Complete Brake System Inspection
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="11" cy="11" r="8" /><circle cx="11" cy="11" r="3" /><path d="M16 16l3 3m-1-5l2.5 2.5" /></svg>
    ],
    "suspension-steering": [
      // Suspension Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M12 4L4 12h5v8h6v-8h5L12 4z" /><circle cx="12" cy="8" r="1.5" fill="currentColor" /><circle cx="8" cy="15" r="1" fill="currentColor" /><circle cx="16" cy="15" r="1" fill="currentColor" /></svg>,
      // Shock Absorber Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="4" r="2" /><circle cx="12" cy="20" r="2" /><line x1="12" y1="6" x2="12" y2="18" /><path d="M9 9h6M9 12h6M9 15h6" /></svg>,
      // Steering System Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><line x1="2" y1="12" x2="22" y2="12" /><path d="M6 10v4M8 9v6M10 10v4M14 10v4M16 9v6M18 10v4" /><circle cx="12" cy="12" r="2" /><line x1="12" y1="6" x2="12" y2="10" /></svg>,
      // Wheel Alignment
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="3" x2="8" y2="21" /><line x1="12" y1="3" x2="12" y2="21" /><line x1="16" y1="3" x2="16" y2="21" /><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /></svg>,
      // Wheel Balancing
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><line x1="12" y1="3" x2="12" y2="21" /><line x1="3" y1="12" x2="22" y2="12" /></svg>
    ],
    "electrical-electronics": [
      // Computer Diagnostics
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" /></svg>,
      // Battery Testing & Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="3" y="6" width="18" height="14" rx="2" /><line x1="7" y1="3" x2="7" y2="6" /><line x1="17" y1="3" x2="17" y2="6" /><line x1="5" y1="11" x2="9" y2="11" /><line x1="15" y1="11" x2="19" y2="11" /><line x1="17" y1="9" x2="17" y2="13" /><circle cx="12" cy="14" r="1.5" fill="currentColor" /></svg>,
      // Starter Motor & Alternator Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 2a10 10 0 0 1 10 10" /><polygon points="12,8 14,12 10,12" fill="currentColor" /></svg>,
      // ECU Programming
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h10v10H7z" /><circle cx="12" cy="12" r="2" /></svg>,
      // VGS 3&4 Programming
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" /><path d="M9 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" /><circle cx="6" cy="6" r="1" fill="currentColor" /><circle cx="18" cy="18" r="1" fill="currentColor" /></svg>,
      // TCU / SCN Coding
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1.5" fill="currentColor" /></svg>
    ],
    "air-conditioning": [
      // A/C Performance Check
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="7" cy="12" r="4" /><circle cx="17" cy="12" r="4" /><line x1="7" y1="12" x2="9" y2="10" /><line x1="17" y1="12" x2="19" y2="10" /><path d="M12 16h.01" /></svg>,
      // A/C Gas Recharge
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M8 7V4h8v3" /><rect x="5" y="7" width="14" height="14" rx="3" /><line x1="5" y1="12" x2="19" y2="12" /><circle cx="12" cy="16" r="2" /><circle cx="12" cy="16" r="0.75" fill="currentColor" /></svg>,
      // Compressor Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="6" y="4" width="12" height="16" rx="2" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="10" r="1" fill="currentColor" /><line x1="6" y1="16" x2="18" y2="16" /></svg>,
      // Cabin Filter Replacement
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="3" y="6" width="18" height="12" rx="1" /><line x1="7" y1="6" x2="7" y2="18" /><line x1="12" y1="6" x2="12" y2="18" /><line x1="17" y1="6" x2="17" y2="18" /><path d="M4 3c1.5 1 1.5 2 3 2s1.5-1 3-1 1.5 1 3 1" /></svg>,
      // A/C Leak Detection
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M18 8A6 6 0 0 0 6 8c0 7 6 13 6 13s6-6 6-13z" /><circle cx="12" cy="8" r="3" /><circle cx="12" cy="8" r="1" fill="currentColor" /></svg>,
      // A/C Evaporator Changing
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 3v18M17 3v18M3 9h14M7 15h14" /></svg>
    ],
    "body-paint": [
      // Dent Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M12 22v-8M5 12h14v2H5z" /><path d="M12 12V6c0-2 2-3 4-3" /><circle cx="16" cy="3" r="1.5" fill="currentColor" /></svg>,
      // Premium Painting & Refinishing
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M7 3h6v4H7zM5 7h10v6l-3 4-2-2-1.5 5H5l1.5-7H5V7z" /><circle cx="18" cy="8" r="1" fill="currentColor" /><circle cx="21" cy="9.5" r="0.75" fill="currentColor" /><circle cx="19" cy="11.5" r="0.75" fill="currentColor" /></svg>,
      // Scratch Removal & Paint Correction
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3a9 9 0 0 1 9 9" /><path d="M12 21a9 9 0 0 1-9-9" /></svg>,
      // Ceramic Coating
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /><circle cx="12" cy="11" r="1.25" fill="currentColor" /></svg>,
      // Accident Repair
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="12" y1="4" x2="12" y2="20" /><path d="M8 8l8 8M8 16l8-8" /></svg>,
      // Engine Bay Cleaning
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="6" cy="12" r="3" /><path d="M9 12h13M21 9l-3 3 3 3" /><circle cx="6" cy="12" r="1" fill="currentColor" /></svg>
    ]
  };
  return icons[category]?.[index] || (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}><circle cx="12" cy="12" r="10" /></svg>
  );
};


export default function LocalizedServiceCategoryPage({ params }) {
  const { locale, category } = use(params);
  const isArabic = locale === "ar";
  const t = translations[locale];
  
  const categoryData = serviceDetails[locale]?.[category];
  const media = categoryMedia[category];
  
  const [expandedFeature, setExpandedFeature] = useState(null);

  if (!categoryData || !media) {
    notFound();
  }

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const titleText = categoryData.title;
  const words = titleText.split(" ");
  const firstWord = words[0];
  const restOfWords = words.slice(1).join(" ");

  return (
    <>
      <Header />
      <div style={{ padding: "6rem 2rem 5rem 2rem", maxWidth: "var(--max-width)", margin: "0 auto", width: "100%", background: "transparent", direction: isArabic ? "rtl" : "ltr" }}>
        


        {/* Top Headline Area */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          paddingBottom: "2rem"
        }}>
          <div style={{ flex: "1 1 500px", textAlign: isArabic ? "right" : "left" }}>
            <span style={{
              color: "var(--accent, #e11d48)",
              fontSize: "0.85rem",
              fontWeight: "800",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              — {isArabic ? "خدماتنا" : "Our Services"}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
              <h1 style={{ fontSize: "clamp(2.1rem, 4vw, 3.25rem)", fontWeight: "900", color: "#18181b", lineHeight: "1.1", margin: 0, textTransform: "uppercase" }}>
                {firstWord} <span style={{ color: "var(--accent, #e11d48)" }}>{restOfWords}</span>
              </h1>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" style={{ color: "var(--accent, #e11d48)", flexShrink: 0 }}>
                <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M18.25 5.75L5.75 18.25" />
              </svg>
            </div>
            <p style={{ color: "#71717a", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "1rem", maxWidth: "700px" }}>
              {categoryData.tagline} {categoryData.desc}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: isArabic ? "flex-start" : "flex-end", gap: "0.5rem" }}>
            {/* Scroll Indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#71717a", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", flexDirection: isArabic ? "row-reverse" : "row" }}>
              <div style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                border: "1.5px solid var(--accent, #e11d48)",
                color: "var(--accent, #e11d48)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "900"
              }}>
                ↓
              </div>
              <span>{isArabic ? "مرر للاستكشاف" : "Scroll to Explore"}</span>
            </div>
            
            {/* Category Tracker Index */}
            <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "#a1a1aa", marginTop: "0.25rem" }}>
              <span style={{ color: "var(--accent, #e11d48)" }}>{media.index}</span> / 08
            </div>
          </div>
        </div>

        {/* Two side-by-side premium service images */}
        <div className="service-images-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          margin: "3rem 0 4rem 0",
          direction: isArabic ? "rtl" : "ltr"
        }}>
          
          {/* Image 1: Left */}
          <div style={{
            position: "relative",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)"
          }}>
            <Image 
              src={media.leftImg} 
              alt={categoryData.title} 
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark gradient overlay at the bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "2rem",
              textAlign: isArabic ? "right" : "left"
            }}>
              <div style={{ width: "32px", height: "3px", background: "var(--accent, #e11d48)", marginBottom: "0.75rem", alignSelf: isArabic ? "flex-end" : "flex-start" }} />
              <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: "900", letterSpacing: "0.05em", margin: "0 0 0.25rem 0" }}>
                {isArabic ? media.leftTitle.ar : media.leftTitle.en}
              </h3>
              <p style={{ color: "#d4d4d8", fontSize: "0.85rem", lineHeight: "1.4", margin: 0 }}>
                {isArabic ? media.leftDesc.ar : media.leftDesc.en}
              </p>
            </div>
          </div>

          {/* Image 2: Right */}
          <div style={{
            position: "relative",
            height: "360px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)"
          }}>
            <Image 
              src={media.rightImg} 
              alt={categoryData.title} 
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Dark gradient overlay at the bottom */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "2rem",
              textAlign: isArabic ? "right" : "left"
            }}>
              <div style={{ width: "32px", height: "3px", background: "var(--accent, #e11d48)", marginBottom: "0.75rem", alignSelf: isArabic ? "flex-end" : "flex-start" }} />
              <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: "900", letterSpacing: "0.05em", margin: "0 0 0.25rem 0" }}>
                {isArabic ? media.rightTitle.ar : media.rightTitle.en}
              </h3>
              <p style={{ color: "#d4d4d8", fontSize: "0.85rem", lineHeight: "1.4", margin: 0 }}>
                {isArabic ? media.rightDesc.ar : media.rightDesc.en}
              </p>
            </div>
          </div>

        </div>

        {/* Feature Accordions Section */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "2rem", borderBottom: "2px solid rgba(0,0,0,0.06)", paddingBottom: "0.75rem", color: "#18181b", textAlign: isArabic ? "right" : "left" }}>
          {t.services.directory}
        </h2>

        <div className="services-accordions-container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          direction: isArabic ? "rtl" : "ltr"
        }}>
          {categoryData.features.map((item, idx) => (
            <div key={idx} style={{
              background: "#ffffff",
              border: "1px solid #e4e4e7",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }} className={`accordion-card ${expandedFeature === idx ? "active" : ""}`}>
              {/* Header */}
              <div 
                onClick={() => toggleFeature(idx)}
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  userSelect: "none",
                  flexDirection: isArabic ? "row-reverse" : "row"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
                  <div className="accordion-icon" style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(225, 29, 72, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {getFeatureIcon(category, idx)}
                  </div>
                  <span style={{ fontSize: "1rem", fontWeight: "700", color: "#18181b" }}>
                    {item.name}
                  </span>
                </div>
                
                <div style={{
                  transform: expandedFeature === idx ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  color: "#a1a1aa",
                  display: "flex",
                  alignItems: "center"
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div style={{
                maxHeight: expandedFeature === idx ? "200px" : "0px",
                opacity: expandedFeature === idx ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              }}>
                <div style={{
                  padding: "0 1.5rem 1.5rem 1.5rem",
                  borderTop: "1px solid #f4f4f5",
                  paddingTop: "1rem",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  color: "#71717a",
                  textAlign: isArabic ? "right" : "left"
                }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Immediate CTA Box at the very bottom */}
        <div className="glass" style={{ padding: "2.5rem", borderRadius: "16px", background: "#f8f9fa", border: "1px solid #e4e4e7", marginTop: "4rem", textAlign: isArabic ? "right" : "left" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "0.75rem", color: "#18181b" }}>{t.services.immediate}</h3>
          <p style={{ color: "#71717a", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "2rem", maxWidth: "800px" }}>
            {t.services.immediateDesc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", flexDirection: isArabic ? "row-reverse" : "row" }}>
            <Link href={`/${locale}/book-appointment`} className="btn btn-primary" style={{ padding: "0.85rem 2rem", borderRadius: "8px", fontWeight: "700" }}>
              {t.services.bookingCta}
            </Link>
            <a href="https://wa.me/96897420425" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: "0.85rem 2rem", borderRadius: "8px", fontWeight: "700", display: "inline-flex", gap: "0.5rem", justifyContent: "center", alignItems: "center", background: "#ffffff", border: "1px solid #e4e4e7", color: "#18181b" }}>
              {t.services.whatsapp}
            </a>
          </div>
        </div>

      </div>
      <Footer />

      <style jsx global>{`
        @media (max-width: 768px) {
          .service-images-grid {
            grid-template-columns: 1fr !important;
          }
          .services-accordions-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
