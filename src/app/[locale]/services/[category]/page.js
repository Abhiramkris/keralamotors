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
      title: "Certified Periodic Maintenance & Digital Inspection",
      tagline: "Factory-compliant scheduled servicing, synthetic fluid engineering, and bumper-to-bumper multi-point digital diagnostic inspections.",
      desc: "Routine proactive maintenance is vital to the lifespan and mechanical integrity of a luxury vehicle. Our technicians execute comprehensive dealer-level protocols using premium synthetic lubricants and diagnostic telemetry.",
      features: [
        { name: "Periodic Vehicle Service", desc: "Scheduled intervals aligned with manufacturer requirements to preserve performance and warranties." },
        { name: "Minor Service", desc: "Lube, filter updates, and general performance diagnostics." },
        { name: "Major Service", desc: "In-depth checks including spark plugs, engine components, and comprehensive system tests." },
        { name: "Oil & Filter Change", desc: "Using high-grade full synthetic lubricants (Castrol/Mobil 1) matched to your engine spec." },
        { name: "Multi-Point Vehicle Inspection", desc: "A rigorous bumper-to-bumper check covering electronics, structure, braking, and mechanics." },
        { name: "Fluid Top-Up & Replacement", desc: "Testing and replacing coolant, steering fluid, and washer fluids to safeguard systems." }
      ]
    },
    "engine-repair": {
      title: "Precision Engine Diagnostics & Blueprint Overhaul",
      tagline: "Specialized dealer-level diagnostics, cylinder block machining, timing chain synchronization, and precision rebuilds for German and European high-performance engines.",
      desc: "Your premium vehicle houses a high-precision power plant requiring specialized diagnostic platforms and mechanical mastery. From sensor faults to complete engine blueprint overhauls, we deliver precision care.",
      features: [
        { name: "Engine Diagnostics", desc: "Using specialized platforms like BMW ISTA and Mercedes Xentry to locate sensor or timing errors." },
        { name: "Engine Repair & Overhaul", desc: "Complete engine dismantling, component block machining, cylinder honing, and blueprint rebuilds." },
        { name: "Timing Belt/Chain Replacement", desc: "Preventative and reactive replacements to avoid catastrophic engine valvetrain crashes." },
        { name: "Cooling System Service", desc: "Thermostats, coolant pumps, and expansion tanks flushed and upgraded." },
        { name: "Radiator Repair & Replacement", desc: "Fixing system pressure drops and heat dissipation leaks." }
      ]
    },
    "transmission-service": {
      title: "Transmission Diagnostics, Mechatronics & Gearbox Overhaul",
      tagline: "Calibrated transmission repairs, pressurized fluid flushes, and mechatronic coding for automatic, dual-clutch (DCT), and ZF multi-speed gearboxes.",
      desc: "Dual-clutch (DCT), torque-converter, and multi-speed luxury gearboxes demand highly trained technicians. We carry out preventative transmission servicing, pressurized fluid flushing, and full gearbox rebuilds.",
      features: [
        { name: "Automatic Transmission Service", desc: "Comprehensive clutch, torque converter, and pressure solenoid checks." },
        { name: "Gearbox Diagnostics", desc: "Electronic module scanning to isolate gear slippage or shifts delays." },
        { name: "Transmission Oil Change", desc: "Pan, seal, and filter replacements with specialized manufacturer transmission fluids." },
        { name: "Automatic Transmission Repair & Overhaul", desc: "Dismantling mechanical gear sets and replacing worn clutches, bands, and seals." }
      ]
    },
    "brake-repair": {
      title: "High-Performance Braking Systems & Caliper Servicing",
      tagline: "Precision laser runout testing, carbon-ceramic and ventilated disc replacement, multi-piston monobloc caliper overhauls, and pressurized DOT fluid flushes.",
      desc: "Safety is paramount. We handle everything from basic pad changes to rebuilding electronic parking brakes, testing rotor tolerances with micrometers, and rebuilding multi-piston monobloc calipers.",
      features: [
        { name: "Brake Pad Replacement", desc: "Installing low-dust premium ceramic or semi-metallic friction pads." },
        { name: "Brake Disc/Rotor Replacement", desc: "High-carbon brake discs fitted to minimize heat deformation and judder." },
        { name: "Brake Fluid Flush", desc: "Removing moisture-rich old fluid and pressure-flushing fresh DOT fluid." },
        { name: "ABS Diagnostics & Repair", desc: "Solenoid block, speed sensor, and pressure control module troubleshooting." },
        { name: "Complete Brake System Inspection", desc: "Inspecting lines, vacuum hoses, master cylinders, and parking brakes." }
      ]
    },
    "suspension-steering": {
      title: "Active Airmatic Suspension & 3D Laser Steering Alignment",
      tagline: "Expert diagnostics and replacement of pneumatic air springs, electronic dampers, hydraulic steering racks, and multi-axis 3D laser geometry alignment.",
      desc: "Luxury passenger cars feature sophisticated ride systems that guarantee ultimate comfort. We possess the rare tools and expertise to repair active pneumatic air suspensions and calibrate 3D steering geometry.",
      features: [
        { name: "Suspension Repair", desc: "Replacing control arms, ball joints, bushings, and sway bar links." },
        { name: "Shock Absorber Replacement (Airmatic & Hydraulic)", desc: "Specialized diagnostics and replacement of pneumatic air springs and active hydraulic dampening systems." },
        { name: "Steering System Repair (Electrical & Hydraulic)", desc: "Fixing EPS steering racks, fluid pumps, high-pressure lines, and inner/outer tie rods." },
        { name: "Wheel Alignment", desc: "Multi-axis laser alignment matching strict manufacturer ride-height specifications." },
        { name: "Wheel Balancing", desc: "Correcting tire mass distribution to eliminate high-speed steering vibration." }
      ]
    },
    "electrical-electronics": {
      title: "ECU / TCU Programming & Dealer-Level SCN Coding",
      tagline: "Direct-server software calibration, CAN-bus network troubleshooting, module synchronization, and dealership-grade computerized electronics diagnosis.",
      desc: "Modern German and European automobiles are rolling supercomputers. We have licensed dealer-level software capabilities to code, update, and program onboard control units and CAN-bus networks.",
      features: [
        { name: "Computer Diagnostics", desc: "Complete code sweeps mapping localized network communication status and CAN-bus telemetry." },
        { name: "Battery Testing & Replacement", desc: "Testing cranking voltage and registering new AGM/Li-Ion batteries to the vehicle power management system." },
        { name: "Starter Motor Repair", desc: "Overhauling primary starting solenoids and electrical power starters." },
        { name: "Alternator Repair", desc: "Testing rectifiers, replacing voltage regulators, and heavy-duty alternator overhauls." },
        { name: "ECU Programming", desc: "Updating engine control software mapping to resolve driveability faults and optimize performance." },
        { name: "VGS (Vehicle Gateway System) 3&4 programming", desc: "Specialized transmission module calibration and security adaptations for Mercedes-Benz platforms." },
        { name: "Software Updation", desc: "Full-vehicle factory firmware updates keeping all onboard modules aligned with manufacturer service bulletins." },
        { name: "TCU replacement and coding", desc: "Transmission Control Unit replacement, adaptive coding, and drive synchronization." },
        { name: "SCN Coding", desc: "Online Software Calibration Number coding directly synchronizing new modules to the vehicle VIN database." },
        { name: "Sensor Replacement", desc: "Sourcing and installing OEM oxygen sensors, MAF sensors, crankshaft sensors, and radar modules." },
        { name: "Lighting System Repair", desc: "Troubleshooting and repair of adaptive Matrix LED, Bi-Xenon headlights, taillights, and control modules." }
      ]
    },
    "air-conditioning": {
      title: "Climate Control Precision & Dual-Refrigerant Recovery",
      tagline: "Computerized recovery and digital recharging for R-134a and R-1234yf systems, deep dashboard evaporator replacement, and whisper-quiet cooling engineered for Oman heat.",
      desc: "Oman extreme climate calls for a perfectly functioning A/C system. We provide automated digital recovery, precision digital scale charging, UV leak detection, compressor rebuilding, and deep dashboard evaporator repairs.",
      features: [
        { name: "A/C Performance Check", desc: "Testing discharge temperature, blower speeds, and vent actuator movement." },
        { name: "A/C Gas Recharge (R-134a & R-1234yf)", desc: "Evacuating moisture and recharging refrigerant using strict digital scales for both legacy and new refrigerants." },
        { name: "Compressor Repair", desc: "Replacing magnetic clutches, control valves, or complete compressor assemblies." },
        { name: "Cabin Filter Replacement", desc: "Replacing filters with active carbon variants to guarantee clean cabin air." },
        { name: "A/C Leak Detection", desc: "Injecting UV dye and vacuum-testing lines to isolate trace gas leaks." },
        { name: "A/C Evaporator Changing (Dash Board remove and Installation)", desc: "Expert dashboard disassembly and structural reassembly to replace leaking evaporators." }
      ]
    },
    "tires-wheels": {
      title: "Road-Force Dynamic Balancing & Ultra-High-Performance Tires",
      tagline: "Harmonic road-force diagnostics, touchless mounting of low-profile UHP run-flat tires, curb rash alloy wheel restoration, and pure nitrogen inflation.",
      desc: "Your tires are your only connection to the road. We supply top-tier premium tires, perform computerized Road-Force harmonic balancing, repair alloy rim curb rash, and optimize tire longevity.",
      features: [
        { name: "Tire Replacement", desc: "Sourcing and fitting ultra-high-performance (UHP) and run-flat tires from Michelin, Continental, Pirelli, and Bridgestone." },
        { name: "Tire Rotation", desc: "Systematic tire pattern rotation to ensure uniform tread wear, extend tire lifespan, and improve road grip." },
        { name: "Tire Repair", desc: "Permanent vulcanized puncture repairs meeting strict road safety and high-speed tire ratings." },
        { name: "Nitrogen Filling", desc: "High-purity dry nitrogen inflation maintaining stable tire pressures under extreme Oman desert heat." },
        { name: "Alloy Wheel Repair", desc: "Straightening bent wheels, fixing curb rash, rim welding, and custom CNC face refinishing." }
      ]
    },
    "body-paint": {
      title: "Downdraft Thermal Bake Painting & Structural Body Restoration",
      tagline: "Spectrophotometer computerized paint matching, factory-spec Glasurit and Standox multi-stage clearcoats, and structural chassis restoration in sealed downdraft bake booths.",
      desc: "Restore the exterior finish of your luxury automobile. Our paint facility utilizes computerized color spectrophotometers, dust-free downdraft spray bake ovens, and premium clearcoats for matching OEM finish quality.",
      features: [
        { name: "Dent Repair", desc: "Traditional dent pulling, panel beating, and Paintless Dent Repair (PDR) back to smooth factory curvatures." },
        { name: "Scratch Removal", desc: "Multi-stage wet sanding, micro-scratch buffing, and clearcoat touch-ups eliminating surface flaws." },
        { name: "Full Body Painting", desc: "Complete exterior respraying inside downdraft bake ovens using premium Glasurit and Standox paints." },
        { name: "Paint Protection", desc: "High-durability Paint Protection Films (PPF) and sealant shields guarding against rock chips and sand abrasion." },
        { name: "Accident Repair", desc: "Structural chassis realignment, bumper and fender alignment, and panel replacements restoring OEM crash safety." }
      ]
    },
    "detailing-protection": {
      title: "Multi-Stage Paint Correction & 9H Ceramic Shield Protection",
      tagline: "Precision rotary machine polishing eliminating swirl marks, deep interior leather restoration, and ultra-hydrophobic 9H nano-ceramic coatings safeguarding against UV and desert sand.",
      desc: "Preserve and protect the interior elegance and exterior gloss of your automobile. From leather restoration and steam sanitization to 9H ceramic coating shields, we deliver unmatched detailing.",
      features: [
        { name: "Premium Car Wash", desc: "Gentle hand wash using pH-neutral luxury shampoos, microfiber wash mitts, and filtered spot-free rinse." },
        { name: "Interior Deep Cleaning", desc: "Steam extraction of carpets, deep leather conditioning, anti-bacterial cabin disinfection, and headliner cleaning." },
        { name: "Exterior Detailing", desc: "Clay bar decontamination, iron particle removal, wheel well cleaning, and trim restoration." },
        { name: "Paint Correction", desc: "Multi-stage rotary machine polishing removing swirl marks, holograms, and heavy oxidation." },
        { name: "Ceramic Coating", desc: "Application of 9H ultra-hydrophobic ceramic coatings creating an enduring glass-like shield against UV rays and heat." },
        { name: "Headlight Restoration", desc: "Multi-step sanding, compounding, and UV sealant curing restoring crystal-clear headlight clarity and night vision." },
        { name: "Engine Bay Cleaning", desc: "Safe electrical component masking, gentle steam degreasing, and protective dressing of engine bay covers." }
      ]
    },
    "luxury-performance": {
      title: "Dyno Performance Tuning & Sports Exhaust Enhancement",
      tagline: "All-wheel-drive dynamometer horsepower calibration, electronically valved sports exhaust systems, high-flow downpipes, and track-engineered adaptations for supercars and luxury GTs.",
      desc: "Exotic supercars and high-performance luxury vehicles require specialized engineering, high-tolerance tools, and bespoke parts. We enhance dynamics, dyno-test horsepower curves, and maintain supreme performance.",
      features: [
        { name: "Exhaust System Upgrades", desc: "Custom sports exhaust installations, downpipe upgrades, valve-controlled mufflers, and catalytic converter servicing." },
        { name: "Suspension Upgrades", desc: "Performance coilover installations, adaptive sports dampening, anti-roll bars, and track-ready height adjustment." },
        { name: "Luxury Vehicle Maintenance", desc: "Tailored care protocols for Ferrari, Aston Martin, Bentley, Rolls-Royce, Porsche, and AMG performance models." }
      ]
    },
    "emergency-services": {
      title: "24/7 Zero-Angle Hydraulic Flatbed Towing & Roadside Recovery",
      tagline: "Rapid emergency roadside dispatch across Muscat with specialized zero-clearance flatbed recovery trucks protecting lowered supercars, exotic splitters, and luxury SUVs.",
      desc: "Vehicle breakdowns happen without warning. Our emergency dispatch team is ready around the clock with zero-angle flatbed towing, surge-protected jump-start packs, and quick roadside problem resolution.",
      features: [
        { name: "Battery Jump Start", desc: "Rapid mobile dispatch with professional surge-protected battery jump-starter packs preventing electronic damage." },
        { name: "Roadside Assistance", desc: "Quick roadside support for flat tires, fuel delivery, electrical lockouts, and emergency safety checks." },
        { name: "Vehicle Recovery & Towing", desc: "Low-clearance flatbed recovery trucks specialized in transporting lowered sports cars and luxury SUVs safely." },
        { name: "Emergency Breakdown Support", desc: "24/7 priority workshop access, emergency diagnostic triage, and immediate advisor coordination." }
      ]
    },
    "additional-services": {
      title: "Bespoke Leather Craft Upholstery & Nano-Ceramic Window Tinting",
      tagline: "Handcrafted automotive leather re-trimming, custom diamond-stitch interior appointments, 99% UV-rejection thermal window films, and Apple CarPlay multimedia integration.",
      desc: "Complete personalization and comfort upgrades for your driving experience. From heat-rejecting nano-ceramic window films to custom leather re-trimming and multimedia dash installations.",
      features: [
        { name: "Car Accessories Installation", desc: "Professional fitting of Android/Apple CarPlay screens, dash cams, ambient LED lighting, and body styling kits." },
        { name: "Window Tinting", desc: "High-grade nano-ceramic thermal window films offering up to 99% UV rejection and maximum heat reduction." },
        { name: "Car Upholstery", desc: "Handcrafted genuine Italian leather reupholstery, steering wheel leather restoration, and headliner repair." }
      ]
    }
  },
  ar: {
    "general-maintenance": {
      title: "الصيانة الدورية المعتمدة والفحص الرقمي الشامل",
      tagline: "صيانة مجدولة معتمدة وفق معايير المصنع، واستخدام زيوت تخليقية فائقة، وفحص رقمي شامل من المصد إلى المصد.",
      desc: "الصيانة الدورية الاستباقية أمر حيوي لعمر مركبتك الفاخرة وسلامتها الميكانيكية. يقوم فنيونا المعتمدون بإجراء أدق الفحوصات ومطابقة معايير الوكالات الرسمية باستخدام زيوت تخليقية متطورة.",
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
      title: "تشخيص المحركات الدقيق والتوضيب الميكانيكي الشامل",
      tagline: "تشخيص بأجهزة الوكالة المتخصصة، وخرط كتل المحركات، ومعايرة جنازير التوقيت، وإعادة بناء متقنة للمحركات الأوروبية عالية الأداء.",
      desc: "تحتوي سيارتك الفاخرة على محرك معقد يتطلب منصات تشخيص متخصصة ومهارات ميكانيكية دقيقة. نقوم بإدارة كل خطوة بدقة متناهية من استبدال الحساسات إلى التوضيب الكامل للمحرك.",
      features: [
        { name: "تشخيص المحرك", desc: "باستخدام منصات متخصصة مثل BMW ISTA و Mercedes Xentry لتحديد أخطاء الحساسات والتوقيت." },
        { name: "إصلاح وتوضيب المحرك", desc: "تفكيك كامل للمحرك، وتجليخ أسطوانات المحرك، وإعادة البناء بالكامل." },
        { name: "استبدال سير/جنزير الكاتينة", desc: "استبدال وقائي وتفاعلي لتجنب تلف المحرك الكارثي عند انقطاع السير." },
        { name: "صيانة نظام التبريد", desc: "غسيل وتحديث منظمات الحرارة ومضخات التبريد وخزانات التمدد." },
        { name: "إصلاح واستبدال الراديتر", desc: "معالجة انخفاض ضغط النظام وتسريبات تبديد الحرارة." }
      ]
    },
    "transmission-service": {
      title: "تشخيص نواقل الحركة وبرمجة الميكاترونيك وتوضيب الجير",
      tagline: "معايرة دقيقة لناقلات الحركة، وغسيل الزيوت الهيدروليكية، وبرمجة وحدات الميكاترونيك لنواقل الحركة الأوتوماتيكية والدبل كلتش وZF.",
      desc: "تتطلب علب التروس الفاخرة مزدوجة القابض ومزدوجة السرعة فنيين مدربين تدريباً عالياً. نقوم بإجراء الصيانات الوقائية وغسيل الزيوت بالضغط وإعادة البناء الكامل للتروس.",
      features: [
        { name: "صيانة ناقل الحركة الأوتوماتيكي", desc: "فحوصات شاملة للقابض ومحول عزم الدوران وصمامات الضغط." },
        { name: "تشخيص علبة التروس", desc: "مسح الوحدات الإلكترونية لعزل انزلاق التروس أو تأخر تبديل السرعة." },
        { name: "تغيير زيت ناقل الحركة", desc: "استبدال الفلتر والوجه وسوائل ناقل الحركة الخاصة بالشركة المصنعة." },
        { name: "إصلاح وتوضيب ناقل الحركة", desc: "تفكيك مجموعات التروس الميكانيكية واستبدال الكلتشات والحشوات المهترئة." }
      ]
    },
    "brake-repair": {
      title: "أنظمة المكابح عالية الأداء وصيانة الكليبرات الرياضية",
      tagline: "فحص استقامة الديسكات بالليزر، وتركيب أقراص الكربون سيراميك المهواة، وصيانة كليبرات المكابح الرياضية وغسيل سائل الفرامل المضغوط.",
      desc: "السلامة هي الأهم. نتعامل مع كل شيء من تغيير الفحمات الخزفية إلى فحص استقامة الديسكات بالميكروميتر وإعادة بناء فرامل اليد الإلكترونية والكليبرات متعددة المكابس.",
      features: [
        { name: "استبدال فحمات الفرامل", desc: "تركيب فحمات سيراميك فاخرة قليلة الغبار أو فحمات شبه معدنية." },
        { name: "استبدال ديسكات/أقراص الفرامل", desc: "تركيب ديسكات فرامل عالية الكربون لتقليل تشوه الحرارة والاهتزاز." },
        { name: "غسيل سائل الفرامل", desc: "إزالة السائل القديم المشبع بالرطوبة وضغط سائل DOT الجديد بالكامل." },
        { name: "تشخيص وإصلاح نظام ABS", desc: "استكشاف أخطاء وحدة ABS وحساسات السرعة ووحدة التحكم بالضغط وإصلاحها." },
        { name: "فحص كامل لنظام الفرامل", desc: "فحص خطوط الزيت، وخراطيم تفريغ الهواء، والسلندر الرئيسي، وفرامل اليد." }
      ]
    },
    "suspension-steering": {
      title: "صيانة التعليق الهوائي والميزان الليزري ثلاثي الأبعاد",
      tagline: "تشخيص واستبدال مساعدات التعليق الهوائي النشط (Airmatic)، ومخمدات الصدمات الإلكترونية، وميزان توجيه ثلاثي الأبعاد فائق الدقة بالليزر.",
      desc: "تتميز السيارات الفاخرة بأنظمة تعليق متطورة تضمن الراحة القصوى في الركوب. نمتلك الأدوات النادرة والخبرة لإصلاح مساعدات الهواء الهيدروليكي ومحاذاة العجلات بالليزر وفق معايير المصنع.",
      features: [
        { name: "إصلاح نظام التعليق", desc: "استبدال مقصات التحكم، وجوزات التعليق، والجلد، ووصلات قضيب التوازن." },
        { name: "استبدال مساعدات التعليق الهوائي والهيدروليكي", desc: "تشخيص واستبدال مساعدات الهواء المضغوط (Airmatic) وأنظمة المخمدات الهيدروليكية النشطة." },
        { name: "إصلاح نظام التوجيه", desc: "إصلاح علبة التوجيه الكهربائية والهيدروليكية ومضخات الزيت ووصلات التوجيه." },
        { name: "محاذاة العجلات بالليزر", desc: "محاذاة العجلات متعددة المحاور لتطابق مواصفات ارتفاع الركوب الصارمة للشركة المصنعة." },
        { name: "موازنة العجلات (الترصيص)", desc: "تصحيح توزيع كتلة الإطارات للقضاء على اهتزاز التوجيه على السرعات العالية." }
      ]
    },
    "electrical-electronics": {
      title: "برمجة كمبيوتر السيارات وترميز SCN أونلاين بمستوى الوكالة",
      tagline: "ترميز أونلاين متصل بسيرفرات المصنع، واستكشاف أخطاء شبكات CAN-bus، ومزامنة وحدات التحكم الإلكترونية وتحديث البرمجيات الكاملة.",
      desc: "السيارات الأوروبية الحديثة هي كمبيوترات متنقلة. لدينا قدرات برمجية مرخصة تعادل الوكلاء لبرمجة وتحديث وحدات التحكم ومسح شبكات الاتصال الرقمية.",
      features: [
        { name: "تشخيصات الكمبيوتر", desc: "فحص شامل للأكواد والبروتوكولات لتتبع حالة الاتصال بالشبكة المحلية للمركبة." },
        { name: "فحص واستبدال البطارية", desc: "فحص بطاريات AGM/Li-Ion وتسجيل وتفعيل البطاريات الجديدة على نظام السيارة." },
        { name: "إصلاح السلف والدينامو", desc: "توضيب ملفات التشغيل الرئيسية والمولدات الكهربائية وتغيير الفحمات." },
        { name: "إصلاح دينامو الشحن", desc: "فحص دينامو الشحن ومنظم الجهد الكهربائي لضمان كفاءة التغذية الكهربائية." },
        { name: "برمجة عقول السيارات (ECU)", desc: "تحديث برمجيات التحكم في المحرك لحل مشكلات استجابة القيادة والأداء." },
        { name: "برمجة بوابة المركبة (VGS 3&4)", desc: "معايرة وحدة ناقل الحركة المتخصصة وتعديلات الحماية الأمنية." },
        { name: "تحديث برمجيات السيارة", desc: "تحديث البرمجيات الشاملة لكافة وحدات التحكم بالسيارة لآخر إصدارات المصنع." },
        { name: "استبدال وبرمجة عقل القير (TCU)", desc: "استبدال وتشفير وبرمجة عقول نواقل الحركة TCU ومزامنتها مع نظام الحركة." },
        { name: "ترميز SCN أونلاين", desc: "ترميز أرقام معايرة البرامج لمطابقة علبة التروس والتزامن الكامل أونلاين." },
        { name: "استبدال الحساسات", desc: "استبدال ومعايرة حساسات الأكسجين، والكرنك، وحساسات الهواء، والرادار، والكاميرات." },
        { name: "إصلاح أنظمة الإضاءة", desc: "إصلاح ومعايرة أنظمة الإضاءة الذكية والمصابيح التفاعلية LED والماتريكس ووحدات التحكم." }
      ]
    },
    "air-conditioning": {
      title: "أنظمة التكييف والمناخ وشحن غاز الفريون الرقمي الدقيق",
      tagline: "شحن وسحب غاز الفريون رقمياً لأنظمة R-134a و R-1234yf، واستبدال ثلاجة المكيف بفك الداشبورد الاحترافي، وتبريد فائق مصمم لمقاومة حرارة عُمان.",
      desc: "يتطلب مناخ سلطنة عمان القاسي نظام تكييف يعمل بكفاءة قصوى. نقدم تفريغ الرطوبة وإعادة شحن الفريون بمقاييس رقمية، وكشف التسريب بالأشعة فوق البنفسجية وتوضيب الكومبريسور.",
      features: [
        { name: "فحص أداء مكيف الهواء", desc: "اختبار درجات حرارة الهواء الخارج وسرعات المروحة وحركة بوابات الهواء." },
        { name: "شحن غاز المكيف (R-134a و R-1234yf)", desc: "تفريغ الرطوبة وإعادة شحن غاز الفريون باستخدام مقاييس رقمية دقيقة." },
        { name: "إصلاح الكومبريسور", desc: "استبدال الكلتش المغناطيسي، صمامات التحكم، أو تركيب كومبريسور كامل جديد." },
        { name: "استبدال فلتر المقصورة", desc: "استبدال فلاتر الكربون النشط لضمان نقاء وجودة الهواء داخل المقصورة." },
        { name: "اكتشاف تسريب غاز المكيف", desc: "حقن صبغة الأشعة فوق البنفسجية واختبار تفريغ خراطيم التكييف لعزل التسريب الدقيق." },
        { name: "استبدال ثلاجة المكيف وفك الداشبورد", desc: "فك لوحة القيادة (الداشبورد) بالكامل بشكل خبير وتغيير ثلاجة المكيف التالفة." }
      ]
    },
    "tires-wheels": {
      title: "الترصيص الديناميكي المتطور وتركيب إطارات الأداء العالي",
      tagline: "ترصيص ديناميكي بأحدث الأجهزة الليزرية، وتركيب الإطارات الرياضية منخفضة الارتفاع بدون خدش للجنوط، وتعديل الجنوط وتعبئة النيتروجين النقي.",
      desc: "الإطارات هي نقطة الاتصال الوحيدة بسيارتك مع الطريق. نوفر أرقى ماركات الإطارات العالمية وإصلاح الجنوط وترصيص Road-Force الديناميكي لمنع الاهتزازات تماماً.",
      features: [
        { name: "تبديل الإطارات", desc: "تركيب وتوريد أفضل الإطارات الرياضية والعادية من ميشلان، بيريللي، وكونتيننتال." },
        { name: "تدوير الإطارات الدوري", desc: "تدوير الإطارات دورياً لضمان تآكل متساوٍ لسطح الإطار وإطالة عمره التشغيلي." },
        { name: "إصلاح رقع الإطارات", desc: "إصلاح ثقوب الإطارات بالرقع الحرارية المعتمدة وفق أعلى معايير السلامة للسرعات العالية." },
        { name: "تعبئة غاز النيتروجين", desc: "تعبئة غاز النيتروجين النقي للحفاظ على ثبات ضغط الإطارات تحت حرارة الصيف الشديدة." },
        { name: "إصلاح وتعديل الجنوط", desc: "تعديل الجنوط وإصلاح الخدوش والطعجات وتجديد لمعان الجنوط بأجهزة متطورة." }
      ]
    },
    "body-paint": {
      title: "الرش الحراري في أفران متطورة وإصلاح هياكل السيارات",
      tagline: "مطابقة ألوان الطلاء بالكمبيوتر، ودهانات ستاندوكس وجلاسوريت متعددة الطبقات في أفران رش حرارية خالية من الأتربة، وإصلاح صدمات الهيكل بدقة.",
      desc: "استعد المظهر الخارجي لسيارتك الفاخرة. تستخدم ورشة الطلاء لدينا أجهزة مطابقة الألوان بالكمبيوتر وكبائن الرش الحراري الخالية من الأتربة وطبقات حماية فاخرة مطابقة لجودة المصنع.",
      features: [
        { name: "تعديل الضربات والسمكرة", desc: "سحب الصاج وتعديل هياكل السيارات المتضررة وإعادتها لانحناءات المصنع الناعمة دون طلاء." },
        { name: "إزالة الخدوش ومعالجة السطح", desc: "صقل وتلميع أسطح الطلاء لإزالة الخدوش الدقيقة والبهتان." },
        { name: "طلاء كامل في أفران حرارية", desc: "رش الدهان متعدد المراحل ومطابقة طلاء السيارات الفاخرة بدقة متناهية بأفران حرارية." },
        { name: "حماية وتغليف الطلاء", desc: "إضافة طبقة حماية جزيئية وأفلام PPF لحماية دهان السيارة من الأشعة فوق البنفسجية والحرارة." },
        { name: "إصلاح أضرار وصدمات الحوادث", desc: "استبدال المصدات والرفارف والشبكات والقطع الهيكلية التالفة بعد الحوادث." }
      ]
    },
    "detailing-protection": {
      title: "تصحيح الطلاء الاحترافي وحماية النانو سيراميك 9H",
      tagline: "تلميع وتصحيح الطلاء الآلي لإزالة الخدوش الدقيقة، وتغذية الفرش الجلدي الفاخر، وتطبيق درع النانو سيراميك 9H لمقاومة الأشعة فوق البنفسجية وحرارة الصحراء.",
      desc: "حافظ على فخامة ولمعان سيارتك الداخلية والخارجية. نقدم تصحيح الطلاء بالبولش متعدد المراحل، ومعالجة احترافية للجلود وحماية النانو سيراميك 9H المقاومة للحرارة.",
      features: [
        { name: "غسيل سيارات فاخر وتفصيلي", desc: "غسيل يدوي فاخر باستخدام صابون خاص متوازن الحموضة ومناشف مايكروفايبر ناعمة." },
        { name: "تنظيف وتطهير داخلي عميق", desc: "تنظيف عميق بالبخار للمقاعد والأرضيات وتغذية الجلد وتعقيم فتحات التكييف والفرش." },
        { name: "تلميع وتفصيل الهيكل الخارجي", desc: "إزالة الشوائب والأكسدة من سطح الطلاء وتلميع الجنوط واستعادة لمعان الزوائد البلاستيكية." },
        { name: "تصحيح الطلاء وإزالة الدوائر", desc: "تصحيح الطلاء بمراحل متعددة وإزالة دوائر الغسيل والبهتان وإبراز عمق اللون." },
        { name: "طلاء النانو سيراميك 9H", desc: "تطبيق طبقات النانو سيراميك 9H لتشكيل درع زجاجي صلب مقاوم للماء والحرارة والأوساخ." },
        { name: "تلميع المصابيح الأمامية", desc: "إزالة الاصفرار والبهتان من المصابيح الأمامية وتطبيق طبقة حماية عازلة للأشعة." },
        { name: "تنظيف وتلميع حوض المحرك", desc: "تنظيف حوض المحرك بالبخار مع حماية الأنظمة الكهربائية وتلميع الأغطية البلاستيكية." }
      ]
    },
    "luxury-performance": {
      title: "برمجة القوة على الداينو وتعديل أنظمة العادم الرياضية",
      tagline: "معايرة القوة الحصانية وعزم الدوران على جهاز الداينو (Dyno)، وتركيب أنظمة العادم الرياضية بصمامات إلكترونية، وبرمجة الأداء للسيارات الرياضية الفارهة.",
      desc: "تتطلب السيارات الرياضية والفاخرة دقة هندسية استثنائية وأدوات فائقة الجودة. نقدم خدمات الترقية، وفحص منحنيات القوة على الداينو، والصيانة المخصصة للحفاظ على الأداء الرياضي المميز.",
      features: [
        { name: "ترقية وتعديل أنظمة العادم", desc: "تركيب وتعديل أنظمة العادم الرياضية والصمامات الصوتية الذكية وخدمات الدوان بايب." },
        { name: "ترقية أنظمة التعليق الرياضي", desc: "ترقية المساعدات الرياضية (Coilovers) وقضبان التوازن وتعديل ارتفاع وثبات السيارة." },
        { name: "صيانة فائقة للسيارات الفاخرة والخارقة", desc: "بروتوكولات صيانة فائقة الدقة مخصصة لسيارات فيراري، بنتلي، رولز رويس، بورش، وموديلات AMG." }
      ]
    },
    "emergency-services": {
      title: "سحب هيدروليكي آمن 24/7 ودعم طارئ على مدار الساعة",
      tagline: "استجابة طارئة فورية على مدار 24 ساعة بسطحات هيدروليكية منخفضة الزاوية لحماية الصدامات والسيارات الرياضية الفاخرة، مع شحن البطاريات ومساندة الطريق.",
      desc: "أعطال السيارات قد تحدث في أي وقت. فريق الاستجابة السريعة لدينا جاهز على مدار الساعة لتقديم السحب الآمن بسطحات هيدروليكية منخفضة تماماً والمساعدة الطارئة على الطريق.",
      features: [
        { name: "اشتراك وشحن البطارية فوراً", desc: "وصول فوري بأجهزة اشتراك ذكية ومحمية ضد التيارات المرتفعة لحماية عقول السيارة." },
        { name: "المساعدة الطارئة على الطريق", desc: "خدمة المساندة على الطريق لتبديل الإطارات وتوصيل الوقود وفحص الأعطال المفاجئة." },
        { name: "سحب ونقل المركبات المتعطلة", desc: "سطحات هيدروليكية مجهزة لنقل السيارات الفاخرة والمنخفضة بأمان تام دون أي احتكاك." },
        { name: "دعم فوري للأعطال الطارئة", desc: "دعم فني فوري واستقبال عاجل للحالات الطارئة في الورشة مع متابعة مستمرة للمركبة." }
      ]
    },
    "additional-services": {
      title: "تنجيد المقاعد بالجلد الفاخر والعزل الحراري النانو سيراميك",
      tagline: "حرفية يدوية لتنجيد المقاعد بالجلود الإيطالية الطبيعية، وتركيب عوازل النوافذ الحرارية نانو سيراميك عازلة حتى 99%، وتركيب شاشات أبل كاربلاي المتطورة.",
      desc: "ارتقِ بمستوى الراحة والفخامة داخل مركبتك. نوفر أفلام العزل الحراري النانو سيراميك وتجديد وتنجيد المقاعد بالجلد الفاخر بتطريزات ماسية مخصصة وتركيب أحدث الإكسسوارات.",
      features: [
        { name: "تركيب إكسسوارات وشاشات السيارات", desc: "تركيب شاشات أبل كاربلاي وأندرويد، وكاميرات المراقبة (داش كام)، وإضاءات الليد المحيطية." },
        { name: "تظليل النوافذ العازل للحرارة", desc: "تركيب عازل حراري نانو سيراميك أصلي يعزل حتى 99% من الأشعة فوق البنفسجية ويقلل حرارة المقصورة." },
        { name: "تنجيد وتجديد المقاعد والفرش الداخلي", desc: "تنجيد المقاعد بأفخم الجلود الطبيعية، وتجديد كسوة المقود وسقف السيارة بحرفية يدوية متقنة." }
      ]
    }
  }
};

const categoryMedia = {
  "general-maintenance": {
    index: "01",
    leftBadge: { en: "TECHNICAL INSPECTION", ar: "فحص تقني معتمد" },
    leftImg: "/services/general-maintenance.jpg",
    leftTitle: { en: "SYNTHETIC FLUIDS & MULTI-POINT CHECK", ar: "زيوت تخليقية وفحص متعدد النقاط" },
    leftDesc: { en: "Mobil 1 & Castrol Edge synthetic lubricants paired with OEM multi-point digital diagnostic checks.", ar: "زيوت تخليقية بالكامل من كاسترول وموبيل 1 مع فحص شامل لأدق أجزاء المحرك." },
    rightBadge: { en: "BMW SERVICE PROTOCOLS", ar: "معايير بي إم دبليو" },
    rightImg: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "BMW FACTORY SPECIFICATIONS", ar: "معايير بي إم دبليو الرسمية" },
    rightDesc: { en: "Routine scheduled maintenance adhering to strict Bavarian engineering standards.", ar: "صيانة دورية معتمدة وفق أدق المعايير الهندسية لسيارات بي إم دبليو الفاخرة." }
  },
  "engine-repair": {
    index: "02",
    leftBadge: { en: "ENGINE BLUEPRINTING", ar: "توضيب وهندسة المحركات" },
    leftImg: "/services/engine-repair.jpg",
    leftTitle: { en: "PRECISION ENGINE OVERHAUL", ar: "توضيب وهندسة المحركات" },
    leftDesc: { en: "Cylinder honing, timing chain calibration, and high-tolerance mechanical rebuilds.", ar: "خرط دقيق للسلندرات، معايرة جنزير التوقيت، وإعادة التجميع المتقن." },
    rightBadge: { en: "MERCEDES-AMG EXPERTISE", ar: "خبرة مرسيدس و AMG" },
    rightImg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "MERCEDES-BENZ & AMG POWERPLANTS", ar: "محركات مرسيدس-بنز و AMG" },
    rightDesc: { en: "Certified diagnostic mastery for German V6, V8, and V12 twin-turbo engines.", ar: "تشخيصات متقدمة وخبرة ميكانيكية متخصصة لمحركات مرسيدس الألمانية." }
  },
  "transmission-service": {
    index: "03",
    leftBadge: { en: "TRANSMISSION INTERNALS", ar: "أجزاء الجيربوكس الدقيقة" },
    leftImg: "/services/transmission-service.jpg",
    leftTitle: { en: "MECHATRONIC & GEARBOX CALIBRATION", ar: "معايرة الميكاترونيك والجيربوكس" },
    leftDesc: { en: "Pressure testing solenoids, torque converter overhauls, and pressurized fluid flushes.", ar: "فحص الضغط الهيدروليكي، وصيانة صمامات التحكم، واستبدال زيت القير الأصلي." },
    rightBadge: { en: "AUDI S-TRONIC & ZF", ar: "ناقلات حركة أودي و ZF" },
    rightImg: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "AUDI S-TRONIC & ZF DUAL-CLUTCH", ar: "ناقلات حركة أودي S-Tronic و ZF" },
    rightDesc: { en: "Factory-grade transmission diagnostics and adaptive shift tuning for Audi platforms.", ar: "تشخيص بمستوى المصنع ومعايرة استجابة التعشيق لسيارات أودي الفاخرة." }
  },
  "brake-repair": {
    index: "04",
    leftBadge: { en: "BRAKE HYDRAULICS", ar: "أنظمة الكبح والهيدروليك" },
    leftImg: "/services/brake-repair.jpg",
    leftTitle: { en: "HIGH-CARBON ROTORS & BRAKE CALIPERS", ar: "ديسكات عالية الكربون وكليبرات فرامل" },
    leftDesc: { en: "Laser runout measurements, low-dust ceramic pads, and pressurized ABS fluid flushes.", ar: "فحص استقامة الديسكات، وفحمات سيراميك قليلة الغبار، وغسيل سائل ABS." },
    rightBadge: { en: "PORSCHE STOPPING BENCHMARK", ar: "معايير مكابح بورش" },
    rightImg: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "PORSCHE STOPPING PERFORMANCE", ar: "أداء مكابح بورش الفائق" },
    rightDesc: { en: "Track-proven deceleration systems engineered for maximum braking stability.", ar: "معايير توقف فائقة مجربة على الحلبات لضمان أقصى درجات الأمان والثبات." }
  },
  "suspension-steering": {
    index: "05",
    leftBadge: { en: "3D LASER GEOMETRY", ar: "هندسة المحاذاة بالليزر" },
    leftImg: "/services/suspension-steering.jpg",
    leftTitle: { en: "AIRMATIC STRUTS & LASER ALIGNMENT", ar: "مساعدات هوائية وميزان ليزري" },
    leftDesc: { en: "Multi-axis 3D laser alignment and active pneumatic air suspension bag restorations.", ar: "ميزان ثلاثي الأبعاد بالليزر وإصلاح وسائد ومساعدات التعليق الهوائي النشط." },
    rightBadge: { en: "RANGE ROVER AIRMATIC", ar: "أنظمة رينج روفر الهوائية" },
    rightImg: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "RANGE ROVER & TERRAIN SUSPENSION", ar: "أنظمة تعليق رينج روفر المتطورة" },
    rightDesc: { en: "Specialized calibration for electronic height dampers and luxury active airmatic.", ar: "معايرة متخصصة لمخمدات الارتفاع الإلكترونية والأنظمة الهوائية الذكية." }
  },
  "electrical-electronics": {
    index: "06",
    leftBadge: { en: "ECU / SCN CODING", ar: "برمجة الكمبيوتر والشرائح" },
    leftImg: "/services/electrical-electronics.jpg",
    leftTitle: { en: "ECU CODING & CAN-BUS TELEMETRY", ar: "برمجة كمبيوتر السيارة وشبكات CAN" },
    leftDesc: { en: "Direct-server SCN coding, gateway synchronizations, and circuit diagnostics.", ar: "برمجة SCN المتصلة بالمصنع، ومزامنة البوابات، وإصلاح الدوائر الكهربائية." },
    rightBadge: { en: "BENTLEY ELECTRONICS", ar: "إلكترونيات بنتلي الفاخرة" },
    rightImg: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "BENTLEY ON-BOARD ELECTRONICS", ar: "الأنظمة الإلكترونية لسيارات بنتلي" },
    rightDesc: { en: "Troubleshooting complex network architectures across ultra-luxury British vehicles.", ar: "تشخيص الأعطال في الشبكات الإلكترونية المعقدة لأفخم السيارات البريطانية." }
  },
  "air-conditioning": {
    index: "07",
    leftBadge: { en: "CLIMATE RECOVERY STATION", ar: "محطة شحن التكييف الرقمية" },
    leftImg: "/services/air-conditioning.jpg",
    leftTitle: { en: "DIGITAL R-134A & R-1234YF RECOVERY", ar: "شحن وسحب غاز الفريون رقمياً" },
    leftDesc: { en: "Moisture evacuation, digital scale charging, UV dye detection, and compressor repair.", ar: "تفريغ الرطوبة، وشحن الغاز بموازين دقيقة، وكشف التسريب بالأشعة فوق البنفسجية." },
    rightBadge: { en: "ROLLS-ROYCE REFINEMENT", ar: "تبريد رولز رويس الفاخر" },
    rightImg: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "ROLLS-ROYCE CLIMATE CONTROL", ar: "نظام مناخ رولز رويس فائق الهدوء" },
    rightDesc: { en: "Delivering ice-cold, whisper-quiet multi-zone cabin cooling engineered for Oman heat.", ar: "تبريد فائق البرودة والهدوء لجميع مناطق المقصورة لمقاومة حرارة الصيف في عُمان." }
  },
  "tires-wheels": {
    index: "08",
    leftBadge: { en: "DYNAMIC HARMONIC BALANCE", ar: "ترصيص ديناميكي دقيق" },
    leftImg: "/services/tires-wheels.jpg",
    leftTitle: { en: "ROAD-FORCE DYNAMIC BALANCING", ar: "ترصيص ديناميكي وموازنة العجلات" },
    leftDesc: { en: "Harmonic road-force balancing and touchless mounting of low-profile UHP tires.", ar: "ترصيص متقدم بدون خدوش للجنوط لمنع الاهتزازات عند السرعات العالية." },
    rightBadge: { en: "ASTON MARTIN SPEED RATING", ar: "إطارات أستون مارتن الرياضية" },
    rightImg: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "ASTON MARTIN SPEED-RATED TIRES", ar: "إطارات أستون مارتن فائقة السرعة" },
    rightDesc: { en: "Fitting Pirelli P-Zero and Michelin Pilot Sport rubber on forged alloy wheels.", ar: "تركيب إطارات ميشلان وبيريلي فائقة التماسك على جنوط الألمنيوم الأصلية." }
  },
  "body-paint": {
    index: "09",
    leftBadge: { en: "DOWNDRAFT THERMAL BAKE", ar: "كبائن الرش الحراري" },
    leftImg: "/services/body-paint.jpg",
    leftTitle: { en: "DOWNDRAFT SPRAY BAKE BOOTH", ar: "كبائن رش حراري خالية من الأتربة" },
    leftDesc: { en: "Spectrophotometer computerized paint matching using Glasurit & Standox formulations.", ar: "مطابقة ألوان الطلاء بالكمبيوتر مع استخدام دهانات جلاسوريت وستاندوكس الأصلية." },
    rightBadge: { en: "FERRARI ROSSO STANDARDS", ar: "معايير طلاء فيراري" },
    rightImg: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "FERRARI SHOWROOM FINISH", ar: "معايير طلاء فيراري الخارقة" },
    rightDesc: { en: "High-gloss exotic paint repairs and micro-scratch clearcoat perfection.", ar: "إعادة طلاء وتلميع فائق الدقة يضاهي جودة وخلو عيوب طلاء المصنع." }
  },
  "detailing-protection": {
    index: "10",
    leftBadge: { en: "MACHINE PAINT CORRECTION", ar: "تصحيح الطلاء الآلي" },
    leftImg: "/services/detailing-protection.jpg",
    leftTitle: { en: "MULTI-STAGE PAINT CORRECTION", ar: "تصحيح الطلاء متعدد المراحل" },
    leftDesc: { en: "Rotary machine compounding eliminating swirl marks, holograms, and oxidation.", ar: "معالجة الخدوش السطحية والدوائر الضوئية واستعادة بريق الطلاء الأصلي." },
    rightBadge: { en: "MASERATI CERAMIC SHIELD", ar: "سيراميك مازيراتي الفاخر" },
    rightImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "MASERATI 9H CERAMIC SHIELD", ar: "درع النانو سيراميك لسيارات مازيراتي" },
    rightDesc: { en: "Long-lasting hydrophobic glass shields safeguarding sensitive Italian paint from UV and sand.", ar: "طبقات نانو سيراميك فائقة الصلابة تحمي الدهان الإيطالي من الخدوش وأشعة الشمس." }
  },
  "luxury-performance": {
    index: "11",
    leftBadge: { en: "DYNO & EXHAUST TUNING", ar: "تعديل العادم والداينو" },
    leftImg: "/services/luxury-performance.jpg",
    leftTitle: { en: "VALVE-CONTROLLED SPORTS EXHAUST", ar: "عوادم رياضية بصمامات إلكترونية" },
    leftDesc: { en: "Custom exhaust downpipes, high-flow catalytic converters, and dyno performance tuning.", ar: "أنظمة عادم متطورة، وفلاتر رياضية عالية التدفق، وبرمجة القوة الحصانية." },
    rightBadge: { en: "JAGUAR SUPERCHARGED", ar: "محركات جاجوار سوبرتشارج" },
    rightImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "SUPERCHARGED TRACK CALIBRATION", ar: "معايرة محركات السوبرتشارج الرياضية" },
    rightDesc: { en: "Track-tested cooling adaptations and dynamic stability calibrations for sports cars.", ar: "أنظمة تبريد مطورة ومعايرة الثبات الديناميكي للسيارات الرياضية الخارقة." }
  },
  "emergency-services": {
    index: "12",
    leftBadge: { en: "LOW-CLEARANCE HYDRAULICS", ar: "سطحات هيدروليكية منخفضة" },
    leftImg: "/services/emergency-services.jpg",
    leftTitle: { en: "HYDRAULIC FLATBED RECOVERY", ar: "سطحات هيدروليكية منخفضة السحب" },
    leftDesc: { en: "Zero-angle loading beds protecting lowered bumpers, air splitters, and exotic undercarriages.", ar: "سحب آمن بزاوية مسطحة لحماية الزوائد والمصدات المنخفضة للسيارات الفاخرة." },
    rightBadge: { en: "CADILLAC & AMERICAN FLEET", ar: "إنقاذ كاديلاك والسيارات الأمريكية" },
    rightImg: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "CADILLAC & PREMIUM FLEET ROADSIDE", ar: "إنقاذ فوري لكاديلاك والسيارات الأمريكية" },
    rightDesc: { en: "24/7 rapid dispatch across Muscat equipped for heavy luxury SUVs and battery triage.", ar: "استجابة فورية 24/7 في كافة أنحاء مسقط بمعدات متقدمة للسيارات الفارهة." }
  },
  "additional-services": {
    index: "13",
    leftBadge: { en: "BESPOKE INTERIOR CRAFT", ar: "حرفية التنجيد المخصصة" },
    leftImg: "/services/additional-services.jpg",
    leftTitle: { en: "BESPOKE LEATHER & NANO TINTING", ar: "تنجيد يدوي وعازل نانو سيراميك" },
    leftDesc: { en: "Handmade Italian leather re-trimming and 99% UV heat-blocking nano-ceramic window film.", ar: "تنجيد يدوي فاخر للمقاعد والمقود مع تركيب عوازل حرارية متطورة للنوافذ." },
    rightBadge: { en: "VOLVO SCANDINAVIAN REFINEMENT", ar: "أناقة فولفو الإسكندنافية" },
    rightImg: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    rightTitle: { en: "VOLVO SCANDINAVIAN LUXURY", ar: "أناقة فولفو الإسكندنافية المخصصة" },
    rightDesc: { en: "Apple CarPlay screens, ambient LED lighting, and bespoke interior appointments.", ar: "شاشات كاربلاي متطورة، وإضاءة محيطية، وتعديلات داخلية راقية مصممة حسب الطلب." }
  }
};

const getFeatureIcon = (category, index) => {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent, #e11d48)" }}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
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
                borderRadius: "50",
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
              <span style={{ color: "var(--accent, #e11d48)" }}>{media.index}</span> / 13
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
          
          {/* Image 1: Left (Informative Technical) */}
          <div style={{
            position: "relative",
            height: "380px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)"
          }}>
            <Image 
              src={media.leftImg} 
              alt={categoryData.title} 
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Image 2: Right (Premium Brand Vehicle) */}
          <div style={{
            position: "relative",
            height: "380px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)"
          }}>
            <Image 
              src={media.rightImg} 
              alt={categoryData.title} 
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
                maxHeight: expandedFeature === idx ? "300px" : "0px",
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
